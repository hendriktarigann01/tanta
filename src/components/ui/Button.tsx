import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  as?: "button" | "a";
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-brand-primary hover:opacity-90 active:opacity-80",
  secondary:
    "bg-brand-secondary/20 border border-brand-secondary/40 hover:bg-brand-secondary/30",
  ghost:
    "bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20",
  outline: "bg-transparent border border-white/40 hover:bg-white/10",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-sm",
  md: "px-7 py-3 text-sm md:text-base",
  lg: "px-9 py-4 text-base md:text-lg",
};

/**
 * Button primitif yang reusable.
 * Support render sebagai <a> untuk link eksternal.
 */
export function Button({
  variant = "primary",
  size = "md",
  as = "button",
  href,
  target,
  rel,
  children,
  className,
  ...props
}: ButtonProps) {
  const base = cn(
    "inline-flex items-center text-white justify-center gap-2 font-medium rounded-[var(--radius-btn)]",
    "transition-all duration-200 focus-visible:outline-none focus-visible:ring-2",
    "focus-visible:ring-brand-primary focus-visible:ring-offset-2",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if (as === "a" && href) {
    return (
      <a href={href} target={target} rel={rel} className={base}>
        {children}
      </a>
    );
  }

  return (
    <button className={base} {...props}>
      {children}
    </button>
  );
}
