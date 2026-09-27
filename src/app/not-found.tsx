import { ButtonLink } from "@/components/ButtonLink";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand">404</p>
      <h1 className="mt-3 text-3xl font-semibold text-brand-deep">Page not found</h1>
      <p className="mt-3 text-muted">
        The page you requested is unavailable. Return home or explore the community events.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/">Back to Home</ButtonLink>
        <ButtonLink href="/events" variant="secondary">
          Explore Events
        </ButtonLink>
      </div>
    </div>
  );
}
