export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "quote"; text: string };

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string; // ISO yyyy-mm-dd
  readTime: string;
  image: string;
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "from-tool-sprawl-to-integrated-security",
    title: "From Tool Sprawl to an Integrated Security Architecture",
    excerpt:
      "Most enterprises do not lack security tools. They lack security tools that work together. Here is how to move from a fragmented stack to one connected architecture.",
    category: "Security Integration",
    date: "2026-10-22",
    readTime: "6 min read",
    image: "/images/blog-integration.webp",
    body: [
      {
        type: "p",
        text: "Over the last decade, most organizations have bought security the same way: one problem, one product. A firewall for the perimeter, an endpoint agent for laptops, a cloud posture tool for the new AWS account, an identity platform for single sign-on. Each purchase made sense on its own. Together, they often create a different problem — an environment where every tool has its own console, its own alerts and its own view of the truth.",
      },
      { type: "h2", text: "Why fragmentation is a security risk" },
      {
        type: "p",
        text: "Attackers do not respect product boundaries. A single intrusion might begin with a phished identity, move through an unmanaged endpoint and finish with data leaving a misconfigured cloud bucket. If each of those signals lives in a separate tool, the connection between them is left for an analyst to discover manually — usually too late.",
      },
      {
        type: "ul",
        items: [
          "Alerts are triaged in isolation, so related events are never correlated.",
          "Overlapping tools create duplicate cost without adding coverage.",
          "Gaps appear where no product clearly owns a control.",
          "Teams spend their time switching consoles rather than investigating.",
        ],
      },
      { type: "h2", text: "What an integrated architecture looks like" },
      {
        type: "p",
        text: "Integration is not about buying a single platform that does everything. It is about designing how identity, network, endpoint, cloud and data controls share context. In practice that means a common source of telemetry, agreed ownership for each control, and automation that lets one tool act on what another has seen.",
      },
      {
        type: "quote",
        text: "The goal is not fewer tools for its own sake. The goal is one coherent view of risk, and one coordinated response.",
      },
      { type: "h2", text: "A practical path forward" },
      {
        type: "ul",
        items: [
          "Discover: inventory every security technology, who owns it and what it actually covers.",
          "Assess: map coverage against your critical assets and identify overlaps and gaps.",
          "Design: define a target architecture and how data should flow between controls.",
          "Integrate and consolidate: connect what stays, retire what duplicates.",
          "Operate and optimize: measure detection and response outcomes, not tool counts.",
        ],
      },
      {
        type: "p",
        text: "A vendor-neutral approach matters here. The right answer depends on your existing investments, your regulatory obligations and your team's capacity — not on a single vendor's roadmap. Done well, integration reduces cost and complexity at the same time as it improves visibility.",
      },
    ],
  },
  {
    slug: "ai-in-the-soc-augmenting-human-analysts",
    title: "AI in the SOC: Augmenting Analysts, Not Replacing Them",
    excerpt:
      "AI can dramatically reduce the noise a security operations team deals with. But the best outcomes come when AI accelerates human judgement rather than trying to replace it.",
    category: "AI & Cyber Intelligence",
    date: "2026-10-14",
    readTime: "5 min read",
    image: "/images/blog-ai-soc.webp",
    body: [
      {
        type: "p",
        text: "Security operations centres face a volume problem. Modern environments generate enormous quantities of logs, alerts and threat intelligence, and the number of skilled analysts available to review them has not kept pace. AI is a natural answer — but how it is applied makes the difference between a faster SOC and a noisier one.",
      },
      { type: "h2", text: "Where AI adds real value" },
      {
        type: "ul",
        items: [
          "Detection: spotting anomalous behaviour across users, devices and workloads that static rules miss.",
          "Triage: grouping related alerts into a single incident and ranking them by likely impact.",
          "Enrichment: pulling in asset context, identity data and threat intelligence automatically.",
          "Summarisation: turning a long investigation trail into a clear narrative for responders and leadership.",
        ],
      },
      { type: "h2", text: "Why humans stay in the loop" },
      {
        type: "p",
        text: "Security decisions carry business consequences. Isolating a production server, disabling an executive's account or notifying a regulator are judgement calls that depend on context an AI model rarely has in full. Models can also be wrong with confidence, and adversaries actively look for ways to manipulate automated systems.",
      },
      {
        type: "quote",
        text: "Let AI do the reading, the correlating and the drafting. Let experienced people make the decisions that matter.",
      },
      { type: "h2", text: "Getting started responsibly" },
      {
        type: "ul",
        items: [
          "Start with well-understood, high-volume tasks such as alert enrichment and deduplication.",
          "Keep automated response actions reversible, and require approval for high-impact steps.",
          "Measure outcomes: mean time to detect, mean time to respond and analyst workload.",
          "Review model output regularly, and feed analyst corrections back into tuning.",
        ],
      },
      {
        type: "p",
        text: "Used this way, AI lets a security team spend less time on repetitive work and more time on threat hunting, investigation and improving defences — which is where human expertise is most valuable.",
      },
    ],
  },
  {
    slug: "cyber-resilience-planning-for-recovery",
    title: "Cyber Resilience Starts with Planning for Recovery",
    excerpt:
      "Prevention will never be perfect. Resilient organizations assume an incident will happen and prepare to withstand it, respond quickly and recover with confidence.",
    category: "Cyber Resilience",
    date: "2026-10-06",
    readTime: "6 min read",
    image: "/images/blog-resilience.webp",
    body: [
      {
        type: "p",
        text: "For years, security strategy focused almost entirely on keeping attackers out. That work remains essential, but it is no longer sufficient. Ransomware, supply-chain compromise and insider threats mean every organization should plan for the day a control fails. Cyber resilience is the ability to anticipate, withstand, respond to and recover from that day.",
      },
      { type: "h2", text: "The resilience lifecycle" },
      {
        type: "ul",
        items: [
          "Anticipate: understand your critical services, their dependencies and the threats most likely to affect them.",
          "Prevent: apply layered controls aligned to those risks.",
          "Detect: ensure you can see an incident early, across identity, endpoint, network, cloud and data.",
          "Respond: have a tested plan, clear roles and pre-agreed decision rights.",
          "Recover: restore services from trusted, isolated backups within agreed timeframes.",
          "Improve: feed every incident and exercise back into the programme.",
        ],
      },
      { type: "h2", text: "Recovery is where plans are proven" },
      {
        type: "p",
        text: "Many organizations discover during an incident that their backups were reachable by the attacker, that restoration takes far longer than expected, or that nobody is sure which systems to bring back first. These are planning problems, and they can be solved before a crisis.",
      },
      {
        type: "quote",
        text: "A backup you have never restored is a hope, not a recovery plan.",
      },
      { type: "h2", text: "Five questions to ask this quarter" },
      {
        type: "ul",
        items: [
          "Which business services matter most, and how long can each be unavailable?",
          "Are critical backups immutable or isolated from the production environment?",
          "When did we last perform a full restoration test, and how long did it take?",
          "Does our incident response plan include legal, communications and executive roles?",
          "Have we run a tabletop exercise against a realistic ransomware scenario?",
        ],
      },
      {
        type: "p",
        text: "Resilience is not a single project. It is an operating model that connects risk management, security controls, response planning and recovery — and keeps improving as the business and the threat landscape change.",
      },
    ],
  },
];

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
