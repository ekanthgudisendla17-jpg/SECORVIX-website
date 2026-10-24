import type { Metadata } from "next";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { CtaBand, PageHero, SectionHeader } from "../components/ui";

export const metadata: Metadata = {
  title: "Security Integration",
  description:
    "Vendor-neutral security architecture, technology integration, migration, consolidation and automation that turn disconnected tools into one integrated architecture.",
  alternates: { canonical: "/security-integration/" },
};

const lifecycle = ["Discover", "Assess", "Design", "Integrate", "Implement", "Optimize", "Monitor", "Evolve"];

const capabilities = [
  ["Security Architecture", "Design secure, scalable enterprise architectures"],
  ["Technology Integration", "Integrate multiple security technologies and platforms"],
  ["Migration", "Modernize legacy security environments"],
  ["Consolidation", "Reduce technology fragmentation and complexity"],
  ["Deployment", "End-to-end implementation and rollout"],
  ["Optimization", "Improve performance, coverage and operational efficiency"],
  ["Automation", "Automate repetitive security workflows"],
  ["Monitoring", "Establish continuous visibility and control"],
];

export default function SecurityIntegrationPage() {
  return (
    <main>
      <Navbar />

      <PageHero
        eyebrow="Security Integration"
        title="From Security Technologies to One Integrated Architecture"
        intro={
          <>
            <p>
              Enterprise environments are increasingly complex. Different
              technologies, platforms, clouds, applications and security
              controls often operate in isolation.
            </p>
            <p className="font-semibold text-white">SECORVIX brings them together.</p>
          </>
        }
        image="/images/hero-integration.webp"
      />

      {/* Lifecycle */}
      <section className="bg-mist py-20 text-ink sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader tone="light" eyebrow="Integration Lifecycle" title="Eight stages. One continuous programme." />
          <ol className="relative mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {lifecycle.map((step, i) => (
              <li key={step} className="rounded-3xl border border-navy/10 bg-white p-7 shadow-[0_20px_50px_-35px_rgba(2,24,97,0.5)]">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-navy text-sm font-semibold text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-5 text-xl font-semibold">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Vendor-Neutral Integration"
              title="Integration that fits the enterprise."
              intro={
                <p>
                  We architect, integrate and optimize cybersecurity
                  environments across the enterprise. Our vendor-neutral
                  approach allows us to select and integrate the technologies
                  best aligned to each customer&apos;s security objectives,
                  existing infrastructure and business requirements.
                </p>
              }
            />
            <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-[2rem]">
              <Image src="/images/ecosystem.webp" alt="" fill sizes="(min-width: 1024px) 520px, 100vw" className="object-cover" />
            </div>
          </div>

          <div className="grid content-start gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {capabilities.map(([title, text]) => (
              <div key={title} className="bg-ink p-7 transition hover:bg-navy/60">
                <span aria-hidden="true" className="block h-1 w-8 rounded-full bg-signal" />
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to simplify a complex security environment?"
        text="SECORVIX helps organizations move from disconnected security technologies to integrated, manageable and resilient architectures."
      />

      <Footer />
    </main>
  );
}
