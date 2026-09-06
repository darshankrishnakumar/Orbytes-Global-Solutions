"use client";

import React, { useState } from "react";
import { Search, ClipboardCheck, Compass, Cog, ShieldCheck, Zap } from "lucide-react";

export function ProcessJourney() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const stages = [
    {
      step: "01",
      name: "DISCOVER",
      icon: Search,
      short: "Infrastructure Audit",
      detail: "Deep-dive stakeholder interviews, asset discovery, license audits, and baseline telemetry mapping.",
    },
    {
      step: "02",
      name: "ASSESS",
      icon: ClipboardCheck,
      short: "Risk & GRC Review",
      detail: "Evaluating vulnerabilities, compliance boundaries (HIPAA, PCI-DSS), and single-points-of-failure.",
    },
    {
      step: "03",
      name: "DESIGN",
      icon: Compass,
      short: "Target Architecture",
      detail: "Blueprint formulation of secure cloud landing zones, zero-trust network policies, and SLAs.",
    },
    {
      step: "04",
      name: "IMPLEMENT",
      icon: Cog,
      short: "Zero-Disruption Cutover",
      detail: "Agile, staged deployment of monitoring agents, cloud migration, and automated backup vaults.",
    },
    {
      step: "05",
      name: "MANAGE",
      icon: ShieldCheck,
      short: "24/7 Proactive Ops",
      detail: "Continuous 24/7 SOC surveillance, real-time helpdesk support, and daily system hygiene maintenance.",
    },
    {
      step: "06",
      name: "OPTIMIZE",
      icon: Zap,
      short: "Continuous FinOps",
      detail: "Quarterly business reviews (QBR), FinOps cloud cost trimming, and multi-year technology roadmaps.",
    },
  ];

  return (
    <section className="relative py-28 bg-white border-t border-b border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
          <span className="text-xs font-bold tracking-widest text-cyan-600 uppercase font-display">
            Delivery Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-display">
            Our Proven Technology Journey.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            From initial perimeter assessment to round-the-clock proactive management, our 6-stage lifecycle guarantees zero surprises.
          </p>
        </div>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-10 left-8 right-8 h-[2px] bg-slate-200 -z-0">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-500"
              style={{ width: `${(activeStep / (stages.length - 1)) * 100}%` }}
            />
          </div>

          {/* 6 Stage Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 relative z-10">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              const isActive = activeStep === idx;
              const isPassed = activeStep >= idx;

              return (
                <div
                  key={stage.step}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                  className="cursor-pointer group flex flex-col items-center text-center"
                >
                  {/* Circle Icon Badge */}
                  <div
                    className={`h-20 w-20 rounded-2xl border flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "border-cyan-500 bg-cyan-50 text-cyan-600 shadow-[0_0_25px_rgba(0,229,255,0.25)] scale-110"
                        : isPassed
                        ? "border-cyan-400/60 bg-slate-50 text-cyan-600"
                        : "border-slate-200 bg-slate-50 text-slate-400 hover:border-slate-300 hover:text-slate-700"
                    }`}
                  >
                    <Icon className="h-8 w-8" />
                  </div>

                  {/* Step & Name */}
                  <div className="mt-5 space-y-1">
                    <span className="text-[11px] font-bold tracking-widest text-cyan-600 uppercase">
                      Stage {stage.step}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 font-display">
                      {stage.name}
                    </h3>
                    <p className="text-xs font-medium text-slate-700">
                      {stage.short}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-2 leading-relaxed max-w-[180px] mx-auto hidden sm:block">
                      {stage.detail}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
