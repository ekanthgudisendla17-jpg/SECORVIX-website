<?php
// Blog posts API.
//   GET  posts.php                 public: live posts (used by the site build)
//   GET  posts.php?action=due      public: has a scheduled post gone live since the last build?
//   GET  posts.php?action=list     admin: every post with its status
//   GET  posts.php?action=get&id=  admin: one post
//   POST posts.php?action=save     admin: create or update
//   POST posts.php?action=delete   admin: delete

declare(strict_types=1);
require __DIR__ . '/_bootstrap.php';

$action = $_GET['action'] ?? '';

if ($action === '') {
    require_method('GET');
    $posts = array_values(array_filter(load_posts(), 'is_live'));
    usort($posts, function ($a, $b) {
        return strcmp($b['publishAt'], $a['publishAt']);
    });

    // The deploy workflow identifies itself so scheduled posts can be detected later.
    $token = config()['build_token'];
    if ($token !== '' && hash_equals($token, $_SERVER['HTTP_X_BUILD_TOKEN'] ?? '')) {
        with_lock(function () {
            $state = read_json('state.json', []);
            $state['lastBuild'] = now_iso();
            write_json('state.json', $state);
        });
    }

    json_response(['posts' => array_map('public_post', $posts)]);
}

if ($action === 'due') {
    require_method('GET');
    $lastBuild = read_json('state.json', [])['lastBuild'] ?? null;
    $due = false;
    if ($lastBuild) {
        $since = strtotime($lastBuild);
        foreach (load_posts() as $post) {
            if (is_live($post) && strtotime($post['publishAt']) > $since) {
                $due = true;
                break;
            }
        }
    }
    json_response(['due' => $due]);
}

$user = require_admin();

if ($action === 'list') {
    require_method('GET');
    $posts = load_posts();
    usort($posts, function ($a, $b) {
        return strcmp($b['updatedAt'], $a['updatedAt']);
    });
    $rows = array_map(function ($p) {
        return [
            'id' => $p['id'],
            'title' => $p['title'],
            'slug' => $p['slug'],
            'category' => $p['category'],
            'cover' => $p['cover'],
            'state' => post_state($p),
            'publishAt' => $p['publishAt'],
            'updatedAt' => $p['updatedAt'],
        ];
    }, $posts);
    $state = read_json('state.json', []);
    json_response([
        'posts' => $rows,
        'autoPublish' => auto_publish_enabled(),
        'lastBuild' => $state['lastBuild'] ?? null,
    ]);
}

if ($action === 'get') {
    require_method('GET');
    $id = (string) ($_GET['id'] ?? '');
    foreach (load_posts() as $post) {
        if ($post['id'] === $id) {
            $post['state'] = post_state($post);
            json_response(['post' => $post]);
        }
    }
    fail('Post not found.', 404);
}

if ($action === 'save') {
    require_method('POST');
    $in = request_json();

    $status = ($in['status'] ?? '') === 'published' ? 'published' : 'draft';
    $title = str_field($in, 'title', 200);
    if ($title === '') {
        fail('Please add a title.');
    }

    $slug = slugify(str_field($in, 'slug', 120) ?: $title);
    if ($slug === '') {
        fail('Please add a URL for the post.');
    }

    $publishAt = null;
    $rawDate = str_field($in, 'publishAt', 40);
    if ($rawDate !== '') {
        $time = strtotime($rawDate);
        if ($time === false) {
            fail('The publish date is not valid.');
        }
        $publishAt = gmdate('Y-m-d\TH:i:s\Z', $time);
    }

    $tags = [];
    foreach (explode(',', str_field($in, 'tags', 500)) as $tag) {
        $tag = trim($tag);
        if ($tag !== '' && !in_array($tag, $tags, true)) {
            $tags[] = $tag;
        }
    }

    $cover = str_field($in, 'cover', 300);
    if ($cover !== '' && safe_url($cover, true) === null) {
        $cover = '';
    }

    $fields = [
        'slug' => $slug,
        'title' => $title,
        'summary' => str_field($in, 'summary', 400),
        'html' => sanitize_html(isset($in['html']) && is_string($in['html']) ? $in['html'] : ''),
        'category' => str_field($in, 'category', 80),
        'tags' => $tags,
        'author' => str_field($in, 'author', 80) ?: ($user['name'] ?? 'SECORVIX Team'),
        'cover' => $cover,
        'status' => $status,
        'seoTitle' => str_field($in, 'seoTitle', 120),
        'seoDescription' => str_field($in, 'seoDescription', 300),
    ];

    if ($status === 'published') {
        if ($fields['summary'] === '') {
            fail('Please add a summary before publishing. It is shown on the blog page and in Google.');
        }
        if (trim(strip_tags($fields['html'])) === '') {
            fail('Please write the article before publishing.');
        }
    }

    $id = str_field($in, 'id', 32);

    $result = with_lock(function () use ($id, $fields, $publishAt, $status) {
        $posts = load_posts();
        $index = null;
        foreach ($posts as $i => $p) {
            if ($p['id'] === $id) {
                $index = $i;
            } elseif ($p['slug'] === $fields['slug']) {
                fail('Another post already uses this URL. Please choose a different one.');
            }
        }
        if ($id !== '' && $index === null) {
            fail('Post not found. It may have been deleted.', 404);
        }

        $before = $index === null ? null : $posts[$index];
        $post = $before ?? ['id' => bin2hex(random_bytes(8)), 'createdAt' => now_iso()];
        $post = array_merge($post, $fields);
        $post['publishAt'] = $publishAt ?? ($status === 'published' ? ($before['publishAt'] ?? null) ?? now_iso() : null);
        $post['updatedAt'] = now_iso();

        if ($index === null) {
            $posts[] = $post;
        } else {
            $posts[$index] = $post;
        }
        write_json('posts.json', $posts);
        return [$before, $post];
    });

    [$before, $post] = $result;
    $rebuild = null;
    if (($before && is_live($before)) || is_live($post)) {
        $rebuild = trigger_rebuild();
    }

    $post['state'] = post_state($post);
    json_response(['post' => $post, 'rebuild' => $rebuild]);
}

if ($action === 'delete') {
    require_method('POST');
    $id = str_field(request_json(), 'id', 32);

    $removed = with_lock(function () use ($id) {
        $posts = load_posts();
        foreach ($posts as $i => $p) {
            if ($p['id'] === $id) {
                array_splice($posts, $i, 1);
                write_json('posts.json', $posts);
                return $p;
            }
        }
        fail('Post not found.', 404);
    });

    json_response(['deleted' => true, 'rebuild' => is_live($removed) ? trigger_rebuild() : null]);
}

fail('Unknown action.', 404);
