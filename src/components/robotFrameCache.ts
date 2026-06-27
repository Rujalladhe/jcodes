"use client";

/**
 * Shared, decode-once cache of the ChainGPT "cube" robot frames.
 *
 * The source frames sit on a white background, so each one is composited (once,
 * at load) through an edge flood-fill that turns the surrounding white
 * transparent while leaving interior whites (the eyes) intact, then downscaled.
 * Both the pinned hero animation and the per-panel Solution cubes read from this
 * single array so the ~120 frames are only ever decoded + keyed one time.
 */

// frame1..frame132, skipping the indices the user didn't provide.
const MISSING = new Set([3, 8, 12, 66, 67, 73, 106, 107]);
const FRAME_SRCS: string[] = [];
for (let n = 1; n <= 132; n++) {
  if (!MISSING.has(n)) FRAME_SRCS.push(`/frames/frame${n}.jpg`);
}

const WHITE = 234; // channel threshold for "background white"
const MAX_DIM = 760; // downscale target for cheap keying

function loadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

/** Draw (downscaled) then flood-fill border-connected white → transparent. */
function keyOutBackground(img: HTMLImageElement): HTMLCanvasElement {
  const ratio = Math.min(1, MAX_DIM / Math.max(img.naturalWidth, img.naturalHeight));
  const w = Math.max(1, Math.round(img.naturalWidth * ratio));
  const h = Math.max(1, Math.round(img.naturalHeight * ratio));
  const off = document.createElement("canvas");
  off.width = w;
  off.height = h;
  const ctx = off.getContext("2d", { willReadFrequently: true })!;
  ctx.drawImage(img, 0, 0, w, h);
  const image = ctx.getImageData(0, 0, w, h);
  const d = image.data;
  const visited = new Uint8Array(w * h);
  const stack = new Int32Array(w * h);
  let sp = 0;
  const isWhite = (p: number) => {
    const i = p << 2;
    return d[i] > WHITE && d[i + 1] > WHITE && d[i + 2] > WHITE;
  };
  const seed = (p: number) => {
    if (!visited[p] && isWhite(p)) {
      visited[p] = 1;
      stack[sp++] = p;
    }
  };
  for (let x = 0; x < w; x++) {
    seed(x);
    seed((h - 1) * w + x);
  }
  for (let y = 0; y < h; y++) {
    seed(y * w);
    seed(y * w + (w - 1));
  }
  while (sp > 0) {
    const p = stack[--sp];
    d[(p << 2) + 3] = 0;
    const x = p % w;
    const y = (p / w) | 0;
    if (x > 0) seed(p - 1);
    if (x < w - 1) seed(p + 1);
    if (y > 0) seed(p - w);
    if (y < h - 1) seed(p + w);
  }
  ctx.putImageData(image, 0, 0);
  return off;
}

const nextTick = () => new Promise((r) => setTimeout(r, 0));

/** Decoded + keyed frames, appended progressively as they load. */
export const robotFrames: HTMLCanvasElement[] = [];

const listeners = new Set<() => void>();
let started = false;

/** Subscribe to be notified whenever a new frame is appended. */
export function subscribeFrames(cb: () => void): () => void {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

/** Kick off loading once; safe to call from every consumer. */
export function startLoadingFrames(): void {
  if (started || typeof window === "undefined") return;
  started = true;
  (async () => {
    for (const src of FRAME_SRCS) {
      try {
        const img = await loadImage(src);
        robotFrames.push(keyOutBackground(img));
        listeners.forEach((l) => l());
      } catch {
        /* skip a frame that fails to load — keep the rest of the sequence */
      }
      await nextTick(); // yield to the main thread between frames
    }
  })();
}
