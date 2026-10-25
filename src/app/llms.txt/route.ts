import { capabilities, industries } from "../lib/content";
import { getPosts } from "../lib/posts";
import { siteUrl } from "../lib/site";

// /llms.txt — a plain-Markdown site summary for AI assistants (https://llmstxt.org).
// Regenerated on every build, so new blog posts are listed automatically.
export const dynamic = "force-static";

const pages = [
  ["About SECORVIX", "/about/", "Who we are, our six principles (Security, Orchestration, Resilience, Visibility, Intelligence, eXecution), approach, vision and mission."],
  ["Cybersecurity Solutions", "/solutions/", "Network, cloud, identity & access, endpoint, data & application security, security operations and Zero Trust."],
  ["Security Integration", "/security-integration/", "Vendor-neutral security architecture, technology integration, migration, consolidation, deployment, optimization and automation."],
  ["Managed Security", "/managed-security/", "SOC, SIEM, threat detection, threat hunting, incident response, MDR, security automation and security analytics."],
  ["AI & Cyber Intelligence", "/ai-cyber-intelligence/", "AI-assisted detection, intelligent analysis and automated response that augment human security expertise."],
  ["Cyber Resilience", "/cyber-resilience/", "Risk and posture assessment, vulnerability management, incident response planning, cyber recovery and security validation."],
  ["Industries", "/industries/", "Security tailored to banking, government, manufacturing, healthcare, technology, education and critical infrastructure."],
  ["Contact", "/contact/", "Enquiry form for security architecture, integration, managed security and resilience projects."],
];

export async function GET() {
  const posts = await getPosts();
  const link = (title: string, path: string, note: string) => `- [${title}](${siteUrl}${path}): ${note}`;

  const body = [
    "# SECORVIX",
    "",
    "> SECORVIX is a cybersecurity, system integration and AI company. It helps enterprises secure, connect and continuously protect their digital environments through security architecture, vendor-neutral integration, managed security services, AI-driven cyber intelligence and cyber resilience.",
    "",
    "SECORVIX positions itself as an integration and transformation partner rather than a single-product vendor: it selects and integrates the technologies best aligned to each customer's objectives, and combines experienced security professionals with automation, analytics and AI. Contact: contact@secorvix-ai.com.",
    "",
    "## Services",
    "",
    ...pages.map(([title, path, note]) => link(title, path, note)),
    "",
    "## Capabilities",
    "",
    ...capabilities.map((c) => `- ${c.title}: ${c.text}`),
    "",
    "## Industries served",
    "",
    ...industries.map((i) => `- ${i.title}: ${i.description}`),
    "",
    "## Blog",
    "",
    link("SECORVIX Blog", "/blog/", "Articles on security integration, AI in security operations, Zero Trust and cyber resilience."),
    ...posts.map((p) => link(p.title, `/blog/${p.slug}/`, p.summary)),
    "",
    "## Optional",
    "",
    link("Sitemap", "/sitemap.xml", "Every public page on the site."),
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
