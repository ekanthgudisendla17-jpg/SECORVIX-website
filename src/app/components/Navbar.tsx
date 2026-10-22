"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const isSolutionsPage =
    pathname === "/solutions" ||
    pathname === "/security-integration" ||
    pathname === "/managed-security" ||
    pathname === "/ai-cyber-intelligence" ||
    pathname === "/cyber-resilience";

  const normalLink = "py-2 text-white/75 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";
  const activeLink = "py-2 text-white underline decoration-[#DE1110] decoration-1 underline-offset-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white";

  return (
    <header className="relative z-50 border-b border-[#9292F0]/30 bg-[#021861] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-5 lg:px-8 lg:py-6">

        {/* LOGO */}
        <Link
          href="/"
          className="text-xl font-semibold tracking-[0.25em] text-white"
        >
          SECORVIX
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-7 text-sm text-white/75 xl:flex">

          <Link
            href="/"
            className={pathname === "/" ? activeLink : normalLink}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={pathname === "/about" ? activeLink : normalLink}
          >
            About
          </Link>

          {/* DESKTOP SOLUTIONS DROPDOWN */}
          <div className="group relative">
            <button
              type="button"
              className={
                isSolutionsPage
                  ? "flex items-center gap-1 py-2 text-white underline decoration-[#DE1110] decoration-1 underline-offset-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  : "flex items-center gap-1 py-2 text-white/75 transition hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              }
            >
              Solutions
              <span className="text-[10px]">▼</span>
            </button>

            <div className="invisible absolute left-0 top-full z-[100] mt-0 w-72 border border-[#9292F0]/40 bg-[#021861] p-3 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">

              <Link
                href="/solutions"
                className={
                  pathname === "/solutions"
                    ? "block bg-white/5 px-4 py-3 text-[#9292F0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9292F0]"
                    : "block px-4 py-3 transition hover:bg-white/5 hover:text-[#9292F0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9292F0]"
                }
              >
                Cybersecurity Solutions
              </Link>

              <Link
                href="/security-integration"
                className={
                  pathname === "/security-integration"
                    ? "block bg-white/5 px-4 py-3 text-[#9292F0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9292F0]"
                    : "block px-4 py-3 transition hover:bg-white/5 hover:text-[#9292F0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9292F0]"
                }
              >
                Security Integration
              </Link>

              <Link
                href="/managed-security"
                className={
                  pathname === "/managed-security"
                    ? "block bg-white/5 px-4 py-3 text-[#9292F0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9292F0]"
                    : "block px-4 py-3 transition hover:bg-white/5 hover:text-[#9292F0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9292F0]"
                }
              >
                Managed Security
              </Link>

              <Link
                href="/ai-cyber-intelligence"
                className={
                  pathname === "/ai-cyber-intelligence"
                    ? "block bg-white/5 px-4 py-3 text-[#9292F0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9292F0]"
                    : "block px-4 py-3 transition hover:bg-white/5 hover:text-[#9292F0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9292F0]"
                }
              >
                AI & Cyber Intelligence
              </Link>

              <Link
                href="/cyber-resilience"
                className={
                  pathname === "/cyber-resilience"
                    ? "block bg-white/5 px-4 py-3 text-[#9292F0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9292F0]"
                    : "block px-4 py-3 transition hover:bg-white/5 hover:text-[#9292F0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9292F0]"
                }
              >
                Cyber Resilience
              </Link>

            </div>
          </div>

          <Link
            href="/industries"
            className={pathname === "/industries" ? activeLink : normalLink}
          >
            Industries
          </Link>

          <Link
            href="/contact"
            className={pathname === "/contact" ? activeLink : normalLink}
          >
            Contact
          </Link>

        </nav>

        {/* DESKTOP BUTTON */}
        <Link
          href="/contact"
          className="hidden min-h-12 items-center justify-center border border-white/50 bg-[#021861] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#9292F0] hover:text-[#021861] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white xl:flex"
        >
          Talk to an Expert
        </Link>

        {/* MOBILE NAVIGATION */}
        <details className="relative xl:hidden">
          <summary
            className="flex min-h-11 min-w-11 cursor-pointer list-none items-center justify-center text-3xl text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            aria-label="Open navigation menu"
          >
            ☰
          </summary>

          <div className="absolute right-0 top-full z-[100] mt-4 w-[280px] max-w-[calc(100vw-3rem)] border border-[#9292F0]/40 bg-[#021861] p-5 shadow-2xl max-sm:max-h-[calc(100dvh-8rem)] max-sm:overflow-y-auto max-sm:p-4">
            <nav className="flex flex-col gap-4 text-sm text-white/75 max-sm:gap-3">

              <Link
                href="/"
                className={pathname === "/" ? activeLink : normalLink}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={pathname === "/about" ? activeLink : normalLink}
              >
                About
              </Link>

              {/* MOBILE SOLUTIONS DROPDOWN */}
              <details>
                <summary
                  className={
                    isSolutionsPage
                      ? "cursor-pointer list-none text-[#9292F0]"
                      : "cursor-pointer list-none transition hover:text-[#9292F0]"
                  }
                >
                  Solutions ▼
                </summary>

                <div className="mt-3 ml-3 flex flex-col gap-3 border-l border-white/10 pl-4 max-sm:gap-2">

                  <Link
                    href="/solutions"
                    className={
                      pathname === "/solutions"
                        ? activeLink
                        : normalLink
                    }
                  >
                    Cybersecurity Solutions
                  </Link>

                  <Link
                    href="/security-integration"
                    className={
                      pathname === "/security-integration"
                        ? activeLink
                        : normalLink
                    }
                  >
                    Security Integration
                  </Link>

                  <Link
                    href="/managed-security"
                    className={
                      pathname === "/managed-security"
                        ? activeLink
                        : normalLink
                    }
                  >
                    Managed Security
                  </Link>

                  <Link
                    href="/ai-cyber-intelligence"
                    className={
                      pathname === "/ai-cyber-intelligence"
                        ? activeLink
                        : normalLink
                    }
                  >
                    AI & Cyber Intelligence
                  </Link>

                  <Link
                    href="/cyber-resilience"
                    className={
                      pathname === "/cyber-resilience"
                        ? activeLink
                        : normalLink
                    }
                  >
                    Cyber Resilience
                  </Link>

                </div>
              </details>

              <Link
                href="/industries"
                className={
                  pathname === "/industries"
                    ? activeLink
                    : normalLink
                }
              >
                Industries
              </Link>

              <Link
                href="/contact"
                className={
                  pathname === "/contact"
                    ? activeLink
                    : normalLink
                }
              >
                Contact
              </Link>

              <Link
                href="/contact"
                className="mt-2 border border-[#9292F0]/60 px-4 py-3 text-center font-semibold text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white max-sm:mt-3"
              >
                Talk to an Expert
              </Link>

            </nav>
          </div>
        </details>

      </div>
    </header>
  );
}