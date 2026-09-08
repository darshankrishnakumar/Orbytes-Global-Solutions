"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Building, ShieldCheck, Stethoscope, Landmark, Factory, ShoppingBag, GraduationCap, Briefcase, CheckCircle2 } from "lucide-react";
import { industriesData } from "@/data/industriesData";

export function IndustryImpactVisual() {
  const [activeSlug, setActiveSlug] = useState<string>("healthcare");
  const industryList = Object.values(industriesData);
  const activeInd = industriesData[activeSlug] || industryList[0];

  const industryIcons: Record<string, React.ElementType> = {
    healthcare: Stethoscope,
    "financial-services": Landmark,
    manufacturing: Factory,
    retail: ShoppingBag,
    education: GraduationCap,
    "professional-services": Briefcase,
  };

  const complianceStandards: Record<string, { standard: string; riskAvoided: string; availability: string }> = {
    healthcare: { standard: "HIPAA, HITRUST, HL7/FHIR Security", riskAvoided: "PHI Exfiltration & Ransomware Extortion", availability: "99.999% Clinical Uptime" },
    "financial-services": { standard: "PCI-DSS Level 1, FINRA, SOX, GLBA", riskAvoided: "Fraud & Sub-Millisecond Trading Latency", availability: "99.999% Fault Tolerance" },
    manufacturing: { standard: "IEC 62443, Purdue Model L0–L4", riskAvoided: "Unscheduled Plant Floor Stoppages", availability: "Predictive AI Zero-Downtime" },
    retail: { standard: "PCI DSS CDE, Store SD-WAN Dual-WAN", riskAvoided: "POS Blackouts & Revenue Hemorrhage", availability: "Sub-300ms 5G Failover" },
    education: { standard: "FERPA, COPPA, CIPA Filtering", riskAvoided: "Campus Wi-Fi Choke & Exam Tampering", availability: "15,000+ High-Density Users" },
    "professional-services": { standard: "SOC 2 Type II, ISO 27001, BitLocker", riskAvoided: "Attorney-Client Privilege Breaches", availability: "100% Cryptographic Isolation" },
  };

  const currentCompliance = complianceStandards[activeInd.slug] || {
    standard: "Enterprise Industry Standards",
    riskAvoided: "Operational Disruptions",
    availability: "99.99% Enterprise SLA",
  };

  return (
    <div className="relative w-full rounded-3xl border border-cyan-500/20 bg-[#070d1e]/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-cyan-950/40 overflow-hidden mb-14">
      {/* Glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5 mb-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Building className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Sector Compliance & Regulatory Matrix
            </div>
            <div className="text-xs text-cyan-400 font-mono">
              Engineered for Audit Strictness & Zero Failure Tolerance
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-emerald-500/30 bg-emerald-950/40 text-xs font-semibold text-emerald-300 font-mono">
          <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
          <span>100% Audit Readiness</span>
        </div>
      </div>

      {/* Industry Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-6 gap-2.5 mb-6">
        {industryList.map((ind) => {
          const Icon = industryIcons[ind.slug] || Building;
          return (
            <button
              key={ind.slug}
              onClick={() => setActiveSlug(ind.slug)}
              className={`p-3 rounded-2xl border text-center transition-all ${
                activeSlug === ind.slug
                  ? "border-cyan-400 bg-cyan-950/70 shadow-lg shadow-cyan-500/20 scale-105"
                  : "border-white/10 bg-[#050917] hover:border-white/30 text-slate-400"
              }`}
            >
              <div className="flex justify-center mb-1 text-cyan-400">
                <Icon className="h-4 w-4" />
              </div>
              <div className="text-xs font-bold text-white truncate">{ind.name}</div>
            </button>
          );
        })}
      </div>

      {/* Dynamic Compliance Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeInd.slug}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.2 }}
          className="rounded-2xl border border-white/10 bg-[#040816] p-6 space-y-4"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-white/10">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                {activeInd.badge}
              </span>
              <h3 className="text-xl font-bold text-white font-display mt-0.5">
                {activeInd.name} Architectural Standards
              </h3>
            </div>
            <span className="text-xs font-mono text-cyan-300 bg-cyan-950/40 px-3 py-1 rounded-full border border-cyan-500/30">
              {currentCompliance.standard}
            </span>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed">
            {activeInd.orbytesSolution}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <div className="p-3.5 rounded-xl border border-white/5 bg-[#081024]">
              <div className="text-[10px] text-slate-400 mb-1">Primary Operational Risk Prevented</div>
              <div className="text-xs font-semibold text-rose-300">{currentCompliance.riskAvoided}</div>
            </div>

            <div className="p-3.5 rounded-xl border border-white/5 bg-[#081024]">
              <div className="text-[10px] text-slate-400 mb-1">Availability Guarantee</div>
              <div className="text-xs font-semibold text-emerald-400 font-mono">{currentCompliance.availability}</div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
