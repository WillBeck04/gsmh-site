import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
  images: { formats: ["image/webp"], deviceSizes: [640, 768, 1024, 1280, 1536, 1920, 2560] },
  async rewrites() {
    return [
      { source: "/test:n(\\d)", destination: "/design/:n" },
      { source: "/design:n(\\d)", destination: "/design/:n" },
      { source: "/test", destination: "/design" },
      { source: "/", destination: "/design" },
    ];
  },
};

export default nextConfig;
