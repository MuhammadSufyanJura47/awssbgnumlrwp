"use client";

import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import Image from "next/image";
import { useState } from "react";

type SafeImageProps = {
  src: string | null;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  variant?: "person" | "event";
};

export function SafeImage({
  src,
  alt,
  className = "",
  sizes,
  priority = false,
  variant = "event",
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <ImagePlaceholder variant={variant} label={alt} />;
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      className={`object-cover ${className}`}
      onError={() => setFailed(true)}
    />
  );
}
