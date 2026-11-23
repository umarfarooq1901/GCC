import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SITE } from "@/config/site";
import logo from "../../../public/brand/india-gcc-show-logo.png";

/**
 * Official India GCC Show logo (unaltered artwork, transparent padding trimmed).
 * Source file: /public/brand/source/india-gcc-show-logo-original.png
 */
export function Logo({ className, preload, href = "/" }: { className?: string; preload?: boolean; href?: string | null }) {
  const img = (
    <Image
      src={logo}
      alt={`${SITE.name} ${SITE.edition}`}
      preload={preload}
      sizes="(min-width: 1024px) 300px, 220px"
      className={cn("h-auto w-[190px] sm:w-[230px] lg:w-[270px]", className)}
    />
  );
  if (!href) return img;
  return (
    <Link href={href} aria-label={`${SITE.name} home`} className="inline-flex shrink-0">
      {img}
    </Link>
  );
}
