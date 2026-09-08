"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { CheckCircle2, Cpu, Sparkles, Activity, Shield, Cloud, Compass, Code2, ArrowRight } from "lucide-react";

interface PillarInfo {
  id: string;
  name: string;
  badge: string;
  code: string;
  subtext: string;
  icon: React.ElementType;
  href: string;
  services: { title: string; href: string }[];
}

const PILLARS: PillarInfo[] = [
  {
    id: "integrated",
    name: "Integrated IT Services",
    badge: "Managed IT & SOC",
    code: "PILLAR-01 [INTEGRATED-IT]",
    subtext: "24/7 Proactive Monitoring, SOC Threat Defense & ITIL Automation",
    icon: Shield,
    href: "/services/integrated",
    services: [
      { title: "Managed Security (MSSP)", href: "/services/integrated/managed-security" },
      { title: "Managed IT Services (MSP)", href: "/services/integrated/managed-it" },
      { title: "IT Service Management (ITSM)", href: "/services/integrated/itsm" },
    ],
  },
  {
    id: "cloud",
    name: "Cloud Services",
    badge: "Cloud Scale & FinOps",
    code: "PILLAR-02 [CLOUD-SCALE]",
    subtext: "Azure FinOps Optimization, Multi-Region Migration & Disaster Recovery",
    icon: Cloud,
    href: "/services/cloud",
    services: [
      { title: "Azure Cost Management", href: "/services/cloud/azure-cost-management" },
      { title: "Cloud & Data Migration", href: "/services/cloud/cloud-data-migration" },
      { title: "Disaster Recovery Services", href: "/services/cloud/disaster-recovery" },
      { title: "Infrastructure as a Service (IaaS)", href: "/services/cloud/iaas" },
      { title: "Microsoft Cloud Solutions", href: "/services/cloud/microsoft-cloud" },
    ],
  },
  {
    id: "consulting",
    name: "IT Consulting Services",
    badge: "Strategic Advisory & GRC",
    code: "PILLAR-03 [TECH-ADVISORY]",
    subtext: "vCIO Executive Advisory, ISO 27001 GRC Audits & Enterprise Architecture",
    icon: Compass,
    href: "/services/consulting",
    services: [
      { title: "Governance, Risk & Compliance (GRC)", href: "/services/consulting/grc" },
      { title: "IT Assessment Services", href: "/services/consulting/it-assessment" },
      { title: "IT Strategy & Consulting", href: "/services/consulting/it-strategy" },
      { title: "Technology Strategy Services", href: "/services/consulting/technology-strategy" },
    ],
  },
  {
    id: "development",
    name: "IT Development Services",
    badge: "Digital Engineering & APIs",
    code: "PILLAR-04 [DIGITAL-DEV]",
    subtext: "High-Concurrency APIs, Distributed Microservices & Custom Web Platforms",
    icon: Code2,
    href: "/services/development",
    services: [
      { title: "Web Development", href: "/services/development/web-development" },
      { title: "E-Commerce Platforms", href: "/services/development/ecommerce" },
      { title: "Cloud Integration Services", href: "/services/development/cloud-integration" },
      { title: "API Development & Architecture", href: "/services/development/api-development" },
    ],
  },
];

