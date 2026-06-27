# 3D Robot / Canvas Assets — Manual Drop-in

The live ChainGPT site renders its centerpiece robot and a few other visuals via **live WebGL `<canvas>` (Spline)** scenes, which can't be exported as clean image/video assets through the browser-automation tools used for this clone. The clone ships with **styled gradient-framed fallbacks** in those spots so nothing looks broken.

To make them pixel-perfect, drop the following PNGs (transparent background preferred) into `public/images/`. The components auto-detect and overlay them; if a file is absent, the fallback shows.

| File | Used by | Notes |
|------|---------|-------|
| `public/images/robot-hero.png` | `HeroSection.tsx` | The main hero robot. ~360×520 visible; transparent bg. Capture one pose from the live hero. |

The two deeper 3D moments (the robot reused inside the **Solutions** panels and the spinning **$CGPT coin**) are already handled:
- Solutions panels use a styled "AI screen" block (intentional, consistent with the HUD aesthetic).
- The $CGPT coin uses the **real** `token-coin.webp` downloaded from the site — no action needed.

## How to capture `robot-hero.png`
1. Open https://www.chaingpt.org/ , let the hero load.
2. Screenshot just the robot (transparent if you can export from Spline; otherwise crop on the dark `#0a090f` background).
3. Save as `public/images/robot-hero.png`. Refresh the clone — it appears automatically in the hero.
