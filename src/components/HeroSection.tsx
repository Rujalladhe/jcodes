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
    prompt: "CONDUCT A SENIOR BACKEND INTERVIEW AND SCORE THE CANDIDATE FOR ME",
    status: "INTERVIEWING IN",
    category: "AI INTERVIEW",
    title: "INCBOT AI INTERVIEW",
    bullets: ["CONVERSATIONAL AI INTERVIEWS", "DYNAMIC FOLLOW-UP QUESTIONS", "REAL-TIME SKILL SCORING", "STRUCTURED FEEDBACK REPORTS"],
  },
  {
    prompt: "OUTSOURCE 50 TECHNICAL INTERVIEWS TO EXPERT INTERVIEWERS THIS WEEK",
    status: "ASSIGNING IN",
    category: "INTERVIEW AS A SERVICE",
    title: "INCSERVE NETWORK",
    bullets: ["4500+ EXPERT INTERVIEWERS", "250+ TECHNOLOGIES COVERED", "6-HOUR TURNAROUND TIME", "UNBIASED EVALUATIONS"],
  },
  {
    prompt: "MATCH THIS JOB DESCRIPTION TO THE BEST CANDIDATES IN MY PIPELINE",
    status: "ANALYZING IN",
    category: "AI FEATURES",
    title: "JD TO CV MATCHING",
    bullets: ["JD-TO-CV MATCHING", "WRITE MY JD", "AUTO SCREENING QUESTIONS", "INBUILT ATS"],
  },
  {
    prompt: "RUN A LIVE VIDEO INTERVIEW ON A CHEAT-PROOF PROCTORED PLATFORM",
    status: "STARTING IN",
    category: "VIDEO INTERVIEW",
    title: "INCVID PLATFORM",
    bullets: ["LIVE CODE COLLABORATION", "AI-POWERED PROCTORING", "BUILT-IN EVALUATIONS", "WHITE-LABELLED REPORTS"],
  },
  {
    prompt: "FLAG ANY FACE-SWAP OR AI-VOICE FRAUD IN THIS INTERVIEW RECORDING",
    status: "SCANNING IN",
    category: "AI INTEGRITY",
    title: "DEEPFAKE DETECTION",
    bullets: ["DETECT ALTERED VIDEOS", "FACE-SWAP DETECTION", "AI VOICE & AVATAR DETECTION", "RISK SCORE IN REPORT"],
  },
];

