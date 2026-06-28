"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
import {
  DoubleDotsIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowDiagonalIcon,
} from "@/components/icons";

type PhaseStatus = "SETUP" | "INVITE" | "AI LIVE" | "REPORT";

interface Phase {
  status: PhaseStatus;
  period: string;
  bullets: string[];
  note: string;
}

const PHASES: Phase[] = [
  {
    status: "SETUP",
    period: "Create a Position",
    bullets: [
      "Enter job details, required skills, and experience.",
      "Upload your JD or have AI write it for you.",
      "JD-to-CV matching ranks the best-fit candidates.",
    ],
    note: "Takes under 2 minutes",
  },
  {
    status: "SETUP",
    period: "Set Up the Interview",
    bullets: [
      "Pick the position and interview format.",
      "Add screening questions or auto-generate them with AI.",
      "Configure proctoring, branding, and evaluations.",
    ],
    note: "Fully configurable",
  },
  {
    status: "INVITE",
    period: "Send Invites",
    bullets: [
      "Private or public interview links.",
      "Invite candidates one-by-one or in bulk.",
      "Email & WhatsApp reminders keep dropouts at zero.",
    ],
    note: "Zero dropouts",
  },
  {
    status: "AI LIVE",
    period: "AI Conducts the Interview",
    bullets: [
      "Conversational AI asks and follows up dynamically.",
      "Real-time interpretation and skill analysis.",
      "Deepfake & AI-voice detection running live.",
    ],
    note: "4X faster, 100% automated",
  },
  {
    status: "REPORT",
    period: "Get Feedback Reports",
    bullets: [
      "Full transcript and per-skill scores.",
      "Strengths, weaknesses, and a clear recommendation.",
      "White-labelled, shareable reports in ~2 hours.",
    ],
    note: "Feedback in ~2 hours",
  },
];

const CARD_SCROLL = 460;

export function RoadmapSection() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: number) => {
    trackRef.current?.scrollBy({ left: dir * CARD_SCROLL, behavior: "smooth" });
  };

  return (
    <section id="roadmap" className="mx-auto max-w-[1320px] bg-cgpt-bg px-5 py-24 lg:px-8">
      {/* Heading block */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="font-mono mb-5 flex items-center gap-2 text-[12px] uppercase tracking-[0.15em] text-cgpt-muted">
            <DoubleDotsIcon className="text-cgpt-fg" />
          </div>
          <h2 className="font-sans text-[clamp(2.5rem,6vw,64px)] leading-[1.02]">
            How It
            <br />
            <span className="cgpt-gradient-text">Works</span>
          </h2>
          <p className="mt-5 max-w-md text-[15px] text-cgpt-fg/70">
            From job posting to hire — InCruiter automates every step.{" "}
            <a href="#join" className="cgpt-gradient-text underline-offset-2 hover:underline">
              Book a demo
            </a>
          </p>
        </div>

        {/* Prev / next arrows (hidden on mobile) */}
        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            aria-label="Previous phase"
            onClick={() => scrollBy(-1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-cgpt-line text-cgpt-fg transition-colors hover:border-cgpt-fg/40 hover:bg-cgpt-card"
          >
            <ArrowLeftIcon />
          </button>
          <button
            type="button"
            aria-label="Next phase"
            onClick={() => scrollBy(1)}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-cgpt-line text-cgpt-fg transition-colors hover:border-cgpt-fg/40 hover:bg-cgpt-card"
          >
            <ArrowRightIcon />
          </button>
        </div>
      </div>

      {/* Slider */}
      <div
        ref={trackRef}
        className="hide-scrollbar mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4"
      >
        {PHASES.map((phase, idx) => (
          <RoadmapCard key={phase.period} phase={phase} index={idx + 1} />
        ))}
      </div>
    </section>
  );
}

function RoadmapCard({ phase, index }: { phase: Phase; index: number }) {
  const inProgress = phase.status === "AI LIVE";

  return (
    <article className="flex w-[88vw] max-w-[440px] shrink-0 snap-start flex-col rounded-xl border border-cgpt-line bg-cgpt-card/60 p-5 sm:w-[440px]">
      {/* TOP: render header area */}
      <div className="relative h-44 overflow-hidden rounded-lg bg-cgpt-card">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{ background: "var(--cgpt-gradient)" }}
        />
        {/* faint floating gradient-bordered squares suggesting 3D renders */}
        <span className="cgpt-gradient-border absolute left-6 top-7 h-14 w-14 rotate-12 rounded-md" />
        <span className="cgpt-gradient-border absolute right-10 top-12 h-10 w-10 -rotate-6 rounded-md" />
        <span className="cgpt-gradient-border absolute bottom-6 left-1/2 h-12 w-12 -translate-x-1/2 rotate-3 rounded-md" />
      </div>

      {/* RDMP + status */}
      <div className="mt-5 flex items-center justify-between">
        <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-cgpt-muted">
          STEP {index} &#9656;
        </span>
        <span
          className={cn(
            "relative rounded-full px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.1em]",
            inProgress
              ? "cgpt-gradient-border cgpt-gradient-text"
              : "border border-cgpt-line text-cgpt-muted",
          )}
        >
          {phase.status}
        </span>
      </div>

      {/* Period */}
      <h3 className="font-sans mt-4 text-[22px] leading-tight text-cgpt-fg">{phase.period}</h3>

      {/* Bullets */}
      <ul className="mt-4 flex-1 space-y-3">
        {phase.bullets.map((b) => (
          <li key={b} className="flex gap-2 text-[14px] leading-snug text-cgpt-fg/80">
            <span className="mt-0.5 shrink-0 text-cgpt-violet">&#9656;</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between border-t border-cgpt-line pt-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-cgpt-muted">
          {phase.note}
        </span>
        <a
          href="#"
          className="font-mono flex items-center gap-1.5 text-[11px] uppercase tracking-[0.1em] text-cgpt-fg transition-colors hover:text-cgpt-violet-light"
        >
          More Details
          <ArrowDiagonalIcon />
        </a>
      </div>
    </article>
  );
}
