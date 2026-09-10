"use client";

import React, { useState, useMemo, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
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
  ArrowRight,
  ArrowLeft,
  Sparkles,
} from "lucide-react";
import { industriesData, IndustryItem } from "@/data/industriesData";

const iconMap: Record<string, React.ElementType> = {
  // Business & Retail
  corporate: Building2,
  financial: Landmark,
  "retail-stores": ShoppingBag,
  "ecommerce-fulfillment": Truck,
  ecommerce: Truck,
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const [canScrollLeft, setCanScrollLeft] = useState<boolean>(false);
  const [canScrollRight, setCanScrollRight] = useState<boolean>(true);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  const filteredIndustries = useMemo(() => {
    if (activeCategory === "all") return allIndustries;
    return allIndustries.filter((item) => item.category === activeCategory);
  }, [activeCategory, allIndustries]);

  const updateScrollState = useCallback(() => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);

    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll > 0) {
      setScrollProgress(Math.min(1, Math.max(0, scrollLeft / maxScroll)));
    } else {
      setScrollProgress(0);
    }
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState, filteredIndustries]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const scrollAmount = Math.min(el.clientWidth * 0.8, 380);
    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleCategoryChange = (catId: string) => {
    setActiveCategory(catId);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  return (
    <section
      id="industries"
      className="relative py-20 sm:py-24 bg-white border-t border-b border-slate-200 scroll-mt-20 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-cyan-600 uppercase font-display">
              <Sparkles className="h-3.5 w-3.5 text-cyan-500" />
              <span>Domain Specialization</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-display leading-[1.12]">
              Technology that understands your industry.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
              Every sector operates under distinct regulatory frameworks, threat models, and operational rhythms. Discover how Orbytes tailors architecture for your sector.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 self-start md:self-end">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              aria-label="Previous industries"
              className={`h-11 w-11 rounded-full border border-slate-300 flex items-center justify-center transition-all duration-300 shadow-sm ${
                canScrollLeft
                  ? "bg-white text-slate-900 hover:bg-slate-900 hover:text-white hover:border-slate-900 active:scale-95"
                  : "bg-slate-50 text-slate-300 border-slate-200 cursor-not-allowed"
              }`}
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              aria-label="Next industries"
              className={`h-11 w-11 rounded-full border border-slate-300 flex items-center justify-center transition-all duration-300 shadow-sm ${
                canScrollRight
                  ? "bg-white text-slate-900 hover:bg-slate-900 hover:text-white hover:border-slate-900 active:scale-95"
                  : "bg-slate-50 text-slate-300 border-slate-200 cursor-not-allowed"
              }`}
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-4 scrollbar-none">
          {categoryTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleCategoryChange(tab.id)}
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 border shrink-0 ${
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
      </div>

      <div className="relative w-full">
        <div
          ref={scrollContainerRef}
          data-lenis-prevent
          className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-4 px-6 max-w-7xl mx-auto scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {filteredIndustries.map((item: IndustryItem) => {
            const Icon = iconMap[item.slug] || Building2;
            const primaryOutcome = item.outcomes?.[0];
            const displayCategory =
              item.category === "business-retail"
                ? "Business & Retail"
                : item.category === "healthcare-wellness"
                ? "Healthcare & Wellness"
                : item.category === "education-research"
                ? "Education & Research"
                : item.category === "manufacturing-industrial"
                ? "Manufacturing & Industrial"
                : item.category;

            const cardHref =
              item.href || `/industries/${item.category}/${item.slug}`;

            return (
              <Link
                key={item.slug}
                href={cardHref}
                className="group relative w-[290px] sm:w-[330px] md:w-[355px] h-[500px] sm:h-[540px] shrink-0 rounded-3xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-950 snap-start transition-all duration-500 hover:shadow-2xl hover:border-cyan-500/50 hover:-translate-y-2 flex flex-col justify-between p-6 text-white select-none"
              >
                {/* Photographic Background */}
                <img
                  src={item.imageUrl}
                  alt={item.imageAlt || item.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-[62%] object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-[0.85] group-hover:brightness-95"
                />

                {/* Card Top Vignette */}
                <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-black/80 via-black/40 to-transparent pointer-events-none z-[1]" />

                {/* Lower Half Dark Solid Backdrop with Soft Top Gradient */}
                <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-black via-slate-950 via-80% to-transparent pointer-events-none z-[1]" />

                {/* Signature TCS Glowing Harmonic Wave Ribbon */}
                <div className="absolute top-[46%] inset-x-0 h-20 pointer-events-none opacity-85 group-hover:opacity-100 transition-opacity z-[2]">
                  <svg
                    viewBox="0 0 350 70"
                    fill="none"
                    className="w-full h-full"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 40 C70 12, 130 58, 200 32 C260 10, 310 46, 350 25"
                      stroke="#00e5ff"
                      strokeWidth="2.2"
                      strokeOpacity="0.85"
                    />
                    <path
                      d="M0 48 C80 20, 140 52, 210 38 C270 24, 320 42, 350 34"
                      stroke="#38bdf8"
                      strokeWidth="1.4"
                      strokeOpacity="0.6"
                    />
                    <path
                      d="M0 34 C60 18, 150 64, 220 28 C280 2, 320 38, 350 20"
                      stroke="#818cf8"
                      strokeWidth="1"
                      strokeOpacity="0.45"
                    />
                    <path
                      d="M0 55 C90 32, 160 56, 230 44 C290 32, 330 48, 350 42"
                      stroke="#06b6d4"
                      strokeWidth="0.8"
                      strokeOpacity="0.35"
                    />
                  </svg>
                </div>

                {/* Top Row: Sector Badge & Outcome Metric */}
                <div className="relative z-10 flex items-center justify-between w-full">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[11px] font-semibold text-cyan-300 shadow-sm">
                    <Icon className="h-3 w-3 text-cyan-400" />
                    <span>{displayCategory}</span>
                  </span>

                  {primaryOutcome && (
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-950/80 backdrop-blur-md border border-cyan-400/40 text-[10px] font-bold text-cyan-300 font-mono shadow-sm">
                      {primaryOutcome.metric}
                    </span>
                  )}
                </div>

                {/* Bottom Content Area */}
                <div className="relative z-10 space-y-2.5 text-left pt-28">
                  <h3 className="text-2xl sm:text-[26px] font-bold text-white font-display leading-tight group-hover:text-cyan-300 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed opacity-90 group-hover:opacity-100">
                    {item.tagline}
                  </p>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                    <span className="inline-flex items-center gap-1.5">
                      <span>Explore Sector Blueprint</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </span>
                    {item.subSectors?.[0] && (
                      <span className="text-[11px] text-slate-400 font-normal truncate max-w-[120px]">
                        {item.subSectors[0]}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mx-auto max-w-7xl px-6 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="h-1.5 w-32 sm:w-44 bg-slate-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-slate-900 rounded-full transition-all duration-200"
                style={{
                  width: `${Math.max(15, scrollProgress * 100)}%`,
                }}
              />
            </div>
            <span className="text-xs text-slate-500 font-medium">
              Showing {filteredIndustries.length} Domain Solutions
            </span>
          </div>

          <Link
            href="/industries"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-cyan-600 hover:text-cyan-700 transition-colors group"
          >
            <span>View All 22 Industry Blueprints</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
