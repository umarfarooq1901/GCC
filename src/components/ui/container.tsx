import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

/** Centred page column. `wide` matches the reference site's near full-bleed header width. */
export function Container({ className, wide, ...props }: ComponentProps<"div"> & { wide?: boolean }) {
  return <div className={cn("mx-auto w-full px-4 sm:px-6 lg:px-8", wide ? "max-w-[1440px]" : "max-w-7xl", className)} {...props} />;
}
