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

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);

  const [isReducedMotion, setIsReducedMotion] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [activeVideoIndex, setActiveVideoIndex] = useState<0 | 1>(0);
  const activeIndexRef = useRef<0 | 1>(0);
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
    const playPromise = vid.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.warn("Video playback deferred by browser policy:", err.message);
      });
    }
  }, []);

  // Perform seamless transition from current active video to target video
  const performSwitch = useCallback(
    (toIndex: 0 | 1) => {
      if (isSwitchingRef.current) return;
      isSwitchingRef.current = true;

      const incomingVid = toIndex === 0 ? video1Ref.current : video2Ref.current;
      const outgoingVid = toIndex === 0 ? video2Ref.current : video1Ref.current;

      // 1. Immediately start incoming video from beginning
      if (incomingVid) {
        incomingVid.currentTime = 0;
        safePlay(incomingVid);
      }

      // 2. Trigger cross-fade state
      activeIndexRef.current = toIndex;
      setActiveVideoIndex(toIndex);

      // 3. Allow 1000ms for smooth CSS cross-fade to complete, then pause and reset outgoing video
      setTimeout(() => {
        if (outgoingVid && !outgoingVid.paused) {
          outgoingVid.pause();
          outgoingVid.currentTime = 0;
        }
        isSwitchingRef.current = false;
      }, 1000);
    },
    [safePlay]
  );

  // Trigger cross-fade slightly before the video reaches the end (0.8s prior) for seamless blend
  const handleTimeUpdate = useCallback(
    (index: 0 | 1) => {
      if (activeIndexRef.current !== index || isSwitchingRef.current) return;
      const vid = index === 0 ? video1Ref.current : video2Ref.current;
      if (!vid || !vid.duration) return;

      if (vid.currentTime >= vid.duration - 0.8) {
        performSwitch(index === 0 ? 1 : 0);
      }
    },
    [performSwitch]
  );

  // Fail-safe ended handler in case timeupdate wasn't triggered at the threshold
  const handleEnded = useCallback(
    (index: 0 | 1) => {
      if (activeIndexRef.current !== index) return;
      performSwitch(index === 0 ? 1 : 0);
    },
    [performSwitch]
  );

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

  // Fail-safe watchdog: guarantees continuous playback and loop continuity
  useEffect(() => {
    const watchdog = setInterval(() => {
      const activeIdx = activeIndexRef.current;
      const activeVid = activeIdx === 0 ? video1Ref.current : video2Ref.current;
      if (!activeVid) return;

      // If document is visible and active video is unexpectedly paused outside of transition, resume it
      if (
        document.visibilityState === "visible" &&
        activeVid.paused &&
        !isSwitchingRef.current
      ) {
        safePlay(activeVid);
      }

      // If active video finished or reached the end without triggering timeupdate
      if (
        !isSwitchingRef.current &&
        activeVid.duration > 0 &&
        (activeVid.ended || activeVid.currentTime >= activeVid.duration - 0.3)
      ) {
        performSwitch(activeIdx === 0 ? 1 : 0);
      }
    }, 500);

    return () => clearInterval(watchdog);
  }, [performSwitch, safePlay]);

  // Tab visibility management: resume playback when tab gains focus
  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        const activeVid =
          activeIndexRef.current === 0
            ? video1Ref.current
            : video2Ref.current;
        safePlay(activeVid);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, [safePlay]);

  // Initial mount: Start Video 1 and register one-time unlock gesture fallback
  useEffect(() => {
    safePlay(video1Ref.current);

    const handleOneTimeGesture = () => {
      const activeVid =
        activeIndexRef.current === 0
          ? video1Ref.current
          : video2Ref.current;
      if (activeVid && activeVid.paused) {
        safePlay(activeVid);
      }
    };

    window.addEventListener("click", handleOneTimeGesture, {
      once: true,
      passive: true,
    });
    window.addEventListener("touchstart", handleOneTimeGesture, {
      once: true,
      passive: true,
    });

    return () => {
      window.removeEventListener("click", handleOneTimeGesture);
      window.removeEventListener("touchstart", handleOneTimeGesture);
    };
  }, [safePlay]);

  const togglePlay = () => {
    const activeVid = activeIndexRef.current === 0 ? video1Ref.current : video2Ref.current;
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
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
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
          Cycle: Video 1 (PixVerse) <-> Video 2 (Screen Showcase)
          ========================================== */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        {/* Video 1: PixVerse Premium Showcase */}
        <video
          ref={video1Ref}
          src="/videos/pixverse-premium.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
          onTimeUpdate={() => handleTimeUpdate(0)}
          onEnded={() => handleEnded(0)}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          className={`absolute inset-0 w-full h-full object-cover object-center lg:object-[65%_center] transition-opacity duration-1000 ease-in-out ${
            activeVideoIndex === 0 ? "opacity-90" : "opacity-0"
          }`}
        />

        {/* Video 2: Screen Recording Showcase */}
        <video
          ref={video2Ref}
          src="/videos/screen-showcase.mp4"
          muted
          playsInline
          preload="auto"
          onTimeUpdate={() => handleTimeUpdate(1)}
          onEnded={() => handleEnded(1)}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ease-in-out ${
            activeVideoIndex === 1 ? "opacity-90" : "opacity-0"
          }`}
        />
      </div>

      {/* 1. Ambient Chromatic Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none z-[1]" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none z-[1]" />

      {/* Lateral gradient: Darker on left for 100% typography contrast, transparent on right to showcase videos */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-[#030714] via-[#030714]/85 via-50% to-[#030714]/40 pointer-events-none z-[2] transition-opacity duration-700 ${
          isIntroActive ? "opacity-40" : "opacity-95"
        }`}
      />

      {/* Top and Bottom Edge Vignettes */}
      <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#030714] to-transparent pointer-events-none z-[3]" />
      <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-[#030714] to-transparent pointer-events-none z-[3]" />

      {/* ==========================================
          STAGE 1: Cinematic Intro Animation (The 3 Beats)
          Plays cleanly on load, then automatically transitions
          ========================================== */}
      <AnimatePresence mode="wait">
        {isIntroActive && !isReducedMotion && (
          <motion.div
            key={`intro-beat-${introPhase}`}
            initial={{ opacity: 0, y: 25, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1.0 }}
            exit={{ opacity: 0, y: -25, scale: 1.02 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-30 flex flex-col items-center justify-center px-4 sm:px-8 text-center select-none"
          >
            {/* Beat 1: "Technology that secures." */}
            {introPhase === 1 && (
              <div className="max-w-5xl">
                <span className="text-xs sm:text-sm font-bold tracking-widest text-cyan-400 uppercase font-display block mb-3 opacity-80">
                  ORBYTES GLOBAL
                </span>
                <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-display leading-tight drop-shadow-[0_4px_28px_rgba(0,0,0,0.9)]">
                  Technology that{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-blue-400 drop-shadow-[0_0_40px_rgba(0,229,255,0.6)]">
                    secures.
                  </span>
                </h1>
              </div>
            )}

            {/* Beat 2: "Technology that scales." */}
            {introPhase === 2 && (
              <div className="max-w-5xl">
                <span className="text-xs sm:text-sm font-bold tracking-widest text-blue-400 uppercase font-display block mb-3 opacity-80">
                  ORBYTES GLOBAL
                </span>
                <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-display leading-tight drop-shadow-[0_4px_28px_rgba(0,0,0,0.9)]">
                  Technology that{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 drop-shadow-[0_0_40px_rgba(129,140,248,0.6)]">
                    scales.
                  </span>
                </h2>
              </div>
            )}

            {/* Beat 3: "Technology that moves business forward." */}
            {introPhase === 3 && (
              <div className="max-w-5xl">
                <span className="text-xs sm:text-sm font-bold tracking-widest text-emerald-400 uppercase font-display block mb-3 opacity-80">
                  ORBYTES GLOBAL
                </span>
                <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-display leading-tight drop-shadow-[0_4px_28px_rgba(0,0,0,0.9)]">
                  Technology that{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-300 to-emerald-400 drop-shadow-[0_0_40px_rgba(52,211,153,0.6)]">
                    moves business forward.
                  </span>
                </h2>
              </div>
            )}

            {/* Skip / Scroll Hint */}
            <div
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ==========================================
          STAGE 2: Full Hero Content
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
            className="lg:col-span-7 space-y-6 text-left"
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

          {/* Right Hero Stage: Clear Open View of the Showcase Video */}
          <div className="lg:col-span-5 hidden lg:block" />
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
