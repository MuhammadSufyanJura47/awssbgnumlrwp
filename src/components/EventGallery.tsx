"use client";

import { SafeImage } from "@/components/SafeImage";
import { useEffect, useState } from "react";

export function EventGallery({
  images,
  title,
}: {
  images: Array<string | null>;
  title: string;
}) {
  const gallery = images.length > 0 ? images : [null, null, null, null];
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => {
    if (active === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <>
      <div className="grid gap-4 sm:grid-cols-2">
        {gallery.map((src, index) => (
          <button
            key={`${src ?? "placeholder"}-${index}`}
            type="button"
            className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-brand-soft"
            onClick={() => setActive(index)}
            aria-label={`Open ${title} photo ${index + 1}`}
          >
            <SafeImage src={src} alt={`${title} photo ${index + 1}`} sizes="(max-width: 768px) 100vw, 50vw" />
          </button>
        ))}
      </div>
      {active !== null ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-brand-deep/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Event photo viewer"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            className="absolute right-5 top-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#071b10]"
            onClick={() => setActive(null)}
            aria-label="Close photo viewer"
          >
            <i className="bi bi-x-lg" aria-hidden="true" />
          </button>
          <div
            className="relative h-[min(80vh,720px)] w-full max-w-4xl overflow-hidden rounded-2xl bg-white"
            onClick={(event) => event.stopPropagation()}
          >
            <SafeImage
              src={gallery[active]}
              alt={`${title} photo ${active + 1}`}
              sizes="90vw"
            />
          </div>
        </div>
      ) : null}
    </>
  );
}
