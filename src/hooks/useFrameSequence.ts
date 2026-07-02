"use client";

import { useEffect, useRef, useCallback } from "react";
import { padFrameNumber } from "@/lib/utils";

interface UseFrameSequenceOptions {
  totalFrames:  number;
  frameDir:     string;
  frameName?:   string;
  /** Jumlah screen heights yang digunakan untuk seluruh animasi */
  scrollHeights?: number;
}

/**
 * Hook untuk scroll-driven canvas frame sequence animation.
 * Memuat frame secara lazy dan merender frame yang tepat berdasarkan scroll.
 */
export function useFrameSequence({
  totalFrames,
  frameDir,
  frameName = "frame_",
  scrollHeights = 3,
}: UseFrameSequenceOptions) {
  const canvasRef    = useRef<HTMLCanvasElement>(null);
  const imagesRef    = useRef<(HTMLImageElement | null)[]>(
    Array(totalFrames).fill(null)
  );
  const currentFrame = useRef(0);
  const rafRef       = useRef<number>(0);

  /** Build URL untuk frame ke-n */
  const getFrameUrl = useCallback(
    (n: number) => `${frameDir}/${frameName}${padFrameNumber(n)}.webp`,
    [frameDir, frameName]
  );

  /** Render frame ke canvas */
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    const img    = imagesRef.current[index];
    if (!canvas || !img || !img.complete) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Cover fit
    const scale = Math.max(
      canvas.width / img.naturalWidth,
      canvas.height / img.naturalHeight
    );
    const w = img.naturalWidth  * scale;
    const h = img.naturalHeight * scale;
    const x = (canvas.width  - w) / 2;
    const y = (canvas.height - h) / 2;

    ctx.drawImage(img, x, y, w, h);
  }, []);

  /** Preload frame tertentu */
  const loadFrame = useCallback(
    (index: number) => {
      if (imagesRef.current[index]) return;
      const img = new Image();
      img.src   = getFrameUrl(index);
      img.onload = () => {
        imagesRef.current[index] = img;
        if (currentFrame.current === index) drawFrame(index);
      };
      imagesRef.current[index] = img;
    },
    [getFrameUrl, drawFrame]
  );

  useEffect(() => {
    // Preload 15 frame pertama segera
    for (let i = 0; i < Math.min(15, totalFrames); i++) loadFrame(i);

    const handleScroll = () => {
      const scrollY  = window.scrollY;
      const maxScroll = window.innerHeight * scrollHeights;
      const progress  = Math.min(1, Math.max(0, scrollY / maxScroll));
      const frameIndex = Math.floor(progress * (totalFrames - 1));

      // Lazy load sekitar frame saat ini
      const preloadRadius = 10;
      for (
        let i = Math.max(0, frameIndex - preloadRadius);
        i < Math.min(totalFrames, frameIndex + preloadRadius);
        i++
      ) {
        loadFrame(i);
      }

      if (frameIndex !== currentFrame.current) {
        currentFrame.current = frameIndex;
        cancelAnimationFrame(rafRef.current);
        rafRef.current = requestAnimationFrame(() => drawFrame(frameIndex));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // init

    // Load sisa frame secara idle
    let i = 15;
    const idleLoad = () => {
      if (i < totalFrames) {
        loadFrame(i++);
        requestIdleCallback ? requestIdleCallback(idleLoad) : setTimeout(idleLoad, 16);
      }
    };
    requestIdleCallback ? requestIdleCallback(idleLoad) : setTimeout(idleLoad, 500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafRef.current);
    };
  }, [totalFrames, scrollHeights, loadFrame, drawFrame]);

  return { canvasRef };
}
