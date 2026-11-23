import { Check } from "lucide-react";
import { AUDIENCE, EXHIBITOR_PROFILE } from "@/content/home";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Marquee } from "@/components/ui/marquee";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

/** Who attends (six leadership groups) + who exhibits as a moving pill ticker (reference: "Visitor Profile"). */
export function Audience() {
  const half = Math.ceil(EXHIBITOR_PROFILE.length / 2);
  const rows = [EXHIBITOR_PROFILE.slice(0, half), EXHIBITOR_PROFILE.slice(half)];

  return (
    <section aria-labelledby="audience-title" className="overflow-hidden py-20 lg:py-28">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Who attends"
          title={<span id="audience-title">Senior decision makers from six leadership groups</span>}
        />

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {AUDIENCE.map((g) => {
            const Icon = g.icon;
            return (
              <RevealItem key={g.title}>
                <article className="group h-full rounded-[1.5rem] border border-line bg-white p-7 shadow-[0_20px_50px_-40px_rgba(10,33,76,0.6)] transition-all duration-300 hover:-translate-y-1 hover:border-saffron/40 hover:shadow-[0_30px_60px_-35px_rgba(232,134,20,0.5)]">
                  <div className="flex items-center gap-4">
                    <span className="bg-cta grid size-12 shrink-0 place-items-center rounded-2xl text-white shadow-md">
                      <Icon className="size-6" strokeWidth={1.8} />
                    </span>
                    <div>
                      <p className="text-[0.7rem] font-bold tracking-[0.16em] text-saffron-600 uppercase">{g.eyebrow}</p>
                      <h3 className="text-xl font-bold">{g.title}</h3>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-2.5">
                    {g.roles.map((r) => (
                      <li key={r} className="flex items-start gap-2.5 text-[0.95rem]">
                        <Check className="mt-0.5 size-4 shrink-0 text-leaf" strokeWidth={2.5} />
                        {r}
                      </li>
                    ))}
                  </ul>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>

      <Reveal className="mt-20">
        <h3 className="px-4 text-center font-display text-2xl font-bold sm:text-3xl">
          <span className="text-gradient">Who should exhibit or sponsor</span>
        </h3>
        <div className="mt-10 space-y-5">
          {rows.map((row, i) => (
            <Marquee key={i} reverse={i % 2 === 1} duration={38 + i * 6}>
              {[...row, ...row].map(({ label, icon: Icon }, j) => (
                <span
                  key={`${label}-${j}`}
                  className="inline-flex items-center gap-3 rounded-full border border-saffron/20 bg-saffron/[0.08] px-6 py-3.5 font-display text-[0.95rem] font-semibold whitespace-nowrap text-navy sm:text-base"
                >
                  <Icon className="size-5 text-saffron-600" strokeWidth={1.8} />
                  {label}
                </span>
              ))}
            </Marquee>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
