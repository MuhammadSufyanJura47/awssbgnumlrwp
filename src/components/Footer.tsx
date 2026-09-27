import { SocialLinks } from "@/components/SocialLinks";
import { siteConfig } from "@/data/site";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-transparent">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src={siteConfig.logo}
              alt={`${siteConfig.organization} logo`}
              width={48}
              height={48}
              className="h-12 w-12 rounded-xl object-contain"
            />
            <span className="font-semibold text-brand-deep">
              {siteConfig.organization}
              <span className="mt-0.5 block text-sm font-medium text-muted">
                {siteConfig.campus}
              </span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
            A student technology community at NUML Rawalpindi for cloud skills, collaboration, and
            practical learning with AWS.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-deep">
            Navigation
          </h2>
          <ul className="mt-4 space-y-2">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-muted transition hover:text-brand">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-wide text-brand-deep">
            Connect
          </h2>
          <p className="mt-4 mb-4 text-sm text-muted">
            Meetup, Instagram, WhatsApp Community, LinkedIn, email, and WhatsApp.
          </p>
          <SocialLinks />
        </div>
      </div>
      <div className="border-t border-line py-4 text-center text-xs text-muted">
        © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
      </div>
    </footer>
  );
}
