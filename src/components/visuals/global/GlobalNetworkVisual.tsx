"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Globe, MapPin, Clock, ShieldCheck, Activity, Wifi, Radio } from "lucide-react";

export function GlobalNetworkVisual() {
  const [selectedHub, setSelectedHub] = useState<"chennai" | "pondicherry" | "toronto">("chennai");
  const [times, setTimes] = useState({
    ist: "00:00:00 IST",
    est: "00:00:00 EST",
  });

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      const istString = now.toLocaleTimeString("en-US", { timeZone: "Asia/Kolkata", hour12: false }) + " IST";
      const estString = now.toLocaleTimeString("en-US", { timeZone: "America/Toronto", hour12: false }) + " EST";
      setTimes({ ist: istString, est: estString });
    };
    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const hubs = {
    chennai: {
      name: "Chennai Global Delivery HQ",
      role: "24/7 Global SOC & NOC Command Centre",
      coords: "13.0827° N, 80.2707° E",
      capacity: "150+ Engineers & SOC Analysts",
      uptime: "99.999%",
      timeZone: times.ist,
      latency: "1.2ms (Intra-Grid)",
    },
    pondicherry: {
      name: "Pondicherry Engineering CoE",
      role: "Cloud DevOps & Systems Architecture Lab",
      coords: "11.9416° N, 79.8083° E",
      capacity: "50+ Solution Architects & Developers",
      uptime: "99.99%",
      timeZone: times.ist,
      latency: "2.8ms (HQ Trunk)",
    },
    toronto: {
      name: "Toronto Regional Office",
      role: "North American Enterprise Advisory & Strategy",
      coords: "43.6532° N, 79.3832° W",
      capacity: "Executive & Client Success Advisory",
      uptime: "99.99%",
      timeZone: times.est,
      latency: "168ms (Trans-Atlantic Fiber)",
    },
  };

  const activeHubData = hubs[selectedHub];

  return (
    <div className="relative w-full rounded-3xl border border-cyan-500/20 bg-[#070d1e]/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-cyan-950/40 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header telemetry bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5 mb-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Globe className="h-6 w-6" />
          </div>
          <div>
            <div className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Global Triangulated Delivery Network
            </div>
            <div className="text-xs text-cyan-400 font-mono flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Follow-the-Sun 24/7 Operations</span>
            </div>
          </div>
        </div>

        {/* Live dual timezone clocks */}
        <div className="flex items-center gap-2 bg-[#040816] px-4 py-2 rounded-xl border border-white/10 font-mono text-xs text-slate-300">
          <Clock className="h-4 w-4 text-cyan-400" />
          <div className="flex items-center gap-3">
            <span>{times.ist}</span>
            <span className="text-slate-600">|</span>
            <span>{times.est}</span>
          </div>
        </div>
      </div>

      {/* Global Map & Animated Triangulation Grid */}
      <div className="relative rounded-2xl border border-white/10 bg-[#040816] p-6 mb-6 overflow-hidden min-h-[220px] flex items-center justify-center">
        {/* SVG Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:20px_20px] opacity-40" />

        {/* World Network SVG Connections */}
        <svg className="w-full h-44 absolute inset-0" viewBox="0 0 600 200" preserveAspectRatio="none">
          {/* Trans-Atlantic Curve between Toronto (120, 70) and Chennai (450, 120) */}
          <path
            d="M 120 70 Q 285 20 450 120"
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="1.5"
            strokeDasharray="4,4"
            className="opacity-50"
          />
          {/* Animated data pulse on trans-atlantic fiber */}
          <motion.path
            d="M 120 70 Q 285 20 450 120"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="2.5"
            strokeDasharray="20,150"
            initial={{ strokeDashoffset: 170 }}
            animate={{ strokeDashoffset: 0 }}
            transition={{ repeat: Infinity, duration: 2.8, ease: "linear" }}
          />

          {/* Regional Trunk between Chennai (450, 120) and Pondicherry (470, 140) */}
          <line
            x1="450"
            y1="120"
            x2="470"
            y2="140"
            stroke="#10b981"
            strokeWidth="2"
            strokeDasharray="2,2"
          />
        </svg>

        {/* Node: Toronto */}
        <button
          onClick={() => setSelectedHub("toronto")}
          className={`absolute left-[15%] top-[30%] -translate-x-1/2 -translate-y-1/2 p-2.5 rounded-2xl border transition-all text-left group ${
            selectedHub === "toronto"
              ? "border-cyan-400 bg-cyan-950/80 shadow-lg shadow-cyan-500/20 scale-105"
              : "border-white/10 bg-[#081226]/80 hover:border-white/30"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="text-xs font-bold text-white">Toronto</span>
          </div>
          <div className="text-[10px] text-slate-400 font-mono mt-0.5">Canada Hub</div>
        </button>

        {/* Node: Chennai HQ */}
        <button
          onClick={() => setSelectedHub("chennai")}
          className={`absolute left-[72%] top-[55%] -translate-x-1/2 -translate-y-1/2 p-2.5 rounded-2xl border transition-all text-left group ${
            selectedHub === "chennai"
              ? "border-emerald-400 bg-emerald-950/80 shadow-lg shadow-emerald-500/20 scale-105"
              : "border-white/10 bg-[#081226]/80 hover:border-white/30"
          }`}
        >
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-xs font-bold text-white">Chennai HQ</span>
          </div>
          <div className="text-[10px] text-emerald-300 font-mono mt-0.5">Primary Global SOC</div>
        </button>

        {/* Node: Pondicherry CoE */}
        <button
          onClick={() => setSelectedHub("pondicherry")}
          className={`absolute left-[78%] top-[75%] -translate-x-1/2 -translate-y-1/2 p-2 rounded-xl border transition-all text-left group ${
            selectedHub === "pondicherry"
              ? "border-blue-400 bg-blue-950/80 shadow-lg shadow-blue-500/20 scale-105"
              : "border-white/10 bg-[#081226]/80 hover:border-white/30"
          }`}
        >
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            <span className="text-[11px] font-bold text-white">Pondicherry</span>
          </div>
          <div className="text-[9px] text-slate-400 font-mono">DevOps CoE</div>
        </button>
      </div>

      {/* Selected Hub Detailed Inspector Card */}
      <div className="rounded-2xl border border-white/10 bg-[#040816] p-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-white/10 mb-4">
          <div>
            <h4 className="text-base font-bold text-white font-display flex items-center gap-2">
              <MapPin className="h-4 w-4 text-cyan-400" />
              <span>{activeHubData.name}</span>
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">{activeHubData.role}</p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="text-slate-400">{activeHubData.coords}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          <div className="p-3 rounded-xl border border-white/5 bg-[#081024]">
            <div className="text-[10px] text-slate-400 mb-1">Operational Capacity</div>
            <div className="font-semibold text-white">{activeHubData.capacity}</div>
          </div>
          <div className="p-3 rounded-xl border border-white/5 bg-[#081024]">
            <div className="text-[10px] text-slate-400 mb-1">Telemetry Latency</div>
            <div className="font-semibold text-emerald-400 font-mono">{activeHubData.latency}</div>
          </div>
          <div className="p-3 rounded-xl border border-white/5 bg-[#081024]">
            <div className="text-[10px] text-slate-400 mb-1">Core Network SLA</div>
            <div className="font-semibold text-cyan-400 font-mono">{activeHubData.uptime}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
