import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#9292F0] text-white">
      {/* Navigation */}
     <Navbar />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-[#9292F0]">
        {/* Architectural background */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(2,24,97,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(2,24,97,0.12)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:linear-gradient(to_right,transparent,black)]" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-20 -z-10 hidden h-[600px] w-[480px] rotate-12 border border-[#021861]/25 bg-[#021861]/10 lg:block" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:gap-16 sm:px-6 sm:py-20 lg:min-h-[860px] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:gap-10 lg:px-10 lg:py-28 xl:gap-12 xl:px-12">
          {/* Left side */}
          <div>
            <div className="mb-8 inline-flex items-center border-l-2 border-[#DE1110] pl-4 text-[10px] font-semibold tracking-[0.16em] text-[#021861] sm:text-xs sm:tracking-[0.2em]">
              CYBERSECURITY • INTEGRATION • AI
            </div>

            <h1 className="max-w-[700px] text-balance text-[clamp(2.5rem,6vw,5.25rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-white">
              Engineering Cyber Resilience for the{" "}
              <span className="mt-2 block text-white">Digital Enterprise</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-[#021861] sm:text-lg">
              SECORVIX brings together cybersecurity, system integration,
              intelligence and AI to help organizations secure, connect and
              continuously protect their digital environments.
            </p>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#021861] sm:text-base">
              From security architecture and technology integration to managed
              detection and response, we help enterprises move from fragmented
              security to unified cyber resilience.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap lg:mt-12">
              <a
                href="/contact"
                className="inline-flex min-h-14 items-center justify-center rounded-md border border-white/25 bg-[#021861] px-7 py-4 text-center text-sm font-semibold text-white shadow-[0_12px_32px_rgba(2,24,97,0.25)] transition-colors hover:bg-[#021861]/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Talk to a Security Expert
              </a>

              <a
                href="/solutions"
                className="inline-flex min-h-14 items-center justify-center rounded-md border border-white/60 px-7 py-4 text-center text-sm font-semibold text-[#021861] transition-colors hover:border-white/50 hover:bg-[#021861]/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                Explore Our Capabilities
              </a>
            </div>
          </div>

          {/* Original layered security architecture */}
          <div className="relative mx-auto aspect-square w-full min-w-0 max-w-[520px] lg:max-w-none">
            {/* Decorative geometry stays inside the responsive canvas */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="absolute inset-[9%] rotate-[-12deg] border border-[#021861]/35 bg-[#021861]/10" />
              <div className="absolute inset-[15%] rotate-[12deg] border border-[#021861]/45" />
              <div className="absolute inset-[5%] rounded-full border border-[#021861]/35" />
              <div className="absolute inset-[13%] rounded-full border-[6px] border-[#021861]/25 sm:border-[10px]" />
              <div className="absolute inset-[23%] rounded-full border border-dashed border-[#021861]/60" />
              <div className="absolute left-1/2 top-[7%] h-[80%] w-px bg-[#021861]/60" />
              <div className="absolute left-[5%] top-[40%] h-px w-[90%] bg-[#021861]/60" />
              <div className="absolute left-[18%] top-[71%] h-px w-[64%] bg-[#021861]/60" />
              <div className="absolute left-[22%] top-[20%] h-[63%] w-px rotate-[-35deg] bg-[#021861]/40" />
              <div className="absolute right-[22%] top-[20%] h-[63%] w-px rotate-[35deg] bg-[#021861]/40" />
              <div className="absolute left-[18%] top-[39%] h-2 w-2 rounded-full bg-[#DE1110] ring-4 ring-[#021861]/15" />
              <div className="absolute right-[18%] top-[39%] h-2 w-2 rounded-full bg-[#DE1110] ring-4 ring-[#021861]/15" />
              <div className="absolute left-1/2 top-[12%] h-2 w-2 -translate-x-1/2 rounded-full bg-[#DE1110]" />
              {/* Offset shield silhouettes create depth without image assets */}
              <div className="absolute left-[34%] top-[26%] h-[49%] w-[40%] bg-[#021861]/20 [clip-path:polygon(50%_0,100%_15%,94%_65%,75%_85%,50%_100%,25%_85%,6%_65%,0_15%)]" />
              <div className="absolute left-[30%] top-[23%] h-[49%] w-[40%] bg-[#021861]/40 [clip-path:polygon(50%_0,100%_15%,94%_65%,75%_85%,50%_100%,25%_85%,6%_65%,0_15%)]" />
            </div>

            <div className="absolute left-[28%] top-[21%] flex h-[49%] w-[40%] items-center justify-center bg-[#021861] [clip-path:polygon(50%_0,100%_15%,94%_65%,75%_85%,50%_100%,25%_85%,6%_65%,0_15%)]">
              <div className="pb-4 text-center">
                <div className="text-[clamp(0.875rem,2.6vw,1.25rem)] font-bold tracking-[0.12em] text-white">SECORVIX</div>
                <div className="mt-2 text-[10px] tracking-[0.08em] sm:tracking-[0.16em] text-white/75">SECURITY CORE</div>
                <div aria-hidden="true" className="mx-auto mt-4 h-0.5 w-6 bg-[#DE1110]" />
              </div>
            </div>

            <div className="absolute left-1/2 top-[3%] -translate-x-1/2 border-b border-[#021861]/60 pb-2 text-xs font-semibold tracking-[0.16em] text-[#021861] sm:text-xs">CLOUD</div>
            <div className="absolute bottom-[15%] left-[6%] border-l-2 border-[#021861] pl-2 text-xs font-semibold tracking-[0.12em] text-[#021861] sm:text-xs">NETWORK</div>
            <div className="absolute bottom-[15%] right-[6%] border-r-2 border-[#021861] pr-2 text-xs font-semibold tracking-[0.12em] text-[#021861] sm:text-xs">ENDPOINT</div>
            <div className="absolute left-0 top-[32%] border-b border-[#021861]/60 pb-2 text-xs font-semibold tracking-[0.12em] text-[#021861] sm:text-xs">IDENTITY</div>
            <div className="absolute right-0 top-[32%] border-b border-[#021861]/60 pb-2 text-xs font-semibold tracking-[0.12em] text-[#021861] sm:text-xs">DATA</div>
            <div className="absolute bottom-0 left-0 w-full text-center text-[10px] leading-4 tracking-[0.06em] text-[#021861] sm:text-xs sm:tracking-[0.12em]">
                SECURE • INTEGRATE • DETECT • RESPOND
              </div>
          </div>
        </div>
      </section>
            {/* Six Principles */}
      <section className="border-t border-[#021861]/40 bg-[#9292F0] py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-6 border-l-2 border-[#DE1110] pl-4 text-xs font-semibold tracking-[0.2em] text-[#021861]">
              THE SECORVIX PHILOSOPHY
            </p>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl text-balance [overflow-wrap:break-word]">
              One Name.{" "}
              <span className="block text-white">
                Six Cybersecurity Principles.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#021861]">
              SECORVIX is built around six fundamental principles that define
              our approach to enterprise cybersecurity.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-x-12 sm:mt-16 lg:grid-cols-2 lg:gap-x-16">
            {/* Security */}
            <div className="grid min-w-0 grid-cols-[3.5rem_minmax(0,1fr)] gap-5 border-t border-[#021861]/60 py-8 sm:grid-cols-[5.5rem_minmax(0,1fr)] sm:gap-7 sm:py-10 lg:py-12">
              <span aria-hidden="true" className="select-none text-[4.5rem] font-semibold leading-[0.85] tracking-[-0.06em] text-[#021861] sm:text-[7rem]">S</span>
              <div className="min-w-0">
                <div className="mb-4 flex items-center gap-2">
                  <span aria-hidden="true" className="h-1.5 w-1.5 bg-[#DE1110]" />
                  <span className="text-xs font-medium tracking-[0.2em] text-[#021861]">01</span>
                </div>
                <h3 className="text-xl font-semibold leading-tight tracking-tight text-white sm:text-2xl text-balance [overflow-wrap:break-word]">Security</h3>
                <p className="mt-4 max-w-md text-base leading-7 text-[#021861]">
                Protecting digital assets, infrastructure, identities and data.
              </p>
              </div>
            </div>

            {/* Orchestration */}
            <div className="grid min-w-0 grid-cols-[3.5rem_minmax(0,1fr)] gap-5 border-t border-[#021861]/60 py-8 sm:grid-cols-[5.5rem_minmax(0,1fr)] sm:gap-7 sm:py-10 lg:py-12">
              <span aria-hidden="true" className="select-none text-[4.5rem] font-semibold leading-[0.85] tracking-[-0.06em] text-[#021861] sm:text-[7rem]">O</span>
              <div className="min-w-0">
                <div className="mb-4 flex items-center gap-2">
                  <span aria-hidden="true" className="h-1.5 w-1.5 bg-[#DE1110]" />
                  <span className="text-xs font-medium tracking-[0.2em] text-[#021861]">02</span>
                </div>
                <h3 className="text-xl font-semibold leading-tight tracking-tight text-white sm:text-2xl text-balance [overflow-wrap:break-word]">Orchestration</h3>
                <p className="mt-4 max-w-md text-base leading-7 text-[#021861]">
                Bringing security technologies, processes and teams together.
              </p>
              </div>
            </div>

            {/* Resilience */}
            <div className="grid min-w-0 grid-cols-[3.5rem_minmax(0,1fr)] gap-5 border-t border-[#021861]/60 py-8 sm:grid-cols-[5.5rem_minmax(0,1fr)] sm:gap-7 sm:py-10 lg:py-12">
              <span aria-hidden="true" className="select-none text-[4.5rem] font-semibold leading-[0.85] tracking-[-0.06em] text-[#021861] sm:text-[7rem]">R</span>
              <div className="min-w-0">
                <div className="mb-4 flex items-center gap-2">
                  <span aria-hidden="true" className="h-1.5 w-1.5 bg-[#DE1110]" />
                  <span className="text-xs font-medium tracking-[0.2em] text-[#021861]">03</span>
                </div>
                <h3 className="text-xl font-semibold leading-tight tracking-tight text-white sm:text-2xl text-balance [overflow-wrap:break-word]">Resilience</h3>
                <p className="mt-4 max-w-md text-base leading-7 text-[#021861]">
                Enabling organizations to withstand, respond to and recover
                from cyber threats.
              </p>
              </div>
            </div>

            {/* Visibility */}
            <div className="grid min-w-0 grid-cols-[3.5rem_minmax(0,1fr)] gap-5 border-t border-[#021861]/60 py-8 sm:grid-cols-[5.5rem_minmax(0,1fr)] sm:gap-7 sm:py-10 lg:py-12">
              <span aria-hidden="true" className="select-none text-[4.5rem] font-semibold leading-[0.85] tracking-[-0.06em] text-[#021861] sm:text-[7rem]">V</span>
              <div className="min-w-0">
                <div className="mb-4 flex items-center gap-2">
                  <span aria-hidden="true" className="h-1.5 w-1.5 bg-[#DE1110]" />
                  <span className="text-xs font-medium tracking-[0.2em] text-[#021861]">04</span>
                </div>
                <h3 className="text-xl font-semibold leading-tight tracking-tight text-white sm:text-2xl text-balance [overflow-wrap:break-word]">Visibility</h3>
                <p className="mt-4 max-w-md text-base leading-7 text-[#021861]">
                Creating a unified view across network, cloud, endpoint,
                identity and data.
              </p>
              </div>
            </div>

            {/* Intelligence */}
            <div className="grid min-w-0 grid-cols-[3.5rem_minmax(0,1fr)] gap-5 border-t border-[#021861]/60 py-8 sm:grid-cols-[5.5rem_minmax(0,1fr)] sm:gap-7 sm:py-10 lg:py-12">
              <span aria-hidden="true" className="select-none text-[4.5rem] font-semibold leading-[0.85] tracking-[-0.06em] text-[#021861] sm:text-[7rem]">I</span>
              <div className="min-w-0">
                <div className="mb-4 flex items-center gap-2">
                  <span aria-hidden="true" className="h-1.5 w-1.5 bg-[#DE1110]" />
                  <span className="text-xs font-medium tracking-[0.2em] text-[#021861]">05</span>
                </div>
                <h3 className="text-xl font-semibold leading-tight tracking-tight text-white sm:text-2xl text-balance [overflow-wrap:break-word]">Intelligence</h3>
                <p className="mt-4 max-w-md text-base leading-7 text-[#021861]">
                Turning security data and threat intelligence into actionable
                insights.
              </p>
              </div>
            </div>

            {/* Execution */}
            <div className="grid min-w-0 grid-cols-[3.5rem_minmax(0,1fr)] gap-5 border-t border-[#021861]/60 py-8 sm:grid-cols-[5.5rem_minmax(0,1fr)] sm:gap-7 sm:py-10 lg:py-12">
              <span aria-hidden="true" className="select-none text-[4.5rem] font-semibold leading-[0.85] tracking-[-0.06em] text-[#021861] sm:text-[7rem]">X</span>
              <div className="min-w-0">
                <div className="mb-4 flex items-center gap-2">
                  <span aria-hidden="true" className="h-1.5 w-1.5 bg-[#DE1110]" />
                  <span className="text-xs font-medium tracking-[0.2em] text-[#021861]">06</span>
                </div>
                <h3 className="text-xl font-semibold leading-tight tracking-tight text-white sm:text-2xl text-balance [overflow-wrap:break-word]">eXecution</h3>
                <p className="mt-4 max-w-md text-base leading-7 text-[#021861]">
                Converting strategy into implementation, response and
                measurable outcomes.
              </p>
              </div>
            </div>
          </div>

          <div className="mt-6 border-t-2 border-[#021861] pt-8 sm:mt-8 sm:pt-10 lg:mt-12 lg:pt-12">
            <p className="max-w-4xl text-lg leading-8 text-[#021861] sm:text-xl sm:leading-9">
              SECORVIX is more than a cybersecurity services company. We are an
              integration and transformation partner helping organizations
              build security architectures that are connected, intelligent and
              resilient.
            </p>
          </div>
        </div>
      </section>
            {/* Cybersecurity Capabilities */}
      <section id="solutions" className="border-t border-[#021861]/40 bg-[#9292F0] py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-16">
            <div>
              <p className="mb-6 border-l-2 border-[#DE1110] pl-4 text-xs font-semibold tracking-[0.16em] text-[#021861]">
                OUR CYBERSECURITY CAPABILITIES
              </p>

              <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl text-balance [overflow-wrap:break-word]">
                Security Across{" "}
                <span className="text-white">
                  Every Layer of the Enterprise
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-base leading-7 text-[#021861]">
                Cybersecurity is no longer a single technology. It is an
                interconnected ecosystem.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-7 text-[#021861]">
                SECORVIX designs and integrates security capabilities across the
                entire digital environment.
              </p>
            </div>
          </div>

          <div className="mt-12 grid min-w-0 grid-cols-1 border border-[#021861] bg-[#021861] sm:mt-16 lg:grid-cols-2">
            {/* Network Security */}
            <div className="min-w-0 p-6 sm:p-8 lg:col-span-2 lg:p-12">
              <div className="mb-6 flex items-center justify-between lg:mb-8">
                <span className="flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-white">
                  <span aria-hidden="true" className="h-1.5 w-1.5 bg-[#DE1110]" />
                  01
                </span>
                <span aria-hidden="true" className="text-2xl font-semibold leading-none text-white/75">N</span>
              </div>
              <div className="grid gap-5 lg:grid-cols-2 lg:items-start lg:gap-16">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-[-0.03em] text-white text-balance [overflow-wrap:break-word]">Network Security</h3>
                <p className="max-w-xl text-base leading-7 text-white/75">
                Protect networks, infrastructure and connectivity with
                integrated security architecture, segmentation, secure access
                and advanced threat protection.
              </p>
              </div>
            </div>

            {/* Cloud Security */}
            <div className="min-w-0 p-6 sm:p-8 lg:p-10 border-t border-white/20">
              <div className="mb-6 flex items-center justify-between">
                <span className="flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-white">
                  <span aria-hidden="true" className="h-1.5 w-1.5 bg-[#DE1110]" />
                  02
                </span>
                <span aria-hidden="true" className="text-2xl font-semibold leading-none text-white/75">C</span>
              </div>
              <div className="min-w-0">
                <h3 className="text-2xl sm:text-3xl font-semibold leading-tight tracking-[-0.03em] text-white text-balance [overflow-wrap:break-word]">Cloud Security</h3>
                <p className="mt-5 max-w-xl text-base leading-7 text-white/75">
                Secure cloud infrastructure, workloads, applications,
                identities and data across modern hybrid and multi-cloud
                environments.
              </p>
              </div>
            </div>

            {/* Identity & Access */}
            <div className="min-w-0 p-6 sm:p-8 lg:p-10 border-t border-white/20 lg:border-l">
              <div className="mb-6 flex items-center justify-between">
                <span className="flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-white">
                  <span aria-hidden="true" className="h-1.5 w-1.5 bg-[#DE1110]" />
                  03
                </span>
                <span aria-hidden="true" className="text-2xl font-semibold leading-none text-white/75">I</span>
              </div>
              <div className="min-w-0">
                <h3 className="text-2xl sm:text-3xl font-semibold leading-tight tracking-[-0.03em] text-white text-balance [overflow-wrap:break-word]">Identity & Access</h3>
                <p className="mt-5 max-w-xl text-base leading-7 text-white/75">
                Build identity-centric security with strong authentication,
                access controls, privileged access protection and Zero Trust
                principles.
              </p>
              </div>
            </div>

            {/* Endpoint */}
            <div className="min-w-0 p-6 sm:p-8 lg:p-10 border-t border-white/20">
              <div className="mb-6 flex items-center justify-between">
                <span className="flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-white">
                  <span aria-hidden="true" className="h-1.5 w-1.5 bg-[#DE1110]" />
                  04
                </span>
                <span aria-hidden="true" className="text-2xl font-semibold leading-none text-white/75">E</span>
              </div>
              <div className="min-w-0">
                <h3 className="text-2xl sm:text-3xl font-semibold leading-tight tracking-[-0.03em] text-white text-balance [overflow-wrap:break-word]">
                Endpoint & Workplace Security
              </h3>
                <p className="mt-5 max-w-xl text-base leading-7 text-white/75">
                Protect users, devices and endpoints while enabling secure
                digital work environments.
              </p>
              </div>
            </div>

            {/* Data & Application */}
            <div className="min-w-0 p-6 sm:p-8 lg:p-10 border-t border-white/20 lg:border-l">
              <div className="mb-6 flex items-center justify-between">
                <span className="flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-white">
                  <span aria-hidden="true" className="h-1.5 w-1.5 bg-[#DE1110]" />
                  05
                </span>
                <span aria-hidden="true" className="text-2xl font-semibold leading-none text-white/75">D</span>
              </div>
              <div className="min-w-0">
                <h3 className="text-2xl sm:text-3xl font-semibold leading-tight tracking-[-0.03em] text-white text-balance [overflow-wrap:break-word]">
                Data & Application Security
              </h3>
                <p className="mt-5 max-w-xl text-base leading-7 text-white/75">
                Protect sensitive information and applications throughout their
                lifecycle—from development and deployment to operations.
              </p>
              </div>
            </div>

            {/* Security Operations */}
            <div className="min-w-0 p-6 sm:p-8 lg:col-span-2 lg:p-12 border-t border-white/20">
              <div className="mb-6 flex items-center justify-between lg:mb-8">
                <span className="flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-white">
                  <span aria-hidden="true" className="h-1.5 w-1.5 bg-[#DE1110]" />
                  06
                </span>
                <span aria-hidden="true" className="text-2xl font-semibold leading-none text-white/75">S</span>
              </div>
              <div className="grid gap-5 lg:grid-cols-2 lg:items-start lg:gap-16">
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-[-0.03em] text-white text-balance [overflow-wrap:break-word]">Security Operations</h3>
                <p className="max-w-xl text-base leading-7 text-white/75">
                Improve detection, investigation and response through integrated
                monitoring, analytics, automation, threat intelligence and AI.
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>
            {/* System Integration */}
      <section
        id="services"
        className="border-t border-[#9292F0]/25 bg-[#021861] py-16 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-6 border-l-2 border-[#DE1110] pl-4 text-xs font-semibold tracking-[0.2em] text-white">
              SECURITY INTEGRATION
            </p>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl text-balance [overflow-wrap:break-word]">
              From Security Technologies to{" "}
              <span className="text-white">
                One Integrated Architecture
              </span>
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-7 text-white/75">
              Enterprise environments are increasingly complex. Different
              technologies, platforms, clouds, applications and security
              controls often operate in isolation.
            </p>

            <p className="mt-6 text-lg font-medium text-white">
              SECORVIX brings them together.
            </p>
          </div>

          {/* Connected lifecycle: vertical on mobile, horizontal on wide screens */}
          <ol className="mt-12 grid min-w-0 grid-cols-1 border-y border-[#9292F0]/30 py-10 sm:mt-16 sm:py-12 lg:grid-cols-8 lg:py-16">
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
              <li key={step} className="relative min-w-0 pb-8 pl-9 last:pb-0 lg:pb-0 lg:pl-0 lg:pr-2 lg:pt-10">
                {index < 7 && (
                  <div aria-hidden="true" className="pointer-events-none absolute left-[7px] top-2 h-full w-px bg-[#9292F0]/60 lg:left-2 lg:top-[7px] lg:h-px lg:w-full" />
                )}
                <div aria-hidden="true" className="absolute left-0 top-0 flex h-4 w-4 items-center justify-center rounded-full border border-[#9292F0] bg-[#021861]">
                  <span className="h-1 w-1 rounded-full bg-[#DE1110]" />
                </div>
                <div className="text-xs font-medium tracking-[0.2em] text-[#9292F0]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="mt-2 text-xl font-semibold tracking-tight text-white lg:text-base xl:text-lg">
                  {step}
                </div>
              </li>
            ))}
          </ol>

          {/* Supporting copy */}
          <div className="mt-10 grid gap-10 sm:mt-12 lg:mt-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div className="min-w-0 lg:pr-6">
              <h3 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl text-balance [overflow-wrap:break-word]">
                Integration that fits the enterprise
              </h3>

              <p className="mt-5 leading-8 text-white/75">
                We architect, integrate and optimize cybersecurity environments
                across the enterprise. Our vendor-neutral approach allows us to
                select and integrate the technologies best aligned to each
                customer&apos;s security objectives, existing infrastructure
                and business requirements.
              </p>
            </div>

            {/* Integration capabilities */}
            <div className="grid min-w-0 gap-x-8 sm:grid-cols-2">
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
                  className="min-w-0 border-t border-white/20 py-5"
                >
                  <h4 className="text-sm font-semibold text-white">{title}</h4>

                  <p className="mt-2 text-sm leading-6 text-white/75">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
            {/* AI & Cyber Intelligence */}
      <section className="relative overflow-hidden border-t border-[#9292F0]/25 bg-[#021861] py-16 sm:py-24 lg:py-28">
        {/* Background effects */}
        <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9292F0]/[0.06] blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-6 inline-flex border-l-2 border-[#DE1110] pl-4 text-xs font-semibold tracking-[0.2em] text-white">
              AI & CYBER INTELLIGENCE
            </p>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl text-balance [overflow-wrap:break-word]">
              AI-Powered Cybersecurity.{" "}
              <span className="text-white">Human-Led Security.</span>
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/75">
              AI is transforming cybersecurity—but technology alone is not
              enough. SECORVIX combines AI capabilities, security intelligence,
              automation and human expertise to improve how organizations
              detect, understand and respond to threats.
            </p>
          </div>

          {/* Original intelligence composition */}
          <div className="relative mx-auto mt-12 max-w-5xl sm:mt-16">
            <div className="relative mx-auto aspect-square w-full max-w-[520px]">
              <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute inset-[6%] rounded-full border border-[#9292F0]/30" />
                <div className="absolute inset-[14%] rounded-full border-[8px] border-[#9292F0]/15 sm:border-[14px]" />
                <div className="absolute inset-[19%] rounded-full border border-dashed border-[#9292F0]/60" />
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
            {/* Labels stay separate from the diagram on smaller screens */}
            <div className="mt-6 grid min-w-0 grid-cols-1 gap-x-6 sm:grid-cols-2 lg:contents">
              <div className="border-t border-[#9292F0]/40 py-4 text-xs font-semibold tracking-[0.12em] text-white lg:absolute lg:left-0 lg:top-1/2 lg:w-[20%] lg:-translate-y-1/2">HUMAN EXPERTISE</div>
              <div className="border-t border-[#9292F0]/40 py-4 text-xs font-semibold tracking-[0.12em] text-white lg:absolute lg:right-0 lg:top-1/2 lg:w-[20%] lg:-translate-y-1/2 lg:text-right">AUTOMATION</div>
              <div className="border-t border-[#9292F0]/40 py-4 text-xs font-semibold tracking-[0.12em] text-white lg:absolute lg:left-0 lg:top-[12%] lg:w-[25%]">THREAT INTELLIGENCE</div>
              <div className="border-t border-[#9292F0]/40 py-4 text-xs font-semibold tracking-[0.12em] text-white lg:absolute lg:bottom-[12%] lg:right-0 lg:w-[25%] lg:text-right">SECURITY ANALYTICS</div>
            </div>
          </div>

          {/* Three pillars */}
          <div className="mt-12 grid min-w-0 grid-cols-1 border-t border-[#9292F0]/40 sm:mt-16 lg:grid-cols-3">
            <div className="min-w-0 py-8 sm:py-10 lg:pr-8">
              <div className="mb-6 text-sm font-semibold tracking-[0.2em] text-[#9292F0]">
                01
              </div>

              <h3 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl text-balance [overflow-wrap:break-word]">AI-Assisted Detection</h3>

              <p className="mt-4 leading-7 text-white/75">
                Identify abnormal behavior and emerging threats faster.
              </p>
            </div>

            <div className="min-w-0 py-8 sm:py-10 border-t border-[#9292F0]/25 lg:border-l lg:border-t-0 lg:px-8">
              <div className="mb-6 text-sm font-semibold tracking-[0.2em] text-[#9292F0]">
                02
              </div>

              <h3 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl text-balance [overflow-wrap:break-word]">
                Intelligent Analysis
              </h3>

              <p className="mt-4 leading-7 text-white/75">
                Correlate security events, threat intelligence and contextual
                information to prioritize what matters.
              </p>
            </div>

            <div className="min-w-0 py-8 sm:py-10 border-t border-[#9292F0]/25 lg:border-l lg:border-t-0 lg:px-8">
              <div className="mb-6 text-sm font-semibold tracking-[0.2em] text-[#9292F0]">
                03
              </div>

              <h3 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl text-balance [overflow-wrap:break-word]">Automated Response</h3>

              <p className="mt-4 leading-7 text-white/75">
                Accelerate investigation, containment and remediation through
                intelligent automation.
              </p>
            </div>
          </div>

          {/* Human-led positioning */}
          <div className="mt-6 border-t border-[#9292F0]/50 pt-10 text-center sm:mt-10 sm:pt-12">
            <p className="mx-auto max-w-4xl text-lg leading-8 text-white/75 sm:text-xl sm:leading-9">
              We don&apos;t position AI as a replacement for cybersecurity
              professionals. We use AI to augment human expertise, accelerate
              decision-making and improve security outcomes.
            </p>
          </div>
        </div>
      </section>
            {/* Partner Ecosystem */}
      <section className="border-t border-[#021861]/40 bg-[#9292F0] py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-6 inline-flex border-l-2 border-[#DE1110] pl-4 text-xs font-semibold tracking-[0.2em] text-[#021861]">
              TECHNOLOGY ECOSYSTEM
            </p>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl text-balance [overflow-wrap:break-word]">
              An Open Ecosystem.{" "}
              <span className="text-white">One Integrated Outcome.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#021861]">
              No single technology can solve every cybersecurity challenge.
              SECORVIX works with a partner ecosystem of leading technology
              providers, specialist cybersecurity companies, cloud platforms
              and AI organizations to build solutions aligned with customer
              requirements.
            </p>
          </div>

          {/* Connected ecosystem architecture */}
          <div className="mx-auto mt-12 max-w-5xl border-y border-[#021861]/40 py-8 sm:mt-16 sm:py-12 lg:py-16">
            <div className="relative mx-auto grid w-full max-w-3xl grid-cols-1 border-l border-[#021861]/60 sm:grid-cols-3 sm:border-l-0">
              <div aria-hidden="true" className="absolute bottom-0 left-0 h-px w-1/2 bg-[#021861]/60 sm:left-[16.6667%] sm:w-2/3" />
              <div className="relative min-w-0 pb-6 sm:pb-10 pl-6 sm:px-3 sm:text-center sm:before:absolute sm:before:bottom-0 sm:before:left-1/2 sm:before:h-6 sm:before:w-px sm:before:bg-[#021861]/60">
                <span aria-hidden="true" className="absolute -left-1 top-1 sm:bottom-[-3px] sm:top-auto h-1.5 w-1.5 rounded-full bg-[#DE1110] sm:left-1/2 sm:-translate-x-1/2" />
                <div className="text-sm font-semibold tracking-[0.12em] text-[#021861] sm:text-base">SECURITY PARTNERS</div>
              </div>
              <div className="relative min-w-0 pb-6 sm:pb-10 pl-6 sm:px-3 sm:text-center sm:before:absolute sm:before:bottom-0 sm:before:left-1/2 sm:before:h-6 sm:before:w-px sm:before:bg-[#021861]/60">
                <span aria-hidden="true" className="absolute -left-1 top-1 sm:bottom-[-3px] sm:top-auto h-1.5 w-1.5 rounded-full bg-[#DE1110] sm:left-1/2 sm:-translate-x-1/2" />
                <div className="text-sm font-semibold tracking-[0.12em] text-[#021861] sm:text-base">CLOUD</div>
              </div>
              <div className="relative min-w-0 pb-6 sm:pb-10 pl-6 sm:px-3 sm:text-center sm:before:absolute sm:before:bottom-0 sm:before:left-1/2 sm:before:h-6 sm:before:w-px sm:before:bg-[#021861]/60">
                <span aria-hidden="true" className="absolute -left-1 top-1 sm:bottom-[-3px] sm:top-auto h-1.5 w-1.5 rounded-full bg-[#DE1110] sm:left-1/2 sm:-translate-x-1/2" />
                <div className="text-sm font-semibold tracking-[0.12em] text-[#021861] sm:text-base">AI</div>
              </div>
            </div>
            <div aria-hidden="true" className="mx-auto h-8 w-px bg-[#021861]/60 sm:h-12" />
            <div className="relative mx-auto flex min-h-36 w-full max-w-xs items-center justify-center border border-[#021861] bg-[#021861] px-5 py-8 sm:min-h-44 sm:max-w-sm">
              <div aria-hidden="true" className="pointer-events-none absolute inset-3 border border-[#9292F0]/25" />
              <div className="relative text-center">
                <div className="text-2xl font-bold tracking-[0.14em] text-white sm:text-3xl">SECORVIX</div>
                <div className="mt-3 text-[10px] tracking-[0.2em] text-white/75">INTEGRATION ENGINE</div>
              </div>
            </div>
            <div aria-hidden="true" className="mx-auto h-8 w-px bg-[#021861]/60 sm:h-12" />
            <div className="relative mx-auto grid w-full max-w-3xl grid-cols-1 border-l border-[#021861]/60 sm:grid-cols-3 sm:border-l-0">
              <div aria-hidden="true" className="absolute top-0 left-0 h-px w-1/2 bg-[#021861]/60 sm:left-[16.6667%] sm:w-2/3" />
              <div className="relative min-w-0 pt-6 sm:pt-10 pl-6 sm:px-3 sm:text-center sm:before:absolute sm:before:top-0 sm:before:left-1/2 sm:before:h-6 sm:before:w-px sm:before:bg-[#021861]/60">
                <span aria-hidden="true" className="absolute -left-1 top-7 sm:top-[-3px] h-1.5 w-1.5 rounded-full bg-[#DE1110] sm:left-1/2 sm:-translate-x-1/2" />
                <div className="text-sm font-semibold tracking-[0.12em] text-[#021861] sm:text-base">Network</div>
              </div>
              <div className="relative min-w-0 pt-6 sm:pt-10 pl-6 sm:px-3 sm:text-center sm:before:absolute sm:before:top-0 sm:before:left-1/2 sm:before:h-6 sm:before:w-px sm:before:bg-[#021861]/60">
                <span aria-hidden="true" className="absolute -left-1 top-7 sm:top-[-3px] h-1.5 w-1.5 rounded-full bg-[#DE1110] sm:left-1/2 sm:-translate-x-1/2" />
                <div className="text-sm font-semibold tracking-[0.12em] text-[#021861] sm:text-base">Identity</div>
              </div>
              <div className="relative min-w-0 pt-6 sm:pt-10 pl-6 sm:px-3 sm:text-center sm:before:absolute sm:before:top-0 sm:before:left-1/2 sm:before:h-6 sm:before:w-px sm:before:bg-[#021861]/60">
                <span aria-hidden="true" className="absolute -left-1 top-7 sm:top-[-3px] h-1.5 w-1.5 rounded-full bg-[#DE1110] sm:left-1/2 sm:-translate-x-1/2" />
                <div className="text-sm font-semibold tracking-[0.12em] text-[#021861] sm:text-base">Data</div>
              </div>
            </div>
          </div>

          {/* Supporting copy */}
          <div className="mt-10 text-center sm:mt-12 lg:mt-16">
            <h3 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl text-balance [overflow-wrap:break-word]">
              Technology-neutral. Outcome-driven.
            </h3>

            <p className="mx-auto mt-5 max-w-4xl leading-8 text-[#021861]">
              Our ecosystem approach enables us to bring together complementary
              technologies while maintaining a unified architecture,
              implementation strategy and operational model.
            </p>

            <a
              href="#ecosystem"
              className="mt-8 inline-flex min-h-12 items-center justify-center border border-[#021861] bg-[#021861] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#021861]/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Explore Our Ecosystem
            </a>
          </div>
        </div>
      </section>
            {/* Managed Security Services */}
      <section className="border-t border-white/10 bg-[#021861] py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-6 border-l-2 border-[#DE1110] pl-4 text-sm font-semibold tracking-[0.2em] text-[#9292F0]">
                MANAGED SECURITY
              </p>

              <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl text-balance [overflow-wrap:break-word]">
                From Prevention to{" "}
                <span className="text-white">Continuous Protection</span>
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-base leading-8 text-white/75">
                Threats don&apos;t operate only during business hours. Your
                security shouldn&apos;t either.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-8 text-white/75">
                SECORVIX helps organizations establish continuous security
                monitoring, detection, investigation and response.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-x-12 sm:mt-16 lg:grid-cols-2">
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
                className="min-w-0 border-t border-[#9292F0]/40 py-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.2em] text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="h-1.5 w-1.5 bg-[#DE1110]" />
                </div>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl text-balance [overflow-wrap:break-word]">
                  {title}
                </h3>

                <p className="mt-3 text-base leading-7 text-white/75">
                  {description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-start justify-between gap-8 border-t-2 border-[#9292F0]/50 pt-10 lg:flex-row lg:items-center">
            <div>
              <h3 className="text-2xl font-semibold text-balance [overflow-wrap:break-word]">
                Strengthen your security operations
              </h3>

              <p className="mt-3 max-w-2xl leading-7 text-white/75">
                Build continuous visibility, faster detection and coordinated
                response across your security environment.
              </p>
            </div>

            <a
              href="/contact"
              className="inline-flex min-h-12 w-full items-center justify-center bg-[#9292F0] px-6 py-3 text-center text-sm font-semibold text-[#021861] transition hover:bg-[#9292F0]/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:w-auto"
            >
              Strengthen Your Security Operations
            </a>
          </div>
        </div>
      </section>
            {/* Cyber Resilience */}
      <section className="border-t border-white/10 bg-[#9292F0] py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-6 border-l-2 border-[#DE1110] pl-4 text-xs font-semibold tracking-[0.2em] text-[#021861]">
              CYBER RESILIENCE
            </p>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl text-balance [overflow-wrap:break-word]">
              Security Is Not Just About{" "}
              <span className="text-white">Stopping Attacks</span>
            </h2>

            <p className="mt-6 max-w-3xl text-base leading-8 text-[#021861]">
              A resilient organization must be able to anticipate, withstand,
              respond to and recover from cyber incidents.
            </p>

            <p className="mt-4 max-w-3xl text-base leading-8 text-[#021861]">
              SECORVIX helps organizations build resilience across technology,
              processes and people.
            </p>
          </div>

          {/* Resilience Framework */}
          <div className="mt-12 grid grid-cols-1 border-y border-[#021861]/40 py-8 sm:mt-16 lg:grid-cols-6 lg:py-12 text-[#021861]">
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
                className="relative min-w-0 border-l border-[#021861]/60 pb-8 pl-8 last:pb-0 lg:border-l-0 lg:border-t lg:pb-0 lg:pl-0 lg:pt-8 text-[#021861]"
              >
                <div className="text-4xl font-semibold tracking-tight text-[#021861]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="mt-3 text-xl font-semibold text-[#021861] text-balance [overflow-wrap:break-word]">
                  {step}
                </h3>

                {index < 5 && (
                  <div className="absolute -left-1 top-0 h-2 w-2 bg-[#DE1110] lg:left-0 lg:top-[-4px]" />
                )}
              </div>
            ))}
          </div>

          {/* Resilience Services */}
          <div className="mt-12 grid gap-10 sm:mt-16 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div className="min-w-0 border-l-2 border-[#021861] pl-6 lg:pr-8">
              <p className="text-xs font-semibold tracking-[0.2em] text-[#021861]">
                RESILIENCE FRAMEWORK
              </p>

              <h3 className="mt-5 text-2xl font-semibold text-balance [overflow-wrap:break-word]">
                Build security that can adapt, respond and recover.
              </h3>

              <p className="mt-5 leading-8 text-[#021861]">
                Cyber resilience connects risk management, security controls,
                response planning and recovery into one continuous operating
                model.
              </p>
            </div>

            <div className="grid min-w-0 gap-x-8 sm:grid-cols-2 text-[#021861]">
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
                  className="flex min-w-0 items-center gap-3 border-t border-[#021861]/40 py-5"
                >
                  <div className="h-1.5 w-1.5 shrink-0 bg-[#DE1110]" />

                  <span className="text-sm font-medium text-[#021861]">
                    {service}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
            {/* Zero Trust */}
      <section className="border-t border-white/10 bg-[#021861] py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            {/* Left */}
            <div>
              <p className="mb-6 border-l-2 border-[#DE1110] pl-4 text-xs font-semibold tracking-[0.2em] text-[#9292F0]">
                ZERO TRUST
              </p>

              <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl text-balance [overflow-wrap:break-word]">
                Trust Nothing.{" "}
                <span className="text-white">Verify Everything.</span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/75">
                Modern organizations have users, applications, workloads and
                data everywhere.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-8 text-white/75">
                We help organizations move beyond perimeter-based security
                toward identity-driven, continuously verified access models.
              </p>
            </div>

            {/* Layered policy boundaries, distinct from intelligence rings */}
            <div className="relative min-w-0 border border-[#9292F0]/30 p-5 sm:p-8">
              <div aria-hidden="true" className="pointer-events-none absolute inset-3 border border-dashed border-[#9292F0]/20" />
              <div className="relative border-l-2 border-[#9292F0] px-5 py-8 sm:px-8">
                <div className="text-2xl font-bold tracking-[0.12em] text-white">ZERO TRUST</div>
                <div className="mt-3 text-xs tracking-[0.16em] text-white/75">CONTINUOUS VERIFY</div>
              </div>
              <div aria-hidden="true" className="mx-auto h-8 w-px bg-[#9292F0]/70" />
              <div className="relative grid grid-cols-1 border-t border-[#9292F0]/50 sm:grid-cols-2">
                <div className="border-b border-[#9292F0]/25 py-4 pl-4 text-sm text-white/75">Identity</div>
                <div className="border-b border-[#9292F0]/25 py-4 pl-4 text-sm text-white/75">Device</div>
                <div className="border-b border-[#9292F0]/25 py-4 pl-4 text-sm text-white/75">Application</div>
                <div className="border-b border-[#9292F0]/25 py-4 pl-4 text-sm text-white/75">Network</div>
                <div className="border-b border-[#9292F0]/25 py-4 pl-4 text-sm text-white/75">Data</div>
                <div className="border-b border-[#9292F0]/25 py-4 pl-4 text-sm text-white/75">Context</div>
              </div>
              <div aria-hidden="true" className="absolute left-[14px] top-12 h-1.5 w-1.5 bg-[#DE1110] sm:left-[26px]" />
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-x-6 border-t border-[#9292F0]/40 sm:grid-cols-3 lg:grid-cols-6">
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
                className="min-w-0 border-b border-[#9292F0]/25 py-5"
              >
                <div className="text-xs font-semibold tracking-[0.2em] text-white">
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
      <section className="border-t border-white/10 bg-[#9292F0] py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-6 border-l-2 border-[#DE1110] pl-4 text-xs font-semibold tracking-[0.2em] text-[#021861]">
              OUR APPROACH
            </p>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl text-balance [overflow-wrap:break-word]">
              A Structured Path from Complexity to{" "}
              <span className="text-white">Cyber Confidence</span>
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-x-16 sm:mt-16 lg:grid-cols-2 text-[#021861]">
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
                className="min-w-0 border-t border-[#021861]/50 py-8 sm:py-10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-5xl font-semibold leading-none tracking-[-0.04em] text-[#021861] sm:text-6xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="h-1.5 w-1.5 bg-[#DE1110]" />
                </div>

                <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white sm:text-3xl text-balance [overflow-wrap:break-word]">
                  {title}
                </h3>

                <p className="mt-4 leading-7 text-[#021861]">
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
        className="border-t border-white/10 bg-[#9292F0] py-16 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="mb-6 border-l-2 border-[#DE1110] pl-4 text-xs font-semibold tracking-[0.2em] text-[#021861]">
                INDUSTRIES
              </p>

              <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl text-balance [overflow-wrap:break-word]">
                Cybersecurity Designed Around{" "}
                <span className="text-white">Your Industry</span>
              </h2>
            </div>

            <div>
              <p className="max-w-2xl text-base leading-8 text-[#021861]">
                Different industries face different risks, regulations and
                operational challenges.
              </p>
            </div>
          </div>

          <div className="mt-12 border-t-2 border-[#021861] sm:mt-16 text-[#021861]">
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
                className="grid min-w-0 gap-5 border-b border-[#021861]/40 py-8 sm:py-10 lg:grid-cols-[5rem_1fr_1fr] lg:items-start lg:gap-10"
              >
                <div className="flex items-center justify-between lg:flex-col lg:items-start lg:gap-4">
                  <span className="text-3xl font-semibold leading-none tracking-tight text-[#021861] sm:text-4xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="h-1.5 w-1.5 bg-[#DE1110]" />
                </div>

                <h3 className="text-2xl font-semibold leading-tight tracking-tight text-white sm:text-3xl text-balance [overflow-wrap:break-word]">
                  {title}
                </h3>

                <p className="max-w-xl text-base leading-7 text-[#021861]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
            {/* Why SECORVIX */}
      <section className="border-t border-white/10 bg-[#021861] py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-4xl">
            <p className="mb-6 border-l-2 border-[#DE1110] pl-4 text-xs font-semibold tracking-[0.2em] text-white">
              WHY SECORVIX
            </p>

            <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl text-balance [overflow-wrap:break-word]">
              What Makes{" "}
              <span className="text-white">SECORVIX Different?</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
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
                className="min-w-0 border-t border-[#9292F0]/30 py-7"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tracking-[0.2em] text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="h-1.5 w-1.5 bg-[#DE1110]" />
                </div>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white text-balance [overflow-wrap:break-word]">
                  {title}
                </h3>

                <p className="mt-4 leading-7 text-white/75">
                  {description}
                </p>
              </div>
            ))}
          </div>

          {/* Challenge / Advantage */}
          <div className="mt-12 border-y-2 border-[#9292F0]/60 py-10 sm:py-14 lg:mt-20">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="border-l-2 border-[#DE1110] pl-4 text-xs font-semibold tracking-[0.2em] text-[#9292F0]">
                  THE CHALLENGE
                </p>

                <h3 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl text-balance [overflow-wrap:break-word]">
                  Complexity is the new cybersecurity reality.
                </h3>

                <p className="mt-5 leading-8 text-white/75">
                  Enterprises face too many security technologies, fragmented
                  operations, increasing threats, compliance pressure and a
                  shortage of specialist expertise.
                </p>
              </div>

              <div>
                <p className="border-l-2 border-[#DE1110] pl-4 text-xs font-semibold tracking-[0.2em] text-[#9292F0]">
                  THE SECORVIX ADVANTAGE
                </p>

                <h3 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl text-balance [overflow-wrap:break-word]">
                  Connected security. Clearer outcomes.
                </h3>

                <p className="mt-5 leading-8 text-white/75">
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
        className="border-t border-white/10 bg-[#9292F0] py-16 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="mb-6 border-l-2 border-[#DE1110] pl-4 text-xs font-semibold tracking-[0.2em] text-[#021861]">
                ABOUT SECORVIX
              </p>

              <h2 className="text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl text-balance [overflow-wrap:break-word]">
                Building the Security Infrastructure for a{" "}
                <span className="text-white">Connected World</span>
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-[#021861]">
                Digital transformation has created unprecedented
                opportunities—and unprecedented cyber risk.
              </p>

              <p className="mt-5 text-base leading-8 text-[#021861]">
                Organizations need more than individual security products. They
                need a partner capable of understanding the entire environment,
                integrating technologies and continuously improving their
                security posture.
              </p>

              <p className="mt-5 text-lg font-medium leading-8 text-[#021861]">
                SECORVIX was created with this purpose.
              </p>

              <p className="mt-5 text-base leading-8 text-[#021861]">
                We bring together cybersecurity expertise, system integration,
                security intelligence, AI capabilities and a broad technology
                ecosystem to help organizations build secure, visible,
                intelligent and resilient digital environments.
              </p>
            </div>
          </div>

          {/* Vision / Mission / Purpose / Promise */}
          <div className="mt-12 grid grid-cols-1 gap-x-16 sm:mt-16 lg:grid-cols-2">
            <div className="min-w-0 border-t border-[#021861]/50 py-8 sm:py-10 lg:col-span-2">
              <p className="border-l-2 border-[#DE1110] pl-4 text-sm font-semibold tracking-[0.2em] text-[#021861]">
                VISION
              </p>

              <h3 className="mt-6 max-w-4xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl text-balance [overflow-wrap:break-word]">
                To become a trusted global cybersecurity integration and
                cyber-resilience partner for the digital enterprise.
              </h3>
            </div>

            <div className="min-w-0 border-t border-[#021861]/50 py-8 sm:py-10">
              <p className="border-l-2 border-[#DE1110] pl-4 text-sm font-semibold tracking-[0.2em] text-[#021861]">
                MISSION
              </p>

              <h3 className="mt-6 max-w-4xl text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl text-balance [overflow-wrap:break-word]">
                To simplify cybersecurity through intelligent integration,
                advanced technologies, AI and expert-led services.
              </h3>
            </div>

            <div className="min-w-0 border-t border-[#021861]/50 py-8 sm:py-10">
              <p className="border-l-2 border-[#DE1110] pl-4 text-sm font-semibold tracking-[0.2em] text-[#021861]">
                PURPOSE
              </p>

              <h3 className="mt-6 max-w-4xl text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl text-balance [overflow-wrap:break-word]">
                Help organizations operate securely and confidently in an
                increasingly connected world.
              </h3>
            </div>

            <div className="min-w-0 border-t border-[#021861]/50 py-8 sm:py-10 lg:col-span-2">
              <p className="border-l-2 border-[#DE1110] pl-4 text-sm font-semibold tracking-[0.2em] text-[#021861]">
                PROMISE
              </p>

              <h3 className="mt-6 max-w-4xl text-2xl font-semibold leading-snug tracking-tight text-white sm:text-3xl text-balance [overflow-wrap:break-word]">
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
        className="border-t border-white/10 bg-[#9292F0] py-16 sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden border-y-2 border-[#021861] bg-[#021861] px-5 py-14 text-center sm:px-10 sm:py-20 lg:px-16 lg:py-24">
            <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#9292F0]/[0.08] blur-[120px]" />

            <div className="relative">
              <p className="inline-flex border-l-2 border-[#DE1110] pl-4 text-xs font-semibold tracking-[0.16em] text-white">
                LET&apos;S BUILD CYBER RESILIENCE
              </p>

              <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl xl:text-7xl text-balance [overflow-wrap:break-word]">
                Ready to Strengthen{" "}
                <span className="text-white">Your Cybersecurity?</span>
              </h2>

              <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-white/75">
                Whether you are modernizing your security architecture, moving
                to the cloud, building a SOC or exploring AI-powered
                cybersecurity, SECORVIX can help you design the right path
                forward.
              </p>

              <p className="mx-auto mt-4 max-w-2xl text-lg font-medium text-white/75">
                Let&apos;s build a more secure and resilient digital enterprise.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:flex-wrap">
                <a
                  href="/contact"
                  className="inline-flex min-h-14 items-center justify-center bg-[#9292F0] px-6 py-4 text-sm font-semibold text-[#021861] transition hover:bg-[#9292F0]/80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Talk to Our Cybersecurity Experts
                </a>

                <a
                  href="/contact"
                  className="inline-flex min-h-14 items-center justify-center border border-white/60 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                >
                  Request a Security Assessment
                </a>
              </div>
            </div>
          </div>
        </div>
           </section>
      {/* Footer */}
      <Footer />

    </main>
  );
}