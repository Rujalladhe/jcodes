"use client";

import { Suspense } from "react";
import Spline from "@splinetool/react-spline";

/**
 * The ChainGPT robot rendered from a Spline scene (the same approach the real
 * chaingpt.org uses). Spline drives its own idle animation and follows the
 * cursor, so the only thing we need from the host is real pointer events — the
 * wrapper this is mounted in must NOT be `pointer-events-none`.
 */
const ROBOT_SCENE = "https://prod.spline.design/hUyCSiNYSeoUDXIB/scene.splinecode";

export function RobotSpline({ className }: { className?: string }) {
  return (
    <Suspense fallback={null}>
      <Spline scene={ROBOT_SCENE} className={className} />
    </Suspense>
  );
}
