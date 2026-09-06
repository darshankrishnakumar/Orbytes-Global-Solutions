"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Activity, ShieldCheck, HeartPulse, Database, Wifi, Lock, Zap } from "lucide-react";

export function HealthcareVisual() {
  const [heartRate, setHeartRate] = useState(72);
  const [activeDevice, setActiveDevice] = useState<number>(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeartRate((prev) => 70 + Math.floor(Math.random() * 6));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const devices = [
    { name: "Bedside Monitor #04", status: "Nominal", latency: "1.2ms", type: "IoMT" },
    { name: "EHR Sync Bridge", status: "Encrypted", latency: "4.8ms", type: "HL7/FHIR" },
    { name: "MRI PACS Storage", status: "Synchronized", latency: "12ms", type: "DICOM" },
  ];

  return (
    <div className="relative w-full max-w-xl mx-auto rounded-3xl border border-white/10 bg-[#070d1e]/90 p-6 backdrop-blur-xl shadow-2xl shadow-cyan-950/40 overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Header telemetry bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <Activity className="h-5 w-5 animate-pulse" />
          </div>
          <div>
            <div className="text-xs font-bold text-white uppercase tracking-wider font-display">
              IoMT Clinical Telemetry Grid
            </div>
            <div className="text-[11px] text-emerald-400 flex items-center gap-1.5 font-mono">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
              <span>HIPAA & HITRUST Zero-Trust Mesh</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-emerald-500/30 bg-emerald-950/40 text-xs font-semibold text-emerald-300">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
          <span>100% Audit Ready</span>
        </div>
      </div>

      {/* Real-time ECG Waveform Simulator */}
      <div className="relative rounded-2xl border border-white/10 bg-[#040816] p-4 mb-5 overflow-hidden">
        <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
          <span className="flex items-center gap-1.5 font-mono text-cyan-300">
            <HeartPulse className="h-3.5 w-3.5 text-rose-400 animate-pulse" />
            Vitals Stream: {heartRate} BPM (Normal Sinus Rhythm)
          </span>
          <span className="text-[10px] font-mono text-slate-400">HL7 v2.8 / FHIR R4</span>
        </div>

        {/* ECG SVG Path */}
        <div className="relative h-20 w-full flex items-center">
          {/* Grid background lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0e1e38_1px,transparent_1px),linear-gradient(to_bottom,#0e1e38_1px,transparent_1px)] bg-[size:16px_16px] opacity-40" />

          <svg className="w-full h-full" viewBox="0 0 500 80" preserveAspectRatio="none">
            {/* Base guide */}
            <line x1="0" y1="40" x2="500" y2="40" stroke="#1e293b" strokeWidth="1" strokeDasharray="2,2" />
            {/* Animated ECG Pulse */}
            <motion.path
              d="M 0 40 L 40 40 L 50 38 L 55 42 L 60 40 L 80 40 L 90 20 L 95 65 L 105 10 L 115 45 L 125 36 L 135 40 L 170 40 L 180 38 L 185 42 L 190 40 L 210 40 L 220 20 L 225 65 L 235 10 L 245 45 L 255 36 L 265 40 L 300 40 L 310 38 L 315 42 L 320 40 L 340 40 L 350 20 L 355 65 L 365 10 L 375 45 L 385 36 L 395 40 L 430 40 L 440 38 L 445 42 L 450 40 L 470 40 L 480 20 L 485 65 L 495 10 L 500 40"
              fill="none"
              stroke="#10b981"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathOffset: 0 }}
              animate={{ pathOffset: [0, -1] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
            />
          </svg>

          {/* Scanning glow vertical line */}
          <motion.div
            className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-emerald-400 to-transparent shadow-[0_0_12px_#10b981]"
            animate={{ left: ["0%", "100%"] }}
            transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          />
        </div>
      </div>

      {/* Connected IoMT Devices Grid */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {devices.map((dev, idx) => (
          <button
            key={idx}
            onClick={() => setActiveDevice(idx)}
            className={`p-3 rounded-xl border text-left transition-all ${
              activeDevice === idx
                ? "border-cyan-400/60 bg-cyan-950/40 shadow-lg shadow-cyan-950/30"
                : "border-white/5 bg-white/[0.02] hover:border-white/20"
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-[10px] font-mono text-cyan-400">{dev.type}</span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </div>
            <div className="text-xs font-semibold text-white truncate">{dev.name}</div>
            <div className="flex items-center justify-between text-[10px] text-slate-400 mt-1">
              <span>{dev.status}</span>
              <span className="font-mono text-emerald-400">{dev.latency}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Security Architecture Footnote */}
      <div className="flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-white/10">
        <div className="flex items-center gap-2">
          <Lock className="h-3.5 w-3.5 text-cyan-400" />
          <span className="text-[11px]">EHR Data-at-Rest & In-Transit: <strong>AES-256 GCM</strong></span>
        </div>
        <div className="text-[11px] font-mono text-slate-400">
          Uptime: <span className="text-emerald-400 font-bold">99.999%</span>
        </div>
      </div>
    </div>
  );
}
