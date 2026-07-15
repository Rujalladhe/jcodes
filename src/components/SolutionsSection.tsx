import { ArrowDiagonalIcon, DoubleDotsIcon } from "@/components/icons";

interface Solution {
  number: string;
  title: string;
  description: string;
  features: string[];
  ctas: string[];
}

const SOLUTIONS: Solution[] = [
  {
    number: "01",
    title: "IncServe — Interview as a Service",
    description:
      "4500+ industry-specific expert interviewers conduct your tech and non-tech interviews. Share JDs and resumes, and our network evaluates candidates in around 6 hours — accurate, unbiased, and role-specific.",
    features: [
      "4500+ EXPERT INTERVIEWERS",
      "250+ TECHNOLOGIES COVERED",
      "6-HOUR TURNAROUND TIME",
      "70% ROUND-2 CONVERSION",
      "AI-POWERED PROCTORING",
      "WHITE-LABELLED REPORTS",
    ],
    ctas: ["EXPLORE INCSERVE", "BOOK A DEMO"],
  },
  {
    number: "02",
    title: "IncBot — AI Interview Software",
    description:
      "A one-way and two-way video interview platform powered by Conversational AI. IncBot runs asynchronous interviews, generates dynamic follow-ups, and removes the need for human interviewers — interviews anytime, anywhere.",
    features: [
      "CONVERSATIONAL AI INTERVIEWS",
      "DYNAMIC FOLLOW-UP QUESTIONS",
      "4X FASTER, 100% AUTOMATED",
      "DEEPFAKE & AI-VOICE DETECTION",
      "ZERO DROPOUTS WITH REMINDERS",
      "STRUCTURED FEEDBACK REPORTS",
    ],
    ctas: ["TRY INCBOT", "START FREE TRIAL"],
  },
  {
    number: "03",
    title: "IncScreen — Conversational AI Recruiter",
    description:
      "An AI recruiter with conversational AI phone screening. IncScreen speeds up candidate screening with natural, human-like conversations so you can hire top talent effortlessly.",
    features: [
      "CONVERSATIONAL AI PHONE SCREENING",
      "FASTER CANDIDATE SHORTLISTING",
      "AUTOMATED CALL & FOLLOW-UP",
      "INSTANT SCREENING SUMMARIES",
      "AVAILABLE 24X7",
    ],
    ctas: ["EXPLORE INCSCREEN"],
  },
  {
    number: "04",
    title: "IncVid — Video Interview Software",
    description:
      "Live video interviews on a cheat-proof platform with code collaboration, AI feedback, and built-in evaluations. A secure, interview-first replacement for MS Teams and Zoom.",
    features: [
      "CHEAT-PROOF LIVE INTERVIEWS",
      "BUILT-IN CODE COMPILER",
      "AI FEEDBACK & EVALUATIONS",
      "RECORD & REVIEW",
      "WHITE-LABELLING",
    ],
    ctas: ["EXPLORE INCVID"],
  },
  {
    number: "05",
    title: "IncFeed — Interview Scheduling Software",
    description:
      "Automate repetitive interview scheduling and manual follow-ups. IncFeed syncs candidate and panel calendars so coordination happens on its own — no more back-and-forth emails.",
    features: [
      "AUTO CALENDAR SYNC",
      "PANEL & CANDIDATE MATCHING",
      "AUTO REMINDERS & FOLLOW-UPS",
      "CALENDAR INVITES",
      "INBUILT ATS",
    ],
    ctas: ["EXPLORE INCFEED"],
  },
  {
    number: "06",
    title: "IncProctor — Online Proctoring Software",
    description:
      "Secure remote assessments with AI Proctoring-as-a-Service for a cheat-proof hiring experience. Prevent tab switching, detect dual noise, and track eye movement in real time.",
    features: [
      "AI PROCTORING-AS-A-SERVICE",
      "TAB-SWITCH PREVENTION",
      "DUAL-NOISE DETECTION",
      "EYE-MOVEMENT TRACKING",
      "RISK-SCORED REPORTS",
    ],
    ctas: ["EXPLORE INCPROCTOR"],
  },
];

// HUD connector beam, drawn in a 1000×560 space (preserveAspectRatio="none").
// A single red light flows along it: it hooks down into the cube's top-left
// (pulled up high enough to clear the panel heading).
const BEAM_TOP = "M 210 150 L 210 70 L 482 64 L 482 96";

function SolutionPanel({ solution }: { solution: Solution }) {
  return (
    <article className="relative border-t border-cgpt-line py-16">
      {/* HUD connector beam. It sits below the fixed robot (z-5), so its inner end
          runs under it — the animated red light "flows through". The beam hooks
          into the robot's top-left. */}
      <svg
        aria-hidden
        viewBox="0 0 1000 560"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
      >
        {/* faint static guide */}
        <path className="cgpt-beam-base" d={BEAM_TOP} />
        {/* flowing red beam */}
        <path className="cgpt-beam" pathLength={100} d={BEAM_TOP} />
      </svg>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center lg:gap-12">
        {/* LEFT: number, title, description, CTAs */}
        <div className="order-1 flex flex-col">
          <span className="font-mono text-[13px] tracking-widest text-cgpt-muted">
            {solution.number}
          </span>
          <h3 className="mt-4 font-sans text-[clamp(1.75rem,3vw,40px)] leading-tight">
            {solution.title}
          </h3>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-cgpt-fg/70">
            {solution.description}
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            {solution.ctas.map((cta) => (
              <a
                key={cta}
                href="#"
                className="cgpt-gradient-border cgpt-glass group inline-flex items-center gap-2 rounded-md px-5 py-3 font-mono text-[12px] uppercase tracking-wide text-cgpt-fg transition-colors hover:text-cgpt-fg-bright"
              >
                {cta}
                <ArrowDiagonalIcon className="text-cgpt-violet-light transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT: open area — the pinned robot video (declared in the hero) floats
            over this column as each panel passes the middle of the viewport. */}
        <div className="order-2 hidden lg:block" aria-hidden />
      </div>
    </article>
  );
}

export function SolutionsSection() {
  return (
    <section id="solutions" className="bg-cgpt-bg">
      <div className="mx-auto max-w-[1320px] px-5 py-24 lg:px-8">
        {/* Heading block */}
        <div className="relative inline-block">
          <span className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-widest text-cgpt-muted">
            <DoubleDotsIcon className="text-cgpt-violet-light" />
          </span>
          <div className="relative mt-3 px-6 py-4">
            {/* corner brackets */}
            <span className="pointer-events-none absolute left-0 top-0 h-4 w-4 rounded-tl-[3px] border-l border-t border-white/40" />
            <span className="pointer-events-none absolute right-0 top-0 h-4 w-4 rounded-tr-[3px] border-r border-t border-white/40" />
            <span className="pointer-events-none absolute bottom-0 left-0 h-4 w-4 rounded-bl-[3px] border-b border-l border-white/40" />
            <span className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 rounded-br-[3px] border-b border-r border-white/40" />
            <h2 className="font-sans text-[clamp(2.5rem,6vw,64px)] leading-none">
              Our Products
            </h2>
            <span
              className="absolute -bottom-px left-6 right-6 h-[2px] rounded-full"
              style={{ background: "var(--cgpt-gradient)" }}
            />
          </div>
        </div>

        {/* Solution panels — anchor for the pinned robot cube's scroll scrub:
            it shows frame 1 at the first panel and animates to the last. */}
        <div id="solution-panels" className="mt-12">
          {SOLUTIONS.map((solution) => (
            <SolutionPanel key={solution.number} solution={solution} />
          ))}
        </div>
      </div>
    </section>
  );
}
