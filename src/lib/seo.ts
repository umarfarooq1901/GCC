import type { Metadata } from "next";
import { ROUTES, type RouteKey } from "@/config/routes";
import { SITE } from "@/config/site";

/** Page metadata from the route registry, so titles never drift from the nav. */
export function pageMetadata(key: RouteKey): Metadata {
  const r = ROUTES[key];
  return {
    title: r.title,
    description: r.description,
    alternates: { canonical: r.path },
    openGraph: { title: `${r.title} | ${SITE.name} ${SITE.edition}`, description: r.description, url: r.path },
    // Unfinished pages should not be indexed yet.
    robots: r.status === "building" ? { index: false, follow: true } : undefined,
  };
}
