import type { NextConfig } from "next";

// The old multi-page routes now live as sections on the single home page.
const sectionRedirects = [
  ["/about", "/#about"],
  ["/work", "/#experience"],
  ["/leadership", "/#leadership"],
  ["/beyond", "/#beyond"],
];

const nextConfig: NextConfig = {
  images: {
    // 90 is used for the award photos, which are already JPEG-compressed at the source.
    qualities: [75, 90],
  },
  async redirects() {
    return sectionRedirects.map(([source, destination]) => ({
      source,
      destination,
      permanent: false,
    }));
  },
};

export default nextConfig;
