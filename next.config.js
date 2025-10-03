/** @type {import('next').NextConfig} */
const nextConfig = {
  // `output: 'export'` removed because Next.js API Routes (pages/api)
  // are not compatible with static HTML export. Keeping a server
  // build allows API routes to function during runtime.
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true, // Add trailing slashes to help with Netlify routing
  images: {
    unoptimized: true,
    domains: ["green-difficult-vulture-434.mypinata.cloud"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'green-difficult-vulture-434.mypinata.cloud',
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
