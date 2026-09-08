"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  Landmark,
  ShoppingBag,
  Truck,
  Building,
  Hotel,
  Warehouse,
  Stethoscope,
  Activity,
  HeartPulse,
  Pill,
  Dumbbell,
  GraduationCap,
  School,
  FlaskConical,
  Laptop,
  Award,
  Factory,
  Plane,
  Zap,
  Pickaxe,
  Briefcase,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { industriesData } from "@/data/industriesData";

const iconMap: Record<string, React.ElementType> = {
  // Business & Retail
  corporate: Building2,
  financial: Landmark,
  "retail-stores": ShoppingBag,
  "ecommerce-fulfillment": Truck,
  "real-estate": Building,
  hospitality: Hotel,
  "warehousing-logistics": Warehouse,

  // Healthcare & Wellness
  "hospitals-clinics": Stethoscope,
  "specialty-clinics": Activity,
  "clinical-labs": FlaskConical,
  "dental-practices": HeartPulse,
  pharmacies: Pill,
  "wellness-fitness": Dumbbell,

  // Education & Research
  "schools-universities": GraduationCap,
  "k12-districts": School,
  "research-institutes": FlaskConical,
  "online-learning": Laptop,
  "training-centers": Award,

  // Manufacturing & Industrial
  "factories-production": Factory,
  "aerospace-defense": Plane,
  "energy-utilities": Zap,
  "mining-agriculture": Pickaxe,
  transportation: Truck,
};

const categoryTabs: { id: string; label: string; count: number }[] = [
  { id: "all", label: "All Sectors", count: 22 },
  { id: "business-retail", label: "Business & Retail", count: 7 },
  { id: "healthcare-wellness", label: "Healthcare", count: 6 },
  { id: "education-research", label: "Education", count: 5 },
  { id: "manufacturing-industrial", label: "Industrial", count: 4 },
];

