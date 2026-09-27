import { siteConfig } from "@/data/site";
import type { Metadata } from "next";

const titleTemplate = `%s — ${siteConfig.shortName}`;

export function createMetadata({
  title,
  description,
  path = "/",
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  noIndex?: boolean;
}): Metadata {
  const url = new URL(path, siteConfig.siteUrl).toString();
  const absoluteTitle = title.includes(siteConfig.shortName)
    ? title
    : titleTemplate.replace("%s", title);

  return {
    title: { absolute: title },
    description,
    keywords: [...siteConfig.keywords],
    authors: [{ name: siteConfig.organization }],
    creator: siteConfig.organization,
    publisher: siteConfig.organization,
    alternates: { canonical: url },
    openGraph: {
      title: absoluteTitle,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
      locale: "en_US",
      images: [
        {
          url: siteConfig.logo,
          alt: `${siteConfig.organization} logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: absoluteTitle,
      description,
      images: [siteConfig.logo],
    },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
  };
}
