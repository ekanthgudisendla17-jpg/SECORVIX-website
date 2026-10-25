"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Card, inputClass, primaryButton, secondaryButton, StatusPill, useAdmin } from "../AdminShell";
import { api, uploadImage, type AdminPost, type PostState, type Rebuild } from "../api";
import RichTextEditor from "./RichTextEditor";

type Form = {
  title: string;
  summary: string;
  html: string;
  category: string;
  tags: string;
  author: string;
  cover: string;
  slug: string;
  seoTitle: string;
  seoDescription: string;
  publishAt: string; // datetime-local value, in the browser's time zone
};

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 90);

const toLocalInput = (iso: string | null) => {
  if (!iso) return "";
  const d = new Date(iso);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
};

const fromPost = (p: AdminPost): Form => ({
  title: p.title,
  summary: p.summary,
  html: p.html,
  category: p.category,
  tags: p.tags.join(", "),
  author: p.author,
  cover: p.cover,
  slug: p.slug,
  seoTitle: p.seoTitle,
  seoDescription: p.seoDescription,
  publishAt: toLocalInput(p.publishAt),
});

const labelClass = "mb-1.5 block text-xs font-medium text-black/60";

export default function PostEditor() {
  const { user } = useAdmin();
  const router = useRouter();
  const params = useSearchParams();
  const [id, setId] = useState(params.get("id") ?? "");
  const [state, setState] = useState<PostState>("draft");
  const [form, setForm] = useState<Form | null>(id ? null : { title: "", summary: "", html: "", category: "", tags: "", author: user.name, cover: "", slug: "", seoTitle: "", seoDescription: "", publishAt: "" });
  const [slugTouched, setSlugTouched] = useState(Boolean(id));
  const [dirty, setDirty] = useState(false);
  const [busy, setBusy] = useState<"" | "publish" | "draft">("");
  const [message, setMessage] = useState<{ ok: boolean; text: string } | null>(null);
  const [loadError, setLoadError] = useState("");
  const [coverBusy, setCoverBusy] = useState(false);
  const [now, setNow] = useState(() => Date.now());
  const coverInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!id || form) return;
    api<{ post: AdminPost }>(`posts.php?action=get&id=${encodeURIComponent(id)}`)
      .then(({ post }) => {
        setForm(fromPost(post));
        setState(post.state);
      })
      .catch((err: Error) => setLoadError(err.message));
  }, [id, form]);

  useEffect(() => {
    if (!dirty) return;
    const warn = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, [dirty]);

  if (loadError) {
    return (
      <Card className="mx-auto max-w-lg text-center">
        <p className="font-semibold">{loadError}</p>
        <Link href="/admin/" className={`${secondaryButton} mt-4`}>
          Back to posts
        </Link>
      </Card>
    );
  }
  if (!form) return <p className="text-sm text-black/50">Loading post…</p>;

  const update = (patch: Partial<Form>) => {
    setForm((f) => (f ? { ...f, ...patch } : f));
    setDirty(true);
  };

  const onTitle = (title: string) => update(slugTouched ? { title } : { title, slug: slugify(title) });

  const scheduledFuture = form.publishAt !== "" && new Date(form.publishAt).getTime() > now;

  const save = async (status: "published" | "draft") => {
    setBusy(status === "published" ? "publish" : "draft");
    setMessage(null);
    try {
      const res = await api<{ post: AdminPost; rebuild: Rebuild }>("posts.php?action=save", {
        body: {
          ...form,
          id,
          status,
          publishAt: form.publishAt ? new Date(form.publishAt).toISOString() : "",
        },
      });
      setForm(fromPost(res.post));
      setState(res.post.state);
      setSlugTouched(true);
      setDirty(false);
      if (!id) {
        setId(res.post.id);
        router.replace(`/admin/edit/?id=${res.post.id}`);
      }

      const base =
        res.post.state === "draft" ? "Draft saved." : res.post.state === "scheduled" ? "Scheduled. The post will go live automatically at the publish date." : "Published.";
      setMessage({ ok: res.rebuild ? res.rebuild.triggered : true, text: res.rebuild ? `${base} ${res.rebuild.message}` : base });
    } catch (err) {
      setMessage({ ok: false, text: (err as Error).message });
    } finally {
      setBusy("");
    }
  };

  const remove = async () => {
    if (!id || !window.confirm("Delete this post? This cannot be undone.")) return;
    try {
      await api("posts.php?action=delete", { body: { id } });
      setDirty(false);
      router.push("/admin/");
    } catch (err) {
      setMessage({ ok: false, text: (err as Error).message });
    }
  };

  const uploadCover = async (file: File) => {
    setCoverBusy(true);
    try {
      update({ cover: await uploadImage(file) });
    } catch (err) {
      setMessage({ ok: false, text: (err as Error).message });
    } finally {
      setCoverBusy(false);
    }
  };

  const publishLabel = state === "published" ? "Update" : scheduledFuture ? "Schedule" : "Publish";
  const seoTitle = form.seoTitle || form.title || "Post title";
  const seoDescription = form.seoDescription || form.summary || "Add a short summary so search engines and link previews show something useful.";

  return (
    <div>
      <Link href="/admin/" className="text-sm font-medium underline-offset-4 hover:underline">
        ← All posts
      </Link>

      <div className="mt-4 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_330px]">
        {/* Writing area */}
        <Card className="!p-6 sm:!p-8">
          <label className="block">
            <span className="text-[11px] font-semibold tracking-[0.18em] text-black/50">TITLE</span>
            <textarea
              rows={1}
              value={form.title}
              onChange={(e) => onTitle(e.target.value)}
              placeholder="Post title"
              className="mt-2 block w-full resize-none bg-transparent text-3xl font-semibold leading-tight tracking-tight text-ink outline-none [field-sizing:content] placeholder:text-black/25 sm:text-4xl"
            />
          </label>

          <label className="mt-6 block">
            <span className="text-[11px] font-semibold tracking-[0.18em] text-black/50">
              SUMMARY <span className="font-normal normal-case tracking-normal text-black/40">(shown on the blog page and in Google)</span>
            </span>
            <textarea
              rows={2}
              value={form.summary}
              onChange={(e) => update({ summary: e.target.value })}
              placeholder="One or two sentences about the article"
              className="mt-2 block w-full resize-none bg-transparent text-base leading-7 text-black/75 outline-none [field-sizing:content] placeholder:text-black/30"
            />
          </label>

          <div className="mt-6 border-t border-black/[0.07] pt-6">
            <span className="text-[11px] font-semibold tracking-[0.18em] text-black/50">ARTICLE</span>
            <div className="mt-3">
              <RichTextEditor key={id || "new"} initialHtml={form.html} onChange={(html) => update({ html })} />
            </div>
          </div>
        </Card>

        {/* Sidebar */}
        <div className="space-y-4 lg:sticky lg:top-20">
          <Card title="Publish">
            <p className="flex items-center gap-2 text-sm text-black/60">
              Status: <StatusPill state={state} />
              {dirty && <span className="text-xs text-amber-700">Unsaved changes</span>}
            </p>
            <label className="mt-4 block">
              <span className={labelClass}>
                Publish date <span className="font-normal text-black/40">(leave empty for now; a future date schedules it)</span>
              </span>
              <input type="datetime-local" value={form.publishAt} 
                onChange={(e) => {
                  setNow(Date.now());
                  update({ publishAt: e.target.value });
                }}
                className={inputClass}
              />
            </label>
            <div className="mt-4 grid grid-cols-2 gap-2">
              <button type="button" onClick={() => save("published")} disabled={busy !== ""} className={primaryButton}>
                {busy === "publish" ? "Saving…" : publishLabel}
              </button>
              <button type="button" onClick={() => save("draft")} disabled={busy !== ""} className={secondaryButton}>
                {busy === "draft" ? "Saving…" : state === "draft" ? "Save draft" : "Unpublish"}
              </button>
            </div>
            {message && (
              <p className={`mt-3 rounded-lg px-3 py-2 text-xs leading-5 ${message.ok ? "bg-emerald-50 text-emerald-800" : "bg-red-50 text-red-700"}`}>{message.text}</p>
            )}
            {state === "published" && form.slug && (
              <a href={`/blog/${form.slug}/`} target="_blank" rel="noopener" className="mt-3 block text-xs font-medium text-navy underline-offset-4 hover:underline">
                View on website ↗
              </a>
            )}
            {id && (
              <button type="button" onClick={remove} className="mt-3 text-xs font-medium text-red-600 hover:underline">
                Delete post
              </button>
            )}
          </Card>

          <Card title="Cover image">
            {form.cover ? (
              <div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={form.cover} alt="" className="aspect-[16/10] w-full rounded-xl object-cover" />
                <div className="mt-3 flex gap-2">
                  <button type="button" onClick={() => coverInput.current?.click()} className={`${secondaryButton} flex-1`} disabled={coverBusy}>
                    {coverBusy ? "Uploading…" : "Replace"}
                  </button>
                  <button type="button" onClick={() => update({ cover: "" })} className={`${secondaryButton} flex-1`}>
                    Remove
                  </button>
                </div>
              </div>
            ) : (
              <button
                type="button"
                onClick={() => coverInput.current?.click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  const file = e.dataTransfer.files[0];
                  if (file) uploadCover(file);
                }}
                className="flex w-full flex-col items-center rounded-xl border border-dashed border-black/15 bg-[#fafaf8] px-4 py-8 text-center transition hover:border-navy"
              >
                <span className="text-sm font-semibold">{coverBusy ? "Uploading…" : "Upload cover image"}</span>
                <span className="mt-1 text-xs text-black/45">JPG, PNG or WebP · landscape works best</span>
              </button>
            )}
            <input
              ref={coverInput}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0];
                e.target.value = "";
                if (file) uploadCover(file);
              }}
            />
          </Card>

          <Card title="Organise">
            <div className="space-y-3">
              <label className="block">
                <span className={labelClass}>Category</span>
                <input value={form.category} onChange={(e) => update({ category: e.target.value })} placeholder="e.g. Cyber Resilience" className={inputClass} />
              </label>
              <label className="block">
                <span className={labelClass}>
                  Tags <span className="font-normal text-black/40">(comma separated)</span>
                </span>
                <input value={form.tags} onChange={(e) => update({ tags: e.target.value })} placeholder="zero trust, SOC" className={inputClass} />
              </label>
              <label className="block">
                <span className={labelClass}>Author</span>
                <input value={form.author} onChange={(e) => update({ author: e.target.value })} className={inputClass} />
              </label>
            </div>
          </Card>

          <Card title="URL & search engines">
            <div className="space-y-3">
              <label className="block">
                <span className={labelClass}>URL</span>
                <div className="flex items-center rounded-xl border border-black/10 bg-white focus-within:border-navy focus-within:ring-4 focus-within:ring-lavender/30">
                  <span className="pl-3.5 text-sm text-black/40">/blog/</span>
                  <input
                    value={form.slug}
                    onChange={(e) => {
                      setSlugTouched(true);
                      update({ slug: slugify(e.target.value) || e.target.value.toLowerCase() });
                    }}
                    placeholder="post-url"
                    className="min-w-0 flex-1 bg-transparent py-2.5 pr-3.5 text-sm outline-none"
                  />
                </div>
              </label>
              <label className="block">
                <span className={labelClass}>
                  SEO title <Counter value={form.seoTitle} max={60} />
                </span>
                <input value={form.seoTitle} onChange={(e) => update({ seoTitle: e.target.value })} placeholder="Defaults to the post title" className={inputClass} />
              </label>
              <label className="block">
                <span className={labelClass}>
                  SEO description <Counter value={form.seoDescription} max={160} />
                </span>
                <textarea
                  rows={3}
                  value={form.seoDescription}
                  onChange={(e) => update({ seoDescription: e.target.value })}
                  placeholder="Defaults to the summary"
                  className={`${inputClass} resize-y`}
                />
              </label>

              <div className="rounded-xl bg-[#fafaf8] p-3">
                <p className="truncate text-xs text-black/55">secorvix-ai.com › blog › {form.slug || "post-url"}</p>
                <p className="mt-1 line-clamp-1 text-base text-[#1a0dab]">{seoTitle} | SECORVIX</p>
                <p className="mt-1 line-clamp-2 text-xs leading-5 text-black/65">{seoDescription}</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

function Counter({ value, max }: { value: string; max: number }) {
  return <span className={`font-normal ${value.length > max ? "text-red-600" : "text-black/40"}`}>{value.length}/{max}</span>;
}
