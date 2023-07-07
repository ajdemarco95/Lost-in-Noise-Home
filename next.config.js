/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.posh.vip",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
