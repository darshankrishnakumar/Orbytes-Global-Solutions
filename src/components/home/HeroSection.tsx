"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const waveVideoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
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

  // Fail-safe watchdog to ensure continuous cycle even if timeupdate or ended throttled
  useEffect(() => {
    const checkInterval = setInterval(() => {
      if (activeVideoIndex === 0) {
        const v1 = videoRef.current;
        if (v1 && (v1.ended || (v1.duration > 0 && v1.currentTime >= v1.duration - 0.2))) {
          handleVideo1Ended();
        }
      } else {
        const v2 = waveVideoRef.current;
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
          safePlay(videoRef.current);
        } else {
          safePlay(waveVideoRef.current);
        }
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, [activeVideoIndex, safePlay]);

  useEffect(() => {
    safePlay(videoRef.current);
    if (waveVideoRef.current) {
      waveVideoRef.current.load();
    }

    const handleFirstGesture = () => {
      if (activeVideoIndex === 0) {
        safePlay(videoRef.current);
      } else {
        safePlay(waveVideoRef.current);
      }

      // Unlock second video element context for mobile/iOS
      if (waveVideoRef.current && waveVideoRef.current.paused) {
        const p = waveVideoRef.current.play();
        if (p) {
          p.then(() => {
            if (activeVideoIndex === 0) {
              waveVideoRef.current?.pause();
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



  // Pristine Futuristic Glowing Wave & Network Canvas (100% Vector, Zero AI artifacts)
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

    // Floating data particles
    const particleCount = 42;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 2 + 0.8,
      baseAlpha: Math.random() * 0.45 + 0.2,
    }));

    let time = 0;

    const render = () => {
      time += 0.014;
      ctx.clearRect(0, 0, width, height);

      // 1. Subtle Enterprise Coordinate Grid
      ctx.strokeStyle = "rgba(0, 229, 255, 0.03)";
      ctx.lineWidth = 1;
      const gridSize = 46;
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

      // 2. Layer 1: Ambient Cyan Deep Wave Flow
      ctx.beginPath();
      ctx.moveTo(0, height * 0.64);
      for (let x = 0; x <= width; x += 8) {
        const y =
          height * 0.64 +
          Math.sin(x * 0.0028 + time * 0.7) * 48 +
          Math.cos(x * 0.0055 + time * 0.45) * 26;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      const waveGrad1 = ctx.createLinearGradient(0, height * 0.5, width, height);
      waveGrad1.addColorStop(0, "rgba(0, 229, 255, 0.09)");
      waveGrad1.addColorStop(0.5, "rgba(37, 99, 235, 0.07)");
      waveGrad1.addColorStop(1, "rgba(3, 7, 20, 0)");
      ctx.fillStyle = waveGrad1;
      ctx.fill();

      // 3. Layer 2: Neon Cyan Glowing Wave Ribbon
      ctx.beginPath();
      for (let x = 0; x <= width; x += 6) {
        const y =
          height * 0.62 +
          Math.sin(x * 0.0032 + time * 0.85) * 44 +
          Math.sin(x * 0.0075 + time * 1.1) * 22;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = "rgba(0, 229, 255, 0.55)";
      ctx.lineWidth = 2.5;
      ctx.shadowColor = "#00e5ff";
      ctx.shadowBlur = 18;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // 4. Layer 3: Secondary Blue/Violet Harmonic Crest
      ctx.beginPath();
      for (let x = 0; x <= width; x += 6) {
        const y =
          height * 0.68 +
          Math.cos(x * 0.0038 + time * 0.6) * 36 +
          Math.sin(x * 0.0068 + time * 0.95) * 16;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = "rgba(96, 165, 250, 0.4)";
      ctx.lineWidth = 2;
      ctx.shadowColor = "#3b82f6";
      ctx.shadowBlur = 14;
      ctx.stroke();
      ctx.shadowBlur = 0;

      // 5. Ambient Floating Particles & Interconnected Technical Mesh
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
          if (dist < 125) {
            ctx.strokeStyle = `rgba(0, 229, 255, ${(1 - dist / 125) * 0.16})`;
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

  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-[#030714] text-white">
      {/* ==========================================
          0. Scheduled Alternating Video Background
          Cycle: Video 1 -> Video 2 -> Video 1 -> Video 2 ...
          ========================================== */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        {/* Video 1: Futuristic Glowing Cubes */}
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
          className={`absolute inset-0 w-full h-full object-cover object-center lg:object-[65%_center] z-0 pointer-events-none transition-opacity duration-1000 ease-in-out ${
            activeVideoIndex === 0 ? "opacity-90" : "opacity-0"
          }`}
        >
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>

        {/* Video 2: Ambient Flowing Wave Motion */}
        <video
          ref={waveVideoRef}
          src="/videos/wave-motion.mp4"
          muted
          playsInline
          preload="auto"
          onTimeUpdate={handleVideo2TimeUpdate}
          onEnded={handleVideo2Ended}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          className={`absolute inset-0 w-full h-full object-cover object-center z-0 pointer-events-none transition-opacity duration-1000 ease-in-out ${
            activeVideoIndex === 1 ? "opacity-90" : "opacity-0"
          }`}
        >
          <source src="/videos/wave-motion.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ==========================================
          1. Glowing Technology Network Canvas
          ========================================== */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-[1] pointer-events-none"
      />

      {/* Ambient Chromatic Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none z-[1]" />
      <div className="absolute bottom-10 right-1/4 w-[450px] h-[450px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none z-[1]" />

      {/* Contrast Enhancement Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030714]/40 via-[#030714]/15 to-[#030714]/70 pointer-events-none z-[2]" />

      {/* Top and Bottom Edge Soft Blending */}
      <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#030714] to-transparent pointer-events-none z-[3]" />
      <div className="absolute bottom-0 inset-x-0 h-36 bg-gradient-to-t from-[#030714] to-transparent pointer-events-none z-[3]" />
    </section>
  );
}
