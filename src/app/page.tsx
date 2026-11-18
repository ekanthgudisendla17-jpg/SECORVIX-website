import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PostCard from "./components/PostCard";
import ServicesMap from "./components/ServicesMap";
import { Arrow, buttonGhost, buttonPrimary, CtaBand, SectionHeader } from "./components/ui";
import { capabilities, industries } from "./lib/content";
import { getPosts } from "./lib/posts";

const pillars = [
  ["Security", "Protect assets, identities and data."],
  ["Intelligence", "AI-assisted detection and analysis."],
  ["Resilience", "Withstand, respond and recover."],
  ["Integration", "Make every technology work together."],
];

// One tile per service page; the detail lives on those pages.
const services = [
  {
    title: "Security Integration",
    text: "Turn disconnected security tools into one vendor-neutral, integrated architecture.",
    href: "/security-integration/",
  },
  {
    title: "Managed Security",
    text: "SOC, SIEM, MDR, threat hunting and incident response — around the clock.",
    href: "/managed-security/",
  },
  {
    title: "AI & Cyber Intelligence",
    text: "AI-assisted detection, analysis and response that augments human expertise.",
    href: "/ai-cyber-intelligence/",
  },
  {
    title: "Cyber Resilience",
    text: "Anticipate, withstand, respond to and recover from cyber incidents.",
    href: "/cyber-resilience/",
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
      <section className="relative isolate flex min-h-[min(100svh,58rem)] items-end overflow-hidden bg-abyss">
        {/* Hero stage: darkest navy base, bright-navy + cyan glow behind the diagram, stronger grid */}
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(55%_60%_at_72%_48%,rgba(17,45,132,0.95),transparent_72%),radial-gradient(28%_32%_at_72%_58%,rgba(34,211,238,0.16),transparent_70%),linear-gradient(180deg,var(--color-abyss),#010c33)]" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(146_146_240/0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgb(146_146_240/0.14)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(85%_80%_at_60%_45%,black,transparent_100%)]" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-cyan to-transparent" />

        <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-36 sm:px-6 sm:pb-20 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-10">
          <div>
          <p className="eyebrow text-lavender">Cybersecurity · Integration · AI</p>
          <h1 className="mt-6 max-w-4xl text-balance text-[clamp(2.6rem,7vw,5.75rem)] font-semibold leading-[0.98] tracking-[-0.055em] lg:text-[clamp(2.6rem,3.9vw,4rem)]">
            Engineering Cyber Resilience for the{" "}
            <span className="text-cyan">Digital Enterprise</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            SECORVIX brings together cybersecurity, system integration,
            intelligence and AI to help organizations secure, connect and
            continuously protect their digital environments.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
            <Link href="/contact/" className={`group whitespace-nowrap ${buttonPrimary}`}>
              Talk to a Security Expert <Arrow />
            </Link>
            <Link href="/solutions/" className={`whitespace-nowrap ${buttonGhost}`}>
              Explore Our Capabilities
            </Link>
          </div>
          </div>

          <div className="-mx-3 sm:mx-0">
            <ServicesMap className="mx-auto w-full max-w-3xl lg:max-w-none" />
            <p className="mt-3 text-center text-sm text-white/55">
              <span className="sm:hidden">Tap</span><span className="hidden sm:inline">Select</span> any service or capability to explore it.
            </p>
          </div>
          </div>

          <dl className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line/30 bg-line/30 lg:grid-cols-4">
            {pillars.map(([title, text]) => (
              <div key={title} className="bg-abyss/90 p-5 sm:p-6">
                <dt className="flex items-center gap-2 text-sm font-semibold text-white">
                  <span aria-hidden="true" className="h-1.5 w-1.5 bg-signal" />
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
              <article key={title} className="zoom-media group relative isolate flex min-h-[21rem] flex-col justify-end overflow-hidden rounded-3xl border border-line/25 transition hover:border-cyan/70">
                <Image src={image} alt="" fill sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw" className="-z-20 object-cover" />
                <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-t from-ink via-ink/80 to-ink/10" />
                <div className="p-7">
                  <span className="mono-label text-cyan">{pad(i)}</span>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How we help */}
      <section id="services" className="relative isolate bg-navy py-20 sm:py-24">
        <div aria-hidden="true" className="tech-grid absolute inset-0 -z-10" />
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="How We Help"
            title={<>From Integration to <span className="text-cyan">Continuous Protection</span></>}
            intro={<p>Four connected services that take you from a fragmented security stack to a resilient, intelligent operating model.</p>}
          />

          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line/40 bg-line/40 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative flex flex-col bg-abyss/70 p-7 transition hover:bg-ink focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-cyan"
              >
                <span aria-hidden="true" className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-cyan transition-transform duration-500 group-hover:scale-x-100" />
                <span className="mono-label text-cyan">{pad(i)}</span>
                <h3 className="mt-8 text-xl font-semibold tracking-tight">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-white/70">{service.text}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-lavender group-hover:text-cyan">
                  Learn more <Arrow />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="bg-mist py-20 text-ink sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              tone="light"
              eyebrow="Industries"
              title="Cybersecurity Designed Around Your Industry"
              intro={<p>Different industries face different risks, regulations and operational challenges.</p>}
            />
            <Link href="/industries/" className="group inline-flex shrink-0 items-center gap-2 font-semibold text-teal">
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
                <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-t from-navy/95 via-navy/50 to-transparent" />
                <h3 className={`font-semibold tracking-tight ${i === 0 ? "text-3xl" : "text-xl"}`}>{industry.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/75">{industry.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why SECORVIX */}
      <section className="relative isolate bg-ink py-20 sm:py-24">
        <div aria-hidden="true" className="tech-grid absolute inset-0 -z-10" />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16 lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Why SECORVIX"
              title={<>What Makes <span className="text-cyan">SECORVIX</span> Different?</>}
              intro={<p>More than a cybersecurity services company — an integration and transformation partner for the digital enterprise.</p>}
            />
            <Link href="/about/" className={`group mt-8 ${buttonGhost}`}>
              About SECORVIX <Arrow />
            </Link>
          </div>

          <div className="grid gap-px overflow-hidden rounded-3xl border border-line/30 bg-line/30 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map(([title, text]) => (
              <div key={title} className="bg-navy p-6 transition hover:bg-ink">
                <span aria-hidden="true" className="block h-1.5 w-1.5 bg-signal" />
                <h3 className="mt-4 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      {posts.length > 0 && (
        <section className="bg-mist py-20 text-ink sm:py-24">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeader tone="light" eyebrow="Blog" title="Latest from the SECORVIX Blog" />
              <Link href="/blog/" className="group inline-flex shrink-0 items-center gap-2 font-semibold text-teal">
                View all posts <Arrow />
              </Link>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} tone="light" />
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
