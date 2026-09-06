"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ShoppingCart, Wifi, Radio, ShieldCheck, CheckCircle2, AlertTriangle, ArrowRight, Zap } from "lucide-react";

export function RetailVisual() {
  const [fiberDown, setFiberDown] = useState(false);

  return (
    <div className="relative w-full rounded-3xl border border-cyan-500/20 bg-[#060b1e]/95 p-6 backdrop-blur-xl shadow-2xl shadow-cyan-950/30 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
            <ShoppingCart className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-white uppercase tracking-wider font-display">
              Dual-WAN Branch SD-WAN Resiliency
            </div>
            <div className="text-[11px] text-purple-400 font-mono">
              Zero-Downtime Store POS & Checkout Continuity
            </div>
          </div>
        </div>

        <button
          onClick={() => setFiberDown(!fiberDown)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all ${
            fiberDown
              ? "border-rose-500 bg-rose-950/60 text-rose-300"
              : "border-cyan-500/40 bg-cyan-950/50 text-cyan-300 hover:border-cyan-400"
          }`}
        >
          <AlertTriangle className="h-3 w-3" />
          <span>{fiberDown ? "Restore Fiber Link" : "Simulate Fiber Cut"}</span>
        </button>
      </div>

      {/* Dual Link Visualizer */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
        {/* Primary Fiber */}
        <div
          className={`p-4 rounded-2xl border transition-all ${
            fiberDown
              ? "border-rose-500/40 bg-rose-950/20 opacity-75"
              : "border-cyan-500/40 bg-cyan-950/20"
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-white flex items-center gap-1.5">
              <Wifi className="h-4 w-4 text-cyan-400" />
              Primary: Metro Fiber 1Gbps
            </span>
            <span
              className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
                fiberDown ? "bg-rose-950 text-rose-400 border border-rose-500/30" : "bg-emerald-950 text-emerald-400 border border-emerald-500/30"
              }`}
            >
              {fiberDown ? "LINK SEVERED" : "ONLINE (ACTIVE)"}
            </span>
          </div>
          <div className="text-[11px] text-slate-400">
            {fiberDown ? "Carrier outage simulated. Automated traffic diverted in 280ms." : "Carrying POS transactions, ERP sync & guest Wi-Fi."}
          </div>
        </div>

        {/* Secondary LTE/5G Cellular */}
        <div
          className={`p-4 rounded-2xl border transition-all ${
            fiberDown
              ? "border-emerald-500/50 bg-emerald-950/30 shadow-lg shadow-emerald-950/40"
              : "border-white/10 bg-white/[0.02]"
          }`}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-white flex items-center gap-1.5">
              <Radio className={`h-4 w-4 ${fiberDown ? "text-emerald-400 animate-pulse" : "text-slate-400"}`} />
              Secondary: Redundant 5G LTE
            </span>
            <span
              className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
                fiberDown
                  ? "bg-emerald-950 text-emerald-400 border border-emerald-500/40 animate-pulse"
                  : "bg-slate-900 text-slate-400 border border-white/10"
              }`}
            >
              {fiberDown ? "FAILOVER ACTIVE (0s LOSS)" : "STANDBY (HOT READY)"}
            </span>
          </div>
          <div className="text-[11px] text-slate-400">
            {fiberDown ? "High-priority POS & inventory traffic successfully prioritized." : "Continuous sub-second heartbeat health check."}
          </div>
        </div>
      </div>

      {/* POS Terminal Status Fleet */}
      <div className="rounded-2xl border border-white/10 bg-[#040816] p-4 mb-4">
        <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-3 flex items-center justify-between">
          <span>Active POS Register Ingress Fleet</span>
          <span className="text-emerald-400 font-bold">100% Checkout Availability</span>
        </div>

        <div className="grid grid-cols-3 gap-2">
          {["Lane #01 (Express)", "Lane #02 (Self-Checkout)", "Lane #03 (Customer Service)"].map((lane, i) => (
            <div key={i} className="p-2.5 rounded-xl border border-white/5 bg-[#081024] text-center">
              <div className="text-xs font-semibold text-white">{lane}</div>
              <div className="text-[10px] text-emerald-400 mt-1 flex items-center justify-center gap-1 font-mono">
                <CheckCircle2 className="h-2.5 w-2.5" />
                <span>Processing</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-white/10">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" />
          <span className="text-[11px]">PCI-DSS Segmented Cardholder Data Environment</span>
        </div>
        <div className="text-[11px] font-mono text-cyan-300">
          Failover Time: <strong className="text-emerald-400 font-bold">{"<"} 300ms</strong>
        </div>
      </div>
    </div>
  );
}
