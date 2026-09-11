"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrandLogoIcon } from "@/components/common/BrandLogo";

export function HeroSection() {
  const video0Ref = useRef<HTMLVideoElement>(null);
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [activeVideoIndex, setActiveVideoIndex] = useState<0 | 1 | 2>(0);
  const [isVideoReady, setIsVideoReady] = useState<boolean>(false);
  const activeIndexRef = useRef<0 | 1 | 2>(0);
  const isSwitchingRef = useRef<boolean>(false);

  const handleVideoReady = useCallback(() => {
    setIsVideoReady(true);
  }, []);

  // Safe video playback helper for Safari, Chrome & iOS
  const safePlay = useCallback((vid: HTMLVideoElement | null) => {
    if (!vid) return;
    vid.defaultMuted = true;
    vid.muted = true;
    vid.playsInline = true;
    vid.setAttribute("playsinline", "true");
    vid.setAttribute("webkit-playsinline", "true");
    vid.setAttribute("muted", "");
    const playPromise = vid.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.warn("Video playback deferred by browser policy:", err.message);
      });
    }
  }, []);

  const nextIndex = (curr: 0 | 1 | 2): 0 | 1 | 2 => {
    return ((curr + 1) % 3) as 0 | 1 | 2;
  };

  // Perform seamless transition from current active video to target video
  const performSwitch = useCallback(
    (toIndex: 0 | 1 | 2) => {
      if (isSwitchingRef.current) return;
      isSwitchingRef.current = true;

      const fromIndex = activeIndexRef.current;
      const incomingVid =
        toIndex === 0
          ? video0Ref.current
          : toIndex === 1
          ? video1Ref.current
          : video2Ref.current;
      const outgoingVid =
        fromIndex === 0
          ? video0Ref.current
          : fromIndex === 1
          ? video1Ref.current
          : video2Ref.current;

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
    (index: 0 | 1 | 2) => {
      if (activeIndexRef.current !== index || isSwitchingRef.current) return;
      const vid =
        index === 0
          ? video0Ref.current
          : index === 1
          ? video1Ref.current
          : video2Ref.current;
      if (!vid || !vid.duration) return;

      if (vid.currentTime >= vid.duration - 0.8) {
        performSwitch(nextIndex(index));
      }
    },
    [performSwitch]
  );

  // Fail-safe ended handler in case timeupdate wasn't triggered at the threshold
  const handleEnded = useCallback(
    (index: 0 | 1 | 2) => {
      if (activeIndexRef.current !== index) return;
      performSwitch(nextIndex(index));
    },
    [performSwitch]
  );

  // Fail-safe error handler: if a video fails to load or decode, advance to next video
  const handleError = useCallback(
    (index: 0 | 1 | 2) => {
      console.warn(`Video ${index} failed to load or play. Advancing to next video.`);
      handleVideoReady();
      if (activeIndexRef.current === index) {
        performSwitch(nextIndex(index));
      }
    },
    [performSwitch, handleVideoReady]
  );

  // Safety timeout: ensure loader dissolves after max 2.4s even on slow networks
  useEffect(() => {
    const safetyTimer = setTimeout(() => {
      handleVideoReady();
    }, 2400);
    return () => clearTimeout(safetyTimer);
  }, [handleVideoReady]);

  // Fail-safe watchdog: guarantees continuous playback and loop continuity
  useEffect(() => {
    const watchdog = setInterval(() => {
      const activeIdx = activeIndexRef.current;
      const activeVid =
        activeIdx === 0
          ? video0Ref.current
          : activeIdx === 1
          ? video1Ref.current
          : video2Ref.current;
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
        performSwitch(nextIndex(activeIdx));
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
            ? video0Ref.current
            : activeIndexRef.current === 1
            ? video1Ref.current
            : video2Ref.current;
        safePlay(activeVid);
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibility);
  }, [safePlay]);

  // Initial mount: Start Video 0 and register one-time unlock gesture fallback
  useEffect(() => {
    const vid0 = video0Ref.current;
    if (vid0) {
      safePlay(vid0);
      const handleCanPlay = () => {
        safePlay(vid0);
        handleVideoReady();
      };
      vid0.addEventListener("canplay", handleCanPlay, { once: true });
    }

    const handleOneTimeGesture = () => {
      const activeVid =
        activeIndexRef.current === 0
          ? video0Ref.current
          : activeIndexRef.current === 1
          ? video1Ref.current
          : video2Ref.current;
      if (activeVid && activeVid.paused) {
        safePlay(activeVid);
      }
      handleVideoReady();
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
  }, [safePlay, handleVideoReady]);

  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-[#030714] text-white">
      {/* ==========================================
          TCS-Style High-Tech Loading Experience
          Elegantly fades out as soon as the video is ready
          ========================================== */}
      <AnimatePresence>
        {!isVideoReady && (
          <motion.div
            key="tcs-hero-loader"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.03,
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
            }}
            className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#030714] text-white pointer-events-none select-none"
          >
            {/* Subtle Cyan Cyber Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15)_0%,rgba(3,7,20,0.96)_70%)] pointer-events-none" />

            {/* Concentric Orbital Rings & Logo */}
            <div className="relative flex items-center justify-center mb-6">
              {/* Outer Ambient Glow */}
              <div className="absolute h-32 w-32 rounded-full bg-cyan-500/15 blur-xl animate-pulse" />

              {/* Outer Rotating Dashed Ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 7, repeat: Infinity, ease: "linear" }}
                className="absolute h-24 w-24 rounded-full border border-dashed border-cyan-400/35"
              />

              {/* Inner Counter-Rotating Gradient Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
                className="h-20 w-20 rounded-full border-2 border-transparent border-t-cyan-400 border-r-blue-500 border-b-cyan-500/20"
              />

              {/* Central Core Brand Logo */}
              <div className="absolute flex items-center justify-center">
                <BrandLogoIcon className="h-10 w-10 drop-shadow-[0_0_12px_rgba(6,182,212,0.6)] animate-pulse" />
              </div>
            </div>

            {/* Futuristic Status Typography & Micro Progress Indicator */}
            <div className="space-y-3.5 text-center relative z-10">
              <div className="flex items-center justify-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
                <p className="text-[11px] font-semibold tracking-[0.28em] text-cyan-300 uppercase font-mono">
                  Loading Experience
                </p>
              </div>

              {/* High-Tech Glowing Micro Progress Bar */}
              <div className="w-48 h-1 rounded-full bg-white/10 overflow-hidden mx-auto relative">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.3,
                    ease: "easeInOut",
                  }}
                  className="w-1/2 h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_10px_#22d3ee]"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ==========================================
          Scheduled Alternating Video Background
          Video 0: Hero Intro Animation (FastStart streamable)
          Video 1: PixVerse Premium Showcase
          Video 2: Screen Recording Showcase
          Cycle: Video 0 -> Video 1 -> Video 2 -> Video 0 ...
          ========================================== */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        {/* Instant Fallback Poster Layer */}
        <img
          src="/videos/hero-poster.jpg"
          alt="Orbytes Hero Background"
          className="absolute inset-0 w-full h-full object-cover object-center z-[-1] pointer-events-none"
        />

        {/* Video 0: Hero Intro Animation (First) */}
        <video
          ref={video0Ref}
          src="/videos/hero-intro.mp4"
          autoPlay
          muted
          playsInline
          poster="/videos/hero-poster.jpg"
          preload="auto"
          onCanPlay={() => {
            safePlay(video0Ref.current);
            handleVideoReady();
          }}
          onPlaying={handleVideoReady}
          onLoadedData={handleVideoReady}
          onTimeUpdate={() => handleTimeUpdate(0)}
          onEnded={() => handleEnded(0)}
          onError={() => handleError(0)}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          className={`absolute inset-0 w-full h-full object-cover object-center z-0 pointer-events-none transition-opacity duration-1000 ease-in-out ${
            activeVideoIndex === 0 ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Video 1: PixVerse Premium (Zoomed in to crop out watermark) */}
        <video
          ref={video1Ref}
          src="/videos/pixverse-premium.mp4"
          muted
          playsInline
          poster="/videos/hero-poster.jpg"
          preload="auto"
          onTimeUpdate={() => handleTimeUpdate(1)}
          onEnded={() => handleEnded(1)}
          onError={() => handleError(1)}
          style={{ width: "100%", height: "100%", objectFit: "cover", transform: "scale(1.12)", transformOrigin: "center center" }}
          className={`absolute inset-0 w-full h-full object-cover object-center scale-[1.12] z-0 pointer-events-none transition-opacity duration-1000 ease-in-out ${
            activeVideoIndex === 1 ? "opacity-100" : "opacity-0"
          }`}
        />

        {/* Video 2: Screen Recording Showcase */}
        <video
          ref={video2Ref}
          src="/videos/screen-showcase.mp4"
          muted
          playsInline
          poster="/videos/hero-poster.jpg"
          preload="auto"
          onTimeUpdate={() => handleTimeUpdate(2)}
          onEnded={() => handleEnded(2)}
          onError={() => handleError(2)}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          className={`absolute inset-0 w-full h-full object-cover object-center z-0 pointer-events-none transition-opacity duration-1000 ease-in-out ${
            activeVideoIndex === 2 ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* Subtle Bottom Edge Soft Blending to content below */}
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#030714] to-transparent pointer-events-none z-[2]" />
    </section>
  );
}
