import { ArrowRight } from "lucide-react";
import { SHIFT } from "@/content/home";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { pad2 } from "@/lib/utils";

/** "Why India GCC Show": the from/to shift statements plus three reasons. */
export function ShiftSection() {
  return (
    <section aria-labelledby="shift-title" className="relative bg-cream py-20 lg:py-28">
      <Container className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading eyebrow={SHIFT.eyebrow} title={<span id="shift-title">{SHIFT.title}</span>} />
          <div className="mt-10 space-y-3">
            {SHIFT.shifts.map((s, i) => (
              <Reveal key={s.to} delay={0.1 * i}>
                <p className="group flex flex-wrap items-center gap-x-4 gap-y-1 rounded-2xl border border-line bg-white px-5 py-4 shadow-sm transition-colors hover:border-saffron/50">
                  <span className="text-sm font-medium tracking-wide text-muted uppercase">From</span>
                  <span className="font-display text-lg font-semibold text-muted line-through decoration-saffron/70 decoration-2">{s.from}</span>
                  <ArrowRight className="size-5 text-saffron transition-transform duration-300 group-hover:translate-x-1" />
                  <span className="font-display text-xl font-extrabold text-navy">{s.to}</span>
                </p>
              </Reveal>
            ))}
          </div>
        </div>

        <RevealGroup className="flex flex-col justify-center gap-5">
          {SHIFT.points.map((p, i) => (
            <RevealItem key={p.title}>
              <article className="flex gap-5 rounded-3xl bg-white p-6 shadow-[0_20px_50px_-35px_rgba(10,33,76,0.5)] sm:p-7">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-navy font-display text-base font-bold text-white ring-4 ring-mist">
                  {pad2(i + 1)}
                </span>
                <div>
                  <h3 className="text-xl font-bold">{p.title}</h3>
                  <p className="mt-2 leading-relaxed">{p.body}</p>
                </div>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </section>
  );
}
