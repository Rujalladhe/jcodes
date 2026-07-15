"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll-scrubbed *video* robot for the Solutions section — full 720p, no image
 * downscaling, so it stays crisp.
 *
 * The smoothness trick: a normal MP4 only carries a keyframe every 1–2s, so
 * seeking to an arbitrary scroll position makes the decoder walk forward from the
 * previous keyframe — that's the visible "cuts" when scrubbing. So the source is
 * re-encoded ALL-INTRA (every frame a keyframe → `robot-scrub.mp4`), which makes
 * every `currentTime` instantly seekable. Regenerate with:
 *   ffmpeg -i in.mp4 -an -c:v libx264 -crf 19 \
 *     -x264-params keyint=1:min-keyint=1:scenecut=0 -pix_fmt yuv420p \
 *     -movflags +faststart robot-scrub.mp4
 *
 * Seeks are COALESCED: while one seek is in flight we just record the latest
 * requested time and re-issue it on `seeked`, so the playhead always converges to
 * the current scroll position without ever stacking/thrashing the decoder.
 *
 * Black background: the clip sits on pure #000; it's dropped with
 * `mix-blend-mode: screen` on the fixed wrapper in HeroSection (screen(pageBg,
 * black) === pageBg), so the black vanishes and the robot/red-HUD composite.
 */

const VIDEO_SRC = "/videos/robot-scrub.mp4";

export function SolutionRobotVideoTag() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const state = { t: 0 }; // eased scroll position 0→1 (GSAP tweens this)
    let duration = 0;
    let seeking = false;
    let pending = 0; // latest requested time; applied as soon as the decoder is free

    const applySeek = () => {
      if (seeking || !duration) return;
      if (Math.abs(pending - video.currentTime) < 1 / 48) return; // sub-frame → skip
      seeking = true;
      video.currentTime = pending;
    };
    const onSeeked = () => {
      seeking = false;
      applySeek(); // converge to wherever the scroll has moved since
    };
    const seek = () => {
      if (!duration) return;
      pending = state.t * duration;
      applySeek();
    };

    const onMeta = () => {
      duration = video.duration || 0;
      video.currentTime = 0.0001; // prime the decoder → first frame paints
    };

    video.addEventListener("loadedmetadata", onMeta);
    video.addEventListener("seeked", onSeeked);
    if (video.readyState >= 1) onMeta();

    const tween = gsap.to(state, {
      t: 1,
      ease: "none",
      onUpdate: seek,
      scrollTrigger: {
        trigger: "#solution-panels",
        start: "top center",
        end: "bottom center",
        scrub: 0.6, // eases the scroll position → the "smooth" in smooth scrub
      },
    });

    const fadeIn = gsap.fromTo(
      video,
      { autoAlpha: 0 },
      {
        autoAlpha: 1,
        ease: "none",
        immediateRender: false,
        scrollTrigger: {
          trigger: "#solution-panels",
          start: "top 85%",
          end: "top 55%",
          scrub: true,
        },
      },
    );
    const fadeOut = gsap.fromTo(
      video,
      { autoAlpha: 1 },
      {
        autoAlpha: 0,
        ease: "none",
        immediateRender: false,
        scrollTrigger: {
          trigger: "#solution-panels",
          start: "bottom 65%",
          end: "bottom 40%",
          scrub: true,
        },
      },
    );

    return () => {
      video.removeEventListener("loadedmetadata", onMeta);
      video.removeEventListener("seeked", onSeeked);
      [tween, fadeIn, fadeOut].forEach((t) => {
        t.scrollTrigger?.kill();
        t.kill();
      });
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src={VIDEO_SRC}
      muted
      playsInline
      preload="auto"
      // eslint-disable-next-line jsx-a11y/media-has-caption
      className="h-full w-full object-contain"
      style={{ pointerEvents: "none", opacity: 0 }}
    />
  );
}
