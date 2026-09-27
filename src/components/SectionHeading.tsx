type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? (
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-brand-deep drop-shadow-[0_1px_0_rgb(0_0_0_/_0.2)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className={`mt-3 text-base leading-7 text-muted ${align === "center" ? "" : "max-w-xl"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
