"use client";

import { useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
  DoubleDotsIcon,
  PlusIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
} from "@/components/icons";

type Category = "SOFTWARE" | "AI" | "PAD" | "AIVM" | "LABS";

interface Member {
  name: string;
  role: string;
  category: Category;
}

const MEMBERS: Member[] = [
  { name: "ILAN RAKHMANOV", role: "FOUNDER & CEO (SOFTWARE)", category: "SOFTWARE" },
  { name: "GINTARE KAIRYTE", role: "CEO (LAUNCHPAD)", category: "PAD" },
  { name: "ARIEL ASAFOV", role: "CHIEF OPERATIONS OFFICER", category: "SOFTWARE" },
  { name: "VLAD FILATOV", role: "CHIEF ADMINISTRATION OFFICER", category: "SOFTWARE" },
  { name: "MITCHELL GIRAO", role: "FRACTIONAL CHIEF COMPLIANCE OFFICER", category: "SOFTWARE" },
  { name: "JAYSON BURGESS", role: "CHIEF MARKETING OFFICER", category: "SOFTWARE" },
  { name: "VLAD NAZAR", role: "HEAD OF BUSINESS DEVELOPMENT", category: "SOFTWARE" },
  { name: "DR. ADNAN TARIQ (PH.D.)", role: "HEAD OF AI & CTO", category: "AI" },
  { name: "CHRIS DUGGAN", role: "SENIOR MARKETING MANAGER", category: "SOFTWARE" },
  { name: "KAINAAT", role: "HEAD OF DELIVERY", category: "SOFTWARE" },
  { name: "NEON", role: "HEAD OF RESEARCH", category: "AI" },
  { name: "DASTIN ADAMOWSKI", role: "PRODUCT MANAGER", category: "PAD" },
  { name: "YIGIT GOK", role: "PERFORMANCE MARKETEER", category: "SOFTWARE" },
  { name: "CAMERON FRENCH", role: "DEPUTY CHIEF COMPLIANCE OFFICER", category: "SOFTWARE" },
  { name: "LEDA R.", role: "PEOPLE AND TALENT LEAD", category: "SOFTWARE" },
  { name: "STORM", role: "PROJECT COORDINATOR", category: "PAD" },
  { name: "MARYAM NASEEM", role: "TECH LEAD", category: "AIVM" },
  { name: "ADRIAN KALININ", role: "SENIOR SOFTWARE ENGINEER", category: "AIVM" },
  { name: "UTHMAN YAYI", role: "COMMUNITY MANAGER", category: "LABS" },
  { name: "ABDUL QADIR DAUDA", role: "COMMUNITY MANAGER", category: "LABS" },
];

interface Filter {
  label: string;
  category: Category | "ALL";
}

const FILTERS: Filter[] = [
  { label: "ALL TEAM", category: "ALL" },
  { label: "SOFTWARE", category: "SOFTWARE" },
  { label: "AI", category: "AI" },
  { label: "PAD", category: "PAD" },
  { label: "AIVM", category: "AIVM" },
  { label: "LABS", category: "LABS" },
];

const OCTAGON_CLIP =
  "polygon(14% 0,86% 0,100% 14%,100% 86%,86% 100%,14% 100%,0 86%,0 14%)";

const PARTNER_CHIPS = ["CEX", "CLOUD", "LAYER 1", "ORACLE"];

function initials(name: string): string {
  const words = name
    .replace(/\(.*?\)/g, "")
    .split(/\s+/)
    .filter((w) => /[A-Za-z]/.test(w));
  const letters = words.map((w) => {
    const match = w.match(/[A-Za-z]/);
    return match ? match[0] : "";
  });
  return letters.slice(0, 2).join("").toUpperCase() || name.slice(0, 2).toUpperCase();
}

