/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  images: {
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
