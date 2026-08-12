import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,  // GitHub Pages 不支持 Next.js 图片优化
  },
};

export default nextConfig;
