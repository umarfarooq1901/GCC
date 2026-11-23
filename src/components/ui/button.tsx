import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

const VARIANTS = {
  /** Saffron gradient with a lighter rim: the reference site's signature CTA. */
  cta: "bg-cta text-white ring-2 ring-saffron-400/60 ring-offset-0 shadow-[0_10px_30px_-12px_rgba(232,134,20,0.7)] hover:shadow-[0_14px_34px_-10px_rgba(232,134,20,0.85)] hover:brightness-105",
  navy: "bg-navy text-white hover:bg-navy-700 shadow-[0_10px_30px_-14px_rgba(10,33,76,0.8)]",
  white: "bg-white text-navy hover:bg-mist shadow-[0_10px_30px_-14px_rgba(0,0,0,0.35)]",
  outline: "border-2 border-navy/80 text-navy hover:bg-navy hover:text-white",
  "outline-light": "border-2 border-white/80 text-white hover:bg-white hover:text-navy",
  ghost: "text-navy hover:text-saffron-600",
} as const;

const SIZES = {
  sm: "h-10 px-4 text-sm gap-1.5",
  md: "h-12 px-6 text-[0.95rem] gap-2",
  lg: "h-14 px-8 text-base gap-2.5",
} as const;

type Variant = keyof typeof VARIANTS;
type Size = keyof typeof SIZES;

interface BaseProps {
  variant?: Variant;
  size?: Size;
  /** Show the trailing arrow (default true for cta). */
  arrow?: boolean;
  className?: string;
  children: ReactNode;
}

export function buttonClasses({ variant = "cta", size = "md", className }: { variant?: Variant; size?: Size; className?: string }) {
  return cn(
    "group inline-flex shrink-0 items-center justify-center rounded-xl font-display font-semibold tracking-tight whitespace-nowrap transition-all duration-300 ease-out-soft active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60",
    VARIANTS[variant],
    SIZES[size],
    className,
  );
}

function Arrow() {
  return <ArrowRight aria-hidden className="size-4 transition-transform duration-300 group-hover:translate-x-1" />;
}

type LinkButtonProps = BaseProps & Omit<ComponentProps<typeof Link>, "className" | "children">;

export function ButtonLink({ variant = "cta", size = "md", arrow, className, children, ...props }: LinkButtonProps) {
  const showArrow = arrow ?? variant === "cta";
  return (
    <Link className={buttonClasses({ variant, size, className })} {...props}>
      {children}
      {showArrow && <Arrow />}
    </Link>
  );
}

type NativeButtonProps = BaseProps & Omit<ComponentProps<"button">, "className" | "children">;

export function Button({ variant = "cta", size = "md", arrow, className, children, type = "button", ...props }: NativeButtonProps) {
  const showArrow = arrow ?? variant === "cta";
  return (
    <button type={type} className={buttonClasses({ variant, size, className })} {...props}>
      {children}
      {showArrow && <Arrow />}
    </button>
  );
}
