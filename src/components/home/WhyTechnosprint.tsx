"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, Shield, TrendingUp, Target, CheckCircle2 } from "lucide-react";

export function WhyTechnosprint() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const pillars = [
    {
      step: "01",
      tag: "PROACTIVE",
      title: "We identify problems before they become business disruptions.",
      description:
        "Traditional IT waits for servers to crash and users to submit panic tickets. Technosprint operates continuous telemetry, synthetic health checks, and automated healing scripts that resolve potential failures long before your team notices an issue.",
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
    <section id="why-technosprint" className="relative py-28 bg-slate-50 border-t border-b border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest text-cyan-600 uppercase font-display">
            The Technosprint Difference
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-display">
            More than an IT provider.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            We operate as your dedicated strategic technology division, combining enterprise rigor with personalized partnership.
          </p>
        </div>

        {/* Interactive Story Progression */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Interactive Pillar Selectors */}
          <div className="lg:col-span-5 space-y-4">
            {pillars.map((pillar, idx) => {
              const isActive = activeTab === idx;
              return (
                <div
                  key={pillar.step}
                  onClick={() => setActiveTab(idx)}
                  className={`cursor-pointer rounded-2xl border p-6 transition-all duration-300 ${
                    isActive
                      ? "border-cyan-500/60 bg-white shadow-lg shadow-cyan-500/10 translate-x-2"
                      : "border-slate-200 bg-white/70 hover:border-slate-300 hover:bg-white opacity-90 hover:opacity-100"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="text-2xl font-extrabold font-display"
                      style={{ color: isActive ? pillar.color : "#94a3b8" }}
                    >
                      {pillar.step}
                    </span>
                    <span
                      className="text-xs font-bold tracking-wider uppercase px-2.5 py-0.5 rounded border"
                      style={{
                        borderColor: isActive ? `${pillar.color}50` : "#cbd5e1",
                        backgroundColor: isActive ? `${pillar.color}15` : "transparent",
                        color: isActive ? pillar.color : "#64748b",
                      }}
                    >
                      {pillar.tag}
                    </span>
                  </div>
                  <h4 className="mt-2 text-base font-bold text-slate-900 font-display">
                    {pillar.title}
                  </h4>
                </div>
              );
            })}
          </div>

          {/* Right: Dynamic Visual Story Stage */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.step}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12 shadow-xl space-y-8 relative overflow-hidden"
              >
                {/* Accent Watermark Number */}
                <div className="pointer-events-none absolute -right-6 -bottom-10 text-[180px] font-black text-slate-900/[0.04] font-display select-none">
                  {current.step}
                </div>

                {/* Top Badge */}
                <div className="flex items-center gap-3">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl border"
                    style={{
                      borderColor: `${current.color}50`,
                      backgroundColor: `${current.color}15`,
                      color: current.color,
                    }}
                  >
                    <CurrentIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      Pillar {current.step}
                    </span>
                    <h3
                      className="text-lg font-bold uppercase tracking-wider font-display"
                      style={{ color: current.color }}
                    >
                      {current.tag}
                    </h3>
                  </div>
                </div>

                {/* Main Headline & Description */}
                <div className="space-y-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display leading-snug">
                    {current.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {current.description}
                  </p>
                </div>

                {/* Visual Pillar Photo */}
                {current.imageUrl && (
                  <div className="relative group overflow-hidden rounded-xl border border-slate-200 shadow-md aspect-[16/8]">
                    <img
                      src={current.imageUrl}
                      alt={current.imageAlt || current.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3.5">
                      <p className="text-xs text-white/95 font-medium tracking-wide">
                        {current.imageAlt}
                      </p>
                    </div>
                  </div>
                )}

                {/* Checkpoint Highlights */}
                <div className="space-y-2.5 pt-2 border-t border-slate-100">
                  {current.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-600" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Stat Badge */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500">Target Standard:</span>
                    <p className="text-sm font-semibold text-slate-900">
                      {current.metrics}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
