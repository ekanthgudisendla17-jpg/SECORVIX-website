import Image from "next/image";
import Link from "next/link";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PostCard from "./components/PostCard";
import { Arrow, buttonGhost, buttonPrimary, CtaBand, SectionHeader } from "./components/ui";
import { capabilities, industries, principles } from "./lib/content";
import { posts } from "./lib/posts";

const pillars = [
  ["Security", "Protect assets, identities and data."],
  ["Integration", "Make every technology work together."],
  ["Intelligence", "AI-assisted detection and analysis."],
  ["Resilience", "Withstand, respond and recover."],
];

const lifecycle = ["Discover", "Assess", "Design", "Integrate", "Implement", "Optimize", "Monitor", "Evolve"];

const managedServices = [
  ["SOC Services", "Centralized security monitoring and operations"],
  ["SIEM Services", "Security event collection, correlation and analytics"],
  ["Threat Detection", "Identify suspicious activity and emerging threats"],
  ["Threat Hunting", "Proactively search for indicators of compromise"],
  ["Incident Response", "Investigate and contain security incidents"],
  ["MDR", "Managed detection and response"],
  ["Security Automation", "Automate repetitive security operations"],
  ["Security Analytics", "Turn security data into actionable intelligence"],
];

const resilienceSteps = ["Anticipate", "Prevent", "Detect", "Respond", "Recover", "Improve"];

const zeroTrust = ["Identity", "Device", "Application", "Network", "Data", "Context"];

const differentiators = [
  ["Vendor-Neutral", "We focus on customer requirements rather than forcing a single technology stack."],
  ["Integration-First", "Our objective is not simply to deploy technologies—it is to make them work together."],
  ["AI-Enabled", "We incorporate AI where it can improve detection, analysis, automation and decision-making."],
  ["Outcome-Focused", "We measure success through security outcomes, operational efficiency and business resilience."],
  ["Lifecycle Approach", "From strategy and architecture through implementation, operations and optimization."],
  ["Human + Technology", "We combine experienced cybersecurity professionals with automation, analytics and AI."],
];

const approach = [
  ["Understand", "Understand the business, technology landscape, risks and security objectives."],
  ["Assess", "Identify vulnerabilities, gaps, dependencies and opportunities for improvement."],
  ["Architect", "Develop an integrated security architecture aligned with business requirements."],
  ["Integrate", "Bring technologies, platforms and processes together."],
  ["Implement", "Deploy, configure and operationalize the solution."],
  ["Operate", "Monitor, manage, detect and respond."],
  ["Optimize", "Continuously improve security effectiveness, efficiency and resilience."],
];

const pad = (n: number) => String(n + 1).padStart(2, "0");

