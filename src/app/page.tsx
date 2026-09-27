import { ButtonLink } from "@/components/ButtonLink";
import { ContactForm } from "@/components/ContactForm";
import { EmptyEvents } from "@/components/EmptyEvents";
import { EventCard } from "@/components/EventCard";
import { Hero } from "@/components/Hero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TeamCard } from "@/components/TeamCard";
import { events } from "@/data/events";
import { siteConfig } from "@/data/site";
import { leadMember, viceLeadMember } from "@/data/team";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: "/",
});

const highlights = [
  {
    icon: "bi-cloud",
    title: "Cloud first",
    text: "Learn AWS fundamentals and practical cloud skills with a student-first approach.",
  },
  {
    icon: "bi-people",
    title: "Community driven",
    text: "Peer learning, mentoring, and collaboration across NUML Rawalpindi.",
  },
  {
    icon: "bi-lightning",
    title: "Hands-on building",
    text: "Workshops, projects, and events designed around doing — not just watching.",
  },
  {
    icon: "bi-briefcase",
    title: "Career ready",
    text: "Build confidence, portfolios, and professional networks for technology careers.",
  },
];

const activities = [
  {
    icon: "bi-tools",
    title: "Workshops & labs",
    text: "Guided sessions on AWS and cloud architecture basics.",
  },
  {
    icon: "bi-broadcast",
    title: "Talks & webinars",
    text: "Community sessions with practitioners, alumni, and student builders.",
  },
  {
    icon: "bi-code-slash",
    title: "Hackathons",
    text: "Time-boxed challenges that turn ideas into working prototypes.",
  },
  {
    icon: "bi-diagram-3",
    title: "Outreach",
    text: "Partnerships and campus activities that grow the tech community.",
  },
];

export default function HomePage() {
  const previewEvents = events.slice(0, 3);

  return (
    <>
      <Hero />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="A campus community for builders"
            description="AWS Student Builder Group at NUML Rawalpindi helps students learn cloud computing, ship projects, and grow as a professional technology community."
          />
        </Reveal>
        <Reveal className="mx-auto mt-8 max-w-3xl text-center text-muted leading-7">
          <p>
            We exist so students can learn together, practice real skills, and stay connected to the
            AWS ecosystem. Whether you are just starting or already building, there is a place for
            you here.
          </p>
        </Reveal>
      </section>
      <section className="border-y border-line bg-transparent">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Reveal>
            <SectionHeading eyebrow="Highlights" title="What this community stands for" />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item, index) => (
              <Reveal key={item.title} delay={index * 60}>
                <article className="surface-card h-full rounded-2xl p-5 transition duration-200 hover:-translate-y-1">
                  <i className={`bi ${item.icon} text-2xl text-brand`} aria-hidden="true" />
                  <h3 className="mt-3 text-lg font-semibold text-brand-deep">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="What we do"
            title="Learning that stays practical"
            description="From workshops to community meetups, every activity is designed to help students build skills they can use."
          />
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {activities.map((item, index) => (
            <Reveal key={item.title} className="h-full" delay={index * 50}>
              <article className="surface-card flex h-full gap-4 rounded-2xl p-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-soft text-brand">
                  <i className={`bi ${item.icon} text-xl`} aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-deep">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-muted">{item.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="border-y border-line bg-transparent">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <Reveal>
            <SectionHeading
              eyebrow="Core Team"
              title="Student leaders behind the community"
              description="Meet the leads who organize events, outreach, and campus collaboration."
            />
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {leadMember ? <TeamCard member={leadMember} /> : null}
            {viceLeadMember ? <TeamCard member={viceLeadMember} /> : null}
          </div>
          <div className="mt-8 text-center">
            <ButtonLink href="/core-team" variant="secondary">
              View Core Team
            </ButtonLink>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Events"
            title="Workshops, meetups, and more"
            description="See what the community is hosting and catch recaps from past activities."
          />
        </Reveal>
        <div className="mt-10">
          {previewEvents.length === 0 ? (
            <EmptyEvents compact />
          ) : (
            <div className="grid gap-6 md:grid-cols-3">
              {previewEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </div>
        <div className="mt-8 text-center">
          <ButtonLink href="/events" variant="secondary">
            Browse Events
          </ButtonLink>
        </div>
      </section>
      <section className="border-y border-line bg-[#071b10]/65">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6">
          <h2 className="text-3xl font-semibold text-white">Ready to build with us?</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/85">
            Join the AWS Student Builder Group at NUML Rawalpindi and take part in workshops,
            community sessions, and student-led projects.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <ButtonLink href="/contact" variant="inverted">
              Contact Us
            </ButtonLink>
            <ButtonLink href={siteConfig.social.whatsappCommunity} variant="ghost" external className="text-white hover:bg-white/10">
              WhatsApp Community
            </ButtonLink>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading
              align="left"
              eyebrow="Contact"
              title="Let’s talk"
              description="Questions about joining, collaborating, or hosting an activity? Send a message and the team will respond by email."
            />
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
