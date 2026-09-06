"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldAlert, Sparkles, TrendingUp, CheckCircle2, Building } from "lucide-react";
import { IndustryItem } from "@/data/industriesData";
import { FAQAccordion } from "./FAQAccordion";
import { FinalCTA } from "@/components/home/FinalCTA";

// Specialized Industry Visuals
import { HealthcareVisual } from "@/components/visuals/industries/HealthcareVisual";
import { FinanceVisual } from "@/components/visuals/industries/FinanceVisual";
import { ManufacturingVisual } from "@/components/visuals/industries/ManufacturingVisual";
import { RetailVisual } from "@/components/visuals/industries/RetailVisual";
import { EducationVisual } from "@/components/visuals/industries/EducationVisual";
import { ProfessionalVisual } from "@/components/visuals/industries/ProfessionalVisual";

interface IndustryTemplateProps {
  industry: IndustryItem;
}

export function IndustryTemplate({ industry }: IndustryTemplateProps) {
  // Determine if this industry has a dedicated Hero visual
  const renderHeroVisual = () => {
    switch (industry.slug) {
      case "healthcare":
        return <HealthcareVisual />;
      case "manufacturing":
        return <ManufacturingVisual />;
      case "education":
        return <EducationVisual />;
      default:
        return null;
    }
  };

  // Determine if this industry has a Challenge/Architecture section visual
  const renderChallengeVisual = () => {
    switch (industry.slug) {
      case "financial-services":
        return <FinanceVisual />;
      case "retail":
        return <RetailVisual />;
      case "professional-services":
        return <ProfessionalVisual />;
      default:
        return null;
    }
  };

  const heroVisual = renderHeroVisual();
  const challengeVisual = renderChallengeVisual();

  return (
    <div className="pt-24 transition-colors duration-300">
      {/* 1. Industry Hero [DARK] */}
      <section className="relative py-20 bg-[#030714] text-white overflow-hidden border-b border-white/10">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

        <div className="mx-auto max-w-7xl px-6">
          <div className={`grid grid-cols-1 ${heroVisual || industry.imageUrl ? "lg:grid-cols-12 gap-12 items-center" : "max-w-3xl"}`}>
            <div className={heroVisual || industry.imageUrl ? "lg:col-span-6 space-y-6" : "space-y-6"}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-xs font-semibold text-cyan-300">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                <span>{industry.badge}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display leading-[1.1]">
                {industry.heroHeadline}
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed">
                {industry.heroSubheadline}
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300"
                >
                  <span>Consult Industry Architect</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            {heroVisual ? (
              <div className="lg:col-span-6 flex justify-center w-full">
                {heroVisual}
              </div>
            ) : industry.imageUrl ? (
              <div className="lg:col-span-6 relative group overflow-hidden rounded-2xl border border-white/15 shadow-2xl aspect-[16/10]">
                <img
                  src={industry.imageUrl}
                  alt={industry.imageAlt || industry.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030714]/90 via-[#030714]/20 to-transparent flex items-end p-4">
                  <p className="text-xs text-cyan-300 font-medium">
                    {industry.imageAlt}
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      {/* 2. Challenges & Solution Matrix [LIGHT] */}
      <section className="py-24 bg-white text-slate-900 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Challenges */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-600">
                <ShieldAlert className="h-4 w-4" />
                <span>Sector Obstacles & Vulnerabilities</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                Key Industry Challenges
              </h2>
              <div className="space-y-4">
                {industry.challenges.map((ch, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-rose-200 bg-rose-50/70 p-5 space-y-1.5 shadow-sm"
                  >
                    <h3 className="text-sm font-bold text-slate-900">
                      {ch.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {ch.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Technosprint Architecture */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-600">
                <Sparkles className="h-4 w-4" />
                <span>Technosprint Architecture</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                How Technosprint Solves This
              </h2>

              {/* Dedicated Specialized Challenge Animation for Finance, Retail, Professional OR Photo for Healthcare, Manufacturing, Education */}
              {challengeVisual ? (
                <div className="mb-6 rounded-2xl bg-[#081026] p-4 border border-slate-200 shadow-xl">
                  {challengeVisual}
                </div>
              ) : industry.imageUrl ? (
                <div className="mb-6 relative group overflow-hidden rounded-2xl border border-slate-200 shadow-xl aspect-[16/9]">
                  <img
                    src={industry.imageUrl}
                    alt={industry.imageAlt || industry.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-4">
                    <p className="text-xs text-slate-200 font-medium tracking-wide">
                      {industry.imageAlt}
                    </p>
                  </div>
                </div>
              ) : null}

              <div className="rounded-3xl border border-cyan-200 bg-slate-50 p-8 space-y-6 shadow-sm">
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {industry.technosprintSolution}
                </p>

                <div className="space-y-3 pt-4 border-t border-slate-200">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 block">
                    Domain Capabilities:
                  </span>
                  {industry.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-cyan-600 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-slate-900">{cap.title}:</strong> {cap.description}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <span className="text-xs font-semibold text-slate-600 block mb-2">
                    Sub-Sectors Served:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {industry.subSectors.map((sub, i) => (
                      <span key={i} className="text-xs text-cyan-800 bg-cyan-100 px-3 py-1 rounded-full border border-cyan-200 font-medium">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Verified Outcomes [DARK] */}
      <section className="py-20 bg-[#050814] text-white border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase font-display">
              Quantified Impact
            </span>
            <h2 className="text-3xl font-bold text-white font-display">
              Measurable Business Outcomes
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {industry.outcomes.map((out, i) => (
              <div
                key={i}
                className="rounded-2xl border border-white/10 bg-[#081024] p-8 text-center space-y-2 shadow-sm hover:border-cyan-500/30 transition-colors"
              >
                <div className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-display">
                  {out.metric}
                </div>
                <div className="text-sm font-bold text-white uppercase tracking-wider">
                  {out.label}
                </div>
                <p className="text-xs text-slate-400">
                  {out.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FAQs [LIGHT] */}
      <FAQAccordion
        faqs={industry.faqs}
        title={`Frequently Asked Questions: ${industry.name}`}
        theme="light"
      />

      {/* 5. Final CTA [DARK] */}
      <FinalCTA />
    </div>
  );
}
