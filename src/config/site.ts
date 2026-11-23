/**
 * Single source of truth for event facts and contact details.
 * Anything marked `null` is still to be confirmed by the organisers; the UI
 * shows a friendly "to be announced" state instead of an empty value.
 */
export const SITE = {
  name: "India GCC Show",
  shortName: "IGCCS",
  edition: "2027",
  copyrightYear: 2026,
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "India GCC Show 2027 is a two-day conference and expo in Bengaluru for Global Capability Centre leaders, parent-company executives and the partners who help them grow.",
  keywords: [
    "India GCC Show",
    "Global Capability Centres",
    "GCC conference India",
    "GCC expo Bengaluru",
    "GCC leadership summit 2027",
  ],
} as const;

export const EVENT = {
  /** ISO start used by the countdown. Local Bengaluru time (IST, UTC+05:30). */
  startsAt: "2027-06-08T09:00:00+05:30",
  dates: "8-9 June 2027",
  datesLong: "08 - 09 June 2027",
  city: "Bengaluru, India",
  venue: null as string | null, // TODO: confirm venue name
  format: "Conference, expo and VIP networking dinner",
} as const;

export const CONTACT = {
  email: null as string | null, // TODO: confirm public contact email
  phone: null as string | null, // TODO: confirm public phone number
  whatsapp: null as string | null, // TODO: confirm WhatsApp number, digits only e.g. "919800000000"
} as const;

/** Social profiles. Leave href empty to hide a network everywhere it is rendered. */
export const SOCIAL_LINKS: { network: "linkedin" | "x" | "instagram" | "youtube" | "facebook"; label: string; href: string }[] = [
  { network: "linkedin", label: "LinkedIn", href: "" },
  { network: "x", label: "X (Twitter)", href: "" },
  { network: "instagram", label: "Instagram", href: "" },
  { network: "youtube", label: "YouTube", href: "" },
];

/**
 * Logos shown in the header strip next to the main logo (like "Hosted By" /
 * "Title Sponsor" on the reference site). While this is empty the header shows
 * event details instead. Drop logos in /public/partners and list them here.
 */
export const HEADER_PARTNERS: { label: string; logos: { src: string; alt: string; width: number; height: number }[] }[] = [];

/** Headline numbers. These are targets for 2027, so the UI labels them as "expected". */
export const STATS = [
  { value: 1800, suffix: "+", label: "Industry professionals" },
  { value: 800, suffix: "+", label: "GCCs represented" },
  { value: 60, suffix: "", label: "Exhibitors and sponsors" },
  { value: 60, suffix: "+", label: "Industry leaders speaking" },
] as const;