export function TeamSection() {
  const [active, setActive] = useState<Category | "ALL">("ALL");
  const sliderRef = useRef<HTMLDivElement>(null);

  const visible = useMemo(
    () => (active === "ALL" ? MEMBERS : MEMBERS.filter((m) => m.category === active)),
    [active],
  );

  const scrollBy = (dir: -1 | 1) => {
    sliderRef.current?.scrollBy({ left: dir * 290, behavior: "smooth" });
  };

  return (
    <section
      id="team"
      className="mx-auto max-w-[1320px] bg-cgpt-bg px-5 py-24 lg:px-8"
    >
      {/* Heading block */}
      <div className="flex items-center gap-2 text-cgpt-violet-light">
        <DoubleDotsIcon />
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-cgpt-muted">
          ..
        </span>
      </div>
      <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <h2 className="font-sans text-[clamp(2.5rem,6vw,64px)] leading-[1.02]">
          Faces behind
          <br />
          <span className="cgpt-gradient-text">ChainGPT</span>
        </h2>
        <p className="max-w-sm text-base text-cgpt-muted">
          Learn more about our core team, and get familiar with our partners
          &amp; advisors
        </p>
      </div>

      {/* Stat tabs */}
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <div className="relative cgpt-gradient-border rounded-md">
          <span className="pointer-events-none absolute -left-1 -top-1 h-3 w-3 border-l border-t border-cgpt-fg/50" />
          <span className="pointer-events-none absolute -bottom-1 -right-1 h-3 w-3 border-b border-r border-cgpt-fg/50" />
          <span className="block px-4 py-2.5 font-mono text-[12px] uppercase tracking-wide text-cgpt-fg">
            THE TEAM <span className="text-cgpt-muted">[28]</span>
          </span>
        </div>
        <span className="px-4 py-2.5 font-mono text-[12px] uppercase tracking-wide text-cgpt-muted transition-colors hover:text-cgpt-fg">
          ADVISORS &amp; AMBASSADORS <span className="opacity-70">[8]</span>
        </span>
      </div>

      {/* Categories + filter pills */}
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-cgpt-muted">
          Categories
        </span>
        <span className="hidden h-4 w-px bg-cgpt-line sm:block" />
        {FILTERS.map((f) => {
          const isActive = active === f.category;
          return (
            <button
              key={f.label}
              type="button"
              onClick={() => setActive(f.category)}
              className={cn(
                "rounded-md border px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide transition-colors",
                isActive
                  ? "cgpt-gradient-border border-transparent text-cgpt-fg"
                  : "border-cgpt-line text-cgpt-muted hover:text-cgpt-fg",
              )}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Slider header with arrows */}
      <div className="mt-10 flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-cgpt-muted">
          {visible.length} {visible.length === 1 ? "Member" : "Members"}
        </span>
        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => scrollBy(-1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cgpt-line text-cgpt-fg transition-colors hover:border-cgpt-fg/40"
          >
            <ArrowLeftIcon className="h-3.5 w-auto" />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => scrollBy(1)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cgpt-line text-cgpt-fg transition-colors hover:border-cgpt-fg/40"
          >
            <ArrowRightIcon className="h-3.5 w-auto" />
          </button>
        </div>
      </div>

      {/* Card slider */}
      <div
        ref={sliderRef}
        className="hide-scrollbar mt-5 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4"
      >
        {visible.map((m) => (
          <MemberCard key={m.name} member={m} />
        ))}
      </div>

      {/* Partners & projects row */}
      <div className="mt-12 rounded-lg border border-cgpt-line bg-cgpt-card/40 p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[12px] uppercase tracking-wide text-cgpt-fg">
              Partners &amp; Projects
            </span>
            <span className="font-mono text-[12px] text-cgpt-muted">(184)</span>
          </div>
          <a
            href="#partners"
            className="font-mono text-[11px] uppercase tracking-wide text-cgpt-violet-light transition-colors hover:text-cgpt-fg"
          >
            View all
          </a>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {PARTNER_CHIPS.map((chip) => (
            <span
              key={chip}
              className="rounded-md border border-cgpt-line px-3 py-1.5 font-mono text-[11px] uppercase tracking-wide text-cgpt-muted"
            >
              {chip}
            </span>
          ))}
        </div>
        <a
          href="#partners"
          className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide text-cgpt-fg transition-colors hover:text-cgpt-violet-light"
        >
          Explore all our innovative network
          <ArrowRightIcon className="h-3 w-auto" />
        </a>
      </div>
    </section>
  );
}

function MemberCard({ member }: { member: Member }) {
  return (
    <article className="flex w-[260px] shrink-0 snap-start flex-col rounded-lg border border-cgpt-line bg-cgpt-card p-4">
      {/* Name */}
      <div className="flex items-center gap-2">
        <span className="text-cgpt-violet-light">&#9656;</span>
        <h3 className="font-mono text-[13px] uppercase leading-tight text-cgpt-fg">
          {member.name}
        </h3>
      </div>

      {/* Octagon photo frame */}
      <div className="mt-4 flex justify-center">
        <div
          className="relative h-[200px] w-[200px]"
          style={{ clipPath: OCTAGON_CLIP, background: "var(--cgpt-gradient)" }}
        >
          <div
            className="absolute inset-[2px] flex items-center justify-center bg-cgpt-card-2 grayscale"
            style={{ clipPath: OCTAGON_CLIP }}
          >
            <span className="font-sans text-4xl text-cgpt-muted">
              {initials(member.name)}
            </span>
          </div>
        </div>
      </div>

      {/* Role */}
      <p className="mt-4 font-mono text-[11px] uppercase leading-snug text-cgpt-muted">
        {member.role}
      </p>

      {/* BIO row */}
      <div className="mt-4 flex items-center justify-between border-t border-cgpt-line pt-3">
        <span className="font-mono text-[11px] uppercase tracking-wide text-cgpt-muted">
          Bio
        </span>
        <button
          type="button"
          aria-label={`Expand bio for ${member.name}`}
          className="flex h-7 w-7 items-center justify-center rounded-full border border-cgpt-line text-cgpt-fg transition-colors hover:border-cgpt-fg/40"
        >
          <PlusIcon className="h-3 w-3" />
        </button>
      </div>
    </article>
  );
}
