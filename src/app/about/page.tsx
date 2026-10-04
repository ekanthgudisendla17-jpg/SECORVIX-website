import Navbar from "../components/Navbar";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#05070b] text-white">
              {/* Navigation */}
     <Navbar />
      {/* Hero */}
      <section className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-[#255dce]">
            ABOUT SECORVIX
          </p>

          <h1 className="max-w-4xl text-5xl font-semibold tracking-tight sm:text-6xl">
            Building the Security Infrastructure for a{" "}
            <span className="text-[#255dce]">Connected World</span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/55">
            SECORVIX brings together cybersecurity expertise, system
            integration, security intelligence, AI capabilities and a broad
            technology ecosystem to help organizations build secure, visible,
            intelligent and resilient digital environments.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="border-b border-white/10 bg-[#070a0f] py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-[#255dce]">
              WHO WE ARE
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              More than a cybersecurity services company.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-white/55">
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

            <p className="text-lg font-medium text-white/80">
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
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.3em] text-[#255dce]">
            BRAND PHILOSOPHY
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            One Name.{" "}
            <span className="text-[#255dce]">
              Six Cybersecurity Principles.
            </span>
          </h2>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["S", "Security", "Protecting digital assets, infrastructure, identities and data."],
              ["O", "Orchestration", "Bringing security technologies, processes and teams together."],
              ["R", "Resilience", "Enabling organizations to withstand, respond to and recover from cyber threats."],
              ["V", "Visibility", "Creating a unified view across network, cloud, endpoint, identity and data."],
              ["I", "Intelligence", "Turning security data and threat intelligence into actionable insights."],
              ["X", "eXecution", "Converting strategy into implementation, response and measurable outcomes."],
            ].map(([letter, title, description]) => (
              <div
                key={title}
                className="rounded-2xl border border-[#021861] bg-[#0a0e14] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#255dce]/40"
              >
                <div className="text-4xl font-semibold text-[#255dce]">
                  {letter}
                </div>

                <h3 className="mt-6 text-xl font-semibold">{title}</h3>

                <p className="mt-4 leading-7 text-white/50">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Mission Purpose Promise */}
      <section className="border-t border-white/10 bg-[#070a0f] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-[#021861] bg-[#0a0e14] p-8">
              <p className="text-xs font-semibold tracking-[0.22em] text-[#255dce]">
                VISION
              </p>

              <h3 className="mt-5 text-xl font-semibold leading-8">
                To become a trusted global cybersecurity integration and
                cyber-resilience partner for the digital enterprise.
              </h3>
            </div>

            <div className="rounded-2xl border border-[#021861] bg-[#0a0e14] p-8">
              <p className="text-xs font-semibold tracking-[0.22em] text-[#255dce]">
                MISSION
              </p>

              <h3 className="mt-5 text-xl font-semibold leading-8">
                To simplify cybersecurity through intelligent integration,
                advanced technologies, AI and expert-led services.
              </h3>
            </div>

            <div className="rounded-2xl border border-[#021861] bg-[#0a0e14] p-8">
              <p className="text-xs font-semibold tracking-[0.22em] text-[#255dce]">
                PURPOSE
              </p>

              <h3 className="mt-5 text-xl font-semibold leading-8">
                Help organizations operate securely and confidently in an
                increasingly connected world.
              </h3>
            </div>

            <div className="rounded-2xl border border-[#255dce]/20 bg-[#255dce]/[0.03] p-8">
              <p className="text-xs font-semibold tracking-[0.22em] text-[#255dce]">
                PROMISE
              </p>

              <h3 className="mt-5 text-xl font-semibold leading-8">
                Integrated security. Intelligent outcomes. Continuous
                resilience.
              </h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}