import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  children: ReactNode;
  reverse?: boolean;
  /** Seconds for one full loop. */
  duration?: number;
  className?: string;
  pauseOnHover?: boolean;
}

/**
 * Infinite horizontal ticker (pure CSS). Content is rendered twice and the
 * track slides by exactly half its width, so the loop is seamless.
 */
export function Marquee({ children, reverse, duration = 45, className, pauseOnHover = true }: MarqueeProps) {
  return (
    <div className={cn("group/marquee mask-fade-x relative flex overflow-hidden", className)}>
      <div
        style={{ "--marquee-duration": `${duration}s` } as CSSProperties}
        className={cn(
          "flex w-max shrink-0 items-center",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
          pauseOnHover && "group-hover/marquee:[animation-play-state:paused]",
        )}
      >
        <div className="flex shrink-0 items-center gap-5 pr-5">{children}</div>
        <div aria-hidden className="flex shrink-0 items-center gap-5 pr-5">
          {children}
        </div>
      </div>
    </div>
  );
}
