"use client";

import React, { useEffect, useRef } from "react";
import { Cloud, ArrowUp, DollarSign, Database } from "lucide-react";

export function CloudStreamVisual() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const width = (canvas.width = canvas.parentElement?.clientWidth || 450);
    const height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    // Upward traveling cloud migration data packets
    const streamParticles = Array.from({ length: 30 }, () => ({
      x: width * 0.3 + Math.random() * (width * 0.4),
      y: height * 0.75 + Math.random() * 50,
      targetY: height * 0.25,
      speed: Math.random() * 1.5 + 1.2,
      size: Math.random() * 2.5 + 1.5,
      alpha: Math.random() * 0.7 + 0.3,
    }));

    let t = 0;

    const render = () => {
      t += 0.02;
      ctx.clearRect(0, 0, width, height);

      // On-Premises Base Box (Bottom)
      const baseW = 160;
      const baseH = 50;
      const baseX = width / 2 - baseW / 2;
      const baseY = height * 0.78;

      ctx.fillStyle = "#0c1527";
      ctx.strokeStyle = "rgba(148, 163, 184, 0.4)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(baseX, baseY, baseW, baseH, 8);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = "#94a3b8";
      ctx.font = "bold 10px system-ui";
      ctx.textAlign = "center";
      ctx.fillText("ON-PREMISES CLUSTERS", width / 2, baseY + 28);

      // Cloud Destination Node (Top Center)
      const cloudW = 200;
      const cloudH = 60;
      const cloudX = width / 2 - cloudW / 2;
      const cloudY = height * 0.16;

      ctx.fillStyle = "#071738";
      ctx.strokeStyle = "#00e5ff";
      ctx.lineWidth = 2;
      ctx.shadowColor = "#00e5ff";
      ctx.shadowBlur = 15;
      ctx.beginPath();
      ctx.roundRect(cloudX, cloudY, cloudW, cloudH, 14);
      ctx.fill();
      ctx.stroke();
      ctx.shadowBlur = 0;

      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 12px system-ui";
      ctx.fillText("AZURE & AWS CLOUD", width / 2, cloudY + 26);
      ctx.fillStyle = "#38bdf8";
      ctx.font = "9px monospace";
      ctx.fillText("FINOPS OPTIMIZED • ZERO DOWNTIME", width / 2, cloudY + 44);

      // Upward flowing data stream particles
      streamParticles.forEach((p) => {
        p.y -= p.speed;
        if (p.y <= p.targetY + cloudH / 2) {
          p.y = baseY;
          p.x = width * 0.35 + Math.random() * (width * 0.3);
        }

        ctx.fillStyle = `rgba(0, 229, 255, ${p.alpha})`;
        ctx.shadowColor = "#00e5ff";
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Connecting guide beams
      ctx.strokeStyle = "rgba(0, 229, 255, 0.15)";
      ctx.lineWidth = 1;
      ctx.setLineDash([3, 5]);
      ctx.beginPath();
      ctx.moveTo(width / 2 - 40, baseY);
      ctx.lineTo(width / 2 - 50, cloudY + cloudH);
      ctx.moveTo(width / 2 + 40, baseY);
      ctx.lineTo(width / 2 + 50, cloudY + cloudH);
      ctx.stroke();
      ctx.setLineDash([]);

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[450px] flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg border border-cyan-500/30 bg-[#081024]/90 backdrop-blur-md text-[11px] font-semibold text-cyan-300">
        <ArrowUp className="h-3.5 w-3.5 text-cyan-400" />
        <span>LIVE DATA MIGRATION</span>
      </div>
      <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-lg border border-emerald-500/30 bg-[#081024]/90 backdrop-blur-md text-[11px] font-semibold text-emerald-400">
        <DollarSign className="h-3.5 w-3.5" />
        <span>FINOPS SAVINGS: ~30%</span>
      </div>
    </div>
  );
}
