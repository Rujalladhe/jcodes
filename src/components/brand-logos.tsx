import type { SVGProps } from "react";
import { cn } from "@/lib/utils";

/* Monochrome partner / award brand marks used in the "AWARDED BY" marquee.
   Each renders at a consistent optical height and inherits `currentColor`,
   so the marquee can tint them muted and brighten on hover. */

type LogoProps = { className?: string };
type IconProps = SVGProps<SVGSVGElement>;

/* BNB Chain — stacked-diamond mark + wordmark */
function BnbDiamond(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 2.4 8.4 6 12 9.6 15.6 6 12 2.4M6 8.4 2.4 12 6 15.6 9.6 12 6 8.4M18 8.4 14.4 12 18 15.6 21.6 12 18 8.4M12 14.4 8.4 18 12 21.6 15.6 18 12 14.4M12 9.6 9.6 12 12 14.4 14.4 12 12 9.6Z" />
    </svg>
  );
}

export function BnbChainLogo({ className }: LogoProps) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <BnbDiamond className="h-[18px] w-[18px]" />
      <span className="font-sans text-[15px] font-semibold tracking-tight">BNB CHAIN</span>
    </span>
  );
}

export function BinanceLogo({ className }: LogoProps) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <BnbDiamond className="h-[18px] w-[18px]" />
      <span className="font-sans text-[15px] font-semibold tracking-[0.04em]">BINANCE</span>
    </span>
  );
}

/* awwwards. — lowercase geometric wordmark */
export function AwwwardsLogo({ className }: LogoProps) {
  return (
    <span className={cn("font-sans text-[20px] font-bold lowercase tracking-[-0.02em]", className)}>
      awwwards<span className="text-cgpt-violet-light">.</span>
    </span>
  );
}

/* FWA — connected-letter wordmark mark */
export function FwaLogo({ className }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <svg width="54" height="22" viewBox="0 0 54 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2 20V2h11M2 11h8M22 2l4 13 4-13 4 13 4-13M44 20l5-18 5 18M46 14h6"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

/* NVIDIA — eye mark + wordmark */
export function NvidiaLogo({ className }: LogoProps) {
  return (
    <span className={cn("flex items-center gap-2", className)}>
      <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 8c2.4-3.4 6-4.6 9-4.6 4.8 0 8 2.4 8 4.6 0 2.2-3.2 4.6-8 4.6-3 0-6.6-1.2-9-4.6Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <ellipse cx="11" cy="8" rx="3.1" ry="3.1" fill="currentColor" />
      </svg>
      <span className="font-sans text-[15px] font-bold tracking-[0.02em]">NVIDIA</span>
    </span>
  );
}

/* Google — wordmark */
export function GoogleLogo({ className }: LogoProps) {
  return (
    <span className={cn("font-sans text-[19px] font-medium tracking-[-0.01em]", className)}>
      Google
    </span>
  );
}

/* AWS — lowercase wordmark + smile */
export function AwsLogo({ className }: LogoProps) {
  return (
    <span className={cn("inline-flex flex-col items-center", className)}>
      <span className="font-sans text-[18px] font-bold lowercase leading-none tracking-tight">aws</span>
      <svg width="34" height="8" viewBox="0 0 34 8" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5">
        <path d="M1 1c8 5 24 5 32 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M27 6l5-1-1 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

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

/* BeInCrypto — wordmark */
export function BeInCryptoLogo({ className }: LogoProps) {
  return (
    <span className={cn("font-sans text-[16px] font-bold tracking-[-0.01em]", className)}>
      BeIn<span className="font-medium">Crypto</span>
    </span>
  );
}
