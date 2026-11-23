import { CalendarDays, MapPin } from "lucide-react";
import { EVENT, STATS } from "@/config/site";
import { HERO } from "@/content/home";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { CountUp } from "@/components/motion/count-up";
import { HeroVideo } from "./hero-video";

/**
 * Full-bleed video hero (reference: rakisummit.com) with the date/venue chip
 * and headline stat strip from londonbiotechshow.com.
 */
export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate flex min-h-[calc(100svh-4.5rem)] flex-col overflow-hidden bg-navy-950 lg:min-h-[calc(100svh-9.5rem)]">
      <HeroVideo />
      {/* brand overlay: navy body, azure glow, saffron warmth at the base */}
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy/75 to-navy-950/95" />
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(60%_50%_at_80%_20%,rgba(0,127,232,0.35),transparent_70%),radial-gradient(50%_40%_at_10%_100%,rgba(232,134,20,0.28),transparent_70%)]" />
      <div aria-hidden className="bg-tricolor absolute inset-x-0 bottom-0 h-1" />

      <Container className="relative flex flex-1 flex-col items-center justify-center pt-14 pb-10 text-center sm:pt-20">
        <Reveal>
          <p className="inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 font-display text-sm font-semibold text-white shadow-lg backdrop-blur-md sm:text-base">
            <span className="inline-flex items-center gap-2">
              <CalendarDays className="size-4 text-saffron-400" />
              {EVENT.datesLong}
            </span>
            <span aria-hidden className="hidden h-4 w-px bg-white/40 sm:block" />
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-saffron-400" />
              {EVENT.city}
            </span>
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-8 font-display text-sm font-bold tracking-[0.28em] text-saffron-400 uppercase">{HERO.kicker}</p>
        </Reveal>
        <Reveal delay={0.14}>
          <h1 id="hero-title" className="mx-auto mt-4 max-w-5xl font-display text-[2.35rem] leading-[1.06] font-extrabold text-white sm:text-5xl lg:text-[4.1rem]">
            {HERO.title}
          </h1>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-3xl font-sans text-xl text-white/95 italic sm:text-2xl">{HERO.tagline}</p>
        </Reveal>
        <Reveal delay={0.26}>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">{HERO.intro}</p>
        </Reveal>
        <Reveal delay={0.32} className="mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
          {HERO.ctas.map((c) => (
            <ButtonLink key={c.label} href={c.href} variant={c.variant} size="lg" className="w-full sm:w-auto sm:min-w-44">
              {c.label}
            </ButtonLink>
          ))}
        </Reveal>
      </Container>

      {/* expected numbers */}
      <Container className="relative pb-8 sm:pb-12">
        <Reveal delay={0.4}>
          <div className="rounded-3xl border border-white/15 bg-white/[0.07] p-2 backdrop-blur-md">
            <p className="pt-3 pb-1 text-center text-[0.7rem] font-semibold tracking-[0.22em] text-white/60 uppercase">
              Expected at India GCC Show 2027
            </p>
            <dl className="grid grid-cols-2 lg:grid-cols-4">
              {STATS.map((s, i) => (
                <div key={s.label} className={`flex flex-col-reverse px-4 py-4 text-center sm:py-5 ${i % 2 === 1 ? "border-l border-white/15" : ""} ${i === 2 ? "lg:border-l lg:border-white/15" : ""}`}>
                  <dt className="mt-1 text-sm text-white/70">{s.label}</dt>
                  <dd className="font-display text-3xl font-extrabold text-white sm:text-4xl">
                    <CountUp value={s.value} suffix={s.suffix} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
