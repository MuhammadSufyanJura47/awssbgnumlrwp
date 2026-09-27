import { siteConfig } from "@/data/site";

export function JsonLd() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteConfig.siteUrl}/#website`,
      name: siteConfig.name,
      url: siteConfig.siteUrl,
      description: siteConfig.description,
      publisher: { "@id": `${siteConfig.siteUrl}/#organization` },
    },
    {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.siteUrl}/#organization`,
    name: siteConfig.organization,
    alternateName: siteConfig.name,
    url: siteConfig.siteUrl,
    logo: new URL(siteConfig.logo, siteConfig.siteUrl).toString(),
    description: siteConfig.description,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Rawalpindi",
      addressRegion: "Punjab",
      addressCountry: "PK",
    },
    areaServed: {
      "@type": "Place",
      name: siteConfig.campus,
    },
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.instagram,
      siteConfig.social.meetup,
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: siteConfig.contact.email,
      availableLanguage: ["English", "Urdu"],
    },
    },
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
