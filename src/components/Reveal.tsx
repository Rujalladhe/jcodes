"use client";

import { useEffect, useRef, useState } from "react";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /**
   * How far (px) the content starts below its resting place before sliding up.
   * Pass 0 for an opacity-only fade — required for scroll-choreographed sections
   * (sticky pins, or sections whose getBoundingClientRect() is read every frame),
   * where an animating ancestor transform would corrupt the scroll math.
   */
  y?: number;
  /** Delay before the reveal starts, in ms — used to stagger neighbouring blocks. */
  delay?: number;
  /** Reveal transition duration, in ms. */
  duration?: number;
}

/**
 * Scroll-reveal wrapper.
 *
 * Content starts hidden (faded + nudged down) and eases smoothly into place the
 * first time it enters the viewport — so text "comes in as you scroll" instead of
 * being pre-rendered and static. Pairs with the Lenis smooth scroll for a soft,
 * unhurried entrance.
 *
 * Reveal is one-shot (it never hides again) and honours `prefers-reduced-motion`,
 * showing content immediately for users who ask for less motion.
 */
export function Reveal({
  children,
  className,
  y = 32,
  delay = 0,
  duration = 900,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  // When true, content appears with no transition (reduced-motion / no IO).
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No motion (or no IO support): reveal at once, skip the animation. Deferred
    // a frame so we never call setState synchronously inside the effect body.
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      typeof IntersectionObserver === "undefined"
    ) {
      const raf = requestAnimationFrame(() => {
        setInstant(true);
        setShown(true);
      });
      return () => cancelAnimationFrame(raf);
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect(); // reveal once, then stop observing
        }
      },
      // Fire a touch before the block is fully on screen so it's already easing
      // in by the time it's properly in view.
      { rootMargin: "0px 0px -12% 0px", threshold: 0.04 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : `translateY(${y}px)`,
        transition: instant
          ? "none"
          : `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: shown ? "auto" : "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}
