/*
  Add partner records here when collaborations are confirmed.

  {
    id: "partner-1",
    name: "Partner name",
    category: "Community Partner",
    logo: "/images/partners/partner-name/logo.png",
    tags: ["AWS", "Technology"],
    description: "A short description of the partnership.",
    website: "https://example.com",
  },
*/

export type PartnerItem = {
  id: string;
  name: string;
  category: string;
  logo: string | null;
  tags: string[];
  description: string;
  website?: string;
};

export const partners: PartnerItem[] = [];
