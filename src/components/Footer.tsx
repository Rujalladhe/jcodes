import { cn } from "@/lib/utils";
import { ArrowDiagonalIcon } from "@/components/icons";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const COLUMNS: FooterColumn[] = [
  {
    title: "AI Solutions",
    links: [
      { label: "ChainGPT Chat Bot", href: "#" },
      { label: "ChainGPT AI Agents", href: "#" },
      { label: "AI NFT Generator", href: "#" },
      { label: "ChainGPT on Telegram", href: "#" },
      { label: "ChainGPT on Discord", href: "#" },
      { label: "Smart Contract Generator", href: "#" },
      { label: "Smart Contract Auditor", href: "#" },
      { label: "AI Generated News", href: "#" },
      { label: "AI Trading Assistant", href: "#" },
      { label: "API/SDK Access", href: "#" },
      { label: "CryptoGuard", href: "#" },
    ],
  },
  {
    title: "Quick Links",
    links: [
      { label: "ChainGPT Pad", href: "#" },
      { label: "ChainGPT Blog", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "$CGPT Staking", href: "#" },
      { label: "DAO Governance", href: "#" },
      { label: "Pricing Page", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Brand Kit", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Official verification", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookies Policy", href: "#" },
      { label: "Eligibility Policy", href: "#" },
    ],
  },
];

const SOCIALS: FooterLink[] = [
  { label: "Telegram", href: "#" },
  { label: "Discord", href: "#" },
  { label: "Youtube", href: "#" },
  { label: "Medium", href: "#" },
  { label: "Linkedin", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Github", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-cgpt-line bg-cgpt-bg">
      <div className="mx-auto max-w-[1320px] px-5 py-16 lg:px-8">
        {/* Top area: link columns + socials */}
        <div className="relative grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="mb-6 font-mono text-[12px] uppercase tracking-wider text-cgpt-muted">
                {col.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-mono text-[14px] text-cgpt-fg/80 transition-colors hover:text-cgpt-fg"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Socials column */}
          <div>
            <h3 className="mb-6 font-mono text-[12px] uppercase tracking-wider text-cgpt-muted lg:text-right">
              Socials
            </h3>
            <ul className="flex flex-col gap-3">
              {SOCIALS.map((social) => (
                <li key={social.label} className="flex lg:justify-end">
                  <a
                    href={social.href}
                    className="group flex items-center gap-2 font-mono text-[14px] uppercase text-cgpt-fg/80 transition-colors hover:text-cgpt-fg"
                  >
                    <span className="group-hover:cgpt-gradient-text">
                      {social.label}
                    </span>
                    <ArrowDiagonalIcon className="text-cgpt-muted transition-colors group-hover:text-cgpt-fg" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Hunt featured badge */}
          <div className="mt-8 sm:absolute sm:bottom-0 sm:right-0 sm:mt-0 lg:right-[25%]">
            <a
              href="#"
              className="inline-flex items-center gap-3 rounded-xl border border-cgpt-line bg-cgpt-card-2 px-4 py-2.5 transition-colors hover:border-white/20"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cgpt-coral font-sans text-[15px] font-bold text-cgpt-bg">
                P
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-mono text-[9px] uppercase tracking-wider text-cgpt-muted">
                  Featured on
                </span>
                <span className="font-sans text-[13px] text-cgpt-fg">
                  Product Hunt
                </span>
              </span>
              <span className="ml-1 flex flex-col items-center rounded-md border border-cgpt-line px-2 py-1 leading-none">
                <span className="text-[10px] text-cgpt-fg">&#9650;</span>
                <span className="font-mono text-[11px] text-cgpt-fg">187</span>
              </span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-cgpt-line pt-6 sm:flex-row sm:items-center">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono text-[12px] text-cgpt-muted">
              &copy; 2025
            </span>
            <span className="font-mono text-[12px] uppercase text-cgpt-muted">
              All rights reserved by chaingpt.org.
            </span>
          </div>
          <span className={cn("font-mono text-[18px] leading-none text-cgpt-muted")}>
            ..
          </span>
        </div>
      </div>
    </footer>
  );
}
