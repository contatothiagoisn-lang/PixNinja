/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,  // ← Ignora ESLint no build
  },
  typescript: {
    ignoreBuildErrors: true,  // ← Ignora TS no build
  },
  experimental: {
    esmExternals: 'loose',
  },
};

module.exports = nextConfig;
