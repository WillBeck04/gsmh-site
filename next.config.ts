import type { NextConfig } from "next";

// Redirects from the old Squarespace site live in lib/redirects.ts and are applied by proxy.ts.

const nextConfig: NextConfig = {
  trailingSlash: false,
  // proxy.ts handles trailing slashes so that old URLs redirect in a single hop
  skipTrailingSlashRedirect: true,
  images: { formats: ["image/webp"], deviceSizes: [640, 768, 1024, 1280, 1536, 1920, 2560] },
  async redirects() {
    return [
      // French is the default language
      { source: "/", destination: "/fr", permanent: false },
    ];
  },
};

export default nextConfig;
