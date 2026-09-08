"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";

export function HeroSection() {
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [activeVideoIndex, setActiveVideoIndex] = useState<0 | 1>(0);
  const isSwitchingRef = useRef<boolean>(false);

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

  // Sequential video scheduling: Video 1 -> Video 2 -> Video 1 -> Video 2 ...
  const switchVideo = useCallback(
    (toIndex: 0 | 1) => {
      if (toIndex === 1) {
        const v2 = video2Ref.current;
        if (v2) {
          v2.currentTime = 0;
          safePlay(v2);
        }
        setActiveVideoIndex(1);
      } else {
        const v1 = video1Ref.current;
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
    const v1 = video1Ref.current;
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
    const v2 = video2Ref.current;
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

  // Fail-safe watchdog to ensure continuous cycle even if timeupdate or ended throttled
  useEffect(() => {
    const checkInterval = setInterval(() => {
      if (activeVideoIndex === 0) {
        const v1 = video1Ref.current;
        if (v1 && (v1.ended || (v1.duration > 0 && v1.currentTime >= v1.duration - 0.2))) {
          handleVideo1Ended();
        }
      } else {
        const v2 = video2Ref.current;
        if (v2 && (v2.ended || (v2.duration > 0 && v2.currentTime >= v2.duration - 0.2))) {
          handleVideo2Ended();
        }
      }
    }, 800);
    return () => clearInterval(checkInterval);
  }, [activeVideoIndex, handleVideo1Ended, handleVideo2Ended]);

  // Tab visibility management: resume playback when tab gains focus
  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        if (activeVideoIndex === 0) {
          safePlay(video1Ref.current);
        } else {
          safePlay(video2Ref.current);
        }
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, [activeVideoIndex, safePlay]);

  useEffect(() => {
    safePlay(video1Ref.current);
    if (video2Ref.current) {
      video2Ref.current.load();
    }

    const handleFirstGesture = () => {
      if (activeVideoIndex === 0) {
        safePlay(video1Ref.current);
      } else {
        safePlay(video2Ref.current);
      }

      // Unlock second video element context for mobile/iOS
      if (video2Ref.current && video2Ref.current.paused) {
        const p = video2Ref.current.play();
        if (p) {
          p.then(() => {
            if (activeVideoIndex === 0) {
              video2Ref.current?.pause();
            }
          }).catch(() => {});
        }
      }

      window.removeEventListener("click", handleFirstGesture);
      window.removeEventListener("touchstart", handleFirstGesture);
      window.removeEventListener("scroll", handleFirstGesture);
    };

    window.addEventListener("click", handleFirstGesture, { passive: true });
    window.addEventListener("touchstart", handleFirstGesture, { passive: true });
    window.addEventListener("scroll", handleFirstGesture, { passive: true });

    return () => {
      window.removeEventListener("click", handleFirstGesture);
      window.removeEventListener("touchstart", handleFirstGesture);
      window.removeEventListener("scroll", handleFirstGesture);
    };
  }, [safePlay, activeVideoIndex]);

  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-[#030714] text-white">
      {/* ==========================================
          Scheduled Alternating Video Background
          Video 1: PixVerse Premium Showcase
          Video 2: Screen Recording Showcase
          Cycle: Video 1 -> Video 2 -> Video 1 -> Video 2 ...
          ========================================== */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        {/* Video 1: PixVerse Premium */}
        <video
          ref={video1Ref}
          src="/videos/pixverse-premium.mp4"
          autoPlay
          muted
          playsInline
          preload="auto"
          onTimeUpdate={handleVideo1TimeUpdate}
          onEnded={handleVideo1Ended}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          className={`absolute inset-0 w-full h-full object-cover object-center z-0 pointer-events-none transition-opacity duration-1000 ease-in-out ${
            activeVideoIndex === 0 ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/videos/pixverse-premium.mp4" type="video/mp4" />
        </video>

        {/* Video 2: Screen Recording Showcase */}
        <video
          ref={video2Ref}
          src="/videos/screen-showcase.mp4"
          muted
          playsInline
          preload="auto"
          onTimeUpdate={handleVideo2TimeUpdate}
          onEnded={handleVideo2Ended}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          className={`absolute inset-0 w-full h-full object-cover object-center z-0 pointer-events-none transition-opacity duration-1000 ease-in-out ${
            activeVideoIndex === 1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/videos/screen-showcase.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Subtle Bottom Edge Soft Blending to content below */}
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[#030714] to-transparent pointer-events-none z-[2]" />
    </section>
  );
}
