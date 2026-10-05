import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
  asLink?: boolean;
  href?: string;
}

// Convention: "primary" is reserved for the single most important CTA per view.
// All other actions must use "ghost" (dark backgrounds) or "outline" (light backgrounds).
const styles: Record<Variant, string> = {
  primary:
    "bg-[var(--brand-primary)] text-white hover:bg-emerald-800 shadow-lg shadow-emerald-900/20",
  ghost:
    "bg-white/10 text-white backdrop-blur-md hover:bg-white/20 border border-white/20",
  outline:
    "border border-[var(--brand-primary)] text-[var(--brand-primary)] hover:bg-[var(--brand-primary)] hover:text-white",
};

export default function Button({
  variant = "primary",
  children,
  asLink = false,
  href,
  className = "",
  ...rest
}: Props) {
  const base = `inline-flex items-center justify-center gap-2 min-h-11 px-6 py-3 rounded-full font-medium transition-all duration-300 focus-visible:outline-none ${styles[variant]} ${className}`;

  if (asLink && href) {
    return (
      <a href={href} onClick={rest.onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>} className={base}>
        {children}
      </a>
    );
  }

  return (
    <button className={base} {...rest}>
      {children}
    </button>
  );
}