// Home hero diagram: every SECORVIX service and capability in one layered half-circle.
// Each segment is a link to its page (services) or its section on /solutions/ (capabilities).
// Original vector artwork in the site palette: navy, lavender and small red accents.

import { capabilities, slugify } from "../lib/content";

const CX = 500;
const CY = 560;

// Radii, inside out.
const CORE = 140;
const CAP_OUT = 290;
const RIM1_OUT = 322;
const SVC_OUT = 452;
const RIM2_OUT = 486;

const services = [
  { title: "Security Integration", sub: "Vendor-neutral, integrated architecture", href: "/security-integration/" },
  { title: "Managed Security", sub: "SOC · SIEM · MDR · Incident response", href: "/managed-security/" },
  { title: "AI & Cyber Intelligence", sub: "AI-assisted detection and response", href: "/ai-cyber-intelligence/" },
  { title: "Cyber Resilience", sub: "Withstand · Respond · Recover", href: "/cyber-resilience/" },
];

// Short two-line labels for the capability ring, in the same order as content.ts.
const capLabels: Record<string, [string, string]> = {
  "Network Security": ["Network", "Security"],
  "Cloud Security": ["Cloud", "Security"],
  "Identity & Access": ["Identity &", "Access"],
  "Endpoint & Workplace Security": ["Endpoint &", "Workplace"],
  "Data & Application Security": ["Data &", "Applications"],
  "Security Operations": ["Security", "Operations"],
};

const rad = (deg: number) => (deg * Math.PI) / 180;
const pt = (r: number, deg: number) => [CX + r * Math.cos(rad(deg)), CY - r * Math.sin(rad(deg))] as const;
const f = (n: number) => n.toFixed(1);

// Ring segment from angle a1 (left) to a2 (right), measured in degrees from the right-hand side.
function segment(rIn: number, rOut: number, a1: number, a2: number) {
  const [x1, y1] = pt(rOut, a1);
  const [x2, y2] = pt(rOut, a2);
  const [x3, y3] = pt(rIn, a2);
  const [x4, y4] = pt(rIn, a1);
  return `M${f(x1)},${f(y1)} A${rOut},${rOut} 0 0 1 ${f(x2)},${f(y2)} L${f(x3)},${f(y3)} A${rIn},${rIn} 0 0 0 ${f(x4)},${f(y4)} Z`;
}

// Arc used as a baseline for curved text, running left to right so text reads upright.
function arc(r: number, a1: number, a2: number) {
  const [x1, y1] = pt(r, a1);
  const [x2, y2] = pt(r, a2);
  return `M${f(x1)},${f(y1)} A${r},${r} 0 0 1 ${f(x2)},${f(y2)}`;
}

const segLink = "group cursor-pointer outline-none";
const capFill =
  "transition-colors duration-200 group-hover:fill-[#2b3aa8] group-focus-visible:fill-[#2b3aa8] group-focus-visible:stroke-white";
const svcFill =
  "transition-colors duration-200 group-hover:fill-[#e4e4fd] group-focus-visible:fill-[#e4e4fd] group-focus-visible:stroke-[#9292F0]";

