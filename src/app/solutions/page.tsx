import Navbar from "../components/Navbar";

export default function SolutionsPage() {
  return (
    <main className="min-h-screen bg-[#05070b] text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-cyan-400">
            CYBERSECURITY SOLUTIONS
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
            Security Across{" "}
            <span className="text-cyan-400">
              Every Layer of the Enterprise
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/55">
            Cybersecurity is no longer a single technology. It is an
            interconnected ecosystem. SECORVIX designs and integrates security
            capabilities across the entire digital environment.
          </p>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="bg-[#070a0f] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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
                className="rounded-2xl border border-white/10 bg-[#0a0e14] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <div className="text-xs font-semibold tracking-[0.2em] text-cyan-400">
                  {number}
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

      {/* Supporting Positioning */}
      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="rounded-3xl border border-cyan-400/15 bg-cyan-400/[0.025] p-8 lg:p-12">
            <p className="text-xs font-semibold tracking-[0.3em] text-cyan-400">
              INTEGRATED SECURITY
            </p>

            <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Security technologies deliver more value when they work together.
            </h2>

            <p className="mt-6 max-w-4xl leading-8 text-white/55">
              SECORVIX combines architecture, integration, intelligence,
              automation and expert-led services to create security
              environments that are connected, visible and resilient.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}