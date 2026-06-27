export interface NavDropdownItem {
  label: string;
  href: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href?: string;
  items?: NavDropdownItem[];
}

export interface SideNavItem {
  label: string;
  target: string;
}

/* Hero time-cycling HUD groups */
export interface HeroPrompt {
  text: string;
}

export interface HeroCycle {
  status: string; // e.g. "ANALYZING IN_"
  category: string; // e.g. "AI TOOLS"
  title: string; // e.g. "WEB3 AI CHATBOT"
  bullets: string[];
}

/* Product slider (Your Gateway To Web3 AI) */
export interface ProductSlide {
  number: string;
  title: string;
}

/* Awards marquee */
export interface Award {
  title: string;
  subtitle: string;
}

/* Solutions accordion/cards */
export interface Solution {
  number: string;
  title: string;
  description: string;
  features: string[];
  ctas: { label: string; href: string }[];
}

/* Case studies */
export interface CaseStudy {
  title: string;
  tag?: string;
  href?: string;
}

/* Ecosystem layers */
export interface EcosystemLayer {
  layer: string;
  index: string;
  title: string;
}

/* Pricing */
export interface PricingTier {
  title: string;
  freeLabel: string;
  freeValue: string;
  afterLabel?: string;
  afterValue?: string;
}

/* Blog posts */
export interface BlogPost {
  date: string;
  title: string;
  author: string;
}

/* Team members */
export interface TeamMember {
  name: string;
  role: string;
  category?: string;
  hasBio?: boolean;
}

/* Roadmap */
export interface RoadmapPhase {
  status: string; // IN PROGRESS | COMPLETED
  period: string; // 2025: Q3-Q4
  items: string[];
  moreCount?: number;
}

/* FAQ */
export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

/* Reviews / "As seen on" testimonials */
export interface Review {
  author: string;
  handle: string;
  body: string;
  href?: string;
}

/* Social community stat */
export interface CommunityStat {
  platform: string;
  count: string;
  label: string;
}

/* Footer link group */
export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}
