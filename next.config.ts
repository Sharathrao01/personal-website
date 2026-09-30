import type { NextConfig } from "next";

// The old multi-page routes now live as sections on the single home page.
const sectionRedirects = [
  ["/about", "/#about"],
  ["/work", "/#experience"],
  ["/leadership", "/#leadership"],
  ["/beyond", "/#beyond"],
];

const nextConfig: NextConfig = {
  async redirects() {
    return sectionRedirects.map(([source, destination]) => ({
      source,
      destination,
      permanent: false,
    }));
  },
};

export default nextConfig;
