"use client";

import React, { useEffect, useRef } from "react";
import { Server, Activity, CheckCircle2, Cpu } from "lucide-react";

export function InfrastructureVisual() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;
    const width = (canvas.width = canvas.parentElement?.clientWidth || 450);
    const height = (canvas.height = canvas.parentElement?.clientHeight || 450);

    const render = () => {
      t += 0.03;
      ctx.clearRect(0, 0, width, height);

      // Server Blade Rack Frame
      const rackX = 40;
      const rackY = 40;
      const rackW = width - 80;
      const rackH = height - 80;

      ctx.fillStyle = "#070e1f";
      ctx.strokeStyle = "rgba(0, 229, 255, 0.25)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(rackX, rackY, rackW, rackH, 12);
      ctx.fill();
      ctx.stroke();

      // Draw 5 Server Blades
      const bladeCount = 5;
      const bladeH = (rackH - 40) / bladeCount;

      for (let i = 0; i < bladeCount; i++) {
        const by = rackY + 20 + i * bladeH;

        ctx.fillStyle = "#0c1730";
        ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(rackX + 15, by + 4, rackW - 30, bladeH - 8, 6);
        ctx.fill();
        ctx.stroke();

        // Server Label
        ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
        ctx.font = "bold 10px monospace";
        ctx.fillText(`NODE-0${i + 1} [PROD-CLUSTER]`, rackX + 30, by + bladeH / 2 + 3);

        // Blinking Status LEDs
        for (let l = 0; l < 4; l++) {
          const blink = Math.sin(t * 5 + i * 2 + l) > 0.1;
          const ledX = rackX + rackW - 120 + l * 18;
          const ledY = by + bladeH / 2;

          ctx.fillStyle = blink ? (l === 3 ? "#00e5ff" : "#10b981") : "#1e293b";
          ctx.beginPath();
          ctx.arc(ledX, ledY, 3, 0, Math.PI * 2);
          ctx.fill();
        }

        // Utilization Bar
        const util = (Math.sin(t + i) + 1) * 0.3 + 0.35;
        const barW = 40;
        const barX = rackX + rackW - 48;
        ctx.fillStyle = "#1e293b";
        ctx.fillRect(barX, by + bladeH / 2 - 3, barW, 6);
        ctx.fillStyle = "#00e5ff";
        ctx.fillRect(barX, by + bladeH / 2 - 3, barW * util, 6);
      }

      // Heartbeat Wave across bottom
      ctx.strokeStyle = "rgba(0, 229, 255, 0.7)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      const waveY = height - 25;
      for (let x = 0; x < width; x += 4) {
        let pulse = 0;
        const pulsePos = (t * 80) % width;
        if (Math.abs(x - pulsePos) < 25) {
          pulse = Math.sin(((x - pulsePos) / 25) * Math.PI) * 12;
        }
        if (x === 0) ctx.moveTo(x, waveY + pulse);
        else ctx.lineTo(x, waveY + pulse);
      }
      ctx.stroke();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[450px] flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full" />
      <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg border border-emerald-500/30 bg-[#081024]/90 backdrop-blur-md text-[11px] font-semibold text-emerald-400">
        <CheckCircle2 className="h-3.5 w-3.5" />
        <span>INFRASTRUCTURE SLA: 99.99%</span>
      </div>
      <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-lg border border-cyan-500/30 bg-[#081024]/90 backdrop-blur-md text-[11px] font-semibold text-cyan-300">
        <Cpu className="h-3.5 w-3.5 text-cyan-400" />
        <span>FAILOVER: ZERO DOWNTIME</span>
      </div>
    </div>
  );
}
