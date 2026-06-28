"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowRightIcon, DoubleDotsIcon } from "@/components/icons";

interface Capability {
  no: string;
  title: string;
  tag: string;
}

const CAPABILITIES: Capability[] = [
  { no: "01", title: "SMART CONTRACTS DEVELOPMENT", tag: "BUILD" },
  { no: "02", title: "ADVANCED AI TRADING", tag: "TRADE" },
  { no: "03", title: "KNOWLEDGE & GUIDANCE", tag: "LEARN" },
  { no: "04", title: "RISK MANAGEMENT & AML", tag: "SECURE" },
  { no: "05", title: "BLOCKCHAIN & MARKET ANALYTICS", tag: "ANALYZE" },
  { no: "06", title: "CODE AUDITOR", tag: "AUDIT" },
  { no: "07", title: "CHART & TECHNICAL ANALYSIS", tag: "CHART" },
  { no: "08", title: "CODE EXPLAINER", tag: "EXPLAIN" },
  { no: "09", title: "SOURCE OF NEWS", tag: "NEWS" },
];

const N = CAPABILITIES.length;

export function ProductGateway() {
  // The scene is pinned with native CSS `position: sticky` (composited → never
  // jitters; works because <main> is overflow-x-clip, not -hidden). The scroll
  // listener only tracks WHICH line is active and re-renders solely when that
  // index changes — no per-frame React churn. Each line then reveals as a WHOLE
  // (CSS fade + slide), never character-by-character, so the text can't vibrate
  // as Lenis eases the scroll.
  const trackRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(-1);
  // SSR / pre-measure: show every line revealed so the content isn't blank.
  const [active, setActive] = useState(N - 1);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = track.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      const maxTravel = rect.height - vh;
      // how far the track's top has scrolled above the viewport top, clamped
      const scrolled = Math.min(Math.max(-rect.top, 0), Math.max(maxTravel, 0));
      const progress = maxTravel > 0 ? scrolled / maxTravel : 0;
      const idx = Math.min(N - 1, Math.max(0, Math.floor(progress * N)));
      if (idx !== activeRef.current) {
        activeRef.current = idx;
        setActive(idx); // re-render ONLY when the active line changes
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    raf = requestAnimationFrame(update);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const spoken = active + 1;
  const isComplete = active >= N - 1;

  return (
    <section id="product" className="relative bg-cgpt-bg">
      {/* HEADING — scrolls in normally above the pinned scene */}
      <div className="relative z-20 mx-auto max-w-[1320px] px-5 pt-24 lg:px-8">
        <span className="cgpt-eyebrow flex items-center gap-3 text-cgpt-muted">
          <DoubleDotsIcon className="text-cgpt-violet" />
          <span className="tracking-[0.28em] text-cgpt-fg/70">PRODUCT MATRIX</span>
          <span className="h-px w-14 bg-cgpt-line" />
          <span className="font-mono text-[11px] tracking-[0.2em] text-cgpt-muted">v3.0</span>
        </span>

        <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-sans text-[clamp(2.5rem,7vw,72px)] leading-[1.0]">
            Your Gateway
            <br />
            To <span className="cgpt-gradient-text">Web3 AI</span>
          </h2>
          {/* subtitle framed by red HUD corner brackets */}
          <div className="relative max-w-xs px-7 py-5">
            <span className="pointer-events-none absolute left-0 top-0 h-6 w-9 border-l-2 border-t-2 border-cgpt-violet" />
            <span className="pointer-events-none absolute bottom-0 right-0 h-6 w-9 border-b-2 border-r-2 border-cgpt-violet" />
            <p className="text-base text-cgpt-fg/70 lg:text-right">
              For individuals, developers, and businesses.
            </p>
          </div>
        </div>
      </div>

      {/* TALL TRACK — provides scroll runway for the speaking sequence */}
      <div ref={trackRef} className="relative" style={{ height: "240vh" }}>
        {/* PINNED SCENE — held in the viewport by native CSS sticky (composited,
            no per-frame JS, so it never jitters while scrolling) */}
        <div className="sticky top-0 h-screen">
          {/* LEFT HUD rail — pinned to the true left edge of the viewport so it
              fills the empty gutter and clears the pinned robot. An animated
              vertical red beam runs the FULL viewport height (the light flows
              off-screen at both ends, so the line never visibly breaks — no end
              caps), beside a readable system readout, a 9-mark ruler mirroring
              the product lines, and a footer label. Decorative chrome — behind
              the robot (z-10), no pointer events. */}
          <div className="pointer-events-none absolute left-4 top-0 z-10 hidden h-full w-[270px] lg:flex lg:gap-5 xl:left-8 2xl:left-16">
            {/* plain solid red line — full height, no animated beam */}
            <div
              aria-hidden
              className="w-[2px] shrink-0 rounded-full bg-cgpt-violet shadow-[0_0_8px_rgba(255,45,70,0.45)]"
            />

            {/* readout column — vertically centered against the beam */}
            <div className="flex min-w-0 flex-1 flex-col justify-center gap-7 py-1">
              {/* readable system readout */}
              <div>
                <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.28em] text-cgpt-muted">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cgpt-violet shadow-[0_0_6px_rgba(255,45,70,0.9)]" />
                  System Online
                </span>
                <h3 className="mt-5 font-sans text-[40px] leading-[1.03] text-white">
                  One Bot.
                  <br />
                  Nine Modules.
                </h3>
                <p className="font-mono mt-4 max-w-[240px] text-[11px] uppercase leading-relaxed tracking-[0.12em] text-cgpt-muted/80">
                  Every ChainGPT capability, spoken from one unified AI engine.
                </p>
              </div>

              {/* ruler — one tick per product line */}
              <div aria-hidden className="flex flex-col gap-2.5">
                {CAPABILITIES.map((c) => (
                  <div key={c.no} className="flex items-center gap-2">
                    <span className="h-px w-5 bg-cgpt-violet/45" />
                    <span className="font-mono text-[10px] tracking-[0.22em] text-cgpt-muted/45">
                      {c.no}
                    </span>
                  </div>
                ))}
              </div>

              {/* status footer */}
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cgpt-fg/35">
                CGPT // Product_Matrix
              </span>
            </div>
          </div>

          <div className="mx-auto flex h-full max-w-[1320px] items-center gap-12 px-5 lg:px-8">
            {/* CENTER spacer — the pinned Spline robot sits over this column. */}
            <div className="pointer-events-none hidden flex-1 lg:block" />

            {/* RIGHT — the bot's "speech" console */}
            <div className="relative z-20 w-full lg:max-w-[600px] lg:flex-1">
              {/* faint HUD grid behind the console, masked to fade out */}
              <div
                aria-hidden
                className="cgpt-hud-grid pointer-events-none absolute -inset-x-5 -inset-y-3 -z-10 opacity-60 [mask-image:radial-gradient(120%_120%_at_75%_50%,#000_25%,transparent_78%)]"
              />
              {/* corner brackets frame the console */}
              <span className="pointer-events-none absolute -left-3 -top-4 h-5 w-5 border-l-2 border-t-2 border-cgpt-violet/70" />
              <span className="pointer-events-none absolute -bottom-3 -right-3 h-5 w-5 border-b-2 border-r-2 border-cgpt-violet/70" />

              {/* console status header */}
              <div className="mb-1 flex items-center justify-between border-b border-cgpt-line pb-3">
                <span className="cgpt-cursor font-mono text-[11px] uppercase tracking-[0.28em] text-cgpt-fg/70">
                  ChainGPT // Speaking
                </span>
                <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-cgpt-muted">
                  <span
                    className={cn(
                      "h-1.5 w-1.5 rounded-full bg-cgpt-violet shadow-[0_0_6px_rgba(255,45,70,0.9)]",
                      !isComplete && "animate-pulse",
                    )}
                  />
                  [ {String(spoken).padStart(2, "0")} / {N} ]
                </span>
              </div>

              <ul className="relative">
                {CAPABILITIES.map((c, i) => {
                  // Whole-line reveal (no typewriter): the line stays rock-steady
                  // while Lenis eases the scroll. `active` is the line spoken now;
                  // earlier lines are done, later lines idle.
                  const state =
                    i < active ? "done" : i === active ? "speaking" : "idle";

                  return (
                    <li key={c.no} className="relative border-b border-cgpt-line">
                      {/* red wash on the line currently being spoken */}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                        style={{
                          opacity: state === "speaking" ? 1 : 0,
                          background: "linear-gradient(90deg, transparent 25%, rgba(255,45,70,0.10))",
                        }}
                      />
                      {/* left accent bar — lit while speaking, dim once spoken */}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute left-0 top-1/2 w-[2px] -translate-y-1/2 bg-cgpt-violet transition-all duration-300"
                        style={{
                          height: state === "idle" ? "0%" : state === "speaking" ? "62%" : "34%",
                          boxShadow: state === "idle" ? "none" : "0 0 8px rgba(255,45,70,0.8)",
                        }}
                      />
                      {/* underline grows left→right as the line is spoken */}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute bottom-0 left-0 h-px w-full origin-left transition-transform duration-150"
                        style={{
                          background: "var(--cgpt-gradient)",
                          transform: `scaleX(${state === "idle" ? 0 : 1})`,
                        }}
                      />

                      <div className="relative flex items-center gap-5 py-4 pl-4">
                        <span
                          className={cn(
                            "font-mono text-sm tabular-nums transition-colors duration-300",
                            state === "speaking"
                              ? "text-cgpt-violet-light"
                              : state === "done"
                                ? "text-cgpt-fg/60"
                                : "text-cgpt-muted/25",
                          )}
                        >
                          {c.no}
                        </span>

                        {/* the spoken text + blinking caret */}
                        <div
                          className="min-w-0 flex-1 font-sans text-[22px] leading-tight transition-transform duration-300"
                          style={{ transform: state === "speaking" ? "translateX(6px)" : "translateX(0)" }}
                        >
                          <span
                            className={cn(
                              state === "speaking"
                                ? "cgpt-gradient-text"
                                : state === "done"
                                  ? "text-cgpt-fg/85"
                                  : "text-cgpt-muted/15",
                            )}
                          >
                            {c.title || " "}
                          </span>
                          {state === "speaking" && (
                            <span className="ml-1 inline-block h-[0.95em] w-[8px] -translate-y-[1px] bg-cgpt-violet align-middle animate-[cgpt-blink_1s_step-end_infinite]" />
                          )}
                        </div>

                        <span
                          className="ml-auto flex items-center gap-4 transition-opacity duration-300"
                          style={{ opacity: state === "idle" ? 0 : 1 }}
                        >
                          <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-cgpt-muted sm:block">
                            {c.tag}
                          </span>
                          <ArrowRightIcon
                            className="text-cgpt-violet transition-opacity duration-300"
                            style={{ opacity: state === "speaking" ? 1 : 0 }}
                          />
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
