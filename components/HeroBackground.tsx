"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const DESKTOP_SRC = "/videos/hero-walkthrough.mp4";
const MOBILE_SRC = "/videos/hero-walkthrough-mobile.mp4";
const POSTER_SRC = "/videos/hero-walkthrough-poster.jpg";

function videoSource(): string {
  return window.matchMedia("(max-width: 767px)").matches ? MOBILE_SRC : DESKTOP_SRC;
}

export function HeroBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const narrow = window.matchMedia("(max-width: 767px)");
    let idleId = 0;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const apply = () => {
      if (motion.matches) {
        setSrc(null);
        videoRef.current?.pause();
        return;
      }
      setSrc(videoSource());
    };

    const start = () => {
      if (typeof window.requestIdleCallback === "function") {
        idleId = window.requestIdleCallback(apply, { timeout: 1200 });
        return;
      }
      timeoutId = setTimeout(apply, 250);
    };

    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });

    motion.addEventListener("change", apply);
    narrow.addEventListener("change", apply);

    return () => {
      window.removeEventListener("load", start);
      motion.removeEventListener("change", apply);
      narrow.removeEventListener("change", apply);
      if (idleId) window.cancelIdleCallback(idleId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;
    if (video.src !== new URL(src, window.location.href).href) {
      video.src = src;
      video.load();
    }
    const play = () => {
      video.play().catch(() => {});
    };
    if (video.readyState >= 2) play();
    else video.addEventListener("canplay", play, { once: true });
    return () => video.removeEventListener("canplay", play);
  }, [src]);

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <Image
        src={POSTER_SRC}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {src ? (
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={POSTER_SRC}
        />
      ) : null}
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(16,36,63,0.94)_0%,rgba(16,36,63,0.9)_52%,rgba(16,36,63,0.88)_100%)]" />
    </div>
  );
}
