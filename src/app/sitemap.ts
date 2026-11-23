import type { MetadataRoute } from "next";
import { ROUTES } from "@/config/routes";
import { SITE } from "@/config/site";

/** Only finished ("live") pages are listed. Pages flip to live in config/routes.ts. */
export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(ROUTES)
    .filter((r) => r.status === "live")
    .map((r) => ({ url: `${SITE.url}${r.path}`, changeFrequency: "weekly", priority: r.path === "/" ? 1 : 0.7 }));
}
