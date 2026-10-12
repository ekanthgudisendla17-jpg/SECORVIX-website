import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ManagedSecurityPage() {
  return (
    <main className="min-h-screen bg-[#9292F0] text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-[#021861]/40 bg-[#9292F0]">
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-10 lg:py-28 before:pointer-events-none before:absolute before:inset-y-12 before:right-8 before:-z-10 before:hidden before:w-1/4 before:rotate-6 before:border before:border-[#021861]/30 before:bg-[#021861]/10 lg:before:block">
          <p className="mb-8 border-l-2 border-[#DE1110] pl-4 text-xs font-semibold tracking-[0.2em] text-[#021861]">
            MANAGED SECURITY
          </p>

          <h1 className="max-w-5xl text-[clamp(2.5rem,6vw,5.25rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-white text-balance [overflow-wrap:break-word]">
            From Prevention to{" "}
            <span className="block text-white">Continuous Protection</span>
          </h1>

          <p className="mt-10 max-w-3xl border-l-2 border-[#021861] pl-5 text-base leading-8 text-[#021861] sm:text-lg">
            Threats don&apos;t operate only during business hours. Your security
            shouldn&apos;t either.
          </p>

          <p className="mt-5 max-w-3xl pl-5 text-base leading-8 text-[#021861] sm:text-lg">
            SECORVIX helps organizations establish continuous security
            monitoring, detection, investigation and response.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#021861] py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid min-w-0 grid-cols-1 gap-x-12 lg:grid-cols-2 lg:gap-x-16">
            {[
              [
                "01",
                "SOC Services",
                "Centralized security monitoring and operations.",
              ],
              [
                "02",
                "SIEM Services",
                "Security event collection, correlation and analytics.",
              ],
              [
                "03",
                "Threat Detection",
                "Identify suspicious activity and emerging threats.",
              ],
              [
                "04",
                "Threat Hunting",
                "Proactively search for indicators of compromise.",
              ],
              [
                "05",
                "Incident Response",
                "Investigate and contain security incidents.",
              ],
              ["06", "MDR", "Managed detection and response."],
              [
                "07",
                "Security Automation",
                "Automate repetitive security operations.",
              ],
              [
                "08",
                "Security Analytics",
                "Turn security data into actionable intelligence.",
              ],
            ].map(([number, title, description]) => (
              <div
                key={title}
                className="min-w-0 border-t border-[#9292F0]/40 py-8 sm:py-10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-semibold leading-none tracking-[-0.04em] text-[#9292F0] sm:text-6xl">
                    {number}
                  </span>

                  <div aria-hidden="true" className="h-1.5 w-1.5 bg-[#DE1110]" />
                </div>

                <h2 className="mt-6 text-2xl font-semibold leading-tight tracking-tight text-white text-balance [overflow-wrap:break-word] sm:text-3xl">{title}</h2>

                <p className="mt-4 max-w-xl text-base leading-7 text-white/75">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Continuous Operations */}
      <section className="border-t border-[#021861]/40 bg-[#9292F0] py-16 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16 lg:px-8">
          <div>
            <p className="border-l-2 border-[#DE1110] pl-4 text-xs font-semibold tracking-[0.16em] text-[#021861]">
              CONTINUOUS SECURITY OPERATIONS
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white text-balance [overflow-wrap:break-word] sm:text-5xl">
              Build faster detection and coordinated response.
            </h2>

            <p className="mt-8 text-base leading-8 text-[#021861]">
              Managed security brings together people, processes, monitoring,
              analytics, automation and threat intelligence into a continuous
              security operating model.
            </p>
          </div>

          <div className="relative min-w-0 border-t border-[#021861] bg-[#021861] p-6 before:absolute before:left-6 before:top-0 before:h-0.5 before:w-8 before:bg-[#DE1110] sm:p-8 sm:before:left-8 lg:p-10 lg:before:left-10">
            <h3 className="text-2xl font-semibold leading-tight tracking-tight text-white text-balance sm:text-3xl">
              Strengthen your security operations
            </h3>

            <p className="mt-6 text-base leading-8 text-white/75">
              Improve visibility, accelerate investigation and build a more
              consistent response capability across the enterprise.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex min-h-14 w-full items-center justify-center bg-[#9292F0] px-7 py-4 text-center text-sm font-semibold text-[#021861] transition-colors hover:bg-[#9292F0]/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
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