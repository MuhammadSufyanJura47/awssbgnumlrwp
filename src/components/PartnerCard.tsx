import { ButtonLink } from "@/components/ButtonLink";
import { SafeImage } from "@/components/SafeImage";
import type { PartnerItem } from "@/data/partners";

export function PartnerCard({ partner }: { partner: PartnerItem }) {
  return (
    <article className="surface-card group flex h-full flex-col overflow-hidden rounded-2xl transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgb(88_217_138_/_0.12)]">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-soft">
        <SafeImage
          src={partner.logo}
          alt={`${partner.name} logo`}
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-contain p-10"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-brand-soft px-2.5 py-1 text-xs font-semibold text-brand-dark">
            {partner.category}
          </span>
          {partner.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-line px-2.5 py-1 text-xs text-muted">
              {tag}
            </span>
          ))}
        </div>
        <h2 className="mt-3 text-xl font-semibold text-brand-deep">{partner.name}</h2>
        <p className="mt-2 flex-1 text-sm leading-6 text-muted">{partner.description}</p>
        {partner.website ? (
          <div className="mt-5">
            <ButtonLink href={partner.website} variant="secondary" external className="w-full sm:w-auto">
              Visit Website
              <i className="bi bi-arrow-up-right" aria-hidden="true" />
            </ButtonLink>
          </div>
        ) : null}
      </div>
    </article>
  );
}
