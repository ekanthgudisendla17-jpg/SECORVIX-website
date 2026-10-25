<?php
// Dashboard sign-in.
//   GET  auth.php?action=me
//   POST auth.php?action=login     { email, password }
//   POST auth.php?action=logout
//   POST auth.php?action=account   { name, email, currentPassword, newPassword }

declare(strict_types=1);
require __DIR__ . '/_bootstrap.php';

$action = $_GET['action'] ?? '';

if ($action === 'me') {
    require_method('GET');
    json_response([
        'user' => current_user(),
        'configured' => account()['password_hash'] !== '',
        'autoPublish' => auto_publish_enabled(),
    ]);
}

if ($action === 'login') {
    require_method('POST');
    if (($_SERVER['HTTP_X_REQUESTED_WITH'] ?? '') !== 'secorvix-admin') {
        fail('Forbidden.', 403);
    }
    if (rate_count('login', 900) >= 5) {
        fail('Too many failed attempts. Please wait 15 minutes and try again.', 429);
    }

    $in = request_json();
    $email = strtolower(str_field($in, 'email', 200));
    $password = isset($in['password']) && is_string($in['password']) ? $in['password'] : '';
    $acc = account();

    if ($acc['password_hash'] === '') {
        fail('The dashboard login has not been set up yet. Add the ADMIN_EMAIL and ADMIN_PASSWORD secrets in GitHub and redeploy.', 503);
    }
    if ($email !== strtolower($acc['email']) || !password_verify($password, $acc['password_hash'])) {
        rate_record('login', 900);
        fail('Incorrect email or password.', 401);
    }

    rate_clear('login');
    start_session();
    session_regenerate_id(true);
    $_SESSION['user'] = ['name' => $acc['name'], 'email' => $acc['email']];
    json_response(['user' => $_SESSION['user']]);
}

if ($action === 'logout') {
    require_method('POST');
    start_session();
    $_SESSION = [];
    session_destroy();
    json_response(['ok' => true]);
}

if ($action === 'account') {
    require_method('POST');
    require_admin();
    $in = request_json();
    $acc = account();

    $current = isset($in['currentPassword']) && is_string($in['currentPassword']) ? $in['currentPassword'] : '';
    if (!password_verify($current, $acc['password_hash'])) {
        fail('Your current password is incorrect.', 403);
    }

    $name = str_field($in, 'name', 80) ?: $acc['name'];
    $email = str_field($in, 'email', 200) ?: $acc['email'];
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        fail('Please enter a valid email address.');
    }

    $hash = $acc['password_hash'];
    $new = isset($in['newPassword']) && is_string($in['newPassword']) ? $in['newPassword'] : '';
    if ($new !== '') {
        if (strlen($new) < 10) {
            fail('Your new password must be at least 10 characters.');
        }
        $hash = password_hash($new, PASSWORD_DEFAULT);
    }

    with_lock(function () use ($name, $email, $hash) {
        write_json('account.json', ['name' => $name, 'email' => $email, 'password_hash' => $hash]);
    });
    $_SESSION['user'] = ['name' => $name, 'email' => $email];
    json_response(['user' => $_SESSION['user']]);
}

fail('Unknown action.', 404);
