"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-scrubbed robot "video" for the Our Products / Solutions section.
 *
 * The source is a 271-frame image sequence (`/ezgif-frames/ezgif-frame-NNN.jpg`,
 * a 3D robot building up a red HUD interface on a **pure-black** background).
 *
 * Blending it into the page: the page bg is `#0a090f` (a tinted near-black), not
 * pure `#000`, so the raw frames read as a darker rectangle with hard edges. We
 * can't fix that with `mix-blend-mode` because this canvas is pinned inside a
 * `position: fixed` wrapper, and a fixed element always forms an isolated
 * stacking context — the blend has no page backdrop to act on. So instead we key
 * the black out *in the pixels*: each frame is composited once at load into an
 * offscreen canvas where alpha is driven by `max(r,g,b)` (a soft ramp from
 * transparent black → opaque). That keeps the red glow and white highlights
 * intact while the background becomes genuinely see-through, so the robot
 * composites cleanly over whatever page color sits behind it — no box, no edges.
 *
 * Playback: GSAP ScrollTrigger scrubs the playhead across the Solutions panels'
 * travel through the viewport; `scrub` eases it, and because Lenis drives
 * ScrollTrigger (see SmoothScroll) the reveal glides frame-to-frame as you scroll.
 */

const SRC_FRAMES = 271;
const STEP = 3; // sample every 3rd source frame → ~91 keyed frames (memory ⇄ smoothness)
const MAX_DIM = 1280; // native frame size — full 720p sharpness, no upscaling blur
// Alpha ramp on max(r,g,b): fully transparent at/below LO, fully opaque at/above
// HI. LO clears JPEG "mosquito" noise around the subject; the ramp softens edges.
const KEY_LO = 16;
const KEY_HI = 48;

const SRC_INDICES: number[] = [];
for (let i = 0; i < SRC_FRAMES; i += STEP) SRC_INDICES.push(i);
const FRAME_COUNT = SRC_INDICES.length;

const frameSrc = (srcIndex: number) =>
  `/ezgif-frames/ezgif-frame-${String(srcIndex + 1).padStart(3, "0")}.jpg`;

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

/** Draw (downscaled) then set per-pixel alpha from luminance so black → transparent. */
function keyOutBlack(img: HTMLImageElement): HTMLCanvasElement {
  const ratio = Math.min(1, MAX_DIM / Math.max(img.naturalWidth, img.naturalHeight));
  const w = Math.max(1, Math.round(img.naturalWidth * ratio));
  const h = Math.max(1, Math.round(img.naturalHeight * ratio));
  const off = document.createElement("canvas");
  off.width = w;
  off.height = h;
  const ctx = off.getContext("2d", { willReadFrequently: true })!;
  ctx.drawImage(img, 0, 0, w, h);
  const image = ctx.getImageData(0, 0, w, h);
  const d = image.data;
  const span = KEY_HI - KEY_LO;
  for (let i = 0; i < d.length; i += 4) {
    // max channel keeps the red HUD (low luma, high red) and white highlights.
    const m = d[i] > d[i + 1] ? (d[i] > d[i + 2] ? d[i] : d[i + 2]) : d[i + 1] > d[i + 2] ? d[i + 1] : d[i + 2];
    d[i + 3] = m <= KEY_LO ? 0 : m >= KEY_HI ? 255 : Math.round(((m - KEY_LO) / span) * 255);
  }
  ctx.putImageData(image, 0, 0);
  return off;
}

const nextTick = () => new Promise((r) => setTimeout(r, 0));

export function SolutionRobotVideo() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Eased playhead. GSAP tweens `frame` (0 → FRAME_COUNT-1) under scrub; we
    // draw Math.round(frame) so the sequence never shows a torn half-frame.
    const state = { frame: 0 };
    // Keyed, background-removed frames, filled in progressively as they decode.
    const frames: HTMLCanvasElement[] = [];
    let disposed = false;

    const render = () => {
      if (!frames.length) return;
      const idx = Math.min(frames.length - 1, Math.max(0, Math.round(state.frame)));
      const f = frames[idx];
      const cw = canvas.width;
      const ch = canvas.height;
      ctx.clearRect(0, 0, cw, ch);
      // "contain" fit, centered — never crop the HUD that spreads across later frames.
      const scale = Math.min(cw / f.width, ch / f.height);
      const dw = f.width * scale;
      const dh = f.height * scale;
      ctx.drawImage(f, (cw - dw) / 2, (ch - dh) / 2, dw, dh);
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      if (!w || !h) return;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      render(); // repaint current frame at the new backing size
    };

    // Preload + key the sequence once, in order. The source <img> is discarded
    // after keying, so only the (downscaled, transparent) frame canvases persist.
    (async () => {
      for (const srcIndex of SRC_INDICES) {
        if (disposed) return;
        try {
          const img = await loadImage(frameSrc(srcIndex));
          frames.push(keyOutBlack(img));
          if (frames.length === 1) render(); // first frame → first paint
        } catch {
          /* skip a frame that fails to load — keep the rest of the sequence */
        }
        await nextTick(); // yield to the main thread between frames
      }
    })();

    resize();

    // Scrub the playhead across the Solutions panels' travel through the viewport.
    const tween = gsap.to(state, {
      frame: FRAME_COUNT - 1,
      ease: "none",
      onUpdate: render,
      scrollTrigger: {
        trigger: "#solution-panels",
        start: "top center",
        end: "bottom center",
        scrub: 0.6, // seconds of easing — the "smooth" in smooth-scroll-driver
      },
    });

    // Fade the canvas in as the panels approach center, out as they leave.
    const fadeIn = gsap.fromTo(
      canvas,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        ease: "none",
        immediateRender: false,
        scrollTrigger: {
          trigger: "#solution-panels",
          start: "top 85%",
          end: "top 55%",
          scrub: true,
        },
      },
    );
    const fadeOut = gsap.fromTo(
      canvas,
      { autoAlpha: 1 },
      {
        autoAlpha: 0,
        ease: "none",
        immediateRender: false,
        scrollTrigger: {
          trigger: "#solution-panels",
          start: "bottom 65%",
          end: "bottom 40%",
          scrub: true,
        },
      },
    );

    window.addEventListener("resize", resize);

    return () => {
      disposed = true;
      window.removeEventListener("resize", resize);
      [tween, fadeIn, fadeOut].forEach((t) => {
        t.scrollTrigger?.kill();
        t.kill();
      });
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full"
      style={{ pointerEvents: "none", opacity: 0 }}
    />
  );
}
