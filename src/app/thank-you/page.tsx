import { ButtonLink } from "@/components/ButtonLink";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Thank You",
  description: "Your message was received by AWS Student Builder Group — NUML Rawalpindi.",
  path: "/thank-you",
  noIndex: true,
});

export default function ThankYouPage() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6">
      <div className="surface-card rounded-3xl px-6 py-12">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-brand-soft text-brand">
          <i className="bi bi-check-circle text-4xl" aria-hidden="true" />
        </div>
        <h1 className="text-3xl font-semibold text-brand-deep">Thank You!</h1>
        <p className="mt-4 text-muted leading-7">
          Your message has been successfully received. Our team will review your message and get
          back to you via email as soon as possible.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <ButtonLink href="/">Back to Home</ButtonLink>
          <ButtonLink href="/events" variant="secondary">
            Explore Events
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
