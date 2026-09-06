"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const [cursorText, setCursorText] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  // Raw mouse coordinates (GPU-accelerated, zero React re-renders during mouse move)
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const cursorOpacity = useMotionValue(0);

  // High-performance spring (instant 120fps tracking with zero lag)
  const springConfig = { damping: 25, stiffness: 600, mass: 0.15 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on touch devices (phones, tablets) or prefers-reduced-motion
    const hasTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (hasTouch || prefersReducedMotion) {
      setIsTouch(true);
      return;
    }
    setIsTouch(false);

    // Direct coordinate update bypassing React state tree entirely
    const onMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (cursorOpacity.get() === 0) {
        cursorOpacity.set(1);
      }
    };

    // Hover detection only fires on element boundary entry/exit (ultra efficient)
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, [data-cursor], input, select, textarea, [role='button']");
      if (interactive) {
        setIsHovered(true);
        const text = interactive.getAttribute("data-cursor-text");
        setCursorText(text || "");
      } else {
        setIsHovered(false);
        setCursorText("");
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onMouseLeave = () => cursorOpacity.set(0);
    const onMouseEnter = () => cursorOpacity.set(1);

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseover", onMouseOver, { passive: true });
    window.addEventListener("mousedown", onMouseDown, { passive: true });
    window.addEventListener("mouseup", onMouseUp, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
    };
  }, [mouseX, mouseY, cursorOpacity]);

  if (isTouch) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-50 flex items-center justify-center rounded-full border border-cyan-400/70 bg-cyan-400/10 backdrop-blur-[1px]"
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "-50%",
        translateY: "-50%",
        opacity: cursorOpacity,
      }}
      animate={{
        width: isHovered ? (cursorText ? 76 : 48) : 18,
        height: isHovered ? (cursorText ? 76 : 48) : 18,
        scale: isClicking ? 0.85 : isHovered ? 1.05 : 1,
      }}
      transition={{
        width: { type: "spring", stiffness: 500, damping: 30 },
        height: { type: "spring", stiffness: 500, damping: 30 },
        scale: { type: "spring", stiffness: 600, damping: 25 },
      }}
    >
      {cursorText ? (
        <span className="text-[10px] font-bold tracking-wider text-cyan-300 uppercase select-none">
          {cursorText}
        </span>
      ) : !isHovered ? (
        <div className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_#00e5ff]" />
      ) : null}
    </motion.div>
  );
}
