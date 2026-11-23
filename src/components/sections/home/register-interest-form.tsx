"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, ChevronDown, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { submitRegisterInterest } from "@/server/actions/forms";
import { INTEREST_ROLES, registerInterestSchema, type InterestRole, type RegisterInterestInput } from "@/lib/validations/forms";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const HASH_PREFIX = "#register-";

/** Maps "#register-exhibitor" style hashes (see `interestLink`) to form values. */
function rolesFromHash(hash: string): { role: InterestRole; wantsBrochure: boolean } | null {
  if (!hash.startsWith(HASH_PREFIX)) return null;
  const key = hash.slice(HASH_PREFIX.length);
  if (key === "brochure") return { role: "exhibitor", wantsBrochure: true };
  const match = INTEREST_ROLES.find((r) => r.value === key);
  return match ? { role: match.value, wantsBrochure: false } : null;
}

const inputClass =
  "h-12 w-full rounded-xl border bg-white px-4 text-[0.95rem] text-ink outline-none transition placeholder:text-muted/70 focus:border-azure focus:ring-4 focus:ring-azure/15";

export function RegisterInterestForm() {
  const [result, setResult] = useState<{ ok: boolean; message: string } | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<RegisterInterestInput>({
    resolver: zodResolver(registerInterestSchema),
    defaultValues: { fullName: "", email: "", company: "", jobTitle: "", role: "delegate", wantsBrochure: false, message: "", consent: false },
  });

  // Preselect "I am a" from enquiry links. Same-page hash links in Next.js use
  // pushState (no `hashchange` event), so we also watch link clicks directly.
  useEffect(() => {
    const apply = (hash: string) => {
      const v = rolesFromHash(hash);
      if (!v) return;
      setValue("role", v.role);
      setValue("wantsBrochure", v.wantsBrochure);
      setResult(null);
    };
    apply(window.location.hash);
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a");
      if (a && a.hash.startsWith(HASH_PREFIX) && a.pathname === window.location.pathname) apply(a.hash);
    };
    const onHash = () => apply(window.location.hash);
    document.addEventListener("click", onClick, true);
    window.addEventListener("hashchange", onHash);
    return () => {
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("hashchange", onHash);
    };
  }, [setValue]);

  const onSubmit = handleSubmit(async (values) => {
    setResult(null);
    const res = await submitRegisterInterest(values);
    if (!res.ok && res.fieldErrors) {
      for (const [field, msgs] of Object.entries(res.fieldErrors)) {
        if (msgs?.[0]) setError(field as keyof RegisterInterestInput, { message: msgs[0] });
      }
    }
    setResult(res);
    if (res.ok) reset();
  });

  return (
    <div className="relative rounded-[1.75rem] bg-white p-6 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.6)] sm:p-9">
      <AnimatePresence mode="wait">
        {result?.ok ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex min-h-[420px] flex-col items-center justify-center text-center"
          >
            <span className="grid size-16 place-items-center rounded-full bg-leaf/10 text-leaf">
              <CheckCircle2 className="size-9" />
            </span>
            <h3 className="mt-6 text-2xl font-bold">You&apos;re on our list</h3>
            <p className="mt-3 max-w-sm text-body">{result.message}</p>
            <Button variant="outline" arrow={false} className="mt-8" onClick={() => setResult(null)}>
              Submit another response
            </Button>
          </motion.div>
        ) : (
          <motion.form key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
            <Field label="Full name" error={errors.fullName?.message} id="ri-name">
              <input id="ri-name" autoComplete="name" placeholder="Your name" className={cn(inputClass, errors.fullName ? "border-saffron-600" : "border-line")} {...register("fullName")} />
            </Field>
            <Field label="Work email" error={errors.email?.message} id="ri-email">
              <input id="ri-email" type="email" autoComplete="email" placeholder="name@company.com" className={cn(inputClass, errors.email ? "border-saffron-600" : "border-line")} {...register("email")} />
            </Field>
            <Field label="Company" error={errors.company?.message} id="ri-company">
              <input id="ri-company" autoComplete="organization" placeholder="Company name" className={cn(inputClass, errors.company ? "border-saffron-600" : "border-line")} {...register("company")} />
            </Field>
            <Field label="Job title" error={errors.jobTitle?.message} id="ri-title">
              <input id="ri-title" autoComplete="organization-title" placeholder="Your role" className={cn(inputClass, errors.jobTitle ? "border-saffron-600" : "border-line")} {...register("jobTitle")} />
            </Field>
            <Field label="I am a" error={errors.role?.message} id="ri-role" className="sm:col-span-2">
              <div className="relative">
                <select id="ri-role" className={cn(inputClass, "appearance-none pr-10", errors.role ? "border-saffron-600" : "border-line")} {...register("role")}>
                  {INTEREST_ROLES.map((r) => (
                    <option key={r.value} value={r.value}>
                      {r.label}
                    </option>
                  ))}
                </select>
                <ChevronDown className="pointer-events-none absolute top-1/2 right-4 size-4 -translate-y-1/2 text-muted" />
              </div>
            </Field>
            <Field label="Anything you'd like us to know? (optional)" error={errors.message?.message} id="ri-msg" className="sm:col-span-2">
              <textarea id="ri-msg" rows={3} placeholder="Topics, stand size, sponsorship goals..." className={cn(inputClass, "h-auto resize-none py-3", "border-line")} {...register("message")} />
            </Field>

            <div className="space-y-3 sm:col-span-2">
              <label className="flex items-start gap-3 text-sm text-body">
                <input type="checkbox" className="mt-0.5 size-4 shrink-0 accent-navy" {...register("wantsBrochure")} />
                Send me the exhibitor and sponsor brochure
              </label>
              <label className="flex items-start gap-3 text-sm text-body">
                <input type="checkbox" className="mt-0.5 size-4 shrink-0 accent-navy" {...register("consent")} />
                I&apos;m happy for the India GCC Show team to contact me about the event.
              </label>
              {errors.consent?.message && <p className="text-xs text-saffron-600">{errors.consent.message}</p>}
            </div>

            <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
              <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
                {isSubmitting ? <Loader2 className="size-5 animate-spin" /> : null}
                {isSubmitting ? "Sending" : "Register interest"}
              </Button>
              {result && !result.ok && (
                <p role="alert" className="text-sm text-saffron-600">
                  {result.message}
                </p>
              )}
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({ label, error, id, className, children }: { label: string; error?: string; id: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-ink">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-saffron-600">{error}</p>}
    </div>
  );
}