export function SolutionsArchitectureVisual() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activePillarIndex, setActivePillarIndex] = useState<number>(0);
  const activePillarRef = useRef<number>(0);

  // Sync ref with state for animation loop
  useEffect(() => {
    activePillarRef.current = activePillarIndex;
  }, [activePillarIndex]);

  const handlePillarSelect = useCallback((idx: number) => {
    setActivePillarIndex(idx);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;

    const render = () => {
      t += 0.025;

      const parentW = canvas.parentElement?.clientWidth || 700;
      const parentH = canvas.parentElement?.clientHeight || 460;
      const dpr = typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;

      // Handle retina canvas sizing
      if (canvas.width !== parentW * dpr || canvas.height !== parentH * dpr) {
        canvas.width = parentW * dpr;
        canvas.height = parentH * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      const width = parentW;
      const height = parentH;

      ctx.clearRect(0, 0, width, height);

      // 1. Background Frame (Styled exactly like Image 1)
      const rackX = Math.max(16, width * 0.035);
      const rackY = 48;
      const rackW = width - rackX * 2;
      const rackH = height - 98;

      // Frame Background & Subtle Glow
      ctx.fillStyle = "#070e1f";
      ctx.strokeStyle = "rgba(0, 229, 255, 0.28)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(rackX, rackY, rackW, rackH, 14);
      ctx.fill();
      ctx.stroke();

      // Subtle Inner Grid Texture
      ctx.strokeStyle = "rgba(255, 255, 255, 0.02)";
      ctx.lineWidth = 1;
      const gridStep = 24;
      for (let x = rackX + 12; x < rackX + rackW - 12; x += gridStep) {
        ctx.beginPath();
        ctx.moveTo(x, rackY + 10);
        ctx.lineTo(x, rackY + rackH - 10);
        ctx.stroke();
      }

      // 2. Draw 4 Architecture Blades (One for each core pillar)
      const bladeCount = 4;
      const bladeMarginY = 12;
      const totalAvailableH = rackH - 36;
      const bladeH = (totalAvailableH - bladeMarginY * (bladeCount - 1)) / bladeCount;

      for (let i = 0; i < bladeCount; i++) {
        const by = rackY + 18 + i * (bladeH + bladeMarginY);
        const bx = rackX + 16;
        const bw = rackW - 32;
        const isSelected = activePillarRef.current === i;

        // Blade Container
        ctx.fillStyle = isSelected ? "rgba(12, 28, 56, 0.95)" : "#0c1730";
        ctx.strokeStyle = isSelected
          ? "rgba(0, 229, 255, 0.75)"
          : "rgba(255, 255, 255, 0.08)";
        ctx.lineWidth = isSelected ? 1.5 : 1;
        ctx.beginPath();
        ctx.roundRect(bx, by, bw, bladeH, 8);
        ctx.fill();
        ctx.stroke();

        // Active Blade Glow Accent
        if (isSelected) {
          ctx.strokeStyle = "rgba(0, 229, 255, 0.35)";
          ctx.lineWidth = 4;
          ctx.beginPath();
          ctx.roundRect(bx, by, bw, bladeH, 8);
          ctx.stroke();
        }

        // Active Indicator Bar on left edge
        ctx.fillStyle = isSelected ? "#00e5ff" : "rgba(255, 255, 255, 0.15)";
        ctx.fillRect(bx + 4, by + 8, 3, bladeH - 16);

        // Blade Monospace Label (Matching Image 1: NODE-01 [PROD-CLUSTER])
        ctx.fillStyle = isSelected ? "#ffffff" : "rgba(255, 255, 255, 0.82)";
        const fontSize = width < 500 ? 9 : 11;
        ctx.font = `bold ${fontSize}px monospace`;
        ctx.textAlign = "left";
        const label = PILLARS[i].code;
        ctx.fillText(label, bx + 16, by + bladeH / 2 + 4);

        // Blinking Status LEDs (Matching Image 1: 4 LEDs per blade)
        const ledCount = 4;
        const ledSpacing = width < 500 ? 12 : 18;
        const ledStartX = bx + bw - (width < 500 ? 100 : 160);

        for (let l = 0; l < ledCount; l++) {
          const blink = Math.sin(t * 4.5 + i * 1.8 + l * 0.9) > -0.1;
          const ledX = ledStartX + l * ledSpacing;
          const ledY = by + bladeH / 2;

          let ledColor = "#1e293b";
          if (blink) {
            if (l === 3) ledColor = "#00e5ff"; // Primary Cyan telemetry
            else if (l === 0) ledColor = "#10b981"; // Healthy Emerald
            else ledColor = isSelected ? "#00e5ff" : "#10b981";
          }

          ctx.fillStyle = ledColor;
          ctx.beginPath();
          ctx.arc(ledX, ledY, width < 500 ? 2.5 : 3.2, 0, Math.PI * 2);
          ctx.fill();

          // Glow for active LEDs
          if (blink) {
            ctx.fillStyle = l === 3 ? "rgba(0, 229, 255, 0.25)" : "rgba(16, 185, 129, 0.25)";
            ctx.beginPath();
            ctx.arc(ledX, ledY, width < 500 ? 5 : 6.5, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        // Real-Time Utilization / Telemetry Bar (Matching Image 1 right-hand progress)
        const barW = width < 500 ? 32 : 54;
        const barX = bx + bw - barW - (width < 500 ? 10 : 16);
        const barH = 7;
        const barY = by + bladeH / 2 - barH / 2;

        // Bar background
        ctx.fillStyle = "#162238";
        ctx.beginPath();
        ctx.roundRect(barX, barY, barW, barH, 3);
        ctx.fill();

        // Bar dynamic progress fill
        const dynamicUtil = isSelected
          ? 0.78 + Math.sin(t * 2 + i) * 0.14
          : (Math.sin(t * 1.2 + i * 1.5) + 1) * 0.28 + 0.35;
        const clampedUtil = Math.max(0.15, Math.min(1.0, dynamicUtil));

        ctx.fillStyle = isSelected ? "#00e5ff" : "rgba(0, 229, 255, 0.85)";
        ctx.beginPath();
        ctx.roundRect(barX, barY, barW * clampedUtil, barH, 3);
        ctx.fill();
      }

      // 3. Heartbeat / Cross-Pillar Mesh Wave Across Bottom (Matching Image 1)
      ctx.strokeStyle = "rgba(0, 229, 255, 0.85)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      const waveY = height - 32;

      for (let x = rackX; x < rackX + rackW; x += 4) {
        let pulse = 0;
        const pulsePos = (t * 110) % rackW + rackX;
        const dist = Math.abs(x - pulsePos);

        if (dist < 32) {
          pulse = Math.sin((dist / 32) * Math.PI) * 14;
        }

        if (x === rackX) {
          ctx.moveTo(x, waveY - pulse);
        } else {
          ctx.lineTo(x, waveY - pulse);
        }
      }
      ctx.stroke();

      // Secondary Glitch / Echo Wave for Depth
      ctx.strokeStyle = "rgba(16, 185, 129, 0.4)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let x = rackX; x < rackX + rackW; x += 6) {
        let echoPulse = 0;
        const echoPos = ((t * 90) % rackW) + rackX;
        const dist = Math.abs(x - echoPos);
        if (dist < 24) {
          echoPulse = Math.sin((dist / 24) * Math.PI) * 7;
        }
        if (x === rackX) ctx.moveTo(x, waveY + 5 - echoPulse);
        else ctx.lineTo(x, waveY + 5 - echoPulse);
      }
      ctx.stroke();

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, []);

  const activePillar = PILLARS[activePillarIndex];

  return (
    <div className="w-full space-y-6 mb-12">
      {/* 1. Main High-Tech Architecture Frame (Matching Image 1 Aesthetic) */}
      <div className="relative w-full h-[400px] sm:h-[480px] rounded-3xl border border-cyan-500/25 bg-[#050b1a]/95 backdrop-blur-xl shadow-2xl shadow-cyan-950/40 overflow-hidden">
        {/* Glow Spheres */}
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-600/10 rounded-full blur-[110px] pointer-events-none" />

        {/* Live Canvas */}
        <canvas ref={canvasRef} className="w-full h-full block" />

        {/* Top-Left Badge (Matching Image 1: INFRASTRUCTURE SLA: 99.99%) */}
        <div className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg border border-emerald-500/30 bg-[#081024]/90 backdrop-blur-md text-[10px] sm:text-[11px] font-semibold text-emerald-400 shadow-md">
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
          <span>ENTERPRISE ECOSYSTEM SLA: 99.99%</span>
        </div>

        {/* Top-Right Badge */}
        <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 hidden xs:flex items-center gap-2 px-3 py-1.5 rounded-lg border border-cyan-500/30 bg-[#081024]/90 backdrop-blur-md text-[10px] sm:text-[11px] font-semibold text-cyan-300 shadow-md">
          <Sparkles className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
          <span>4 PILLARS • 16 SERVICES</span>
        </div>

        {/* Bottom-Left Badge */}
        <div className="absolute bottom-3.5 left-3.5 sm:bottom-4 sm:left-4 flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-[#081024]/90 backdrop-blur-md text-[10px] sm:text-[11px] font-semibold text-slate-300 shadow-md">
          <Activity className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
          <span>FAILOVER: ZERO DOWNTIME</span>
        </div>

        {/* Bottom-Right Badge (Matching Image 1: FAILOVER: ZERO DOWNTIME) */}
        <div className="absolute bottom-3.5 right-3.5 sm:bottom-4 sm:right-4 flex items-center gap-2 px-3 py-1.5 rounded-lg border border-cyan-500/30 bg-[#081024]/90 backdrop-blur-md text-[10px] sm:text-[11px] font-semibold text-cyan-300 shadow-md">
          <Cpu className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
          <span>CROSS-PILLAR ORCHESTRATION: REAL-TIME</span>
        </div>
      </div>

      {/* 2. Interactive Pillar Navigation Cards (Sync with Canvas) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PILLARS.map((pillar, idx) => {
          const Icon = pillar.icon;
          const isSelected = activePillarIndex === idx;

          return (
            <button
              key={pillar.id}
              onClick={() => handlePillarSelect(idx)}
              className={`p-5 rounded-2xl border text-left transition-all duration-300 ${
                isSelected
                  ? "border-cyan-400 bg-cyan-950/40 shadow-lg shadow-cyan-950/30 scale-[1.02]"
                  : "border-white/10 bg-[#070e24] hover:border-white/20 hover:bg-[#0a1432] text-slate-400"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div
                  className={`h-9 w-9 rounded-xl flex items-center justify-center ${
                    isSelected
                      ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/40"
                      : "bg-white/5 text-slate-400 border border-white/10"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                </div>
                <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">
                  P-0{idx + 1}
                </span>
              </div>
              <h4 className="text-sm font-bold text-white font-display mb-1">
                {pillar.name}
              </h4>
              <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                {pillar.subtext}
              </p>
            </button>
          );
        })}
      </div>

      {/* 3. Deep-Dive Services Breakdown for Selected Pillar */}
      <div className="rounded-2xl border border-white/10 bg-[#070e24]/90 p-6 sm:p-7 backdrop-blur-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                {activePillar.badge}
              </span>
              <span className="text-slate-600">•</span>
              <span className="text-xs text-slate-400 font-mono">
                {activePillar.services.length} Dedicated Services
              </span>
            </div>
            <h3 className="text-xl font-bold text-white font-display mt-1">
              {activePillar.name} Capabilities
            </h3>
          </div>

          <Link
            href={activePillar.href}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <span>Explore Entire Pillar Hub</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-5">
          {activePillar.services.map((srv, sIdx) => (
            <Link
              key={sIdx}
              href={srv.href}
              className="group p-3.5 rounded-xl border border-white/5 bg-[#0a1430] hover:border-cyan-500/40 hover:bg-[#0e1d44] transition-all flex items-center justify-between gap-3"
            >
              <div className="flex items-center gap-2.5">
                <div className="h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_6px_#00e5ff]" />
                <span className="text-xs font-medium text-slate-200 group-hover:text-white transition-colors">
                  {srv.title}
                </span>
              </div>
              <ArrowRight className="h-3.5 w-3.5 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
