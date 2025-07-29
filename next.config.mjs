/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "www.zarla.com",
      },
      {
        protocol: "https",
        hostname: "www.instagram.com",
      },
    ],
  },
};

export default nextConfig;
