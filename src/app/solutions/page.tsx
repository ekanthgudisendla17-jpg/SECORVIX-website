import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#9292F0] text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-[#021861]/40 bg-[#9292F0]">
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-10 lg:py-28 before:pointer-events-none before:absolute before:inset-y-12 before:right-8 before:-z-10 before:hidden before:w-1/4 before:rotate-6 before:border before:border-[#021861]/30 before:bg-[#021861]/10 lg:before:block">
          <p className="mb-8 border-l-2 border-[#DE1110] pl-4 text-xs font-semibold tracking-[0.2em] text-[#021861]">
            CYBERSECURITY SOLUTIONS
          </p>

          <h1 className="max-w-5xl text-[clamp(2.5rem,6vw,5.25rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-white text-balance [overflow-wrap:break-word]">
            Security Across{" "}
            <span className="block text-white">
              Every Layer of the Enterprise
            </span>
          </h1>

          <p className="mt-10 max-w-3xl border-l-2 border-[#021861] pl-5 text-base leading-8 text-[#021861] sm:text-lg">
            Cybersecurity is no longer a single technology. It is an
            interconnected ecosystem. SECORVIX designs and integrates security
            capabilities across the entire digital environment.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="bg-[#9292F0] py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid min-w-0 grid-cols-1 border border-[#021861] bg-[#021861] lg:grid-cols-2">
            {[
              [
                "01",
                "Network Security",
                "Protect networks, infrastructure and connectivity with integrated security architecture, segmentation, secure access and advanced threat protection.",
              ],
              [
                "02",
                "Cloud Security",
                "Secure cloud infrastructure, workloads, applications, identities and data across modern hybrid and multi-cloud environments.",
              ],
              [
                "03",
                "Identity & Access",
                "Build identity-centric security with strong authentication, access controls, privileged access protection and Zero Trust principles.",
              ],
              [
                "04",
                "Endpoint & Workplace Security",
                "Protect users, devices and endpoints while enabling secure digital work environments.",
              ],
              [
                "05",
                "Data & Application Security",
                "Protect sensitive information and applications throughout their lifecycle—from development and deployment to operations.",
              ],
              [
                "06",
                "Security Operations",
                "Improve detection, investigation and response through integrated monitoring, analytics, automation, threat intelligence and AI.",
              ],
            ].map(([number, title, description]) => (
              <div
                key={title}
                className={`min-w-0 p-6 sm:p-8 ${number === "01" || number === "06" ? "lg:col-span-2 lg:p-12" : "lg:p-10"} ${number !== "01" ? "border-t border-white/20" : ""} ${number === "03" || number === "05" ? "lg:border-l" : ""}`}
              >
                <div className="mb-6 flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-white">
                  <span aria-hidden="true" className="h-1.5 w-1.5 bg-[#DE1110]" />
                  {number}
                </div>
                <div className={number === "01" || number === "06" ? "grid min-w-0 gap-5 lg:grid-cols-2 lg:gap-16" : "min-w-0"}>
                  <h2 className={`font-semibold leading-tight tracking-[-0.03em] text-white text-balance [overflow-wrap:break-word] ${number === "01" || number === "06" ? "text-3xl sm:text-4xl lg:text-5xl" : "text-2xl sm:text-3xl"}`}>{title}</h2>
                  <p className={`max-w-xl text-base leading-7 text-white/75 ${number === "01" || number === "06" ? "" : "mt-5"}`}>
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting Positioning */}
      <section className="border-t border-[#9292F0]/30 bg-[#021861] py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="border-y border-[#9292F0]/40 py-10 sm:py-14">
            <p className="border-l-2 border-[#DE1110] pl-4 text-xs font-semibold tracking-[0.2em] text-[#9292F0]">
              INTEGRATED SECURITY
            </p>

            <h2 className="mt-8 max-w-4xl text-3xl font-semibold leading-[1.08] tracking-[-0.035em] text-white text-balance [overflow-wrap:break-word] sm:text-4xl lg:text-5xl">
              Security technologies deliver more value when they work together.
            </h2>

            <p className="mt-8 max-w-3xl text-base leading-8 text-white/75 sm:text-lg">
              SECORVIX combines architecture, integration, intelligence,
              automation and expert-led services to create security
              environments that are connected, visible and resilient.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}