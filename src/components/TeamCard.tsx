import { SafeImage } from "@/components/SafeImage";
import type { TeamMember } from "@/data/team";

export function TeamCard({ member }: { member: TeamMember }) {
  const isLead = member.prominence === "lead";
  const isVice = member.prominence === "vice";
  const isLeadership = isLead || isVice;

  return (
    <article
      className={`surface-card group rounded-2xl p-5 transition duration-200 hover:-translate-y-1 ${
        isLead
          ? "border-brand shadow-[0_0_0_1px_rgb(20_122_68_/_0.35),0_16px_40px_rgb(20_122_68_/_0.16)] md:p-7"
          : isVice
            ? "shadow-[0_0_0_1px_rgb(20_122_68_/_0.18),0_12px_28px_rgb(20_122_68_/_0.08)] md:p-7"
            : "hover:shadow-[0_0_0_1px_rgb(20_122_68_/_0.16),0_14px_30px_rgb(20_122_68_/_0.08)]"
      }`}
    >
      <div
        className={`relative mx-auto overflow-hidden rounded-2xl bg-brand-soft ${
          isLeadership ? "aspect-square w-full max-w-72" : "aspect-square w-full max-w-56"
        }`}
      >
        <SafeImage
          src={member.image}
          alt={`Portrait of ${member.name}`}
          variant="person"
          sizes="(max-width: 768px) 80vw, 280px"
        />
      </div>
      <div className="mt-5 text-center">
        <p className="inline-flex rounded-full bg-brand-soft px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-dark">
          {isLead ? "Lead / President" : member.role}
        </p>
        <h3 className={`mt-3 font-semibold text-brand-deep ${isLead ? "text-2xl" : "text-lg"}`}>
          {member.name}
        </h3>
        {isLeadership ? <p className="mt-1 text-sm text-muted">{member.role}</p> : null}
        <div className="mt-4 flex items-center justify-center gap-3">
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-brand transition hover:border-brand hover:bg-brand hover:text-white"
            aria-label={`${member.name} on LinkedIn`}
          >
            <i className="bi bi-linkedin" aria-hidden="true" />
          </a>
          <a
            href={`mailto:${member.email}`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-brand transition hover:border-brand hover:bg-brand hover:text-white"
            aria-label={`Email ${member.name}`}
          >
            <i className="bi bi-envelope" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}
