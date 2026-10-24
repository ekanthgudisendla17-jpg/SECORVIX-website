import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import PostCard from "../../components/PostCard";
import { CtaBand } from "../../components/ui";
import { formatDate, posts, type Block } from "../../lib/posts";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
      images: [post.image],
    },
  };
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case "h2":
      return (
        <h2 key={i} className="mt-14 text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          {block.text}
        </h2>
      );
    case "ul":
      return (
        <ul key={i} className="mt-6 space-y-3">
          {block.items.map((item) => (
            <li key={item} className="flex gap-4">
              <span aria-hidden="true" className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote key={i} className="my-12 border-l-4 border-lavender pl-6 text-2xl font-medium leading-snug tracking-tight text-navy">
          {block.text}
        </blockquote>
      );
    default:
      return (
        <p key={i} className="mt-6">
          {block.text}
        </p>
      );
  }
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <main>
      <Navbar />

      <article>
        <header className="relative isolate overflow-hidden bg-ink">
          <Image src={post.image} alt="" fill priority sizes="100vw" className="-z-20 object-cover opacity-45" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-t from-ink via-ink/70 to-ink/40" />
          <div className="mx-auto max-w-3xl px-5 pb-20 pt-36 sm:px-6 sm:pt-44">
            <Link href="/blog/" className="text-sm text-white/70 transition hover:text-white">
              ← All insights
            </Link>
            <p className="eyebrow mt-8 text-lavender">{post.category}</p>
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl">{post.title}</h1>
            <p className="mt-6 text-sm text-white/60">
              SECORVIX Team · {formatDate(post.date)} · {post.readTime}
            </p>
          </div>
        </header>

        <div className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 text-lg leading-8 text-navy/80 sm:px-6">
            <p className="text-xl leading-9 text-ink">{post.excerpt}</p>
            {post.body.map(renderBlock)}
          </div>
        </div>
      </article>

      <section className="bg-mist py-20 text-ink sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight">Continue reading</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {related.map((p) => (
              <PostCard key={p.slug} post={p} tone="light" />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Put these ideas into practice."
        text="Talk to SECORVIX about your security architecture, operations and resilience priorities."
      />

      <Footer />
    </main>
  );
}
