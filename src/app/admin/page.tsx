"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Card, inputClass, primaryButton, stateLabel, StatusPill, useAdmin } from "./AdminShell";
import { api, formatDateTime, type PostRow, type PostState, type Rebuild } from "./api";

type ListResponse = { posts: PostRow[]; autoPublish: boolean; lastBuild: string | null };

export default function PostsPage() {
  const { autoPublish } = useAdmin();
  const [data, setData] = useState<ListResponse | null>(null);
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [filter, setFilter] = useState<PostState | "all">("all");
  const [query, setQuery] = useState("");

  const load = () =>
    api<ListResponse>("posts.php?action=list")
      .then(setData)
      .catch((err: Error) => setError(err.message));

  useEffect(() => {
    load();
  }, []);

  const counts = useMemo(() => {
    const c = { all: 0, published: 0, scheduled: 0, draft: 0 };
    data?.posts.forEach((p) => {
      c.all++;
      c[p.state]++;
    });
    return c;
  }, [data]);

  const rows = (data?.posts ?? []).filter(
    (p) => (filter === "all" || p.state === filter) && p.title.toLowerCase().includes(query.trim().toLowerCase()),
  );

  const remove = async (post: PostRow) => {
    if (!window.confirm(`Delete “${post.title}”? This cannot be undone.`)) return;
    try {
      const res = await api<{ rebuild: Rebuild }>("posts.php?action=delete", { body: { id: post.id } });
      setNotice(res.rebuild?.message ?? "Post deleted.");
      load();
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Posts</h1>
          <p className="mt-1 text-sm text-black/55">
            Write, schedule and publish articles for secorvix-ai.com/blog.
            {data?.lastBuild && ` Website last updated ${formatDateTime(data.lastBuild)}.`}
          </p>
        </div>
        <Link href="/admin/edit/" className={primaryButton}>
          + New post
        </Link>
      </div>

      {!autoPublish && (
        <p className="mt-6 rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-800">
          Automatic publishing is not set up yet, so published posts appear on the website after the next deploy. Add the
          GH_DISPATCH_TOKEN secret in GitHub to publish instantly.
        </p>
      )}
      {notice && <p className="mt-6 rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800">{notice}</p>}
      {error && <p className="mt-6 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}

      <Card className="mt-6 !p-0">
        <div className="flex flex-col gap-3 border-b border-black/[0.07] p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-1">
            {(["all", "published", "scheduled", "draft"] as const).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setFilter(key)}
                className={`rounded-lg px-3 py-1.5 text-sm transition ${filter === key ? "bg-ink text-white" : "text-black/60 hover:bg-black/[0.04]"}`}
              >
                {key === "all" ? "All" : stateLabel[key]} <span className="opacity-60">{counts[key]}</span>
              </button>
            ))}
          </div>
          <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search posts" className={`${inputClass} sm:max-w-64`} />
        </div>

        {!data && !error && <p className="p-6 text-sm text-black/50">Loading posts…</p>}
        {data && rows.length === 0 && (
          <div className="p-10 text-center">
            <p className="font-medium">No posts here yet</p>
            <p className="mt-1 text-sm text-black/55">Click “New post” to write your first article.</p>
          </div>
        )}

        <ul className="divide-y divide-black/[0.06]">
          {rows.map((post) => (
            <li key={post.id} className="flex items-center gap-4 p-4">
              <div className="hidden h-14 w-20 shrink-0 overflow-hidden rounded-lg bg-black/[0.05] sm:block">
                {post.cover && (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={post.cover} alt="" className="h-full w-full object-cover" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <Link href={`/admin/edit/?id=${post.id}`} className="block truncate font-medium hover:underline">
                  {post.title || "Untitled"}
                </Link>
                <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-black/50">
                  <StatusPill state={post.state} />
                  {post.category && <span>{post.category}</span>}
                  <span>
                    {post.state === "draft" ? `Edited ${formatDateTime(post.updatedAt)}` : `${post.state === "scheduled" ? "Goes live" : "Published"} ${formatDateTime(post.publishAt)}`}
                  </span>
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-1 text-sm">
                <Link href={`/admin/edit/?id=${post.id}`} className="rounded-lg px-3 py-1.5 font-medium hover:bg-black/[0.04]">
                  Edit
                </Link>
                {post.state === "published" && (
                  <a href={`/blog/${post.slug}/`} target="_blank" rel="noopener" className="hidden rounded-lg px-3 py-1.5 text-black/60 hover:bg-black/[0.04] sm:inline">
                    View
                  </a>
                )}
                <button type="button" onClick={() => remove(post)} className="rounded-lg px-3 py-1.5 text-red-600 hover:bg-red-50">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
