"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, ShieldCheck, DollarSign, Clock, CheckCircle2, Award } from "lucide-react";
import { caseStudiesData } from "@/data/caseStudiesData";

export function RoiTelemetryVisual() {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const activeCase = caseStudiesData[activeIdx];

  return (
    <div className="relative w-full rounded-3xl border border-cyan-500/20 bg-[#070d1e]/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-cyan-950/40 overflow-hidden mb-14">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5 mb-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <TrendingUp className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Verified Enterprise Value Telemetry
            </div>
            <div className="text-xs text-cyan-400 font-mono">
              Audited Commercial & Operational Impact
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-emerald-500/30 bg-emerald-950/40 text-xs font-semibold text-emerald-300 font-mono">
          <Award className="h-3.5 w-3.5 text-emerald-400" />
          <span>Average Client ROI: 312%</span>
        </div>
      </div>

      {/* Case Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        {caseStudiesData.map((cs, idx) => (
          <button
            key={cs.slug}
            onClick={() => setActiveIdx(idx)}
            className={`p-3.5 rounded-2xl border text-left transition-all ${
              activeIdx === idx
                ? "border-cyan-400 bg-cyan-950/70 shadow-lg shadow-cyan-500/20 scale-[1.02]"
                : "border-white/10 bg-[#050917] hover:border-white/30 text-slate-400"
            }`}
          >
            <div className="text-xs font-mono text-cyan-400 mb-0.5">{cs.clientIndustry}</div>
            <div className="text-xs font-bold text-white truncate">{cs.clientType}</div>
          </button>
        ))}
      </div>

      {/* Telemetry Metrics Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCase.slug}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {activeCase.metrics.map((m, mIdx) => (
              <div
                key={mIdx}
                className="rounded-2xl border border-white/10 bg-[#040816] p-5 text-center relative overflow-hidden group hover:border-cyan-500/40 transition-colors"
              >
                <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400 font-display mb-1">
                  {m.value}
                </div>
                <div className="text-xs font-bold text-white uppercase tracking-wider mb-2">
                  {m.label}
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-cyan-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.6, delay: mIdx * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-xl border border-white/5 bg-[#081024] flex items-center justify-between text-xs text-slate-300">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span><strong>Primary Realized Transformation:</strong> {activeCase.impact}</span>
            </span>
            <span className="text-[10px] font-mono text-cyan-400 hidden sm:inline">100% Contractual SLA</span>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