export default function Home() {
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

      {/* Philosophy */}
      <section className="bg-mist py-20 text-ink sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            tone="light"
            eyebrow="The SECORVIX Philosophy"
            title="One Name. Six Cybersecurity Principles."
            intro={<p>SECORVIX is built around six fundamental principles that define our approach to enterprise cybersecurity.</p>}
          />

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map(([letter, title, text]) => (
              <div
                key={title}
                className="group relative overflow-hidden rounded-3xl border border-navy/10 bg-white p-8 shadow-[0_20px_60px_-35px_rgba(2,24,97,0.4)] transition hover:-translate-y-1 hover:border-lavender"
              >
                <span aria-hidden="true" className="absolute -right-3 -top-6 select-none text-[8rem] font-bold leading-none text-lavender/20 transition group-hover:text-lavender/35">
                  {letter}
                </span>
                <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-navy text-xl font-semibold text-white">{letter}</span>
                <h3 className="relative mt-6 text-xl font-semibold tracking-tight">{title}</h3>
                <p className="relative mt-3 leading-7 text-navy/70">{text}</p>
              </div>
            ))}
          </div>

          <p className="mt-14 max-w-4xl border-l-4 border-lavender pl-6 text-lg leading-8 text-navy sm:text-xl sm:leading-9">
            SECORVIX is more than a cybersecurity services company. We are an
            integration and transformation partner helping organizations build
            security architectures that are connected, intelligent and resilient.
          </p>
        </div>
      </section>

      {/* Capabilities */}
      <section id="solutions" className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader
              eyebrow="Our Cybersecurity Capabilities"
              title="Security Across Every Layer of the Enterprise"
              intro={
                <p>
                  Cybersecurity is no longer a single technology. It is an
                  interconnected ecosystem. SECORVIX designs and integrates
                  security capabilities across the entire digital environment.
                </p>
              }
            />
            <Link href="/solutions/" className={`group shrink-0 ${buttonGhost}`}>
              All Solutions <Arrow />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map(({ title, text, image }, i) => (
              <article key={title} className="zoom-media group relative isolate flex min-h-[26rem] flex-col justify-end overflow-hidden rounded-3xl border border-white/10">
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

      {/* Integration */}
      <section id="services" className="bg-white py-20 text-ink sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image src="/images/hero-integration.webp" alt="Close-up of an integrated circuit board" fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
            </div>
            <div className="absolute -bottom-8 right-4 max-w-xs rounded-2xl bg-navy p-6 text-white shadow-2xl sm:right-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-lavender">Integration engine</p>
              <p className="mt-3 text-sm leading-6 text-white/80">Security partners, cloud and AI — connected across network, identity and data.</p>
            </div>
          </div>

          <div>
            <SectionHeader
              tone="light"
              eyebrow="Security Integration"
              title="From Security Technologies to One Integrated Architecture"
              intro={
                <>
                  <p>
                    Enterprise environments are increasingly complex. Different
                    technologies, platforms, clouds, applications and security
                    controls often operate in isolation.
                  </p>
                  <p className="font-semibold text-ink">SECORVIX brings them together.</p>
                </>
              }
            />

            <ol className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {lifecycle.map((step, i) => (
                <li key={step} className="rounded-2xl border border-navy/10 bg-mist px-4 py-4">
                  <span className="text-xs font-semibold text-signal">{pad(i)}</span>
                  <p className="mt-1 font-semibold">{step}</p>
                </li>
              ))}
            </ol>

            <p className="mt-10 leading-8 text-navy/75">
              Our vendor-neutral approach allows us to select and integrate the
              technologies best aligned to each customer&apos;s security
              objectives, existing infrastructure and business requirements.
            </p>
            <Link href="/security-integration/" className="group mt-6 inline-flex items-center gap-2 font-semibold text-navy">
              Explore Security Integration <Arrow />
            </Link>
          </div>
        </div>
      </section>

      {/* AI & Cyber Intelligence */}
      <section className="relative isolate overflow-hidden bg-ink py-20 sm:py-28">
        <Image src="/images/hero-ai.webp" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-35" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,var(--color-ink)_35%,rgba(1,11,51,0.6))]" />

        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="AI & Cyber Intelligence"
            title="AI-Powered Cybersecurity. Human-Led Security."
            intro={
              <p>
                AI is transforming cybersecurity—but technology alone is not
                enough. SECORVIX combines AI capabilities, security
                intelligence, automation and human expertise to improve how
                organizations detect, understand and respond to threats.
              </p>
            }
          />

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {[
              ["AI-Assisted Detection", "Identify abnormal behavior and emerging threats faster."],
              ["Intelligent Analysis", "Correlate security events, threat intelligence and contextual information to prioritize what matters."],
              ["Automated Response", "Accelerate investigation, containment and remediation through intelligent automation."],
            ].map(([title, text], i) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
                <span className="text-sm font-semibold text-lavender">{pad(i)}</span>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight">{title}</h3>
                <p className="mt-3 leading-7 text-white/70">{text}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 max-w-3xl text-lg leading-8 text-white/75">
            We don&apos;t position AI as a replacement for cybersecurity
            professionals. We use AI to augment human expertise, accelerate
            decision-making and improve security outcomes.
          </p>
        </div>
      </section>

      {/* Managed Security */}
      <section className="bg-mist py-20 text-ink sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
            <div>
              <SectionHeader
                tone="light"
                eyebrow="Managed Security"
                title="From Prevention to Continuous Protection"
                intro={
                  <>
                    <p>Threats don&apos;t operate only during business hours. Your security shouldn&apos;t either.</p>
                    <p>SECORVIX helps organizations establish continuous security monitoring, detection, investigation and response.</p>
                  </>
                }
              />
              <div className="relative mt-10 aspect-[16/11] overflow-hidden rounded-[2rem]">
                <Image src="/images/hero-managed.webp" alt="Security engineer working in a data centre" fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
              </div>
            </div>

            <div className="grid content-start gap-4 sm:grid-cols-2">
              {managedServices.map(([title, text], i) => (
                <div key={title} className="rounded-2xl border border-navy/10 bg-white p-6 transition hover:border-lavender hover:shadow-[0_20px_50px_-30px_rgba(2,24,97,0.5)]">
                  <span className="text-xs font-semibold tracking-[0.2em] text-signal">{pad(i)}</span>
                  <h3 className="mt-3 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-navy/70">{text}</p>
                </div>
              ))}
              <Link
                href="/managed-security/"
                className="group flex items-center justify-between gap-4 rounded-2xl bg-navy p-6 font-semibold text-white transition hover:bg-ink sm:col-span-2"
              >
                Strengthen your security operations <Arrow />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resilience + Zero Trust */}
      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Cyber Resilience"
            title="Security Is Not Just About Stopping Attacks"
            intro={
              <p>
                A resilient organization must be able to anticipate, withstand,
                respond to and recover from cyber incidents. SECORVIX helps
                organizations build resilience across technology, processes and
                people.
              </p>
            }
          />

          <ol className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-6">
            {resilienceSteps.map((step, i) => (
              <li key={step} className="bg-ink p-6 transition hover:bg-navy">
                <span className="text-3xl font-semibold text-lavender">{pad(i)}</span>
                <p className="mt-3 font-semibold">{step}</p>
              </li>
            ))}
          </ol>

          <div className="mt-6 grid overflow-hidden rounded-3xl border border-white/10 lg:grid-cols-2">
            <div className="relative min-h-72">
              <Image src="/images/zero-trust.webp" alt="Padlock resting on a laptop keyboard" fill sizes="(min-width: 1024px) 640px, 100vw" className="object-cover" />
            </div>
            <div className="bg-navy p-8 sm:p-12">
              <p className="eyebrow text-lavender">Zero Trust</p>
              <h3 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">Trust Nothing. Verify Everything.</h3>
              <p className="mt-5 leading-8 text-white/75">
                Modern organizations have users, applications, workloads and
                data everywhere. We help organizations move beyond
                perimeter-based security toward identity-driven, continuously
                verified access models.
              </p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {zeroTrust.map((item) => (
                  <li key={item} className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/85">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="bg-white py-20 text-ink sm:py-28">
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

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, i) => (
              <Link
                key={industry.title}
                href="/industries/"
                className={`zoom-media group relative isolate flex min-h-64 flex-col justify-end overflow-hidden rounded-3xl p-6 text-white ${i === 0 ? "sm:col-span-2 lg:row-span-2 lg:min-h-full" : ""} ${i >= 5 ? "lg:col-span-2" : ""}`}
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
      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
            <div>
              <SectionHeader eyebrow="Why SECORVIX" title="What Makes SECORVIX Different?" />
              <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-[2rem]">
                <Image src="/images/why.webp" alt="Team members joining hands in agreement" fill sizes="(min-width: 1024px) 520px, 100vw" className="object-cover" />
              </div>
            </div>

            <div className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
              {differentiators.map(([title, text]) => (
                <div key={title} className="bg-ink p-7 transition hover:bg-navy/60">
                  <span aria-hidden="true" className="block h-1 w-8 rounded-full bg-signal" />
                  <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                  <p className="mt-2 text-sm leading-7 text-white/65">{text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-white/10 p-8 sm:p-10">
              <p className="eyebrow text-lavender">The Challenge</p>
              <h3 className="mt-5 text-3xl font-semibold tracking-tight">Complexity is the new cybersecurity reality.</h3>
              <p className="mt-4 leading-8 text-white/70">
                Enterprises face too many security technologies, fragmented
                operations, increasing threats, compliance pressure and a
                shortage of specialist expertise.
              </p>
            </div>
            <div className="rounded-3xl bg-linear-to-br from-navy to-[#2a2f9a] p-8 sm:p-10">
              <p className="eyebrow text-lavender">The SECORVIX Advantage</p>
              <h3 className="mt-5 text-3xl font-semibold tracking-tight">Connected security. Clearer outcomes.</h3>
              <p className="mt-4 leading-8 text-white/80">
                SECORVIX brings architecture, integration, intelligence,
                automation and managed security together to create a more
                connected and resilient security operating model.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-mist py-20 text-ink sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            tone="light"
            eyebrow="Our Approach"
            title="A Structured Path from Complexity to Cyber Confidence"
          />
          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map(([title, text], i) => {
              const last = i === approach.length - 1;
              return (
                <li key={title} className={`rounded-3xl border p-7 ${last ? "border-navy bg-navy text-white sm:col-span-2 lg:col-span-1" : "border-navy/10 bg-white"}`}>
                  <span className={`text-4xl font-semibold tracking-tight ${last ? "text-lavender" : "text-navy/25"}`}>{pad(i)}</span>
                  <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                  <p className={`mt-2 text-sm leading-7 ${last ? "text-white/75" : "text-navy/70"}`}>{text}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Insights */}
      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeader eyebrow="Insights" title="Latest from SECORVIX" />
            <Link href="/blog/" className={`group shrink-0 ${buttonGhost}`}>
              View all insights <Arrow />
            </Link>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to Strengthen Your Cybersecurity?"
        text="Whether you are modernizing your security architecture, moving to the cloud, building a SOC or exploring AI-powered cybersecurity, SECORVIX can help you design the right path forward."
      />

      <Footer />
    </main>
  );
}
