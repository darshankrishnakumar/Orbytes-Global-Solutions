"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Factory, ShieldAlert, Cpu, Activity, Gauge, Flame, AlertCircle, CheckCircle2 } from "lucide-react";

export function ManufacturingVisual() {
  const [anomalySimulated, setAnomalySimulated] = useState(false);

  const sensors = [
    { label: "CNC Spindle 04", temp: anomalySimulated ? "68.2°C" : "41.8°C", vibration: anomalySimulated ? "4.2 mm/s" : "1.1 mm/s", status: anomalySimulated ? "Warning" : "Optimal" },
    { label: "Assembly Line Robot A", temp: "38.5°C", vibration: "0.8 mm/s", status: "Optimal" },
    { label: "HVAC Cleanroom Pressure", temp: "21.0°C", vibration: "0.2 mm/s", status: "Optimal" },
  ];

  return (
    <div className="relative w-full max-w-xl mx-auto rounded-3xl border border-white/10 bg-[#070e22]/90 p-6 backdrop-blur-xl shadow-2xl shadow-cyan-950/40 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Header telemetry bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Factory className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-white uppercase tracking-wider font-display">
              Smart Factory OT / SCADA Matrix
            </div>
            <div className="text-[11px] text-amber-400/90 font-mono">
              Purdue Model L0–L4 Isolated Industrial Mesh
            </div>
          </div>
        </div>

        <button
          onClick={() => setAnomalySimulated(!anomalySimulated)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all ${
            anomalySimulated
              ? "border-amber-500 bg-amber-950/60 text-amber-300"
              : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-white/20"
          }`}
        >
          <Activity className="h-3.5 w-3.5" />
          <span>{anomalySimulated ? "Reset Telemetry" : "Test Predictive AI"}</span>
        </button>
      </div>

      {/* Purdue Model Layer Hierarchy */}
      <div className="relative rounded-2xl border border-white/10 bg-[#040816] p-4 mb-5">
        <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-3 flex items-center justify-between">
          <span>Industrial DMZ & Segregation Gateway</span>
          <span className="text-cyan-400">IEC 62443 Standard</span>
        </div>

        <div className="space-y-2">
          {/* Level 4/5: Enterprise Cloud / ERP */}
          <div className="flex items-center justify-between p-2.5 rounded-xl border border-blue-500/20 bg-blue-950/20 text-xs">
            <span className="font-semibold text-blue-300">Level 4/5: Enterprise ERP / MES</span>
            <span className="text-[10px] font-mono text-slate-400">SAP / Oracle Sync</span>
          </div>

          {/* Purdue Industrial DMZ */}
          <div className="relative flex items-center justify-between p-2.5 rounded-xl border border-cyan-500/40 bg-cyan-950/40 text-xs overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent"
              animate={{ x: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
            />
            <div className="flex items-center gap-2 relative z-10">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="font-bold text-cyan-300">Level 3.5: Industrial DMZ Barrier</span>
            </div>
            <span className="text-[10px] font-mono text-cyan-200 relative z-10">Deep Packet Inspection</span>
          </div>

          {/* Level 1/2: PLC & Scada Controllers */}
          <div className="flex items-center justify-between p-2.5 rounded-xl border border-amber-500/20 bg-amber-950/20 text-xs">
            <span className="font-semibold text-amber-300">Level 1/2: PLC, SCADA & RTU</span>
            <span className="text-[10px] font-mono text-slate-400">Modbus / PROFINET / OPC UA</span>
          </div>
        </div>
      </div>

      {/* Sensor Array Telemetry */}
      <div className="space-y-2.5 mb-5">
        <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 flex items-center justify-between px-1">
          <span>Machine Sensor Real-Time Feed</span>
          <span className="text-emerald-400 font-bold">OEE Score: 98.6%</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {sensors.map((s, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-xl border transition-all ${
                s.status === "Warning"
                  ? "border-amber-500/60 bg-amber-950/40"
                  : "border-white/5 bg-[#040816]"
              }`}
            >
              <div className="text-xs font-semibold text-white truncate mb-1.5">{s.label}</div>
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-300">
                <span>Temp:</span>
                <span className={s.status === "Warning" ? "text-amber-400 font-bold" : "text-cyan-400"}>
                  {s.temp}
                </span>
              </div>
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-300 mt-0.5">
                <span>Vibe:</span>
                <span className={s.status === "Warning" ? "text-amber-400 font-bold" : "text-emerald-400"}>
                  {s.vibration}
                </span>
              </div>
              <div className="mt-2 pt-1.5 border-t border-white/5 flex items-center justify-between text-[10px]">
                <span className="text-slate-400">Status</span>
                <span className={`font-bold ${s.status === "Warning" ? "text-amber-400" : "text-emerald-400"}`}>
                  {s.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Predictive Maintenance Status Alert */}
      {anomalySimulated ? (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 rounded-xl border border-amber-500/40 bg-amber-950/30 flex items-center gap-3 text-xs text-amber-200"
        >
          <AlertCircle className="h-4 w-4 text-amber-400 shrink-0" />
          <div>
            <strong>Predictive Alert Triggered:</strong> Harmonic bearing fatigue predicted in 48 hours. Auto-scheduled maintenance during non-shift window.
          </div>
        </motion.div>
      ) : (
        <div className="p-3 rounded-xl border border-white/5 bg-[#030712] flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            <span className="text-[11px]">Zero Unscheduled Downtime across 1,400+ Industrial Nodes</span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 font-bold">24/7 OT SOC</span>
        </div>
      )}
    </div>
  );
}
