"use client";

import { useState } from "react";

const fieldClass =
  "min-h-12 w-full min-w-0 rounded-xl border border-navy/15 bg-white px-4 py-3 text-base text-ink placeholder:text-navy/40 outline-none transition focus:border-navy focus:ring-4 focus:ring-lavender/40";

const labelClass = "mb-2 block text-sm font-medium text-ink";

const interests = [
  "Cybersecurity Solutions",
  "Security Integration",
  "Managed Security",
  "AI & Cyber Intelligence",
  "Cyber Resilience",
  "Other",
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSuccessMessage("");

    const form = e.currentTarget;

    setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage("Thank you. Your enquiry has been submitted successfully.");

      form.reset();
    }, 800);
  };

  return (
    <form onSubmit={handleSubmit} className="grid min-w-0 gap-6">
      <div className="grid min-w-0 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-firstName" className={labelClass}>
            First Name
          </label>
          <input type="text" id="contact-firstName" name="firstName" autoComplete="given-name" required className={fieldClass} placeholder="Your first name" />
        </div>
        <div>
          <label htmlFor="contact-lastName" className={labelClass}>
            Last Name
          </label>
          <input type="text" id="contact-lastName" name="lastName" autoComplete="family-name" required className={fieldClass} placeholder="Your last name" />
        </div>
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClass}>
          Business Email
        </label>
        <input type="email" id="contact-email" name="email" autoComplete="email" required className={fieldClass} placeholder="you@company.com" />
      </div>

      <div>
        <label htmlFor="contact-company" className={labelClass}>
          Company
        </label>
        <input type="text" id="contact-company" name="company" autoComplete="organization" required className={fieldClass} placeholder="Company name" />
      </div>

      <div>
        <label htmlFor="contact-interest" className={labelClass}>
          Area of Interest
        </label>
        <select id="contact-interest" name="interest" required defaultValue="" className={fieldClass}>
          <option value="" disabled>
            Select an option
          </option>
          {interests.map((interest) => (
            <option key={interest} value={interest}>
              {interest}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Message
        </label>
        <textarea rows={6} id="contact-message" name="message" required className={`${fieldClass} resize-y leading-7`} placeholder="Tell us about your requirements" />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="min-h-14 w-full rounded-full bg-navy px-5 py-4 text-base font-semibold text-white transition hover:bg-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-navy disabled:cursor-wait disabled:opacity-70"
      >
        {isSubmitting ? "Sending..." : "Send Enquiry"}
      </button>

      <div role="status" aria-live="polite" aria-atomic="true" className="min-h-6">
        {successMessage && <p className="text-sm leading-6 text-navy">{successMessage}</p>}
      </div>
    </form>
  );
}
