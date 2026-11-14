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
    tags: ["AI", "Generative AI", "Web Development", "MERN Stack", "Ethical Hacking", "Digital Marketing"],
    description: "CODELOGIX Solutions is a Pakistan-based EdTech and digital services company. Based in Rawalpindi, it focuses on making practical, career-ready technology education affordable and accessible.",
    website: "https://codelogixsolutions.vercel.app/",
  },

  {
    id: "datacamp-donates",
    name: "DataCamp Donates",
    partnershipLevel: "Gold Partner",
    category: "Technology Partner",
    logo: "/images/partners/datacampdonates/logo.png",
    tags: ["AI", "Generative AI", "SQL", "ML", "Python", "Data Science"],
    description: "DataCamp Donates is a global initiative that provides free access to DataCamp's learning platform for individuals and organizations in need. It aims to empower learners with data skills and promote data literacy worldwide.",
    website: "https://app.datacamp.com/",
  },


];
