"use client";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isSolutionsPage =
    pathname === "/solutions" ||
    pathname === "/security-integration" ||
    pathname === "/managed-security" ||
    pathname === "/ai-cyber-intelligence" ||
    pathname === "/cyber-resilience";

  const normalLink = "transition hover:text-[#255dce]";
  const activeLink = "text-[#255dce]";

  return (
    <header className="relative z-50 border-b border-white/10 bg-[#05070b]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* LOGO */}
        <a
          href="/"
          className="text-xl font-semibold tracking-[0.25em] text-white"
        >
          SECORVIX
        </a>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">

          <a
            href="/"
            className={pathname === "/" ? activeLink : normalLink}
          >
            Home
          </a>

          <a
            href="/about"
            className={pathname === "/about" ? activeLink : normalLink}
          >
            About
          </a>

          {/* DESKTOP SOLUTIONS DROPDOWN */}
          <div className="group relative">
            <button
              type="button"
              className={
                isSolutionsPage
                  ? "flex items-center gap-1 text-[#255dce]"
                  : "flex items-center gap-1 transition hover:text-[#255dce]"
              }
            >
              Solutions
              <span className="text-[10px]">▼</span>
            </button>

            <div className="invisible absolute left-0 top-full z-[100] mt-4 w-64 rounded-xl border border-white/10 bg-[#0a0e14] p-3 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100">

              <a
                href="/solutions"
                className={
                  pathname === "/solutions"
                    ? "block rounded-lg bg-white/5 px-4 py-3 text-[#255dce]"
                    : "block rounded-lg px-4 py-3 transition hover:bg-white/5 hover:text-[#255dce]"
                }
              >
                Cybersecurity Solutions
              </a>

              <a
                href="/security-integration"
                className={
                  pathname === "/security-integration"
                    ? "block rounded-lg bg-white/5 px-4 py-3 text-[#255dce]"
                    : "block rounded-lg px-4 py-3 transition hover:bg-white/5 hover:text-[#255dce]"
                }
              >
                Security Integration
              </a>

              <a
                href="/managed-security"
                className={
                  pathname === "/managed-security"
                    ? "block rounded-lg bg-white/5 px-4 py-3 text-[#255dce]"
                    : "block rounded-lg px-4 py-3 transition hover:bg-white/5 hover:text-[#255dce]"
                }
              >
                Managed Security
              </a>

              <a
                href="/ai-cyber-intelligence"
                className={
                  pathname === "/ai-cyber-intelligence"
                    ? "block rounded-lg bg-white/5 px-4 py-3 text-[#255dce]"
                    : "block rounded-lg px-4 py-3 transition hover:bg-white/5 hover:text-[#255dce]"
                }
              >
                AI & Cyber Intelligence
              </a>

              <a
                href="/cyber-resilience"
                className={
                  pathname === "/cyber-resilience"
                    ? "block rounded-lg bg-white/5 px-4 py-3 text-[#255dce]"
                    : "block rounded-lg px-4 py-3 transition hover:bg-white/5 hover:text-[#255dce]"
                }
              >
                Cyber Resilience
              </a>

            </div>
          </div>

          <a
            href="/industries"
            className={pathname === "/industries" ? activeLink : normalLink}
          >
            Industries
          </a>

          <a
            href="/contact"
            className={pathname === "/contact" ? activeLink : normalLink}
          >
            Contact
          </a>

        </nav>

        {/* DESKTOP BUTTON */}
        <a
          href="/contact"
          className="hidden rounded-md border border-[#255dce]/60 px-5 py-2 text-sm font-semibold text-[#255dce] transition hover:bg-[#255dce] hover:text-black md:block"
        >
          Talk to an Expert
        </a>

        {/* MOBILE NAVIGATION */}
        <details className="relative md:hidden">
          <summary
            className="cursor-pointer list-none text-3xl text-white"
            aria-label="Open navigation menu"
          >
            ☰
          </summary>

          <div className="absolute right-0 top-full z-[100] mt-4 w-[280px] rounded-xl border border-white/10 bg-[#070a0f] p-5 shadow-2xl">
            <nav className="flex flex-col gap-4 text-sm text-white/70">

              <a
                href="/"
                className={pathname === "/" ? activeLink : normalLink}
              >
                Home
              </a>

              <a
                href="/about"
                className={pathname === "/about" ? activeLink : normalLink}
              >
                About
              </a>

              {/* MOBILE SOLUTIONS DROPDOWN */}
              <details>
                <summary
                  className={
                    isSolutionsPage
                      ? "cursor-pointer list-none text-[#255dce]"
                      : "cursor-pointer list-none transition hover:text-[#255dce]"
                  }
                >
                  Solutions ▼
                </summary>

                <div className="mt-3 ml-3 flex flex-col gap-3 border-l border-white/10 pl-4">

                  <a
                    href="/solutions"
                    className={
                      pathname === "/solutions"
                        ? activeLink
                        : normalLink
                    }
                  >
                    Cybersecurity Solutions
                  </a>

                  <a
                    href="/security-integration"
                    className={
                      pathname === "/security-integration"
                        ? activeLink
                        : normalLink
                    }
                  >
                    Security Integration
                  </a>

                  <a
                    href="/managed-security"
                    className={
                      pathname === "/managed-security"
                        ? activeLink
                        : normalLink
                    }
                  >
                    Managed Security
                  </a>

                  <a
                    href="/ai-cyber-intelligence"
                    className={
                      pathname === "/ai-cyber-intelligence"
                        ? activeLink
                        : normalLink
                    }
                  >
                    AI & Cyber Intelligence
                  </a>

                  <a
                    href="/cyber-resilience"
                    className={
                      pathname === "/cyber-resilience"
                        ? activeLink
                        : normalLink
                    }
                  >
                    Cyber Resilience
                  </a>

                </div>
              </details>

              <a
                href="/industries"
                className={
                  pathname === "/industries"
                    ? activeLink
                    : normalLink
                }
              >
                Industries
              </a>

              <a
                href="/contact"
                className={
                  pathname === "/contact"
                    ? activeLink
                    : normalLink
                }
              >
                Contact
              </a>

              <a
                href="/contact"
                className="mt-2 rounded-md border border-[#255dce]/60 px-4 py-3 text-center font-semibold text-[#255dce]"
              >
                Talk to an Expert
              </a>

            </nav>
          </div>
        </details>

      </div>
    </header>
  );
}