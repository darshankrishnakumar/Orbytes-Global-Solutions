"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Trophy, ShieldCheck, CheckCircle2 } from "lucide-react";
import { caseStudiesData } from "@/data/caseStudiesData";

export function CaseStudyHero() {
  const [selectedCase, setSelectedCase] = useState<number>(0);
  const current = caseStudiesData[selectedCase];

  return (
    <section className="relative py-28 bg-[#050814] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase font-display">
              Proven Enterprise Impact
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
              Customer Success Stories
            </h2>
            <p className="text-base text-slate-400 leading-relaxed">
              Real-world transformations across manufacturing, legal, and retail sectors backed by verified SLAs and data.
            </p>
          </div>
          <Link
            href="/success"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors shrink-0 group"
          >
            <span>View All Case Studies</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Featured Cinematic Showcase Card */}
        <div className="rounded-3xl border border-white/10 bg-[#081026] p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Top Tags & Switchers */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/20 uppercase tracking-wider">
                {current.clientIndustry}
              </span>
              <span className="text-xs text-slate-400">
                {current.clientType}
              </span>
            </div>

            {/* Case Study Switcher Buttons */}
            <div className="flex items-center gap-2">
              {caseStudiesData.map((cs, idx) => (
                <button
                  key={cs.slug}
                  onClick={() => setSelectedCase(idx)}
                  className={`px-3 py-1 text-xs font-semibold rounded-lg border transition-colors ${
                    selectedCase === idx
                      ? "bg-cyan-500 text-slate-950 border-cyan-400"
                      : "bg-white/[0.02] text-slate-400 border-white/10 hover:border-white/20"
                  }`}
                >
                  Case 0{idx + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-display leading-tight">
                {current.title}
              </h3>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-400 block mb-1">
                    The Challenge:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {current.challenge}
                  </p>
                </div>

                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                    The Orbytes Solution:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {current.solution}
                  </p>
                </div>

                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                    Measurable Impact:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {current.impact}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-2">
                {current.tags.map((t, i) => (
                  <span key={i} className="text-[11px] text-slate-400 bg-slate-900/80 px-2.5 py-1 rounded border border-white/5">
                    #{t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Quantified Metrics & Photography */}
            <div className="lg:col-span-5 space-y-6">
              {current.imageUrl && (
                <div className="relative group overflow-hidden rounded-2xl border border-white/10 shadow-xl aspect-[16/9] bg-slate-900/60">
                  <img
                    key={current.slug}
                    src={current.imageUrl}
                    alt={current.imageAlt || current.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                    loading="eager"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#081026] via-[#081026]/30 to-transparent flex items-end p-4">
                    <p className="text-xs text-cyan-300 font-medium line-clamp-2">
                      {current.imageAlt}
                    </p>
                  </div>
                </div>
              )}

              <div className="rounded-2xl border border-cyan-500/20 bg-gradient-to-b from-cyan-950/20 to-[#070e24] p-8 text-center space-y-6">
                <div className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                  Key Transformation Metrics
                </div>
                <div className="space-y-6">
                  {current.metrics.map((m, i) => (
                    <div key={i} className="border-b border-white/5 pb-4 last:border-0 last:pb-0">
                      <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-400 font-display">
                        {m.value}
                      </div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-300 mt-1">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/success"
                  className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300"
                >
                  <span>Read Full Case Study</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
