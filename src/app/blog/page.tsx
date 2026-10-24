import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";
import { Arrow, PageHero } from "../components/ui";
import { formatDate, posts } from "../lib/posts";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Cybersecurity insights from SECORVIX on security integration, AI-driven security operations, Zero Trust and cyber resilience.",
  alternates: { canonical: "/blog/" },
};

export default function BlogPage() {
  const [featured, ...others] = posts;

  return (
    <main>
      <Navbar />

      <PageHero
        eyebrow="SECORVIX Insights"
        title="Perspectives on Building a Secure Digital Enterprise"
        intro={<p>Practical thinking on security architecture, integration, AI-driven operations and cyber resilience from the SECORVIX team.</p>}
        image="/images/hero-blog.webp"
      />

      <section className="bg-mist py-20 text-ink sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          {/* Featured */}
          <Link
            href={`/blog/${featured.slug}/`}
            className="zoom-media group grid overflow-hidden rounded-[2rem] bg-white shadow-[0_30px_80px_-40px_rgba(2,24,97,0.45)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy lg:grid-cols-2"
          >
            <div className="relative aspect-[16/10] lg:aspect-auto lg:min-h-[420px]">
              <Image src={featured.image} alt="" fill sizes="(min-width: 1024px) 640px, 100vw" className="object-cover" />
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <p className="eyebrow text-navy">Featured · {featured.category}</p>
              <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">{featured.title}</h2>
              <p className="mt-5 leading-8 text-navy/70">{featured.excerpt}</p>
              <p className="mt-6 text-sm text-navy/55">
                {formatDate(featured.date)} · {featured.readTime}
              </p>
              <span className="mt-8 inline-flex items-center gap-2 font-semibold text-navy">
                Read article <Arrow />
              </span>
            </div>
          </Link>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {others.map((post) => (
              <PostCard key={post.slug} post={post} tone="light" />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
