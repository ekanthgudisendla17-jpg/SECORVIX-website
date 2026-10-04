import Navbar from "../components/Navbar";

export default function AICyberIntelligencePage() {
  return (
    <main className="min-h-screen bg-[#05070b] text-white">
      {/* Navigation */}
     <Navbar />

      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-[#255dce]">
            AI & CYBER INTELLIGENCE
          </p>

          <h1 className="max-w-5xl text-5xl font-semibold tracking-tight sm:text-6xl">
            AI-Powered Cybersecurity.{" "}
            <span className="text-[#255dce]">Human-Led Security.</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/55">
            AI is transforming cybersecurity—but technology alone is not
            enough.
          </p>

          <p className="mt-4 max-w-3xl text-lg leading-8 text-white/45">
            SECORVIX combines AI capabilities, security intelligence,
            automation and human expertise to improve how organizations detect,
            understand and respond to threats.
          </p>
        </div>
      </section>

      {/* Intelligence Core */}
      <section className="bg-[#070a0f] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative mx-auto flex min-h-[430px] max-w-4xl items-center justify-center">
            <div className="absolute h-[360px] w-[360px] rounded-full border border-[#255dce]/10" />
            <div className="absolute h-[280px] w-[280px] rounded-full border border-[#255dce]/20" />
            <div className="absolute h-[190px] w-[190px] rounded-full border border-[#255dce]/30" />

            <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full border border-[#255dce]/50 bg-[#07131a] shadow-[0_0_80px_rgba(34,211,238,0.18)]">
              <div className="text-center">
                <div className="text-2xl font-semibold text-cyan-300">AI</div>
                <div className="mt-2 text-[9px] tracking-[0.2em] text-white/45">
                  INTELLIGENCE
                </div>
              </div>
            </div>

            <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-lg border border-[#021861] bg-[#0a0e14] px-5 py-3 text-xs text-white/70">
              Threat Intelligence
            </div>

            <div className="absolute left-4 top-1/2 -translate-y-1/2 rounded-lg border border-[#021861] bg-[#0a0e14] px-5 py-3 text-xs text-white/70">
              Human Expertise
            </div>

            <div className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg border border-[#021861] bg-[#0a0e14] px-5 py-3 text-xs text-white/70">
              Automation
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-lg border border-[#021861] bg-[#0a0e14] px-5 py-3 text-xs text-white/70">
              Security Analytics
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="border-t border-white/10 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            {[
              [
                "01",
                "AI-Assisted Detection",
                "Identify abnormal behavior and emerging threats faster.",
              ],
              [
                "02",
                "Intelligent Analysis",
                "Correlate security events, threat intelligence and contextual information to prioritize what matters.",
              ],
              [
                "03",
                "Automated Response",
                "Accelerate investigation, containment and remediation through intelligent automation.",
              ],
            ].map(([number, title, description]) => (
              <div
                key={title}
                className="rounded-2xl border border-[#021861] bg-[#0a0e14] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#255dce]/40"
              >
                <div className="text-xs font-semibold tracking-[0.2em] text-[#255dce]">
                  {number}
                </div>

                <h2 className="mt-8 text-xl font-semibold">{title}</h2>

                <p className="mt-4 leading-7 text-white/50">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl border border-[#255dce]/15 bg-[#255dce]/[0.025] p-10 text-center">
            <p className="mx-auto max-w-4xl text-lg leading-8 text-white/65">
              We don&apos;t position AI as a replacement for cybersecurity
              professionals. We use AI to augment human expertise, accelerate
              decision-making and improve security outcomes.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}