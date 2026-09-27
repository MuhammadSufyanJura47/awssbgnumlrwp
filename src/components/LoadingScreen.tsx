"use client";

import { siteConfig } from "@/data/site";
import Image from "next/image";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const revealTimer = window.setTimeout(() => setIsLeaving(true), 300);
    const removeTimer = window.setTimeout(() => setIsVisible(false), 1000);

    return () => {
      window.clearTimeout(revealTimer);
      window.clearTimeout(removeTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`loading-screen ${isLeaving ? "loading-screen-leaving" : ""}`}
      role="status"
      aria-label="Loading website"
    >
      <div className="loading-screen-mark">
        <Image
          src={siteConfig.logo}
          alt=""
          width={220}
          height={220}
          priority
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
