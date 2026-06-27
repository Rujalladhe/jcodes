import { cn } from "@/lib/utils";
import { DoubleDotsIcon, PlusIcon } from "@/components/icons";

interface EcosystemNode {
  label: string;
  expandable?: boolean;
}

interface EcosystemLayer {
  index: string;
  title: string;
  nodes: EcosystemNode[];
}

const LAYERS: EcosystemLayer[] = [
  {
    index: "01",
    title: "AI Application Layer",
    nodes: [
      { label: "Web3 AI Chatbot", expandable: true },
      { label: "Crypto Alerts" },
      { label: "AI Agent Engine", expandable: true },
      { label: "Telegram Chatbot" },
      { label: "CryptoGuard Extension" },
      { label: "AI Assistants & Compliance AI" },
      { label: "Smart Contract Generator & Auditor", expandable: true },
      { label: "AI Trading Assistant" },
      { label: "AI NFT Generator" },
      { label: "Ask Crypto People" },
      { label: "Chart Analysis AI" },
      { label: "Solidity LLM" },
    ],
  },
  {
    index: "02",
    title: "$CGPT Token Layer",
    nodes: [
      { label: "Staking & Farming", expandable: true },
      { label: "DAO Governance" },
      { label: "API Credits" },
      { label: "Buyback & Burn" },
      { label: "IDO Access" },
      { label: "Liquidity" },
    ],
  },
  {
    index: "03",
    title: "AIVM Blockchain Layer",
    nodes: [
      { label: "Decentralized AI", expandable: true },
      { label: "On-Chain LLM Training" },
      { label: "GPU Marketplace" },
      { label: "AI Data Marketplace" },
      { label: "Agent Runtime" },
      { label: "On/Off-Chain Inference" },
    ],
  },
  {
    index: "04",
    title: "Labs & Launchpads",
    nodes: [
      { label: "ChainGPT Pad", expandable: true },
      { label: "DegenPad" },
      { label: "ChainGPT Labs" },
      { label: "Incubation Program" },
      { label: "Grants Program" },
      { label: "OTC Marketplace" },
    ],
  },
];

function NodeTile({ node }: { node: EcosystemNode }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={cn(
          "group relative flex w-full flex-col items-center gap-3 rounded-2xl border border-cgpt-line bg-cgpt-card p-4",
          "transition-colors duration-300 hover:border-white/25",
        )}
      >
        {/* hover gradient glow */}
        <span
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(120px 80px at 50% 0%, rgba(255,45,70,0.18), transparent 70%)",
          }}
        />
        {/* stylized icon glyph */}
        <span
          className="relative flex h-11 w-11 items-center justify-center rounded-xl"
          style={{ background: "var(--cgpt-gradient)" }}
        >
          <span className="flex h-[34px] w-[34px] items-center justify-center rounded-[9px] bg-cgpt-bg">
            <DoubleDotsIcon className="text-cgpt-fg/80" />
          </span>
        </span>
        <span className="font-mono relative text-center text-[11px] uppercase leading-tight tracking-wide text-cgpt-fg">
          {node.label}
        </span>
      </div>
      {node.expandable ? (
        <button
          type="button"
          aria-label={`Expand ${node.label}`}
          className="flex h-7 w-7 items-center justify-center rounded-full border border-cgpt-line text-cgpt-muted transition-colors hover:border-white/30 hover:text-cgpt-fg"
        >
          <PlusIcon className="h-3 w-3" />
        </button>
      ) : null}
    </div>
  );
}

function LayerRail({ index }: { index: string }) {
  return (
    <div className="flex shrink-0 items-center gap-4 lg:w-[180px] lg:flex-col lg:items-start lg:gap-3">
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-cgpt-muted">
        Layer
      </span>
      <span className="relative inline-flex items-center justify-center px-2 py-1">
        {/* corner-bracket frame */}
        <span className="pointer-events-none absolute -left-1 -top-1 h-3 w-3 rounded-tl-[3px] border-l border-t border-white/40" />
        <span className="pointer-events-none absolute -bottom-1 -right-1 h-3 w-3 rounded-br-[3px] border-b border-r border-white/40" />
        <span className="font-sans text-4xl leading-none text-cgpt-fg">{index}</span>
      </span>
    </div>
  );
}

export function EcosystemSection() {
  return (
    <section id="ecosystem" className="bg-cgpt-bg">
      <div className="mx-auto max-w-[1320px] px-5 py-24 lg:px-8">
        {/* Heading block */}
        <div className="flex items-center gap-2">
          <DoubleDotsIcon className="text-cgpt-fg" />
          <span className="font-mono text-[12px] uppercase tracking-[0.2em] text-cgpt-muted">
            The Ecosystem
          </span>
        </div>
        <div className="mt-6 grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <h2 className="font-sans text-[clamp(2.5rem,6vw,64px)] leading-[1.02]">
            The Ecosystem
            <br />
            <span className="cgpt-gradient-text">behind ChainGPT</span>
          </h2>
          <p className="max-w-md text-base text-cgpt-muted">
            Stay updated on our product ecosystem - from sub-products to
            integrations to AI models, &amp; way more!
          </p>
        </div>

        {/* Layers */}
        <div className="mt-16 flex flex-col gap-16">
          {LAYERS.map((layer) => (
            <div
              key={layer.index}
              className="flex flex-col gap-8 border-t border-cgpt-line pt-10 lg:flex-row lg:gap-10"
            >
              <div className="flex flex-col gap-6 lg:w-[180px] lg:shrink-0">
                <LayerRail index={layer.index} />
                <h3 className="font-sans text-[28px] leading-tight text-cgpt-fg">
                  {layer.title}
                </h3>
              </div>

              <div className="grid flex-1 grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {layer.nodes.map((node) => (
                  <NodeTile key={node.label} node={node} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
