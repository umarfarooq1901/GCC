"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import { Menu } from "lucide-react";
import { MAIN_NAV, REGISTER_CTA } from "@/config/navigation";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";
import { useScrolled } from "@/hooks/use-scrolled";
import { cn } from "@/lib/utils";
import { HeaderEventStrip } from "./header-event-strip";
import { NavDropdown } from "./nav-dropdown";
import { MobileMenu } from "./mobile-menu";

/**
 * Two-tier header, same anatomy as the reference site:
 *  1. White top bar: logo, partner/event strip, Register button.
 *  2. Brand-colour nav bar with centred links and dropdowns.
 * Both stay pinned; the top bar tightens up once the page scrolls.
 */
export function SiteHeader() {
  const pathname = usePathname();
  const scrolled = useScrolled(40);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeMobile = useCallback(() => setMobileOpen(false), []);

  const isActive = (href?: string, children?: { href: string }[]) =>
    href ? (href === "/" ? pathname === "/" : pathname.startsWith(href)) : !!children?.some((c) => c.href !== "/" && pathname.startsWith(c.href.split("#")[0]) && !c.href.startsWith("/#"));

  return (
    <>
      <header className="sticky top-0 z-50">
        {/* Tier 1: top bar */}
        <div className={cn("relative bg-white transition-shadow duration-300", scrolled && "shadow-[0_8px_30px_-18px_rgba(10,33,76,0.35)]")}>
          <Container wide className={cn("flex items-center justify-between gap-6 transition-[padding] duration-300", scrolled ? "py-2.5" : "py-3.5 lg:py-5")}>
            <Logo preload className={cn("transition-[width] duration-300", scrolled && "lg:w-[220px]")} />

            <div className="hidden min-w-0 lg:block">
              <HeaderEventStrip compact={scrolled} />
            </div>

            <div className="flex items-center gap-3">
              <ButtonLink href={REGISTER_CTA.href} size={scrolled ? "sm" : "md"} className="hidden sm:inline-flex lg:px-8">
                {REGISTER_CTA.label}
              </ButtonLink>
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                aria-expanded={mobileOpen}
                className="grid size-11 place-items-center rounded-xl bg-navy text-white transition-colors hover:bg-navy-700 lg:hidden"
              >
                <Menu className="size-5" />
              </button>
            </div>
          </Container>
        </div>

        {/* Tier 2: nav bar (desktop) */}
        <nav aria-label="Main" className="relative hidden bg-navy lg:block">
          <span aria-hidden className="bg-tricolor absolute inset-x-0 bottom-0 h-[2px] opacity-90" />
          <ul className="mx-auto flex max-w-7xl items-center justify-center px-4">
            {MAIN_NAV.map((item) =>
              item.children ? (
                <NavDropdown
                  key={item.label}
                  item={{ ...item, children: item.children }}
                  active={isActive(undefined, item.children)}
                  activeHref={pathname}
                />
              ) : (
                <li key={item.label}>
                  <Link
                    href={item.href!}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    className={cn(
                      "inline-flex h-11 items-center px-3.5 text-[0.92rem] tracking-wide transition-colors xl:px-4",
                      isActive(item.href) ? "text-saffron-400" : "text-white hover:text-saffron-400",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>
      </header>

      <MobileMenu open={mobileOpen} onClose={closeMobile} pathname={pathname} />
    </>
  );
}
