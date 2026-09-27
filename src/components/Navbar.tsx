"use client";

import { siteConfig } from "@/data/site";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60">
      <nav className="glass" aria-label="Primary">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <Link href="/" className="flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
            <Image
              src={siteConfig.logo}
              alt={`${siteConfig.organization} logo`}
              width={44}
              height={44}
              className="h-11 w-11 rounded-xl object-contain"
              priority
            />
            <span className="truncate text-sm font-semibold leading-tight text-brand-deep sm:text-base">
              AWS Student Builder Group
              <span className="mt-0.5 block text-xs font-medium text-muted">
                {siteConfig.campus}
              </span>
            </span>
          </Link>
          <ul className="hidden items-center gap-1 lg:flex">
            {siteConfig.navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                      active
                        ? "bg-brand-soft text-brand-dark"
                        : "text-muted hover:bg-brand-soft hover:text-brand-dark"
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line text-brand-dark lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <i className={`bi ${open ? "bi-x-lg" : "bi-list"} text-xl`} aria-hidden="true" />
          </button>
        </div>
        <div
          id="mobile-menu"
          className={`overflow-hidden border-t border-line lg:hidden ${open ? "max-h-96" : "max-h-0"} transition-[max-height] duration-300`}
        >
          <ul className="flex flex-col gap-1 px-4 py-3">
            {siteConfig.navigation.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-xl px-3 py-3 text-sm font-medium ${
                      active ? "bg-brand-soft text-brand-dark" : "text-foreground"
                    }`}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
