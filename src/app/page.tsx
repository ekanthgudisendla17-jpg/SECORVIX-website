export default function Home() {
  return (
    <main className="min-h-screen bg-[#05070b] text-white">
      {/* Navigation */}
      <header className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <a href="#" className="text-2xl font-bold tracking-[0.18em]">
            SECORVIX
          </a>

          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <a href="#solutions" className="transition hover:text-cyan-400">
              Solutions
            </a>

            <a href="#services" className="transition hover:text-cyan-400">
              Services
            </a>

            <a href="#industries" className="transition hover:text-cyan-400">
              Industries
            </a>

            <a href="#about" className="transition hover:text-cyan-400">
              About
            </a>

            <a href="#contact" className="transition hover:text-cyan-400">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-md border border-cyan-400/40 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
          >
            Talk to an Expert
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2 lg:px-8">
          {/* Left side */}
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-xs font-medium tracking-[0.2em] text-cyan-300">
              CYBERSECURITY • INTEGRATION • AI
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Engineering Cyber Resilience for the{" "}
              <span className="text-cyan-400">Digital Enterprise</span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/60">
              SECORVIX brings together cybersecurity, system integration,
              intelligence and AI to help organizations secure, connect and
              continuously protect their digital environments.
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 text-white/45">
              From security architecture and technology integration to managed
              detection and response, we help enterprises move from fragmented
              security to unified cyber resilience.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-md bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-cyan-300"
              >
                Talk to a Security Expert
              </a>

              <a
                href="#solutions"
                className="rounded-md border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-400/50 hover:text-cyan-300"
              >
                Explore Our Capabilities
              </a>
            </div>
          </div>

          {/* Right side visual */}
          <div className="relative flex items-center justify-center">
            <div className="relative h-[470px] w-full max-w-[520px]">
              <div className="absolute inset-0 rounded-full border border-cyan-400/10" />
              <div className="absolute inset-12 rounded-full border border-cyan-400/15" />
              <div className="absolute inset-24 rounded-full border border-cyan-400/20" />

              <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-400/40 bg-[#07131a] shadow-[0_0_80px_rgba(34,211,238,0.2)]">
                <div className="text-center">
                  <div className="text-xl font-bold tracking-[0.15em]">
                    SECORVIX
                  </div>
                  <div className="mt-2 text-[10px] tracking-[0.18em] text-cyan-300">
                    SECURITY CORE
                  </div>
                </div>
              </div>

              <div className="absolute left-1/2 top-3 -translate-x-1/2 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                CLOUD
              </div>

              <div className="absolute bottom-8 left-4 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                NETWORK
              </div>

              <div className="absolute bottom-8 right-4 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                ENDPOINT
              </div>

              <div className="absolute left-4 top-1/3 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                IDENTITY
              </div>

              <div className="absolute right-4 top-1/3 rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                DATA
              </div>

              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-center text-xs tracking-[0.24em] text-cyan-300/70">
                SECURE • INTEGRATE • DETECT • RESPOND
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* Six Principles */}
      <section className="border-t border-white/10 bg-[#070a0f] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-cyan-400">
              THE SECORVIX PHILOSOPHY
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              One Name.{" "}
              <span className="text-cyan-400">
                Six Cybersecurity Principles.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-white/55">
              SECORVIX is built around six fundamental principles that define
              our approach to enterprise cybersecurity.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {/* Security */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.03]">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-4xl font-semibold text-cyan-400">S</span>
                <span className="text-xs tracking-[0.2em] text-white/25">
                  01
                </span>
              </div>

              <h3 className="text-xl font-semibold">Security</h3>

              <p className="mt-4 leading-7 text-white/50">
                Protecting digital assets, infrastructure, identities and data.
              </p>
            </div>

            {/* Orchestration */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.03]">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-4xl font-semibold text-cyan-400">O</span>
                <span className="text-xs tracking-[0.2em] text-white/25">
                  02
                </span>
              </div>

              <h3 className="text-xl font-semibold">Orchestration</h3>

              <p className="mt-4 leading-7 text-white/50">
                Bringing security technologies, processes and teams together.
              </p>
            </div>

            {/* Resilience */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.03]">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-4xl font-semibold text-cyan-400">R</span>
                <span className="text-xs tracking-[0.2em] text-white/25">
                  03
                </span>
              </div>

              <h3 className="text-xl font-semibold">Resilience</h3>

              <p className="mt-4 leading-7 text-white/50">
                Enabling organizations to withstand, respond to and recover
                from cyber threats.
              </p>
            </div>

            {/* Visibility */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.03]">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-4xl font-semibold text-cyan-400">V</span>
                <span className="text-xs tracking-[0.2em] text-white/25">
                  04
                </span>
              </div>

              <h3 className="text-xl font-semibold">Visibility</h3>

              <p className="mt-4 leading-7 text-white/50">
                Creating a unified view across network, cloud, endpoint,
                identity and data.
              </p>
            </div>

            {/* Intelligence */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.03]">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-4xl font-semibold text-cyan-400">I</span>
                <span className="text-xs tracking-[0.2em] text-white/25">
                  05
                </span>
              </div>

              <h3 className="text-xl font-semibold">Intelligence</h3>

              <p className="mt-4 leading-7 text-white/50">
                Turning security data and threat intelligence into actionable
                insights.
              </p>
            </div>

            {/* Execution */}
            <div className="group rounded-2xl border border-white/10 bg-white/[0.025] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.03]">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-4xl font-semibold text-cyan-400">X</span>
                <span className="text-xs tracking-[0.2em] text-white/25">
                  06
                </span>
              </div>

              <h3 className="text-xl font-semibold">eXecution</h3>

              <p className="mt-4 leading-7 text-white/50">
                Converting strategy into implementation, response and
                measurable outcomes.
              </p>
            </div>
          </div>

          <div className="mt-14 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.025] p-8 lg:p-10">
            <p className="max-w-4xl text-lg leading-8 text-white/65">
              SECORVIX is more than a cybersecurity services company. We are an
              integration and transformation partner helping organizations
              build security architectures that are connected, intelligent and
              resilient.
            </p>
          </div>
        </div>
      </section>
            {/* Cybersecurity Capabilities */}
      <section id="solutions" className="border-t border-white/10 bg-[#05070b] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-cyan-400">
                OUR CYBERSECURITY CAPABILITIES
              </p>

              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Security Across{" "}
                <span className="text-cyan-400">
                  Every Layer of the Enterprise
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-base leading-7 text-white/55">
                Cybersecurity is no longer a single technology. It is an
                interconnected ecosystem.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/45">
                SECORVIX designs and integrates security capabilities across the
                entire digital environment.
              </p>
            </div>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {/* Network Security */}
            <div className="rounded-2xl border border-white/10 bg-[#0a0e14] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-semibold tracking-[0.18em] text-cyan-400">
                  01
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-300">
                  N
                </div>
              </div>

              <h3 className="text-xl font-semibold">Network Security</h3>

              <p className="mt-4 leading-7 text-white/50">
                Protect networks, infrastructure and connectivity with
                integrated security architecture, segmentation, secure access
                and advanced threat protection.
              </p>
            </div>

            {/* Cloud Security */}
            <div className="rounded-2xl border border-white/10 bg-[#0a0e14] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-semibold tracking-[0.18em] text-cyan-400">
                  02
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-300">
                  C
                </div>
              </div>

              <h3 className="text-xl font-semibold">Cloud Security</h3>

              <p className="mt-4 leading-7 text-white/50">
                Secure cloud infrastructure, workloads, applications,
                identities and data across modern hybrid and multi-cloud
                environments.
              </p>
            </div>

            {/* Identity & Access */}
            <div className="rounded-2xl border border-white/10 bg-[#0a0e14] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-semibold tracking-[0.18em] text-cyan-400">
                  03
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-300">
                  I
                </div>
              </div>

              <h3 className="text-xl font-semibold">Identity & Access</h3>

              <p className="mt-4 leading-7 text-white/50">
                Build identity-centric security with strong authentication,
                access controls, privileged access protection and Zero Trust
                principles.
              </p>
            </div>

            {/* Endpoint */}
            <div className="rounded-2xl border border-white/10 bg-[#0a0e14] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-semibold tracking-[0.18em] text-cyan-400">
                  04
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-300">
                  E
                </div>
              </div>

              <h3 className="text-xl font-semibold">
                Endpoint & Workplace Security
              </h3>

              <p className="mt-4 leading-7 text-white/50">
                Protect users, devices and endpoints while enabling secure
                digital work environments.
              </p>
            </div>

            {/* Data & Application */}
            <div className="rounded-2xl border border-white/10 bg-[#0a0e14] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-semibold tracking-[0.18em] text-cyan-400">
                  05
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-300">
                  D
                </div>
              </div>

              <h3 className="text-xl font-semibold">
                Data & Application Security
              </h3>

              <p className="mt-4 leading-7 text-white/50">
                Protect sensitive information and applications throughout their
                lifecycle—from development and deployment to operations.
              </p>
            </div>

            {/* Security Operations */}
            <div className="rounded-2xl border border-white/10 bg-[#0a0e14] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm font-semibold tracking-[0.18em] text-cyan-400">
                  06
                </span>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-300">
                  S
                </div>
              </div>

              <h3 className="text-xl font-semibold">Security Operations</h3>

              <p className="mt-4 leading-7 text-white/50">
                Improve detection, investigation and response through integrated
                monitoring, analytics, automation, threat intelligence and AI.
              </p>
            </div>
          </div>
        </div>
      </section>
            {/* System Integration */}
      <section
        id="services"
        className="border-t border-white/10 bg-[#070a0f] py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-cyan-400">
              SECURITY INTEGRATION
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              From Security Technologies to{" "}
              <span className="text-cyan-400">
                One Integrated Architecture
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-7 text-white/55">
              Enterprise environments are increasingly complex. Different
              technologies, platforms, clouds, applications and security
              controls often operate in isolation.
            </p>

            <p className="mt-4 text-lg font-medium text-white/80">
              SECORVIX brings them together.
            </p>
          </div>

          {/* Lifecycle */}
          <div className="mt-16 overflow-x-auto">
            <div className="flex min-w-[980px] items-center justify-between gap-4">
              {[
                "Discover",
                "Assess",
                "Design",
                "Integrate",
                "Implement",
                "Optimize",
                "Monitor",
                "Evolve",
              ].map((step, index) => (
                <div key={step} className="flex flex-1 items-center">
                  <div className="min-w-[110px] rounded-xl border border-white/10 bg-white/[0.025] px-4 py-5 text-center transition duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.03]">
                    <div className="text-xs tracking-[0.2em] text-cyan-400">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <div className="mt-3 text-sm font-semibold text-white">
                      {step}
                    </div>
                  </div>

                  {index < 7 && (
                    <div className="mx-2 h-px flex-1 bg-gradient-to-r from-cyan-400/40 to-white/10" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Supporting copy */}
          <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
            <div className="rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.025] p-8 lg:p-10">
              <h3 className="text-2xl font-semibold">
                Integration that fits the enterprise
              </h3>

              <p className="mt-5 leading-8 text-white/55">
                We architect, integrate and optimize cybersecurity environments
                across the enterprise. Our vendor-neutral approach allows us to
                select and integrate the technologies best aligned to each
                customer&apos;s security objectives, existing infrastructure
                and business requirements.
              </p>
            </div>

            {/* Integration capabilities */}
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Security Architecture", "Design secure, scalable enterprise architectures"],
                ["Technology Integration", "Integrate multiple security technologies and platforms"],
                ["Migration", "Modernize legacy security environments"],
                ["Consolidation", "Reduce technology fragmentation and complexity"],
                ["Deployment", "End-to-end implementation and rollout"],
                ["Optimization", "Improve performance, coverage and operational efficiency"],
                ["Automation", "Automate repetitive security workflows"],
                ["Monitoring", "Establish continuous visibility and control"],
              ].map(([title, description]) => (
                <div
                  key={title}
                  className="rounded-xl border border-white/10 bg-[#0a0e14] p-5 transition duration-300 hover:border-cyan-400/35"
                >
                  <h4 className="text-sm font-semibold text-white">{title}</h4>

                  <p className="mt-3 text-sm leading-6 text-white/45">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
            {/* AI & Cyber Intelligence */}
      <section className="relative overflow-hidden border-t border-white/10 bg-[#05070b] py-24">
        {/* Background effects */}
        <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.06] blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-cyan-400">
              AI & CYBER INTELLIGENCE
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              AI-Powered Cybersecurity.{" "}
              <span className="text-cyan-400">Human-Led Security.</span>
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/55">
              AI is transforming cybersecurity—but technology alone is not
              enough. SECORVIX combines AI capabilities, security intelligence,
              automation and human expertise to improve how organizations
              detect, understand and respond to threats.
            </p>
          </div>

          {/* AI Core */}
          <div className="relative mx-auto mt-16 flex h-[340px] max-w-3xl items-center justify-center">
            <div className="absolute h-[330px] w-[330px] rounded-full border border-cyan-400/10" />
            <div className="absolute h-[250px] w-[250px] rounded-full border border-cyan-400/20" />
            <div className="absolute h-[170px] w-[170px] rounded-full border border-cyan-400/30" />

            <div className="relative flex h-32 w-32 items-center justify-center rounded-full border border-cyan-400/50 bg-[#07131a] shadow-[0_0_90px_rgba(34,211,238,0.18)]">
              <div className="text-center">
                <div className="text-2xl font-semibold text-cyan-300">AI</div>
                <div className="mt-1 text-[9px] tracking-[0.2em] text-white/45">
                  INTELLIGENCE
                </div>
              </div>
            </div>

            <div className="absolute left-2 top-1/2 -translate-y-1/2 rounded-lg border border-white/10 bg-[#0a0e14] px-4 py-3 text-xs text-white/65">
              HUMAN EXPERTISE
            </div>

            <div className="absolute right-2 top-1/2 -translate-y-1/2 rounded-lg border border-white/10 bg-[#0a0e14] px-4 py-3 text-xs text-white/65">
              AUTOMATION
            </div>

            <div className="absolute left-1/2 top-1 -translate-x-1/2 rounded-lg border border-white/10 bg-[#0a0e14] px-4 py-3 text-xs text-white/65">
              THREAT INTELLIGENCE
            </div>

            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 rounded-lg border border-white/10 bg-[#0a0e14] px-4 py-3 text-xs text-white/65">
              SECURITY ANALYTICS
            </div>
          </div>

          {/* Three pillars */}
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.05] text-lg font-semibold text-cyan-300">
                01
              </div>

              <h3 className="text-xl font-semibold">AI-Assisted Detection</h3>

              <p className="mt-4 leading-7 text-white/50">
                Identify abnormal behavior and emerging threats faster.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.05] text-lg font-semibold text-cyan-300">
                02
              </div>

              <h3 className="text-xl font-semibold">
                Intelligent Analysis
              </h3>

              <p className="mt-4 leading-7 text-white/50">
                Correlate security events, threat intelligence and contextual
                information to prioritize what matters.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/[0.05] text-lg font-semibold text-cyan-300">
                03
              </div>

              <h3 className="text-xl font-semibold">Automated Response</h3>

              <p className="mt-4 leading-7 text-white/50">
                Accelerate investigation, containment and remediation through
                intelligent automation.
              </p>
            </div>
          </div>

          {/* Human-led positioning */}
          <div className="mt-12 rounded-2xl border border-cyan-400/15 bg-cyan-400/[0.025] p-8 text-center lg:p-10">
            <p className="mx-auto max-w-4xl text-lg leading-8 text-white/65">
              We don&apos;t position AI as a replacement for cybersecurity
              professionals. We use AI to augment human expertise, accelerate
              decision-making and improve security outcomes.
            </p>
          </div>
        </div>
      </section>
            {/* Partner Ecosystem */}
      <section className="border-t border-white/10 bg-[#070a0f] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-cyan-400">
              TECHNOLOGY ECOSYSTEM
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              An Open Ecosystem.{" "}
              <span className="text-cyan-400">One Integrated Outcome.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/55">
              No single technology can solve every cybersecurity challenge.
              SECORVIX works with a partner ecosystem of leading technology
              providers, specialist cybersecurity companies, cloud platforms
              and AI organizations to build solutions aligned with customer
              requirements.
            </p>
          </div>

          {/* Ecosystem visual */}
          <div className="relative mx-auto mt-16 min-h-[520px] max-w-5xl">
            {/* Connection lines */}
            <div className="absolute left-1/2 top-1/2 h-px w-[70%] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
            <div className="absolute left-1/2 top-1/2 h-[70%] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent" />

            {/* Center */}
            <div className="absolute left-1/2 top-1/2 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-cyan-400/50 bg-[#07131a] shadow-[0_0_90px_rgba(34,211,238,0.15)]">
              <div className="text-center">
                <div className="text-xl font-bold tracking-[0.14em]">
                  SECORVIX
                </div>
                <div className="mt-2 text-[9px] tracking-[0.2em] text-cyan-300">
                  INTEGRATION ENGINE
                </div>
              </div>
            </div>

            {/* Top */}
            <div className="absolute left-1/2 top-2 -translate-x-1/2 rounded-xl border border-white/10 bg-[#0a0e14] px-6 py-4 text-center">
              <div className="text-xs tracking-[0.2em] text-cyan-400">
                SECURITY PARTNERS
              </div>
            </div>

            {/* Left */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 rounded-xl border border-white/10 bg-[#0a0e14] px-6 py-4 text-center">
              <div className="text-xs tracking-[0.2em] text-cyan-400">
                CLOUD
              </div>
            </div>

            {/* Right */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 rounded-xl border border-white/10 bg-[#0a0e14] px-6 py-4 text-center">
              <div className="text-xs tracking-[0.2em] text-cyan-400">
                AI
              </div>
            </div>

            {/* Bottom row */}
            <div className="absolute bottom-6 left-1/2 grid w-full max-w-3xl -translate-x-1/2 grid-cols-3 gap-4">
              <div className="rounded-xl border border-white/10 bg-[#0a0e14] px-5 py-4 text-center">
                <div className="text-sm font-semibold text-white">Network</div>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#0a0e14] px-5 py-4 text-center">
                <div className="text-sm font-semibold text-white">Identity</div>
              </div>

              <div className="rounded-xl border border-white/10 bg-[#0a0e14] px-5 py-4 text-center">
                <div className="text-sm font-semibold text-white">Data</div>
              </div>
            </div>
          </div>

          {/* Supporting copy */}
          <div className="mt-8 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.025] p-8 text-center lg:p-10">
            <h3 className="text-2xl font-semibold">
              Technology-neutral. Outcome-driven.
            </h3>

            <p className="mx-auto mt-5 max-w-4xl leading-8 text-white/55">
              Our ecosystem approach enables us to bring together complementary
              technologies while maintaining a unified architecture,
              implementation strategy and operational model.
            </p>

            <a
              href="#ecosystem"
              className="mt-8 inline-flex rounded-md border border-cyan-400/30 bg-cyan-400/[0.06] px-6 py-3 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-black"
            >
              Explore Our Ecosystem
            </a>
          </div>
        </div>
      </section>
            {/* Managed Security Services */}
      <section className="border-t border-white/10 bg-[#05070b] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-cyan-400">
                MANAGED SECURITY
              </p>

              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                From Prevention to{" "}
                <span className="text-cyan-400">Continuous Protection</span>
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-base leading-8 text-white/55">
                Threats don&apos;t operate only during business hours. Your
                security shouldn&apos;t either.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-8 text-white/45">
                SECORVIX helps organizations establish continuous security
                monitoring, detection, investigation and response.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "SOC Services",
                "Centralized security monitoring and operations",
              ],
              [
                "SIEM Services",
                "Security event collection, correlation and analytics",
              ],
              [
                "Threat Detection",
                "Identify suspicious activity and emerging threats",
              ],
              [
                "Threat Hunting",
                "Proactively search for indicators of compromise",
              ],
              [
                "Incident Response",
                "Investigate and contain security incidents",
              ],
              [
                "MDR",
                "Managed detection and response",
              ],
              [
                "Security Automation",
                "Automate repetitive security operations",
              ],
              [
                "Security Analytics",
                "Turn security data into actionable intelligence",
              ],
            ].map(([title, description], index) => (
              <div
                key={title}
                className="group rounded-2xl border border-white/10 bg-[#0a0e14] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.2em] text-cyan-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.7)]" />
                </div>

                <h3 className="mt-8 text-lg font-semibold text-white">
                  {title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-white/50">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.025] p-8 md:flex-row md:items-center lg:p-10">
            <div>
              <h3 className="text-2xl font-semibold">
                Strengthen your security operations
              </h3>

              <p className="mt-3 max-w-2xl leading-7 text-white/50">
                Build continuous visibility, faster detection and coordinated
                response across your security environment.
              </p>
            </div>

            <a
              href="#contact"
              className="shrink-0 rounded-md bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
            >
              Strengthen Your Security Operations
            </a>
          </div>
        </div>
      </section>
            {/* Cyber Resilience */}
      <section className="border-t border-white/10 bg-[#070a0f] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-cyan-400">
              CYBER RESILIENCE
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Security Is Not Just About{" "}
              <span className="text-cyan-400">Stopping Attacks</span>
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-white/55">
              A resilient organization must be able to anticipate, withstand,
              respond to and recover from cyber incidents.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-white/45">
              SECORVIX helps organizations build resilience across technology,
              processes and people.
            </p>
          </div>

          {/* Resilience Framework */}
          <div className="mt-16 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              "Anticipate",
              "Prevent",
              "Detect",
              "Respond",
              "Recover",
              "Improve",
            ].map((step, index) => (
              <div
                key={step}
                className="relative rounded-2xl border border-white/10 bg-[#0a0e14] p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/[0.05] text-xs font-semibold text-cyan-300">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-5 text-sm font-semibold text-white">
                  {step}
                </h3>

                {index < 5 && (
                  <div className="absolute right-[-10px] top-1/2 hidden h-px w-5 bg-cyan-400/30 lg:block" />
                )}
              </div>
            ))}
          </div>

          {/* Resilience Services */}
          <div className="mt-16 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.025] p-8 lg:p-10">
              <p className="text-xs font-semibold tracking-[0.25em] text-cyan-400">
                RESILIENCE FRAMEWORK
              </p>

              <h3 className="mt-5 text-2xl font-semibold">
                Build security that can adapt, respond and recover.
              </h3>

              <p className="mt-5 leading-8 text-white/55">
                Cyber resilience connects risk management, security controls,
                response planning and recovery into one continuous operating
                model.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Cyber Risk Assessment",
                "Vulnerability Management",
                "Security Posture Assessment",
                "Incident Response Planning",
                "Cyber Recovery",
                "Business Continuity Alignment",
                "Security Validation",
                "Security Maturity Assessment",
              ].map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-4 rounded-xl border border-white/10 bg-[#0a0e14] p-5 transition duration-300 hover:border-cyan-400/35"
                >
                  <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.6)]" />

                  <span className="text-sm font-medium text-white/80">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
            {/* Zero Trust */}
      <section className="border-t border-white/10 bg-[#05070b] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            {/* Left */}
            <div>
              <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-cyan-400">
                ZERO TRUST
              </p>

              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Trust Nothing.{" "}
                <span className="text-cyan-400">Verify Everything.</span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/55">
                Modern organizations have users, applications, workloads and
                data everywhere.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-8 text-white/45">
                We help organizations move beyond perimeter-based security
                toward identity-driven, continuously verified access models.
              </p>
            </div>

            {/* Right visual */}
            <div className="relative flex min-h-[430px] items-center justify-center">
              <div className="absolute h-[360px] w-[360px] rounded-full border border-cyan-400/10" />
              <div className="absolute h-[280px] w-[280px] rounded-full border border-cyan-400/20" />
              <div className="absolute h-[190px] w-[190px] rounded-full border border-cyan-400/30" />

              <div className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full border border-cyan-400/50 bg-[#07131a] shadow-[0_0_80px_rgba(34,211,238,0.18)]">
                <div className="text-center">
                  <div className="text-lg font-bold tracking-[0.12em]">
                    ZERO TRUST
                  </div>
                  <div className="mt-2 text-[9px] tracking-[0.18em] text-cyan-300">
                    CONTINUOUS VERIFY
                  </div>
                </div>
              </div>

              <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-lg border border-white/10 bg-[#0a0e14] px-4 py-3 text-xs text-white/70">
                Identity
              </div>

              <div className="absolute right-4 top-1/3 rounded-lg border border-white/10 bg-[#0a0e14] px-4 py-3 text-xs text-white/70">
                Device
              </div>

              <div className="absolute bottom-4 right-16 rounded-lg border border-white/10 bg-[#0a0e14] px-4 py-3 text-xs text-white/70">
                Application
              </div>

              <div className="absolute bottom-4 left-16 rounded-lg border border-white/10 bg-[#0a0e14] px-4 py-3 text-xs text-white/70">
                Network
              </div>

              <div className="absolute left-4 top-1/3 rounded-lg border border-white/10 bg-[#0a0e14] px-4 py-3 text-xs text-white/70">
                Data
              </div>

              <div className="absolute left-1/2 bottom-0 -translate-x-1/2 rounded-lg border border-white/10 bg-[#0a0e14] px-4 py-3 text-xs text-white/70">
                Context
              </div>
            </div>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              "Identity",
              "Device",
              "Application",
              "Network",
              "Data",
              "Context",
            ].map((item, index) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-[#0a0e14] p-5 text-center transition duration-300 hover:border-cyan-400/40"
              >
                <div className="text-xs font-semibold tracking-[0.2em] text-cyan-400">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="mt-3 text-sm font-semibold text-white">
                  {item}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
            {/* Our Approach */}
      <section className="border-t border-white/10 bg-[#070a0f] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-cyan-400">
              OUR APPROACH
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              A Structured Path from Complexity to{" "}
              <span className="text-cyan-400">Cyber Confidence</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Understand",
                "Understand the business, technology landscape, risks and security objectives.",
              ],
              [
                "Assess",
                "Identify vulnerabilities, gaps, dependencies and opportunities for improvement.",
              ],
              [
                "Architect",
                "Develop an integrated security architecture aligned with business requirements.",
              ],
              [
                "Integrate",
                "Bring technologies, platforms and processes together.",
              ],
              [
                "Implement",
                "Deploy, configure and operationalize the solution.",
              ],
              [
                "Operate",
                "Monitor, manage, detect and respond.",
              ],
              [
                "Optimize",
                "Continuously improve security effectiveness, efficiency and resilience.",
              ],
            ].map(([title, description], index) => (
              <div
                key={title}
                className={`rounded-2xl border border-white/10 bg-[#0a0e14] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 ${
                  index === 6 ? "lg:col-span-2" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.2em] text-cyan-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.6)]" />
                </div>

                <h3 className="mt-8 text-xl font-semibold text-white">
                  {title}
                </h3>

                <p className="mt-4 leading-7 text-white/50">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
            {/* Industries */}
      <section
        id="industries"
        className="border-t border-white/10 bg-[#05070b] py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-cyan-400">
                INDUSTRIES
              </p>

              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Cybersecurity Designed Around{" "}
                <span className="text-cyan-400">Your Industry</span>
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-base leading-8 text-white/55">
                Different industries face different risks, regulations and
                operational challenges.
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "Banking & Financial Services",
                "Protect financial data, digital channels, identities and critical infrastructure.",
              ],
              [
                "Government & Public Sector",
                "Build resilient and secure digital government environments.",
              ],
              [
                "Manufacturing",
                "Protect IT, OT, connected environments and industrial operations.",
              ],
              [
                "Healthcare",
                "Secure sensitive information, connected devices and critical healthcare systems.",
              ],
              [
                "IT & Technology",
                "Protect cloud environments, applications, intellectual property and digital platforms.",
              ],
              [
                "Education",
                "Secure users, devices, applications and institutional data.",
              ],
              [
                "Critical Infrastructure",
                "Strengthen the security and resilience of essential systems and operations.",
              ],
            ].map(([title, description], index) => (
              <div
                key={title}
                className={`group rounded-2xl border border-white/10 bg-[#0a0e14] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 ${
                  index === 6 ? "lg:col-span-3" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.2em] text-cyan-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.6)]" />
                </div>

                <h3 className="mt-8 text-xl font-semibold text-white">
                  {title}
                </h3>

                <p className="mt-4 max-w-xl leading-7 text-white/50">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
            {/* Why SECORVIX */}
      <section className="border-t border-white/10 bg-[#070a0f] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-cyan-400">
              WHY SECORVIX
            </p>

            <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              What Makes{" "}
              <span className="text-cyan-400">SECORVIX Different?</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {[
              [
                "Vendor-Neutral",
                "We focus on customer requirements rather than forcing a single technology stack.",
              ],
              [
                "Integration-First",
                "Our objective is not simply to deploy technologies—it is to make them work together.",
              ],
              [
                "AI-Enabled",
                "We incorporate AI where it can improve detection, analysis, automation and decision-making.",
              ],
              [
                "Outcome-Focused",
                "We measure success through security outcomes, operational efficiency and business resilience.",
              ],
              [
                "Lifecycle Approach",
                "From strategy and architecture through implementation, operations and optimization.",
              ],
              [
                "Human + Technology",
                "We combine experienced cybersecurity professionals with automation, analytics and AI.",
              ],
            ].map(([title, description], index) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-[#0a0e14] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.2em] text-cyan-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_14px_rgba(34,211,238,0.6)]" />
                </div>

                <h3 className="mt-8 text-xl font-semibold text-white">
                  {title}
                </h3>

                <p className="mt-4 leading-7 text-white/50">
                  {description}
                </p>
              </div>
            ))}
          </div>

          {/* Challenge / Advantage */}
          <div className="mt-16 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.025] p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="text-xs font-semibold tracking-[0.25em] text-cyan-400">
                  THE CHALLENGE
                </p>

                <h3 className="mt-4 text-2xl font-semibold">
                  Complexity is the new cybersecurity reality.
                </h3>

                <p className="mt-5 leading-8 text-white/55">
                  Enterprises face too many security technologies, fragmented
                  operations, increasing threats, compliance pressure and a
                  shortage of specialist expertise.
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-[0.25em] text-cyan-400">
                  THE SECORVIX ADVANTAGE
                </p>

                <h3 className="mt-4 text-2xl font-semibold">
                  Connected security. Clearer outcomes.
                </h3>

                <p className="mt-5 leading-8 text-white/55">
                  SECORVIX brings architecture, integration, intelligence,
                  automation and managed security together to create a more
                  connected and resilient security operating model.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* About SECORVIX */}
      <section
        id="about"
        className="border-t border-white/10 bg-[#05070b] py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-4 text-xs font-semibold tracking-[0.3em] text-cyan-400">
                ABOUT SECORVIX
              </p>

              <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Building the Security Infrastructure for a{" "}
                <span className="text-cyan-400">Connected World</span>
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-white/55">
                Digital transformation has created unprecedented
                opportunities—and unprecedented cyber risk.
              </p>

              <p className="mt-5 text-base leading-8 text-white/55">
                Organizations need more than individual security products. They
                need a partner capable of understanding the entire environment,
                integrating technologies and continuously improving their
                security posture.
              </p>

              <p className="mt-5 text-lg font-medium leading-8 text-white/80">
                SECORVIX was created with this purpose.
              </p>

              <p className="mt-5 text-base leading-8 text-white/55">
                We bring together cybersecurity expertise, system integration,
                security intelligence, AI capabilities and a broad technology
                ecosystem to help organizations build secure, visible,
                intelligent and resilient digital environments.
              </p>
            </div>
          </div>

          {/* Vision / Mission / Purpose / Promise */}
          <div className="mt-16 grid gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-[#0a0e14] p-8 transition duration-300 hover:border-cyan-400/40">
              <p className="text-xs font-semibold tracking-[0.22em] text-cyan-400">
                VISION
              </p>

              <h3 className="mt-5 text-xl font-semibold leading-8 text-white">
                To become a trusted global cybersecurity integration and
                cyber-resilience partner for the digital enterprise.
              </h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0a0e14] p-8 transition duration-300 hover:border-cyan-400/40">
              <p className="text-xs font-semibold tracking-[0.22em] text-cyan-400">
                MISSION
              </p>

              <h3 className="mt-5 text-xl font-semibold leading-8 text-white">
                To simplify cybersecurity through intelligent integration,
                advanced technologies, AI and expert-led services.
              </h3>
            </div>

            <div className="rounded-2xl border border-white/10 bg-[#0a0e14] p-8 transition duration-300 hover:border-cyan-400/40">
              <p className="text-xs font-semibold tracking-[0.22em] text-cyan-400">
                PURPOSE
              </p>

              <h3 className="mt-5 text-xl font-semibold leading-8 text-white">
                Help organizations operate securely and confidently in an
                increasingly connected world.
              </h3>
            </div>

            <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/[0.03] p-8">
              <p className="text-xs font-semibold tracking-[0.22em] text-cyan-400">
                PROMISE
              </p>

              <h3 className="mt-5 text-xl font-semibold leading-8 text-white">
                Integrated security. Intelligent outcomes. Continuous
                resilience.
              </h3>
            </div>
          </div>
        </div>
      </section>
            {/* Final CTA */}
      <section
        id="contact"
        className="border-t border-white/10 bg-[#070a0f] py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-[#081118] px-8 py-16 text-center lg:px-16 lg:py-20">
            <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.08] blur-[120px]" />

            <div className="relative">
              <p className="text-xs font-semibold tracking-[0.3em] text-cyan-400">
                LET&apos;S BUILD CYBER RESILIENCE
              </p>

              <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                Ready to Strengthen{" "}
                <span className="text-cyan-400">Your Cybersecurity?</span>
              </h2>

              <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/55">
                Whether you are modernizing your security architecture, moving
                to the cloud, building a SOC or exploring AI-powered
                cybersecurity, SECORVIX can help you design the right path
                forward.
              </p>

              <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-white/80">
                Let&apos;s build a more secure and resilient digital enterprise.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="#contact"
                  className="rounded-md bg-cyan-400 px-6 py-3.5 text-sm font-semibold text-black transition hover:bg-cyan-300"
                >
                  Talk to Our Cybersecurity Experts
                </a>

                <a
                  href="#contact"
                  className="rounded-md border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-400/50 hover:text-cyan-300"
                >
                  Request a Security Assessment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#040609]">
        <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
            <div>
              <div className="text-2xl font-bold tracking-[0.18em] text-white">
                SECORVIX
              </div>

              <p className="mt-4 max-w-md text-sm leading-7 text-white/45">
                Security. Orchestration. Resilience. Visibility. Intelligence.
                eXecution.
              </p>

              <p className="mt-4 max-w-lg text-sm leading-7 text-white/35">
                Cybersecurity | System Integration | AI | Managed Security |
                Cyber Resilience
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-cyan-400">
                QUICK LINKS
              </p>

              <div className="mt-5 flex flex-col gap-3 text-sm text-white/50">
                <a href="#about" className="transition hover:text-cyan-300">
                  About
                </a>
                <a href="#solutions" className="transition hover:text-cyan-300">
                  Solutions
                </a>
                <a href="#services" className="transition hover:text-cyan-300">
                  Services
                </a>
                <a href="#industries" className="transition hover:text-cyan-300">
                  Industries
                </a>
                <a href="#contact" className="transition hover:text-cyan-300">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <p className="text-xs font-semibold tracking-[0.22em] text-cyan-400">
                CONNECT
              </p>

              <div className="mt-5 flex flex-col gap-3 text-sm text-white/50">
                <a href="#" className="transition hover:text-cyan-300">
                  LinkedIn
                </a>
                <a href="#" className="transition hover:text-cyan-300">
                  Careers
                </a>
                <a href="#contact" className="transition hover:text-cyan-300">
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-white/30 md:flex-row md:items-center md:justify-between">
            <p>
              © {new Date().getFullYear()} SECORVIX. All rights reserved.
            </p>

            <p>Secure. Integrate. Intelligently.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}