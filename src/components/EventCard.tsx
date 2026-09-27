import { SafeImage } from "@/components/SafeImage";
import { ButtonLink } from "@/components/ButtonLink";
import type { EventItem } from "@/data/events";

export function EventCard({ event }: { event: EventItem }) {
  return (
    <article className="surface-card group flex h-full flex-col overflow-hidden rounded-2xl transition duration-200 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgb(20_122_68_/_0.1)]">
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-brand-soft">
        <SafeImage
          src={event.poster}
          alt={`${event.title} poster`}
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full bg-brand-soft px-2.5 py-1 text-xs font-semibold text-brand-dark">
            {event.type}
          </span>
          {event.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-line px-2.5 py-1 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="mt-3 text-xl font-semibold text-brand-deep">{event.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-muted">{event.shortDescription}</p>
        <div className="mt-5">
          <ButtonLink href={`/events/${event.slug}`} variant="secondary" className="w-full sm:w-auto">
            Read More
            <i className="bi bi-arrow-right" aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}
