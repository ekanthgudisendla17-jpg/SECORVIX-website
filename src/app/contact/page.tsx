"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSuccessMessage("");

    const form = e.currentTarget;

    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage(
        "Thank you. Your enquiry has been submitted successfully."
      );

      form.reset();
    }, 800);
  };

  return (
    <main className="min-h-screen bg-[#9292F0] text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-[#021861]/40 bg-[#9292F0]">
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-10 lg:py-28 before:pointer-events-none before:absolute before:inset-y-12 before:right-8 before:-z-10 before:hidden before:w-1/4 before:rotate-6 before:border before:border-[#021861]/30 before:bg-[#021861]/10 lg:before:block">
          <p className="mb-8 border-l-2 border-[#DE1110] pl-4 text-xs font-semibold tracking-[0.2em] text-[#021861]">
            CONTACT SECORVIX
          </p>

          <h1 className="max-w-5xl text-[clamp(2.5rem,6vw,5.25rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-white text-balance [overflow-wrap:break-word]">
            Let&apos;s Build a More{" "}
            <span className="block text-white">
              Secure Digital Enterprise
            </span>
          </h1>

          <p className="mt-10 max-w-3xl border-l-2 border-[#021861] pl-5 text-base leading-8 text-[#021861] sm:text-lg">
            Whether you are modernizing your security architecture, moving to
            the cloud, strengthening security operations or exploring
            AI-powered cybersecurity, SECORVIX can help you define the right
            path forward.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#9292F0] py-16 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16 lg:px-8">
          {/* Left Side */}
          <div>
            <p className="border-l-2 border-[#DE1110] pl-4 text-xs font-semibold tracking-[0.16em] text-[#021861]">
              START A CONVERSATION
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white text-balance [overflow-wrap:break-word] sm:text-5xl">
              Tell us what you&apos;re working on.
            </h2>

            <p className="mt-8 max-w-xl text-base leading-8 text-[#021861]">
              Share your cybersecurity, integration or resilience requirements
              with us. Our team can help you explore the right architecture,
              technologies and operational approach.
            </p>

            <div className="mt-10">
              <div className="border-t border-[#021861]/50 py-6">
                <p className="text-sm font-semibold tracking-[0.16em] text-[#021861]">
                  CYBERSECURITY
                </p>

                <p className="mt-3 text-base leading-7 text-[#021861]">
                  Security architecture, assessments and protection.
                </p>
              </div>

              <div className="border-t border-[#021861]/50 py-6">
                <p className="text-sm font-semibold tracking-[0.16em] text-[#021861]">
                  INTEGRATION
                </p>

                <p className="mt-3 text-base leading-7 text-[#021861]">
                  Technology integration, modernization and optimization.
                </p>
              </div>

              <div className="border-t border-[#021861]/50 py-6">
                <p className="text-sm font-semibold tracking-[0.16em] text-[#021861]">
                  MANAGED SECURITY
                </p>

                <p className="mt-3 text-base leading-7 text-[#021861]">
                  Monitoring, detection, response and security operations.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="min-w-0 border-t-2 border-[#021861] bg-[#021861] p-5 text-white sm:p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="grid min-w-0 gap-6">
              {/* First Name + Last Name */}
              <div className="grid min-w-0 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-firstName" className="mb-2 block text-sm font-medium text-white">
                    First Name
                  </label>

                  <input
                    type="text"
                    id="contact-firstName"
                    name="firstName"
                    required
                    className="min-h-12 w-full min-w-0 max-w-full rounded-none border border-[#9292F0]/50 bg-[#021861] px-4 py-3 text-base text-white placeholder:text-white/75 outline-none transition-colors focus:border-[#9292F0] focus:ring-2 focus:ring-[#9292F0] focus:ring-offset-2 focus:ring-offset-[#021861] [color-scheme:dark]"
                    placeholder="Your first name"
                  />
                </div>

                <div>
                  <label htmlFor="contact-lastName" className="mb-2 block text-sm font-medium text-white">
                    Last Name
                  </label>

                  <input
                    type="text"
                    id="contact-lastName"
                    name="lastName"
                    required
                    className="min-h-12 w-full min-w-0 max-w-full rounded-none border border-[#9292F0]/50 bg-[#021861] px-4 py-3 text-base text-white placeholder:text-white/75 outline-none transition-colors focus:border-[#9292F0] focus:ring-2 focus:ring-[#9292F0] focus:ring-offset-2 focus:ring-offset-[#021861] [color-scheme:dark]"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              {/* Business Email */}
              <div>
                <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-white">
                  Business Email
                </label>

                <input
                  type="email"
                  id="contact-email"
                    name="email"
                  required
                  className="min-h-12 w-full min-w-0 max-w-full rounded-none border border-[#9292F0]/50 bg-[#021861] px-4 py-3 text-base text-white placeholder:text-white/75 outline-none transition-colors focus:border-[#9292F0] focus:ring-2 focus:ring-[#9292F0] focus:ring-offset-2 focus:ring-offset-[#021861] [color-scheme:dark]"
                  placeholder="you@company.com"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="contact-company" className="mb-2 block text-sm font-medium text-white">
                  Company
                </label>

                <input
                  type="text"
                  id="contact-company"
                    name="company"
                  required
                  className="min-h-12 w-full min-w-0 max-w-full rounded-none border border-[#9292F0]/50 bg-[#021861] px-4 py-3 text-base text-white placeholder:text-white/75 outline-none transition-colors focus:border-[#9292F0] focus:ring-2 focus:ring-[#9292F0] focus:ring-offset-2 focus:ring-offset-[#021861] [color-scheme:dark]"
                  placeholder="Company name"
                />
              </div>

              {/* Area of Interest */}
              <div>
                <label htmlFor="contact-interest" className="mb-2 block text-sm font-medium text-white">
                  Area of Interest
                </label>

                <select
                  id="contact-interest"
                    name="interest"
                  required
                  defaultValue=""
                  className="min-h-12 w-full min-w-0 max-w-full rounded-none border border-[#9292F0]/50 bg-[#021861] px-4 py-3 text-base text-white placeholder:text-white/75 outline-none transition-colors focus:border-[#9292F0] focus:ring-2 focus:ring-[#9292F0] focus:ring-offset-2 focus:ring-offset-[#021861] [color-scheme:dark]"
                >
                  <option value="" disabled className="bg-[#021861] text-white">
                    Select an option
                  </option>

                  <option
                    value="Cybersecurity Solutions"
                    className="bg-[#021861] text-white"
                  >
                    Cybersecurity Solutions
                  </option>

                  <option
                    value="Security Integration"
                    className="bg-[#021861] text-white"
                  >
                    Security Integration
                  </option>

                  <option
                    value="Managed Security"
                    className="bg-[#021861] text-white"
                  >
                    Managed Security
                  </option>

                  <option
                    value="AI & Cyber Intelligence"
                    className="bg-[#021861] text-white"
                  >
                    AI & Cyber Intelligence
                  </option>

                  <option
                    value="Cyber Resilience"
                    className="bg-[#021861] text-white"
                  >
                    Cyber Resilience
                  </option>

                  <option value="Other" className="bg-[#021861] text-white">
                    Other
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-white">
                  Message
                </label>

                <textarea
                  rows={6}
                  id="contact-message"
                    name="message"
                  required
                  className="w-full min-w-0 max-w-full resize-y rounded-none border border-[#9292F0]/50 bg-[#021861] px-4 py-3 text-base leading-7 text-white placeholder:text-white/75 outline-none transition-colors focus:border-[#9292F0] focus:ring-2 focus:ring-[#9292F0] focus:ring-offset-2 focus:ring-offset-[#021861]"
                  placeholder="Tell us about your requirements"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="min-h-14 w-full min-w-0 border border-[#9292F0] bg-[#9292F0] px-5 py-4 text-base font-semibold text-[#021861] transition-colors hover:bg-[#9292F0]/85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white disabled:cursor-wait disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send Enquiry"}
              </button>

              {/* Success Message */}
              <div role="status" aria-live="polite" aria-atomic="true" className="min-h-12">
              {successMessage && (
                <p className="text-sm leading-6 text-white">
                  {successMessage}
                </p>
              )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-[#021861]/40 bg-[#9292F0] py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="border-y-2 border-[#021861] bg-[#021861] px-5 py-14 text-center text-white sm:px-10 sm:py-20 lg:px-16">
            <p className="inline-flex border-l-2 border-[#DE1110] pl-4 text-xs font-semibold tracking-[0.2em] text-[#9292F0]">
              SECORVIX
            </p>

            <h2 className="mx-auto mt-8 max-w-4xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-white text-balance [overflow-wrap:break-word] sm:text-4xl lg:text-6xl">
              Secure. Integrate. Respond. Evolve.
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/75 sm:text-lg">
              Build security architectures that are connected, intelligent and
              resilient.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}