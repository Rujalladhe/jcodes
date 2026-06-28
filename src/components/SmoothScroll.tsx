"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Smooth-scroll provider (Lenis).
 *
 * Lenis smooths the *real* window scroll position via requestAnimationFrame —
 * it does NOT transform a wrapper element the way Locomotive Scroll or GSAP
 * ScrollSmoother do. That matters here: the hero's pinned Spline robot, the HUD
 * beams, the header's scrolled state, and the RobotFrames choreography all read
 * `window.scrollY` / `getBoundingClientRect()` and rely on `position: fixed`.
 * Keeping native scroll position means every one of those keeps working as-is —
 * Lenis only removes the wheel jank.
 *
 * Mobile keeps native (already-smooth) touch scrolling: syncTouch defaults off.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Don't hijack scrolling for users who ask for reduced motion.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      lerp: 0.09, // lower = smoother/heavier glide
      smoothWheel: true,
      wheelMultiplier: 1,
      autoRaf: true, // Lenis drives its own rAF loop
      // In-page anchor links (#solutions, #token, …) scroll smoothly, offset by
      // the fixed header height so section headings aren't tucked under the nav.
      anchors: { offset: -80 },
    });

    return () => lenis.destroy();
  }, []);

  return <>{children}</>;
}
