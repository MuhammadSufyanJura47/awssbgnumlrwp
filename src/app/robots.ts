import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/thank-you"],
    },
    sitemap: new URL("/sitemap.xml", siteConfig.siteUrl).toString(),
    host: siteConfig.siteUrl,
  };
}
