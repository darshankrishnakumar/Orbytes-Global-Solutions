"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Respect user's reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1.2,
    });

    if (typeof window !== "undefined") {
      (window as unknown as { __lenis?: Lenis; __heroLocked?: boolean }).__lenis = lenis;
      if ((window as unknown as { __heroLocked?: boolean }).__heroLocked) {
        lenis.stop();
      }
    }

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      if (typeof window !== "undefined") {
        (window as unknown as { __lenis?: Lenis }).__lenis = undefined;
      }
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
