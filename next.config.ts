import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/l/:slug([a-z0-9]{6})",
          destination: "https://api.readlink.app/l/:slug",
        },
      ],
      afterFiles: [],
      fallback: [],
    };
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
