"use client";

import { useEffect, useState } from "react";

/**
 * Full-screen intro loader for the InCruiter landing page:
 * dark backdrop, corner brackets, a gradient-framed "iC" monogram resting over the
 * crosshair, the InCruiter wordmark + tagline, and a pulsing loading indicator.
 * Fades out after mount to reveal the hero.
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

      {/* Branded resting block — InCruiter monogram, wordmark + tagline */}
      <div className="relative flex flex-col items-center gap-6">
        {/* iC monogram tile */}
        <div className="relative flex h-28 w-28 items-center justify-center rounded-[24px] cgpt-gradient-border">
          <div className="flex h-[78%] w-[78%] items-center justify-center rounded-[16px] bg-cgpt-card">
            <span className="cgpt-gradient-text font-sans text-4xl font-semibold tracking-tight">
              iC
            </span>
          </div>
        </div>

        {/* wordmark + tagline */}
        <div className="flex flex-col items-center gap-2">
          <span className="font-sans text-2xl font-semibold tracking-tight text-cgpt-fg">
            In<span className="cgpt-gradient-text">Cruiter</span>
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cgpt-muted">
            Augmented AI for Precision Hiring
          </span>
        </div>

        {/* pulsing loading dots */}
        <div className="mt-1 flex items-center gap-2">
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="h-1.5 w-1.5 animate-pulse rounded-full bg-cgpt-fg"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>

      <span className="font-mono absolute left-[8%] top-1/2 -translate-y-1/2 text-xs uppercase tracking-[0.2em] text-cgpt-fg">
        InCruiter
      </span>
      <span className="font-mono absolute right-[8%] top-1/2 -translate-y-1/2 text-xs uppercase tracking-[0.2em] text-cgpt-muted">
        Loading
      </span>
    </div>
  );
}
