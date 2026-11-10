export const siteUrl = "https://secorvix-ai.com";

// Company contact details shown in the footer and on the Contact page.
// To show a phone number, fill in `phone` (e.g. "+91 98765 43210"); leave it empty to hide it.
export const contact = {
  email: "contact@secorvix-ai.com",
  phone: "",
};

export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, "")}`;

export const solutions = [
  { href: "/ai-cyber-intelligence/", label: "AI & Cyber Intelligence" },
  { href: "/solutions/", label: "Cybersecurity Solutions" },
  { href: "/security-integration/", label: "Security Integration" },
  { href: "/managed-security/", label: "Managed Security" },
  { href: "/cyber-resilience/", label: "Cyber Resilience" },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/industries/", label: "Industries" },
  { href: "/blog/", label: "Blog" },
  { href: "/contact/", label: "Contact" },
];

// Update these with the official SECORVIX profile URLs.
export const socialLinks = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/secorvix-ai/" },
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
