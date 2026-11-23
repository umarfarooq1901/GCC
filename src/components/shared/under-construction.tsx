import Link from "next/link";
import { ChevronRight, Construction, Home } from "lucide-react";
import { ROUTES, interestLink, type RouteKey } from "@/config/routes";
import { EVENT } from "@/config/site";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { Ribbon } from "@/components/shared/ribbon";

const QUICK_LINKS: RouteKey[] = ["whyExhibit", "conference", "sponsors", "partners"];

/**
 * Shared placeholder for pages that are not built yet. Replace a page's
 * `<UnderConstruction routeKey=... />` with real content when it's ready and
 * flip its `status` to "live" in config/routes.ts.
 */
export function UnderConstruction({ routeKey }: { routeKey: RouteKey }) {
  const route = ROUTES[routeKey];
  const section = "section" in route ? route.section : undefined;

  return (
    <>
      <section className="bg-navy-radial relative overflow-hidden pt-16 pb-24 sm:pt-20 sm:pb-32">
        <Ribbon className="absolute right-0 bottom-0 h-40 w-[75%] opacity-70" />
        <Container className="relative">
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-white/70">
              <li>
                <Link href="/" className="inline-flex items-center gap-1.5 hover:text-white">
                  <Home className="size-4" /> Home
                </Link>
              </li>
              {section && (
                <li className="inline-flex items-center gap-1.5">
                  <ChevronRight className="size-3.5" /> {section}
                </li>
              )}
              <li className="inline-flex items-center gap-1.5 text-saffron-400">
                <ChevronRight className="size-3.5" /> {route.title}
              </li>
            </ol>
          </nav>
          <Reveal>
            <h1 className="mt-8 max-w-3xl text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl">{route.title}</h1>
            <p className="mt-5 max-w-2xl text-lg text-white/75">{route.description}</p>
          </Reveal>
        </Container>
      </section>

      <section className="relative -mt-14 pb-10">
        <Container>
          <Reveal className="relative overflow-hidden rounded-[1.75rem] border border-line bg-white p-8 shadow-[0_40px_90px_-50px_rgba(10,33,76,0.6)] sm:p-12">
            <span aria-hidden className="bg-tricolor absolute inset-x-0 top-0 h-1" />
            <div className="grid items-center gap-10 lg:grid-cols-[auto_1fr]">
              <div className="relative mx-auto">
                <span className="bg-cta animate-float grid size-28 place-items-center rounded-[2rem] text-white shadow-[0_30px_60px_-25px_rgba(232,134,20,0.8)]">
                  <Construction className="size-12" strokeWidth={1.6} />
                </span>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-display text-sm font-bold tracking-[0.2em] text-saffron-600 uppercase">Under construction</p>
                <h2 className="mt-3 text-2xl font-bold sm:text-3xl">We&apos;re building this page right now</h2>
                <p className="mx-auto mt-3 max-w-2xl text-body lg:mx-0">
                  It&apos;ll be ready well ahead of {EVENT.dates} in {EVENT.city.split(",")[0]}. In the meantime, register your interest and we&apos;ll keep you posted as new pages and announcements go live.
                </p>
                <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                  <ButtonLink href={interestLink("delegate")} size="lg">Register interest</ButtonLink>
                  <ButtonLink href="/" variant="outline" size="lg" arrow={false}>Back to home</ButtonLink>
                </div>
              </div>
            </div>

            <div className="mt-12 border-t border-line pt-8">
              <p className="text-center text-sm font-medium text-muted lg:text-left">You might be looking for</p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {QUICK_LINKS.filter((k) => k !== routeKey).slice(0, 4).map((k) => (
                  <li key={k}>
                    <Link href={ROUTES[k].path} className="group flex items-center justify-between rounded-2xl bg-surface px-5 py-4 font-display font-semibold text-navy transition hover:bg-mist">
                      {ROUTES[k].title}
                      <ChevronRight className="size-4 text-saffron-600 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
