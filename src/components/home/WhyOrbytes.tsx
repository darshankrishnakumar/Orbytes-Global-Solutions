"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Shield, TrendingUp, Target, CheckCircle2 } from "lucide-react";

export function WhyOrbytes() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      step: "01",
      tag: "PROACTIVE",
      title: "We identify problems before they become business disruptions.",
      description:
        "Traditional IT waits for servers to crash and users to submit panic tickets. Orbytes operates continuous telemetry, synthetic health checks, and automated healing scripts that resolve potential failures long before your team notices an issue.",
      metrics: "99.99% operational uptime maintained across client fleets.",
      icon: Eye,
      color: "#0284c7",
      bgGradient: "from-cyan-950/40 via-[#071329] to-[#050814]",
      imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Continuous enterprise NOC operations monitoring live server health telemetry",
      highlights: [
        "24/7 automated telemetry and synthetic transactions",
        "Threshold alerting prior to memory/disk exhaustion",
        "Scheduled non-disruptive system hygiene and patching",
      ],
    },
    {
      step: "02",
      tag: "SECURE",
      title: "Security built into the technology environment.",
      description:
        "Cybersecurity isn't an afterthought or an optional add-on plugin. Every network segment, cloud bucket, workstation, and identity we architect adheres to strict zero-trust principles, immutable logging, and continuous threat monitoring.",
      metrics: "Zero ransomware compromises across actively managed SOC clients.",
      icon: Shield,
      color: "#10b981",
      bgGradient: "from-emerald-950/40 via-[#071329] to-[#050814]",
      imageUrl: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Zero-trust SOC cybersecurity operations center with real-time threat defense",
      highlights: [
        "Continuous 24/7 SOC surveillance and SIEM correlation",
        "Air-gapped and immutable cloud disaster recovery vaults",
        "Adherence to ISO 27001, HIPAA, PCI-DSS, and GDPR",
      ],
    },
    {
      step: "03",
      tag: "SCALABLE",
      title: "Infrastructure designed to grow with your organization.",
      description:
        "Whether opening your fifth branch office, acquiring a regional competitor, or expanding from India to North America, our cloud-native architectures scale compute, storage, and networking without costly re-engineering.",
      metrics: "Effortless auto-scaling supporting up to 10x traffic bursts.",
      icon: TrendingUp,
      color: "#2563eb",
      bgGradient: "from-blue-950/40 via-[#071329] to-[#050814]",
      imageUrl: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Enterprise data center server rack infrastructure with hyperscale redundancy",
      highlights: [
        "Cloud-native Microsoft Azure and AWS architectures",
        "Software-defined networking (SD-WAN) and automated user onboarding",
        "FinOps governance curbing unnecessary cloud expenditure",
      ],
    },
    {
      step: "04",
      tag: "BUSINESS-FOCUSED",
      title: "Technology aligned with measurable business outcomes.",
      description:
        "We speak the language of EBITDA, operational throughput, and customer satisfaction—not just CPU cycles. Every technology recommendation is paired with an actionable business case, ROI projection, and executive roadmap.",
      metrics: "Average 30% reduction in long-term technology operating overhead.",
      icon: Target,
      color: "#f59e0b",
      bgGradient: "from-amber-950/40 via-[#071329] to-[#050814]",
      imageUrl: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Executive vCIO technology strategy and commercial ROI alignment session",
      highlights: [
        "Dedicated vCIO executive steering and annual budgeting",
        "Transparent SLA metrics with live ticketing portals",
        "Direct alignment between IT expenditure and corporate revenue",
      ],
    },
  ];

  const current = pillars[activeTab];
  const CurrentIcon = current.icon;

  return (
    <section id="why-orbytes" className="relative py-12 sm:py-16 bg-slate-50 border-t border-b border-slate-200 overflow-hidden scroll-mt-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-1.5">
          <span className="text-xs font-bold tracking-widest text-cyan-600 uppercase font-display">
            The Orbytes Difference
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 font-display">
            More than an IT provider.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            We operate as your dedicated strategic technology division, combining enterprise rigor with personalized partnership.
          </p>
        </div>

        {/* Interactive Story Progression */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          {/* Left: Interactive Pillar Selectors - Compact */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-2">
            {pillars.map((pillar, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={pillar.step}
                  type="button"
                  onClick={() => setActiveTab(idx)}
                  className={`w-full text-left cursor-pointer rounded-xl border p-3 sm:p-3.5 transition-all duration-200 ${
                    isActive
                      ? "border-cyan-500/60 bg-white shadow-md shadow-cyan-500/10 translate-x-1"
                      : "border-slate-200 bg-white/70 hover:border-slate-300 hover:bg-white opacity-90 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="text-base font-bold font-display"
                      style={{ color: isActive ? pillar.color : "#94a3b8" }}
                    >
                      {pillar.step}
                    </span>
                    <span
                      className="text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded border"
                      style={{
                        borderColor: isActive ? `${pillar.color}50` : "#cbd5e1",
                        backgroundColor: isActive ? `${pillar.color}15` : "transparent",
                        color: isActive ? pillar.color : "#64748b",
                      }}
                    >
                      {pillar.tag}
                    </span>
                  </div>
                  <h4 className="mt-1 text-xs sm:text-sm font-semibold text-slate-900 font-display line-clamp-1">
                    {pillar.title}
                  </h4>
                </button>
              );
            })}
          </div>

          {/* Right: Dynamic Visual Story Stage - Compact */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.step}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="h-full rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-xl flex flex-col justify-between space-y-3.5 relative overflow-hidden"
              >
                {/* Accent Watermark Number */}
                <div className="pointer-events-none absolute -right-3 -bottom-6 text-[100px] font-black text-slate-900/[0.03] font-display select-none">
                  {current.step}
                </div>

                {/* Top Row: Badge + Stat */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div
                      className="flex h-8 w-8 items-center justify-center rounded-lg border"
                      style={{
                        borderColor: `${current.color}50`,
                        backgroundColor: `${current.color}15`,
                        color: current.color,
                      }}
                    >
                      <CurrentIcon className="h-4 w-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block leading-none">
                        Pillar {current.step}
                      </span>
                      <h3
                        className="text-xs font-bold uppercase tracking-wider font-display mt-0.5"
                        style={{ color: current.color }}
                      >
                        {current.tag}
                      </h3>
                    </div>
                  </div>

                  <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200 text-[11px] font-semibold text-slate-700">
                    <span className="text-slate-400 font-normal">Target:</span>
                    <span className="font-bold text-slate-900 truncate max-w-[200px]">{current.metrics}</span>
                  </div>
                </div>

                {/* Main Headline & Description */}
                <div className="space-y-1">
                  <h3 className="text-base sm:text-lg font-bold text-slate-900 font-display leading-snug line-clamp-1 sm:line-clamp-2">
                    {current.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                    {current.description}
                  </p>
                </div>

                {/* Visual Pillar Photo - Compact */}
                {current.imageUrl && (
                  <div className="relative group overflow-hidden rounded-xl border border-slate-200 shadow-xs h-24 sm:h-28 w-full shrink-0">
                    <img
                      src={current.imageUrl}
                      alt={current.imageAlt || current.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-2.5">
                      <p className="text-[11px] text-white/95 font-medium tracking-wide line-clamp-1">
                        {current.imageAlt}
                      </p>
                    </div>
                  </div>
                )}

                {/* Checkpoint Highlights */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-slate-100">
                  {current.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-cyan-600 mt-0.5" />
                      <span className="line-clamp-2 leading-tight">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Mobile Stat Badge */}
                <div className="sm:hidden pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                    Target Standard:
                  </span>
                  <p className="text-xs font-bold text-slate-900">
                    {current.metrics}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
