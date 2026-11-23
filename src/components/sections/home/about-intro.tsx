import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ABOUT_INTRO } from "@/content/home";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { Ribbon } from "@/components/shared/ribbon";

/** Split intro: copy on the left, photo and two partner slots on the right (reference: rakisummit.com). */
export function AboutIntro() {
  return (
    <section aria-labelledby="about-title" className="relative overflow-hidden py-20 lg:py-28">
      <Ribbon className="absolute right-0 bottom-0 h-48 w-[70%] opacity-80 sm:h-64" />

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
        <div>
          <Reveal>
            <p className="mb-4 inline-flex items-center gap-2.5 font-display text-xs font-bold tracking-[0.2em] text-saffron-600 uppercase sm:text-[0.8rem]">
              <span aria-hidden className="bg-tricolor h-[3px] w-8 rounded-full" />
              {ABOUT_INTRO.eyebrow}
            </p>
            <h2 id="about-title" className="text-[2rem] leading-[1.1] font-extrabold sm:text-5xl lg:text-[3.2rem]">
              <span className="text-ink">{ABOUT_INTRO.titleLead} </span>
              <span className="text-gradient-warm">{ABOUT_INTRO.titleHighlight}</span>
            </h2>
          </Reveal>
          <div className="mt-8 max-w-xl space-y-5 text-[1.05rem] leading-relaxed">
            {ABOUT_INTRO.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.08 * (i + 1)}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.3} className="mt-10">
            <ButtonLink href={ABOUT_INTRO.cta.href} size="lg">
              {ABOUT_INTRO.cta.label}
            </ButtonLink>
          </Reveal>
        </div>

        <div>
          <Reveal direction="left">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] rounded-bl-[5rem] shadow-[0_40px_80px_-40px_rgba(10,33,76,0.55)]">
              <Image
                src="/images/about-audience.webp"
                alt="Delegates listening to a session at a business conference"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
              <div aria-hidden className="absolute inset-0 bg-gradient-to-tr from-navy/40 via-transparent to-transparent" />
            </div>
          </Reveal>

          <RevealGroup className="mt-6 grid gap-5 sm:grid-cols-2">
            {ABOUT_INTRO.slots.map((s) => (
              <RevealItem key={s.label}>
                <Link
                  href={s.href}
                  className="group relative flex h-full flex-col rounded-3xl border-2 border-saffron/60 bg-white p-6 text-center shadow-[0_24px_50px_-28px_rgba(232,134,20,0.55)] transition-all duration-300 hover:-translate-y-1 hover:border-saffron"
                >
                  <span className="text-sm font-medium tracking-wide text-muted">{s.label}</span>
                  <span className="mt-3 font-display text-lg font-bold text-navy">Open for 2027</span>
                  <span className="mt-2 text-sm leading-relaxed text-body">{s.body}</span>
                  <span className="mt-4 inline-flex items-center justify-center gap-1 font-display text-sm font-semibold text-saffron-600">
                    Enquire
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
