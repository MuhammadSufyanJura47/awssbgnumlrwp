import { ButtonLink } from "@/components/ButtonLink";

export default function EventNotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">404</p>
      <h1 className="mt-3 text-3xl font-semibold text-brand-deep">Event Not Found</h1>
      <p className="mt-3 text-muted">
        This event does not exist or may have been removed. Browse the events page for current
        community activities.
      </p>
      <div className="mt-8 flex justify-center">
        <ButtonLink href="/events">Back to Events</ButtonLink>
      </div>
    </div>
  );
}
