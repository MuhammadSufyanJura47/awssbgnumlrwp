export function EmptyPartners() {
  return (
    <div className="surface-card rounded-2xl px-6 py-12 text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-soft text-brand">
        <i className="bi bi-building text-2xl" aria-hidden="true" />
      </div>
      <h2 className="text-xl font-semibold text-brand-deep">Partners coming soon.</h2>
      <p className="mx-auto mt-2 max-w-lg text-muted">
        We are building meaningful collaborations with organizations that support student learning
        and community growth.
      </p>
    </div>
  );
}
