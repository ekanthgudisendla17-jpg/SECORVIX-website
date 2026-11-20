import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Arrow, CtaBand, SectionHeader, buttonGhost, buttonPrimary } from "../components/ui";
import { capabilities, slugify } from "../lib/content";
import {
  appSecTesting,
  attackChain,
  cloudCoverage,
  cloudFoundations,
  detectionStages,
  domains,
  operatingModels,
  technologyCount,
  type Domain,
  type Technology,
} from "../lib/technologies";

export const metadata: Metadata = {
  title: "Security Solutions & Technologies",
  description:
    "Firewalls, EDR and XDR, IAM, MFA and PAM, SIEM and SOAR, DLP, cloud, application and API security, backup and recovery — the security technologies SECORVIX designs, integrates and operates.",
  alternates: { canonical: "/security-technologies/" },
};

const pad = (n: number) => String(n + 1).padStart(2, "0");

function DomainIcon({ name, className = "h-6 w-6" }: { name: Domain["icon"]; className?: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} {...common}>
      {name === "network" && (
        <>
          <rect x="3" y="3" width="6" height="5" rx="1" />
          <rect x="15" y="3" width="6" height="5" rx="1" />
          <rect x="9" y="16" width="6" height="5" rx="1" />
          <path d="M6 8v3h12V8M12 11v5" />
        </>
      )}
      {name === "cloud" && (
        <>
          <path d="M7 18a4 4 0 0 1-.6-7.95A5.5 5.5 0 0 1 17 8.5a4.5 4.5 0 0 1 .5 9H7Z" />
          <path d="M10 13.5l1.6 1.6L15 11.7" />
        </>
      )}
      {name === "identity" && (
        <>
          <circle cx="9" cy="8" r="3.5" />
          <path d="M3 20c.6-3.4 3-5.5 6-5.5 1.4 0 2.6.4 3.6 1.1" />
          <path d="M15 17.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0ZM17.5 15V12.5h3" />
        </>
      )}
      {name === "endpoint" && (
        <>
          <rect x="3" y="4" width="18" height="12" rx="1.5" />
          <path d="M8 20h8M12 16v4" />
          <path d="M12 7l3 1.2v2.3c0 1.6-1.3 2.8-3 3.5-1.7-.7-3-1.9-3-3.5V8.2L12 7Z" />
        </>
      )}
      {name === "data" && (
        <>
          <ellipse cx="12" cy="5.5" rx="7" ry="2.5" />
          <path d="M5 5.5v13c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5v-13" />
          <path d="M5 12c0 1.4 3.1 2.5 7 2.5s7-1.1 7-2.5" />
        </>
      )}
      {name === "operations" && (
        <>
          <circle cx="12" cy="12" r="8.5" />
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12 12l6-6" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
        </>
      )}
    </svg>
  );
}

function TechCard({ tech, light }: { tech: Technology; light: boolean }) {
  return (
    <article
      className={`flex flex-col rounded-2xl border p-6 transition sm:p-7 ${
        light ? "border-navy/10 bg-white hover:border-teal" : "border-line/25 bg-navy/60 hover:border-cyan/70"
      }`}
    >
      <span
        className={`mono-label self-start rounded-md border px-2 py-1 ${
          light ? "border-teal/30 bg-teal/5 text-teal" : "border-cyan/40 bg-cyan/10 text-cyan"
        }`}
      >
        {tech.code}
      </span>
      <h3 className="mt-5 text-xl font-semibold tracking-tight">{tech.name}</h3>
      <p className={`mt-3 flex-1 text-[0.95rem] leading-7 ${light ? "text-navy/75" : "text-white/70"}`}>{tech.what}</p>
      <div className={`mt-6 border-t pt-4 ${light ? "border-navy/10" : "border-line/20"}`}>
        <p className={`mono-label ${light ? "text-navy/50" : "text-lavender/70"}`}>In practice</p>
        <p className={`mt-2 text-sm leading-6 ${light ? "text-navy/80" : "text-white/80"}`}>{tech.example}</p>
      </div>
    </article>
  );
}

