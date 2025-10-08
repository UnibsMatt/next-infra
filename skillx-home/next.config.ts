import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ hostname: "placehold.co" }],
  },
  output: "standalone",
  /* config options here */
};
export default nextConfig;
