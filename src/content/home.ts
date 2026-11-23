/**
 * Home page copy. Source: "India GCC Show 2027 Landing Page" brief (PDF).
 * Rewritten in a plain, human voice. Keep facts in sync with config/site.ts.
 */
import {
  Briefcase,
  Building2,
  Code2,
  Cpu,
  Factory,
  Gavel,
  GraduationCap,
  HandCoins,
  HeartPulse,
  Landmark,
  Leaf,
  Lightbulb,
  Mic2,
  Network,
  Rocket,
  ServerCog,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Users,
  Wallet,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { interestLink, ROUTES } from "@/config/routes";

/* ------------------------------------------------------------------ Hero */
export const HERO = {
  kicker: "India GCC Show 2027",
  title: "Where India's Global Capability Centres meet their partners",
  tagline: "From support to ownership. From cost to capability.",
  intro:
    "Two days in Bengaluru with the people who run India's capability centres, the executives they report to, and the partners who help them set up, hire and scale.",
  ctas: [
    { label: "Register interest", href: interestLink("delegate"), variant: "cta" },
    { label: "Exhibit", href: interestLink("exhibitor"), variant: "white" },
    { label: "Sponsor", href: interestLink("sponsor"), variant: "outline-light" },
  ],
} as const;

/* ------------------------------------------------------------ About intro */
export const ABOUT_INTRO = {
  eyebrow: "About the show",
  titleLead: "India's capability centres have",
  titleHighlight: "outgrown the cost story",
  paragraphs: [
    "India GCC Show is a two-day conference and expo for the people who run Global Capability Centres, the parent-company leaders they answer to, and the partners who help them grow.",
    "A GCC in India today is rarely just a support desk. Many now own product, engineering, AI and strategy for their parent companies. That brings new questions about talent, governance, location and growth, and they're best worked through in a room of people facing the same ones.",
    "So we're bringing that room together in Bengaluru: GCC heads and CXOs on stage, setup advisors and technology providers on the expo floor, and time set aside for the conversations that usually take months to arrange.",
  ],
  cta: { label: "Know more", href: ROUTES.about.path },
  slots: [
    { label: "Title Sponsor", body: "One headline partner for 2027. Talk to us about the package.", href: interestLink("sponsor") },
    { label: "Strategic Partner", body: "For organisations shaping India's GCC ecosystem.", href: interestLink("partner") },
  ],
} as const;

/* -------------------------------------------------------------- The shift */
export const SHIFT = {
  eyebrow: "Why India GCC Show",
  title: "The industry has moved on. The conversation needs a place to happen.",
  shifts: [
    { from: "Support", to: "Ownership" },
    { from: "Cost", to: "Capability" },
    { from: "India centre", to: "Global growth engine" },
  ],
  points: [
    {
      title: "A shift worth discussing",
      body: "GCCs now own product, engineering, AI and strategy for their parent companies. We want to talk about what that means in practice, not just celebrate it.",
    },
    {
      title: "Leaders and partners, same room",
      body: "GCC heads meet the setup advisors, talent partners, technology providers and workspace teams they already work with, and the ones they should be.",
    },
    {
      title: "Built for people who decide",
      body: "Curated delegates, conversations with senior peers and a VIP networking dinner keep the room focused on the people who make the calls.",
    },
  ],
} as const;

/* ------------------------------------------------------ Event highlights */
export interface Highlight {
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  cta: { label: string; href: string };
  tint: "navy" | "saffron" | "azure" | "leaf";
}

export const HIGHLIGHTS: Highlight[] = [
  {
    title: "Expert-led keynotes",
    body: "Short, focused talks from the leaders shaping how GCCs are built and scaled.",
    image: "/images/keynote.webp",
    imageAlt: "Speaker on stage addressing a large audience",
    cta: { label: "Apply to speak", href: interestLink("speaker") },
    tint: "navy",
  },
  {
    title: "CXO panel discussions",
    body: "Senior leaders debate strategy, AI, talent, compliance and growth, with room for your questions.",
    image: "/images/panel.webp",
    imageAlt: "Panellist speaking into a microphone during a discussion",
    cta: { label: "See the agenda", href: ROUTES.agenda.path },
    tint: "saffron",
  },
  {
    title: "Executive interviews",
    body: "One-to-one conversations with GCC heads on how their centres grew, and what they would do differently.",
    image: "/images/interview.webp",
    imageAlt: "Two people in a seated on-stage interview",
    cta: { label: "Meet the speakers", href: ROUTES.speakers.path },
    tint: "azure",
  },
  {
    title: "Expo floor",
    body: "Setup advisors, technology, talent and workspace providers, all under one roof.",
    image: "/images/expo.webp",
    imageAlt: "Exhibition hall with rows of stands",
    cta: { label: "Book your stand", href: interestLink("exhibitor") },
    tint: "leaf",
  },
  {
    title: "VIP networking dinner",
    body: "An invitation-only evening for speakers, sponsors, exhibitors and senior guests.",
    image: "/images/dinner.webp",
    imageAlt: "Guests raising a toast at an evening dinner",
    cta: { label: "Sponsor the dinner", href: interestLink("sponsor") },
    tint: "saffron",
  },
  {
    title: "Curated meetings",
    body: "Pre-arranged introductions between GCC leaders and the partners they actually need to meet.",
    image: "/images/meetings.webp",
    imageAlt: "Two professionals reviewing documents together",
    cta: { label: "Request meetings", href: interestLink("delegate") },
    tint: "navy",
  },
];

/* --------------------------------------------------------- Focus sectors */
export interface Sector {
  title: string;
  body: string;
  icon: LucideIcon;
}

export const SECTORS: Sector[] = [
  { title: "BFSI", body: "Banks, insurers and fintechs running core technology and operations from India.", icon: Landmark },
  { title: "Healthcare and Life Sciences", body: "Pharma, medtech and healthcare data, research and operations.", icon: HeartPulse },
  { title: "Engineering and R&D", body: "Automotive, semiconductor, aerospace and industrial product engineering.", icon: Wrench },
  { title: "Technology and Software", body: "Cloud, AI, platform and product engineering centres.", icon: Code2 },
  { title: "Retail and CPG", body: "Digital commerce, supply chain and customer analytics.", icon: ShoppingBag },
  { title: "Manufacturing and Energy", body: "Industrial operations, the energy transition and smart manufacturing.", icon: Factory },
  { title: "Real Estate", body: "Global real estate firms and investors running asset management, analytics and technology from India.", icon: Building2 },
  { title: "Data Centres and Digital Infrastructure", body: "Data centre, cloud and network players building AI-ready capacity in India.", icon: ServerCog },
];

export const THEMES = [
  "AI and emerging technology",
  "Talent and workforce",
  "Policy and compliance",
  "Setting up and scaling",
  "Cyber and data governance",
] as const;

/* ------------------------------------------------------------ Who attends */
export interface AudienceGroup {
  eyebrow: string;
  title: string;
  roles: string[];
  icon: LucideIcon;
}

export const AUDIENCE: AudienceGroup[] = [
  { eyebrow: "Core decision makers", title: "GCC leadership", icon: Briefcase, roles: ["GCC heads and managing directors", "Strategy and transformation leaders", "Shared services and operations heads"] },
  { eyebrow: "Digital leaders", title: "Technology and AI", icon: Cpu, roles: ["CIOs, CTOs and CDOs", "Heads of AI, data and analytics", "Cloud, platform and security architects"] },
  { eyebrow: "People leaders", title: "Talent and people", icon: Users, roles: ["CHROs and global HR heads", "Talent acquisition and skilling leaders", "Leadership development heads"] },
  { eyebrow: "Continuity owners", title: "Risk and operations", icon: ShieldCheck, roles: ["COOs and delivery heads", "Risk, compliance and continuity leaders", "Location strategy and expansion heads"] },
  { eyebrow: "Builders", title: "Product and innovation", icon: Lightbulb, roles: ["Chief product officers and product heads", "Engineering and platform leaders", "Innovation and startup partnership heads"] },
  { eyebrow: "Responsible growth", title: "Workplace and sustainability", icon: Leaf, roles: ["Facilities and workplace heads", "Real estate and campus leaders", "ESG and green IT leaders"] },
];

/** "Who should exhibit or sponsor", shown as a moving pill ticker. */
export const EXHIBITOR_PROFILE: { label: string; icon: LucideIcon }[] = [
  { label: "GCC setup and advisory", icon: Rocket },
  { label: "Real estate and managed workspace", icon: Building2 },
  { label: "Talent and HR technology", icon: GraduationCap },
  { label: "Technology, AI and cloud", icon: Sparkles },
  { label: "Cybersecurity, legal and compliance", icon: Gavel },
  { label: "Banks and professional services", icon: Landmark },
  { label: "Fintech and payments", icon: Wallet },
  { label: "Payroll and employer of record", icon: HandCoins },
  { label: "Facility management and workplace services", icon: Network },
];

/* -------------------------------------------------------------- Speakers */
export const SPEAKERS_INTRO = {
  eyebrow: "2027 Speakers",
  title: "GCC leaders. Parent-company executives. Policy voices.",
  body: "We're confirming our 2027 line-up now and will announce speakers here first. Know someone who should be on stage?",
  slots: 4,
  cta: { label: "Nominate a speaker", href: interestLink("speaker") },
  icon: Mic2,
} as const;

/* -------------------------------------------------------- Why Bengaluru */
export const BENGALURU = {
  eyebrow: "The destination",
  title: "Why Bengaluru",
  lead: "Where India's GCC story started to scale is where its next chapter should be discussed.",
  points: [
    { title: "India's largest GCC hub", body: "Bengaluru is home to the biggest concentration of Global Capability Centres in the country." },
    { title: "Deep talent pools", body: "Engineering, AI and product talent at a depth few cities anywhere can match." },
    { title: "A mature ecosystem", body: "Startups, universities and service partners that already work with GCCs every day." },
    { title: "Active state support", body: "A state government that actively backs GCC growth, which makes it the natural place to gather." },
  ],
} as const;

/* ------------------------------------------------------- Partner with us */
export const PARTNER = {
  eyebrow: "Partner with us",
  title: "Put your brand in front of the people who decide how India's GCCs grow",
  options: [
    { title: "Sponsor", body: "Keynote, session and VIP dinner opportunities, built around what you want to be known for.", href: interestLink("sponsor"), cta: "Book a call to sponsor" },
    { title: "Exhibit", body: "Stands and state or city pavilions on the expo floor, close to the conference sessions.", href: interestLink("exhibitor"), cta: "Book a call to exhibit" },
    { title: "Speak", body: "Nominate a leader for a panel, an executive interview or a fireside chat.", href: interestLink("speaker"), cta: "Nominate a speaker" },
  ],
  logosTitle: "Our partners",
  logosNote: "Partner announcements for 2027 are on the way. Your logo could be one of the first here.",
  logoSlots: 6,
} as const;

/* ------------------------------------------------------------------- FAQ */
export const FAQ: { q: string; a: string }[] = [
  {
    q: "What is India GCC Show?",
    a: "A two-day conference and expo in Bengaluru, on 8 and 9 June 2027, for Global Capability Centre leaders, parent-company executives and the solution providers who work with them. Expect keynotes, CXO panels, executive interviews, an expo floor and a VIP networking dinner.",
  },
  {
    q: "Who should attend?",
    a: "GCC heads and managing directors, plus senior leaders across technology, HR, operations, risk, product, workplace and sustainability. It's also built for companies that support GCCs, from setup advisors to technology and workspace providers.",
  },
  {
    q: "How much is a delegate pass?",
    a: "Pass details will be confirmed soon. Register your interest and you'll hear from us as soon as passes open.",
  },
  {
    q: "How do I exhibit or sponsor?",
    a: "Book a call with our team using the form below. We'll walk you through stands, pavilions and sponsorship options and help you pick what fits your goals.",
  },
  {
    q: "Where is the venue?",
    a: "The show takes place in Bengaluru, India. We'll announce the exact venue shortly, and everyone who registers interest will hear first.",
  },
  {
    q: "Can I nominate a speaker?",
    a: "Yes. Choose Speaker in the form below, or book a call, and tell us a little about the person and the topic they'd bring.",
  },
];

/* ------------------------------------------------------- Register interest */
export const REGISTER = {
  eyebrow: "Get involved",
  title: "Register your interest",
  body: "Tell us who you are and how you'd like to take part. Our team will get back to you with next steps.",
  promises: ["Early access when passes open", "First look at the speaker line-up", "Help choosing the right way to take part"],
} as const;
