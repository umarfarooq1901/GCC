"use server";

import { z } from "zod";
import {
  newsletterSchema,
  registerInterestSchema,
  type ActionResult,
  type NewsletterInput,
  type RegisterInterestInput,
} from "@/lib/validations/forms";

/**
 * Server actions for the public forms. Input is always re-validated on the
 * server with the same zod schema the client uses.
 *
 * TODO(integration): forward submissions to the CRM / email service once it is
 * chosen (e.g. HubSpot, Zoho, Resend). Until then they are only logged.
 */
export async function submitRegisterInterest(input: RegisterInterestInput): Promise<ActionResult> {
  const parsed = registerInterestSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, message: "Please check the highlighted fields.", fieldErrors: z.flattenError(parsed.error).fieldErrors };
  }

  console.info("[register-interest]", { ...parsed.data, receivedAt: new Date().toISOString() });

  const first = parsed.data.fullName.split(" ")[0];
  return { ok: true, message: `Thanks ${first}, we've got your details. Someone from our team will be in touch shortly.` };
}

export async function subscribeNewsletter(input: NewsletterInput): Promise<ActionResult> {
  const parsed = newsletterSchema.safeParse(input);
  if (!parsed.success) return { ok: false, message: parsed.error.issues[0]?.message ?? "Invalid email" };

  console.info("[newsletter]", { email: parsed.data.email, receivedAt: new Date().toISOString() });
  return { ok: true, message: "You're on the list. We'll send speaker and event news as it lands." };
}
