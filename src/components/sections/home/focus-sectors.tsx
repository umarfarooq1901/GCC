import { SECTORS, THEMES } from "@/content/home";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";
import { pad2 } from "@/lib/utils";

/** Numbered sector cards (reference: londonbiotechshow.com "Key Focus Sectors"). */
export function FocusSectors() {
  return (
    <section aria-labelledby="sectors-title" className="relative bg-surface py-20 lg:py-28">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="Key focus sectors" title={<span id="sectors-title">Eight sectors where India&apos;s GCCs are shaping global business</span>} />
          <Reveal className="max-w-sm text-body lg:text-right">
            From banking cores to AI-ready data centres, these are the industries whose capability centres you&apos;ll meet in Bengaluru.
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SECTORS.map((s, i) => {
            const Icon = s.icon;
            return (
              <RevealItem key={s.title}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-line bg-white p-6 transition-all duration-500 ease-out-soft hover:-translate-y-1.5 hover:border-transparent hover:bg-navy hover:shadow-[0_30px_60px_-30px_rgba(10,33,76,0.7)]">
                  <span aria-hidden className="bg-tricolor absolute inset-x-0 top-0 h-1 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />
                  <div className="flex items-start justify-between">
                    <span className="grid size-12 place-items-center rounded-2xl bg-mist text-navy transition-colors duration-500 group-hover:bg-white/10 group-hover:text-saffron-400">
                      <Icon className="size-6" strokeWidth={1.7} />
                    </span>
                    <span className="font-display text-3xl font-extrabold text-line transition-colors duration-500 group-hover:text-white/20">{pad2(i + 1)}</span>
                  </div>
                  <h3 className="mt-6 text-lg leading-snug font-bold transition-colors duration-500 group-hover:text-white">{s.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed transition-colors duration-500 group-hover:text-white/75">{s.body}</p>
                </article>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <Reveal className="mt-12 rounded-3xl border border-line bg-white p-6 sm:p-8">
          <h3 className="font-display text-base font-bold text-navy">Themes running through every sector</h3>
          <ul className="mt-4 flex flex-wrap gap-3">
            {THEMES.map((t) => (
              <li key={t} className="rounded-full border border-azure/20 bg-mist px-4 py-2 text-sm font-medium text-navy">
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
