"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import type { NavItem } from "@/config/navigation";
import { cn } from "@/lib/utils";

interface NavDropdownProps {
  item: NavItem & { children: NonNullable<NavItem["children"]> };
  active: boolean;
  activeHref: string;
}

/**
 * Desktop dropdown. Opens on hover (with a short close delay so moving the
 * pointer into the panel never flickers), on click, and on keyboard focus.
 */
export function NavDropdown({ item, active, activeHref }: NavDropdownProps) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapRef = useRef<HTMLLIElement>(null);
  const panelId = useId();

  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  const scheduleClose = () => {
    cancelClose();
    closeTimer.current = setTimeout(() => setOpen(false), 160);
  };

  // Next.js keeps routes mounted (React Activity); make sure a dropdown is never restored open.
  useLayoutEffect(() => () => setOpen(false), []);
  useEffect(() => () => cancelClose(), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onClick = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  return (
    <li
      ref={wrapRef}
      className="relative"
      onPointerEnter={(e) => {
        if (e.pointerType !== "mouse") return;
        cancelClose();
        setOpen(true);
      }}
      onPointerLeave={(e) => e.pointerType === "mouse" && scheduleClose()}
      onBlur={(e) => {
        if (!wrapRef.current?.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen(true)}
        className={cn(
          "inline-flex h-11 items-center gap-1 px-3.5 text-[0.92rem] font-normal tracking-wide transition-colors xl:px-4",
          active || open ? "text-saffron-400" : "text-white hover:text-saffron-400",
        )}
      >
        {item.label}
        <ChevronDown aria-hidden className={cn("size-3.5 transition-transform duration-300", open && "rotate-180")} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-full left-1/2 z-50 w-72 -translate-x-1/2 pt-2"
          >
            <div className="relative overflow-hidden rounded-xl border border-line bg-white shadow-[0_24px_60px_-20px_rgba(10,33,76,0.45)]">
            <span aria-hidden className="bg-tricolor absolute inset-x-0 top-0 h-[3px]" />
            <ul className="py-2">

              {item.children.map((child) => {
                const current = child.href === activeHref;
                return (
                  <li key={child.href + child.label}>
                    <Link
                      href={child.href}
                      onNavigate={() => setOpen(false)}
                      onClick={() => setOpen(false)}
                      aria-current={current ? "page" : undefined}
                      className={cn(
                        "group/item relative flex items-center px-5 py-2.5 text-[0.92rem] transition-colors",
                        current ? "bg-mist text-navy" : "text-ink hover:bg-mist hover:text-navy",
                      )}
                    >
                      <span
                        aria-hidden
                        className={cn(
                          "absolute top-1/2 left-0 h-5 w-[3px] -translate-y-1/2 rounded-r bg-saffron transition-transform duration-200",
                          current ? "scale-y-100" : "scale-y-0 group-hover/item:scale-y-100",
                        )}
                      />
                      <span className="transition-transform duration-200 group-hover/item:translate-x-1">{child.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  );
}
