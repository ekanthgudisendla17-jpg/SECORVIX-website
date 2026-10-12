import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#9292F0] text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-[#021861]/40 bg-[#9292F0]">
        <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-10 lg:py-28 before:pointer-events-none before:absolute before:inset-y-12 before:right-8 before:-z-10 before:hidden before:w-1/4 before:rotate-6 before:border before:border-[#021861]/30 before:bg-[#021861]/10 lg:before:block">
          <p className="mb-8 border-l-2 border-[#DE1110] pl-4 text-xs font-semibold tracking-[0.2em] text-[#021861]">
            ABOUT SECORVIX
          </p>

          <h1 className="max-w-5xl text-[clamp(2.5rem,6vw,5.25rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-balance [overflow-wrap:break-word]">
            Building the Security Infrastructure for a{" "}
            <span className="block text-white">Connected World</span>
          </h1>

          <p className="mt-10 max-w-3xl border-l-2 border-[#021861] text-base leading-8 text-[#021861] sm:text-lg pl-5">
            SECORVIX brings together cybersecurity expertise, system
            integration, security intelligence, AI capabilities and a broad
            technology ecosystem to help organizations build secure, visible,
            intelligent and resilient digital environments.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="border-b border-[#9292F0]/25 bg-[#021861] py-16 sm:py-24 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16 lg:px-8">
          <div>
            <p className="border-l-2 border-[#DE1110] pl-4 text-xs font-semibold tracking-[0.2em] text-[#9292F0]">
              WHO WE ARE
            </p>

            <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-balance [overflow-wrap:break-word] sm:text-5xl">
              More than a cybersecurity services company.
            </h2>
          </div>

          <div className="space-y-6 border-t border-[#9292F0]/40 pt-8 text-base leading-8 text-white/75 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <p>
              Digital transformation has created unprecedented opportunities
              and unprecedented cyber risk.
            </p>

            <p>
              Organizations need more than individual security products. They
              need a partner capable of understanding the entire environment,
              integrating technologies and continuously improving their
              security posture.
            </p>

            <p className="text-lg font-medium text-white">
              SECORVIX was created with this purpose.
            </p>

            <p>
              We help organizations build security architectures that are
              connected, intelligent and resilient across the entire digital
              enterprise.
            </p>
          </div>
        </div>
      </section>

      {/* Six Principles */}
      <section className="bg-[#9292F0] py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="border-l-2 border-[#DE1110] pl-4 text-xs font-semibold tracking-[0.2em] text-[#021861]">
            BRAND PHILOSOPHY
          </p>

          <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-balance [overflow-wrap:break-word] sm:text-5xl lg:text-6xl">
            One Name.{" "}
            <span className="block text-white">
              Six Cybersecurity Principles.
            </span>
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-x-16 sm:mt-16 lg:grid-cols-2 text-[#021861]">
            {[
              [
                "S",
                "Security",
                "Protecting digital assets, infrastructure, identities and data.",
              ],
              [
                "O",
                "Orchestration",
                "Bringing security technologies, processes and teams together.",
              ],
              [
                "R",
                "Resilience",
                "Enabling organizations to withstand, respond to and recover from cyber threats.",
              ],
              [
                "V",
                "Visibility",
                "Creating a unified view across network, cloud, endpoint, identity and data.",
              ],
              [
                "I",
                "Intelligence",
                "Turning security data and threat intelligence into actionable insights.",
              ],
              [
                "X",
                "eXecution",
                "Converting strategy into implementation, response and measurable outcomes.",
              ],
            ].map(([letter, title, description]) => (
              <div
                key={title}
                className="grid min-w-0 grid-cols-[3.5rem_minmax(0,1fr)] gap-x-5 border-t border-[#021861]/60 py-8 sm:grid-cols-[5.5rem_minmax(0,1fr)] sm:gap-x-7 sm:py-10"
              >
                <div aria-hidden="true" className="row-span-2 select-none text-[4.5rem] font-semibold leading-[0.85] tracking-[-0.06em] text-[#021861] sm:text-[7rem]">
                  {letter}
                </div>

                <h3 className="relative pl-4 text-xl font-semibold leading-tight tracking-tight text-white before:absolute before:left-0 before:top-2 before:h-1.5 before:w-1.5 before:bg-[#DE1110] sm:text-2xl">{title}</h3>

                <p className="mt-4 max-w-md text-base leading-7 text-[#021861]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Mission Purpose Promise */}
      <section className="border-t border-[#9292F0]/30 bg-[#021861] py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 lg:grid-cols-2">
            <div className="min-w-0 border-t border-[#9292F0]/40 py-8 sm:py-10 lg:col-span-2">
              <h2 className="border-l-2 border-[#DE1110] pl-4 text-sm font-semibold tracking-[0.2em] text-[#9292F0]">
                VISION
              </h2>

              <p className="mt-6 max-w-4xl text-3xl sm:text-4xl font-semibold leading-snug tracking-tight text-white text-balance [overflow-wrap:break-word]">
                To become a trusted global cybersecurity integration and
                cyber-resilience partner for the digital enterprise.
              </p>
            </div>

            <div className="min-w-0 border-t border-[#9292F0]/40 py-8 sm:py-10">
              <h2 className="border-l-2 border-[#DE1110] pl-4 text-sm font-semibold tracking-[0.2em] text-[#9292F0]">
                MISSION
              </h2>

              <p className="mt-6 max-w-4xl text-2xl sm:text-3xl font-semibold leading-snug tracking-tight text-white text-balance [overflow-wrap:break-word]">
                To simplify cybersecurity through intelligent integration,
                advanced technologies, AI and expert-led services.
              </p>
            </div>

            <div className="min-w-0 border-t border-[#9292F0]/40 py-8 sm:py-10">
              <h2 className="border-l-2 border-[#DE1110] pl-4 text-sm font-semibold tracking-[0.2em] text-[#9292F0]">
                PURPOSE
              </h2>

              <p className="mt-6 max-w-4xl text-2xl sm:text-3xl font-semibold leading-snug tracking-tight text-white text-balance [overflow-wrap:break-word]">
                Help organizations operate securely and confidently in an
                increasingly connected world.
              </p>
            </div>

            <div className="min-w-0 border-t border-[#9292F0]/40 py-8 sm:py-10 lg:col-span-2">
              <h2 className="border-l-2 border-[#DE1110] pl-4 text-sm font-semibold tracking-[0.2em] text-[#9292F0]">
                PROMISE
              </h2>

              <p className="mt-6 max-w-4xl text-3xl sm:text-4xl font-semibold leading-snug tracking-tight text-white text-balance [overflow-wrap:break-word]">
                Integrated security. Intelligent outcomes. Continuous
                resilience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  );
}