import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  // Standalone mode automatically includes all production dependencies
  // No additional configuration needed for Next.js 16+
};

export default nextConfig;
