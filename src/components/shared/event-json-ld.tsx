import { EVENT, SITE } from "@/config/site";

/** schema.org Event markup so search engines can show date and location. */
export function EventJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "BusinessEvent",
    name: `${SITE.name} ${SITE.edition}`,
    description: SITE.description,
    startDate: "2027-06-08",
    endDate: "2027-06-09",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: EVENT.venue ?? "Bengaluru",
      address: { "@type": "PostalAddress", addressLocality: "Bengaluru", addressRegion: "Karnataka", addressCountry: "IN" },
    },
    image: [`${SITE.url}/images/hero.webp`],
    url: SITE.url,
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
