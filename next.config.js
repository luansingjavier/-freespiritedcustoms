/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standard configuration for Vercel
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
