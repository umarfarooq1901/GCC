"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { CalendarDays, ChevronDown, MapPin, X } from "lucide-react";
import { useEffect, useState } from "react";
import { MAIN_NAV, REGISTER_CTA } from "@/config/navigation";
import { EVENT, SOCIAL_LINKS } from "@/config/site";
import { ButtonLink } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";
import { SocialIcon } from "@/components/shared/social-icons";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  pathname: string;
}

/**
 * Full-screen mobile navigation. Rendered as a sibling of <header>, never
 * inside it, so a transformed/blurred header can never trap this fixed panel.
 */
export function MobileMenu({ open, onClose, pathname }: MobileMenuProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const socials = SOCIAL_LINKS.filter((s) => s.href);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] lg:hidden"
        >
          <button aria-label="Close menu" className="absolute inset-0 bg-navy-950/50" onClick={onClose} />
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-white shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <Logo className="w-[170px]" href={null} />
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="grid size-11 place-items-center rounded-xl bg-mist text-navy transition-colors hover:bg-navy hover:text-white"
              >
                <X className="size-5" />
              </button>
            </div>

            <div className="bg-navy-radial flex items-center gap-5 px-5 py-3 text-sm text-white/90">
              <span className="inline-flex items-center gap-2">
                <CalendarDays className="size-4 text-saffron-400" /> {EVENT.dates}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="size-4 text-saffron-400" /> {EVENT.city}
              </span>
            </div>

            <ul className="flex-1 overflow-y-auto px-3 py-3">
              {MAIN_NAV.map((item, i) => {
                const isOpen = expanded === item.label;
                return (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 + i * 0.035, duration: 0.35 }}
                    className="border-b border-line/70 last:border-0"
                  >
                    {item.children ? (
                      <>
                        <button
                          onClick={() => setExpanded(isOpen ? null : item.label)}
                          aria-expanded={isOpen}
                          className="flex w-full items-center justify-between px-3 py-4 font-display text-[1.05rem] font-semibold text-ink"
                        >
                          {item.label}
                          <ChevronDown className={cn("size-5 text-muted transition-transform duration-300", isOpen && "rotate-180 text-saffron")} />
                        </button>
                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                              className="overflow-hidden"
                            >
                              {item.children.map((child) => (
                                <li key={child.href + child.label}>
                                  <Link
                                    href={child.href}
                                    onNavigate={onClose}
                                    onClick={onClose}
                                    className={cn(
                                      "ml-3 block border-l-2 py-2.5 pr-3 pl-4 text-[0.95rem] transition-colors",
                                      pathname === child.href ? "border-saffron text-navy" : "border-line text-body hover:border-saffron hover:text-navy",
                                    )}
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              ))}
                              <li className="h-3" />
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href!}
                        onNavigate={onClose}
                        onClick={onClose}
                        className={cn(
                          "block px-3 py-4 font-display text-[1.05rem] font-semibold",
                          pathname === item.href ? "text-saffron-600" : "text-ink",
                        )}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.li>
                );
              })}
            </ul>

            <div className="space-y-4 border-t border-line p-5">
              <ButtonLink href={REGISTER_CTA.href} onNavigate={onClose} onClick={onClose} size="lg" className="w-full">
                Register your interest
              </ButtonLink>
              {socials.length > 0 && (
                <div className="flex justify-center gap-3">
                  {socials.map((s) => (
                    <a key={s.network} href={s.href} target="_blank" rel="noreferrer" aria-label={s.label} className="grid size-10 place-items-center rounded-full border border-line text-navy hover:bg-navy hover:text-white">
                      <SocialIcon network={s.network} className="size-4" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
