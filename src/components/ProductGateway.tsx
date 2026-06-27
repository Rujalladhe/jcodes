import { cn } from "@/lib/utils";
import { DoubleDotsIcon } from "@/components/icons";

interface Capability {
  no: string;
  title: string;
}

const CAPABILITIES: Capability[] = [
  { no: "01", title: "SMART CONTRACTS DEVELOPMENT" },
  { no: "02", title: "ADVANCED AI TRADING" },
  { no: "03", title: "KNOWLEDGE & GUIDANCE" },
  { no: "04", title: "RISK MANAGEMENT & AML" },
  { no: "05", title: "BLOCKCHAIN & MARKET ANALYTICS" },
  { no: "06", title: "CODE AUDITOR" },
  { no: "07", title: "CHART & TECHNICAL ANALYSIS" },
  { no: "08", title: "CODE EXPLAINER" },
  { no: "09", title: "SOURCE OF NEWS" },
];

export function ProductGateway() {
  return (
    <section
      id="product"
      className="relative mx-auto flex min-h-screen max-w-[1320px] flex-col bg-cgpt-bg px-5 py-24 lg:px-8"
    >
      {/* TOP: eyebrow + heading + subtitle */}
      <div className="relative z-20">
        <span className="cgpt-eyebrow flex items-center gap-2 text-cgpt-muted">
          <DoubleDotsIcon className="text-cgpt-fg" />
          <span className="text-cgpt-fg/80">..</span>
        </span>

        <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-sans text-[clamp(2.5rem,7vw,72px)] leading-[1.0]">
            Your Gateway
            <br />
            To <span className="cgpt-gradient-text">Web3 AI</span>
          </h2>
          <p className="max-w-xs text-base text-cgpt-fg/70 lg:text-right">
            For individuals, developers, and businesses.
          </p>
        </div>
      </div>

      {/* MIDDLE: decorative AI screen + capability list */}
      <div className="relative mt-16 flex flex-1 flex-col gap-16 lg:mt-24 lg:flex-row lg:items-center lg:gap-12">
        {/* CENTER: empty spacer — the pinned Spline robot sits over this column. */}
        <div className="pointer-events-none relative flex flex-1 items-center justify-center" />

        {/* capability list */}
        <ul className="relative z-20 flex-1 lg:max-w-[560px]">
          {CAPABILITIES.map((c) => (
            <li
              key={c.no}
              className="group flex items-center gap-5 border-b border-cgpt-line py-5"
            >
              <span className="font-mono text-sm text-cgpt-muted">{c.no}</span>
              <span
                className={cn(
                  "font-sans text-[22px] leading-tight text-cgpt-fg transition-transform duration-300",
                  "group-hover:translate-x-2 group-hover:cgpt-gradient-text",
                )}
              >
                {c.title}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
