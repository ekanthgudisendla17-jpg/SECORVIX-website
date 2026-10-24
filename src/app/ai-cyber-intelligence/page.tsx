import type { Metadata } from "next";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { CtaBand, PageHero, SectionHeader } from "../components/ui";

export const metadata: Metadata = {
  title: "AI & Cyber Intelligence",
  description:
    "AI-assisted detection, intelligent analysis and automated response that augment human security expertise.",
  alternates: { canonical: "/ai-cyber-intelligence/" },
};

const pillars = [
  ["AI-Assisted Detection", "Identify abnormal behavior and emerging threats faster."],
  ["Intelligent Analysis", "Correlate security events, threat intelligence and contextual information to prioritize what matters."],
  ["Automated Response", "Accelerate investigation, containment and remediation through intelligent automation."],
];

const inputs = ["Threat Intelligence", "Human Expertise", "Automation", "Security Analytics"];

export default function AICyberIntelligencePage() {
  return (
    <main>
      <Navbar />

      <PageHero
        eyebrow="AI & Cyber Intelligence"
        title="AI-Powered Cybersecurity. Human-Led Security."
        intro={
          <>
            <p>AI is transforming cybersecurity—but technology alone is not enough.</p>
            <p>
              SECORVIX combines AI capabilities, security intelligence,
              automation and human expertise to improve how organizations
              detect, understand and respond to threats.
            </p>
          </>
        }
        image="/images/hero-ai.webp"
      />

      <section className="bg-white py-20 text-ink sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8">
          <div>
            <SectionHeader tone="light" eyebrow="Intelligence Core" title="Four inputs. One intelligent security model." />
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {inputs.map((item) => (
                <li key={item} className="flex items-center gap-3 rounded-2xl border border-navy/10 bg-mist px-5 py-4 font-semibold">
                  <span aria-hidden="true" className="h-2 w-2 rounded-full bg-signal" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image src="/images/blog-ai-soc.webp" alt="Robot reading a tablet, representing AI-assisted analysis" fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-5 lg:grid-cols-3">
            {pillars.map(([title, text], i) => (
              <div key={title} className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-10">
                <span className="text-sm font-semibold text-lavender">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight">{title}</h2>
                <p className="mt-3 leading-7 text-white/70">{text}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-16 max-w-3xl text-center text-xl leading-9 text-white/80 sm:text-2xl sm:leading-10">
            We don&apos;t position AI as a replacement for cybersecurity
            professionals. We use AI to augment human expertise, accelerate
            decision-making and improve security outcomes.
          </p>
        </div>
      </section>

      <CtaBand
        title="Explore AI-powered cybersecurity."
        text="Discover how AI, automation and human expertise can work together to improve detection and response."
      />

      <Footer />
    </main>
  );
}
