"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { DoubleDotsIcon, ArrowDiagonalIcon } from "@/components/icons";

const TOKEN_FEATURES = [
  "SPEECH-TO-TEXT (STT)",
  "NATURAL LANGUAGE (NLP)",
  "GENERATIVE AI",
  "TEXT-TO-SPEECH (TTS)",
  "ASR TRANSCRIPTION",
  "DEEPFAKE DETECTION",
] as const;

const AUDITORS = ["SOC 2", "ISO 27001"] as const;

const INTEGRATIONS = ["Greenhouse", "Workday"] as const;

const TRUSTED_BY = ["Xpheno", "Lumen", "Welspun", "Quantiphi"] as const;

const CONTRACT_ADDRESS = "contact@incruiter.com";

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
        IncBot AI
      </h2>

      {/* 3-zone layout */}
      <div className="relative mt-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-3 lg:gap-6">
        {/* LEFT: paragraph */}
        <div className="order-2 lg:order-1">
          <p className="max-w-xs text-base leading-relaxed text-cgpt-fg/70">
            InCruiter&apos;s AI Interview engine is powered by Conversational AI.
            Built on STT, NLP, GenAI &amp; TTS for human-like, unbiased interviews
            in all major languages and local accents.
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
              src="/images/6f91bfe4-c3c1-42f8-9625-1882fe6388c0.png"
              alt="InCruiter IncBot AI engine"
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
              Powered By
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
        {/* CERTIFIED BY cell */}
        <div className="flex flex-col gap-4 border-b border-cgpt-line p-6 lg:border-b-0">
          <span className="font-mono text-[12px] uppercase tracking-wide text-cgpt-muted">
            Certified by
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
              aria-label="Copy contact email"
              className={cn(
                "flex h-5 w-5 items-center justify-center rounded transition-colors hover:text-cgpt-fg",
                copied ? "text-cgpt-teal" : "text-cgpt-muted"
              )}
            >
              <CopyGlyph />
            </button>
          </div>
        </div>

        {/* INTEGRATES WITH cell */}
        <div className="flex flex-col gap-4 border-b border-cgpt-line p-6 lg:border-b-0">
          <span className="font-mono text-[12px] uppercase tracking-wide text-cgpt-muted">
            Integrates with:
          </span>
          <div className="flex flex-col gap-3">
            {INTEGRATIONS.map((name) => (
              <a
                key={name}
                href="#"
                className="group flex items-center justify-between gap-3 text-cgpt-fg/80 transition-colors hover:text-cgpt-fg"
              >
                <span className="flex items-center gap-2">
                  <span className="font-sans text-base">{name}</span>
                  <span className="rounded border border-cgpt-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-cgpt-muted">
                    ATS
                  </span>
                </span>
                <ArrowDiagonalIcon className="text-cgpt-muted transition-colors group-hover:text-cgpt-fg" />
              </a>
            ))}
          </div>
        </div>

        {/* TRUSTED BY cell */}
        <div className="flex flex-col gap-4 p-6">
          <span className="font-mono text-[12px] uppercase tracking-wide text-cgpt-muted">
            Trusted by:
          </span>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {TRUSTED_BY.map((name) => (
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
