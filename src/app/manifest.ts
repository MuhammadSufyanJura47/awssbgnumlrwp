import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f6faf7",
    theme_color: "#147A44",
    icons: [
      {
        src: siteConfig.logo,
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
