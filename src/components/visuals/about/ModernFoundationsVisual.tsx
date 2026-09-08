"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cloud, ShieldCheck, Zap, Globe, CheckCircle2, Cpu } from "lucide-react";
import { companyData } from "@/data/companyData";

export function ModernFoundationsVisual() {
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const pillars = companyData.foundationalPillars;
  const activePillar = pillars[selectedIdx];

  const pillarIcons = [
    Cloud,
    ShieldCheck,
    Zap,
    Globe,
  ];

  const pillarStats = [
    { metric: "0 Legacy Debt", label: "Pure Modern Stack", tag: "Cloud-Native" },
    { metric: "< 15 Min", label: "MTTR Response SLA", tag: "Active SOC" },
    { metric: "99.99%", label: "Multi-Cloud Uptime", tag: "FinOps Governed" },
    { metric: "2 Continents", label: "India & Canada Hubs", tag: "Follow-the-Sun" },
  ];

  const ActiveIcon = pillarIcons[selectedIdx] || Cloud;
  const activeStat = pillarStats[selectedIdx];

  return (
    <div className="relative w-full rounded-3xl border border-cyan-500/20 bg-[#070d1e]/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-cyan-950/40 overflow-hidden mb-12">
      {/* Background glow effects */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5 mb-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Cpu className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Enterprise Foundations & Architecture
            </div>
            <div className="text-xs text-cyan-400 font-mono">
              Engineered From Day One For High-Stakes Operations
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-cyan-500/30 bg-cyan-950/40 text-xs font-semibold text-cyan-300">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span>Zero Legacy Debt Architecture</span>
        </div>
      </div>

      {/* Interactive Pillar Selector Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {pillars.map((pillar, idx) => {
          const Icon = pillarIcons[idx] || Cloud;
          const isSelected = selectedIdx === idx;
          return (
            <button
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className={`p-3.5 rounded-2xl border text-left transition-all relative overflow-hidden ${
                isSelected
                  ? "border-cyan-400 bg-cyan-950/70 shadow-lg shadow-cyan-500/20 scale-[1.02]"
                  : "border-white/10 bg-[#050917] hover:border-white/30 text-slate-400"
              }`}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <Icon className={`h-4 w-4 ${isSelected ? "text-cyan-400" : "text-slate-400"}`} />
                <span className={`text-[10px] font-mono uppercase tracking-wider ${isSelected ? "text-cyan-300" : "text-slate-400"}`}>
                  Pillar {idx + 1}
                </span>
              </div>
              <div className={`text-xs font-bold leading-snug line-clamp-1 ${isSelected ? "text-white" : "text-slate-300"}`}>
                {pillar.title.split("&")[0].trim()}
              </div>
              <div className="text-[10px] text-cyan-400/80 truncate mt-0.5">
                {pillar.tagline}
              </div>
            </button>
          );
        })}
      </div>

      {/* Active Pillar Detail Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePillar.title}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="rounded-2xl border border-white/10 bg-[#040816] p-6 space-y-5"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div className="flex items-start gap-3.5">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 shrink-0">
                <ActiveIcon className="h-6 w-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                  {activePillar.tagline}
                </span>
                <h3 className="text-xl font-bold text-white font-display mt-0.5">
                  {activePillar.title}
                </h3>
              </div>
            </div>

            {/* Pillar Telemetry Stat Badge */}
            <div className="flex items-center gap-4 bg-[#081024] border border-cyan-500/30 rounded-xl p-3 px-4 shrink-0">
              <div>
                <div className="text-lg font-bold text-white font-display">
                  {activeStat.metric}
                </div>
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">
                  {activeStat.label}
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40">
                {activeStat.tag}
              </span>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed max-w-4xl">
            {activePillar.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
            {activePillar.highlights.map((item, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl border border-white/5 bg-[#081024] flex items-center gap-2.5 text-xs text-slate-200 hover:border-cyan-500/30 transition-colors"
              >
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
