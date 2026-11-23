import Link from "next/link";
import { CalendarDays, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { FOOTER_COLUMNS, LEGAL_LINKS } from "@/config/navigation";
import { interestLink } from "@/config/routes";
import { CONTACT, EVENT, SITE, SOCIAL_LINKS } from "@/config/site";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";
import { SocialIcon } from "@/components/shared/social-icons";
import { NewsletterForm } from "./newsletter-form";

/**
 * Footer modelled on the reference site: a light rounded card with four link
 * columns and a "Get In Touch" column, sitting on a curved brand-colour base
 * that carries the copyright and legal links.
 */
export function SiteFooter() {
  const socials = SOCIAL_LINKS.filter((s) => s.href);

  return (
    <footer className="relative overflow-hidden pt-16 lg:pt-24">
      {/* curved base band */}
      <div aria-hidden className="bg-navy-radial absolute inset-x-[-10%] bottom-0 h-56 rounded-t-[50%_100%] lg:h-64" />

      <Container wide className="relative">
        <div className="relative rounded-[1.75rem] border border-line bg-surface px-6 py-10 shadow-[0_30px_80px_-40px_rgba(10,33,76,0.35)] sm:px-10 lg:px-14 lg:py-14">
          <span aria-hidden className="bg-tricolor absolute inset-x-10 top-0 h-[3px] rounded-b-full" />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[repeat(4,minmax(0,1fr))_minmax(0,1.7fr)] lg:gap-8">
            {FOOTER_COLUMNS.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <h3 className="font-display text-sm font-bold tracking-[0.14em] text-saffron-600 uppercase">{col.title}</h3>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l) => (
                    <li key={l.href + l.label}>
                      <Link href={l.href} className="text-[0.95rem] text-body transition-colors hover:text-navy hover:underline hover:decoration-saffron hover:underline-offset-4">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <div className="sm:col-span-2 lg:col-span-1 lg:border-l lg:border-line lg:pl-10">
              <h3 className="font-display text-lg font-bold text-navy">Get In Touch</h3>
              <ul className="mt-4 space-y-2.5 text-[0.95rem]">
                <li className="flex items-center gap-3">
                  <Mail className="size-4 shrink-0 text-saffron-600" />
                  {CONTACT.email ? (
                    <a href={`mailto:${CONTACT.email}`} className="text-ink hover:text-navy">{CONTACT.email}</a>
                  ) : (
                    <span className="text-muted">Email to be announced</span>
                  )}
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="size-4 shrink-0 text-saffron-600" />
                  {CONTACT.phone ? (
                    <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="text-ink hover:text-navy">{CONTACT.phone}</a>
                  ) : (
                    <span className="text-muted">Phone to be announced</span>
                  )}
                </li>
                {CONTACT.whatsapp && (
                  <li className="flex items-center gap-3">
                    <MessageCircle className="size-4 shrink-0 text-saffron-600" />
                    <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noreferrer" className="text-ink hover:text-navy">Chat on WhatsApp</a>
                  </li>
                )}
              </ul>
              <ButtonLink href={interestLink("delegate")} size="md" className="mt-6">
                Request Call Back
              </ButtonLink>
              <NewsletterForm className="mt-8" />
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-8 border-t border-line pt-10 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-md">
              <Logo className="w-[220px] lg:w-[260px]" />
              <p className="mt-5 text-sm leading-relaxed text-body">
                A two-day conference and expo bringing GCC leaders, parent-company executives and the partners who help them grow into one room in Bengaluru.
              </p>
              {socials.length > 0 && (
                <div className="mt-5 flex gap-2.5">
                  {socials.map((s) => (
                    <a
                      key={s.network}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="grid size-10 place-items-center rounded-full border-2 border-saffron/70 text-navy transition hover:border-navy hover:bg-navy hover:text-white"
                    >
                      <SocialIcon network={s.network} className="size-4" />
                    </a>
                  ))}
                </div>
              )}
            </div>

            <dl className="grid grid-cols-1 gap-5 text-sm sm:grid-cols-2 lg:text-right">
              <div>
                <dt className="font-display font-bold text-navy">When</dt>
                <dd className="mt-1.5 inline-flex items-center gap-2 text-body lg:justify-end">
                  <CalendarDays className="size-4 text-saffron-600" /> {EVENT.dates}
                </dd>
              </div>
              <div>
                <dt className="font-display font-bold text-navy">Where</dt>
                <dd className="mt-1.5 inline-flex items-center gap-2 text-body lg:justify-end">
                  <MapPin className="size-4 text-saffron-600" /> {EVENT.venue ?? "Venue to be announced"}, {EVENT.city}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>

      <Container wide className="relative">
        <div className="flex flex-col items-center justify-between gap-4 py-8 text-sm text-white/85 sm:flex-row">
          <p>
            &copy; {SITE.copyrightYear} {SITE.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {LEGAL_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="font-medium text-white transition-colors hover:text-saffron-400">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
