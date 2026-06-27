"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowDownIcon, DoubleDotsIcon } from "@/components/icons";
import { RobotFrames } from "@/components/RobotFrames";
import { RobotSpline } from "@/components/RobotSpline";

interface HeroState {
  prompt: string;
  status: string;
  category: string;
  title: string;
  bullets: string[];
}

const STATES: HeroState[] = [
  {
    prompt: "ANALYZE THIS TOKEN'S ON-CHAIN ACTIVITY AND MARKET TRENDS",
    status: "ANALYZING IN",
    category: "AI TOOLS",
    title: "WEB3 AI CHATBOT",
    bullets: ["REAL-TIME DATA INSIGHTS", "ON-CHAIN ANALYSIS", "TOKEN RESEARCH", "LIVE MARKET UPDATES"],
  },
  {
    prompt: "DEPLOY MY CUSTOM AI MODEL ON THIS DECENTRALIZED INFRASTRUCTURE",
    status: "DEPLOYING ON",
    category: "AI VIRTUAL MACHINE",
    title: "AI VIRTUAL MACHINE",
    bullets: ["ON-CHAIN LLM TRAINING", "DECENTRALIZED AI", "GPU MARKETPLACE", "AI DATA MARKETPLACE"],
  },
  {
    prompt: "AUDIT AND DEPLOY MY ERC-20 SMART CONTRACT FOR POTENTIAL ISSUES",
    status: "ANALYZING IN",
    category: "AI TOOLS",
    title: "SMART CONTRACT AUDITOR",
    bullets: ["GENERATE AND AUDIT", "DETECT EXPLOITS", "DEPLOY CONTRACTS ON-CHAIN", "GAS OPTIMIZATION"],
  },
  {
    prompt: "BUILD AN AI-POWERED TRADING BOT WITH A CUSTOM TOKEN ON BNB CHAIN",
    status: "BUILDING IN",
    category: "AI TOOLS",
    title: "AI AGENTS LAUNCHER",
    bullets: ["NO-CODE AI AGENT LAUNCHPAD", "TRAIN YOUR OWN AGENT", "BIND TO EXISTING CHAT", "BIND TO A TOKEN"],
  },
  {
    prompt: "GENERATE AND MINT A CYBERPUNK-STYLE PFP NFT COLLECTION",
    status: "GENERATING IN",
    category: "AI TOOLS",
    title: "AI NFT GENERATOR",
    bullets: ["TEXT-TO-IMAGE AI", "ON-CHAIN MINTING", "SEAMLESS NFT CREATION", "20+ NETWORKS SUPPORTED"],
  },
];

// HUD connector beams that frame the robot in the hero — red flowing light, the
// same look as the Solutions section. Drawn in a 1000×600 space (preserveAspectRatio
// none): one runs across the top, the other brackets down the right toward the labels.
const HERO_BEAM_A = "M 350 130 L 470 130 L 540 78 L 985 78";
const HERO_BEAM_B = "M 985 78 L 985 430";

