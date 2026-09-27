"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 360);

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      type="button"
      className={`fixed right-4 bottom-4 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand/40 bg-[#0d2a19]/90 text-brand shadow-[0_10px_28px_rgb(0_0_0_/_0.28)] backdrop-blur-md transition duration-200 hover:-translate-y-1 hover:border-brand hover:bg-brand hover:text-[#071b10] sm:right-6 sm:bottom-6 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      }`}
      aria-label="Back to top"
      title="Back to top"
      tabIndex={visible ? 0 : -1}
      onClick={scrollToTop}
    >
      <ArrowUp size={20} strokeWidth={2.25} aria-hidden="true" />
    </button>
  );
}