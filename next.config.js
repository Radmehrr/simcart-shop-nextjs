/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["simcart.iran.liara.run"],
  },
};

module.exports = nextConfig;
