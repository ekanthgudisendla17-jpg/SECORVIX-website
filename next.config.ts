import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  images: { unoptimized: true },

  // Pages are prerendered, and Next.js marks them with `s-maxage=31536000`
  // (one year). GoDaddy's cache then kept serving old copies of inner pages
  // after a new version was published. Tell browsers and the hosting cache to
  // re-check every page with the server before reusing it. Hashed build files
  // under /_next/static keep their long cache, which Next.js manages itself.
  async headers() {
    return [
      {
        source: "/((?!_next/static|_next/image).*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=0, s-maxage=0, must-revalidate" }],
      },
    ];
  },
};

export default nextConfig;
