export const navigation = [
  { href: "/", label: "Home" },
  { href: "/core-team", label: "Core Team" },
  { href: "/events", label: "Events" },
  { href: "/partners", label: "Partners" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
] as const;

export const socialLinks = {
  meetup: "https://www.meetup.com/aws-sbg-at-natl-univ-of-modern-languages-rawalpindi-campus",
  instagram: "https://www.instagram.com/awssbgnumlrwp/",
  whatsappCommunity: "https://chat.whatsapp.com/KGfIVIFCMJLJAQlXx67vpH",
  linkedin: "https://www.linkedin.com/company/aws-student-builder-group-numl-rawalpindi",
  email: "mailto:awssbgnumlrwp@gmail.com",
  whatsapp: "https://wa.me/+923395858284",
} as const;

export const contactDetails = {
  email: "awssbgnumlrwp@gmail.com",
  whatsappDisplay: "+92 339 5858284",
} as const;

export const siteConfig = {
  name: "AWS Student Builder Group — NUML Rawalpindi",
  shortName: "AWS SBG NUML",
  organization: "AWS Student Builder Group",
  campus: "NUML Rawalpindi Campus",
  tagline: "Building. Learning. Innovating. Together.",
  description:
    "AWS Student Builder Group at NUML Rawalpindi is a student technology community focused on cloud computing, hands-on learning, and building together through workshops, events, and peer collaboration.",
  keywords: [
    "AWS Student Builder Group",
    "NUML Rawalpindi",
    "AWS",
    "cloud computing",
    "student community",
    "workshops",
    "hackathons",
  ],
  logo: "/images/logo/logo.svg",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://awssbgnumlrwp.vercel.app",
  social: socialLinks,
  contact: contactDetails,
  navigation,
} as const;

export type SocialKey = keyof typeof socialLinks;
