import { socialLinks } from "@/data/site";

const items = [
  { key: "meetup", href: socialLinks.meetup, icon: "bi-calendar-week", label: "Meetup" },
  { key: "instagram", href: socialLinks.instagram, icon: "bi-instagram", label: "Instagram" },
  { key: "whatsappCommunity", href: socialLinks.whatsappCommunity, icon: "bi-people", label: "WhatsApp Community" },
  { key: "linkedin", href: socialLinks.linkedin, icon: "bi-linkedin", label: "LinkedIn" },
  { key: "email", href: socialLinks.email, icon: "bi-envelope", label: "Email" },
  { key: "whatsapp", href: socialLinks.whatsapp, icon: "bi-whatsapp", label: "WhatsApp" },
] as const;

export function SocialLinks({
  variant = "icon",
}: {
  variant?: "icon" | "list";
}) {
  if (variant === "list") {
    return (
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.key}>
            <a
              href={item.href}
              className="inline-flex items-center gap-3 text-sm text-muted transition hover:text-brand"
              target={item.href.startsWith("mailto:") ? undefined : "_blank"}
              rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
            >
              <i className={`bi ${item.icon} text-brand`} aria-hidden="true" />
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="flex flex-wrap items-center gap-2">
      {items.map((item) => (
        <a
          key={item.key}
          href={item.href}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-brand transition hover:border-brand hover:bg-brand hover:text-white"
          aria-label={item.label}
          target={item.href.startsWith("mailto:") ? undefined : "_blank"}
          rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
        >
          <i className={`bi ${item.icon}`} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
