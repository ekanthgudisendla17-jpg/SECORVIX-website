import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-[#9292F0] text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-[#021861]/40 bg-[#9292F0]">
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-10 lg:py-28 before:pointer-events-none before:absolute before:inset-y-12 before:right-8 before:-z-10 before:hidden before:w-1/4 before:rotate-6 before:border before:border-[#021861]/30 before:bg-[#021861]/10 lg:before:block">
          <p className="mb-8 border-l-2 border-[#DE1110] pl-4 text-xs font-semibold tracking-[0.2em] text-[#021861]">
            INDUSTRIES
          </p>

          <h1 className="max-w-5xl text-[clamp(2.5rem,6vw,5.25rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-white text-balance [overflow-wrap:break-word]">
            Cybersecurity Designed Around{" "}
            <span className="block text-white">Your Industry</span>
          </h1>

          <p className="mt-10 max-w-3xl border-l-2 border-[#021861] pl-5 text-base leading-8 text-[#021861] sm:text-lg">
            Different industries face different risks, regulations,
            technologies and operational challenges.
          </p>

          <p className="mt-5 max-w-3xl pl-5 text-base leading-8 text-[#021861] sm:text-lg">
            SECORVIX helps organizations design security architectures aligned
            to the way their industry operates.
          </p>
        </div>
      </section>

      {/* Industry Cards */}
      <section className="bg-[#9292F0] py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="border-t-2 border-[#021861] text-[#021861]">
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
                className={`grid min-w-0 grid-cols-1 gap-6 border-b border-[#021861]/50 py-10 sm:py-12 lg:items-start lg:gap-10 ${index === 2 || index === 6 ? "bg-[#021861] px-6 sm:px-8 lg:grid-cols-[5rem_minmax(0,1fr)_minmax(0,1fr)]" : index % 2 === 0 ? "lg:grid-cols-[5rem_minmax(0,1.2fr)_minmax(0,0.8fr)]" : "lg:grid-cols-[5rem_minmax(0,0.9fr)_minmax(0,1.1fr)]"}`}
              >
                <div className="flex items-center justify-between lg:flex-col lg:items-start lg:gap-6">
                  <span className={`text-5xl font-semibold leading-none tracking-[-0.04em] sm:text-6xl ${index === 2 || index === 6 ? "text-[#9292F0]" : "text-[#021861]"}`}>
                    {number}
                  </span>

                  <div aria-hidden="true" className="h-1.5 w-1.5 bg-[#DE1110]" />
                </div>

                <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-white text-balance [overflow-wrap:break-word] sm:text-4xl">{title}</h2>

                <p className={`max-w-xl text-base leading-8 sm:text-lg ${index === 2 || index === 6 ? "text-white/75" : "text-[#021861]"}`}>
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Approach */}
      <section className="border-t border-[#9292F0]/30 bg-[#021861] py-16 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 lg:px-8">
          <div>
            <p className="border-l-2 border-[#DE1110] pl-4 text-xs font-semibold tracking-[0.16em] text-[#9292F0]">
              INDUSTRY-ALIGNED SECURITY
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white text-balance [overflow-wrap:break-word] sm:text-5xl">
              Security built around business reality.
            </h2>

            <p className="mt-8 text-base leading-8 text-white/75">
              Industry security requirements vary because technology,
              regulation, operational dependency and business risk vary.
              SECORVIX combines cybersecurity architecture, integration,
              intelligence and managed security to build solutions aligned to
              each environment.
            </p>
          </div>

          <div className="grid min-w-0 gap-x-8 sm:grid-cols-2">
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
                className="min-w-0 border-t border-[#9292F0]/40 py-7"
              >
                <h3 className="text-xl font-semibold leading-tight tracking-tight text-white text-balance [overflow-wrap:break-word]">{title}</h3>

                <p className="mt-4 text-base leading-7 text-white/75">
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
              Build security around your industry requirements.
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-white/75 sm:text-lg">
              Talk to SECORVIX about the security architecture, integration and
              operational requirements of your organization.
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