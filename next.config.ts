import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages 部署：如果 repo 是 shs-00.github.io 则不需要 basePath
  // 如果 repo 是 Journal.github.io，需要 basePath: "/Journal.github.io"
  basePath: "/Journal.github.io",
  images: {
    unoptimized: true,  // GitHub Pages 不支持 Next.js 图片优化
  },
};

export default nextConfig;
