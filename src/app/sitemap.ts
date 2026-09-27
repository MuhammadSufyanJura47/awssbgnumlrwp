import type { MetadataRoute } from "next";
import { events } from "@/data/events";
import { siteConfig } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = ["/", "/core-team", "/events", "/partners", "/about", "/contact"].map((path) => ({
    url: new URL(path, siteConfig.siteUrl).toString(),
    lastModified,
    changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
    priority: path === "/" ? 1 : 0.8,
  }));

  const eventRoutes = events.map((event) => ({
    url: new URL(`/events/${event.slug}`, siteConfig.siteUrl).toString(),
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...routes, ...eventRoutes];
}
