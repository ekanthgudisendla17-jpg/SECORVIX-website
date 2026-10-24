import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { siteUrl } from "./lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const description =
  "SECORVIX delivers cybersecurity, security integration, managed security, AI-driven cyber intelligence and cyber resilience solutions for modern enterprises.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SECORVIX | Cybersecurity, Integration & AI",
    template: "%s | SECORVIX",
  },
  description,
  openGraph: {
    type: "website",
    siteName: "SECORVIX",
    title: "SECORVIX | Cybersecurity, Integration & AI",
    description,
    url: siteUrl,
    images: [{ url: "/images/hero-home.webp", width: 1920, height: 1080 }],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}
