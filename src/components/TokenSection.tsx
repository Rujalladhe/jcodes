"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { DoubleDotsIcon, ArrowDiagonalIcon } from "@/components/icons";

const TOKEN_FEATURES = [
  "CHAINGPT AI ACCESS",
  "API & SDK ACCESS",
  "DAO & VOTING",
  "STAKING & FARMING",
  "ACCESS TO IDOS",
  "LIQUIDITY PROVIDING",
] as const;

const AUDITORS = ["CERTIK", "HACKEN"] as const;

const BUY_FROM = ["Binance", "PancakeSwap"] as const;

const LISTED_ON = ["Binance", "Bybit", "KuCoin", "Gate.io"] as const;

const CONTRACT_ADDRESS = "0x...f00f98";

export function TokenSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section
      id="token"
      className="relative mx-auto max-w-[1320px] overflow-hidden bg-cgpt-bg px-5 py-24 lg:px-8"
    >
      {/* Big heading */}
      <h2 className="font-sans text-[clamp(3rem,8vw,90px)] leading-[0.95] text-cgpt-fg">
        $CGPT
      </h2>

      {/* 3-zone layout */}
      <div className="relative mt-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-3 lg:gap-6">
        {/* LEFT: paragraph */}
        <div className="order-2 lg:order-1">
          <p className="max-w-xs text-base leading-relaxed text-cgpt-fg/70">
            The ChainGPT ecosystem is backed and powered by the $CGPT token.
            Gain voting power in the DAO, access to premium AI tools, and more!
          </p>
        </div>

        {/* CENTER: coin with radial glow */}
        <div className="relative order-1 flex items-center justify-center lg:order-2">
          {/* soft radial glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-3xl"
            style={{ background: "var(--cgpt-gradient)" }}
          />
          <div className="relative animate-cgpt-float">
            <Image
              src="/images/token-coin.webp"
              alt="$CGPT token coin"
              width={520}
              height={520}
              priority
              className="h-auto w-[300px] sm:w-[420px] lg:w-[520px]"
            />
          </div>
        </div>

        {/* RIGHT: features list */}
        <div className="order-3 lg:order-3">
          <div className="flex items-center justify-end gap-2">
            <DoubleDotsIcon className="text-cgpt-muted" />
            <span className="font-mono text-[12px] uppercase tracking-wide text-cgpt-muted">
              Features of the Token
            </span>
          </div>
          <ul className="mt-5 space-y-3">
            {TOKEN_FEATURES.map((feature) => (
              <li
                key={feature}
                className="font-mono flex items-center justify-end gap-2 border-b border-cgpt-line/60 pb-2 text-[12px] uppercase tracking-wide text-cgpt-fg/80"
              >
                <span className="text-cgpt-violet-light">&#9666;</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* BOTTOM bar */}
      <div className="mt-16 grid grid-cols-1 border border-cgpt-line lg:grid-cols-3 lg:divide-x lg:divide-cgpt-line">
        {/* AUDITED BY cell */}
        <div className="flex flex-col gap-4 border-b border-cgpt-line p-6 lg:border-b-0">
          <span className="font-mono text-[12px] uppercase tracking-wide text-cgpt-muted">
            Audited by
          </span>
          <div className="flex items-center gap-5">
            {AUDITORS.map((name) => (
              <span
                key={name}
                className="font-sans text-lg uppercase tracking-wide text-cgpt-fg/80"
              >
                {name}
              </span>
            ))}
          </div>
          {/* contract chip */}
          <div className="mt-1 flex w-fit items-center gap-2 rounded-md border border-cgpt-line px-3 py-2">
            <span className="font-mono text-[12px] tracking-wide text-cgpt-fg/70">
              {CONTRACT_ADDRESS}
            </span>
            <button
              type="button"
              onClick={handleCopy}
              aria-label="Copy contract address"
              className={cn(
                "flex h-5 w-5 items-center justify-center rounded transition-colors hover:text-cgpt-fg",
                copied ? "text-cgpt-teal" : "text-cgpt-muted"
              )}
            >
              <CopyGlyph />
            </button>
          </div>
        </div>

        {/* BUY FROM cell */}
        <div className="flex flex-col gap-4 border-b border-cgpt-line p-6 lg:border-b-0">
          <span className="font-mono text-[12px] uppercase tracking-wide text-cgpt-muted">
            Buy from:
          </span>
          <div className="flex flex-col gap-3">
            {BUY_FROM.map((name) => (
              <a
                key={name}
                href="#"
                className="group flex items-center justify-between gap-3 text-cgpt-fg/80 transition-colors hover:text-cgpt-fg"
              >
                <span className="flex items-center gap-2">
                  <span className="font-sans text-base">{name}</span>
                  <span className="rounded border border-cgpt-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-cgpt-muted">
                    Popular
                  </span>
                </span>
                <ArrowDiagonalIcon className="text-cgpt-muted transition-colors group-hover:text-cgpt-fg" />
              </a>
            ))}
          </div>
        </div>

        {/* LISTED ON cell */}
        <div className="flex flex-col gap-4 p-6">
          <span className="font-mono text-[12px] uppercase tracking-wide text-cgpt-muted">
            Listed on:
          </span>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {LISTED_ON.map((name) => (
              <span
                key={name}
                className="font-mono text-[12px] uppercase tracking-wide text-cgpt-fg/70"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CopyGlyph() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="4.5"
        y="4.5"
        width="8"
        height="8"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M9.5 4.5V3a1.5 1.5 0 0 0-1.5-1.5H3A1.5 1.5 0 0 0 1.5 3v5A1.5 1.5 0 0 0 3 9.5h1.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
