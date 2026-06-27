"use client";

import { useEffect, useState } from "react";

/**
 * Full-screen intro loader matching ChainGPT's boot screen:
 * dark backdrop, corner brackets, a gradient-framed robot face, and "LOADING" labels.
 * Fades out after mount (the real site plays a Lottie; we approximate timing).
 */
export function Loader() {
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setDone(true), 1600);
    const t2 = setTimeout(() => setHidden(true), 2200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-cgpt-bg transition-opacity duration-500 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      {/* crosshair guide lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-full w-px bg-cgpt-line" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-cgpt-line" />
      </div>

      {/* corner brackets */}
      {[
        "left-6 top-6 border-l border-t",
        "right-6 top-6 border-r border-t",
        "left-6 bottom-6 border-l border-b",
        "right-6 bottom-6 border-r border-b",
      ].map((c) => (
        <span key={c} className={`absolute h-6 w-6 rounded-[3px] border-cgpt-line ${c}`} />
      ))}

      {/* robot face */}
      <div className="relative flex h-40 w-40 items-center justify-center rounded-[28px] cgpt-gradient-border">
        <div className="flex h-[72%] w-[72%] items-center justify-center gap-3 rounded-[18px] bg-cgpt-card">
          <span className="h-3 w-3 rounded-full bg-cgpt-fg" />
          <span className="h-3 w-3 rounded-full bg-cgpt-fg" />
        </div>
      </div>

      <span className="font-mono absolute left-[8%] top-1/2 -translate-y-1/2 text-xs uppercase tracking-[0.2em] text-cgpt-fg">
        Loading
      </span>
      <span className="font-mono absolute right-[8%] top-1/2 -translate-y-1/2 text-xs uppercase tracking-[0.2em] text-cgpt-fg">
        Loading
      </span>
    </div>
  );
}
