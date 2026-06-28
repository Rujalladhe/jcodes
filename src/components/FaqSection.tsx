"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { PlusIcon, MinusIcon, DoubleDotsIcon } from "@/components/icons";

interface FaqItem {
  q: string;
  a: string;
}

interface FaqCategory {
  category: string;
  items: FaqItem[];
}

const FAQ_DATA: FaqCategory[] = [
  {
    category: "AI INTERVIEWS",
    items: [
      {
        q: "How does AI Interview Software fast-track screening?",
        a: "It saves up to 75% of hiring time by automating the interview process — analyzing responses, assessing skills, and evaluating role fit, so your team only spends time on the strongest candidates.",
      },
      {
        q: "What's the difference between a one-way and a two-way AI interview?",
        a: "A one-way interview uses fixed questions with no real-time interaction. A two-way interview uses Conversational AI that listens, understands, and asks dynamic follow-ups for a deeper, more accurate evaluation.",
      },
      {
        q: "Is AI Interview Software suitable for all industries?",
        a: "Yes. InCruiter is used across IT, Finance, Retail, Healthcare, Manufacturing, and Customer Support, and is fully configurable per role.",
      },
      {
        q: "How does InCruiter prevent interview fraud?",
        a: "InCruiter is the first platform to integrate deepfake detection into the AI video interview ecosystem — detecting altered videos, face-swap attempts, AI-generated voices, and AI avatars, then flagging them with a risk score in the post-interview report.",
      },
    ],
  },
  {
    category: "INTERVIEW AS A SERVICE",
    items: [
      {
        q: "What is Interview as a Service?",
        a: "It's a modern hiring solution that outsources your interviews to industry experts — combining expert panels and AI interviews to make hiring seamless, structured, and fast.",
      },
      {
        q: "What are IncServe's key features?",
        a: "A network of 4500+ expert interviewers, a 6-hour turnaround time, resume scoring, technical / soft-skill / leadership assessments, AI JD creation, and AI-generated screening questions.",
      },
      {
        q: "How quickly will I receive feedback?",
        a: "Our 4500+ expert interviewers evaluate candidates in around 6 hours, and you receive detailed feedback reports — including recordings and analytics — in roughly 2 hours after the interview.",
      },
    ],
  },
  {
    category: "PLATFORM",
    items: [
      {
        q: "Which platform is best for video interviews?",
        a: "InCruiter — with features like JD-to-CV matching, AI JD creation, a live code compiler, AI proctoring, and built-in evaluations purpose-built for hiring.",
      },
      {
        q: "How is InCruiter different from Zoom, Google Meet, or MS Teams?",
        a: "Those are general video-conferencing tools. InCruiter is a dedicated interview platform with interview-specific technology — code collaboration, AI feedback, cheat-proof proctoring, and white-labelled reports.",
      },
    ],
  },
];

export function FaqSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = FAQ_DATA[activeTab].items;

  const handleTab = (index: number) => {
    setActiveTab(index);
    setOpenIndex(0);
  };

  return (
    <section id="faq" className="bg-cgpt-bg">
      <div className="mx-auto max-w-[1320px] px-5 py-24 lg:px-8">
        {/* Heading block */}
        <div className="mb-12 max-w-2xl">
          <span className="cgpt-eyebrow flex items-center gap-2 text-cgpt-muted">
            <DoubleDotsIcon className="text-cgpt-violet-light" />
            FAQ
          </span>
          <h2 className="font-sans mt-4 leading-[1.02] text-cgpt-fg text-[clamp(2.5rem,6vw,64px)]">
            Frequently asked
            <br />
            Questions
          </h2>
          <p className="mt-5 text-cgpt-muted">
            Can&apos;t find an answer to your question? Feel free to{" "}
            <a
              href="mailto:contact@incruiter.com"
              className="cgpt-gradient-text font-medium hover:opacity-80"
            >
              contact us
            </a>
            .
          </p>
        </div>

        {/* Category tabs */}
        <div className="mb-4 flex flex-wrap gap-3">
          {FAQ_DATA.map((cat, index) => {
            const active = index === activeTab;
            return (
              <button
                key={cat.category}
                type="button"
                onClick={() => handleTab(index)}
                className={cn(
                  "font-mono relative rounded-md px-5 py-3 text-[12px] uppercase tracking-wide transition-colors",
                  active
                    ? "cgpt-gradient-border text-cgpt-fg"
                    : "border border-cgpt-line text-cgpt-muted hover:text-cgpt-fg"
                )}
              >
                {/* corner brackets on the active tab */}
                {active && (
                  <>
                    <span className="pointer-events-none absolute -left-[3px] -top-[3px] h-2 w-2 border-l border-t border-cgpt-violet-light" />
                    <span className="pointer-events-none absolute -right-[3px] -top-[3px] h-2 w-2 border-r border-t border-cgpt-violet-light" />
                    <span className="pointer-events-none absolute -bottom-[3px] -left-[3px] h-2 w-2 border-b border-l border-cgpt-violet-light" />
                    <span className="pointer-events-none absolute -bottom-[3px] -right-[3px] h-2 w-2 border-b border-r border-cgpt-violet-light" />
                  </>
                )}
                {cat.category}
              </button>
            );
          })}
        </div>

        {/* Accordion */}
        <div className="border-t border-cgpt-line">
          {items.map((item, index) => {
            const open = openIndex === index;
            return (
              <div key={item.q} className="border-b border-cgpt-line">
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : index)}
                  aria-expanded={open}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span
                    className={cn(
                      "font-sans text-[20px] leading-snug transition-colors",
                      open ? "text-cgpt-fg" : "text-cgpt-fg/90 hover:text-cgpt-fg"
                    )}
                  >
                    {item.q}
                  </span>
                  <span
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cgpt-line transition-colors",
                      open ? "text-cgpt-violet-light" : "text-cgpt-fg"
                    )}
                  >
                    {open ? <MinusIcon /> : <PlusIcon />}
                  </span>
                </button>

                {/* Animated answer panel */}
                <div
                  className={cn(
                    "grid transition-all duration-300 ease-out",
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-3xl pb-6 text-[15px] leading-relaxed text-cgpt-muted">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
