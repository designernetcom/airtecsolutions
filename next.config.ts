import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
      { protocol: "https", hostname: "www.alfalaval.rs", pathname: "/**" },
      { protocol: "https", hostname: "cdn.expresshealthcare.in", pathname: "/**" },
      { protocol: "https", hostname: "encrypted-tbn0.gstatic.com", pathname: "/**" },
      { protocol: "https", hostname: "heisenbergindia.com", pathname: "/**" },
    ],
  },
};

export default nextConfig;
