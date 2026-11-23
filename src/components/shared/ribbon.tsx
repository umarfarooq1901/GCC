import { cn } from "@/lib/utils";

/**
 * Decorative flowing ribbon built from the logo's three strokes (saffron,
 * azure, green). Our take on the reference site's sweeping red/orange swoosh.
 */
export function Ribbon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 1440 320" fill="none" preserveAspectRatio="none" aria-hidden className={cn("pointer-events-none", className)}>
      <defs>
        <linearGradient id="rb-saffron" x1="0" x2="1">
          <stop offset="0" stopColor="#e88614" stopOpacity="0" />
          <stop offset="0.45" stopColor="#e88614" stopOpacity="0.55" />
          <stop offset="1" stopColor="#f5a33a" />
        </linearGradient>
        <linearGradient id="rb-azure" x1="0" x2="1">
          <stop offset="0" stopColor="#007fe8" stopOpacity="0" />
          <stop offset="0.5" stopColor="#007fe8" stopOpacity="0.45" />
          <stop offset="1" stopColor="#007fe8" />
        </linearGradient>
        <linearGradient id="rb-leaf" x1="0" x2="1">
          <stop offset="0" stopColor="#118d1f" stopOpacity="0" />
          <stop offset="0.55" stopColor="#118d1f" stopOpacity="0.4" />
          <stop offset="1" stopColor="#3fb24c" />
        </linearGradient>
      </defs>
      <path d="M0 300C320 300 520 210 780 170C1040 130 1220 60 1440 10" stroke="url(#rb-saffron)" strokeWidth="26" strokeLinecap="round" />
      <path d="M120 318C420 300 640 236 880 206C1120 176 1280 110 1440 70" stroke="url(#rb-azure)" strokeWidth="14" strokeLinecap="round" />
      <path d="M260 320C540 314 760 270 980 246C1200 222 1330 170 1440 132" stroke="url(#rb-leaf)" strokeWidth="8" strokeLinecap="round" />
    </svg>
  );
}
