import type { Metadata } from "next";
import Image from "next/image";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { CtaBand, PageHero, SectionHeader } from "../components/ui";
import { principles } from "../lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "SECORVIX brings together cybersecurity expertise, system integration, security intelligence and AI to build secure, visible and resilient digital environments.",
  alternates: { canonical: "/about/" },
};

const statements = [
  ["Vision", "To become a trusted global cybersecurity integration and cyber-resilience partner for the digital enterprise."],
  ["Mission", "To simplify cybersecurity through intelligent integration, advanced technologies, AI and expert-led services."],
  ["Purpose", "Help organizations operate securely and confidently in an increasingly connected world."],
  ["Promise", "Integrated security. Intelligent outcomes. Continuous resilience."],
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

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <PageHero
        eyebrow="About SECORVIX"
        title="Building the Security Infrastructure for a Connected World"
        intro={
          <p>
            SECORVIX brings together cybersecurity expertise, system
            integration, security intelligence, AI capabilities and a broad
            technology ecosystem to help organizations build secure, visible,
            intelligent and resilient digital environments.
          </p>
        }
        image="/images/hero-about.webp"
      />

      {/* Who we are */}
      <section className="bg-white py-20 text-ink sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
            <Image src="/images/about-team.webp" alt="Team collaborating around laptops" fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
          </div>
          <div>
            <SectionHeader
              tone="light"
              eyebrow="Who we are"
              title="More than a cybersecurity services company."
              intro={
                <>
                  <p>Digital transformation has created unprecedented opportunities and unprecedented cyber risk.</p>
                  <p>
                    Organizations need more than individual security products.
                    They need a partner capable of understanding the entire
                    environment, integrating technologies and continuously
                    improving their security posture.
                  </p>
                  <p className="font-semibold text-ink">SECORVIX was created with this purpose.</p>
                  <p>
                    We help organizations build security architectures that are
                    connected, intelligent and resilient across the entire
                    digital enterprise.
                  </p>
                </>
              }
            />
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="bg-mist py-20 text-ink sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader tone="light" eyebrow="Brand Philosophy" title="One Name. Six Cybersecurity Principles." />
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map(([letter, title, text]) => (
              <div key={title} className="flex gap-6 bg-white p-8">
                <span aria-hidden="true" className="text-6xl font-semibold leading-none tracking-tight text-lavender">
                  {letter}
                </span>
                <div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-2 leading-7 text-navy/70">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge / Advantage */}
      <section className="bg-ink py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="rounded-3xl border border-white/10 p-8 sm:p-10">
            <p className="eyebrow text-lavender">The Challenge</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight">Complexity is the new cybersecurity reality.</h2>
            <p className="mt-4 leading-8 text-white/70">
              Enterprises face too many security technologies, fragmented
              operations, increasing threats, compliance pressure and a
              shortage of specialist expertise.
            </p>
          </div>
          <div className="rounded-3xl bg-linear-to-br from-navy to-[#2a2f9a] p-8 sm:p-10">
            <p className="eyebrow text-lavender">The SECORVIX Advantage</p>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight">Connected security. Clearer outcomes.</h2>
            <p className="mt-4 leading-8 text-white/80">
              SECORVIX brings architecture, integration, intelligence,
              automation and managed security together to create a more
              connected and resilient security operating model.
            </p>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-white py-20 text-ink sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader tone="light" eyebrow="Our Approach" title="A Structured Path from Complexity to Cyber Confidence" />
          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map(([title, text], i) => {
              const last = i === approach.length - 1;
              return (
                <li key={title} className={`rounded-3xl border p-7 ${last ? "border-navy bg-navy text-white sm:col-span-2 lg:col-span-1" : "border-navy/10 bg-mist"}`}>
                  <span className={`text-4xl font-semibold tracking-tight ${last ? "text-lavender" : "text-navy/25"}`}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-4 text-xl font-semibold">{title}</h3>
                  <p className={`mt-2 text-sm leading-7 ${last ? "text-white/75" : "text-navy/70"}`}>{text}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* Vision / Mission / Purpose / Promise */}
      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 sm:px-6 md:grid-cols-2 lg:px-8">
          {statements.map(([label, text], i) => (
            <div
              key={label}
              className={`rounded-3xl border border-white/10 p-8 sm:p-12 ${i === 0 || i === 3 ? "bg-linear-to-br from-navy to-[#2a2f9a]" : "bg-white/[0.03]"}`}
            >
              <p className="eyebrow text-lavender">{label}</p>
              <p className="mt-6 text-balance text-2xl font-semibold leading-snug tracking-tight sm:text-3xl">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand
        title="Partner with SECORVIX."
        text="Let's build security architectures that are connected, intelligent and resilient."
      />

      <Footer />
    </main>
  );
}
