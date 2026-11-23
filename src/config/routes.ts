/**
 * Route registry. Every page in the site is declared here once, and both the
 * navigation and the page metadata read from it, so a title or path is never
 * duplicated. `status: "building"` pages render the shared Under Construction
 * screen until their real content is ready.
 */
export type RouteStatus = "live" | "building";

export interface RouteEntry {
  path: string;
  title: string;
  description: string;
  /** Section label used for breadcrumbs, e.g. "Conference". */
  section?: string;
  status: RouteStatus;
}

export const ROUTES = {
  home: { path: "/", title: "Home", description: "India GCC Show 2027, Bengaluru.", status: "live" },
  about: { path: "/about", title: "About", description: "Who we are and why India GCC Show exists.", status: "building" },

  // Exhibition
  whyExhibit: { path: "/exhibition/why-exhibit", title: "Why Exhibit?", section: "Exhibition", description: "Meet GCC decision makers on the expo floor.", status: "building" },
  exhibitors: { path: "/exhibition/exhibitors", title: "2027 Exhibitors", section: "Exhibition", description: "Companies exhibiting at India GCC Show 2027.", status: "building" },
  previousExhibitors: { path: "/exhibition/previous-exhibitors", title: "Previous Exhibitors", section: "Exhibition", description: "Companies that have exhibited with us before.", status: "building" },
  exhibitorEnquiry: { path: "/exhibition/exhibitor-enquiry", title: "Exhibitor Enquiry", section: "Exhibition", description: "Ask about stands and pavilions.", status: "building" },
  brochure: { path: "/exhibition/brochure", title: "Request Brochure", section: "Exhibition", description: "Get the India GCC Show 2027 brochure.", status: "building" },

  // Conference
  conference: { path: "/conference", title: "About Conference", section: "Conference", description: "Keynotes, CXO panels and executive interviews.", status: "building" },
  participants: { path: "/conference/participants", title: "2027 Participants", section: "Conference", description: "Organisations taking part in 2027.", status: "building" },
  speakers: { path: "/conference/speakers", title: "2027 Speakers", section: "Conference", description: "Speakers at India GCC Show 2027.", status: "building" },
  agenda: { path: "/conference/agenda", title: "2027 Agenda", section: "Conference", description: "The two-day programme.", status: "building" },
  previousParticipants: { path: "/conference/previous-participants", title: "Previous Participants", section: "Conference", description: "Organisations that have taken part before.", status: "building" },
  previousSpeakers: { path: "/conference/previous-speakers", title: "Previous Speakers", section: "Conference", description: "Speakers from earlier editions.", status: "building" },
  speakerEnquiry: { path: "/conference/speaker-enquiry", title: "Speaker Enquiry", section: "Conference", description: "Nominate a leader to speak.", status: "building" },

  // Sponsors
  sponsors: { path: "/sponsors", title: "2027 Sponsors", section: "Sponsors", description: "Sponsors of India GCC Show 2027.", status: "building" },
  previousSponsors: { path: "/sponsors/previous-sponsors", title: "Previous Sponsors", section: "Sponsors", description: "Sponsors from earlier editions.", status: "building" },
  sponsorshipEnquiry: { path: "/sponsors/sponsorship-enquiry", title: "Sponsorship Enquiry", section: "Sponsors", description: "Keynote, session and VIP dinner opportunities.", status: "building" },

  // Partners
  partners: { path: "/partners", title: "Partners", section: "Partners", description: "Our event partners.", status: "building" },
  mediaPartners: { path: "/partners/media-partners", title: "Media Partners", section: "Partners", description: "Media partners for 2027.", status: "building" },
  previousPartners: { path: "/partners/previous-partners", title: "Previous Partners", section: "Partners", description: "Partners from earlier editions.", status: "building" },
  previousMediaPartners: { path: "/partners/previous-media-partners", title: "Previous Media Partners", section: "Partners", description: "Media partners from earlier editions.", status: "building" },
  partnershipEnquiry: { path: "/partners/partnership-enquiry", title: "Partnership Enquiry", section: "Partners", description: "Explore a partnership with India GCC Show.", status: "building" },

  // Standalone
  news: { path: "/news", title: "News & Blog", description: "Updates, interviews and GCC insights.", status: "building" },
  contact: { path: "/contact", title: "Get In Touch", description: "Talk to the India GCC Show team.", status: "building" },
  register: { path: "/register", title: "Register", description: "Register for India GCC Show 2027.", status: "building" },

  // Legal
  privacy: { path: "/privacy-policy", title: "Privacy Policy", section: "Information", description: "How we handle your data.", status: "building" },
  terms: { path: "/terms-and-conditions", title: "Terms & Conditions", section: "Information", description: "Terms for using this site and attending.", status: "building" },
  cookies: { path: "/cookie-policy", title: "Cookie Policy", section: "Information", description: "How this site uses cookies.", status: "building" },
} as const satisfies Record<string, RouteEntry>;

export type RouteKey = keyof typeof ROUTES;

/**
 * In-page anchor that opens the Register Interest form on the home page with
 * the "I am a" field preselected. See `register-interest.tsx`.
 */
export const interestLink = (role: "delegate" | "exhibitor" | "sponsor" | "speaker" | "partner" | "brochure") =>
  `/#register-${role}`;