export function HeroSection() {
  const [i, setI] = useState(0);
  const s = STATES[i];
  const robotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % STATES.length), 3800);
    return () => clearInterval(t);
  }, []);

  // Pin the Spline robot; as you scroll it slides to the LEFT (so it never covers
  // the right-hand text lists), then fades out as the "Our Solutions" section enters.
  useEffect(() => {
    const SCALE = 1.30;
    const onScroll = () => {
      const el = robotRef.current;
      if (!el) return;
      const vw = window.innerWidth || 1;
      const vh = window.innerHeight || 1;

      // Horizontal: sits to the right at the top, then slides left up to 22% of
      // the viewport width over the first screenful of scrolling — keeps it off
      // the text. BASE_X nudges the whole path further right.
      // vw*0.12 nudges the robot right; the -38px pulls it back left ~1cm in the hero.
      const BASE_X = vw * 0.12 - 38;
      const shift = Math.min(1, Math.max(0, window.scrollY / vh));
      const tx = BASE_X - shift * vw * 0.22;

      // Opacity: full until the Solutions top passes 85% of the viewport, gone by 30%.
      const solutions = document.getElementById("solutions");
      let o = 1;
      if (solutions) {
        const top = solutions.getBoundingClientRect().top;
        o = Math.min(1, Math.max(0, (top - vh * 0.3) / (vh * 0.85 - vh * 0.3)));
      }

      el.style.transform = `translateX(${tx.toFixed(1)}px) scale(${SCALE})`;
      el.style.opacity = o.toFixed(3);
      el.style.pointerEvents = o > 0.05 ? "auto" : "none";
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="intro" className="relative min-h-screen pt-[72px]">
      {/* faint center guide line */}
      <div className="pointer-events-none absolute inset-y-0 left-[17%] hidden w-px bg-cgpt-line lg:block" />

      {/* Interactive Spline robot — pinned + centered. It rides the scroll through
          the hero and fades out as the "Our Solutions" section enters (scroll
          effect above). The full-screen layer is pointer-events-none so it never
          blocks the page; only the centered canvas is interactive, and that's
          switched off once it fades. */}
      <div className="pointer-events-none fixed inset-0 z-30 flex items-center justify-center">
        <div
          ref={robotRef}
          className="pointer-events-auto h-[95vh] w-full max-w-[1200px]"
          style={{ transform: "scale(1.45)", transition: "opacity 0.2s linear" }}
        >
          <RobotSpline className="h-full w-full" />
        </div>
      </div>

      {/* The single pinned, viewport-centered robot cube. It's fixed (declared
          once here) but stays hidden until the Solutions section scrolls into
          view, where it animates — see RobotFrames for the scroll choreography. */}
      <div className="pointer-events-none fixed inset-0 z-[5] flex items-center justify-center">
        <div className="relative h-[92vh] w-full max-w-[880px]">
          <RobotFrames />
        </div>
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-72px)] max-w-[1320px] flex-col px-5 lg:px-8">
        {/* HUD connector beams — red flowing light framing the robot, sitting
            behind it (z-2 < robot z-30). */}
        <svg
          aria-hidden
          viewBox="0 0 1000 600"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 z-2 hidden h-full w-full lg:block"
        >
          <path className="cgpt-beam-base" d={HERO_BEAM_A} />
          <path className="cgpt-beam-base" d={HERO_BEAM_B} />
          <path className="cgpt-beam" pathLength={100} d={HERO_BEAM_A} />
          <path className="cgpt-beam" pathLength={100} d={HERO_BEAM_B} />
        </svg>

        {/* HUD overlay grid */}
        <div className="relative flex flex-1 items-start pt-10">
          {/* LEFT: cycling prompt box */}
          <div className="z-20 hidden max-w-[420px] lg:block">
            <div className="relative rounded-md border border-cgpt-line bg-cgpt-bg/40 p-5">
              <span className="cgpt-gradient-text text-3xl leading-none">&ldquo;</span>
              <p key={s.prompt} className="font-mono mt-3 text-[13px] uppercase leading-relaxed tracking-wide text-cgpt-fg/90 [animation:cgpt-fade-up_.5s_ease]">
                {s.prompt}
              </p>
            </div>
          </div>

          {/* RIGHT: status + title + bullets */}
          <div className="z-20 ml-auto hidden w-[340px] lg:block">
            <div className="flex items-center justify-between border-b border-cgpt-line pb-3">
              <span className="font-mono text-[12px] uppercase tracking-wide text-cgpt-fg cgpt-cursor">
                {s.status}
              </span>
              <span className="flex h-9 w-12 items-center justify-center rounded-md border border-cgpt-line">
                <DoubleDotsIcon className="text-cgpt-fg" />
              </span>
            </div>
            <div className="mt-3 flex justify-end">
              <span className="rounded-md border border-cgpt-line px-4 py-2 font-mono text-[12px] uppercase tracking-wide text-cgpt-fg">
                {s.title}
              </span>
            </div>
            <ul className="mt-5 space-y-3">
              {s.bullets.map((b) => (
                <li
                  key={b}
                  className="font-mono flex items-center justify-end gap-2 border-b border-cgpt-line/60 pb-2 text-[12px] uppercase tracking-wide text-cgpt-muted"
                >
                  <span className="text-cgpt-violet-light">&#9666;</span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM: title block */}
        <div className="relative z-20 pb-16">
          <p className="font-mono mb-4 text-sm uppercase tracking-[0.15em] text-cgpt-fg/80">
            Unleash the Power of
          </p>
          <h1 className="font-sans text-[clamp(3.5rem,9vw,77px)] leading-[0.98]">
            <span className="relative inline-block">
              Blockchain
              <span
                className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full"
                style={{ background: "var(--cgpt-gradient)" }}
              />
            </span>
            <br />
            <span className="relative inline-flex items-center">
              <span className="pr-2">AI</span>
              {/* corner brackets around AI */}
              <span className="pointer-events-none absolute -left-3 -top-3 h-4 w-4 rounded-tl-[3px] border-l border-t border-white/40" />
              <span className="pointer-events-none absolute -bottom-3 -right-3 h-4 w-4 rounded-br-[3px] border-b border-r border-white/40" />
            </span>
          </h1>
          <p className="mt-6 max-w-xs text-base text-cgpt-fg/70 lg:ml-auto lg:text-right">
            Your personal expert in all crypto &amp; blockchain related topics.
          </p>
        </div>
      </div>

      {/* SCROLL indicator */}
      <a
        href="#product"
        className="font-mono absolute bottom-8 right-6 z-20 hidden flex-col items-center gap-2 text-[11px] uppercase tracking-widest text-cgpt-muted transition-colors hover:text-cgpt-fg lg:flex"
      >
        Scroll
        <ArrowDownIcon className="text-cgpt-fg" />
      </a>
    </section>
  );
}
