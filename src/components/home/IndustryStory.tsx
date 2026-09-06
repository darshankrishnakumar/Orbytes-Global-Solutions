"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Stethoscope,
  Landmark,
  Factory,
  ShoppingBag,
  GraduationCap,
  Briefcase,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { industriesData } from "@/data/industriesData";

export function IndustryStory() {
  const industries = Object.values(industriesData);
  const [selectedSlug, setSelectedSlug] = useState<string>(industries[0].slug);

  const activeIndustry = industriesData[selectedSlug] || industries[0];

  const iconMap: Record<string, React.ElementType> = {
    healthcare: Stethoscope,
    "financial-services": Landmark,
    manufacturing: Factory,
    retail: ShoppingBag,
    education: GraduationCap,
    "professional-services": Briefcase,
  };

  return (
    <section id="industries" className="relative py-28 bg-slate-50 border-t border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest text-cyan-600 uppercase font-display">
            Domain Specialization
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-display">
            Technology that understands your industry.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Every sector operates under distinct regulatory frameworks, threat models, and operational rhythms. Discover how Orbytes tailors architecture for your sector.
          </p>
        </div>

        {/* Master-Detail Interactive Split Component */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Vertical Interactive List */}
          <div className="lg:col-span-4 space-y-3">
            {industries.map((ind) => {
              const Icon = iconMap[ind.slug] || Briefcase;
              const isSelected = selectedSlug === ind.slug;

              return (
                <button
                  key={ind.slug}
                  onClick={() => setSelectedSlug(ind.slug)}
                  onMouseEnter={() => setSelectedSlug(ind.slug)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl text-left transition-all duration-300 border ${
                    isSelected
                      ? "bg-cyan-50 border-cyan-500 shadow-md translate-x-1"
                      : "bg-white border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900 shadow-sm"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                        isSelected
                          ? "border-cyan-500/50 bg-cyan-100 text-cyan-700"
                          : "border-slate-200 bg-slate-100 text-slate-600"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h4
                        className={`text-sm font-semibold transition-colors ${
                          isSelected ? "text-slate-900" : "text-slate-700"
                        }`}
                      >
                        {ind.name}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1">
                        {ind.tagline}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isSelected ? "text-cyan-600 translate-x-0" : "text-transparent -translate-x-2"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right: Dynamic Storytelling Panel */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry.slug}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="rounded-2xl border border-slate-200 bg-white p-8 md:p-10 shadow-xl space-y-8"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-6">
                  <div>
                    <span className="text-xs font-bold tracking-wider text-cyan-700 uppercase bg-cyan-100 px-3 py-1 rounded-full border border-cyan-300 inline-block mb-2">
                      {activeIndustry.badge}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                      {activeIndustry.heroHeadline}
                    </h3>
                  </div>
                  <Link
                    href={`/industries/${activeIndustry.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-700 transition-colors shrink-0 group"
                  >
                    <span>Full Blueprint</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Visual Technology Banner */}
                {activeIndustry.imageUrl && (
                  <div className="relative group overflow-hidden rounded-xl border border-slate-200 shadow-md aspect-[21/9]">
                    <img
                      src={activeIndustry.imageUrl}
                      alt={activeIndustry.imageAlt || activeIndustry.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                      <p className="text-xs text-white/95 font-medium tracking-wide">
                        {activeIndustry.imageAlt}
                      </p>
                    </div>
                  </div>
                )}

                {/* Challenges vs Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Challenges */}
                  <div className="rounded-xl border border-rose-200 bg-rose-50/70 p-5 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600">
                      <ShieldAlert className="h-4 w-4" />
                      <span>Key Sector Challenges</span>
                    </div>
                    <ul className="space-y-2 text-xs text-slate-700">
                      {activeIndustry.challenges.slice(0, 3).map((ch, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                          <span>
                            <strong className="text-slate-900">{ch.title}:</strong> {ch.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solution */}
                  <div className="rounded-xl border border-cyan-200 bg-cyan-50/70 p-5 space-y-3">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-600">
                      <Sparkles className="h-4 w-4" />
                      <span>Orbytes Architecture</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {activeIndustry.technosprintSolution}
                    </p>
                    <div className="pt-2 border-t border-cyan-200 flex flex-wrap gap-1.5">
                      {activeIndustry.subSectors.slice(0, 3).map((sub, i) => (
                        <span key={i} className="text-[10px] text-cyan-800 bg-cyan-100 px-2.5 py-1 rounded border border-cyan-300">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quantified Outcomes */}
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
                    <TrendingUp className="h-4 w-4 text-emerald-500" />
                    <span>Verified Business Outcomes</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {activeIndustry.outcomes.map((out, i) => (
                      <div key={i} className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-center">
                        <div className="text-2xl font-extrabold text-cyan-600 font-display">
                          {out.metric}
                        </div>
                        <div className="text-xs font-semibold text-slate-900 mt-1">
                          {out.label}
                        </div>
                        <p className="text-[11px] text-slate-500 mt-1">
                          {out.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="pt-4 border-t border-slate-200 flex justify-end">
                  <Link
                    href={`/industries/${activeIndustry.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300"
                  >
                    <span>Explore {activeIndustry.name} Solutions</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
