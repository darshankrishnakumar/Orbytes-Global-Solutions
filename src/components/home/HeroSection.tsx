"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Sparkles,
  Play,
  Pause,
  ChevronDown,
  RotateCcw,
} from "lucide-react";
import { EcosystemVisual } from "./EcosystemVisual";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const waveVideoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [activeVideoIndex, setActiveVideoIndex] = useState<0 | 1>(0);
  const isSwitchingRef = useRef<boolean>(false);

  // Intro animation phases:
  // 0: Initial setup
  // 1: "Technology that secures."
  // 2: "Technology that scales."
  // 3: "Technology that moves business forward."
  // 4: Intro complete -> Hero Content is active
  const [introPhase, setIntroPhase] = useState<0 | 1 | 2 | 3 | 4>(0);
  const introTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Safe video playback helper for Safari, Chrome & iOS
  const safePlay = useCallback((vid: HTMLVideoElement | null) => {
    if (!vid) return;
    vid.defaultMuted = true;
    vid.muted = true;
    vid.playsInline = true;
    vid.setAttribute("playsinline", "true");
    vid.setAttribute("webkit-playsinline", "true");
    const p = vid.play();
    if (p !== undefined) {
      p.catch((err) => {
        console.warn("Video playback deferred by browser policy:", err);
      });
    }
  }, []);

  // Sequential video scheduling: Video 1 <-> Video 2
  const switchVideo = useCallback(
    (toIndex: 0 | 1) => {
      if (toIndex === 1) {
        const v2 = waveVideoRef.current;
        if (v2) {
          v2.currentTime = 0;
          safePlay(v2);
        }
        setActiveVideoIndex(1);
      } else {
        const v1 = videoRef.current;
        if (v1) {
          v1.currentTime = 0;
          safePlay(v1);
        }
        setActiveVideoIndex(0);
      }
    },
    [safePlay]
  );

  const handleVideo1TimeUpdate = useCallback(() => {
    const v1 = videoRef.current;
    if (!v1 || activeVideoIndex !== 0) return;
    if (v1.duration > 0 && v1.currentTime >= v1.duration - 0.7 && !isSwitchingRef.current) {
      isSwitchingRef.current = true;
      switchVideo(1);
      setTimeout(() => {
        isSwitchingRef.current = false;
        if (v1 && !v1.paused) {
          v1.pause();
          v1.currentTime = 0;
        }
      }, 1000);
    }
  }, [activeVideoIndex, switchVideo]);

  const handleVideo1Ended = useCallback(() => {
    if (activeVideoIndex === 0) {
      isSwitchingRef.current = false;
      switchVideo(1);
    }
  }, [activeVideoIndex, switchVideo]);

  const handleVideo2TimeUpdate = useCallback(() => {
    const v2 = waveVideoRef.current;
    if (!v2 || activeVideoIndex !== 1) return;
    if (v2.duration > 0 && v2.currentTime >= v2.duration - 0.7 && !isSwitchingRef.current) {
      isSwitchingRef.current = true;
      switchVideo(0);
      setTimeout(() => {
        isSwitchingRef.current = false;
        if (v2 && !v2.paused) {
          v2.pause();
          v2.currentTime = 0;
        }
      }, 1000);
    }
  }, [activeVideoIndex, switchVideo]);

  const handleVideo2Ended = useCallback(() => {
    if (activeVideoIndex === 1) {
      isSwitchingRef.current = false;
      switchVideo(0);
    }
  }, [activeVideoIndex, switchVideo]);

  // Complete intro immediately and bring in content
  const completeIntro = useCallback(() => {
    if (introTimerRef.current) {
      clearTimeout(introTimerRef.current);
    }
    setIntroPhase(4);
    if (typeof window !== "undefined") {
      try {
        sessionStorage.setItem("orbytes_hero_intro_seen", "true");
      } catch {
        // Ignore sessionStorage restrictions
      }
    }
  }, []);

  // Replay the intro animation
  const replayIntro = useCallback(() => {
    setIntroPhase(1);
  }, []);

  // Initialize intro state & sequence timing
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check user's prefers-reduced-motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReducedMotion(mediaQuery.matches);
    if (mediaQuery.matches) {
      setIntroPhase(4);
      return;
    }

    // Check if reload or fresh navigation
    let isReload = false;
    try {
      const navEntries = performance?.getEntriesByType?.("navigation") as
        | PerformanceNavigationTiming[]
        | undefined;
      isReload = Boolean(navEntries && navEntries.length > 0 && navEntries[0]?.type === "reload");
    } catch {
      // Ignore performance API errors
    }

    if (isReload) {
      try {
        sessionStorage.removeItem("orbytes_hero_intro_seen");
      } catch {
        // Ignore
      }
      setIntroPhase(1);
    } else {
      try {
        const seen = sessionStorage.getItem("orbytes_hero_intro_seen");
        if (seen === "true") {
          setIntroPhase(4); // Skip intro for return visits in same session
          return;
        }
      } catch {
        // Ignore
      }
      setIntroPhase(1);
    }
  }, []);

  // Drive the 3-beat intro sequence:
  // Phase 1: "Technology that secures." (~1.35s)
  // Phase 2: "Technology that scales." (~1.35s)
  // Phase 3: "Technology that moves business forward." (~1.45s)
  // Phase 4: Full Hero Content arrives
  useEffect(() => {
    if (introPhase === 0 || introPhase === 4) return;

    if (introPhase === 1) {
      introTimerRef.current = setTimeout(() => {
        setIntroPhase(2);
      }, 1350);
    } else if (introPhase === 2) {
      introTimerRef.current = setTimeout(() => {
        setIntroPhase(3);
      }, 1350);
    } else if (introPhase === 3) {
      introTimerRef.current = setTimeout(() => {
        completeIntro();
      }, 1450);
    }

    return () => {
      if (introTimerRef.current) {
        clearTimeout(introTimerRef.current);
      }
    };
  }, [introPhase, completeIntro]);

  // Fast-forward to content on user interaction (scroll, touch, click)
  useEffect(() => {
    if (introPhase === 4) return;

    const handleUserInteraction = () => {
      completeIntro();
    };

    window.addEventListener("wheel", handleUserInteraction, { passive: true });
    window.addEventListener("touchmove", handleUserInteraction, { passive: true });
    window.addEventListener("keydown", handleUserInteraction, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleUserInteraction);
      window.removeEventListener("touchmove", handleUserInteraction);
      window.removeEventListener("keydown", handleUserInteraction);
    };
  }, [introPhase, completeIntro]);

  // Video autoplay watchdog
  useEffect(() => {
    safePlay(videoRef.current);

    const handleFirstGesture = () => {
      if (activeVideoIndex === 0) {
        safePlay(videoRef.current);
      } else {
        safePlay(waveVideoRef.current);
      }
      window.removeEventListener("click", handleFirstGesture);
      window.removeEventListener("touchstart", handleFirstGesture);
    };

    window.addEventListener("click", handleFirstGesture, { passive: true });
    window.addEventListener("touchstart", handleFirstGesture, { passive: true });

    return () => {
      window.removeEventListener("click", handleFirstGesture);
      window.removeEventListener("touchstart", handleFirstGesture);
    };
  }, [safePlay, activeVideoIndex]);

  // Background Ambient Canvas: Futuristic Network Grid & Glowing Cyan Wave
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const particles = Array.from({ length: 36 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 0.8,
      baseAlpha: Math.random() * 0.4 + 0.15,
    }));

    let time = 0;

    const render = () => {
      time += 0.014;
      ctx.clearRect(0, 0, width, height);

      // Coordinate grid
      ctx.strokeStyle = "rgba(0, 229, 255, 0.03)";
      ctx.lineWidth = 1;
      const gridSize = 48;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Layer 1: Ambient Cyan Deep Wave Flow
      ctx.beginPath();
      ctx.moveTo(0, height * 0.64);
      for (let x = 0; x <= width; x += 8) {
        const y =
          height * 0.64 +
          Math.sin(x * 0.0028 + time * 0.7) * 45 +
          Math.cos(x * 0.0055 + time * 0.45) * 24;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      const waveGrad1 = ctx.createLinearGradient(0, height * 0.5, width, height);
      waveGrad1.addColorStop(0, "rgba(0, 229, 255, 0.08)");
      waveGrad1.addColorStop(0.5, "rgba(37, 99, 235, 0.05)");
      waveGrad1.addColorStop(1, "rgba(3, 7, 20, 0)");
      ctx.fillStyle = waveGrad1;
      ctx.fill();

      // Layer 2: Neon Cyan Glowing Wave Ribbon
      ctx.beginPath();
      for (let x = 0; x <= width; x += 6) {
        const y =
          height * 0.62 +
          Math.sin(x * 0.0032 + time * 0.85) * 40 +
          Math.sin(x * 0.0075 + time * 1.1) * 20;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = "rgba(0, 229, 255, 0.5)";
      ctx.lineWidth = 2.2;
      ctx.shadowColor = "#00e5ff";
      ctx.shadowBlur = 16;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Layer 3: Secondary Blue Crest
      ctx.beginPath();
      for (let x = 0; x <= width; x += 6) {
        const y =
          height * 0.68 +
          Math.cos(x * 0.0038 + time * 0.6) * 32 +
          Math.sin(x * 0.0068 + time * 0.95) * 14;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = "rgba(96, 165, 250, 0.35)";
      ctx.lineWidth = 1.8;
      ctx.shadowColor = "#3b82f6";
      ctx.shadowBlur = 12;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Particles
      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.fillStyle = `rgba(0, 229, 255, ${p.baseAlpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            ctx.strokeStyle = `rgba(0, 229, 255, ${(1 - dist / 120) * 0.14})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const togglePlay = () => {
    const activeVid = activeVideoIndex === 0 ? videoRef.current : waveVideoRef.current;
    if (isPlaying) {
      activeVid?.pause();
      setIsPlaying(false);
    } else {
      activeVid?.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const isIntroActive = introPhase >= 1 && introPhase <= 3;

  // Staggered animations for Hero Content
  const heroContentVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#030714] text-white pt-24 pb-16 lg:py-0"
    >
      {/* ==========================================
          0. Scheduled Alternating Video Background
          Cycle: Video 1 -> Video 2 -> Video 1 ...
          ========================================== */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <video
          ref={videoRef}
          src="/videos/hero-background.mp4"
          poster="/videos/hero-poster.jpg"
          autoPlay
          muted
          playsInline
          preload="auto"
          onTimeUpdate={handleVideo1TimeUpdate}
          onEnded={handleVideo1Ended}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          className={`absolute inset-0 w-full h-full object-cover object-center lg:object-[65%_center] transition-opacity duration-1000 ease-in-out ${
            activeVideoIndex === 0 ? "opacity-85" : "opacity-0"
          }`}
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>

        <video
          ref={waveVideoRef}
          src="/videos/wave-motion.mp4"
          muted
          playsInline
          preload="none"
          onTimeUpdate={handleVideo2TimeUpdate}
          onEnded={handleVideo2Ended}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
            activeVideoIndex === 1 ? "opacity-85" : "opacity-0"
          }`}
        >
          <source src="/videos/wave-motion.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 1. Glowing Technical Mesh Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-[1] pointer-events-none"
      />

      {/* 2. Ambient Chromatic Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none z-[1]" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none z-[1]" />

      {/* Lateral gradient: Dark on left so text is 100% crisp, fading to reveal glowing video on right */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-[#030714] via-[#030714]/85 via-45% to-transparent pointer-events-none z-[2] transition-opacity duration-700 ${
          isIntroActive ? "opacity-40" : "opacity-95"
        }`}
      />

      {/* Top and Bottom Edge Vignettes */}
      <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#030714] to-transparent pointer-events-none z-[3]" />
      <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-[#030714] to-transparent pointer-events-none z-[3]" />

      {/* ==========================================
          STAGE 1: Cinematic Intro Animation (The 3 Beats)
          Plays on load, then automatically transitions
          ========================================== */}
      <AnimatePresence mode="wait">
        {isIntroActive && !isReducedMotion && (
          <motion.div
            key="intro-stage"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
            className="absolute inset-0 z-30 flex flex-col items-center justify-center px-4 sm:px-8 text-center select-none"
          >
            {/* Beat 1: "Technology that secures." */}
            {introPhase === 1 && (
              <motion.div
                key="beat-1"
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1.0 }}
                exit={{ opacity: 0, y: -30, scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-5xl"
              >
                <span className="text-xs sm:text-sm font-bold tracking-widest text-cyan-400 uppercase font-display block mb-3 opacity-80">
                  ORBYTES GLOBAL
                </span>
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-display leading-tight drop-shadow-[0_4px_28px_rgba(0,0,0,0.9)]">
                  Technology that{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 drop-shadow-[0_0_40px_rgba(0,229,255,0.6)]">
                    secures.
                  </span>
                </h1>
              </motion.div>
            )}

            {/* Beat 2: "Technology that scales." */}
            {introPhase === 2 && (
              <motion.div
                key="beat-2"
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1.0 }}
                exit={{ opacity: 0, y: -30, scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-5xl"
              >
                <span className="text-xs sm:text-sm font-bold tracking-widest text-blue-400 uppercase font-display block mb-3 opacity-80">
                  ORBYTES GLOBAL
                </span>
                <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-display leading-tight drop-shadow-[0_4px_28px_rgba(0,0,0,0.9)]">
                  Technology that{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 drop-shadow-[0_0_40px_rgba(129,140,248,0.6)]">
                    scales.
                  </span>
                </h2>
              </motion.div>
            )}

            {/* Beat 3: "Technology that moves business forward." */}
            {introPhase === 3 && (
              <motion.div
                key="beat-3"
                initial={{ opacity: 0, y: 35, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1.0 }}
                exit={{ opacity: 0, y: -30, scale: 1.02 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-5xl"
              >
                <span className="text-xs sm:text-sm font-bold tracking-widest text-emerald-400 uppercase font-display block mb-3 opacity-80">
                  ORBYTES GLOBAL
                </span>
                <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-display leading-tight drop-shadow-[0_4px_28px_rgba(0,0,0,0.9)]">
                  Technology that{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-400 drop-shadow-[0_0_40px_rgba(52,211,153,0.6)]">
                    moves business forward.
                  </span>
                </h2>
              </motion.div>
            )}

            {/* Skip / Scroll Hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="absolute bottom-8 inset-x-0 flex flex-col items-center justify-center gap-1 cursor-pointer"
              onClick={completeIntro}
            >
              <button
                type="button"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/[0.08] hover:bg-white/[0.15] border border-white/10 text-xs font-medium text-slate-300 hover:text-white backdrop-blur-md transition-all"
              >
                <span>Skip Intro</span>
                <ChevronDown className="h-3.5 w-3.5 animate-bounce" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ==========================================
          STAGE 2: Full Hero Content & Interactive Stage
          Arrives immediately after animation finishes
          ========================================== */}
      <div
        className={`mx-auto max-w-7xl px-6 w-full relative z-10 transition-all duration-700 ${
          introPhase === 4 || isReducedMotion
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-6 pointer-events-none absolute"
        }`}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Story Content */}
          <motion.div
            variants={heroContentVariants}
            initial="hidden"
            animate={introPhase === 4 || isReducedMotion ? "visible" : "hidden"}
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Enterprise Tag */}
            <motion.div variants={heroItemVariants}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/50 text-xs font-semibold text-cyan-300 backdrop-blur-md shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                <span>Enterprise Technology & Managed Cybersecurity</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={heroItemVariants} className="space-y-1.5">
              <span className="text-xs md:text-sm font-bold tracking-widest text-cyan-400 uppercase font-display block">
                ORBYTES GLOBAL
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display leading-[1.08]">
                Technology that{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  secures.
                </span>
                <br />
                Technology that{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                  scales.
                </span>
                <br />
                Technology that{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-400">
                  moves business forward.
                </span>
              </h1>
            </motion.div>

            {/* Supporting Pitch */}
            <motion.p
              variants={heroItemVariants}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl"
            >
              We engineer mission-critical digital foundations for forward-thinking organizations. From proactive 24/7 cybersecurity monitoring to zero-downtime cloud migration and strategic IT operations.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={heroItemVariants}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:from-cyan-400 hover:to-blue-500 hover:shadow-cyan-500/40 hover:scale-[1.02]"
              >
                <span>Talk to an Expert</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-7 py-3.5 text-base font-semibold text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/[0.08] hover:text-white"
              >
                <span>Explore Solutions</span>
              </Link>
            </motion.div>

            {/* Proof Badges */}
            <motion.div
              variants={heroItemVariants}
              className="pt-3 flex flex-wrap items-center gap-6 text-xs text-slate-400"
            >
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
                <span>24/7 Active SOC Defense</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-3.5 w-3.5 text-cyan-400" />
                <span>99.99% Uptime Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Global Coverage: India & Canada</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Hero Stage: Interactive Ecosystem Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              introPhase === 4 || isReducedMotion
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.95 }
            }
            transition={{ duration: 0.9, delay: 0.3 }}
            className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] w-full"
          >
            <EcosystemVisual />
          </motion.div>
        </div>
      </div>

      {/* Floating Ambient Controls: Pause/Play Video & Replay Intro */}
      <div className="absolute bottom-4 right-6 z-20 hidden sm:flex items-center gap-2.5">
        {introPhase === 4 && (
          <button
            onClick={replayIntro}
            aria-label="Replay intro animation"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#030714]/80 border border-white/15 text-xs text-slate-300 hover:text-white hover:border-cyan-400/50 backdrop-blur-md transition-all shadow-lg group focus:outline-none"
          >
            <RotateCcw className="h-3 w-3 text-cyan-400 group-hover:-rotate-45 transition-transform" />
            <span className="text-[11px] font-medium tracking-wide">Replay Intro</span>
          </button>
        )}

        <button
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause ambient video motion" : "Resume ambient video motion"}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#030714]/80 border border-white/15 text-xs text-slate-300 hover:text-white hover:border-cyan-400/50 backdrop-blur-md transition-all shadow-lg group focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
        >
          {isPlaying ? (
            <>
              <Pause className="h-3 w-3 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span className="text-[11px] font-medium tracking-wide">Pause Ambient</span>
            </>
          ) : (
            <>
              <Play className="h-3 w-3 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span className="text-[11px] font-medium tracking-wide">Play Ambient</span>
            </>
          )}
          <span className="flex h-1.5 w-1.5 relative ml-0.5">
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                isPlaying ? "bg-emerald-400 opacity-75" : "bg-slate-500 opacity-30"
              }`}
            />
            <span
              className={`relative inline-flex rounded-full h-1.5 w-1.5 ${
                isPlaying ? "bg-emerald-400" : "bg-slate-500"
              }`}
            />
          </span>
        </button>
      </div>
    </section>
  );
}
