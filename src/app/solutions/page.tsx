import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Arrow, CtaBand, PageHero, SectionHeader } from "../components/ui";
import { capabilities } from "../lib/content";
import { solutions } from "../lib/site";

export const metadata: Metadata = {
  title: "Cybersecurity Solutions",
  description:
    "Network, cloud, identity, endpoint, data and application security and security operations — designed and integrated across the enterprise by SECORVIX.",
  alternates: { canonical: "/solutions/" },
};

export default function SolutionsPage() {
  return (
    <main>
      <Navbar />

      <PageHero
        eyebrow="Cybersecurity Solutions"
        title="Security Across Every Layer of the Enterprise"
        intro={
          <p>
            Cybersecurity is no longer a single technology. It is an
            interconnected ecosystem. SECORVIX designs and integrates security
            capabilities across the entire digital environment.
          </p>
        }
        image="/images/hero-solutions.webp"
      />

      <section className="bg-white py-20 text-ink sm:py-28">
        <div className="mx-auto max-w-7xl space-y-6 px-5 sm:px-6 lg:px-8">
          {capabilities.map(({ title, text, image }, i) => (
            <article
              key={title}
              className="zoom-media grid overflow-hidden rounded-[2rem] border border-navy/10 bg-mist lg:grid-cols-2"
            >
              <div className={`relative min-h-64 lg:min-h-80 ${i % 2 ? "lg:order-2" : ""}`}>
                <Image src={image} alt="" fill sizes="(min-width: 1024px) 640px, 100vw" className="object-cover" />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-12">
                <span className="text-sm font-semibold tracking-[0.2em] text-signal">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
                <p className="mt-4 max-w-lg leading-8 text-navy/75">{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Zero Trust */}
      <section className="bg-mist py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid overflow-hidden rounded-[2rem] lg:grid-cols-2">
            <div className="relative min-h-72">
              <Image src="/images/zero-trust.webp" alt="Padlock resting on a laptop keyboard" fill sizes="(min-width: 1024px) 640px, 100vw" className="object-cover" />
            </div>
            <div className="bg-navy p-8 sm:p-12">
              <p className="eyebrow text-lavender">Zero Trust</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">Trust Nothing. Verify Everything.</h2>
              <p className="mt-5 leading-8 text-white/75">
                Modern organizations have users, applications, workloads and
                data everywhere. We help organizations move beyond
                perimeter-based security toward identity-driven, continuously
                verified access models.
              </p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {["Identity", "Device", "Application", "Network", "Data", "Context"].map((item) => (
                  <li key={item} className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/85">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="bg-ink py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Integrated Security"
            title="Security technologies deliver more value when they work together."
            intro={
              <p>
                SECORVIX combines architecture, integration, intelligence,
                automation and expert-led services to create security
                environments that are connected, visible and resilient.
              </p>
            }
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {solutions.slice(1).map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex min-h-36 flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition hover:border-lavender hover:bg-white/[0.06]"
              >
                <span className="text-lg font-semibold">{s.label}</span>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-lavender">
                  Learn more <Arrow />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Secure every layer of your enterprise."
        text="Talk to SECORVIX about designing and integrating security capabilities across your environment."
      />

      <Footer />
    </main>
  );
}
