export type TeamMember = {
  id: string;
  name: string;
  role: string;
  image: string | null;
  linkedin: string;
  email: string;
  prominence: "lead" | "vice" | "core";
};

export const teamMembers: TeamMember[] = [
  {
    id: "lead",
    name: "MUHAMMAD SUFYAN JURA",
    role: "President",
    image: "/images/team/LEAd.jpg",
    linkedin: "https://www.linkedin.com/in/muhammadsufyanjura47/",
    email: "mailto:sufyanfaizan47@gmail.com",
    prominence: "lead",
  },
  {
    id: "vice-lead",
    name: "BEHROZ ABBAS KHAN",
    role: "Vice President",
    image: "/images/team/vice-lead.jpg",
    linkedin: "https://www.instagram.com/behrozspamz_",
    email: "mailto:behrozabbaskhan@gmail.com",
    prominence: "vice",
  },
  {
    id: "marketing-lead",
    name: "ABDUL REHMAN",
    role: "Marketing & Growth Lead",
    image: "/images/team/marketing-lead.jpg",
    linkedin: "https://linkedin.com/in/your-profile",
    email: "mailto:ar0574200@gmail.com",
    prominence: "core",
  },
  {
    id: "creative-lead",
    name: "CHAUDHARY ASHAR NAWAZ",
    role: "Creative & Media Lead",
    image: "/images/team/creative-lead1.jpg",
    linkedin: "https://www.linkedin.com/in/%DA%86%D9%88%DB%81%D8%AF%D8%B1%DB%8C-%D8%B9%D8%A7%D8%B4%D8%B1-%D9%86%D9%88%D8%A7%D8%B2-%D9%86%D9%88%D8%A7%D8%B2-1983b53b5/",
    email: "nawazashar803@gmail.com",
    prominence: "core",
  },
  {
    id: "outreach-lead",
    name: "MUHAMMAD SAAD",
    role: "Outreach & Partnerships Lead",
    image: "/images/team/outreach-lead1.jpg",
    linkedin: "https://www.instagram.com/m_saad377/",
    email: "mailto:msaad2007@gmail.com",
    prominence: "core",
  },
  {
    id: "community-lead",
    name: "SANA SALEEM",
    role: "Community & Events Lead",
    image: "/images/team/community-lead.jpg",
    linkedin: "https://linkedin.com/in/your-profile",
    email: "sanasaleem1457@gmail.com",
    prominence: "core",
  },
];

export const leadMember = teamMembers.find((member) => member.prominence === "lead");
export const viceLeadMember = teamMembers.find((member) => member.prominence === "vice");
export const coreLeads = teamMembers.filter((member) => member.prominence === "core");
