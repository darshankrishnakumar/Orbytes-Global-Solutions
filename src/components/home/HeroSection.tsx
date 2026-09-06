"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Sparkles, Play, Pause } from "lucide-react";
import { EcosystemVisual } from "./EcosystemVisual";

export function HeroSection() {
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMeshVisible, setIsMeshVisible] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Sync and play background video reliably across Safari, WebKit, and Chrome
  const playVideo = useCallback(() => {
    const vid = bgVideoRef.current;
    if (vid) {
      vid.defaultMuted = true;
      vid.muted = true;
      vid.playsInline = true;
      vid.setAttribute("playsinline", "true");
      vid.setAttribute("webkit-playsinline", "true");
      const playPromise = vid.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.warn("Video playback deferred by browser policy:", err);
          });
      }
    }
  }, []);

  // Natural choreographed cycle: 6.5s pure video ⟷ 8.5s interactive mesh
  useEffect(() => {
    if (!isPlaying || isHovered) return;

    // Time to hold the current phase before smoothly dissolving to the other
    const phaseDuration = isMeshVisible ? 8500 : 6500;

    const timer = setTimeout(() => {
      setIsMeshVisible((prev) => !prev);
    }, phaseDuration);

    return () => clearTimeout(timer);
  }, [isMeshVisible, isPlaying, isHovered]);

  useEffect(() => {
    // Respect user's prefers-reduced-motion OS setting
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      bgVideoRef.current?.pause();
      setIsPlaying(false);
      setIsMeshVisible(true); // Default to clean accessible static mesh
      return;
    }

    // Initialize playback immediately
    playVideo();

    // Fallback: On first user interaction anywhere on the viewport (click, touch, scroll)
    const handleFirstTouch = () => {
      playVideo();
      window.removeEventListener("click", handleFirstTouch);
      window.removeEventListener("touchstart", handleFirstTouch);
      window.removeEventListener("scroll", handleFirstTouch);
    };

    window.addEventListener("click", handleFirstTouch, { passive: true });
    window.addEventListener("touchstart", handleFirstTouch, { passive: true });
    window.addEventListener("scroll", handleFirstTouch, { passive: true });

    return () => {
      window.removeEventListener("click", handleFirstTouch);
      window.removeEventListener("touchstart", handleFirstTouch);
      window.removeEventListener("scroll", handleFirstTouch);
    };
  }, [playVideo]);

  const togglePlay = () => {
    const bgVideo = bgVideoRef.current;
    if (isPlaying) {
      bgVideo?.pause();
      setIsPlaying(false);
    } else {
      bgVideo?.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#030714] text-white">
      {/* 1. Cinematic Ambient Background Video (Seamless Continuous Loop) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={bgVideoRef}
          src="/videos/hero-background.mp4"
          poster="/videos/hero-poster.jpg"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className={`w-full h-full object-cover object-bottom scale-110 transition-opacity duration-[1400ms] ease-in-out ${
            isMeshVisible ? "opacity-25 md:opacity-30" : "opacity-90 md:opacity-95"
          }`}
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>

        {/* High-Contrast Lateral Gradient: deep black on left for typography readability, open on right for vivid glowing video */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#030714] via-[#030714]/80 to-transparent w-full lg:w-3/5" />

        {/* Seamless Navigation & Section Edge Blending */}
        <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#030714] to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#030714] to-transparent" />
      </div>

      {/* 2. Background ambient chromatic glow */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none z-[1]" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none z-[1]" />

      <div className="mx-auto max-w-7xl px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Story Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-6 space-y-6 text-left"
          >
            {/* Enterprise Tag */}
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/50 text-xs font-semibold text-cyan-300 backdrop-blur-md shadow-sm">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                <span>Enterprise Technology & Managed Cybersecurity</span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.div variants={itemVariants} className="space-y-1">
              <span className="text-xs md:text-sm font-bold tracking-widest text-cyan-400 uppercase font-display block">
                TECHNOSPRINT
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display leading-[1.08]">
                Technology that <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">secures.</span><br />
                Technology that <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">scales.</span><br />
                Technology that <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-emerald-400">moves business forward.</span>
              </h1>
            </motion.div>

            {/* Supporting Pitch */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl"
            >
              We engineer mission-critical digital foundations for forward-thinking organizations. From proactive 24/7 cybersecurity monitoring to zero-downtime cloud migration and strategic IT operations.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
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
              variants={itemVariants}
              className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-400"
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

          {/* Right Hero Dynamic Visual: Silky Smooth 1.4s Dissolve to Ecosystem Mesh */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[460px] sm:min-h-[540px] lg:min-h-[600px]"
          >
            <motion.div
              animate={{
                opacity: isMeshVisible ? 1 : 0,
                scale: isMeshVisible ? 1 : 0.95,
                y: isMeshVisible ? 0 : 12,
              }}
              transition={{
                duration: 1.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`w-full flex items-center justify-center ${
                isMeshVisible ? "pointer-events-auto" : "pointer-events-none"
              }`}
            >
              <EcosystemVisual />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Floating Ambient Controls (TCS Style) */}
      <div className="absolute bottom-4 right-6 z-20 hidden sm:flex items-center gap-3">
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
