"use client";

import { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  DoubleDotsIcon,
  ArrowDiagonalIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@/components/icons";

interface CaseStudy {
  title: string;
  tag: string;
}

const CASE_STUDIES: CaseStudy[] = [
  {
    title:
      "How Quantiphi Cut Time-to-Hire by 75% Using InCruiter's Interview as a Service",
    tag: "INTERVIEW AS A SERVICE",
  },
  {
    title:
      "How Xpheno Scaled High-Volume Tech Hiring with 4500+ Expert Interviewers",
    tag: "INCRUITER AI",
  },
  {
    title:
      "How Manhattan Associates Eliminated Interview Fatigue by Outsourcing Panels",
    tag: "INTERVIEW AS A SERVICE",
  },
  {
    title:
      "How Welspun Standardized Hiring with Structured, Data-Driven Evaluations",
    tag: "ANNOUNCEMENTS",
  },
  {
    title:
      "How Atomberg Saved 80% on Hiring Costs with IncBot AI Interviews",
    tag: "INCRUITER AI",
  },
  {
    title:
      "How Lumen Achieved a 70% Round-2 Conversion Rate with IncServe",
    tag: "INTERVIEW AS A SERVICE",
  },
  {
    title:
      "How an IT Staffing Leader Delivered Interview Feedback in Under 6 Hours",
    tag: "INCRUITER AI",
  },
  {
    title:
      "How a Global Enterprise Stopped Interview Fraud with Deepfake Detection",
    tag: "ANNOUNCEMENTS",
  },
  {
    title:
      "How a Fintech Scaleup White-Labelled Its Entire Interview Experience",
    tag: "ANNOUNCEMENTS",
  },
  {
    title:
      "How a SaaS Company Hired 4X Faster Across India, USA & UAE with InCruiter",
    tag: "INCRUITER AI",
  },
];

export function CaseStudies() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByCards = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.85 * dir;
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section
      id="case-studies"
      className="mx-auto max-w-[1320px] bg-cgpt-bg px-5 py-24 lg:px-8"
    >
      {/* Header row */}
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        {/* LEFT: heading block */}
        <div className="max-w-2xl">
          <span className="font-mono flex items-center gap-2 text-[12px] uppercase tracking-[0.04em] text-cgpt-muted">
            <DoubleDotsIcon className="text-cgpt-fg" />
            ..
          </span>
          <h2 className="mt-4 font-sans text-[clamp(2.5rem,6vw,64px)] leading-[1.02]">
            <span className="text-cgpt-fg">Explore our </span>
            <span className="cgpt-gradient-text">Case Studies</span>
          </h2>
        </div>

        {/* RIGHT: controls */}
        <div className="flex flex-col items-start gap-4 lg:items-end">
          <div className="flex items-center gap-4">
            <a
              href="#case-studies"
              className="font-mono flex items-center gap-1.5 text-[11px] uppercase tracking-[0.04em] text-cgpt-muted transition-colors hover:text-cgpt-fg"
            >
              Read More
              <span className="text-cgpt-violet-light">&#9656;</span>
            </a>
            <span className="font-mono text-[11px] uppercase tracking-[0.04em] text-cgpt-fg">
              All Case Studies
            </span>
            <a
              href="#case-studies"
              aria-label="All case studies"
              className="cgpt-gradient-border cgpt-glass flex h-10 w-10 items-center justify-center rounded-md text-cgpt-fg transition-colors hover:text-cgpt-fg-bright"
            >
              <ArrowDiagonalIcon />
            </a>
          </div>

          {/* prev / next */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => scrollByCards(-1)}
              aria-label="Previous case studies"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cgpt-line text-cgpt-fg transition-colors hover:border-white/30 hover:bg-white/5"
            >
              <ArrowLeftIcon />
            </button>
            <button
              type="button"
              onClick={() => scrollByCards(1)}
              aria-label="Next case studies"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-cgpt-line text-cgpt-fg transition-colors hover:border-white/30 hover:bg-white/5"
            >
              <ArrowRightIcon />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={scrollerRef}
        className="hide-scrollbar mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
      >
        {CASE_STUDIES.map((cs, i) => (
          <article
            key={cs.title}
            className="group relative flex w-[88%] shrink-0 snap-start flex-col rounded-lg border border-cgpt-line p-4 transition-colors hover:border-white/30 sm:w-[60%] lg:w-[calc((100%-3rem)/3)]"
          >
            {/* corner brackets */}
            <span className="pointer-events-none absolute -left-px -top-px h-3 w-3 rounded-tl-[3px] border-l border-t border-white/40" />
            <span className="pointer-events-none absolute -right-px -top-px h-3 w-3 rounded-tr-[3px] border-r border-t border-white/40" />
            <span className="pointer-events-none absolute -bottom-px -left-px h-3 w-3 rounded-bl-[3px] border-b border-l border-white/40" />
            <span className="pointer-events-none absolute -bottom-px -right-px h-3 w-3 rounded-br-[3px] border-b border-r border-white/40" />

            {/* image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-cgpt-card-2">
              <Image
                src={`/images/cards/cs-${String(i + 1).padStart(2, "0")}.jpg`}
                alt={cs.title}
                fill
                sizes="(max-width: 640px) 88vw, (max-width: 1024px) 60vw, 420px"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              {/* subtle dark overlay to keep the tag legible */}
              <div className="absolute inset-0 bg-cgpt-bg/35" />
              {/* tag pill */}
              <span
                className={cn(
                  "font-mono absolute left-3 top-3 rounded-full border border-cgpt-line bg-cgpt-bg/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.04em]",
                  cs.tag === "ANNOUNCEMENTS"
                    ? "text-cgpt-gold"
                    : "text-cgpt-teal"
                )}
              >
                {cs.tag}
              </span>
            </div>

            {/* title */}
            <h3 className="mt-5 line-clamp-3 font-sans text-[17px] leading-snug text-cgpt-fg">
              {cs.title}
            </h3>
          </article>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 flex justify-center">
        <a
          href="#case-studies"
          className="cgpt-gradient-border cgpt-glass font-mono flex items-center gap-2 rounded-md px-6 py-3 text-[12px] uppercase tracking-[0.04em] text-cgpt-fg transition-colors hover:text-cgpt-fg-bright"
        >
          Explore All InCruiter Case Studies
          <ArrowDiagonalIcon />
        </a>
      </div>
    </section>
  );
}
