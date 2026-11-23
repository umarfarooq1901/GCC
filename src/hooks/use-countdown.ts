"use client";

import { useEffect, useState } from "react";

export interface CountdownParts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  done: boolean;
}

function diff(target: number): CountdownParts {
  const ms = Math.max(0, target - Date.now());
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor(ms / 3_600_000) % 24,
    minutes: Math.floor(ms / 60_000) % 60,
    seconds: Math.floor(ms / 1000) % 60,
    done: ms === 0,
  };
}

/**
 * Live countdown to an ISO date. Returns `null` until mounted so the server
 * render and the first client render match (no hydration mismatch, and no
 * `Date.now()` during prerendering).
 */
export function useCountdown(iso: string, tickMs = 1000): CountdownParts | null {
  const [parts, setParts] = useState<CountdownParts | null>(null);
  useEffect(() => {
    const target = new Date(iso).getTime();
    const update = () => setParts(diff(target));
    update();
    const id = setInterval(update, tickMs);
    return () => clearInterval(id);
  }, [iso, tickMs]);
  return parts;
}
