/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Matches all HTTPS domains
      },
      {
        protocol: 'http',
        hostname: '**', // Matches all HTTP domains
      },
    ],
  },
};

module.exports = nextConfig;
