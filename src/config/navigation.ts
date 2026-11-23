import { ROUTES, interestLink } from "./routes";

export interface NavLink {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href?: string;
  children?: NavLink[];
}

const link = (key: keyof typeof ROUTES): NavLink => ({ label: ROUTES[key].title, href: ROUTES[key].path });

/** Main navigation: mirrors the reference site's structure item for item. */
export const MAIN_NAV: NavItem[] = [
  { label: "Home", href: ROUTES.home.path },
  { label: "About", href: ROUTES.about.path },
  {
    label: "Exhibition",
    children: [
      link("whyExhibit"),
      link("exhibitors"),
      link("previousExhibitors"),
      { label: "Exhibitor Enquiry", href: interestLink("exhibitor") },
      { label: "Request Brochure", href: interestLink("brochure") },
    ],
  },
  {
    label: "Conference",
    children: [
      link("conference"),
      link("participants"),
      link("speakers"),
      link("agenda"),
      link("previousParticipants"),
      link("previousSpeakers"),
      { label: "Speaker Enquiry", href: interestLink("speaker") },
    ],
  },
  {
    label: "Sponsors",
    children: [
      link("sponsors"),
      link("previousSponsors"),
      { label: "Sponsorship Enquiry", href: interestLink("sponsor") },
    ],
  },
  {
    label: "Partners",
    children: [
      link("partners"),
      link("mediaPartners"),
      link("previousPartners"),
      link("previousMediaPartners"),
      { label: "Partnership Enquiry", href: interestLink("partner") },
    ],
  },
  { label: "News & Blog", href: ROUTES.news.path },
  { label: "Get In Touch", href: ROUTES.contact.path },
];

/** Footer columns: same grouping as the reference site's footer. */
export const FOOTER_COLUMNS: { title: string; links: NavLink[] }[] = [
  {
    title: "Exhibition",
    links: [link("whyExhibit"), link("exhibitors"), { label: "Exhibitor Enquiry", href: interestLink("exhibitor") }, { label: "Request Brochure", href: interestLink("brochure") }],
  },
  {
    title: "Conference",
    links: [link("conference"), link("speakers"), link("participants"), { label: "Speaker Enquiry", href: interestLink("speaker") }],
  },
  {
    title: "Sponsors",
    links: [link("sponsors"), link("previousSponsors"), { label: "Sponsorship Enquiry", href: interestLink("sponsor") }],
  },
  {
    title: "Partners",
    links: [link("mediaPartners"), link("previousMediaPartners"), { label: "Partnership Enquiry", href: interestLink("partner") }],
  },
];

export const LEGAL_LINKS: NavLink[] = [link("privacy"), link("terms"), link("cookies")];

export const REGISTER_CTA: NavLink = { label: "Register", href: interestLink("delegate") };
