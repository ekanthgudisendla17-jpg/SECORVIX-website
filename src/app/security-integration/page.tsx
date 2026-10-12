import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SecurityIntegrationPage() {
  return (
    <main className="min-h-screen bg-[#9292F0] text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-[#021861]/40 bg-[#9292F0]">
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-10 lg:py-28 before:pointer-events-none before:absolute before:inset-y-12 before:right-8 before:-z-10 before:hidden before:w-1/4 before:rotate-6 before:border before:border-[#021861]/30 before:bg-[#021861]/10 lg:before:block">
          <p className="mb-8 border-l-2 border-[#DE1110] pl-4 text-xs font-semibold tracking-[0.2em] text-[#021861]">
            SECURITY INTEGRATION
          </p>

          <h1 className="max-w-5xl text-[clamp(2.5rem,6vw,5.25rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-white text-balance [overflow-wrap:break-word]">
            From Security Technologies to{" "}
            <span className="block text-white">
              One Integrated Architecture
            </span>
          </h1>

          <p className="mt-10 max-w-3xl border-l-2 border-[#021861] pl-5 text-base leading-8 text-[#021861] sm:text-lg">
            Enterprise environments are increasingly complex. Different
            technologies, platforms, clouds, applications and security controls
            often operate in isolation.
          </p>

          <p className="mt-5 text-xl font-medium text-[#021861]">
            SECORVIX brings them together.
          </p>
        </div>
      </section>

      {/* Lifecycle */}
      <section className="bg-[#021861] py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="border-l-2 border-[#DE1110] pl-4 text-xs font-semibold tracking-[0.2em] text-[#9292F0]">
            INTEGRATION LIFECYCLE
          </h2>

          <ol className="mt-12 grid min-w-0 grid-cols-1 border-y border-[#9292F0]/30 py-10 sm:mt-16 sm:py-12 lg:grid-cols-8 lg:py-16">
            {[
              "Discover",
              "Assess",
              "Design",
              "Integrate",
              "Implement",
              "Optimize",
              "Monitor",
              "Evolve",
            ].map((step, index) => (
              <li key={step} className="relative min-w-0 pb-8 pl-9 last:pb-0 lg:pb-0 lg:pl-0 lg:pr-2 lg:pt-10">
                {index < 7 && (
                  <div aria-hidden="true" className="pointer-events-none absolute left-[7px] top-2 h-full w-px bg-[#9292F0]/60 lg:left-2 lg:top-[7px] lg:h-px lg:w-full" />
                )}
                <div aria-hidden="true" className="absolute left-0 top-0 flex h-4 w-4 items-center justify-center rounded-full border border-[#9292F0] bg-[#021861]">
                  <span className="h-1 w-1 rounded-full bg-[#DE1110]" />
                </div>
                <div className="text-xs font-medium tracking-[0.2em] text-[#9292F0]">{String(index + 1).padStart(2, "0")}</div>
                <h3 className="mt-2 text-xl font-semibold tracking-tight text-white lg:text-base xl:text-lg">{step}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Integration Positioning */}
      <section className="border-t border-[#021861]/40 bg-[#9292F0] py-16 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16 lg:px-8">
          <div>
            <p className="border-l-2 border-[#DE1110] pl-4 text-xs font-semibold tracking-[0.16em] text-[#021861]">
              VENDOR-NEUTRAL INTEGRATION
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white text-balance [overflow-wrap:break-word] sm:text-5xl">
              Integration that fits the enterprise.
            </h2>

            <p className="mt-8 text-base leading-8 text-[#021861]">
              We architect, integrate and optimize cybersecurity environments
              across the enterprise. Our vendor-neutral approach allows us to
              select and integrate the technologies best aligned to each
              customer&apos;s security objectives, existing infrastructure and
              business requirements.
            </p>
          </div>

          <div className="grid min-w-0 gap-x-8 sm:grid-cols-2 text-[#021861]">
            {[
              [
                "Security Architecture",
                "Design secure, scalable enterprise architectures",
              ],
              [
                "Technology Integration",
                "Integrate multiple security technologies and platforms",
              ],
              ["Migration", "Modernize legacy security environments"],
              [
                "Consolidation",
                "Reduce technology fragmentation and complexity",
              ],
              ["Deployment", "End-to-end implementation and rollout"],
              [
                "Optimization",
                "Improve performance, coverage and operational efficiency",
              ],
              ["Automation", "Automate repetitive security workflows"],
              ["Monitoring", "Establish continuous visibility and control"],
            ].map(([title, description]) => (
              <div
                key={title}
                className="min-w-0 border-t border-[#021861]/50 py-7"
              >
                <h3 className="relative pl-4 text-xl font-semibold leading-tight tracking-tight text-white text-balance [overflow-wrap:break-word] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:bg-[#DE1110] sm:text-2xl">{title}</h3>

                <p className="mt-4 text-base leading-7 text-[#021861]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[#021861]/40 bg-[#9292F0] py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="border-y-2 border-[#021861] bg-[#021861] px-5 py-14 text-center sm:px-10 sm:py-20 lg:px-16">
            <h2 className="mx-auto max-w-4xl text-3xl font-semibold leading-[1.05] tracking-[-0.04em] text-white text-balance [overflow-wrap:break-word] sm:text-4xl lg:text-6xl">
              Ready to simplify a complex security environment?
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/75 sm:text-lg">
              SECORVIX helps organizations move from disconnected security
              technologies to integrated, manageable and resilient
              architectures.
            </p>

            <a
              href="/contact"
              className="mt-10 inline-flex min-h-14 w-full items-center justify-center bg-[#9292F0] px-7 py-4 text-center text-sm font-semibold text-[#021861] transition-colors hover:bg-[#9292F0]/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
            >
              Talk to a Security Expert
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}