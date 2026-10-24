import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lavender";

export const buttonPrimary = `inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-lavender px-7 py-3.5 text-sm font-semibold text-ink shadow-[0_10px_40px_-10px_rgba(146,146,240,0.7)] transition hover:bg-white ${focusRing}`;

export const buttonGhost = `inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:border-white hover:bg-white/10 ${focusRing}`;

export function Logo() {
  return (
    <span className="flex items-center gap-3">
      <svg aria-hidden="true" viewBox="0 0 64 64" className="h-9 w-9">
        <rect width="64" height="64" rx="14" fill="#021861" />
        <path d="M32 9 50 15v14c0 12-7.6 21.4-18 25-10.4-3.6-18-13-18-25V15z" fill="none" stroke="#9292F0" strokeWidth="3.5" strokeLinejoin="round" />
        <path d="M38.5 24.5c-1.6-2-4-3-6.7-3-3.6 0-6.3 2-6.3 4.9 0 6.6 13.2 3.7 13.2 10.6 0 3-2.9 5.2-6.9 5.2-3 0-5.6-1.2-7.3-3.4" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="45" cy="45" r="4" fill="#DE1110" />
      </svg>
      <span className="text-lg font-semibold tracking-[0.28em] text-white">SECORVIX</span>
    </span>
  );
}

export function Arrow() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 transition-transform group-hover:translate-x-1">
      <path d="M4 10h11m-4-4 4 4-4 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type PageHeroProps = {
  eyebrow: string;
  title: ReactNode;
  intro: ReactNode;
  image: string;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, intro, image, children }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      <Image src={image} alt="" fill priority sizes="100vw" className="-z-20 object-cover opacity-60" />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,var(--color-ink)_15%,rgba(1,11,51,0.85)_45%,rgba(2,24,97,0.35)_100%)]" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-linear-to-t from-ink to-transparent" />

      <div className="mx-auto max-w-7xl px-5 pb-20 pt-36 sm:px-6 sm:pb-28 sm:pt-44 lg:px-8 lg:pb-32 lg:pt-52">
        <p className="eyebrow text-lavender">{eyebrow}</p>
        <h1 className="mt-6 max-w-4xl text-balance text-[clamp(2.4rem,6vw,4.75rem)] font-semibold leading-[1.02] tracking-[-0.045em]">
          {title}
        </h1>
        <div className="mt-8 max-w-2xl space-y-4 text-base leading-8 text-white/75 sm:text-lg">{intro}</div>
        {children && <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap">{children}</div>}
      </div>
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  tone?: "light" | "dark";
  align?: "left" | "center";
};

export function SectionHeader({ eyebrow, title, intro, tone = "dark", align = "left" }: SectionHeaderProps) {
  const light = tone === "light";
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className={`eyebrow ${light ? "text-navy" : "text-lavender"}`}>{eyebrow}</p>
      <h2 className={`mt-5 text-balance text-4xl font-semibold leading-[1.06] tracking-[-0.04em] sm:text-5xl ${light ? "text-ink" : "text-white"}`}>
        {title}
      </h2>
      {intro && (
        <div className={`mt-6 space-y-4 text-base leading-8 sm:text-lg ${light ? "text-navy/75" : "text-white/70"}`}>{intro}</div>
      )}
    </div>
  );
}

type CtaBandProps = {
  title: ReactNode;
  text: ReactNode;
};

export function CtaBand({ title, text }: CtaBandProps) {
  return (
    <section className="bg-ink px-5 py-20 sm:px-6 sm:py-28 lg:px-8">
      <div className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-white/10 px-6 py-16 text-center sm:px-12 sm:py-24">
        <Image src="/images/cta-bg.webp" alt="" fill sizes="(min-width: 1280px) 1280px, 100vw" className="-z-20 object-cover" />
        <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(2,24,97,0.55),rgba(1,11,51,0.92))]" />

        <p className="eyebrow justify-center text-lavender">Let&apos;s build cyber resilience</p>
        <h2 className="mx-auto mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">{text}</p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/contact/" className={`group ${buttonPrimary}`}>
            Talk to a Security Expert <Arrow />
          </Link>
          <Link href="/solutions/" className={buttonGhost}>
            Explore Solutions
          </Link>
        </div>
      </div>
    </section>
  );
}
