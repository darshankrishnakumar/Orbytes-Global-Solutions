"use client";

import React, { useEffect, useState } from "react";
import { CheckCircle2, Clock, Workflow, ArrowRight, Shield } from "lucide-react";

export function WorkflowPipelineVisual() {
  const [activeStage, setActiveStage] = useState(0);

  const stages = [
    { name: "Incident Ingest", time: "0.2s", status: "Automated Omni-channel Triage" },
    { name: "ITIL Categorization", time: "1.0s", status: "Priority Scoring & SLA Assignment" },
    { name: "Change Risk Review", time: "2.4s", status: "CAB Conflict Validation" },
    { name: "Resolution & Fix", time: "4.1s", status: "Automated Script & Technician Resolution" },
    { name: "CMDB & Closure", time: "5.0s", status: "Asset Lifecycle Audit Log Updated" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % stages.length);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full my-8 p-8 rounded-3xl border border-white/10 bg-[#070e22] shadow-2xl relative overflow-hidden">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5 mb-8">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
            <Workflow className="h-5 w-5" />
          </div>
          <div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-purple-400">
              Live Workflow Engine
            </span>
            <h4 className="text-base font-bold text-white font-display">
              Automated ITIL Incident & Change Dispatch
            </h4>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/20">
          <Clock className="h-3.5 w-3.5" />
          <span>Average SLA Adherence: 99.8%</span>
        </div>
      </div>

      {/* Live Pipeline Step Indicator */}
      <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
        {stages.map((stg, idx) => {
          const isActive = activeStage === idx;
          const isDone = activeStage > idx;

          return (
            <div
              key={idx}
              className={`p-4 rounded-xl border transition-all duration-300 ${
                isActive
                  ? "border-cyan-400 bg-cyan-950/50 shadow-lg shadow-cyan-950/40 scale-105"
                  : isDone
                  ? "border-emerald-500/40 bg-emerald-950/20 text-slate-300"
                  : "border-white/5 bg-white/[0.02] text-slate-500"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono font-bold text-slate-400">
                  0{idx + 1}
                </span>
                {isDone && <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />}
                {isActive && <div className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />}
              </div>
              <div className="text-xs font-bold text-white font-display">
                {stg.name}
              </div>
              <p className="text-[11px] text-slate-400 mt-1 leading-snug">
                {stg.status}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
