/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
    serverComponentsExternalPackages: ["mongoose"],
  },
};

export default nextConfig;
