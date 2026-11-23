import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HIGHLIGHTS, type Highlight } from "@/content/home";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

const TINTS: Record<Highlight["tint"], string> = {
  navy: "from-navy via-navy/85",
  saffron: "from-saffron-600 via-saffron/85",
  azure: "from-[#0062b8] via-azure/85",
  leaf: "from-[#0b6e17] via-leaf/85",
};

/** Photo cards with a colour wash rising from the base (reference: both sites' "Event Highlights"). */
export function Highlights() {
  return (
    <section aria-labelledby="highlights-title" className="py-20 lg:py-28">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="The experience"
          title={<span id="highlights-title">What&apos;s on at India GCC Show</span>}
          description="Two days built around the conversations GCC leaders actually want to have, and the people they want to have them with."
        />

        <RevealGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HIGHLIGHTS.map((h) => (
            <RevealItem key={h.title}>
              <article className="group relative flex aspect-[4/5] flex-col justify-end overflow-hidden rounded-[1.75rem] shadow-[0_30px_60px_-35px_rgba(10,33,76,0.6)] sm:aspect-[5/6]">
                <Image
                  src={h.image}
                  alt={h.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-[1.2s] ease-out-soft group-hover:scale-110"
                />
                <div aria-hidden className={cn("absolute inset-0 bg-gradient-to-t to-transparent to-65%", TINTS[h.tint])} />
                <div className="relative p-7">
                  <h3 className="text-[1.65rem] leading-tight font-bold text-white">{h.title}</h3>
                  <p className="mt-3 leading-relaxed text-white/90">{h.body}</p>
                  <Link
                    href={h.cta.href}
                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-display text-sm font-semibold text-navy transition-all duration-300 hover:gap-3 hover:bg-mist"
                  >
                    {h.cta.label}
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
