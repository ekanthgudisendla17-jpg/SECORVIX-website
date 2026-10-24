import Image from "next/image";
import Link from "next/link";
import { formatDate, type Post } from "../lib/posts";
import { Arrow } from "./ui";

export default function PostCard({ post, tone = "dark" }: { post: Post; tone?: "light" | "dark" }) {
  const light = tone === "light";
  return (
    <Link
      href={`/blog/${post.slug}/`}
      className={`zoom-media group flex flex-col overflow-hidden rounded-3xl border transition hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lavender ${
        light ? "border-navy/10 bg-white shadow-[0_20px_60px_-30px_rgba(2,24,97,0.35)]" : "border-white/10 bg-white/[0.03]"
      }`}
    >
      <div className="relative aspect-[16/10]">
        <Image src={post.image} alt="" fill sizes="(min-width: 1024px) 400px, 100vw" className="object-cover" />
        <span className="absolute left-4 top-4 rounded-full bg-ink/80 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className={`text-xs ${light ? "text-navy/60" : "text-white/50"}`}>
          {formatDate(post.date)} · {post.readTime}
        </p>
        <h3 className={`mt-3 text-xl font-semibold leading-snug tracking-tight ${light ? "text-ink" : "text-white"}`}>
          {post.title}
        </h3>
        <p className={`mt-3 flex-1 text-sm leading-7 ${light ? "text-navy/70" : "text-white/65"}`}>{post.excerpt}</p>
        <span className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${light ? "text-navy" : "text-lavender"}`}>
          Read article <Arrow />
        </span>
      </div>
    </Link>
  );
}
