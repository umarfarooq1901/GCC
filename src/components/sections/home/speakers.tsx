import { UserRound } from "lucide-react";
import { SPEAKERS_INTRO } from "@/content/home";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

/**
 * Speaker teaser with the reference site's arched portrait frames. Speakers
 * are not confirmed yet, so the frames hold honest "announcing soon" slots.
 * When speakers land, map them into the same card markup.
 */
export function Speakers() {
  return (
    <section aria-labelledby="speakers-title" className="relative overflow-hidden bg-navy-radial py-20 lg:py-28">
      <div aria-hidden className="absolute inset-0 bg-[url('/images/banquet.webp')] bg-cover bg-center opacity-[0.07] mix-blend-luminosity" />
      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="font-display text-base font-semibold text-saffron-400">{SPEAKERS_INTRO.eyebrow}</p>
          <h2 id="speakers-title" className="mt-4 text-3xl leading-tight font-extrabold text-white sm:text-4xl lg:text-5xl">
            {SPEAKERS_INTRO.title}
          </h2>
          <p className="mt-5 text-lg text-white/75">{SPEAKERS_INTRO.body}</p>
        </Reveal>

        <RevealGroup className="mt-14 grid grid-cols-2 gap-5 lg:grid-cols-4 lg:gap-7">
          {Array.from({ length: SPEAKERS_INTRO.slots }).map((_, i) => (
            <RevealItem key={i}>
              <article className="group relative overflow-hidden rounded-t-[999px] rounded-b-[1.75rem] border border-white/15 bg-gradient-to-b from-white/12 to-white/[0.03] p-2">
                <div className="relative grid aspect-[4/5] place-items-center overflow-hidden rounded-t-[999px] rounded-b-[1.4rem] bg-gradient-to-b from-navy-600/70 to-navy-900">
                  <UserRound strokeWidth={1} className="size-2/3 translate-y-[14%] text-white/15 transition-transform duration-700 group-hover:scale-105" />
                  <span aria-hidden className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-[1.4s] group-hover:translate-x-full" />
                  <span className="absolute top-6 rounded-full bg-saffron px-3 py-1 font-display text-[0.7rem] font-bold tracking-wider text-white uppercase">
                    Coming soon
                  </span>
                </div>
                <div className="px-3 pt-4 pb-3 text-center">
                  <h3 className="text-base font-bold text-white sm:text-lg">Speaker to be announced</h3>
                  <p className="mt-1 text-sm text-white/60">Line-up reveal soon</p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-12 flex justify-center">
          <ButtonLink href={SPEAKERS_INTRO.cta.href} size="lg">
            {SPEAKERS_INTRO.cta.label}
          </ButtonLink>
        </Reveal>
      </Container>
    </section>
  );
}
