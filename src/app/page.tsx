import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PostCard from "./components/PostCard";
import { Arrow, buttonGhost, buttonPrimary, CtaBand, SectionHeader } from "./components/ui";
import { capabilities, industries } from "./lib/content";
import { getPosts } from "./lib/posts";

const pillars = [
  ["Security", "Protect assets, identities and data."],
  ["Integration", "Make every technology work together."],
  ["Intelligence", "AI-assisted detection and analysis."],
  ["Resilience", "Withstand, respond and recover."],
];

// One tile per service page; the detail lives on those pages.
const services = [
  {
    title: "Security Integration",
    text: "Turn disconnected security tools into one vendor-neutral, integrated architecture.",
    href: "/security-integration/",
    image: "/images/hero-integration.webp",
  },
  {
    title: "Managed Security",
    text: "SOC, SIEM, MDR, threat hunting and incident response — around the clock.",
    href: "/managed-security/",
    image: "/images/hero-managed.webp",
  },
  {
    title: "AI & Cyber Intelligence",
    text: "AI-assisted detection, analysis and response that augments human expertise.",
    href: "/ai-cyber-intelligence/",
    image: "/images/hero-ai.webp",
  },
  {
    title: "Cyber Resilience",
    text: "Anticipate, withstand, respond to and recover from cyber incidents.",
    href: "/cyber-resilience/",
    image: "/images/hero-resilience.webp",
  },
];

const differentiators = [
  ["Vendor-Neutral", "We focus on customer requirements rather than forcing a single technology stack."],
  ["Integration-First", "Our objective is not simply to deploy technologies—it is to make them work together."],
  ["AI-Enabled", "We incorporate AI where it can improve detection, analysis, automation and decision-making."],
  ["Outcome-Focused", "We measure success through security outcomes, operational efficiency and business resilience."],
  ["Lifecycle Approach", "From strategy and architecture through implementation, operations and optimization."],
  ["Human + Technology", "We combine experienced cybersecurity professionals with automation, analytics and AI."],
];

const pad = (n: number) => String(n + 1).padStart(2, "0");

export default async function Home() {
  const posts = (await getPosts()).slice(0, 3);

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative isolate flex min-h-[min(100svh,58rem)] items-end overflow-hidden bg-ink">
        <Image src="/images/hero-home.webp" alt="" fill priority sizes="100vw" className="-z-20 object-cover" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(95deg,var(--color-ink)_10%,rgba(1,11,51,0.8)_45%,rgba(2,24,97,0.15)_100%)]" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-linear-to-t from-ink to-transparent" />

        <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-36 sm:px-6 sm:pb-20 lg:px-8">
          <p className="eyebrow text-lavender">Cybersecurity · Integration · AI</p>
          <h1 className="mt-6 max-w-4xl text-balance text-[clamp(2.6rem,7vw,5.75rem)] font-semibold leading-[0.98] tracking-[-0.05em]">
            Engineering Cyber Resilience for the{" "}
            <span className="bg-linear-to-r from-lavender to-white bg-clip-text text-transparent">Digital Enterprise</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            SECORVIX brings together cybersecurity, system integration,
            intelligence and AI to help organizations secure, connect and
            continuously protect their digital environments.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/contact/" className={`group ${buttonPrimary}`}>
              Talk to a Security Expert <Arrow />
            </Link>
            <Link href="/solutions/" className={buttonGhost}>
              Explore Our Capabilities
            </Link>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md lg:grid-cols-4">
            {pillars.map(([title, text]) => (
              <div key={title} className="bg-ink/60 p-5 sm:p-6">
                <dt className="flex items-center gap-2 text-sm font-semibold text-white">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-signal" />
                  {title}
                </dt>
                <dd className="mt-2 text-sm leading-6 text-white/60">{text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Capabilities */}
      <section id="solutions" className="bg-ink py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              eyebrow="Our Cybersecurity Capabilities"
              title="Security Across Every Layer of the Enterprise"
              intro={<p>SECORVIX designs and integrates security capabilities across the entire digital environment.</p>}
            />
            <Link href="/solutions/" className={`group shrink-0 ${buttonGhost}`}>
              All Solutions <Arrow />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ title, text, image }, i) => (
              <article key={title} className="zoom-media group relative isolate flex min-h-[21rem] flex-col justify-end overflow-hidden rounded-3xl border border-white/10">
                <Image src={image} alt="" fill sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw" className="-z-20 object-cover" />
                <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-t from-ink via-ink/80 to-ink/10" />
                <div className="p-7">
                  <span className="text-xs font-semibold tracking-[0.2em] text-lavender">{pad(i)}</span>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How we help */}
      <section id="services" className="bg-mist py-20 text-ink sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            tone="light"
            eyebrow="How We Help"
            title="From Integration to Continuous Protection"
            intro={<p>Four connected services that take you from a fragmented security stack to a resilient, intelligent operating model.</p>}
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="zoom-media group flex flex-col overflow-hidden rounded-3xl border border-navy/10 bg-white transition hover:-translate-y-1 hover:shadow-[0_25px_60px_-35px_rgba(2,24,97,0.55)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy"
              >
                <div className="relative aspect-[4/3]">
                  <Image src={service.image} alt="" fill sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-xl font-semibold tracking-tight">{service.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-7 text-navy/70">{service.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-navy">
                    Learn more <Arrow />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="bg-white py-20 text-ink sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              tone="light"
              eyebrow="Industries"
              title="Cybersecurity Designed Around Your Industry"
              intro={<p>Different industries face different risks, regulations and operational challenges.</p>}
            />
            <Link href="/industries/" className="group inline-flex shrink-0 items-center gap-2 font-semibold text-navy">
              All Industries <Arrow />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, i) => (
              <Link
                key={industry.title}
                href="/industries/"
                className={`zoom-media group relative isolate flex min-h-56 flex-col justify-end overflow-hidden rounded-3xl p-6 text-white ${i === 0 ? "sm:col-span-2 lg:row-span-2 lg:min-h-full" : ""} ${i >= 5 ? "lg:col-span-2" : ""}`}
              >
                <Image src={industry.image} alt="" fill sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw" className="-z-20 object-cover" />
                <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-t from-ink/95 via-ink/50 to-transparent" />
                <h3 className={`font-semibold tracking-tight ${i === 0 ? "text-3xl" : "text-xl"}`}>{industry.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/75">{industry.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why SECORVIX */}
      <section className="bg-ink py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16 lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Why SECORVIX"
              title="What Makes SECORVIX Different?"
              intro={<p>More than a cybersecurity services company — an integration and transformation partner for the digital enterprise.</p>}
            />
            <Link href="/about/" className={`group mt-8 ${buttonGhost}`}>
              About SECORVIX <Arrow />
            </Link>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map(([title, text]) => (
              <div key={title} className="bg-ink p-6 transition hover:bg-navy/60">
                <span aria-hidden="true" className="block h-1 w-8 rounded-full bg-signal" />
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      {posts.length > 0 && (
        <section className="border-t border-white/10 bg-ink py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeader eyebrow="Blog" title="Latest from the SECORVIX Blog" />
              <Link href="/blog/" className={`group shrink-0 ${buttonGhost}`}>
                View all posts <Arrow />
              </Link>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        title="Ready to Strengthen Your Cybersecurity?"
        text="Whether you are modernizing your security architecture, moving to the cloud, building a SOC or exploring AI-powered cybersecurity, SECORVIX can help you design the right path forward."
      />

      <Footer />
    </main>
  );
}
