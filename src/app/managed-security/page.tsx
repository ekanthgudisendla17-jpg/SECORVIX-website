import Navbar from "../components/Navbar";

export default function ManagedSecurityPage() {
  return (
    <main className="min-h-screen bg-[#05070b] text-white">
      {/* Navigation */}
     <Navbar />
      {/* Hero */}
      <section className="border-b border-[#021861]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-[#255dce]">
            MANAGED SECURITY
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold tracking-tight sm:text-6xl">
            From Prevention to{" "}
            <span className="text-[#255dce]">Continuous Protection</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/55">
            Threats don&apos;t operate only during business hours. Your security
            shouldn&apos;t either.
          </p>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-white/45">
            SECORVIX helps organizations establish continuous security
            monitoring, detection, investigation and response.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#070a0f] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
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
              [
                "06",
                "MDR",
                "Managed detection and response.",
              ],
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
                className="rounded-2xl border border-[#021861] bg-[#0a0e14] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#255dce]/40"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#255dce]">
                    {number}
                  </span>

                  <div className="h-2.5 w-2.5 rounded-full hover:text-[#255dce] shadow-[0_0_14px_rgba(34,211,238,0.6)]" />
                </div>

                <h2 className="mt-8 text-xl font-semibold">{title}</h2>

                <p className="mt-4 leading-7 text-white/50">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Continuous Operations */}
      <section className="border-t border-[#021861] py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#255dce]">
              CONTINUOUS SECURITY OPERATIONS
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Build faster detection and coordinated response.
            </h2>

            <p className="mt-6 leading-8 text-white/55">
              Managed security brings together people, processes, monitoring,
              analytics, automation and threat intelligence into a continuous
              security operating model.
            </p>
          </div>

          <div className="rounded-3xl border border-[#021861] p-8 transition hover:border-[#255dce] lg:p-10">
            <h3 className="text-2xl font-semibold">
              Strengthen your security operations
            </h3>

            <p className="mt-5 leading-8 text-white/55">
              Improve visibility, accelerate investigation and build a more
              consistent response capability across the enterprise.
            </p>

            <a
              href="/contact"
              className="mt-8 inline-flex rounded-md hover:text-[#255dce] px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
            >
              Talk to a Security Expert
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}