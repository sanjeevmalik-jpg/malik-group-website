import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    return [
      {
        source: "/google-review",
        destination: "/reviews",
        permanent: true,
      },
      {
        source: "/zillow-review",
        destination: "https://www.zillow.com/profile/SanjeevMalikTeam/",
        permanent: true,
      },
      {
        source: "/neighborhoods/:slug*",
        destination: "/communities",
        permanent: true,
      },
      {
        source: "/property-search",
        destination: "https://sanjeevmalik.exprealty.com/",
        permanent: true,
      },
      {
        source: "/service-areas",
        destination: "/communities",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
