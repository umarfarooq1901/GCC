import Image from "next/image";
import { BENGALURU } from "@/content/home";
import { Container } from "@/components/ui/container";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { pad2 } from "@/lib/utils";

/** Full-bleed city section (reference: rakisummit.com "Why Invest in Ras Al Khaimah"). */
export function WhyBengaluru() {
  return (
    <section aria-labelledby="bengaluru-title" className="relative isolate overflow-hidden py-20 lg:py-28">
      <Image src="/images/bengaluru.webp" alt="" fill sizes="100vw" className="animate-ken-burns -z-20 object-cover" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950/95 via-navy/85 to-navy/55" />
      <div aria-hidden className="bg-tricolor absolute inset-x-0 top-0 h-1" />

      <Container>
        <Reveal className="max-w-3xl">
          <p className="mb-4 inline-flex items-center gap-2.5 font-display text-xs font-bold tracking-[0.2em] text-saffron-400 uppercase sm:text-[0.8rem]">
            <span aria-hidden className="bg-tricolor h-[3px] w-8 rounded-full" />
            {BENGALURU.eyebrow}
          </p>
          <h2 id="bengaluru-title" className="text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">
            {BENGALURU.title}
          </h2>
          <p className="mt-6 text-xl leading-relaxed text-saffron-400 sm:text-2xl">{BENGALURU.lead}</p>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENGALURU.points.map((p, i) => (
            <RevealItem key={p.title}>
              <article className="h-full rounded-[1.5rem] border border-white/20 bg-white/[0.08] p-6 backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.14]">
                <span className="font-display text-sm font-bold text-saffron-400">{pad2(i + 1)}</span>
                <h3 className="mt-3 text-xl font-bold text-white">{p.title}</h3>
                <p className="mt-2 leading-relaxed text-white/75">{p.body}</p>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