// HUD connector beams that frame the robot in the hero — red flowing light, the
// same look as the Solutions section. Drawn in a 1000×600 space (preserveAspectRatio
// none): one runs across the top, the other brackets down the right toward the labels.
// The top-right corner is chamfered (a small ~45° bevel) instead of a square
// corner — the top beam runs to (967,78), cuts a short diagonal to (985,96), and
// the vertical drops from there. The bevel is kept small so it stays up at the
// corner and never reaches down into the "WEB3 AI CHATBOT" box below it. The two
// beams stay joined at (985,96) so the light flows through.
const HERO_BEAM_A = "M 350 130 L 470 130 L 540 78 L 967 78 L 985 96";
const HERO_BEAM_B = "M 985 96 L 985 430";

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
    const DROP_Y = 38; // pull the robot ~1cm down (96px/in ÷ 2.54 ≈ 38px/cm)
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

      el.style.transform = `translate(${tx.toFixed(1)}px, ${DROP_Y}px) scale(${SCALE})`;
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
        {/* White HUD frame brackets — thin corner rails (vertical + horizontal)
            hugging the left edge, matching the screenshot's corner lines. */}
        <span aria-hidden className="pointer-events-none absolute left-1 top-6 hidden h-24 w-28 rounded-tl-2xl border-l border-t border-white/20 lg:block" />
        <span aria-hidden className="pointer-events-none absolute left-1 top-14 hidden h-12 w-12 rounded-tl-lg border-l border-t border-white/15 lg:block" />
        <span aria-hidden className="pointer-events-none absolute bottom-32 left-1 hidden h-28 w-24 rounded-bl-2xl border-b border-l border-white/20 lg:block" />

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
          {/* LEFT: cycling prompt box, with a white HUD connector running out to the right */}
          <div className="z-20 hidden max-w-120 lg:block">
            <div className="flex items-center gap-3">
              <div className="relative flex-1 rounded-md border border-cgpt-line bg-cgpt-bg/40 p-5">
                <span className="cgpt-gradient-text text-3xl leading-none">&ldquo;</span>
                <p key={s.prompt} className="font-mono mt-3 text-[13px] uppercase leading-relaxed tracking-wide text-cgpt-fg/90 [animation:cgpt-fade-up_.5s_ease]">
                  {s.prompt}
                </p>
              </div>
              <span aria-hidden className="text-white/55">&#9656;</span>
              <span aria-hidden className="h-px w-10 bg-white/20" />
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
            <div className="mt-3 flex items-center justify-end gap-2">
              <span aria-hidden className="h-px w-10 bg-white/20" />
              <span aria-hidden className="text-white/55">&#9656;</span>
              <span className="rounded-md border border-cgpt-line px-4 py-2 font-mono text-[12px] uppercase tracking-wide text-cgpt-fg">
                {s.title}
              </span>
            </div>
            {/* Bullets, each prefixed by a white HUD connector rail + ◄ that runs
                back toward the robot — matches the screenshot's right-hand lines. */}
            <ul className="mt-5 -ml-25 w-110 space-y-4">
              {s.bullets.map((b) => (
                <li
                  key={b}
                  className="font-mono flex items-center gap-3 text-[12px] uppercase tracking-wide text-cgpt-muted"
                >
                  <span aria-hidden className="h-px flex-1 bg-white/20" />
                  <span aria-hidden className="text-white/55">&#9666;</span>
                  <span className="whitespace-nowrap">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* BOTTOM: title block */}
        <div className="relative z-20 pb-16">
          <p className="font-mono mb-4 text-sm uppercase tracking-[0.15em] text-cgpt-fg/80">
            Augmented AI for Precision Hiring
          </p>
          {/* Heading wrapped in a static red HUD frame — rounded corners on the
              left, chamfered notches on the right, plus a mid divider line. Same
              look as the connector beams but a plain red stroke, no animation.
              fill="none" is set explicitly so the path renders as an outline,
              never a filled shape. */}
          <div className="relative inline-block pb-12 pl-8 pr-16 pt-7">
            <svg
              aria-hidden
              viewBox="0 0 600 260"
              preserveAspectRatio="none"
              fill="none"
              className="pointer-events-none absolute inset-0 h-full w-full"
            >
              <path
                d="M 566 70 L 566 40 L 532 6 L 26 6 Q 6 6 6 26 L 6 234 Q 6 254 26 254 L 150 254 L 178 226 M 210 222 L 540 222 L 568 196"
                fill="none"
                stroke="#ff2d46"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
                style={{ filter: "drop-shadow(0 0 5px rgba(255,45,70,0.5))" }}
              />
            </svg>

            <h1 className="relative font-sans text-[clamp(3.5rem,9vw,77px)] leading-[0.98]">
              Interview
              <br />
              <span className="pr-2">as a Service</span>
            </h1>
          </div>
          {/* Tagline framed by red HUD corner brackets — top-left + bottom-right */}
          <div className="relative mt-6 max-w-sm px-9 py-7 lg:ml-auto">
            <span className="pointer-events-none absolute left-0 top-0 h-8 w-11 border-l-2 border-t-2 border-cgpt-violet" />
            <span className="pointer-events-none absolute bottom-0 right-0 h-8 w-11 border-b-2 border-r-2 border-cgpt-violet" />
            <p className="text-base text-cgpt-fg/70 lg:text-right">
              AI-powered interview solutions that help you hire 4X faster &amp; cut hiring costs by up to 80%.
            </p>
          </div>
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
