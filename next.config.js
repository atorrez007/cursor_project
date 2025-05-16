/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  async redirects() {
    return [];
  },
  async rewrites() {
    return [];
  },
  // Add trailing slashes to URLs
  trailingSlash: true,
  // Ensure proper asset prefix in production
  assetPrefix: process.env.NODE_ENV === "production" ? undefined : undefined,
  // Enable strict mode
  reactStrictMode: true,
};

module.exports = nextConfig;
