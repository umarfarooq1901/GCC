"use client";

import Image from "next/image";
import { CalendarDays, Hourglass, MapPin } from "lucide-react";
import { EVENT, HEADER_PARTNERS } from "@/config/site";
import { useCountdown } from "@/hooks/use-countdown";
import { cn } from "@/lib/utils";

/**
 * Middle slot of the top bar. The reference site uses it for "Hosted By" /
 * "Title Sponsor" logos. Until our partners are confirmed (HEADER_PARTNERS is
 * empty) it shows the key event facts and a live countdown instead.
 */
export function HeaderEventStrip({ compact }: { compact: boolean }) {
  if (HEADER_PARTNERS.length > 0) return <PartnerStrip compact={compact} />;
  return <EventFacts compact={compact} />;
}

function EventFacts({ compact }: { compact: boolean }) {
  const t = useCountdown(EVENT.startsAt, 30_000);
  const items = [
    { icon: CalendarDays, label: "Dates", value: EVENT.dates },
    { icon: MapPin, label: "Location", value: EVENT.city },
    {
      icon: Hourglass,
      label: "Countdown",
      value: t ? (t.done ? "Happening now" : `${t.days} days ${t.hours} hrs to go`) : " ",
    },
  ];
  return (
    <ul className="flex items-center divide-x divide-line">
      {items.map(({ icon: Icon, label, value }) => (
        <li key={label} className="flex items-center gap-3 px-5 first:pl-0 last:pr-0 xl:px-7">
          <span
            className={cn(
              "grid shrink-0 place-items-center rounded-xl bg-mist text-navy transition-all duration-300",
              compact ? "size-8" : "size-10",
            )}
          >
            <Icon className={compact ? "size-4" : "size-[18px]"} strokeWidth={1.8} />
          </span>
          <span className="leading-tight">
            <span className="block text-[0.7rem] font-medium tracking-[0.14em] text-muted uppercase">{label}</span>
            <span className="block font-display text-sm font-semibold whitespace-nowrap text-navy">{value}</span>
          </span>
        </li>
      ))}
    </ul>
  );
}

function PartnerStrip({ compact }: { compact: boolean }) {
  return (
    <ul className="flex items-start gap-8">
      {HEADER_PARTNERS.map((group) => (
        <li key={group.label} className="flex flex-col items-center gap-1">
          <span className="text-xs text-muted">{group.label}</span>
          <span className="flex items-center gap-4">
            {group.logos.map((l) => (
              <Image key={l.src} src={l.src} alt={l.alt} width={l.width} height={l.height} className={cn("w-auto", compact ? "h-9" : "h-14")} />
            ))}
          </span>
        </li>
      ))}
    </ul>
  );
}
