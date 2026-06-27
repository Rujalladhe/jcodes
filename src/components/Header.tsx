"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  ChevronDownIcon,
  CloseIcon,
  ArrowDiagonalIcon,
  EcosystemGridIcon,
  DoubleDotsIcon,
} from "@/components/icons";
import { ThemeToggle } from "@/components/ThemeToggle";
import type { NavItem } from "@/types";

const NAV: NavItem[] = [
  {
    label: "Solutions",
    items: [
      { label: "AI Chatbot", href: "#solutions" },
      { label: "Smart Contract Generator", href: "#solutions" },
      { label: "Smart Contract Auditor", href: "#solutions" },
      { label: "AI NFT Generator", href: "#solutions" },
      { label: "AI Trading Assistant", href: "#solutions" },
      { label: "CryptoGuard", href: "#solutions" },
    ],
  },
  {
    label: "Developers",
    items: [
      { label: "API & SDK Access", href: "#solutions" },
      { label: "Documentation", href: "#" },
      { label: "AIVM Blockchain", href: "#ecosystem" },
    ],
  },
  {
    label: "About AI Hub",
    items: [
      { label: "Crypto AI Hub", href: "#" },
      { label: "ChainGPT Labs", href: "#" },
      { label: "Our Story", href: "#team" },
    ],
  },
  {
    label: "Learn",
    items: [
      { label: "Blog", href: "#blog" },
      { label: "Documentation", href: "#" },
      { label: "Help Center", href: "#" },
    ],
  },
  {
    label: "$CGPT",
    items: [
      { label: "Tokenomics", href: "#token" },
      { label: "Staking & Farming", href: "#token" },
      { label: "DAO Governance", href: "#token" },
    ],
  },
  {
    label: "Community",
    items: [
      { label: "Telegram", href: "#join" },
      { label: "Discord", href: "#join" },
      { label: "Twitter", href: "#join" },
    ],
  },
];

export function Header() {
  const [bannerOpen, setBannerOpen] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-[1000]">
      {/* Announcement bar */}
      {bannerOpen && !scrolled && (
        <div className="flex h-10 items-center justify-center gap-2 bg-cgpt-card-2 px-8 text-cgpt-fg">
          <a href="#blog" className="flex items-center gap-2 text-[13px] sm:text-[15px]">
            <span className="text-cgpt-muted">New:</span>
            <span className="hidden truncate sm:inline">
              ChainGPT Upgrades to v2 Staking, and Rewards Stakers With a $50,000 CGPT-Gift Giveaway
            </span>
            <span className="sm:hidden">ChainGPT v2 Staking — $50,000 Giveaway</span>
            <ArrowDiagonalIcon className="text-cgpt-fg" />
          </a>
          <button
            aria-label="Dismiss announcement"
            onClick={() => setBannerOpen(false)}
            className="absolute right-6 text-cgpt-muted transition-colors hover:text-cgpt-fg"
          >
            <CloseIcon />
          </button>
        </div>
      )}

      {/* Navbar */}
      <nav
        className={cn(
          "flex items-center justify-between gap-4 border-b border-cgpt-line px-5 transition-all duration-300 lg:px-8",
          scrolled ? "h-16 bg-cgpt-bg/85 backdrop-blur-md" : "h-[72px] bg-cgpt-bg/40"
        )}
      >
        {/* Logo */}
        <a href="#" className="flex shrink-0 items-center" aria-label="ChainGPT home">
          <Image
            src="/images/chaingpt-logo-neon.svg"
            alt="ChainGPT"
            width={156}
            height={34}
            priority
          />
        </a>

        {/* Ecosystem pill */}
        <button className="cgpt-glass hidden items-center gap-2 rounded-md border border-cgpt-line px-4 py-2.5 font-mono text-[11px] uppercase tracking-wider text-cgpt-fg transition-colors hover:border-white/30 xl:flex">
          <EcosystemGridIcon className="text-cgpt-fg" />
          Our Ecosystem
        </button>

        {/* Links */}
        <ul className="hidden flex-1 items-center justify-center gap-6 lg:flex">
          {NAV.map((item) => (
            <li key={item.label} className="group relative">
              <button className="flex items-center gap-1.5 py-2 font-mono text-[13px] tracking-wide text-cgpt-fg/90 transition-colors hover:text-cgpt-fg">
                {item.label}
                {item.items && <ChevronDownIcon className="text-cgpt-muted" />}
              </button>
              {item.items && (
                <div className="invisible absolute left-1/2 top-full z-50 w-56 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                  <div className="rounded-lg border border-cgpt-line bg-cgpt-card p-2 shadow-2xl shadow-black/30">
                    {item.items.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        className="block rounded-md px-3 py-2 font-mono text-[12px] uppercase tracking-wide text-cgpt-muted transition-colors hover:bg-white/5 hover:text-cgpt-fg"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        <div className="flex shrink-0 items-center gap-3">
          {/* Light / dark theme toggle */}
          <ThemeToggle />

          {/* Launch DApp */}
          <a
            href="#"
            className="relative hidden items-center gap-2 rounded-md px-5 py-3 font-mono text-[12px] uppercase tracking-wider text-cgpt-fg cgpt-gradient-border cgpt-glass transition-transform hover:scale-[1.02] sm:flex"
          >
            <DoubleDotsIcon className="text-cgpt-fg" />
            Launch DApp
          </a>

          {/* Mobile hamburger */}
          <button
            aria-label="Open menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-md border border-cgpt-line lg:hidden"
          >
            <span className={cn("h-px w-5 bg-cgpt-fg transition-transform", mobileOpen && "translate-y-[3.5px] rotate-45")} />
            <span className={cn("h-px w-5 bg-cgpt-fg transition-transform", mobileOpen && "-translate-y-[3.5px] -rotate-45")} />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="border-b border-cgpt-line bg-cgpt-bg/95 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col px-5 py-4">
            {NAV.map((item) => (
              <li key={item.label} className="border-b border-cgpt-line/60 last:border-0">
                <a
                  href={item.items?.[0]?.href ?? "#"}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between py-3.5 font-mono text-[14px] tracking-wide text-cgpt-fg"
                >
                  {item.label}
                  {item.items && <ChevronDownIcon className="text-cgpt-muted" />}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-5 pb-5">
            <a
              href="#"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-2 rounded-md px-5 py-3 font-mono text-[12px] uppercase tracking-wider text-cgpt-fg cgpt-gradient-border cgpt-glass"
            >
              <DoubleDotsIcon className="text-cgpt-fg" />
              Launch DApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
