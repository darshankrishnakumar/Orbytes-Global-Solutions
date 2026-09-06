"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Lock, ShieldCheck, FileCheck, EyeOff, Laptop, CheckCircle2 } from "lucide-react";

export function ProfessionalVisual() {
  const [selectedMatter, setSelectedMatter] = useState<"matter1" | "matter2">("matter1");

  const matters = {
    matter1: {
      name: "Matter #9201: Cross-Border M&A",
      client: "Confidential Sovereign Fund",
      retention: "SOC 2 Type II / ISO 27001",
      ethicalWall: "Active (24 Authorized Partners)",
      dlpStatus: "Export Blocked & Watermarked",
    },
    matter2: {
      name: "Matter #4088: Antitrust Defense",
      client: "Global FinTech Enterprise",
      retention: "FedRAMP / Strict Legal Hold",
      ethicalWall: "Active (12 Counsel & Forensic Audits)",
      dlpStatus: "Hardware Token Required",
    },
  };

  const activeData = matters[selectedMatter];

  return (
    <div className="relative w-full rounded-3xl border border-cyan-500/20 bg-[#060b1e]/95 p-6 backdrop-blur-xl shadow-2xl shadow-cyan-950/30 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-slate-500/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Briefcase className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-white uppercase tracking-wider font-display">
              Ethical Wall & Matter Isolation Engine
            </div>
            <div className="text-[11px] text-cyan-400 font-mono">
              Zero-Trust Legal & Accounting Client Sandboxing
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-emerald-500/30 bg-emerald-950/40 text-xs font-semibold text-emerald-300">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
          <span>SOC 2 Type II Certified</span>
        </div>
      </div>

      {/* Interactive Matter Selector */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setSelectedMatter("matter1")}
          className={`flex-1 py-2 px-3 rounded-xl border text-xs font-semibold transition-all ${
            selectedMatter === "matter1"
              ? "border-cyan-400 bg-cyan-950/50 text-cyan-300 shadow-md shadow-cyan-950/40"
              : "border-white/10 bg-white/[0.02] text-slate-400 hover:text-white"
          }`}
        >
          Matter #9201 (M&A Advisory)
        </button>
        <button
          onClick={() => setSelectedMatter("matter2")}
          className={`flex-1 py-2 px-3 rounded-xl border text-xs font-semibold transition-all ${
            selectedMatter === "matter2"
              ? "border-cyan-400 bg-cyan-950/50 text-cyan-300 shadow-md shadow-cyan-950/40"
              : "border-white/10 bg-white/[0.02] text-slate-400 hover:text-white"
          }`}
        >
          Matter #4088 (Antitrust)
        </button>
      </div>

      {/* Vault Card */}
      <div className="rounded-2xl border border-white/10 bg-[#040816] p-4 mb-4 space-y-3">
        <div className="flex items-center justify-between text-xs pb-2 border-b border-white/5">
          <span className="text-slate-400">Target Legal Matter:</span>
          <span className="font-bold text-white font-mono">{activeData.name}</span>
        </div>

        <div className="grid grid-cols-2 gap-3 text-xs">
          <div className="p-3 rounded-xl border border-white/5 bg-[#081024]">
            <div className="text-[10px] text-slate-400 mb-1">Ethical Wall Segmentation</div>
            <div className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
              <EyeOff className="h-3.5 w-3.5" />
              <span>{activeData.ethicalWall}</span>
            </div>
          </div>

          <div className="p-3 rounded-xl border border-white/5 bg-[#081024]">
            <div className="text-[10px] text-slate-400 mb-1">DLP Anti-Exfiltration</div>
            <div className="text-xs font-semibold text-cyan-400 flex items-center gap-1.5">
              <FileCheck className="h-3.5 w-3.5" />
              <span>{activeData.dlpStatus}</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between p-2.5 rounded-xl border border-cyan-500/20 bg-cyan-950/20 text-xs text-slate-300">
          <span className="flex items-center gap-2">
            <Lock className="h-3.5 w-3.5 text-cyan-400" />
            Zero-Trust Mobile Fleet:
          </span>
          <span className="font-mono text-cyan-300">BitLocker AES-256 + Intune MDM</span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-white/10">
        <span className="text-[11px]">Enforces Attorney-Client Privilege Cryptographic Boundaries</span>
        <span className="text-[11px] font-mono text-emerald-400 font-bold">100% Tamper Proof</span>
      </div>
    </div>
  );
}
