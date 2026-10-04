import Navbar from "../components/Navbar";
export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-[#05070b] text-white">
      {/* Navigation */}
    <Navbar />

      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-[#255dce]">
            INDUSTRIES
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold tracking-tight sm:text-6xl">
            Cybersecurity Designed Around{" "}
            <span className="text-[#255dce]">Your Industry</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/55">
            Different industries face different risks, regulations,
            technologies and operational challenges.
          </p>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-white/45">
            SECORVIX helps organizations design security architectures aligned
            to the way their industry operates.
          </p>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="bg-[#070a0f] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "01",
                "Banking & Financial Services",
                "Protect financial data, digital channels, identities, payment environments and critical infrastructure.",
              ],
              [
                "02",
                "Government & Public Sector",
                "Build resilient and secure digital government environments across departments, users and public services.",
              ],
              [
                "03",
                "Manufacturing",
                "Protect IT, OT, connected environments, industrial systems and production operations.",
              ],
              [
                "04",
                "Healthcare",
                "Secure sensitive information, connected medical devices, clinical systems and healthcare infrastructure.",
              ],
              [
                "05",
                "IT & Technology",
                "Protect cloud environments, applications, intellectual property and digital platforms.",
              ],
              [
                "06",
                "Education",
                "Secure users, devices, campuses, applications, research environments and institutional data.",
              ],
              [
                "07",
                "Critical Infrastructure",
                "Strengthen the security and resilience of essential systems, infrastructure and operations.",
              ],
            ].map(([number, title, description], index) => (
              <div
                key={title}
                className={`rounded-2xl border border-[#021861] bg-[#0a0e14] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#255dce]/40 ${
                  index === 6 ? "lg:col-span-3" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.2em] text-[#255dce]">
                    {number}
                  </span>

                  <div className="h-2.5 w-2.5 rounded-full bg-[#255dce] shadow-[0_0_14px_rgba(34,211,238,0.6)]" />
                </div>

                <h2 className="mt-8 text-xl font-semibold">{title}</h2>

                <p className="mt-4 max-w-xl leading-7 text-white/50">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Approach */}
      <section className="border-t border-white/10 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#255dce]">
              INDUSTRY-ALIGNED SECURITY
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              Security built around business reality.
            </h2>

            <p className="mt-6 leading-8 text-white/55">
              Industry security requirements vary because technology,
              regulation, operational dependency and business risk vary.
              SECORVIX combines cybersecurity architecture, integration,
              intelligence and managed security to build solutions aligned to
              each environment.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              [
                "Risk Alignment",
                "Align security priorities with operational and business risk.",
              ],
              [
                "Compliance Support",
                "Support security controls aligned with relevant regulatory requirements.",
              ],
              [
                "Architecture",
                "Design scalable security architectures around industry-specific environments.",
              ],
              [
                "Operational Resilience",
                "Improve preparedness, detection, response and recovery.",
              ],
              [
                "Integration",
                "Connect security technologies across complex digital environments.",
              ],
              [
                "Continuous Improvement",
                "Continuously improve security posture as risks and environments evolve.",
              ],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-xl border border-[#021861] bg-[#0a0e14] p-5 transition duration-300 hover:border-[#255dce]/35"
              >
                <h3 className="text-sm font-semibold">{title}</h3>

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
          <div className="rounded-3xl border border-[#255dce]/15 bg-[#255dce]/[0.025] p-10 text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Build security around your industry requirements.
            </h2>

            <p className="mx-auto mt-5 max-w-3xl leading-8 text-white/55">
              Talk to SECORVIX about the security architecture, integration and
              operational requirements of your organization.
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