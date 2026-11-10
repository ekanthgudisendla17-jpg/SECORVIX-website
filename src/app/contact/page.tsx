import type { Metadata } from "next";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { PageHero } from "../components/ui";
import ContactForm from "./ContactForm";
import { contact, telHref } from "../lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Talk to SECORVIX about security architecture, integration, managed security, AI-powered cybersecurity and cyber resilience.",
  alternates: { canonical: "/contact/" },
};

const topics = [
  ["Cybersecurity", "Security architecture, assessments and protection."],
  ["Managed Security", "Monitoring, detection, response and security operations."],
  ["Integration", "Technology integration, modernization and optimization."],
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

            <div className="mt-10 border-t border-navy/10 pt-8">
              <p className="text-sm font-semibold">Prefer to reach us directly?</p>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <a href={`mailto:${contact.email}`} className="group inline-flex items-center gap-3 font-medium text-navy hover:text-signal">
                    <MailIcon />
                    <span className="underline decoration-navy/20 underline-offset-4 group-hover:decoration-signal">{contact.email}</span>
                  </a>
                </li>
                {contact.phone && (
                  <li>
                    <a href={telHref(contact.phone)} className="group inline-flex items-center gap-3 font-medium text-navy hover:text-signal">
                      <PhoneIcon />
                      <span className="underline decoration-navy/20 underline-offset-4 group-hover:decoration-signal">{contact.phone}</span>
                    </a>
                  </li>
                )}
              </ul>
            </div>
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

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 shrink-0 fill-none stroke-current" strokeWidth={1.6}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.5 6.5 8.5 6.5 8.5-6.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5 shrink-0 fill-none stroke-current" strokeWidth={1.6}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
    </svg>
  );
}
