import Image from "next/image";
import Link from "next/link";
import { coverOf, formatDate, type Post } from "../lib/posts";
import { Arrow } from "./ui";

export default function PostCard({ post, tone = "dark" }: { post: Post; tone?: "light" | "dark" }) {
  const light = tone === "light";
  return (
    <Link
      href={`/blog/${post.slug}/`}
      className={`zoom-media group flex flex-col overflow-hidden rounded-3xl border transition hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan ${
        light ? "border-navy/10 bg-white hover:border-teal" : "border-line/25 bg-white/[0.03] hover:border-cyan"
      }`}
    >
      <div className="relative aspect-[16/10]">
        <Image src={coverOf(post)} alt="" fill sizes="(min-width: 1024px) 400px, 100vw" className="object-cover" />
        <span className="absolute left-4 top-4 bg-navy/85 px-2.5 py-1 font-mono text-[0.7rem] uppercase tracking-[0.14em] text-white backdrop-blur">
          {post.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <p className={`font-mono text-xs ${light ? "text-navy/60" : "text-white/50"}`}>
          {formatDate(post.date)} · {post.readTime}
        </p>
        <h3 className={`mt-3 text-xl font-semibold leading-snug tracking-tight ${light ? "text-ink" : "text-white"}`}>
          {post.title}
        </h3>
        <p className={`mt-3 flex-1 text-sm leading-7 ${light ? "text-navy/70" : "text-white/65"}`}>{post.summary}</p>
        <span className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${light ? "text-teal" : "text-cyan"}`}>
          Read article <Arrow />
        </span>
      </div>
    </Link>
  );
}
