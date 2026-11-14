export type PartnerItem = {
  id: string;
  name: string;
  partnershipLevel: string;
  logo: string | null;
  tags: string[];
  description: string;
  website?: string;
};

export const partners: PartnerItem[] = [

{
    id: "codelogix-solutions",
    name: "CODELOGIX Solutions",
    partnershipLevel: "Silver Partner",
    logo: "/images/partners/codelogixsolutions/logo.png",
    tags: ["Generative AI", "Web Development"],
    description: "CODELOGIX Solutions is a Pakistan-based EdTech company.",
    website: "https://codelogixsolutions.vercel.app/",
  },

  {
    id: "datacamp-donates",
    name: "DataCamp Donates",
    partnershipLevel: "Gold Partner",
    logo: "/images/partners/datacampdonates/logo.png",
    tags: ["Python", "Data Science"],
    description: "DataCamp Donates is a New York based company",
    website: "https://app.datacamp.com/",
  },


];
