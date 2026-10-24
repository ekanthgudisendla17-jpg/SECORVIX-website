import type { Metadata } from "next";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { CtaBand, PageHero, SectionHeader } from "../components/ui";

export const metadata: Metadata = {
  title: "Cyber Resilience",
  description:
    "Risk assessment, vulnerability management, incident response planning, cyber recovery and security validation to anticipate, withstand and recover from cyber incidents.",
  alternates: { canonical: "/cyber-resilience/" },
};

const framework = ["Anticipate", "Prevent", "Detect", "Respond", "Recover", "Improve"];

const services = [
  "Cyber Risk Assessment",
  "Vulnerability Management",
  "Security Posture Assessment",
  "Incident Response Planning",
  "Cyber Recovery",
  "Business Continuity Alignment",
  "Security Validation",
  "Security Maturity Assessment",
];

export default function CyberResiliencePage() {
  return (
    <main>
      <Navbar />

      <PageHero
        eyebrow="Cyber Resilience"
        title="Security Is Not Just About Stopping Attacks"
        intro={
          <>
            <p>A resilient organization must be able to anticipate, withstand, respond to and recover from cyber incidents.</p>
            <p>SECORVIX helps organizations build resilience across technology, processes and people.</p>
          </>
        }
        image="/images/hero-resilience.webp"
      />

      <section className="bg-mist py-20 text-ink sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader tone="light" eyebrow="Resilience Framework" title="A continuous cycle of preparedness." />
          <ol className="mt-14 grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {framework.map((step, i) => (
              <li key={step} className="rounded-3xl border border-navy/10 bg-white p-6 text-center">
                <span className="text-4xl font-semibold tracking-tight text-lavender">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-3 text-lg font-semibold">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
          <div>
            <SectionHeader
              eyebrow="Building Resilience"
              title="Build security that can adapt, respond and recover."
              intro={
                <p>
                  Cyber resilience connects risk management, security controls,
                  response planning and recovery into one continuous operating
                  model.
                </p>
              }
            />
            <div className="relative mt-10 aspect-[16/10] overflow-hidden rounded-[2rem]">
              <Image src="/images/blog-resilience.webp" alt="Open hard drive, representing data backup and recovery" fill sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
            </div>
          </div>

          <ul className="grid content-start gap-3 sm:grid-cols-2">
            {services.map((service) => (
              <li key={service} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 transition hover:border-lavender">
                <span aria-hidden="true" className="h-2 w-2 shrink-0 rounded-full bg-signal" />
                <span className="font-medium">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Build a more resilient digital enterprise."
        text="Strengthen preparedness, response and recovery while continuously improving your cybersecurity posture."
      />

      <Footer />
    </main>
  );
}
