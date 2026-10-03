import Navbar from "../components/Navbar";

export default function SecurityIntegrationPage() {
  return (
    <main className="min-h-screen bg-[#05070b] text-white">
      {/* Navigation */}
     <Navbar />

      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-cyan-400">
            SECURITY INTEGRATION
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold tracking-tight sm:text-6xl">
            From Security Technologies to{" "}
            <span className="text-cyan-400">
              One Integrated Architecture
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/55">
            Enterprise environments are increasingly complex. Different
            technologies, platforms, clouds, applications and security controls
            often operate in isolation.
          </p>

          <p className="mt-4 text-xl font-medium text-white/80">
            SECORVIX brings them together.
          </p>
        </div>
      </section>

      {/* Lifecycle */}
      <section className="bg-[#070a0f] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.3em] text-cyan-400">
            INTEGRATION LIFECYCLE
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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
              <div
                key={step}
                className="rounded-2xl border border-white/10 bg-[#0a0e14] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <div className="text-xs font-semibold tracking-[0.2em] text-cyan-400">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h2 className="mt-6 text-xl font-semibold">{step}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Positioning */}
      <section className="border-t border-white/10 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-cyan-400">
              VENDOR-NEUTRAL INTEGRATION
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Integration that fits the enterprise.
            </h2>

            <p className="mt-6 leading-8 text-white/55">
              We architect, integrate and optimize cybersecurity environments
              across the enterprise. Our vendor-neutral approach allows us to
              select and integrate the technologies best aligned to each
              customer&apos;s security objectives, existing infrastructure and
              business requirements.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
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
                className="rounded-xl border border-white/10 bg-[#0a0e14] p-5 transition duration-300 hover:border-cyan-400/35"
              >
                <h3 className="text-sm font-semibold text-white">{title}</h3>

                <p className="mt-3 text-sm leading-6 text-white/45">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-[#070a0f] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl border border-cyan-400/15 bg-cyan-400/[0.025] p-10 text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Ready to simplify a complex security environment?
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-white/55">
              SECORVIX helps organizations move from disconnected security
              technologies to integrated, manageable and resilient
              architectures.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex rounded-md bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
            >
              Talk to a Security Expert
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}