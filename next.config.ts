import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Optional: If you need to serve assets from a different path, e.g., CDN
  // assetPrefix: '/',
  // The user indicated a custom domain, so basePath is not required unless the custom domain is for a project page, not a user/org page.
  // If a custom domain maps to a specific repository in the format username.github.io/repository-name, then basePath: '/repository-name/' would be needed.
  // For now, assuming the custom domain points directly to the root of the deployed content, so no basePath.
};

export default nextConfig;
