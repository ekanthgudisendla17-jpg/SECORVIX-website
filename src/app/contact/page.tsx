"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";

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
    <main className="min-h-screen bg-[#05070b] text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-[#255dce]">
            CONTACT SECORVIX
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold tracking-tight sm:text-6xl">
  Let&apos;s Build a More{" "}
  <span className="text-[#255dce]">
    Secure Digital Enterprise
  </span>
</h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/55">
            Whether you are modernizing your security architecture, moving to
            the cloud, strengthening security operations or exploring
            AI-powered cybersecurity, SECORVIX can help you define the right
            path forward.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#070a0f] py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">

          {/* Left Side */}
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#255dce]">
              START A CONVERSATION
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Tell us what you&apos;re working on.
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-white/55">
              Share your cybersecurity, integration or resilience requirements
              with us. Our team can help you explore the right architecture,
              technologies and operational approach.
            </p>

            <div className="mt-10 space-y-5">
              <div className="rounded-xl border border-[#021861] bg-[#0a0e14] p-5">
                <p className="text-xs tracking-[0.2em] text-[#255dce]">
                  CYBERSECURITY
                </p>

                <p className="mt-2 text-sm text-white/60">
                  Security architecture, assessments and protection.
                </p>
              </div>

              <div className="rounded-xl border border-[#021861] bg-[#0a0e14] p-5">
                <p className="text-xs tracking-[0.2em] text-[#255dce]">
                  INTEGRATION
                </p>

                <p className="mt-2 text-sm text-white/60">
                  Technology integration, modernization and optimization.
                </p>
              </div>

              <div className="rounded-xl border border-[#021861] bg-[#0a0e14] p-5">
                <p className="text-xs tracking-[0.2em] text-[#255dce]">
                  MANAGED SECURITY
                </p>

                <p className="mt-2 text-sm text-white/60">
                  Monitoring, detection, response and security operations.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-[#021861] text-[#255dce]/[0.025] p-8 lg:p-10">
            <form onSubmit={handleSubmit} className="grid gap-6">

              {/* First Name + Last Name */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm text-white/65">
                    First Name
                  </label>

                  <input
                    type="text"
                    name="firstName"
                    required
                    className="w-full rounded-lg border border-white/10 bg-[#05070b] px-4 py-3 text-white outline-none transition focus:border-[#255dce]/50"
                    placeholder="Your first name"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm text-white/65">
                    Last Name
                  </label>

                  <input
                    type="text"
                    name="lastName"
                    required
                    className="w-full rounded-lg border border-white/10 bg-[#05070b] px-4 py-3 text-white outline-none transition focus:border-[#255dce]/50"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              {/* Business Email */}
              <div>
                <label className="mb-2 block text-sm text-white/65">
                  Business Email
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  className="w-full rounded-lg border border-white/10 bg-[#05070b] px-4 py-3 text-white outline-none transition focus:border-[#255dce]/50"
                  placeholder="you@company.com"
                />
              </div>

              {/* Company */}
              <div>
                <label className="mb-2 block text-sm text-white/65">
                  Company
                </label>

                <input
                  type="text"
                  name="company"
                  required
                  className="w-full rounded-lg border border-white/10 bg-[#05070b] px-4 py-3 text-white outline-none transition focus:border-[#255dce]/50"
                  placeholder="Company name"
                />
              </div>

              {/* Area of Interest */}
              <div>
                <label className="mb-2 block text-sm text-white/65">
                  Area of Interest
                </label>

                <select
                  name="interest"
                  required
                  defaultValue=""
                  className="w-full rounded-lg border border-white/10 bg-[#05070b] px-4 py-3 text-white outline-none transition focus:border-[#255dce]"
                >
                  <option
                    value=""
                    disabled
                    className="bg-white text-black"
                  >
                    Select an option
                  </option>

                  <option
                    value="Cybersecurity Solutions"
                    className="bg-white text-black"
                  >
                    Cybersecurity Solutions
                  </option>

                  <option
                    value="Security Integration"
                    className="bg-white text-black"
                  >
                    Security Integration
                  </option>

                  <option
                    value="Managed Security"
                    className="bg-white text-black"
                  >
                    Managed Security
                  </option>

                  <option
                    value="AI & Cyber Intelligence"
                    className="bg-white text-black"
                  >
                    AI & Cyber Intelligence
                  </option>

                  <option
                    value="Cyber Resilience"
                    className="bg-white text-black"
                  >
                    Cyber Resilience
                  </option>

                  <option
                    value="Other"
                    className="bg-white text-black"
                  >
                    Other
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="mb-2 block text-sm text-white/65">
                  Message
                </label>

                <textarea
                  rows={6}
                  name="message"
                  required
                  className="w-full resize-none rounded-lg border border-white/10 bg-[#05070b] px-4 py-3 text-white outline-none transition focus:border-[#255dce]"
                  placeholder="Tell us about your requirements"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-md border border-[#255dce] bg-[#255dce] px-5 py-3 font-semibold text-white transition hover:bg-[#1f4fb3]"
              >
                {isSubmitting ? "Sending..." : "Send Enquiry"}
              </button>

              {/* Success Message */}
              {successMessage && (
                <p className="text-sm text-[#255dce]">
                  {successMessage}
                </p>
              )}

            </form>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl border border-[#021861] text-[#255dce]/[0.025] p-10 text-center">
            <p className="text-xs font-semibold tracking-[0.3em] text-[#255dce]">
              SECORVIX
            </p>

            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              Secure. Integrate. Respond. Evolve.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-white/55">
              Build security architectures that are connected, intelligent and
              resilient.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}