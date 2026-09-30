import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { TeamCard } from "@/components/TeamCard";
import { coreLeads, leadMember, viceLeadMember } from "@/data/team";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Core Team — AWS Student Builder Group NUML Rawalpindi",
  description:
    "Meet the core team of AWS Student Builder Group at NUML Rawalpindi, including the President, Vice President, and function leads.",
  path: "/core-team",
});

export default function CoreTeamPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <SectionHeading
          eyebrow="People"
          title="Core Team"
          description="Student leaders who organize community programs, events, partnerships, and campus outreach."
        />
      </Reveal>
      {leadMember ? (
        <section className="mt-12">
          <h3 className="mb-5 text-center text-sm font-semibold uppercase tracking-[0.16em] text-brand">
            Leadership
          </h3>
          <div className="mx-auto max-w-md">
            <TeamCard member={leadMember} />
          </div>
        </section>
      ) : null}
      {viceLeadMember ? (
        <section className="mt-10">
          <div className="mx-auto max-w-md">
            <TeamCard member={viceLeadMember} />
          </div>
        </section>
      ) : null}
      <section className="mt-14">
        <h3 className="mb-6 text-center text-sm font-semibold uppercase tracking-[0.16em] text-brand">
          Core Team Leads
        </h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreLeads.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </section>
    </div>
  );
}
