"use client";

import { useEffect, useRef, useState } from "react";
import { robotFrames, startLoadingFrames, subscribeFrames } from "./robotFrameCache";

/**
 * The single ChainGPT "cube" robot — one pinned, viewport-centered instance that
 * serves the whole page (declared once, fixed, so it stays put while everything
 * scrolls). It is present during the hero, hidden while the Product/Awards
 * sections pass, then reappears centered in the "Our Solutions" section, exactly
 * where each solution panel's center column sits. Throughout, the playhead
 * scrubs through the pre-rendered frames so the cube rotates as you scroll.
 */

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));

// How hard each frame eases toward the scroll target. Lower = smoother/floatier.
const SMOOTH = 0.1;

export function RobotFrames() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const progress = useRef(0);
  const opacity = useRef(1);
  const frameF = useRef(0); // eased (fractional) playhead, lerped toward target
  const opacityF = useRef(0); // eased opacity
  const drawn = useRef(-1);
  const drawnOpacity = useRef(-1);
  const [ready, setReady] = useState(robotFrames.length > 0);

  // Begin (or join) the shared frame load.
  useEffect(() => {
    startLoadingFrames();
    if (robotFrames.length > 0) setReady(true);
    const unsub = subscribeFrames(() => {
      if (robotFrames.length > 0) setReady(true);
      drawn.current = -1; // a new frame may change which index we should show
    });
    return unsub;
  }, []);

  // Scroll → frame index + opacity, painted on a rAF loop (repaints on change).
  useEffect(() => {
    if (!ready) return;
    let raf = 0;

    // The cube belongs to the Solutions panels only. The cube sits at the vertical
    // center of the viewport, so it shows frame 1 when the first panel (ChainGPT
    // Chatbot) reaches center and the last frame when the final panel does — and
    // it's hidden everywhere above (hero) and below (after the panels).
    const compute = () => {
      const vh = window.innerHeight || 1;
      const panels = document.getElementById("solution-panels");
      const first = panels?.firstElementChild as HTMLElement | null;
      const last = panels?.lastElementChild as HTMLElement | null;
      if (!panels || !first || !last) {
        opacity.current = 0;
        return;
      }
      const fr = first.getBoundingClientRect();
      const lr = last.getBoundingClientRect();
      const ref = vh * 0.5; // the cube's vertical line (viewport center)

      // Frame scrub: 0 when the first panel's center is at the cube line, 1 at the last.
      const firstCenter = fr.top + fr.height / 2;
      const lastCenter = lr.top + lr.height / 2;
      const denom = lastCenter - firstCenter || 1;
      progress.current = clamp01((ref - firstCenter) / denom);

      // Visible from when the first panel reaches center through the last panel.
      const fadeIn = clamp01((vh - fr.top) / (vh * 0.5));
      const fadeOut = clamp01(lr.bottom / (vh * 0.5));
      opacity.current = Math.min(fadeIn, fadeOut);
    };

    const onResize = () => {
      drawn.current = -1;
      compute();
    };

    const draw = (idx: number) => {
      const canvas = canvasRef.current;
      const seq = robotFrames;
      if (!canvas || !seq.length) return;
      idx = Math.max(0, Math.min(seq.length - 1, idx));
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const cw = canvas.clientWidth;
      const ch = canvas.clientHeight;
      if (cw === 0 || ch === 0) return;
      const bw = Math.round(cw * dpr);
      const bh = Math.round(ch * dpr);
      if (canvas.width !== bw || canvas.height !== bh) {
        canvas.width = bw;
        canvas.height = bh;
        drawn.current = -1;
      }
      if (idx === drawn.current) return;
      drawn.current = idx;
      const ctx = canvas.getContext("2d")!;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, cw, ch);
      const f = seq[idx];
      const scale = Math.min(cw / f.width, ch / f.height);
      const dw = f.width * scale;
      const dh = f.height * scale;
      ctx.drawImage(f, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
    };

    const tick = () => {
      const n = robotFrames.length;
      if (n) {
        // Ease the fractional playhead toward the scroll target so the rotation
        // glides instead of snapping frame-to-frame — this is what makes it smooth.
        const target = progress.current * (n - 1);
        frameF.current += (target - frameF.current) * SMOOTH;
        if (Math.abs(target - frameF.current) < 0.01) frameF.current = target;
        draw(Math.round(frameF.current));
      }
      const canvas = canvasRef.current;
      if (canvas) {
        const to = opacity.current;
        opacityF.current += (to - opacityF.current) * SMOOTH;
        if (Math.abs(to - opacityF.current) < 0.002) opacityF.current = to;
        if (Math.abs(opacityF.current - drawnOpacity.current) > 0.001) {
          drawnOpacity.current = opacityF.current;
          canvas.style.opacity = opacityF.current.toFixed(3);
        }
      }
      raf = requestAnimationFrame(tick);
    };

    compute();
    window.addEventListener("scroll", compute, { passive: true });
    window.addEventListener("resize", onResize);
    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", compute);
      window.removeEventListener("resize", onResize);
    };
  }, [ready]);

  return <canvas ref={canvasRef} className="h-full w-full" style={{ pointerEvents: "none" }} />;
}