export default function ServicesMap({ className = "" }: { className?: string }) {
  const capStep = 180 / capabilities.length;
  const svcStep = 180 / services.length;

  return (
    <svg viewBox="0 0 1000 650" className={className} style={{ fontFamily: "inherit" }} aria-labelledby="services-map-title" role="group">
      <title id="services-map-title">SECORVIX services and capabilities. Select any part to open its page.</title>
      <defs>
        <radialGradient id="sm-core" cx="0.5" cy="1" r="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.55" stopColor="#b4b4f6" />
          <stop offset="1" stopColor="#9292F0" />
        </radialGradient>
        <linearGradient id="sm-svc" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#eef0fb" />
        </linearGradient>
        <linearGradient id="sm-cap" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#1d2c94" />
          <stop offset="1" stopColor="#14227d" />
        </linearGradient>
        <filter id="sm-glow" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="14" />
        </filter>
        {services.map((s, i) => {
          const a1 = 180 - i * svcStep;
          const a2 = a1 - svcStep;
          return (
            <g key={s.href}>
              <path id={`sm-svc-t-${i}`} d={arc(402, a1, a2)} />
              <path id={`sm-svc-s-${i}`} d={arc(364, a1, a2)} />
            </g>
          );
        })}
        <path id="sm-rim1" d={arc(300, 180, 0)} />
        <path id="sm-rim2" d={arc(462, 180, 0)} />
      </defs>

      {/* Soft glow behind the dome */}
      <path d={segment(0.01, RIM2_OUT, 180, 0)} fill="#9292F0" opacity="0.3" filter="url(#sm-glow)" />

      {/* Outer rim */}
      <path d={segment(SVC_OUT, RIM2_OUT, 180, 0)} fill="#ffffff" />
      <path d={segment(SVC_OUT - 1, SVC_OUT + 1, 180, 0)} fill="#9292F0" opacity="0.6" />
      <text fontSize="18" fontWeight="700" letterSpacing="5" fill="#021861">
        <textPath href="#sm-rim2" startOffset="50%" textAnchor="middle">SECORVIX SERVICES</textPath>
      </text>

      {/* Services ring */}
      {services.map((s, i) => {
        const a1 = 180 - i * svcStep;
        const a2 = a1 - svcStep;
        return (
          <a key={s.href} href={s.href} className={segLink} aria-label={`${s.title}: ${s.sub}`}>
            <path d={segment(RIM1_OUT, SVC_OUT, a1, a2)} fill="url(#sm-svc)" stroke="#c9cbea" strokeWidth="2" className={svcFill} />
            <text fontSize="25" fontWeight="700" fill="#021861" pointerEvents="none">
              <textPath href={`#sm-svc-t-${i}`} startOffset="50%" textAnchor="middle">{s.title}</textPath>
            </text>
            <text fontSize="16" fill="#021861" fillOpacity="0.75" pointerEvents="none" className="max-sm:hidden">
              <textPath href={`#sm-svc-s-${i}`} startOffset="50%" textAnchor="middle">{s.sub}</textPath>
            </text>
          </a>
        );
      })}

      {/* Inner rim */}
      <path d={segment(CAP_OUT, RIM1_OUT, 180, 0)} fill="#9292F0" />
      <text fontSize="15" fontWeight="700" letterSpacing="3" fill="#010b33">
        <textPath href="#sm-rim1" startOffset="50%" textAnchor="middle">CAPABILITIES ACROSS EVERY LAYER</textPath>
      </text>

      {/* Capabilities ring */}
      {capabilities.map(({ title }, i) => {
        const a1 = 180 - i * capStep;
        const a2 = a1 - capStep;
        const [tx, ty] = pt((CORE + CAP_OUT) / 2 + 4, a1 - capStep / 2);
        const [l1, l2] = capLabels[title] ?? [title, ""];
        return (
          <a key={title} href={`/solutions/#${slugify(title)}`} className={segLink} aria-label={title}>
            <path d={segment(CORE, CAP_OUT, a1, a2)} fill="url(#sm-cap)" stroke="#010b33" strokeWidth="3" className={capFill} />
            <text x={f(tx)} y={f(ty)} textAnchor="middle" fontSize="20" fontWeight="600" fill="#fff" pointerEvents="none">
              <tspan x={f(tx)} dy="-5">{l1}</tspan>
              <tspan x={f(tx)} dy="24">{l2}</tspan>
            </text>
          </a>
        );
      })}

      {/* Core */}
      <a href="/solutions/" className={segLink} aria-label="Cybersecurity Solutions">
        <path d={segment(0.01, CORE, 180, 0)} fill="url(#sm-core)" stroke="#010b33" strokeWidth="4" className="transition-opacity duration-200 group-hover:opacity-90" />
        {/* SECORVIX logo mark, same artwork as the navbar logo (64-unit grid scaled to 52) */}
        <g transform={`translate(${CX - 26} ${CY - 122}) scale(${52 / 64})`} pointerEvents="none">
          <rect width="64" height="64" rx="14" fill="#021861" />
          <path d="M32 9 50 15v14c0 12-7.6 21.4-18 25-10.4-3.6-18-13-18-25V15z" fill="none" stroke="#9292F0" strokeWidth="3.5" strokeLinejoin="round" />
          <path d="M38.5 24.5c-1.6-2-4-3-6.7-3-3.6 0-6.3 2-6.3 4.9 0 6.6 13.2 3.7 13.2 10.6 0 3-2.9 5.2-6.9 5.2-3 0-5.6-1.2-7.3-3.4" fill="none" stroke="#fff" strokeWidth="3.5" strokeLinecap="round" />
          <circle cx="45" cy="45" r="4" fill="#DE1110" />
        </g>
        <text x={CX} y={CY - 40} textAnchor="middle" fontSize="22" fontWeight="700" letterSpacing="2" fill="#010b33" pointerEvents="none">
          <tspan x={CX}>CYBERSECURITY</tspan>
          <tspan x={CX} dy="27">SOLUTIONS</tspan>
        </text>
      </a>

      {/* Base bar */}
      <rect x="20" y={CY} width="960" height="70" rx="14" fill="#ffffff" />
      <rect x="20" y={CY} width="960" height="3" fill="#DE1110" />
      <text x={CX} y={CY + 43} textAnchor="middle" fontSize="18" fontWeight="700" letterSpacing="1" fill="#021861">
        Security · Orchestration · Resilience · Visibility · Intelligence · eXecution
      </text>
    </svg>
  );
}
