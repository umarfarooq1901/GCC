"use client";

import { useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

/**
 * Background loop for the hero. Swap HERO_VIDEO for real event footage when
 * it exists. Pauses for visitors who prefer reduced motion.
 * Stock clip: Mixkit "Audience raise hands at business conference" (Mixkit free licence).
 */
const HERO_VIDEO = "/videos/hero.mp4";
const HERO_POSTER = "/images/hero-poster.webp";

export function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (reduce) v.pause();
    else v.play().catch(() => {});
  }, [reduce]);

  return (
    <video
      ref={ref}
      className="absolute inset-0 size-full scale-105 object-cover"
      src={HERO_VIDEO}
      poster={HERO_POSTER}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden
    />
  );
}
