import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#9292F0]/40 bg-[#021861] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr] lg:gap-20">
          {/* Brand */}
          <div>
            <h2 className="border-l-2 border-[#DE1110] pl-4 text-3xl font-semibold tracking-[0.14em] sm:text-4xl">
              SECORVIX
            </h2>

            <p className="mt-6 text-sm leading-7 text-white/70">
              Security. Integration. Intelligence. Resilience.
            </p>

            <p className="mt-4 text-sm leading-7 text-white/70">
              Cybersecurity | System Integration | AI & Cyber Intelligence |
              Managed Security | Cyber Resilience
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#9292F0]">
              QUICK LINKS
            </p>

            <div className="mt-6 flex flex-col gap-4 text-sm text-white/70">
              <Link href="/" className="w-fit py-1 transition hover:text-[#9292F0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9292F0]">
                Home
              </Link>

              <Link href="/about" className="w-fit py-1 transition hover:text-[#9292F0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9292F0]">
                About
              </Link>

              <Link href="/solutions" className="w-fit py-1 transition hover:text-[#9292F0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9292F0]">
                Solutions
              </Link>

              <Link href="/industries" className="w-fit py-1 transition hover:text-[#9292F0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9292F0]">
                Industries
              </Link>

              <Link href="/contact" className="w-fit py-1 transition hover:text-[#9292F0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9292F0]">
                Contact
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#9292F0]">
              CONNECT
            </p>

            <div className="mt-6 flex flex-col gap-4 text-sm text-white/70">
              <Link href="/contact" className="w-fit py-1 transition hover:text-[#9292F0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9292F0]">
                Contact
              </Link>

              <Link href="/contact" className="w-fit py-1 transition hover:text-[#9292F0] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#9292F0]">
                Careers
              </Link>

              <span>LinkedIn</span>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-[#9292F0]/25 pt-8 text-xs text-white/70 md:flex-row md:items-center md:justify-between">
          <p>© 2026 SECORVIX. All rights reserved.</p>

          <p>Secure. Integrate. Respond. Evolve.</p>
        </div>
      </div>
    </footer>
  );
}