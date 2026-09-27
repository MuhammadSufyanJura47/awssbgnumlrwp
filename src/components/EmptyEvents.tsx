export function EmptyEvents({ compact = false }: { compact?: boolean }) {
  return (
    <div className="surface-card rounded-2xl px-6 py-12 text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-soft text-brand">
        <i className="bi bi-calendar-event text-2xl" aria-hidden="true" />
      </div>
      <h3 className="text-xl font-semibold text-brand-deep">No events yet.</h3>
      <p className={`mx-auto mt-2 text-muted ${compact ? "max-w-md text-sm" : "max-w-lg"}`}>
        No upcoming events at the moment. Stay connected for upcoming workshops, webinars,
        hackathons and community activities.
      </p>
    </div>
  );
}
