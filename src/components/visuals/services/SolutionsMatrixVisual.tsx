"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers, ShieldCheck, Server, Cloud, Settings, Compass, Code2, CheckCircle2 } from "lucide-react";
import { servicesData } from "@/data/servicesData";

export function SolutionsMatrixVisual() {
  const [activeSlug, setActiveSlug] = useState<string>("managed-security");
  const servicesList = Object.values(servicesData);
  const activeService = servicesData[activeSlug] || servicesList[0];

  const pillarIcons: Record<string, React.ElementType> = {
    "managed-security": ShieldCheck,
    "managed-it": Server,
    "cloud": Cloud,
    "itsm": Settings,
    "consulting": Compass,
    "digital-solutions": Code2,
  };

  return (
    <div className="relative w-full rounded-3xl border border-cyan-500/20 bg-[#070d1e]/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-cyan-950/40 overflow-hidden mb-14">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5 mb-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Layers className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Interconnected Enterprise Service Mesh
            </div>
            <div className="text-xs text-cyan-400 font-mono">
              Full-Lifecycle Technology Orchestration
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-cyan-500/30 bg-cyan-950/40 text-xs font-semibold text-cyan-300 font-mono">
          <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" />
          <span>Unified Cross-Pillar SLA</span>
        </div>
      </div>

      {/* 6 Service Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-2.5 mb-6">
        {servicesList.map((srv) => {
          const Icon = pillarIcons[srv.slug] || ShieldCheck;
          return (
            <button
              key={srv.slug}
              onClick={() => setActiveSlug(srv.slug)}
              className={`p-3 rounded-2xl border text-center transition-all ${
                activeSlug === srv.slug
                  ? "border-cyan-400 bg-cyan-950/70 shadow-lg shadow-cyan-500/20 scale-105"
                  : "border-white/10 bg-[#050917] hover:border-white/30 text-slate-400"
              }`}
            >
              <div className="flex justify-center mb-1 text-cyan-400">
                <Icon className="h-4 w-4" />
              </div>
              <div className="text-xs font-bold text-white truncate">{srv.title}</div>
            </button>
          );
        })}
      </div>

      {/* Active Service Deep Dive Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeService.slug}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="rounded-2xl border border-white/10 bg-[#040816] p-6 space-y-4"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                {activeService.badge}
              </span>
              <h3 className="text-xl font-bold text-white font-display mt-0.5">
                {activeService.heroHeadline}
              </h3>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/30">
              Cross-Platform Integrated
            </span>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            {activeService.solutionOverview}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            {activeService.capabilities.slice(0, 3).map((cap, idx) => (
              <div key={idx} className="p-3.5 rounded-xl border border-white/5 bg-[#081024] space-y-1">
                <div className="text-xs font-bold text-white flex items-center gap-1.5">
                  <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                  <span className="truncate">{cap.title}</span>
                </div>
                <div className="text-[11px] text-slate-400 line-clamp-2">{cap.description}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
