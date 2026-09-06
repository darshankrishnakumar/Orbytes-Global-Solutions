"use client";

import React, { useState } from "react";
import { Compass, AlertTriangle, CheckCircle2, ArrowRight } from "lucide-react";

export function StrategyMatrixVisual() {
  const [activePoint, setActivePoint] = useState<"legacy" | "target">("target");

  return (
    <div className="w-full my-6 p-6 rounded-2xl border border-white/10 bg-[#070e24] shadow-xl">
      <div className="flex items-center justify-between mb-4 border-b border-white/5 pb-3">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
          <Compass className="h-4 w-4" />
          <span>Strategic Transformation Matrix</span>
        </div>
        <span className="text-[10px] text-slate-400">Technosprint vCIO Framework</span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* State A: Without vCIO */}
        <div
          onClick={() => setActivePoint("legacy")}
          className={`cursor-pointer p-4 rounded-xl border transition-all ${
            activePoint === "legacy"
              ? "border-rose-500/60 bg-rose-950/30"
              : "border-white/5 bg-white/[0.02] opacity-70"
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-rose-400">Unmanaged / Legacy IT</span>
            <AlertTriangle className="h-4 w-4 text-rose-400" />
          </div>
          <ul className="space-y-1.5 text-xs text-slate-300">
            <li>• High Technical Debt & Blindspots</li>
            <li>• Regulatory Non-Compliance Fines</li>
            <li>• Disjointed Software Tool Sprawl</li>
            <li>• Unplanned Capital Expenditure</li>
          </ul>
        </div>

        {/* State B: Technosprint Strategy */}
        <div
          onClick={() => setActivePoint("target")}
          className={`cursor-pointer p-4 rounded-xl border transition-all ${
            activePoint === "target"
              ? "border-cyan-400 bg-cyan-950/40 shadow-lg shadow-cyan-950/30"
              : "border-white/5 bg-white/[0.02] opacity-70"
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-cyan-300">Technosprint Strategic vCIO</span>
            <CheckCircle2 className="h-4 w-4 text-cyan-400" />
          </div>
          <ul className="space-y-1.5 text-xs text-slate-200">
            <li>• 3-5 Year Prioritized Technology Roadmap</li>
            <li>• Continuous GRC & ISO 27001 Readiness</li>
            <li>• Predictable Budgeting & ROI Modeling</li>
            <li>• Scalable Modern Cloud Architecture</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
