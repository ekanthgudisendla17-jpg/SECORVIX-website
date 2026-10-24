import type { Metadata } from "next";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { PageHero } from "../components/ui";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to SECORVIX about security architecture, integration, managed security, AI-powered cybersecurity and cyber resilience.",
  alternates: { canonical: "/contact/" },
};

const topics = [
  ["Cybersecurity", "Security architecture, assessments and protection."],
  ["Integration", "Technology integration, modernization and optimization."],
  ["Managed Security", "Monitoring, detection, response and security operations."],
];

export default function ContactPage() {
  return (
    <main>
      <Navbar />

      <PageHero
        eyebrow="Contact SECORVIX"
        title="Let's Build a More Secure Digital Enterprise"
        intro={
          <p>
            Whether you are modernizing your security architecture, moving to
            the cloud, strengthening security operations or exploring
            AI-powered cybersecurity, SECORVIX can help you define the right
            path forward.
          </p>
        }
        image="/images/hero-contact.webp"
      />

      <section className="bg-mist py-20 text-ink sm:py-28">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-8">
          <div>
            <p className="eyebrow text-navy">Start a conversation</p>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-[1.06] tracking-[-0.04em] sm:text-5xl">
              Tell us what you&apos;re working on.
            </h2>
            <p className="mt-6 leading-8 text-navy/75">
              Share your cybersecurity, integration or resilience requirements
              with us. Our team can help you explore the right architecture,
              technologies and operational approach.
            </p>

            <ul className="mt-10 space-y-4">
              {topics.map(([title, text]) => (
                <li key={title} className="rounded-2xl border border-navy/10 bg-white p-6">
                  <p className="flex items-center gap-3 font-semibold">
                    <span aria-hidden="true" className="h-2 w-2 rounded-full bg-signal" />
                    {title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-navy/70">{text}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 rounded-[2rem] border border-navy/10 bg-white p-6 shadow-[0_30px_80px_-40px_rgba(2,24,97,0.45)] sm:p-10">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
