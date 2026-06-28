import { cn } from "@/lib/utils";

/* Monochrome review-platform / certification / partner marks used in the
   "trusted by" marquee. Each renders at a consistent optical height and
   inherits `currentColor`, so the marquee can tint them muted and brighten
   on hover. */

type LogoProps = { className?: string };

/* Product Hunt — circled P mark + wordmark */
export function ProductHuntLogo({ className }: LogoProps) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10.5" stroke="currentColor" strokeWidth="1.6" />
        <path
          d="M10 17V7h3.4a2.6 2.6 0 0 1 0 5.2H10"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="font-sans text-[13px] font-semibold leading-tight">
        Product
        <br />
        Hunt
      </span>
    </span>
  );
}

/* G2 — rounded-square mark with "G2" */
export function G2Logo({ className }: LogoProps) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <span className="flex h-[26px] w-[26px] items-center justify-center rounded-md border border-current font-sans text-[13px] font-bold tracking-tight">
        G2
      </span>
      <span className="font-sans text-[16px] font-semibold tracking-tight">G2</span>
    </span>
  );
}

/* Capterra — wordmark + dotted accent */
export function CapterraLogo({ className }: LogoProps) {
  return (
    <span className={cn("flex items-center gap-1.5", className)}>
      <span className="font-sans text-[18px] font-semibold tracking-tight">Capterra</span>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
    </span>
  );
}

/* SOC 2 — shield badge */
export function Soc2Logo({ className }: LogoProps) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 1l8 3v6c0 5-3.4 9.2-8 11-4.6-1.8-8-6-8-11V4l8-3Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path d="M6.5 11l2.3 2.3L13.8 8.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="font-sans text-[15px] font-semibold tracking-tight">SOC 2</span>
    </span>
  );
}

/* ISO 27001 — circular seal */
export function IsoLogo({ className }: LogoProps) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="6.5" stroke="currentColor" strokeWidth="1.1" />
      </svg>
      <span className="font-sans text-[14px] font-semibold leading-tight tracking-tight">
        ISO
        <br />
        27001
      </span>
    </span>
  );
}

/* GDPR — wordmark with EU-style ring */
export function GdprLogo({ className }: LogoProps) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10.5" stroke="currentColor" strokeWidth="1.5" />
        {Array.from({ length: 8 }).map((_, idx) => {
          const a = (idx / 8) * Math.PI * 2;
          const cx = 12 + Math.cos(a) * 6.4;
          const cy = 12 + Math.sin(a) * 6.4;
          return <circle key={idx} cx={cx} cy={cy} r="0.9" fill="currentColor" />;
        })}
      </svg>
      <span className="font-sans text-[16px] font-bold tracking-[0.04em]">GDPR</span>
    </span>
  );
}

/* Google — wordmark */
export function GoogleLogo({ className }: LogoProps) {
  return (
    <span className={cn("inline-flex flex-col items-start leading-tight", className)}>
      <span className="font-sans text-[18px] font-medium tracking-[-0.01em]">Google</span>
      <span className="font-mono text-[9px] uppercase tracking-[0.12em] opacity-70">for Startups</span>
    </span>
  );
}

/* Microsoft — 4-square mark + wordmark */
export function MicrosoftLogo({ className }: LogoProps) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <rect x="0" y="0" width="8" height="8" />
        <rect x="10" y="0" width="8" height="8" />
        <rect x="0" y="10" width="8" height="8" />
        <rect x="10" y="10" width="8" height="8" />
      </svg>
      <span className="inline-flex flex-col items-start leading-tight">
        <span className="font-sans text-[16px] font-semibold tracking-tight">Microsoft</span>
        <span className="font-mono text-[9px] uppercase tracking-[0.12em] opacity-70">for Startups</span>
      </span>
    </span>
  );
}
