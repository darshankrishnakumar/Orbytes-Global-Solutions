"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Shield, Sparkles, Play, Pause } from "lucide-react";
import { EcosystemVisual } from "./EcosystemVisual";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [activeVisual, setActiveVisual] = useState<"video" | "mesh">("video");
  const [isHovered, setIsHovered] = useState<boolean>(false);

  // Sync and play video reliably across Safari, WebKit, and Chrome
  const playVideo = useCallback(() => {
    const vid = videoRef.current;
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

  // When active visual switches to video, start playback
  useEffect(() => {
    if (activeVisual === "video" && isPlaying) {
      playVideo();
    }
  }, [activeVisual, isPlaying, playVideo]);

  // Sequential cycle with AnimatePresence mode="wait":
  // 7.5s Video ⟷ 8.5s Interactive Ecosystem Mesh
  useEffect(() => {
    if (!isPlaying || isHovered) return;

    const duration = activeVisual === "video" ? 7500 : 8500;

    const timer = setTimeout(() => {
      setActiveVisual((prev) => (prev === "video" ? "mesh" : "video"));
    }, duration);

    return () => clearTimeout(timer);
  }, [activeVisual, isPlaying, isHovered]);

  useEffect(() => {
    // Respect user's prefers-reduced-motion OS setting
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      videoRef.current?.pause();
      setIsPlaying(false);
      setActiveVisual("mesh"); // Default to clean static mesh for accessibility
      return;
    }

    playVideo();

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
    const vid = videoRef.current;
    if (isPlaying) {
      vid?.pause();
      setIsPlaying(false);
    } else {
      vid?.play().catch(() => {});
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
      {/* Background ambient chromatic glow and subtle tech accents */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.08),rgba(255,255,255,0))] pointer-events-none z-0" />

      {/* Edge blending gradients */}
      <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#030714] to-transparent pointer-events-none z-0" />
      <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#030714] to-transparent pointer-events-none z-0" />

      <div className="mx-auto max-w-7xl px-6 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Story Content (Clean & 100% Unobstructed) */}
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
                ORBYTES GLOBAL
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

          {/* Right Hero Visual Stage: Seamless Frameless Visuals with Zero Overlap */}
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="lg:col-span-6 relative flex flex-col items-center justify-center min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] w-full"
          >
            <div className="w-full relative flex items-center justify-center">
              <AnimatePresence mode="wait">
                {activeVisual === "video" ? (
                  <motion.div
                    key="hero-video-frameless"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="w-full flex items-center justify-center relative"
                  >
                    {/* Frameless, seamless ambient video with soft feathered edges — NO card border, NO separate screen */}
                    <div className="relative w-full max-w-[580px] h-[380px] sm:h-[460px] lg:h-[520px] flex items-center justify-center overflow-hidden">
                      <video
                        ref={videoRef}
                        src="/videos/hero-background.mp4"
                        poster="/videos/hero-poster.jpg"
                        autoPlay
                        loop
                        muted
                        playsInline
                        preload="auto"
                        className="w-full h-full object-contain object-center scale-105"
                      >
                        <source src="/videos/hero-background.mp4" type="video/mp4" />
                      </video>
                      {/* Feathered gradient masks on all edges so video softly melts into dark canvas with zero box borders */}
                      <div className="absolute inset-0 bg-gradient-to-r from-[#030714] via-transparent to-[#030714] pointer-events-none" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#030714] via-transparent to-[#030714] pointer-events-none" />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="hero-mesh-frameless"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="w-full flex items-center justify-center relative"
                  >
                    <EcosystemVisual />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
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
