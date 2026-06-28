import type { ComponentType } from "react";
import { cn } from "@/lib/utils";
import {
  CapterraLogo,
  G2Logo,
  GdprLogo,
  GoogleLogo,
  IsoLogo,
  MicrosoftLogo,
  ProductHuntLogo,
  Soc2Logo,
} from "@/components/brand-logos";

interface Award {
  title: string;
  subtitle: string;
  Logo: ComponentType<{ className?: string }>;
}

const AWARDS: Award[] = [
  { title: "5 / 5 RATING", subtitle: "253 REVIEWS", Logo: ProductHuntLogo },
  { title: "4.6 / 5 RATING", subtitle: "131 REVIEWS", Logo: G2Logo },
  { title: "4.9 / 5 RATING", subtitle: "60 REVIEWS", Logo: CapterraLogo },
  { title: "HIGH PERFORMER", subtitle: "ASIA PACIFIC", Logo: G2Logo },
  { title: "ENTERPRISE LEADER", subtitle: "G2 — 2026", Logo: G2Logo },
  { title: "SOC 2 CERTIFIED", subtitle: "DATA SECURITY", Logo: Soc2Logo },
  { title: "ISO 27001", subtitle: "INFORMATION SECURITY", Logo: IsoLogo },
  { title: "GDPR COMPLIANT", subtitle: "DATA PRIVACY", Logo: GdprLogo },
  { title: "GOOGLE FOR STARTUPS", subtitle: "PROGRAM MEMBER", Logo: GoogleLogo },
  { title: "MICROSOFT FOR STARTUPS", subtitle: "PROGRAM MEMBER", Logo: MicrosoftLogo },
];

/* Thin L-shaped corner brackets framing the logo plate */
function CornerBrackets() {
  return (
    <>
      <span className="pointer-events-none absolute left-0 top-0 h-3.5 w-3.5 border-l border-t border-cgpt-fg/35" />
      <span className="pointer-events-none absolute right-0 top-0 h-3.5 w-3.5 border-r border-t border-cgpt-fg/35" />
      <span className="pointer-events-none absolute bottom-0 left-0 h-3.5 w-3.5 border-b border-l border-cgpt-fg/35" />
      <span className="pointer-events-none absolute bottom-0 right-0 h-3.5 w-3.5 border-b border-r border-cgpt-fg/35" />
    </>
  );
}

function AwardItem({ title, subtitle, Logo }: Award) {
  return (
    <div className="group flex w-[230px] shrink-0 flex-col gap-4 px-5">
      {/* logo plate with corner brackets */}
      <div className="relative flex h-[92px] items-center justify-center px-6">
        <CornerBrackets />
        <Logo className="text-cgpt-fg/70 transition-colors duration-300 group-hover:text-cgpt-fg" />
      </div>

      {/* title + subtitle */}
      <div className="flex flex-col gap-1">
        <span className="font-mono whitespace-nowrap text-[13px] font-bold uppercase leading-tight tracking-wide text-cgpt-fg">
          {title}
        </span>
        <span className="font-mono whitespace-nowrap text-[12px] uppercase leading-tight tracking-wide text-cgpt-muted">
          {subtitle}
        </span>
      </div>
    </div>
  );
}

export function AwardsMarquee() {
  return (
    <section id="reviews" className="relative bg-cgpt-bg py-16">
      {/* thin gradient top accent */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "var(--cgpt-gradient)" }}
      />

      <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-0">
        {/* scrolling strip */}
        <div className="relative flex-1 overflow-hidden">
          {/* left + right fade masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-cgpt-bg to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-cgpt-bg to-transparent" />

          <div className={cn("flex w-max animate-cgpt-marquee")}>
            {/* render items twice for a seamless loop */}
            {[0, 1].map((dup) => (
              <div key={dup} className="flex" aria-hidden={dup === 1}>
                {AWARDS.map((award, i) => (
                  <AwardItem key={`${dup}-${i}`} {...award} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