export function IndustryStory() {
  const allIndustries = useMemo(() => Object.values(industriesData), []);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedSlug, setSelectedSlug] = useState<string>(allIndustries[0].slug);

  const filteredIndustries = useMemo(() => {
    if (activeCategory === "all") return allIndustries;
    return allIndustries.filter((item) => item.category === activeCategory);
  }, [activeCategory, allIndustries]);

  const activeIndustry =
    industriesData[selectedSlug] || filteredIndustries[0] || allIndustries[0];

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    if (catId !== "all") {
      const matching = allIndustries.filter((item) => item.category === catId);
      if (matching.length > 0 && !matching.some((m) => m.slug === selectedSlug)) {
        setSelectedSlug(matching[0].slug);
      }
    }
  };

  return (
    <section
      id="industries"
      className="relative py-12 sm:py-16 bg-slate-50 border-t border-b border-slate-200 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <span className="text-xs font-bold tracking-widest text-cyan-600 uppercase font-display">
            Domain Specialization
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 font-display">
            Technology that understands your industry.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Every sector operates under distinct regulatory frameworks, threat models, and operational rhythms. Discover how Orbytes tailors architecture for your sector.
          </p>
        </div>

        {/* Master-Detail Interactive Split Component */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Left: Scrollable Interactive List with Category Filters */}
          <div className="lg:col-span-5 space-y-2.5">
            {/* Category Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 custom-scrollbar">
              {categoryTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleCategoryChange(tab.id)}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 border shrink-0 ${
                    activeCategory === tab.id
                      ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                      : "bg-white text-slate-600 hover:text-slate-900 border-slate-200 hover:border-slate-300 shadow-sm"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                      activeCategory === tab.id
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Counter bar */}
            <div className="flex items-center justify-between text-[11px] text-slate-500 px-1">
              <span>Showing {filteredIndustries.length} industries</span>
              <span className="text-cyan-600 font-medium">
                Scroll to explore ↓
              </span>
            </div>

            {/* Scrollable Container with Lenis Prevent */}
            <div
              data-lenis-prevent
              className="max-h-[460px] xl:max-h-[480px] overflow-y-auto overscroll-contain pr-2 space-y-2 custom-scrollbar"
            >
              {filteredIndustries.map((ind) => {
                const Icon = iconMap[ind.slug] || Briefcase;
                const isSelected = selectedSlug === ind.slug;

                return (
                  <button
                    key={ind.slug}
                    onClick={() => setSelectedSlug(ind.slug)}
                    onMouseEnter={() => setSelectedSlug(ind.slug)}
                    className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all duration-200 border ${
                      isSelected
                        ? "bg-cyan-50 border-cyan-500 shadow-sm translate-x-0.5"
                        : "bg-white border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900 shadow-xs"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors ${
                          isSelected
                            ? "border-cyan-500/50 bg-cyan-100 text-cyan-700"
                            : "border-slate-200 bg-slate-100 text-slate-600"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 pr-1">
                        <h4
                          className={`text-xs sm:text-sm font-semibold transition-colors truncate ${
                            isSelected
                              ? "text-slate-900 font-bold"
                              : "text-slate-800"
                          }`}
                        >
                          {ind.name}
                        </h4>
                        <p className="text-[11px] text-slate-500 truncate">
                          {ind.tagline}
                        </p>
                      </div>
                    </div>
                    <ArrowRight
                      className={`h-3.5 w-3.5 shrink-0 transition-transform duration-200 ${
                        isSelected
                          ? "text-cyan-600 translate-x-0"
                          : "text-transparent -translate-x-2"
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Sticky Dynamic Storytelling Panel - Compact */}
          <div className="lg:col-span-7 lg:sticky lg:top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndustry.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6 shadow-lg space-y-4"
              >
                {/* Header */}
                <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
                  <div>
                    <span className="text-[10px] font-bold tracking-wider text-cyan-700 uppercase bg-cyan-50 px-2.5 py-0.5 rounded-full border border-cyan-200 inline-block mb-1">
                      {activeIndustry.badge}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display line-clamp-1">
                      {activeIndustry.heroHeadline}
                    </h3>
                  </div>
                  <Link
                    href={`/industries/${activeIndustry.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-600 hover:text-cyan-700 transition-colors shrink-0 group"
                  >
                    <span>Full Blueprint</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>

                {/* Visual Technology Banner - Compact */}
                {activeIndustry.imageUrl && (
                  <div className="relative group overflow-hidden rounded-xl border border-slate-200 shadow-xs h-28 sm:h-32 w-full">
                    <img
                      src={activeIndustry.imageUrl}
                      alt={activeIndustry.imageAlt || activeIndustry.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-2.5">
                      <p className="text-[11px] text-white/95 font-medium tracking-wide line-clamp-1">
                        {activeIndustry.imageAlt}
                      </p>
                    </div>
                  </div>
                )}

                {/* Challenges vs Solution - Compact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {/* Challenges */}
                  <div className="rounded-xl border border-rose-200 bg-rose-50/70 p-3 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-rose-600">
                      <ShieldAlert className="h-3.5 w-3.5 shrink-0" />
                      <span>Key Sector Challenges</span>
                    </div>
                    <ul className="space-y-1 text-xs text-slate-700">
                      {activeIndustry.challenges.slice(0, 2).map((ch, i) => (
                        <li key={i} className="flex items-start gap-1.5 leading-snug">
                          <span className="h-1.5 w-1.5 rounded-full bg-rose-500 mt-1 shrink-0" />
                          <span className="line-clamp-2">
                            <strong className="text-slate-900 font-semibold">
                              {ch.title}:
                            </strong>{" "}
                            {ch.description}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solution */}
                  <div className="rounded-xl border border-cyan-200 bg-cyan-50/70 p-3 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-cyan-600">
                      <Sparkles className="h-3.5 w-3.5 shrink-0" />
                      <span>Orbytes Architecture</span>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed line-clamp-2">
                      {activeIndustry.orbytesSolution}
                    </p>
                    <div className="pt-1.5 border-t border-cyan-200/80 flex flex-wrap gap-1">
                      {activeIndustry.subSectors.slice(0, 3).map((sub, i) => (
                        <span
                          key={i}
                          className="text-[9px] text-cyan-800 bg-cyan-100 px-2 py-0.5 rounded border border-cyan-200 font-medium"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quantified Outcomes - Compact */}
                <div className="pt-0.5">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    <TrendingUp className="h-3.5 w-3.5 text-emerald-500" />
                    <span>Verified Business Outcomes</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {activeIndustry.outcomes.map((out, i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-slate-200 bg-slate-50 p-2 text-center"
                      >
                        <div className="text-base sm:text-lg font-extrabold text-cyan-600 font-display">
                          {out.metric}
                        </div>
                        <div className="text-[10px] font-semibold text-slate-900 mt-0.5 line-clamp-1">
                          {out.label}
                        </div>
                        <p className="text-[9px] text-slate-500 mt-0.5 line-clamp-1">
                          {out.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Button - Compact */}
                <div className="pt-2 border-t border-slate-100 flex justify-end">
                  <Link
                    href={`/industries/${activeIndustry.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-xs font-semibold text-white shadow-md shadow-cyan-500/20 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300"
                  >
                    <span>Explore {activeIndustry.name} Solutions</span>
                    <ArrowRight className="h-3.5 w-3.5" />
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
