import type { Metadata } from "next";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { CtaBand, PageHero, SectionHeader } from "../components/ui";
import { industries } from "../lib/content";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Cybersecurity for banking, government, manufacturing, healthcare, technology, education and critical infrastructure.",
  alternates: { canonical: "/industries/" },
};

const approach = [
  ["Risk Alignment", "Align security priorities with operational and business risk."],
  ["Compliance Support", "Support security controls aligned with relevant regulatory requirements."],
  ["Architecture", "Design scalable security architectures around industry-specific environments."],
  ["Operational Resilience", "Improve preparedness, detection, response and recovery."],
  ["Integration", "Connect security technologies across complex digital environments."],
  ["Continuous Improvement", "Continuously improve security posture as risks and environments evolve."],
];

export default function IndustriesPage() {
  return (
    <main>
      <Navbar />

      <PageHero
        eyebrow="Industries"
        title="Cybersecurity Designed Around Your Industry"
        intro={
          <>
            <p>Different industries face different risks, regulations, technologies and operational challenges.</p>
            <p>SECORVIX helps organizations design security architectures aligned to the way their industry operates.</p>
          </>
        }
        image="/images/hero-industries.webp"
      />

      <section className="bg-white py-20 text-ink sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-6 md:grid-cols-2 lg:px-8">
          {industries.map((industry, i) => (
            <article
              key={industry.title}
              className={`zoom-media group overflow-hidden rounded-[2rem] border border-navy/10 bg-mist ${i === industries.length - 1 ? "md:col-span-2" : ""}`}
            >
              <div className={`relative ${i === industries.length - 1 ? "aspect-[21/9]" : "aspect-[16/9]"}`}>
                <Image src={industry.image} alt="" fill sizes="(min-width: 768px) 640px, 100vw" className="object-cover" />
                <span className="absolute left-5 top-5 rounded-full bg-ink/80 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-semibold tracking-tight">{industry.title}</h2>
                <p className="mt-3 leading-7 text-navy/75">{industry.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Industry-Aligned Security"
            title="Security built around business reality."
            intro={
              <p>
                Industry security requirements vary because technology,
                regulation, operational dependency and business risk vary.
                SECORVIX combines cybersecurity architecture, integration,
                intelligence and managed security to build solutions aligned to
                each environment.
              </p>
            }
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {approach.map(([title, text]) => (
              <div key={title} className="bg-ink p-8 transition hover:bg-navy/60">
                <span aria-hidden="true" className="block h-1 w-8 rounded-full bg-signal" />
                <h3 className="mt-5 text-lg font-semibold">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/65">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Build security around your industry requirements."
        text="Talk to SECORVIX about the security architecture, integration and operational requirements of your organization."
      />

      <Footer />
    </main>
  );
}
