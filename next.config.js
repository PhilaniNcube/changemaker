/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
   serverActions: true,
  },
  images: {
    domains: [
      "scontent-cpt1-1.cdninstagram.com",
      "res.cloudinary.com",
      "cdn.sanity.io",
    ],
  },
};

module.exports = nextConfig
