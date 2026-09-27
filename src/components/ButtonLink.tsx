import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "inverted";
  className?: string;
  external?: boolean;
};

const variants = {
  primary:
    "bg-brand text-[#071b10] shadow-[0_8px_20px_rgb(88_217_138_/_0.2)] hover:bg-[#8ae8aa] hover:-translate-y-0.5",
  secondary:
    "border border-white/20 bg-white/10 text-white shadow-[0_8px_20px_rgb(0_0_0_/_0.14)] backdrop-blur-md hover:border-brand hover:bg-white/15 hover:text-brand hover:-translate-y-0.5",
  ghost: "border border-white/20 bg-white/5 text-white backdrop-blur-md hover:bg-white/10",
  inverted:
    "border border-white/80 bg-white/85 text-[#071b10] shadow-[0_8px_20px_rgb(7_27_16_/_0.14)] backdrop-blur-md hover:bg-white hover:-translate-y-0.5",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200 ${variants[variant]} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
