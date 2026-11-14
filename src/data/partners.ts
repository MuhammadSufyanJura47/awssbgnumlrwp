export type PartnerItem = {
  id: string;
  name: string;
  partnershipLevel: string;
  category: string;
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
    category: "Technology Partner",
    logo: "/images/partners/codelogixsolutions/logo.png",
    tags: ["Generative AI", "Web Development"],
    description: "CODELOGIX Solutions is a Pakistan-based EdTech and digital services company.",
    website: "https://codelogixsolutions.vercel.app/",
  },

  {
    id: "datacamp-donates",
    name: "DataCamp Donates",
    partnershipLevel: "Gold Partner",
    category: "Technology Partner",
    logo: "/images/partners/datacampdonates/logo.png",
    tags: ["Python", "Data Science"],
    description: "DataCamp Donates is a global initiative that provides free access to DataCamp's learning platform for student clubs and non profit organizations.",
    website: "https://app.datacamp.com/",
  },


];
