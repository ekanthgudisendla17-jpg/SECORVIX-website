export const siteUrl = "https://secorvix-ai.com";

export const solutions = [
  { href: "/solutions/", label: "Cybersecurity Solutions" },
  { href: "/security-integration/", label: "Security Integration" },
  { href: "/managed-security/", label: "Managed Security" },
  { href: "/ai-cyber-intelligence/", label: "AI & Cyber Intelligence" },
  { href: "/cyber-resilience/", label: "Cyber Resilience" },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/industries/", label: "Industries" },
  { href: "/blog/", label: "Insights" },
  { href: "/contact/", label: "Contact" },
];

// Update these with the official SECORVIX profile URLs.
export const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/secorvix" },
  { name: "Instagram", href: "https://www.instagram.com/secorvix" },
  { name: "Facebook", href: "https://www.facebook.com/secorvix" },
  { name: "YouTube", href: "https://www.youtube.com/@secorvix" },
] as const;

export type SocialName = (typeof socialLinks)[number]["name"];

// Static pages included in sitemap.xml (blog posts are added from posts.ts).
export const staticRoutes = [
  "/",
  "/about/",
  "/solutions/",
  "/security-integration/",
  "/managed-security/",
  "/ai-cyber-intelligence/",
  "/cyber-resilience/",
  "/industries/",
  "/blog/",
  "/contact/",
];
