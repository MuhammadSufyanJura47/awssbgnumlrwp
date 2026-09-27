import { EmptyEvents } from "@/components/EmptyEvents";
import { EventCard } from "@/components/EventCard";
import { SectionHeading } from "@/components/SectionHeading";
import { events } from "@/data/events";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Events — AWS Student Builder Group NUML Rawalpindi",
  description:
    "Workshops, webinars, hackathons, and community activities from AWS Student Builder Group at NUML Rawalpindi.",
  path: "/events",
});

export default function EventsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Calendar"
        title="Events"
        description="Explore upcoming and past community activities. New events can be added from the events data file without changing the layout."
      />
      <div className="mt-12">
        {events.length === 0 ? (
          <EmptyEvents />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
