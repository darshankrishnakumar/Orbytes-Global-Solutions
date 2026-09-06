"use client";

import React, { useEffect, useRef } from "react";
import { ShieldCheck, Lock, Activity } from "lucide-react";

export function SecurityRadarVisual() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let angle = 0;
    const width = (canvas.width = canvas.parentElement?.clientWidth || 450);
    const height = (canvas.height = canvas.parentElement?.clientHeight || 450);
    const cx = width / 2;
    const cy = height / 2;
    const radius = Math.min(width, height) * 0.42;

    // Simulated threat blips
    const blips = [
      { r: radius * 0.35, theta: 0.8, intercepted: true, label: "Ransomware Blocked" },
      { r: radius * 0.65, theta: 2.3, intercepted: true, label: "Port Scan Isolated" },
      { r: radius * 0.82, theta: 4.1, intercepted: true, label: "Phishing Vector Terminated" },
      { r: radius * 0.50, theta: 5.4, intercepted: true, label: "Anomalous Login Contained" },
    ];

    const render = () => {
      angle += 0.025;
      ctx.clearRect(0, 0, width, height);

      // Concentric Radar Rings
      for (let i = 1; i <= 4; i++) {
        const ringR = (radius / 4) * i;
        ctx.strokeStyle = i === 4 ? "rgba(0, 229, 255, 0.4)" : "rgba(0, 229, 255, 0.12)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(cx, cy, ringR, 0, Math.PI * 2);
        ctx.stroke();

        // Ring distance markers
        ctx.fillStyle = "rgba(148, 163, 184, 0.5)";
        ctx.font = "9px monospace";
        ctx.fillText(`${i * 25}%`, cx + ringR - 18, cy - 4);
      }

      // Crosshairs
      ctx.strokeStyle = "rgba(0, 229, 255, 0.15)";
      ctx.setLineDash([2, 4]);
      ctx.beginPath();
      ctx.moveTo(cx - radius, cy);
      ctx.lineTo(cx + radius, cy);
      ctx.moveTo(cx, cy - radius);
      ctx.lineTo(cx, cy + radius);
      ctx.stroke();
      ctx.setLineDash([]);

      // Rotating Sweep Beam
      const sweepGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
      sweepGrad.addColorStop(0, "rgba(0, 229, 255, 0)");
      sweepGrad.addColorStop(1, "rgba(0, 229, 255, 0.25)");

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, angle - 0.4, angle);
      ctx.closePath();
      ctx.fillStyle = sweepGrad;
      ctx.fill();

      // Lead line
      ctx.strokeStyle = "rgba(0, 229, 255, 0.9)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius);
      ctx.stroke();
      ctx.restore();

      // Threat Blips with Pulsing Intercept Radii
      blips.forEach((blip) => {
        const bx = cx + Math.cos(blip.theta) * blip.r;
        const by = cy + Math.sin(blip.theta) * blip.r;

        // Threat beacon
        ctx.fillStyle = "#10b981";
        ctx.shadowColor = "#10b981";
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(bx, by, 3.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // Intercept Ring
        ctx.strokeStyle = "rgba(16, 185, 129, 0.4)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(bx, by, 8 + Math.sin(angle * 3) * 3, 0, Math.PI * 2);
        ctx.stroke();

        // Label
        ctx.fillStyle = "rgba(241, 245, 249, 0.8)";
        ctx.font = "600 9px system-ui";
        ctx.fillText(blip.label, bx + 12, by + 3);
      });

      // Central Shield Core
      ctx.fillStyle = "#0c1527";
      ctx.strokeStyle = "#00e5ff";
      ctx.lineWidth = 2.5;
      ctx.shadowColor = "#00e5ff";
      ctx.shadowBlur = 15;
      ctx.beginPath();
      ctx.arc(cx, cy, 22, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.shadowBlur = 0;

      // Inner Core Status
      ctx.fillStyle = "#00e5ff";
      ctx.beginPath();
      ctx.arc(cx, cy, 6, 0, Math.PI * 2);
      ctx.fill();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[450px] flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full" />
      {/* Floating Status Badges */}
      <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg border border-cyan-500/30 bg-[#081024]/90 backdrop-blur-md text-[11px] font-semibold text-cyan-300">
        <Activity className="h-3.5 w-3.5 text-cyan-400 animate-pulse" />
        <span>SOC 24/7 RADAR: ACTIVE</span>
      </div>
      <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-lg border border-emerald-500/30 bg-[#081024]/90 backdrop-blur-md text-[11px] font-semibold text-emerald-400">
        <ShieldCheck className="h-3.5 w-3.5" />
        <span>THREAT MITIGATION: 100%</span>
      </div>
    </div>
  );
}
