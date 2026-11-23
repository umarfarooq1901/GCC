import { CheckCircle2 } from "lucide-react";
import { REGISTER } from "@/content/home";
import { INTEREST_ROLES } from "@/lib/validations/forms";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/motion/reveal";
import { RegisterInterestForm } from "./register-interest-form";

/** Every "enquiry" link on the site targets one of these anchors (see `interestLink`). */
const ANCHORS = ["register", ...INTEREST_ROLES.map((r) => `register-${r.value}`), "register-brochure"];

export function RegisterInterest() {
  return (
    <section aria-labelledby="register-title" className="bg-navy-radial relative overflow-hidden py-20 lg:py-28">
      {ANCHORS.map((id) => (
        <span key={id} id={id} aria-hidden className="absolute top-0" />
      ))}
      <div aria-hidden className="absolute -top-40 -right-40 size-[28rem] rounded-full bg-saffron/20 blur-3xl" />
      <div aria-hidden className="absolute -bottom-40 -left-40 size-[28rem] rounded-full bg-azure/25 blur-3xl" />

      <Container className="relative grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <p className="mb-4 inline-flex items-center gap-2.5 font-display text-xs font-bold tracking-[0.2em] text-saffron-400 uppercase sm:text-[0.8rem]">
            <span aria-hidden className="bg-tricolor h-[3px] w-8 rounded-full" />
            {REGISTER.eyebrow}
          </p>
          <h2 id="register-title" className="text-4xl font-extrabold text-white sm:text-5xl">
            {REGISTER.title}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-white/80">{REGISTER.body}</p>
          <ul className="mt-8 space-y-3">
            {REGISTER.promises.map((p) => (
              <li key={p} className="flex items-center gap-3 text-white/90">
                <CheckCircle2 className="size-5 shrink-0 text-saffron-400" />
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.12}>
          <RegisterInterestForm />
        </Reveal>
      </Container>
    </section>
  );
}
