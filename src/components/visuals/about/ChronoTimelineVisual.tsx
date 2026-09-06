"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ShieldCheck, Globe, Rocket, Server, Users, Award, ChevronRight } from "lucide-react";
import { companyData } from "@/data/companyData";

export function ChronoTimelineVisual() {
  const [selectedIdx, setSelectedIdx] = useState(companyData.milestones.length - 1);
  const activeMilestone = companyData.milestones[selectedIdx];

  const milestoneMetrics: Record<string, { staff: string; endpoints: string; uptime: string; milestoneHighlight: string }> = {
    "2020": { staff: "15+ Core Engineers", endpoints: "2,500+", uptime: "99.9%", milestoneHighlight: "Establishment of Chennai Primary SOC Operations Hub" },
    "2021": { staff: "45+ Specialists", endpoints: "10,000+", uptime: "99.95%", milestoneHighlight: "NOC Automation & 24/7 Follow-the-Sun Support" },
    "2022": { staff: "85+ Team Members", endpoints: "35,000+", uptime: "99.99%", milestoneHighlight: "Pondicherry Cloud CoE Inauguration & ISO 27001 Certification" },
    "2023": { staff: "120+ Personnel", endpoints: "65,000+", uptime: "99.99%", milestoneHighlight: "Toronto Regional Office Launch & Cross-Border Expansion" },
    "2024": { staff: "160+ Global Staff", endpoints: "100,000+", uptime: "99.999%", milestoneHighlight: "Enterprise AI Security Operations & Cloud Modernization Suite" },
    "2025": { staff: "200+ Enterprise Team", endpoints: "150,000+", uptime: "99.999%", milestoneHighlight: "Strategic Global Tier-1 Alliances & Multi-Cloud Governance" },
  };

  const currentMetrics = milestoneMetrics[activeMilestone.year] || {
    staff: "150+ Engineers",
    endpoints: "100k+",
    uptime: "99.999%",
    milestoneHighlight: activeMilestone.title,
  };

  return (
    <div className="relative w-full rounded-3xl border border-cyan-500/20 bg-[#070d1e]/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-cyan-950/40 overflow-hidden mb-12">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5 mb-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Rocket className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Technosprint Chrono-Scanner (2020 – 2025)
            </div>
            <div className="text-xs text-cyan-400 font-mono">
              Interactive 5-Year Enterprise Growth Trajectory
            </div>
          </div>
        </div>

        <span className="text-xs font-mono text-slate-400">
          Click any milestone year to inspect telemetry
        </span>
      </div>

      {/* Year Scrubbing Track */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mb-6">
        {companyData.milestones.map((m, idx) => (
          <button
            key={m.year}
            onClick={() => setSelectedIdx(idx)}
            className={`p-3 rounded-2xl border text-center transition-all ${
              selectedIdx === idx
                ? "border-cyan-400 bg-cyan-950/70 shadow-lg shadow-cyan-500/20 scale-105"
                : "border-white/10 bg-[#050917] hover:border-white/30 text-slate-400"
            }`}
          >
            <div className={`text-sm font-bold font-display ${selectedIdx === idx ? "text-cyan-300" : "text-white"}`}>
              {m.year}
            </div>
            <div className="text-[10px] truncate text-slate-400 mt-0.5">
              {m.title.split(" ")[0]}...
            </div>
          </button>
        ))}
      </div>

      {/* Dynamic Content Display with AnimatePresence */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeMilestone.year}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.25 }}
          className="rounded-2xl border border-white/10 bg-[#040816] p-6 space-y-5"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10">
            <div>
              <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider font-mono">
                Milestone Year: {activeMilestone.year}
              </div>
              <h3 className="text-xl font-bold text-white font-display mt-0.5">
                {activeMilestone.title}
              </h3>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-xs text-cyan-300 font-mono">
              <Award className="h-3.5 w-3.5 text-cyan-400" />
              <span>Verified Milestone</span>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            {activeMilestone.description}
          </p>

          {/* Telemetry Metrics for that era */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3.5 rounded-xl border border-white/5 bg-[#081024]">
              <div className="text-[10px] text-slate-400 mb-1 flex items-center gap-1.5">
                <Users className="h-3.5 w-3.5 text-cyan-400" />
                <span>Workforce Capacity</span>
              </div>
              <div className="text-sm font-bold text-white font-mono">{currentMetrics.staff}</div>
            </div>

            <div className="p-3.5 rounded-xl border border-white/5 bg-[#081024]">
              <div className="text-[10px] text-slate-400 mb-1 flex items-center gap-1.5">
                <Server className="h-3.5 w-3.5 text-emerald-400" />
                <span>Monitored Enterprise Endpoints</span>
              </div>
              <div className="text-sm font-bold text-emerald-400 font-mono">{currentMetrics.endpoints}</div>
            </div>

            <div className="p-3.5 rounded-xl border border-white/5 bg-[#081024]">
              <div className="text-[10px] text-slate-400 mb-1 flex items-center gap-1.5">
                <ShieldCheck className="h-3.5 w-3.5 text-blue-400" />
                <span>Infrastructure SLA</span>
              </div>
              <div className="text-sm font-bold text-cyan-400 font-mono">{currentMetrics.uptime}</div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
