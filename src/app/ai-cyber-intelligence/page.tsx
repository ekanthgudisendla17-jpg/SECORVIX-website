import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AICyberIntelligencePage() {
  return (
    <main className="min-h-screen bg-[#9292F0] text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-[#021861]/40 bg-[#9292F0]">
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-10 lg:py-28 before:pointer-events-none before:absolute before:inset-y-12 before:right-8 before:-z-10 before:hidden before:w-1/4 before:rotate-6 before:border before:border-[#021861]/30 before:bg-[#021861]/10 lg:before:block">
          <p className="mb-8 border-l-2 border-[#DE1110] pl-4 text-xs font-semibold tracking-[0.2em] text-[#021861]">
            AI & CYBER INTELLIGENCE
          </p>

          <h1 className="max-w-5xl text-[clamp(2.5rem,6vw,5.25rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-white text-balance [overflow-wrap:break-word]">
            AI-Powered Cybersecurity.{" "}
            <span className="block text-white">Human-Led Security.</span>
          </h1>

          <p className="mt-10 max-w-3xl border-l-2 border-[#021861] pl-5 text-base leading-8 text-[#021861] sm:text-lg">
            AI is transforming cybersecurity—but technology alone is not
            enough.
          </p>

          <p className="mt-5 max-w-3xl pl-5 text-base leading-8 text-[#021861] sm:text-lg">
            SECORVIX combines AI capabilities, security intelligence,
            automation and human expertise to improve how organizations detect,
            understand and respond to threats.
          </p>
        </div>
      </section>

      {/* Intelligence Core */}
      <section className="bg-[#021861] py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative mx-auto max-w-5xl">
            <div className="relative mx-auto aspect-square w-full max-w-[520px]">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute inset-[6%] rounded-full border border-[#9292F0]/40" />
                <div className="absolute inset-[14%] rounded-full border-[8px] border-[#9292F0]/20 sm:border-[14px]" />
                <div className="absolute inset-[20%] rounded-full border border-dashed border-[#9292F0]/60" />
                <div className="absolute inset-[28%] rounded-full border-2 border-[#9292F0]/60" />
                <div className="absolute inset-x-[5%] inset-y-[30%] rotate-[-35deg] rounded-[50%] border border-[#9292F0]/50" />
                <div className="absolute inset-x-[5%] inset-y-[30%] rotate-[35deg] rounded-[50%] border border-[#9292F0]/50" />
                <div className="absolute left-1/2 top-[2%] h-[96%] w-px bg-[#9292F0]/25" />
                <div className="absolute left-[2%] top-1/2 h-px w-[96%] bg-[#9292F0]/25" />
                <div className="absolute left-[18%] top-[22%] h-2 w-2 rounded-full bg-[#9292F0] ring-4 ring-[#9292F0]/15" />
                <div className="absolute right-[18%] bottom-[22%] h-2 w-2 rounded-full bg-[#9292F0] ring-4 ring-[#9292F0]/15" />
                <div className="absolute right-[23%] top-[18%] h-2 w-2 rounded-full bg-[#DE1110]" />
                <div className="absolute left-[23%] bottom-[18%] h-2 w-2 rounded-full bg-[#DE1110]" />
              </div>
              <div className="absolute inset-[33%] flex items-center justify-center rounded-full border border-[#9292F0]/70 bg-[#021861] shadow-[0_0_60px_rgba(146,146,240,0.18)]">
                <div className="text-center">
                  <div className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">AI</div>
                  <div className="mt-2 text-[10px] tracking-[0.08em] text-white/75 sm:text-xs sm:tracking-[0.12em]">INTELLIGENCE</div>
                </div>
              </div>
            </div>
            <div className="mt-6 grid min-w-0 grid-cols-1 gap-x-6 sm:grid-cols-2 lg:contents">
              <div className="border-t border-[#9292F0]/40 py-4 text-sm font-semibold text-white lg:absolute lg:left-0 lg:top-[12%] lg:w-[25%]">Threat Intelligence</div>
              <div className="border-t border-[#9292F0]/40 py-4 text-sm font-semibold text-white lg:absolute lg:left-0 lg:top-1/2 lg:w-[20%] lg:-translate-y-1/2">Human Expertise</div>
              <div className="border-t border-[#9292F0]/40 py-4 text-sm font-semibold text-white lg:absolute lg:right-0 lg:top-1/2 lg:w-[20%] lg:-translate-y-1/2 lg:text-right">Automation</div>
              <div className="border-t border-[#9292F0]/40 py-4 text-sm font-semibold text-white lg:absolute lg:bottom-[12%] lg:right-0 lg:w-[25%] lg:text-right">Security Analytics</div>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="border-t border-[#9292F0]/30 bg-[#021861] py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid min-w-0 grid-cols-1 border-t border-[#9292F0]/40 lg:grid-cols-3">
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
                className={`min-w-0 py-8 sm:py-10 ${number === "01" ? "lg:pr-8" : "border-t border-[#9292F0]/25 lg:border-l lg:border-t-0 lg:px-8"}`}
              >
                <div className="relative pl-4 text-5xl font-semibold leading-none tracking-[-0.04em] text-[#9292F0] before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:bg-[#DE1110] sm:text-6xl">
                  {number}
                </div>

                <h2 className="mt-6 text-2xl font-semibold leading-tight tracking-tight text-white text-balance [overflow-wrap:break-word] sm:text-3xl">{title}</h2>

                <p className="mt-4 text-base leading-7 text-white/75">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t-2 border-[#9292F0]/60 pt-10 text-center sm:mt-12 sm:pt-14">
            <p className="mx-auto max-w-4xl text-xl leading-9 text-white/75 sm:text-2xl sm:leading-10">
              We don&apos;t position AI as a replacement for cybersecurity
              professionals. We use AI to augment human expertise, accelerate
              decision-making and improve security outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}