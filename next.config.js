/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true, 
  swcMinify: true,
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ["blue-late-parrotfish-488.mypinata.cloud"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'blue-late-parrotfish-488.mypinata.cloud',
        port: '',
        pathname: '/ipfs/**',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_SERVICE_ID: process.env.NEXT_PUBLIC_SERVICE_ID,
    NEXT_PUBLIC_TEMPLATE_ID: process.env.NEXT_PUBLIC_TEMPLATE_ID,
    NEXT_PUBLIC_USER_ID: process.env.NEXT_PUBLIC_USER_ID,
  },
};

module.exports = nextConfig;