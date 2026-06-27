import { cn } from "@/lib/utils";

interface Award {
  title: string;
  subtitle: string;
}

const AWARDS: Award[] = [
  { title: "$100,000 GRANT", subtitle: "FROM NVIDIA" },
  { title: "$1M IN AWS CREDITS", subtitle: "FROM AMAZON WEB SERVICES" },
  { title: "$350,000 GRANT", subtitle: "FROM GOOGLE" },
  { title: "GAS GRANT OF THE YEAR", subtitle: "FROM BNB CHAIN" },
  { title: "ECOSYSTEM CATALYST AWARD", subtitle: "FROM BNB CHAIN" },
  { title: "SITE OF THE DAY", subtitle: "SEPTEMBER 13, 2023" },
  { title: "FWA OF THE DAY", subtitle: "SEPTEMBER 19, 2023" },
  { title: "BEINCRYPTO EXCELLENCE", subtitle: "2024 BEST AI PROJECT" },
  { title: "SITE OF THE DAY", subtitle: "NOVEMBER 30, 2024" },
  { title: "#1 WEB3 APP", subtitle: "BY PRODUCTHUNT" },
  { title: "INNOVATION EXCELLENCE", subtitle: "BY BINANCE" },
];

function AwardItem({ title, subtitle }: Award) {
  return (
    <div className="flex shrink-0 flex-col justify-center gap-1 border-l border-cgpt-line px-8">
      <span className="font-mono whitespace-nowrap text-[14px] font-bold uppercase leading-tight tracking-wide text-cgpt-fg">
        {title}
      </span>
      <span className="font-mono whitespace-nowrap text-[12px] uppercase leading-tight tracking-wide text-cgpt-muted">
        {subtitle}
      </span>
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

      <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-0">
        {/* fixed label on the far left */}
        <div className="flex shrink-0 items-center px-5 lg:px-8">
          <span className="font-mono text-xs uppercase tracking-wide text-cgpt-muted">
            Awarded By
          </span>
        </div>

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
