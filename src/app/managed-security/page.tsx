import type { Metadata } from "next";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { CtaBand, PageHero, SectionHeader } from "../components/ui";

export const metadata: Metadata = {
  title: "Managed Security",
  description:
    "SOC, SIEM, threat detection, threat hunting, incident response, MDR, security automation and analytics for continuous protection.",
  alternates: { canonical: "/managed-security/" },
};

const services = [
  ["SOC Services", "Centralized security monitoring and operations."],
  ["SIEM Services", "Security event collection, correlation and analytics."],
  ["Threat Detection", "Identify suspicious activity and emerging threats."],
  ["Threat Hunting", "Proactively search for indicators of compromise."],
  ["Incident Response", "Investigate and contain security incidents."],
  ["MDR", "Managed detection and response."],
  ["Security Automation", "Automate repetitive security operations."],
  ["Security Analytics", "Turn security data into actionable intelligence."],
];

export default function ManagedSecurityPage() {
  return (
    <main>
      <Navbar />

      <PageHero
        eyebrow="Managed Security"
        title="From Prevention to Continuous Protection"
        intro={
          <>
            <p>Threats don&apos;t operate only during business hours. Your security shouldn&apos;t either.</p>
            <p>SECORVIX helps organizations establish continuous security monitoring, detection, investigation and response.</p>
          </>
        }
        image="/images/hero-managed.webp"
      />

      <section className="bg-mist py-20 text-ink sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader tone="light" eyebrow="Services" title="Managed security services" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map(([title, text], i) => (
              <div key={title} className="rounded-3xl border border-navy/10 bg-white p-7 transition hover:-translate-y-1 hover:border-lavender hover:shadow-[0_25px_60px_-35px_rgba(2,24,97,0.55)]">
                <span className="text-xs font-semibold tracking-[0.2em] text-signal">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-4 text-xl font-semibold">{title}</h2>
                <p className="mt-2 text-sm leading-7 text-navy/70">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image src="/images/cap-secops.webp" alt="Security analytics dashboard" fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
          </div>
          <SectionHeader
            eyebrow="Continuous Security Operations"
            title="Build faster detection and coordinated response."
            intro={
              <>
                <p>
                  Managed security brings together people, processes,
                  monitoring, analytics, automation and threat intelligence
                  into a continuous security operating model.
                </p>
                <p>
                  Improve visibility, accelerate investigation and build a more
                  consistent response capability across the enterprise.
                </p>
              </>
            }
          />
        </div>
      </section>

      <CtaBand
        title="Strengthen your security operations."
        text="Build continuous visibility, faster detection and coordinated response across your security environment."
      />

      <Footer />
    </main>
  );
}
