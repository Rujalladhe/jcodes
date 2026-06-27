"use client";

import { useState, type ComponentType, type SVGProps } from "react";
import { cn } from "@/lib/utils";
import {
  DoubleDotsIcon,
  ArrowDiagonalIcon,
  TelegramIcon,
  DiscordIcon,
  TwitterIcon,
} from "@/components/icons";

interface Review {
  name: string;
  handle: string;
  body: string;
}

const REVIEWS: Review[] = [
  {
    name: "Alibaba Cloud",
    handle: "@alibaba_cloud",
    body: "Proud to collaborate with @Chain_GPT to advance AI development with powerful infrastructure and open innovation. Together, we're open-sourcing ChainGPT's Solidity LLM for broader developer access.",
  },
  {
    name: "BNB Chain",
    handle: "@BNBCHAIN",
    body: "Amazing progress from @Chain_GPT! Let's keep building the strongest platform for decentralized A.I on BNB Chain!",
  },
  {
    name: "CertiK Security Leaderboard",
    handle: "@CertiKCommunity",
    body: "Proud to see @Chain_GPT at a stellar #47 on CertiK's Skynet rankings. Their commitment to robust security showcases their dedication to a safer Web3 ecosystem.",
  },
  {
    name: "Chainlink",
    handle: "@chainlink",
    body: "@Chain_GPT has integrated #Chainlink CCIP across @Ethereum and @0xPolygon to help unlock its cross-chain AI Hub.",
  },
  {
    name: "Polygon (Labs)",
    handle: "@0xPolygonLabs",
    body: "ChainGPT is unlocking cross-chain functionality with @0xPolygon, after its recent integration with Chainlink CCIP. Meaning seamless connectivity and enhanced experiences within web3 AI.",
  },
  {
    name: "Tron DAO",
    handle: "@trondao",
    body: "This collaboration with @Chain_GPT is a game-changer for the #TRON community! Together, we usher in a new era of AI accessibility and flexibility on the TRON network.",
  },
];

const PRESS_LOGOS: string[] = [
  "Crypto News",
  "Finbold",
  "Yahoo Finance",
  "Kriptoskop",
  "BeInCrypto",
  "Cointelegraph",
];

interface CommunityCTA {
  eyebrow: string;
  title: string;
  stat: string;
  statLabel: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
}

const COMMUNITY_CTAS: CommunityCTA[] = [
  {
    eyebrow: "JOIN OUR",
    title: "Telegram",
    stat: "195K+",
    statLabel: "MEMBERS",
    Icon: TelegramIcon,
  },
  {
    eyebrow: "HOP INTO",
    title: "Discord",
    stat: "45K+",
    statLabel: "MEMBERS",
    Icon: DiscordIcon,
  },
  {
    eyebrow: "FOLLOW OUR",
    title: "Twitter",
    stat: "1M+",
    statLabel: "FOLLOWERS",
    Icon: TwitterIcon,
  },
];

function initials(name: string): string {
  const words = name
    .replace(/\(.*?\)/g, "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  const letters = words.slice(0, 2).map((w) => w[0] ?? "");
  return letters.join("").toUpperCase();
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="w-[360px] shrink-0 rounded-lg border border-cgpt-line bg-cgpt-card p-5">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-cgpt-card-2 font-mono text-[13px] text-cgpt-fg">
          {initials(review.name)}
        </span>
        <div className="min-w-0">
          <p className="truncate font-sans text-[15px] text-cgpt-fg">{review.name}</p>
          <p className="truncate font-mono text-[12px] text-cgpt-muted">{review.handle}</p>
        </div>
      </div>
      <p className="mt-4 line-clamp-5 text-[14px] leading-relaxed text-cgpt-fg/75">
        {review.body}
      </p>
      <div className="mt-5 flex items-center gap-1.5 font-mono text-[11px] uppercase text-cgpt-muted">
        View Post
        <ArrowDiagonalIcon className="h-3 w-3" />
      </div>
    </div>
  );
}

