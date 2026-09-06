"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Handshake, ShieldCheck, CheckCircle2, Cloud, Server, ExternalLink, Zap } from "lucide-react";
import { partnersData } from "@/data/partnersData";

export function PartnersEcosystemVisual() {
  const [activePartnerIdx, setActivePartnerIdx] = useState<number>(0);
  const current = partnersData[activePartnerIdx];

  const integrationDetails: Record<string, { arch: string; certs: string; apiSync: string }> = {
    "Microsoft": { arch: "Azure ExpressRoute & Microsoft 365 E5 Zero-Trust GCC-High Pipeline", certs: "Certified Cloud Solution Provider (CSP)", apiSync: "Active Graph API Telemetry (0.8ms)" },
    "Amazon Web Services (AWS)": { arch: "Multi-Region AWS Transit Gateway & AWS Well-Architected Framework", certs: "Advanced Tier Services Partner", apiSync: "Active CloudWatch & GuardDuty Ingress" },
    "GoDaddy": { arch: "High-Availability DNS Anycast Fabric & Enterprise Domain Redundancy", certs: "Enterprise Domain Operations Partner", apiSync: "Automated DNSSEC & SSL Rotation" },
    "Hostinger": { arch: "Tier-3 Datacenter Web Isolation & WordPress Enterprise Acceleration", certs: "Strategic Hosting & Infrastructure Partner", apiSync: "LiteSpeed Caching & CDN Edge Pulse" },
    "NXT GEN": { arch: "Sovereign Cloud Data Residency & High-Density Datacenter Hosting", certs: "Sovereign Cloud Co-Location Partner", apiSync: "Dual Active-Active Fiber Interlink" },
  };

  const details = integrationDetails[current.name] || {
    arch: "Enterprise Cloud & Security Architecture",
    certs: "Verified Partner",
    apiSync: "Synchronized",
  };

  return (
    <div className="relative w-full rounded-3xl border border-cyan-500/20 bg-[#070d1e]/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-cyan-950/40 overflow-hidden mb-12">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5 mb-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Handshake className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Enterprise Technology Alliance Mesh
            </div>
            <div className="text-xs text-cyan-400 font-mono">
              Live Certified Multi-Vendor Stack
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-cyan-500/30 bg-cyan-950/40 text-xs font-semibold text-cyan-300">
          <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" />
          <span>Vendor Agnostic Architecture</span>
        </div>
      </div>

      {/* Partner Selector Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-6">
        {partnersData.map((p, idx) => (
          <button
            key={p.name}
            onClick={() => setActivePartnerIdx(idx)}
            className={`p-3 rounded-2xl border text-center transition-all ${
              activePartnerIdx === idx
                ? "border-cyan-400 bg-cyan-950/70 shadow-lg shadow-cyan-500/20 scale-105"
                : "border-white/10 bg-[#050917] hover:border-white/30 text-slate-400"
            }`}
          >
            <div className="text-xs font-bold text-white truncate">{p.name}</div>
            <div className="text-[10px] text-cyan-400 font-mono truncate mt-0.5">{p.badge}</div>
          </button>
        ))}
      </div>

      {/* Dynamic Detail Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="rounded-2xl border border-white/10 bg-[#040816] p-6 space-y-4"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-cyan-400">{current.category}</span>
              <h3 className="text-xl font-bold text-white font-display mt-0.5">
                {current.name}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/40 px-3 py-1 rounded-full border border-emerald-500/30">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{details.apiSync}</span>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            {current.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-xl border border-white/5 bg-[#081024]">
              <div className="text-[10px] text-slate-400 mb-1">Architectural Integration</div>
              <div className="text-xs font-semibold text-white">{details.arch}</div>
            </div>

            <div className="p-3.5 rounded-xl border border-white/5 bg-[#081024]">
              <div className="text-[10px] text-slate-400 mb-1">Alliance Status</div>
              <div className="text-xs font-semibold text-cyan-400 flex items-center gap-1.5">
                <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                <span>{details.certs}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
