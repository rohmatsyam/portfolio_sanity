/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  assetPrefix: isProd
    ? "https://portfolio-rohmat.vercel.app"
    : "http://localhost:3000",
};

module.exports = nextConfig;