/** Defense-in-depth visual: protective layers, with security operations watching across all of them. */
function LayersDiagram() {
  const layers = domains.filter((d) => d.icon !== "operations");
  const ops = domains.find((d) => d.icon === "operations");
  return (
    <figure aria-label="SECORVIX security layers" className="relative">
      <div className="grid grid-cols-[1fr_auto] gap-3">
        <ol className="space-y-2.5">
          {layers.map((d, i) => (
            <li key={d.id}>
              <a
                href={`#${d.id}`}
                className="group flex items-center gap-4 rounded-xl border border-line/30 bg-navy/70 px-4 py-3 transition hover:border-cyan"
                style={{ marginLeft: `${i * 0.6}rem` }}
              >
                <DomainIcon name={d.icon} className="h-5 w-5 shrink-0 text-cyan" />
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-semibold">{d.title}</span>
                  <span className="mt-1 block truncate font-mono text-[0.68rem] tracking-[0.08em] text-lavender/80">
                    {d.items.map((t) => t.code).join(" · ")}
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ol>
        {ops && (
          <a
            href={`#${ops.id}`}
            className="relative flex w-14 flex-col items-center justify-between overflow-hidden rounded-xl border border-cyan/50 bg-cyan/10 py-4 transition hover:bg-cyan/20 sm:w-16"
          >
            <DomainIcon name="operations" className="h-5 w-5 text-cyan" />
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-cyan [writing-mode:vertical-rl]">
              SIEM · SOAR · SOC
            </span>
            <span aria-hidden="true" className="absolute inset-y-6 left-1/2 -z-10 w-px bg-linear-to-b from-transparent via-cyan to-transparent" />
          </a>
        )}
      </div>
      <figcaption className="mt-4 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-lavender/70">
        Layered protection · continuous detection and response
      </figcaption>
    </figure>
  );
}

export default function SecurityTechnologiesPage() {
  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-abyss">
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(50%_60%_at_78%_50%,rgba(17,45,132,0.95),transparent_72%),radial-gradient(25%_30%_at_80%_55%,rgba(34,211,238,0.12),transparent_70%)]" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgb(146_146_240/0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgb(146_146_240/0.12)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(85%_80%_at_60%_45%,black,transparent_100%)]" />
        <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-cyan to-transparent" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-36 sm:px-6 sm:pb-24 sm:pt-44 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28">
          <div>
            <p className="eyebrow text-lavender">Solutions &amp; Technologies</p>
            <h1 className="mt-6 text-balance text-[clamp(2.4rem,5.6vw,4.5rem)] font-semibold leading-[1] tracking-[-0.05em]">
              Every Security Layer, <span className="text-cyan">Designed to Work as One</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
              From the firewall at the edge to identity, endpoints, cloud, data
              and the SOC watching over all of it — SECORVIX designs,
              integrates and operates the technologies that protect the modern
              enterprise, choosing what fits your environment rather than
              pushing a single product.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link href="/contact/" className={`group whitespace-nowrap ${buttonPrimary}`}>
                Talk to a Security Expert <Arrow />
              </Link>
              <a href="#network-security" className={`whitespace-nowrap ${buttonGhost}`}>
                Explore the Technologies
              </a>
            </div>
            <dl className="mt-12 grid max-w-xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-line/30 bg-line/30">
              {[
                [String(technologyCount), "Technologies"],
                [String(domains.length), "Security domains"],
                ["24×7", "SOC operations"],
              ].map(([value, label]) => (
                <div key={label} className="bg-abyss/90 p-4 sm:p-5">
                  <dt className="font-mono text-[0.6rem] uppercase tracking-[0.06em] text-lavender/70 sm:text-xs sm:tracking-[0.16em]">{label}</dt>
                  <dd className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <LayersDiagram />
        </div>
      </section>

      {/* Domain index */}
      <nav aria-label="Security domains" className="border-b border-line/20 bg-navy">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-line/20 sm:grid-cols-3 lg:grid-cols-6">
          {domains.map((d) => (
            <a key={d.id} href={`#${d.id}`} className="group flex items-center gap-3 bg-navy px-5 py-5 transition hover:bg-ink">
              <DomainIcon name={d.icon} className="h-5 w-5 shrink-0 text-cyan" />
              <span className="min-w-0">
                <span className="block text-sm font-semibold leading-tight">{d.title}</span>
                <span className="mt-1 block font-mono text-[0.68rem] tracking-[0.1em] text-lavender/70">{d.items.length} technologies</span>
              </span>
            </a>
          ))}
        </div>
      </nav>

      {/* Domains */}
      {domains.map((d, i) => {
        const light = i % 2 === 0;
        const image = capabilities.find((c) => c.title === d.capability)?.image;
        return (
          <section
            key={d.id}
            id={d.id}
            className={`scroll-mt-24 py-20 sm:py-24 ${light ? "bg-mist text-ink" : "relative isolate bg-ink"}`}
          >
            {!light && <div aria-hidden="true" className="tech-grid absolute inset-0 -z-10" />}
            <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
              <div className="grid gap-10 lg:grid-cols-[1fr_0.85fr] lg:items-center">
                <div>
                  <div className="flex items-center gap-4">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-xl border ${
                        light ? "border-teal/30 bg-white text-teal" : "border-cyan/40 bg-cyan/10 text-cyan"
                      }`}
                    >
                      <DomainIcon name={d.icon} />
                    </span>
                    <span className={`mono-label ${light ? "text-teal" : "text-lavender"}`}>
                      Domain {pad(i)} / {pad(domains.length - 1)}
                    </span>
                  </div>
                  <h2 className="mt-6 text-4xl font-semibold leading-[1.04] tracking-[-0.045em] sm:text-5xl">{d.title}</h2>
                  <p className={`mt-5 text-lg leading-8 ${light ? "text-navy/75" : "text-white/70"}`}>{d.summary}</p>
                  <Link
                    href={`/solutions/#${slugify(d.capability)}`}
                    className={`group mt-6 inline-flex items-center gap-2 font-semibold ${light ? "text-teal" : "text-cyan"}`}
                  >
                    Our approach <Arrow />
                  </Link>
                </div>
                {image && (
                  <div className={`zoom-media relative aspect-[16/9] overflow-hidden rounded-3xl border ${light ? "border-navy/10" : "border-line/30"}`}>
                    <Image src={image} alt="" fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
                    <div aria-hidden="true" className="absolute inset-0 bg-linear-to-tr from-navy/50 via-transparent to-transparent" />
                    <span className="mono-label absolute bottom-4 left-4 rounded-md bg-navy/80 px-2.5 py-1 text-white backdrop-blur">
                      {d.items.map((t) => t.code).join(" · ")}
                    </span>
                  </div>
                )}
              </div>
              <div className={`mt-12 grid gap-4 sm:grid-cols-2 ${d.items.length % 3 === 0 || d.items.length > 4 ? "lg:grid-cols-3" : "lg:grid-cols-4"}`}>
                {d.items.map((t) => (
                  <TechCard key={t.code} tech={t} light={light} />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* Zero Trust + SOC */}
      <section className="bg-navy py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Strategy & Operations"
            title={<>Two things you can&apos;t buy as <span className="text-cyan">a single product</span></>}
            intro={<p>Zero Trust is an architecture and a SOC is an operating model. Both depend on the technologies above being integrated and run well.</p>}
          />
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {operatingModels.map((m) => (
              <article key={m.code} className="zoom-media relative flex flex-col overflow-hidden rounded-3xl border border-line/30 bg-abyss/60">
                <div className="relative aspect-[16/7]">
                  <Image
                    src={m.code === "SOC" ? "/images/hero-managed.webp" : "/images/zero-trust.webp"}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 620px, 100vw"
                    className="object-cover"
                  />
                  <div aria-hidden="true" className="absolute inset-0 bg-linear-to-t from-abyss via-abyss/30 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-8 pt-2 sm:p-10 sm:pt-2">
                <span className="mono-label text-cyan">{m.code}</span>
                <h3 className="mt-5 text-3xl font-semibold tracking-tight">{m.name}</h3>
                <p className="mt-4 flex-1 leading-8 text-white/75">{m.what}</p>
                <p className="mt-6 rounded-xl border border-line/20 bg-navy/60 p-4 text-sm leading-6 text-white/80">
                  <span className="mono-label mr-2 text-lavender/70">In practice</span>
                  {m.example}
                </p>
                <Link
                  href={m.code === "SOC" ? "/managed-security/" : "/solutions/#zero-trust"}
                  className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan"
                >
                  {m.code === "SOC" ? "Managed Security & SOC" : "Zero Trust at SECORVIX"} <Arrow />
                </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Cloud foundations */}
      <section className="bg-mist py-20 text-ink sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            tone="light"
            eyebrow="Cloud Security Portfolio"
            title="10 foundational controls for an enterprise cloud"
            intro={<p>Cloud security is many products, not one. These ten form the core of a complete AWS, Azure or Google Cloud security portfolio.</p>}
          />
          <ol className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-5">
            {cloudFoundations.map((c, i) => (
              <li key={c.code} className="flex flex-col bg-white p-6">
                <span className="font-mono text-sm text-navy/40">{pad(i)}</span>
                <span className="mono-label mt-4 text-teal">{c.code}</span>
                <span className="mt-2 font-semibold leading-snug">{c.name}</span>
                <span className="mt-2 text-sm leading-6 text-navy/70">{c.note}</span>
              </li>
            ))}
          </ol>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {cloudCoverage.map((g) => (
              <div key={g.group}>
                <p className="mono-label text-navy/60">{g.group}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <li key={item} className="rounded-md border border-navy/15 bg-white px-2.5 py-1 text-xs text-navy/80">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AppSec lifecycle */}
      <section className="relative isolate bg-ink py-20 sm:py-24">
        <div aria-hidden="true" className="tech-grid absolute inset-0 -z-10" />
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Application Security Testing"
            title={<>Security built in, <span className="text-cyan">not bolted on</span></>}
            intro={<p>Three complementary testing techniques cover an application from the first line of code to the live service.</p>}
          />
          <ol className="relative mt-14 grid gap-4 lg:grid-cols-3">
            <span aria-hidden="true" className="absolute left-0 right-0 top-[1.4rem] hidden h-px bg-linear-to-r from-cyan/0 via-cyan to-cyan/0 lg:block" />
            {appSecTesting.map((t, i) => (
              <li key={t.code} className="relative">
                <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-cyan bg-ink font-mono text-sm text-cyan">
                  {pad(i)}
                </span>
                <div className="mt-6 rounded-2xl border border-line/25 bg-navy/60 p-7">
                  <p className="mono-label text-lavender/80">{t.when}</p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                    <span className="text-cyan">{t.code}</span>
                    <span className="mt-1 block text-base font-medium text-white/80">{t.name}</span>
                  </h3>
                  <p className="mt-4 leading-7 text-white/70">{t.what}</p>
                  <p className="mt-5 border-t border-line/20 pt-4 text-sm leading-6 text-white/80">
                    <span className="mono-label mr-2 text-lavender/70">Example</span>
                    {t.example}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Detection coverage */}
      <section className="bg-mist py-20 text-ink sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            tone="light"
            eyebrow="Endpoint Detection Coverage"
            title="Detections mapped to every stage of an attack"
            intro={
              <p>
                Our EDR and SOC use cases follow the attacker&apos;s path —
                aligned with MITRE ATT&amp;CK tactics — so an intrusion can be
                caught early, wherever it starts.
              </p>
            }
          />
          <ol className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {detectionStages.map((s, i) => (
              <li key={s.stage} className="rounded-2xl border border-navy/10 bg-white p-5 transition hover:border-teal">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-teal">{pad(i)}</span>
                  <span aria-hidden="true" className="h-px flex-1 bg-navy/10" />
                  {s.stage === "Ransomware" && <span aria-hidden="true" className="h-1.5 w-1.5 bg-signal" />}
                </div>
                <h3 className="mt-3 font-semibold">{s.stage}</h3>
                <ul className="mt-3 space-y-1.5 text-sm leading-6 text-navy/70">
                  {s.examples.map((e) => (
                    <li key={e} className="flex gap-2">
                      <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 bg-teal" />
                      {e}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Correlation */}
      <section className="relative isolate bg-navy py-20 sm:py-24">
        <div aria-hidden="true" className="tech-grid absolute inset-0 -z-10" />
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-8">
          <SectionHeader
            eyebrow="Why Integration Matters"
            title={<>One signal is a clue. <span className="text-cyan">A connected chain is an incident.</span></>}
            intro={
              <p>
                PowerShell running on its own is normal admin work. PowerShell
                launched by Outlook, running an encoded command, calling out to
                the internet and executing a download is an attack. Seeing that
                takes EDR, SIEM, threat intelligence and analysts working
                together.
              </p>
            }
          />
          <div className="rounded-3xl border border-line/30 bg-abyss/70 p-6 sm:p-8">
            <p className="mono-label text-lavender/70">Example attack chain</p>
            <ol className="mt-5 flex flex-wrap items-center gap-2">
              {attackChain.map((step, i) => (
                <li key={step} className="flex items-center gap-2">
                  <span className={`rounded-md border px-3 py-1.5 font-mono text-xs ${i === 0 ? "border-line/40 text-white/80" : "border-cyan/50 bg-cyan/10 text-cyan"}`}>
                    {step}
                  </span>
                  {i < attackChain.length - 1 && <span aria-hidden="true" className="text-cyan/70">→</span>}
                </li>
              ))}
            </ol>
            <dl className="mt-8 space-y-4">
              {[
                ["PowerShell alone", "Low", "w-1/5", "bg-line/60"],
                ["+ Credential access", "Elevated", "w-1/2", "bg-cyan/60"],
                ["+ Command-and-control traffic", "Critical", "w-full", "bg-signal"],
              ].map(([label, level, width, color]) => (
                <div key={label}>
                  <div className="flex items-baseline justify-between gap-4 text-sm">
                    <dt className="text-white/80">{label}</dt>
                    <dd className="mono-label text-lavender">{level}</dd>
                  </div>
                  <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className={`h-full rounded-full ${width} ${color}`} />
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <CtaBand
        title="Not sure which technologies you need?"
        text="Tell us about your environment. SECORVIX will map your current security stack, find the gaps and recommend what to integrate next."
      />

      <Footer />
    </main>
  );
}
