import { ContactForm } from "@/components/ContactForm";
import { SectionHeading } from "@/components/SectionHeading";
import { contactDetails, socialLinks } from "@/data/site";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Contact Us — AWS Student Builder Group NUML Rawalpindi",
  description:
    "Contact AWS Student Builder Group at NUML Rawalpindi by email, WhatsApp, LinkedIn, Instagram, or Meetup.",
  path: "/contact",
});

const channels = [
  { icon: "bi-envelope", label: "Email", value: contactDetails.email, href: socialLinks.email },
  { icon: "bi-whatsapp", label: "WhatsApp", value: contactDetails.whatsappDisplay, href: socialLinks.whatsapp },
  { icon: "bi-people", label: "WhatsApp Community", value: "Join the community chat", href: socialLinks.whatsappCommunity },
  { icon: "bi-linkedin", label: "LinkedIn", value: "Follow the group", href: socialLinks.linkedin },
  { icon: "bi-instagram", label: "Instagram", value: "See community updates", href: socialLinks.instagram },
  { icon: "bi-calendar-week", label: "Meetup", value: "Find our events", href: socialLinks.meetup },
];

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <SectionHeading
        eyebrow="Contact Us"
        title="We would like to hear from you"
        description="Reach the core team through any of the channels below, or send a message using the form."
      />
      <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-4">
          {channels.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              className="surface-card flex items-center gap-4 rounded-2xl p-4 transition hover:-translate-y-0.5"
              target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={channel.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            >
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-soft text-brand">
                <i className={`bi ${channel.icon}`} aria-hidden="true" />
              </span>
              <span>
                <span className="block text-sm font-semibold text-brand-deep">{channel.label}</span>
                <span className="text-sm text-muted">{channel.value}</span>
              </span>
            </a>
          ))}
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
