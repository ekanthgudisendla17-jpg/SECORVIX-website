"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { navLinks, solutions } from "../lib/site";
import { Logo } from "./ui";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lavender";

// usePathname() may or may not carry the trailing slash; compare without it.
const trim = (path: string) => path.replace(/\/$/, "") || "/";

export default function Navbar() {
  const pathname = trim(usePathname());
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const solutionsId = useId();
  const solutionsButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => trim(href) === pathname;
  const onSolutionsPage = solutions.some((s) => isActive(s.href));

  const linkClass = (active: boolean) =>
    `relative py-2 text-sm transition ${active ? "text-white after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-signal" : "text-white/70 hover:text-white"} ${focusRing}`;

  const [home, ...rest] = navLinks;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-white/10 bg-ink/85 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.8)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="SECORVIX home" aria-current={isActive("/") ? "page" : undefined} className={focusRing} onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        {/* Desktop */}
        <nav aria-label="Main" className="hidden items-center gap-8 xl:flex">
          <Link href={home.href} aria-current={isActive(home.href) ? "page" : undefined} className={linkClass(isActive(home.href))}>
            {home.label}
          </Link>

          <div
            className="group relative"
            onMouseEnter={() => setIsSolutionsOpen(true)}
            onMouseLeave={(event) => {
              if (!event.currentTarget.contains(document.activeElement)) {
                setIsSolutionsOpen(false);
              }
            }}
            onFocus={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setIsSolutionsOpen(true);
              }
            }}
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget)) {
                setIsSolutionsOpen(false);
              }
            }}
            onKeyDown={(event) => {
              if (event.key === "Escape" && isSolutionsOpen) {
                event.preventDefault();
                event.stopPropagation();
                solutionsButtonRef.current?.focus();
                setIsSolutionsOpen(false);
              }
              if (event.key === "ArrowDown" && event.target === solutionsButtonRef.current) {
                event.preventDefault();
                setIsSolutionsOpen(true);
              }
            }}
          >
            <button
              ref={solutionsButtonRef}
              type="button"
              aria-expanded={isSolutionsOpen}
              aria-controls={solutionsId}
              onClick={() => setIsSolutionsOpen(true)}
              className={`flex items-center gap-1.5 ${linkClass(onSolutionsPage)}`}
            >
              Solutions
              <svg aria-hidden="true" viewBox="0 0 12 12" className="h-3 w-3 transition group-hover:rotate-180">
                <path d="m3 4.5 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>

            <div id={solutionsId} className={`absolute left-1/2 top-full w-80 -translate-x-1/2 pt-4 transition duration-200 ${isSolutionsOpen ? "visible opacity-100" : "invisible opacity-0"}`}>
              <div className="rounded-2xl border border-white/10 bg-ink/95 p-2 shadow-2xl backdrop-blur-xl">
                {solutions.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    aria-current={isActive(s.href) ? "page" : undefined}
                    className={`block rounded-xl px-4 py-3 text-sm transition ${isActive(s.href) ? "bg-white/10 text-lavender" : "text-white/80 hover:bg-white/5 hover:text-white"} ${focusRing}`}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {rest.map((link) => (
            <Link key={link.href} href={link.href} aria-current={isActive(link.href) ? "page" : undefined} className={linkClass(isActive(link.href))}>
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact/"
          aria-current={isActive("/contact/") ? "page" : undefined}
          className={`hidden min-h-11 items-center rounded-full bg-lavender px-5 text-sm font-semibold text-ink transition hover:bg-white xl:inline-flex ${focusRing}`}
        >
          Talk to an Expert
        </Link>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setOpen((v) => !v)}
          className={`flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white xl:hidden ${focusRing}`}
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5">
            {open ? (
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav id="mobile-menu" aria-label="Mobile" className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-t border-white/10 px-5 pb-8 pt-4 sm:px-6 xl:hidden">
          <div className="flex flex-col">
            {[home, ...rest].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive(link.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`border-b border-white/10 py-4 text-base ${isActive(link.href) ? "text-lavender" : "text-white/85"} ${focusRing}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Solutions</p>
          <div className="mt-2 flex flex-col">
            {solutions.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                aria-current={isActive(s.href) ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`py-3 text-base ${isActive(s.href) ? "text-lavender" : "text-white/85"} ${focusRing}`}
              >
                {s.label}
              </Link>
            ))}
          </div>

          <Link
            href="/contact/"
            aria-current={isActive("/contact/") ? "page" : undefined}
            onClick={() => setOpen(false)}
            className={`mt-6 flex min-h-12 items-center justify-center rounded-full bg-lavender font-semibold text-ink ${focusRing}`}
          >
            Talk to an Expert
          </Link>
        </nav>
      )}
    </header>
  );
}
