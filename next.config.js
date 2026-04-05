/** @type {import('next').NextConfig} */
const nextConfig = {
  // Development origin allowlist for local multi-domain routing.
  allowedDevOrigins: [
    "http://localhost:3000",
    "http://wedding.flosmeeting.local:3000",
    "http://manager.flosmeeting.local:3000",
    "http://www.flosmeeting.local:3000",
  ],

  // Keep current build policy to avoid blocking existing CI pipeline.
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  // Disable image optimization for current deployment strategy.
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
