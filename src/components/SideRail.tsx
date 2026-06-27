"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const SECTIONS: { id: string; label: string }[] = [
  { id: "intro", label: "INTRO" },
  { id: "product", label: "PRODUCT" },
  { id: "reviews", label: "REVIEWS" },
  { id: "solutions", label: "SOLUTIONS" },
  { id: "case-studies", label: "CASE STUDIES" },
  { id: "ecosystem", label: "ECOSYSTEM" },
  { id: "pricing", label: "PRICING" },
  { id: "token", label: "OUR TOKEN" },
  { id: "team", label: "TEAM" },
  { id: "roadmap", label: "ROADMAP" },
  { id: "faq", label: "F.A.Q" },
  { id: "join", label: "JOIN" },
];

export function SideRail() {
  const [active, setActive] = useState("intro");

  useEffect(() => {
    const onScroll = () => {
      const mid = window.scrollY + window.innerHeight / 2;
      let current = SECTIONS[0].id;
      for (const s of SECTIONS) {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= mid) current = s.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed right-3 top-1/2 z-[900] hidden -translate-y-1/2 flex-col items-end gap-3 xl:flex">
      {SECTIONS.map((s) => {
        const isActive = active === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="pointer-events-auto group flex items-center justify-end gap-2"
          >
            <span
              className={cn(
                "font-mono text-[10px] uppercase tracking-widest transition-all duration-200",
                isActive ? "text-cgpt-fg opacity-100" : "text-cgpt-muted opacity-0 group-hover:opacity-100"
              )}
            >
              {s.label}
            </span>
            <span
              className={cn(
                "h-1.5 w-1.5 rounded-full transition-all duration-200",
                isActive ? "bg-cgpt-fg scale-125" : "bg-cgpt-muted/50 group-hover:bg-cgpt-muted"
              )}
            />
          </a>
        );
      })}
    </div>
  );
}
