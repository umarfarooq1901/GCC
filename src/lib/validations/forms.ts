import { z } from "zod";

export const INTEREST_ROLES = [
  { value: "delegate", label: "Delegate" },
  { value: "exhibitor", label: "Exhibitor" },
  { value: "sponsor", label: "Sponsor" },
  { value: "speaker", label: "Speaker" },
  { value: "partner", label: "Partner or media" },
] as const;

export type InterestRole = (typeof INTEREST_ROLES)[number]["value"];

const roleValues = INTEREST_ROLES.map((r) => r.value) as [InterestRole, ...InterestRole[]];

const FREE_MAIL = /@(gmail|yahoo|hotmail|outlook|live|icloud|aol|proton(mail)?|rediffmail)\./i;

export const registerInterestSchema = z.object({
  fullName: z.string().trim().min(2, "Please enter your full name").max(120),
  email: z
    .string()
    .trim()
    .pipe(z.email("Please enter a valid email address"))
    .refine((v) => !FREE_MAIL.test(v), "Please use your work email"),
  company: z.string().trim().min(2, "Please enter your company").max(160),
  jobTitle: z.string().trim().min(2, "Please enter your job title").max(160),
  role: z.enum(roleValues, { message: "Please choose how you'd like to take part" }),
  wantsBrochure: z.boolean(),
  message: z.string().trim().max(1000),
  consent: z.boolean().refine((v) => v, "Please agree so we can contact you"),
});

export type RegisterInterestInput = z.infer<typeof registerInterestSchema>;

export const newsletterSchema = z.object({
  email: z.string().trim().pipe(z.email("Please enter a valid email address")),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;

export type ActionResult = { ok: true; message: string } | { ok: false; message: string; fieldErrors?: Record<string, string[]> };
