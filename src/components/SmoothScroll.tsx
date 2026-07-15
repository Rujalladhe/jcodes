"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Smooth-scroll provider (Lenis) + GSAP ScrollTrigger bridge.
 *
 * Lenis smooths the *real* window scroll position via requestAnimationFrame —
 * it does NOT transform a wrapper element the way Locomotive Scroll or GSAP
 * ScrollSmoother do. That matters here: the hero's pinned Spline robot, the HUD
 * beams, the header's scrolled state, and the scroll-scrubbed robot video all
 * read `window.scrollY` / `getBoundingClientRect()` and rely on `position:
 * fixed`. Keeping native scroll position means every one of those keeps working
 * as-is — Lenis only removes the wheel jank.
 *
 * The GSAP bridge below is the canonical Lenis↔ScrollTrigger integration: GSAP's
 * ticker drives Lenis' rAF (single loop, no drift) and every Lenis scroll frame
 * calls ScrollTrigger.update(), so scrubbed timelines (the SolutionRobotVideo
 * frame sequence) track the eased scroll position 1:1 — buttery smooth scrub.
 *
 * Mobile keeps native (already-smooth) touch scrolling: syncTouch defaults off.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Don't hijack scrolling for users who ask for reduced motion. ScrollTrigger
    // still works off the native scroll position, so scrubbed effects degrade
    // gracefully — they just aren't eased.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      lerp: 0.09, // lower = smoother/heavier glide
      smoothWheel: true,
      wheelMultiplier: 1,
      autoRaf: false, // GSAP's ticker drives the loop instead (see below)
      // In-page anchor links (#solutions, #token, …) scroll smoothly, offset by
      // the fixed header height so section headings aren't tucked under the nav.
      anchors: { offset: -80 },
    });

    // Keep ScrollTrigger in lock-step with Lenis' eased scroll position.
    lenis.on("scroll", ScrollTrigger.update);

    // One rAF loop for both: feed GSAP's ticker time (seconds) to Lenis (ms).
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(raf);
      lenis.off("scroll", ScrollTrigger.update);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
