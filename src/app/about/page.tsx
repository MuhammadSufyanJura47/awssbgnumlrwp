import { ButtonLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "About Us — AWS Student Builder Group NUML Rawalpindi",
  description:
    "Learn about AWS Student Builder Group at NUML Rawalpindi, our mission, community, and how students can participate.",
  path: "/about",
});

const points = [
  {
    title: "What we are",
    text: "AWS Student Builder Group is a student-led technology community. At NUML Rawalpindi, we bring learners together around cloud computing, software development, and professional growth.",
  },
  {
    title: "Purpose",
    text: "We help students move from curiosity to capability — with workshops, projects, and a supportive peer network that makes cloud skills approachable.",
  },
  {
    title: "Mission",
    text: "Build a trusted campus community where students learn AWS, collaborate on real work, and share knowledge with professionalism and inclusion.",
  },
  {
    title: "What students can learn",
    text: "Cloud fundamentals, practical AWS services, development workflows, event collaboration, communication, and the habits of shipping projects.",
  },
  {
    title: "How to participate",
    text: "Join events, volunteer on the core team, share a talk, or simply show up and learn. Contact us to get involved.",
  },
  {
    title: "Why NUML Rawalpindi",
    text: "This chapter exists so NUML Rawalpindi students have a local, high-quality space for cloud and technology community — close to campus, led by students, and open to builders at every level.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <Reveal>
        <SectionHeading
          eyebrow="About Us"
          title="A student community for cloud and collaboration"
          description="AWS Student Builder Group — NUML Rawalpindi Campus is built for students who want to learn, ship, and grow together."
        />
      </Reveal>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {points.map((point, index) => (
          <Reveal key={point.title} delay={index * 40}>
            <article className="surface-card h-full rounded-2xl p-6">
              <h2 className="text-xl font-semibold text-brand-deep">{point.title}</h2>
              <p className="mt-3 text-sm leading-7 text-muted">{point.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
      <div className="mt-12 text-center">
        <ButtonLink href="/contact">Get in touch</ButtonLink>
      </div>
    </div>
  );
}
