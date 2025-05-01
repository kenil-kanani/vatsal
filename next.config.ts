import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['placehold.co' , 'localhost' , "shreeji-cake.vercel.app"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
