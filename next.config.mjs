/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: process.env.IGNORE_TYPECHECK === 'true',
  },
};

export default nextConfig;
