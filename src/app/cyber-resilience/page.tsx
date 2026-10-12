import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function CyberResiliencePage() {
  return (
    <main className="min-h-screen bg-[#9292F0] text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-[#021861]/40 bg-[#9292F0]">
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-10 lg:py-28 before:pointer-events-none before:absolute before:inset-y-12 before:right-8 before:-z-10 before:hidden before:w-1/4 before:rotate-6 before:border before:border-[#021861]/30 before:bg-[#021861]/10 lg:before:block">
          <p className="mb-8 border-l-2 border-[#DE1110] pl-4 text-xs font-semibold tracking-[0.2em] text-[#021861]">
            CYBER RESILIENCE
          </p>

          <h1 className="max-w-5xl text-[clamp(2.5rem,6vw,5.25rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-white text-balance [overflow-wrap:break-word]">
            Security Is Not Just About{" "}
            <span className="block text-white">Stopping Attacks</span>
          </h1>

          <p className="mt-10 max-w-3xl border-l-2 border-[#021861] pl-5 text-base leading-8 text-[#021861] sm:text-lg">
            A resilient organization must be able to anticipate, withstand,
            respond to and recover from cyber incidents.
          </p>

          <p className="mt-5 max-w-3xl pl-5 text-base leading-8 text-[#021861] sm:text-lg">
            SECORVIX helps organizations build resilience across technology,
            processes and people.
          </p>
        </div>
      </section>

      {/* Resilience Framework */}
      <section className="bg-[#9292F0] py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="border-l-2 border-[#DE1110] pl-4 text-xs font-semibold tracking-[0.2em] text-[#021861]">
            RESILIENCE FRAMEWORK
          </h2>

          <ol className="mt-12 grid min-w-0 grid-cols-1 border-y border-[#021861]/40 py-10 sm:mt-16 lg:grid-cols-6 lg:py-16 text-[#021861]">
            {[
              "Anticipate",
              "Prevent",
              "Detect",
              "Respond",
              "Recover",
              "Improve",
            ].map((step, index) => (
              <li key={step} className="relative min-w-0 pb-10 pl-9 last:pb-0 lg:pb-0 lg:pl-0 lg:pr-2 lg:pt-10 text-[#021861]">
                {index < 5 && (
                  <div aria-hidden="true" className="pointer-events-none absolute left-[7px] top-2 h-full w-px bg-[#021861]/60 lg:left-2 lg:top-[7px] lg:h-px lg:w-full" />
                )}
                <div aria-hidden="true" className="absolute left-0 top-0 flex h-4 w-4 items-center justify-center rounded-full border border-[#021861] bg-[#9292F0]">
                  <span className="h-1 w-1 rounded-full bg-[#DE1110]" />
                </div>
                <div className="text-5xl font-semibold leading-none tracking-[-0.05em] text-[#021861] sm:text-6xl">{String(index + 1).padStart(2, "0")}</div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white lg:text-xl xl:text-2xl">{step}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Resilience Services */}
      <section className="border-t border-[#021861]/40 bg-[#9292F0] py-16 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16 lg:px-8">
          <div>
            <p className="border-l-2 border-[#DE1110] pl-4 text-xs font-semibold tracking-[0.2em] text-[#021861]">
              BUILDING RESILIENCE
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white text-balance [overflow-wrap:break-word] sm:text-5xl">
              Build security that can adapt, respond and recover.
            </h2>

            <p className="mt-8 text-base leading-8 text-[#021861]">
              Cyber resilience connects risk management, security controls,
              response planning and recovery into one continuous operating
              model.
            </p>
          </div>

          <div className="grid min-w-0 grid-cols-1 gap-x-8 border-t-2 border-[#021861] sm:grid-cols-2 text-[#021861]">
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
                className="flex min-w-0 items-start gap-4 border-b border-[#021861]/50 py-6"
              >
                <div aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-[#DE1110]" />

                <span className="text-lg font-semibold leading-7 tracking-tight text-[#021861] [overflow-wrap:break-word]">
                  {service}
                </span>
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
              Build a more resilient digital enterprise.
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/75 sm:text-lg">
              Strengthen preparedness, response and recovery while continuously
              improving your cybersecurity posture.
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