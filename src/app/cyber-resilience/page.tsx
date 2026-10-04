import Navbar from "../components/Navbar";

export default function CyberResiliencePage() {
  return (
    <main className="min-h-screen bg-[#05070b] text-white">
      {/* Navigation */}
      <Navbar />
      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-[#255dce]">
            CYBER RESILIENCE
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold tracking-tight sm:text-6xl">
            Security Is Not Just About{" "}
            <span className="text-[#255dce]">Stopping Attacks</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/55">
            A resilient organization must be able to anticipate, withstand,
            respond to and recover from cyber incidents.
          </p>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-white/45">
            SECORVIX helps organizations build resilience across technology,
            processes and people.
          </p>
        </div>
      </section>

      {/* Resilience Framework */}
      <section className="bg-[#070a0f] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#255dce]">
            RESILIENCE FRAMEWORK
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              "Anticipate",
              "Prevent",
              "Detect",
              "Respond",
              "Recover",
              "Improve",
            ].map((step, index) => (
              <div
                key={step}
                className="rounded-2xl border border-[#021861] bg-[#0a0e14] p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-[#255dce]/40"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-[#255dce]/30 bg-[#255dce]/[0.05] text-xs font-semibold text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h2 className="mt-5 text-sm font-semibold">{step}</h2>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resilience Services */}
      <section className="border-t border-white/10 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#255dce]">
              BUILDING RESILIENCE
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Build security that can adapt, respond and recover.
            </h2>

            <p className="mt-6 leading-8 text-white/55">
              Cyber resilience connects risk management, security controls,
              response planning and recovery into one continuous operating
              model.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Cyber Risk Assessment",
              "Vulnerability Management",
              "Security Posture Assessment",
              "Incident Response Planning",
              "Cyber Recovery",
              "Business Continuity Alignment",
              "Security Validation",
              "Security Maturity Assessment",
            ].map((service) => (
              <div
                key={service}
                className="flex items-center gap-4 rounded-xl border border-[#021861] bg-[#0a0e14] p-5 transition duration-300 hover:border-[#255dce]/35"
              >
                <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#255dce] shadow-[0_0_14px_rgba(34,211,238,0.6)]" />

                <span className="text-sm font-medium text-white/80">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-[#070a0f] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl border border-[#255dce]/15 bg-[#255dce]/[0.025] p-10 text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Build a more resilient digital enterprise.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-white/55">
              Strengthen preparedness, response and recovery while continuously
              improving your cybersecurity posture.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex rounded-md bg-[#255dce] px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
            >
              Talk to a Security Expert
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}