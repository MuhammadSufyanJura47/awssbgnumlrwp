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
    role: "Lead",
    image: "/images/team/LEAd.jpg",
    linkedin: "https://www.linkedin.com/in/muhammadsufyanjura47/",
    email: "mailto:sufyanfaizan47@gmail.com",
    prominence: "lead",
  },
  {
    id: "vice-lead",
    name: "BEHROZ ABBAS KHAN",
    role: "Vice Lead",
    image: "/images/team/vice-lead.jpg",
    linkedin: "https://www.instagram.com/behrozspamz_",
    email: "mailto:behrozabbaskhan@gmail.com",
    prominence: "vice",
  },
  {
    id: "marketing-lead",
    name: "Your Name",
    role: "Marketing & Growth Lead",
    image: "/images/team/marketing-lead.jpg",
    linkedin: "https://linkedin.com/in/your-profile",
    email: "your.email@example.com",
    prominence: "core",
  },
  {
    id: "creative-lead",
    name: "Your Name",
    role: "Creative & Media Lead",
    image: "/images/team/creative-lead.jpg",
    linkedin: "https://linkedin.com/in/your-profile",
    email: "your.email@example.com",
    prominence: "core",
  },
  {
    id: "outreach-lead",
    name: "Your Name",
    role: "Outreach & Partnerships Lead",
    image: "/images/team/outreach-lead.jpg",
    linkedin: "https://linkedin.com/in/your-profile",
    email: "your.email@example.com",
    prominence: "core",
  },
  {
    id: "community-lead",
    name: "Your Name",
    role: "Community & Events Lead",
    image: "/images/team/community-lead.jpg",
    linkedin: "https://linkedin.com/in/your-profile",
    email: "your.email@example.com",
    prominence: "core",
  },
];

export const leadMember = teamMembers.find((member) => member.prominence === "lead");
export const viceLeadMember = teamMembers.find((member) => member.prominence === "vice");
export const coreLeads = teamMembers.filter((member) => member.prominence === "core");
