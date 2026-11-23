import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  /** "light" for use on navy/photo backgrounds. */
  tone?: "dark" | "light";
  className?: string;
  as?: "h1" | "h2";
}

/**
 * Section title in the reference site's style: small eyebrow, then a large
 * gradient-filled heading. Pass a `<span className="text-gradient-warm">` inside
 * `title` to highlight one word.
 */
export function SectionHeading({ eyebrow, title, description, align = "left", tone = "dark", className, as: Tag = "h2" }: SectionHeadingProps) {
  const light = tone === "light";
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p
          className={cn(
            "mb-4 inline-flex items-center gap-2.5 font-display text-xs font-bold uppercase tracking-[0.2em] sm:text-[0.8rem]",
            light ? "text-saffron-400" : "text-saffron-600",
          )}
        >
          <span aria-hidden className="bg-tricolor h-[3px] w-8 rounded-full" />
          {eyebrow}
        </p>
      )}
      <Tag
        className={cn(
          "text-3xl leading-[1.1] font-bold sm:text-4xl lg:text-[2.85rem]",
          light ? "text-white" : "text-gradient",
        )}
      >
        {title}
      </Tag>
      {description && (
        <p className={cn("mt-5 text-base leading-relaxed sm:text-lg", light ? "text-white/80" : "text-body", align === "center" && "mx-auto")}>
          {description}
        </p>
      )}
    </Reveal>
  );
}
