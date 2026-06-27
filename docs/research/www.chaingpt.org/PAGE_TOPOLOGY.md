# ChainGPT.org — Page Topology

Page height ≈ 19,124px @ 1440. Dark-only. Webflow + GSAP ScrollTrigger + Lottie + 3 WebGL canvases (robot ×2, $CGPT coin).

## Global design system
- bg `#0a090f` / `#09090e`; text `#efefe5`; muted `#8b8b96`; line `rgba(255,255,255,.1)`; card `#101018`
- Display font **VioletSans** (self-hosted); label font **Roboto Mono** (uppercase eyebrows/nav/labels)
- Signature gradient `linear-gradient(90deg,#fc6756,#f8cf3e 38%,#26f4d0 52%,#724ce8)`
- HUD motifs: thin 1px lines, corner-bracket frames, ".." double-dot eyebrow, gradient underlines, octagon/cut-corner shapes

## Sections (top → bottom)
1. **Announcement bar** — top-banner, h40, bg `#121212`; "New: ChainGPT Upgrades to v2 Staking…$50,000 CGPT-Gift Giveaway" + ↗ + close X. Hides on scroll.
2. **Navbar** (sticky) — logo · "OUR ECOSYSTEM" (grid icon, bordered) · Solutions▾ Developers▾ About AI Hub▾ Learn▾ $CGPT▾ Community▾ · LAUNCH DAPP (gradient border, ·· dots)
3. **Side rail** (fixed right) — section dots + active label (INTRO/PRODUCT/REVIEWS/SOLUTIONS/CASE STUDIES/ECOSYSTEM/PRICING/OUR TOKEN/TEAM/ROADMAP/F.A.Q/JOIN) + MENU hamburger + SCROLL↓
4. **Hero / INTRO** — 3D robot (canvas), "UNLEASH THE POWER OF / Blockchain / AI" (VioletSans 77px), time-cycling HUD: status ("ANALYZING IN_") + category + title + 4–5 bullets, cycling through 5 topic groups. "Your personal expert in all crypto & blockchain related topics."
5. **PRODUCT** — "Your Gateway To Web3 AI", "For individuals, developers, and businesses.", robot floats through; 9 capability labels (01–09 SMART CONTRACTS DEVELOPMENT … SOURCE OF NEWS).
6. **Awards marquee** — "AWARDED BY" + scrolling logos: $100k NVIDIA grant, $1M AWS, $350k Google, Gas Grant BNB, Ecosystem Catalyst BNB, SOTD, FWA, BeInCrypto, #1 Web3 App ProductHunt, Binance Innovation.
7. **SOLUTIONS** — "Our Solutions"; 9 scroll-pinned panels: number + title (left), robot (center), feature list (right), description + CTAs.
8. **CASE STUDIES** — "Explore our Case Studies"; horizontal carousel of corner-bracket cards (title bottom) + prev/next + "ALL CASE STUDIES" ↗.
9. **ECOSYSTEM** — "The Ecosystem behind ChainGPT"; 4 layers (01 AI Application Layer, 02 $CGPT Token Layer, 03 AIVM Blockchain Layer, 04 Labs & Launchpads); node-graph of labeled AI-icon tiles with + buttons.
10. **PRICING** — "Our Pricing" + API toggle; grid of usage cards (free daily / per-usage).
11. **OUR TOKEN** — "$CGPT"; rainbow coin (token-coin.webp), feature list, AUDITED BY (CertiK/Hacken + contract copy), BUY FROM (Binance/PancakeSwap), LISTED ON.
12. **BLOG** — "Explore our blog vlog spaces"; post cards (date, title, author Chris Duggan).
13. **TEAM** — "Faces behind ChainGPT"; THE TEAM [28] / ADVISORS [8] tabs; category pills; slider of octagon gradient-framed member cards (name, photo, role, BIO +).
14. **ROADMAP** — "Explore our Roadmap"; slider of phase cards (RDMP IN PROGRESS/COMPLETED, period, bullets, AND N MORE, MORE DETAILS) with 3D render headers.
15. **FAQ** — "Frequently asked Questions"; category tabs; accordion (+ toggles).
16. **JOIN / REVIEWS** — "JOIN THE AI Revolution"; AS SEEN ON testimonial cards (Alibaba, BNB, CertiK, Chainlink, Polygon, Tron); press logos marquee; JOIN OUR Telegram 195K+ / HOP INTO Discord 45K+ / FOLLOW Twitter 1M+; Contact form.
17. **FOOTER** — 4 cols (AI SOLUTIONS, QUICK LINKS, LEGAL, socials list); Product Hunt badge; © 2025.
