type ImagePlaceholderProps = {
  variant?: "person" | "event";
  className?: string;
  label?: string;
};

export function ImagePlaceholder({
  variant = "person",
  className = "",
  label,
}: ImagePlaceholderProps) {
  const icon = variant === "person" ? "bi-person" : "bi-image";

  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center bg-brand-soft text-brand ${className}`}
      role="img"
      aria-label={label ?? (variant === "person" ? "Profile photo placeholder" : "Image placeholder")}
    >
      <i className={`${icon} text-4xl`} aria-hidden="true" />
    </div>
  );
}
