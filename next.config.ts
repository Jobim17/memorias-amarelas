import type { NextConfig } from "next";

// Site estático hospedado no GitHub Pages em https://jobim17.github.io/memorias-amarelas/
const repo = "memorias-amarelas";
const isPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isPages ? `/${repo}` : "",
  assetPrefix: isPages ? `/${repo}/` : undefined,
  images: { unoptimized: true },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
