"use client";

import React, { useEffect, useRef } from "react";
import { Workflow, Clock, CheckCircle2, ShieldCheck, Zap } from "lucide-react";

export function ItsmPipelineVisual() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const stages = [
      { code: "STAGE-01 [INCIDENT-INGEST]", label: "Omni-Channel Triage", targetUtil: 0.94 },
      { code: "STAGE-02 [ITIL-PRIORITY]", label: "P1/P2 SLA Scoring", targetUtil: 0.88 },
      { code: "STAGE-03 [CHANGE-RISK-CAB]", label: "CAB Conflict Validation", targetUtil: 0.96 },
      { code: "STAGE-04 [RESOLUTION-SCRIPT]", label: "Automated Self-Healing", targetUtil: 0.82 },
      { code: "STAGE-05 [CMDB-ASSET-SYNC]", label: "Asset Lifecycle Updated", targetUtil: 0.99 },
    ];

    const render = () => {
      t += 0.03;

      const parentW = canvas.parentElement?.clientWidth || 450;
      const parentH = canvas.parentElement?.clientHeight || 450;
      const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;

      if (canvas.width !== parentW * dpr || canvas.height !== parentH * dpr) {
        canvas.width = parentW * dpr;
        canvas.height = parentH * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      const width = parentW;
      const height = parentH;

      ctx.clearRect(0, 0, width, height);

      // 1. ITIL Server Blade Rack Frame (Matching Image 1 Style)
      const rackX = Math.max(16, width * 0.05);
      const rackY = 40;
      const rackW = width - rackX * 2;
      const rackH = height - 80;

      ctx.fillStyle = "#070e1f";
      ctx.strokeStyle = "rgba(0, 229, 255, 0.25)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(rackX, rackY, rackW, rackH, 12);
      ctx.fill();
      ctx.stroke();

      // Subtle Background Grid Lines
      ctx.strokeStyle = "rgba(255, 255, 255, 0.02)";
      ctx.lineWidth = 1;
      for (let x = rackX + 16; x < rackX + rackW - 16; x += 28) {
        ctx.beginPath();
        ctx.moveTo(x, rackY + 8);
        ctx.lineTo(x, rackY + rackH - 8);
        ctx.stroke();
      }

      // 2. Draw 5 ITIL Pipeline Blades
      const bladeCount = stages.length;
      const bladeH = (rackH - 36) / bladeCount;

      for (let i = 0; i < bladeCount; i++) {
        const by = rackY + 16 + i * bladeH;
        const bx = rackX + 14;
        const bw = rackW - 28;
        const bh = bladeH - 7;

        // Current active pipeline step animation
        const activeStageIndex = Math.floor(t * 0.5) % bladeCount;
        const isCurrentActive = activeStageIndex === i;

        ctx.fillStyle = isCurrentActive ? "#0e1a38" : "#0c1730";
        ctx.strokeStyle = isCurrentActive
          ? "rgba(0, 229, 255, 0.65)"
          : "rgba(255, 255, 255, 0.08)";
        ctx.lineWidth = isCurrentActive ? 1.5 : 1;
        ctx.beginPath();
        ctx.roundRect(bx, by, bw, bh, 6);
        ctx.fill();
        ctx.stroke();

        // Left accent tick
        ctx.fillStyle = isCurrentActive ? "#00e5ff" : "#10b981";
        ctx.fillRect(bx + 3, by + 6, 2.5, bh - 12);

        // Stage Monospace Label (Matching Image 1: NODE-01 [PROD-CLUSTER])
        ctx.fillStyle = isCurrentActive ? "#ffffff" : "rgba(255, 255, 255, 0.82)";
        const fontSize = width < 420 ? 9 : 10;
        ctx.font = `bold ${fontSize}px monospace`;
        ctx.textAlign = "left";
        ctx.fillText(stages[i].code, bx + 14, by + bh / 2 + 3.5);

        // Blinking Status LEDs (Matching Image 1: 4 LEDs per blade)
        const ledCount = 4;
        const ledSpacing = width < 420 ? 12 : 16;
        const ledStartX = bx + bw - (width < 420 ? 95 : 135);

        for (let l = 0; l < ledCount; l++) {
          const blink = Math.sin(t * 5 + i * 2 + l * 1.2) > 0.05;
          const ledX = ledStartX + l * ledSpacing;
          const ledY = by + bh / 2;

          let ledColor = "#1e293b";
          if (blink) {
            if (l === 3) ledColor = "#00e5ff"; // Active cyan
            else if (l === 2 && isCurrentActive) ledColor = "#a855f7"; // In-flight purple
            else ledColor = "#10b981"; // Validated green
          }

          ctx.fillStyle = ledColor;
          ctx.beginPath();
          ctx.arc(ledX, ledY, width < 420 ? 2.5 : 3, 0, Math.PI * 2);
          ctx.fill();

          if (blink) {
            ctx.fillStyle = l === 3 ? "rgba(0, 229, 255, 0.25)" : "rgba(16, 185, 129, 0.25)";
            ctx.beginPath();
            ctx.arc(ledX, ledY, width < 420 ? 4.5 : 5.5, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        // Utilization / SLA Adherence Bar (Matching Image 1)
        const barW = width < 420 ? 30 : 42;
        const barX = bx + bw - barW - (width < 420 ? 10 : 14);
        const barY = by + bh / 2 - 3;
        const barH = 6;

        ctx.fillStyle = "#1e293b";
        ctx.fillRect(barX, barY, barW, barH);

        const util = stages[i].targetUtil + Math.sin(t * 1.5 + i) * 0.03;
        ctx.fillStyle = isCurrentActive ? "#00e5ff" : "#10b981";
        ctx.fillRect(barX, barY, barW * Math.min(1, Math.max(0.2, util)), barH);
      }

      // 3. Heartbeat SLA Wave across bottom (Matching Image 1)
      ctx.strokeStyle = "rgba(0, 229, 255, 0.75)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      const waveY = height - 25;

      for (let x = 0; x < width; x += 4) {
        let pulse = 0;
        const pulsePos = (t * 85) % width;
        if (Math.abs(x - pulsePos) < 26) {
          pulse = Math.sin(((x - pulsePos) / 26) * Math.PI) * 12;
        }
        if (x === 0) ctx.moveTo(x, waveY + pulse);
        else ctx.lineTo(x, waveY + pulse);
      }
      ctx.stroke();

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    render();

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="relative w-full h-[380px] sm:h-[450px] flex items-center justify-center">
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Top-Left Badge (Matching Image 1: INFRASTRUCTURE SLA: 99.99%) */}
      <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg border border-emerald-500/30 bg-[#081024]/90 backdrop-blur-md text-[11px] font-semibold text-emerald-400 shadow-md">
        <Clock className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
        <span>ITIL v4 SLA ADHERENCE: 99.8%</span>
      </div>

      {/* Bottom-Right Badge (Matching Image 1: FAILOVER: ZERO DOWNTIME) */}
      <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-lg border border-cyan-500/30 bg-[#081024]/90 backdrop-blur-md text-[11px] font-semibold text-cyan-300 shadow-md">
        <Workflow className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
        <span>INCIDENT RESOLUTION: AUTOMATED</span>
      </div>
    </div>
  );
}
