import { EventGallery } from "@/components/EventGallery";
import { events, getEventBySlug } from "@/data/events";
import { createMetadata } from "@/lib/seo";
import { SafeImage } from "@/components/SafeImage";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type EventPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: EventPageProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) {
    return createMetadata({
      title: "Event Not Found",
      description: "This event could not be found.",
      path: `/events/${slug}`,
      noIndex: true,
    });
  }
  return createMetadata({
    title: `${event.title} — AWS Student Builder Group NUML Rawalpindi`,
    description: event.shortDescription,
    path: `/events/${event.slug}`,
  });
}

export default async function EventDetailPage({ params }: EventPageProps) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  return (
    <article className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <header>
        <div className="relative aspect-[16/8] overflow-hidden rounded-3xl border border-line bg-brand-soft">
          <SafeImage
            src={event.poster}
            alt={`${event.title} poster`}
            priority
            sizes="100vw"
          />
        </div>
        <p className="mt-6 text-xs font-semibold uppercase tracking-[0.16em] text-brand">
          {event.type}
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-brand-deep">{event.title}</h1>
        <div className="mt-4 flex flex-wrap gap-2">
          {event.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-line px-3 py-1 text-xs text-muted">
              {tag}
            </span>
          ))}
        </div>
      </header>
      <section className="mt-10 space-y-4 text-base leading-7 text-muted">
        <h2 className="text-2xl font-semibold text-brand-deep">Event information</h2>
        <p>{event.description}</p>
        {event.details ? <p>{event.details}</p> : null}
        {event.activities && event.activities.length > 0 ? (
          <div>
            <h3 className="text-lg font-semibold text-brand-deep">Key activities</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {event.activities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}
        {event.speakers && event.speakers.length > 0 ? (
          <div>
            <h3 className="text-lg font-semibold text-brand-deep">Speakers and guests</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {event.speakers.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}
        {event.outcomes && event.outcomes.length > 0 ? (
          <div>
            <h3 className="text-lg font-semibold text-brand-deep">Outcomes</h3>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              {event.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ) : null}
      </section>
      <section className="mt-12">
        <h2 className="mb-5 text-2xl font-semibold text-brand-deep">Gallery</h2>
        <EventGallery images={event.images} title={event.title} />
      </section>
    </article>
  );
}
