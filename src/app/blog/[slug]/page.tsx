import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import PostCard from "../../components/PostCard";
import { CtaBand } from "../../components/ui";
import { coverOf, formatDate, getPosts } from "../../lib/posts";

export const dynamicParams = false;

// A static export needs at least one path, even if every post has been removed.
const EMPTY = "no-posts";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.length ? posts.map((post) => ({ slug: post.slug })) : [{ slug: EMPTY }];
}

async function findPost(slug: string) {
  return (await getPosts()).find((p) => p.slug === slug);
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const post = await findPost((await params).slug);
  if (!post) return { robots: { index: false } };

  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.summary;
  return {
    title: { absolute: `${title} | SECORVIX` },
    description,
    keywords: post.tags.length ? post.tags : undefined,
    authors: [{ name: post.author }],
    alternates: { canonical: `/blog/${post.slug}/` },
    openGraph: {
      type: "article",
      title,
      description,
      publishedTime: post.date,
      modifiedTime: post.updated,
      authors: [post.author],
      tags: post.tags,
      images: [coverOf(post)],
    },
  };
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const post = await findPost((await params).slug);
  if (!post) notFound();

  const related = (await getPosts()).filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <main>
      <Navbar />

      <article>
        <header className="relative isolate overflow-hidden bg-ink">
          <Image src={coverOf(post)} alt="" fill priority sizes="100vw" className="-z-20 object-cover opacity-45" />
          <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-t from-ink via-ink/70 to-ink/40" />
          <div className="mx-auto max-w-3xl px-5 pb-20 pt-36 sm:px-6 sm:pt-44">
            <Link href="/blog/" className="text-sm text-white/70 transition hover:text-white">
              ← All posts
            </Link>
            {post.category && <p className="eyebrow mt-8 text-lavender">{post.category}</p>}
            <h1 className="mt-5 text-balance text-4xl font-semibold leading-[1.08] tracking-[-0.04em] sm:text-5xl">{post.title}</h1>
            <p className="mt-6 text-sm text-white/60">
              {post.author} · {formatDate(post.date)} · {post.readTime}
            </p>
          </div>
        </header>

        <div className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-3xl px-5 sm:px-6">
            {post.summary && <p className="text-xl leading-9 text-ink">{post.summary}</p>}
            {/* Article HTML is sanitised by the PHP API when it is saved. */}
            <div className="article-body mt-6" dangerouslySetInnerHTML={{ __html: post.html }} />

            {post.tags.length > 0 && (
              <ul className="mt-14 flex flex-wrap gap-2 border-t border-navy/10 pt-8">
                {post.tags.map((tag) => (
                  <li key={tag} className="rounded-full bg-mist px-4 py-1.5 text-sm text-navy">
                    #{tag}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </article>

      {related.length > 0 && (
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
      )}

      <CtaBand
        title="Put these ideas into practice."
        text="Talk to SECORVIX about your security architecture, operations and resilience priorities."
      />

      <Footer />
    </main>
  );
}