export function JoinSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <section
      id="join"
      className="mx-auto max-w-[1320px] bg-cgpt-bg px-5 py-24 lg:px-8"
    >
      {/* 1) Heading */}
      <div className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-wide text-cgpt-muted">
        <DoubleDotsIcon className="text-cgpt-fg" />
      </div>
      <h2 className="mt-5 font-sans text-[clamp(2.5rem,7vw,72px)] leading-[0.98]">
        JOIN THE
        <br />
        <span className="cgpt-gradient-text">
          <span className="text-[1.25em]">AI</span> Revolution
        </span>
      </h2>

      {/* 2) AS SEEN ON marquee */}
      <p className="mt-16 font-mono text-[12px] uppercase tracking-wide text-cgpt-muted">
        As Seen On:
      </p>
      <div className="hide-scrollbar relative mt-6 overflow-hidden">
        <div className="flex w-max gap-5 animate-cgpt-marquee">
          {[...REVIEWS, ...REVIEWS].map((review, i) => (
            <ReviewCard key={`${review.handle}-${i}`} review={review} />
          ))}
        </div>
      </div>

      {/* 3) Press logos marquee */}
      <div className="hide-scrollbar relative mt-10 overflow-hidden">
        <div className="flex w-max items-center gap-16 animate-cgpt-marquee-reverse">
          {[...PRESS_LOGOS, ...PRESS_LOGOS].map((logo, i) => (
            <span
              key={`${logo}-${i}`}
              className="shrink-0 whitespace-nowrap font-sans text-[22px] text-cgpt-muted"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>

      {/* 4) Community CTAs */}
      <div className="mt-20 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {COMMUNITY_CTAS.map(({ eyebrow, title, stat, statLabel, Icon }) => (
          <div
            key={title}
            className="relative overflow-hidden rounded-lg border border-cgpt-line p-8"
          >
            <div
              className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-20 blur-3xl"
              style={{ background: "var(--cgpt-gradient)" }}
            />
            <div className="relative flex flex-col gap-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wide text-cgpt-muted">
                    {eyebrow}
                  </p>
                  <p className="mt-2 flex items-center gap-2 font-sans text-[40px] leading-none text-cgpt-fg">
                    {title}
                    <ArrowDiagonalIcon className="h-5 w-5 text-cgpt-muted" />
                  </p>
                </div>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-cgpt-line text-cgpt-fg">
                  <Icon />
                </span>
              </div>
              <span className="inline-flex w-fit items-center gap-2 rounded-full border border-cgpt-line px-4 py-2">
                <span className="font-sans text-[18px] text-cgpt-fg">{stat}</span>
                <span className="font-mono text-[11px] uppercase tracking-wide text-cgpt-muted">
                  {statLabel}
                </span>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 5) Contact block */}
      <div className="relative mt-5 overflow-hidden rounded-lg border border-cgpt-line p-8 lg:p-12">
        <div
          className="pointer-events-none absolute -left-20 bottom-0 h-60 w-60 rounded-full opacity-15 blur-3xl"
          style={{ background: "var(--cgpt-gradient)" }}
        />
        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="font-mono text-[12px] uppercase tracking-wide text-cgpt-muted">
              Drop Us A Message
            </p>
            <h3 className="mt-4 font-sans text-[clamp(2rem,5vw,52px)] leading-[1]">
              Contact
              <br />
              <span className="cgpt-gradient-text">Let&apos;s Talk!</span>
            </h3>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex items-center gap-3 border-b border-cgpt-line pb-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Subscribe to be in touch*"
                className="w-full bg-transparent text-[15px] text-cgpt-fg placeholder:text-cgpt-muted focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className={cn(
                  "flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-cgpt-fg",
                  "cgpt-gradient-border"
                )}
              >
                <ArrowDiagonalIcon className="h-4 w-4" />
              </button>
            </div>
            <p className="font-mono text-[12px] text-cgpt-muted">
              *Only valuable resources.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
