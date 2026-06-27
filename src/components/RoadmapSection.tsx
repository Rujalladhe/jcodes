"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
import {
  DoubleDotsIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowDiagonalIcon,
} from "@/components/icons";

type PhaseStatus = "IN PROGRESS" | "COMPLETED";

interface Phase {
  status: PhaseStatus;
  period: string;
  bullets: string[];
  moreCount: number;
}

const PHASES: Phase[] = [
  {
    status: "IN PROGRESS",
    period: "2025: Q3-Q4",
    bullets: [
      "Crypto AI Hub v2: Advanced trading signals, on-chain AI analytics, and research dashboards.",
      "ChainGPT Pad Upgrade: Adds Buzzdrops, IBOs, and social trading tools.",
      "AIVM Testnet Launch: Public testnet with decentralized AI execution, GPU marketplace, and agent framework.",
      "Solidity LLM v2: Enterprise-grade release supported by Alibaba Cloud.",
      "CGPT.Fun Launch: Meme-coin ecosystem and AI agent playground on BNB Chain.",
    ],
    moreCount: 0,
  },
  {
    status: "COMPLETED",
    period: "2025: Q1-Q2",
    bullets: [
      "AIVM Blockchain Prototype: Devnet, Whitepaper, Developer CLI, AI Agent Runtime.",
      "Solidity LLM Open-Sourced: Smart Contract AI Model (Alibaba Cloud partnership).",
      "AgenticOS Framework Released: Open-source AI agents toolkit.",
      "Web3 AI Chatbot Enhanced: Real-time analytics (tokens, DeFi, NFTs, macro insights).",
      "$CGPT Token Major Listings: Binance, Bybit & KuCoin derivatives, Solana (Raydium).",
    ],
    moreCount: 46,
  },
  {
    status: "COMPLETED",
    period: "2024: Q3-Q4",
    bullets: [
      "AI Trading Assistant v1 Released.",
      "AIVM Blockchain Initial Development.",
      "Enhanced AI NFT Generator.",
      "Crypto AI Hub Revamped.",
      "ChainGPT Pad v2 Launch & Integrations.",
      "Mobile App Launched (iOS & Android).",
    ],
    moreCount: 40,
  },
  {
    status: "COMPLETED",
    period: "2024: Q1-Q2",
    bullets: [
      "CryptoGuard Web3 Security Extension.",
      "$1M Web3 AI Grant Program.",
      "AI Hub Enhanced (Cross-chain swaps, Tron).",
      "AI NFT Generator Updated (Marketplace, diverse styles).",
      "ChainGPT Pad v2 beta (Solana, Base, BRC-20).",
    ],
    moreCount: 34,
  },
  {
    status: "COMPLETED",
    period: "2023: Q3-Q4",
    bullets: [
      "ChainGPT Pad & AI NFT Generator DApps.",
      "ChainGPT AI (Discord & Twitter Pilot).",
      "Crypto AI Hub & AI-News Platform.",
      "AI Trading Assistant Launch.",
      "Tron Network & Enhanced Wallet Integration.",
    ],
    moreCount: 22,
  },
  {
    status: "COMPLETED",
    period: "2023: Q1-Q2",
    bullets: [
      "AI Chatbot Prototype & Telegram Bot.",
      "$CGPT Staking, Farming & DAO Voting.",
      "AI Smart Contract Auditor & Generator.",
      "AI NFT Generator Beta.",
      "$CGPT Public & Private Sales.",
    ],
    moreCount: 19,
  },
  {
    status: "COMPLETED",
    period: "2022: Q3-Q4",
    bullets: [
      "ChainGPT Project Inception.",
      "Core Team Assembled.",
      "AI Proof of Concept.",
      "Tokenomics & Burn Mechanism Established.",
      "Whitepaper v1 Released.",
    ],
    moreCount: 14,
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
            Explore our
            <br />
            <span className="cgpt-gradient-text">Roadmap</span>
          </h2>
          <p className="mt-5 max-w-md text-[15px] text-cgpt-fg/70">
            This is a short version of our roadmap.{" "}
            <a href="#" className="cgpt-gradient-text underline-offset-2 hover:underline">
              Read full version here
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
  const inProgress = phase.status === "IN PROGRESS";

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
          RDMP {index} &#9656;
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
          AND {phase.moreCount} MORE ITEMS
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
