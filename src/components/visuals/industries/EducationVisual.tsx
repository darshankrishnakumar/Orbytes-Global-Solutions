"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { GraduationCap, Wifi, Users, Shield, Laptop, BookOpen, Sparkles } from "lucide-react";

export function EducationVisual() {
  const [concurrentUsers, setConcurrentUsers] = useState(14820);
  const [examMode, setExamMode] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setConcurrentUsers((prev) => 14800 + Math.floor(Math.random() * 45));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-xl mx-auto rounded-3xl border border-white/10 bg-[#070e22]/90 p-6 backdrop-blur-xl shadow-2xl shadow-cyan-950/40 overflow-hidden">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
            <GraduationCap className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-white uppercase tracking-wider font-display">
              High-Density Campus Fabric
            </div>
            <div className="text-[11px] text-indigo-300 font-mono">
              Wi-Fi 6E / Multi-Gigabit Campus Mesh
            </div>
          </div>
        </div>

        <button
          onClick={() => setExamMode(!examMode)}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold transition-all ${
            examMode
              ? "border-emerald-500 bg-emerald-950/60 text-emerald-300"
              : "border-white/10 bg-white/[0.04] text-slate-300 hover:border-white/20"
          }`}
        >
          <Shield className="h-3 w-3" />
          <span>{examMode ? "Exam Lockdown: ACTIVE" : "Toggle Exam Lockdown"}</span>
        </button>
      </div>

      {/* Concurrency & Wi-Fi Pulse Graphic */}
      <div className="relative rounded-2xl border border-white/10 bg-[#040816] p-5 mb-5 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden">
        {/* Animated Wi-Fi Waves */}
        <div className="relative flex items-center justify-center w-28 h-28 shrink-0">
          {[1, 2, 3].map((ring) => (
            <motion.div
              key={ring}
              className="absolute rounded-full border border-cyan-500/30"
              style={{ width: `${ring * 32}px`, height: `${ring * 32}px` }}
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                delay: ring * 0.4,
                ease: "easeInOut",
              }}
            />
          ))}
          <div className="h-10 w-10 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-400 relative z-10 shadow-[0_0_15px_#06b6d4]">
            <Wifi className="h-5 w-5" />
          </div>
        </div>

        {/* Telemetry info */}
        <div className="space-y-2 flex-1 w-full text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-between text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5 text-cyan-400" />
              Active Campus Concurrency:
            </span>
            <span className="font-mono text-cyan-300 font-bold text-sm">
              {concurrentUsers.toLocaleString()}
            </span>
          </div>
          <div className="h-2 w-full rounded-full bg-slate-800 overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full"
              style={{ width: "86%" }}
            />
          </div>
          <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
            <span>Peak Capacity: 25,000</span>
            <span className="text-emerald-400">0% Packet Loss</span>
          </div>
        </div>
      </div>

      {/* Traffic Shaping & QoS Rules */}
      <div className="space-y-2 mb-4">
        <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 px-1">
          Dynamic Bandwidth Priority Allocations
        </div>

        <div className="grid grid-cols-3 gap-2">
          <div className="p-2.5 rounded-xl border border-cyan-500/30 bg-cyan-950/20 text-center">
            <div className="text-[11px] font-bold text-white">LMS / Canvas</div>
            <div className="text-[10px] text-cyan-400 font-mono font-semibold">Priority: P0 (MAX)</div>
            <div className="text-[10px] text-slate-400 mt-0.5">{"<"} 2ms Latency</div>
          </div>

          <div className="p-2.5 rounded-xl border border-indigo-500/30 bg-indigo-950/20 text-center">
            <div className="text-[11px] font-bold text-white">Virtual Labs</div>
            <div className="text-[10px] text-indigo-300 font-mono font-semibold">GPU Passthrough</div>
            <div className="text-[10px] text-slate-400 mt-0.5">10 Gbps Uplink</div>
          </div>

          <div className={`p-2.5 rounded-xl border text-center transition-all ${
            examMode
              ? "border-rose-500/40 bg-rose-950/30 text-rose-300"
              : "border-white/10 bg-white/[0.02] text-slate-300"
          }`}>
            <div className="text-[11px] font-bold">{examMode ? "Social / Stream" : "Dorm Streaming"}</div>
            <div className="text-[10px] font-mono font-semibold">
              {examMode ? "SHUTDOWN" : "Shaped: 15% Cap"}
            </div>
            <div className="text-[10px] text-slate-400 mt-0.5">{examMode ? "Exam Secure" : "QoS Throttled"}</div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-white/10">
        <span className="text-[11px]">FERPA & COPPA Compliant Student Data Partitioning</span>
        <span className="text-[11px] font-mono text-cyan-400 font-semibold">450+ Access Points</span>
      </div>
    </div>
  );
}
