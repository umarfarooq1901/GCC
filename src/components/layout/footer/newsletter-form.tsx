"use client";

import { useState, useTransition } from "react";
import { Check, Loader2, Send } from "lucide-react";
import { subscribeNewsletter } from "@/server/actions/forms";
import { cn } from "@/lib/utils";

export function NewsletterForm({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<{ ok: boolean; message: string } | null>(null);
  const [pending, startTransition] = useTransition();

  return (
    <form
      className={cn("w-full", className)}
      onSubmit={(e) => {
        e.preventDefault();
        startTransition(async () => {
          const res = await subscribeNewsletter({ email });
          setState(res);
          if (res.ok) setEmail("");
        });
      }}
    >
      <label htmlFor="newsletter-email" className="mb-2 block text-sm font-medium text-ink">
        Subscribe for speaker and event updates
      </label>
      <div className="flex gap-2">
        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          autoComplete="email"
          className="h-12 min-w-0 flex-1 rounded-xl border border-line bg-white px-4 text-sm text-ink outline-none transition focus:border-azure focus:ring-4 focus:ring-azure/15"
        />
        <button
          type="submit"
          disabled={pending}
          aria-label="Subscribe"
          className="bg-cta inline-flex h-12 shrink-0 items-center gap-2 rounded-xl px-4 font-display text-sm font-semibold text-white transition hover:brightness-105 disabled:opacity-70"
        >
          {pending ? <Loader2 className="size-4 animate-spin" /> : state?.ok ? <Check className="size-4" /> : <Send className="size-4" />}
          <span className="hidden sm:inline">Subscribe</span>
        </button>
      </div>
      <p role="status" aria-live="polite" className={cn("mt-2 min-h-5 text-xs", state?.ok ? "text-leaf" : "text-saffron-600")}>
        {state?.message}
      </p>
    </form>
  );
}
