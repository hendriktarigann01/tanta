import { cn } from "@/lib/utils";

interface BadgeProps {
  children:   React.ReactNode;
  variant?:   "default" | "accent" | "primary" | "outline";
  className?: string;
}

const variantStyles = {
  default: "bg-white/10 text-brand-text border border-white/20",
  accent:  "bg-brand-accent/20 text-brand-text border border-brand-accent/40",
  primary: "bg-brand-primary/20 text-brand-text border border-brand-primary/40",
  outline: "bg-transparent text-brand-text border border-white/40",
};

/**
 * Badge / chip label kecil untuk eyebrow teks atau status.
 */
export function Badge({
  children,
  variant   = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-[var(--radius-badge)]",
        "text-xs font-medium tracking-wide",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
