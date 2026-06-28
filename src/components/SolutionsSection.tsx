import { cn } from "@/lib/utils";
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
    title: "ChainGPT Chatbot",
    description:
      "Reliable & Fast Source of Information. Ask ChainGPT AI any question related to Blockchain and Crypto. The AI can answer general and technical questions.",
    features: [
      "WEB3 AI CHATBOT",
      "ADVANCED CRYPTO LLM",
      "ACCESS TO LIVE CRYPTO DATA",
      "ACCESS TO ON-CHAIN DATA",
      "UP TO DATE WEB3 INFO",
      "MARKET ANALYSIS & RESEARCH",
    ],
    ctas: ['ENTER THE "CRYPTO AI HUB"', "TRY ON TELEGRAM"],
  },
  {
    number: "02",
    title: "AI News Auto-Model",
    description:
      "The future of Web3 news is here. Our advanced AI model scans the web and curates short articles on trending topics every 60 minutes, informing you effortlessly.",
    features: ["AI GENERATED NEWS", "FULLY AUTOMATED", "SHORT FORM"],
    ctas: ["READ AI-GENERATED NEWS"],
  },
  {
    number: "03",
    title: "Smart-Contracts Generator & Auditor",
    description:
      "Generate or audit a Solidity smart contract. Describe the contract you want to create or paste the code to be audited, and our AI will handle the rest.",
    features: [
      "AI SMART CONTRACTS",
      "AI SOLIDITY AUDITOR",
      "GAS OPTIMIZATION",
      "DETECT EXPLOITS",
      "DEPLOY CONTRACTS IN SECONDS",
    ],
    ctas: ["GENERATE & AUDIT SMART CONTRACTS"],
  },
  {
    number: "04",
    title: "AI NFT Generator",
    description:
      "AI-Generated NFTs are non-fungible tokens created based on user prompts using AI-powered algorithms. Within 30-60 seconds, anyone can deploy their NFTs on the Blockchain.",
    features: [
      "AI IMAGE GENERATION",
      "EASY ON CHAIN MINTING",
      "CREATE NFTS IN 30 SECS",
      "20+ NETWORKS SUPPORTED",
      "NFT EVENTS & GIVEAWAYS",
    ],
    ctas: ["ENTER THE AI NFT GENERATOR"],
  },
  {
    number: "05",
    title: "AIVM Blockchain",
    description:
      "AIVM is a framework that integrates AI directly into blockchain networks. It will enable decentralized AI model execution, training, AI Agents infrastructure, and access to GPU resources.",
    features: [
      "DECENTRALIZED AI",
      "ON-CHAIN LLM TRAINING",
      "AI-AGENTS INFRASTRUCTURE",
      "ON/OFF CHAIN INFERENCE",
      "GPU MARKETPLACE",
      "AI DATA MARKETPLACE",
    ],
    ctas: ["READ THE AIVM WHITEPAPER"],
  },
  {
    number: "06",
    title: "AI Trading Assistant",
    description:
      "We created an advanced AI model designed explicitly for Chart & Technical analysis to help experienced and new traders with strategies and implementation of technical analysis.",
    features: [
      "CHART PATTERNS DETECTION",
      "CHART PATTERNS PREDICTION",
      "PRICE PREDICTION (BETA)",
      "MARKET INDICATORS",
    ],
    ctas: ["TRY NOW"],
  },
  {
    number: "07",
    title: "API & SDK",
    description:
      "Developers and businesses can integrate ChainGPT AI via its API & SDK access. They can integrate a specific function or build a new application with our AI model, saving time, money, and resources.",
    features: [
      "API & SDK ACCESS",
      "AI NFT GENERATOR",
      "AI TECHNICAL ANALYSIS",
      "AI POWERED NEWS FEED",
      "WEB3 AI CHATBOT & LLM",
      "SOLIDITY GENERATOR & AUDITOR LLM",
    ],
    ctas: ["ENTER API DASHBOARD"],
  },
  {
    number: "08",
    title: "ChainGPT Pad & DegenPad",
    description:
      "The future of Web3 AI starts here. ChainGPT Pad & DegenPad offers the $CGPT token stakers access to leading Web3 & AI projects in early stages (pre-market).",
    features: [
      "FAIR TIER SYSTEM",
      "HANDPICKED PROJECTS",
      "FLEXIBLE REFUND POLICY",
      "CHAINGPT LABS INCUBATIONS",
      "FREE TOKEN GIVEAWAYS",
    ],
    ctas: ["ENTER CHAINGPT PAD", "ENTER DEGENPAD"],
  },
  {
    number: "09",
    title: "CryptoGuard®",
    description:
      "Elevate Web3 security with an AI-powered security extension that offers collaborative anti-fraud, phishing site blocker, and real-time scans. Stay protected, understand code, and transact with ease.",
    features: [
      "YOUR WEB3 ANTI-VIRUS",
      "INCREASE SECURITY WITH AI",
      "BLOCK PHISHING SITES",
      "BLOCK MALWARE SMART-CONTRACTS",
      "RISK-SCORE FOR CONTRACTS",
    ],
    ctas: ["EXPLORE NOW"],
  },
];

// Two HUD connector beams, drawn in a 1000×560 space (preserveAspectRatio="none").
// A single red light flows along each. The upper one hooks down into the cube's
// top-left (pulled up high enough to clear the "ChainGPT Chatbot" heading). The
// lower one runs straight out from under the cube, then turns up toward the
// feature list on the right.
const BEAM_TOP = "M 210 150 L 210 70 L 482 64 L 482 96";
const BEAM_BOTTOM = "M 520 500 L 900 500 L 900 430";

function SolutionPanel({ solution }: { solution: Solution }) {
  return (
    <article className="relative border-t border-cgpt-line py-16">
      {/* HUD connector beams. They sit below the fixed cube (z-5), so their inner
          ends run under the robot — the animated red light "flows through" it. The
          upper beam hooks into the cube's top-left; the lower beam runs straight
          out from under the cube, then turns up toward the feature list. */}
      <svg
        aria-hidden
        viewBox="0 0 1000 560"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-0 hidden h-full w-full lg:block"
      >
        {/* faint static guides */}
        <path className="cgpt-beam-base" d={BEAM_TOP} />
        <path className="cgpt-beam-base" d={BEAM_BOTTOM} />
        {/* flowing red beams */}
        <path className="cgpt-beam" pathLength={100} d={BEAM_TOP} />
        <path className="cgpt-beam" pathLength={100} d={BEAM_BOTTOM} />
      </svg>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-12">
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

        {/* CENTER: reserved slot. The single pinned robot cube (declared in the
            hero) sits here as each panel passes the middle of the viewport. */}
        <div className="order-2 hidden h-90 w-90 lg:block" aria-hidden />
        {/* DoubleDotsIcon kept imported for the section heading below. */}

        {/* RIGHT: feature list, right-aligned */}
        <ul className="order-3 space-y-3 lg:pl-6">
          {solution.features.map((feature) => (
            <li
              key={feature}
              className={cn(
                "flex items-center justify-end gap-2 border-b border-cgpt-line/60 pb-2",
                "font-mono text-[12px] uppercase tracking-wide text-white"
              )}
            >
              <span className="text-cgpt-violet-light">&#9666;</span>
              {feature}
            </li>
          ))}
        </ul>
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
              Our Solutions
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
