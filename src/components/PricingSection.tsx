"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowDiagonalIcon, DoubleDotsIcon } from "@/components/icons";

interface PricingRow {
  label: string;
  value: string;
}

interface PricingCard {
  title: string;
  rows: PricingRow[];
  /** single centered line for "FREE UNLIMITED" style cards */
  single?: string;
}

const CARDS: PricingCard[] = [
  {
    title: "General Chatbot",
    rows: [
      { label: "Free usages daily", value: "50" },
      { label: "Per usage afterwards", value: "0.5" },
    ],
  },
  {
    title: "Smart Contract Auditor",
    rows: [
      { label: "Free usages daily", value: "10" },
      { label: "Per usage afterwards", value: "1" },
    ],
  },
  {
    title: "Smart Contract Generator",
    rows: [
      { label: "Free usages daily", value: "10" },
      { label: "Per usage afterwards", value: "2" },
    ],
  },
  {
    title: "AI Trading Assistant",
    rows: [
      { label: "Free usages daily", value: "20" },
      { label: "Per usage afterwards", value: "2" },
    ],
  },
  {
    title: "AI NFT Generator",
    rows: [
      { label: "Free images daily", value: "50" },
      { label: "Using models (per image)", value: "1" },
    ],
  },
  {
    title: "Ask Crypto People",
    rows: [
      { label: "Free usages daily", value: "50" },
      { label: "Per usage afterwards", value: "1" },
    ],
  },
  {
    title: "AI News Generator",
    rows: [],
    single: "Free Unlimited",
  },
  {
    title: "CryptoGuard",
    rows: [],
    single: "Free Unlimited",
  },
];

export function PricingSection() {
  const [apiPricing, setApiPricing] = useState(false);

  return (
    <section id="pricing" className="bg-cgpt-bg">
      <div className="mx-auto max-w-[1320px] px-5 py-24 lg:px-8">
        {/* ===== Heading block ===== */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-end">
          {/* LEFT: eyebrow + big heading */}
          <div>
            <span className="font-mono flex items-center gap-2 text-[12px] uppercase tracking-[0.15em] text-cgpt-muted">
              <DoubleDotsIcon className="text-cgpt-muted" />
              Pricing
            </span>

            <h2 className="font-sans relative mt-5 inline-block text-[clamp(2.5rem,6vw,64px)] leading-[1.02]">
              <span className="relative inline-block px-1">
                Our Pricing
                {/* gradient underline */}
                <span
                  className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full"
                  style={{ background: "var(--cgpt-gradient)" }}
                />
                {/* thin corner brackets */}
                <span className="pointer-events-none absolute -left-3 -top-3 h-4 w-4 rounded-tl-[3px] border-l border-t border-white/40" />
                <span className="pointer-events-none absolute -bottom-3 -right-3 h-4 w-4 rounded-br-[3px] border-b border-r border-white/40" />
              </span>
            </h2>
          </div>

          {/* RIGHT: intro paragraph */}
          <div className="lg:pb-2">
            <p className="text-base leading-relaxed text-cgpt-fg/70">
              ChainGPT offers a variety of solutions that allow retail users and
              developers to access advanced Web3 AI tools. Pay-as-you-go with
              CGPT credits.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-cgpt-fg/70">
              Credits &mdash; &ldquo;CGPT Credits&rdquo;. 1 credit = $0.01
            </p>
          </div>
        </div>

        {/* ===== Toggle row ===== */}
        <div className="mt-10 flex items-center gap-3">
          <button
            type="button"
            role="switch"
            aria-checked={apiPricing}
            aria-label="Switch to API pricing"
            onClick={() => setApiPricing((v) => !v)}
            className={cn(
              "relative inline-flex h-6 w-11 shrink-0 items-center rounded-full border border-cgpt-line transition-colors",
              apiPricing ? "bg-cgpt-violet/70" : "bg-cgpt-card"
            )}
          >
            <span
              className={cn(
                "inline-block h-4 w-4 rounded-full bg-cgpt-fg transition-transform",
                apiPricing ? "translate-x-6" : "translate-x-1"
              )}
            />
          </button>
          <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-cgpt-muted">
            Switch to API pricing
          </span>
        </div>

        {/* ===== Pricing grid ===== */}
        <div className="mt-12 grid grid-cols-1 border-t border-l border-cgpt-line md:grid-cols-2 lg:grid-cols-4">
          {CARDS.map((card) => (
            <PricingCell key={card.title} card={card} />
          ))}
        </div>

        {/* ===== View full pricing ===== */}
        <div className="mt-12 flex justify-center">
          <a
            href="#"
            className="cgpt-gradient-border cgpt-glass font-mono group inline-flex items-center gap-2 rounded-md px-6 py-3 text-[12px] uppercase tracking-[0.12em] text-cgpt-fg transition-colors hover:text-cgpt-fg-bright"
          >
            View full pricing
            <ArrowDiagonalIcon className="text-cgpt-fg transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}

function PricingCell({ card }: { card: PricingCard }) {
  return (
    <div className="flex min-h-[220px] flex-col items-center justify-center gap-5 border-r border-b border-cgpt-line px-6 py-10 text-center">
      <h3 className="font-sans text-[22px] leading-tight text-cgpt-fg">
        {card.title}
      </h3>

      {card.single ? (
        <p className="cgpt-gradient-text font-sans text-2xl">{card.single}</p>
      ) : (
        <div className="w-full">
          {card.rows.map((row, idx) => (
            <div
              key={row.label}
              className={cn(
                "flex flex-col items-center gap-1 py-3",
                idx > 0 && "border-t border-cgpt-line"
              )}
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-cgpt-muted">
                {row.label}
              </span>
              <span className="font-sans text-xl text-cgpt-fg">{row.value}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
