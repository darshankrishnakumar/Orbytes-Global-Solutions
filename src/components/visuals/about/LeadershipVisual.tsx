"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Cpu, Globe, Target, Award, CheckCircle2 } from "lucide-react";
import { leadershipData } from "@/data/leadershipData";

export function LeadershipVisual() {
  const [selectedLeader, setSelectedLeader] = useState<number>(0);
  const active = leadershipData[selectedLeader];

  const domainFocus: Record<string, { mandate: string; focus: string[]; badge: string }> = {
    "Arun G": {
      mandate: "Directs executive strategy, high-level investor relationships, and enterprise expansion initiatives across international delivery centers.",
      focus: ["Corporate Strategy", "Global Expansion", "Enterprise Vision"],
      badge: "Founder & Executive Director",
    },
    "Ranganadin C": {
      mandate: "Directs global corporate operations, enterprise client fiduciary trust, and continuous institutional growth across India and international markets.",
      focus: ["Enterprise Scalability", "Global Operations", "Fiduciary Integrity"],
      badge: "Chief Executive Officer",
    },
    "Jothi Shankar K": {
      mandate: "Heads international market expansions, Tier-1 enterprise partner alliances, and cross-border commercial engagements in North America and Asia-Pacific.",
      focus: ["Enterprise Delivery", "Strategic Partnerships", "Client Advisory"],
      badge: "Managing Partner & Delivery Head",
    },
    "Padmavathy V": {
      mandate: "Spearheads Orbytes brand architecture, market positioning, and enterprise client education, articulating complex cybersecurity capabilities into clear business value.",
      focus: ["Brand Architecture", "Market Positioning", "Client Engagement"],
      badge: "Chief Marketing Officer",
    },
    "Ajay Sundar N": {
      mandate: "Engineers proprietary Cloud DevOps frameworks, automated infrastructure pipelines, and next-generation Edge AI platforms with 99.99% SLA standards.",
      focus: ["Multi-Cloud Architecture", "AIOps & Automation", "Continuous Delivery"],
      badge: "Chief Technical Officer",
    },
    "Jaganathan R": {
      mandate: "Oversees 24/7/365 Global SOC operations, threat hunting intelligence, zero-trust cryptographic boundaries, and ISO 27001 regulatory compliance.",
      focus: ["24/7 SOC Defense", "Zero-Trust Architecture", "Threat Intelligence"],
      badge: "Chief Security Officer",
    },
    "Cyrille Helena": {
      mandate: "Directs Orbytes regional expansion and enterprise managed service delivery across Central Africa, managing localized client support and infrastructure resilience.",
      focus: ["Regional Expansion", "SLA Continuity", "Localized Delivery"],
      badge: "Operation Head — Central Africa",
    },
    "Akansha Arora": {
      mandate: "Oversees European market outreach, GDPR compliance alignments, and enterprise partnerships across Central Europe.",
      focus: ["European Alliances", "Regulatory GDPR", "Cross-Border Support"],
      badge: "Operation Head — Central Europe",
    },
  };

  const activeFocus = domainFocus[active.name] || {
    mandate: active.bio,
    focus: ["Strategic Leadership", "Enterprise Delivery"],
    badge: active.role,
  };

  return (
    <div className="relative w-full rounded-3xl border border-cyan-500/20 bg-[#070d1e]/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-cyan-950/40 overflow-hidden mb-12">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5 mb-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Target className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Executive Stewardship & Governance Matrix
            </div>
            <div className="text-xs text-cyan-400 font-mono">
              Active Executive Steering Committee
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-emerald-500/30 bg-emerald-950/40 text-xs font-semibold text-emerald-300">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
          <span>Fiduciary Accountability</span>
        </div>
      </div>

      {/* Executive Quadrant Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {leadershipData.map((exec, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedLeader(idx)}
            className={`p-3.5 rounded-2xl border text-left transition-all ${
              selectedLeader === idx
                ? "border-cyan-400 bg-cyan-950/70 shadow-lg shadow-cyan-500/20 scale-[1.02]"
                : "border-white/10 bg-[#050917] hover:border-white/30"
            }`}
          >
            <div className="text-xs font-bold text-white truncate">{exec.name}</div>
            <div className="text-[10px] text-cyan-400 font-mono truncate mt-0.5">{exec.role}</div>
          </button>
        ))}
      </div>

      {/* Active Executive Dossier */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active.name}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="rounded-2xl border border-white/10 bg-[#040816] p-6 space-y-4"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div className="flex items-center gap-4">
              {active.image ? (
                <div className="relative h-16 w-16 rounded-2xl overflow-hidden border border-cyan-500/40 shadow-lg shrink-0 bg-slate-900">
                  <img
                    src={active.image}
                    alt={active.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              ) : (
                <div
                  className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${active.gradient} flex items-center justify-center font-bold text-xl text-white shadow-lg shrink-0`}
                >
                  {active.initials}
                </div>
              )}
              <div>
                <span className="text-xs font-mono text-cyan-400">{activeFocus.badge}</span>
                <h3 className="text-lg font-bold text-white font-display mt-0.5">
                  {active.name} — {active.role}
                </h3>
              </div>
            </div>
            <div className="text-xs text-slate-400 font-mono">
              Orbytes Executive Governance
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            {activeFocus.mandate}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
            {activeFocus.focus.map((f, i) => (
              <div key={i} className="p-3 rounded-xl border border-white/5 bg-[#081024] flex items-center gap-2 text-xs text-slate-200">
                <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0" />
                <span>{f}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
