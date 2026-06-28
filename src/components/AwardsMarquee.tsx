import type { ComponentType } from "react";
import { cn } from "@/lib/utils";
import {
  AwsLogo,
  AwwwardsLogo,
  BeInCryptoLogo,
  BinanceLogo,
  BnbChainLogo,
  FwaLogo,
  GoogleLogo,
  NvidiaLogo,
  ProductHuntLogo,
} from "@/components/brand-logos";

interface Award {
  title: string;
  subtitle: string;
  Logo: ComponentType<{ className?: string }>;
}

const AWARDS: Award[] = [
  { title: "$100,000 GRANT", subtitle: "FROM NVIDIA", Logo: NvidiaLogo },
  { title: "$1M IN AWS CREDITS", subtitle: "FROM AMAZON WEB SERVICES", Logo: AwsLogo },
  { title: "$350,000 GRANT", subtitle: "FROM GOOGLE", Logo: GoogleLogo },
  { title: "GAS GRANT OF THE YEAR", subtitle: "FROM BNB CHAIN", Logo: BnbChainLogo },
  { title: "ECOSYSTEM CATALYST AWARD", subtitle: "FROM BNB CHAIN", Logo: BnbChainLogo },
  { title: "SITE OF THE DAY", subtitle: "SEPTEMBER 13, 2023", Logo: AwwwardsLogo },
  { title: "FWA OF THE DAY", subtitle: "SEPTEMBER 19, 2023", Logo: FwaLogo },
  { title: "BEINCRYPTO EXCELLENCE", subtitle: "2024 BEST AI PROJECT", Logo: BeInCryptoLogo },
  { title: "SITE OF THE DAY", subtitle: "NOVEMBER 30, 2024", Logo: AwwwardsLogo },
  { title: "#1 WEB3 APP", subtitle: "BY PRODUCTHUNT", Logo: ProductHuntLogo },
  { title: "INNOVATION EXCELLENCE", subtitle: "BY BINANCE", Logo: BinanceLogo },
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
