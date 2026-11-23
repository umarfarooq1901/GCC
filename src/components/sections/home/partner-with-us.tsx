import Link from "next/link";
import { ArrowUpRight, Megaphone, Mic2, Store } from "lucide-react";
import { PARTNER } from "@/content/home";
import { interestLink } from "@/config/routes";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { ButtonLink } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

const ICONS = [Megaphone, Store, Mic2];

/** Sponsor / Exhibit / Speak options and the partner logo wall (reference: "Trusted by Leading Brands"). */
export function PartnerWithUs() {
  return (
    <section aria-labelledby="partner-title" className="bg-cream py-20 lg:py-28">
      <Container>
        <SectionHeading eyebrow={PARTNER.eyebrow} title={<span id="partner-title">{PARTNER.title}</span>} />

        <RevealGroup className="mt-12 grid gap-5 md:grid-cols-3">
          {PARTNER.options.map((o, i) => {
            const Icon = ICONS[i];
            return (
              <RevealItem key={o.title}>
                <Link
                  href={o.href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-35px_rgba(10,33,76,0.6)]"
                >
                  <span aria-hidden className="bg-cta absolute -top-16 -right-16 size-40 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-25" />
                  <span className="grid size-14 place-items-center rounded-2xl bg-navy text-white">
                    <Icon className="size-6" strokeWidth={1.8} />
                  </span>
                  <h3 className="mt-6 text-2xl font-bold">{o.title}</h3>
                  <p className="mt-3 flex-1 leading-relaxed">{o.body}</p>
                  <span className="mt-6 inline-flex items-center gap-1.5 font-display font-semibold text-saffron-600">
                    {o.cta}
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <Reveal className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={interestLink("exhibitor")} size="lg">Book a call to exhibit</ButtonLink>
          <ButtonLink href={interestLink("sponsor")} variant="outline" size="lg">Book a call to sponsor</ButtonLink>
        </Reveal>

        <Reveal className="mt-20">
          <div className="text-center">
            <h3 className="font-display text-3xl font-bold sm:text-4xl">
              <span className="text-gradient">{PARTNER.logosTitle}</span>
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-body">{PARTNER.logosNote}</p>
          </div>
          <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {Array.from({ length: PARTNER.logoSlots }).map((_, i) => (
              <li key={i}>
                <Link
                  href={interestLink("partner")}
                  className="group grid h-28 place-items-center rounded-2xl border-2 border-dashed border-navy/15 bg-white/70 text-center transition-all hover:border-saffron hover:bg-white"
                >
                  <span className="font-display text-sm font-semibold text-muted transition-colors group-hover:text-saffron-600">
                    Your logo here
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
