"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, CheckCircle2, AlertTriangle, Sparkles, Layers } from "lucide-react";
import { ServiceItem } from "@/data/servicesData";
import { FAQAccordion } from "./FAQAccordion";
import { FinalCTA } from "@/components/home/FinalCTA";
import { StructuredPageData } from "./StructuredPageData";

// Specialized Service Visuals
import { SecurityRadarVisual } from "@/components/visuals/services/SecurityRadarVisual";
import { InfrastructureVisual } from "@/components/visuals/services/InfrastructureVisual";
import { CloudStreamVisual } from "@/components/visuals/services/CloudStreamVisual";
import { ApiNetworkVisual } from "@/components/visuals/services/ApiNetworkVisual";
import { StrategyMatrixVisual } from "@/components/visuals/services/StrategyMatrixVisual";
import { WorkflowPipelineVisual } from "@/components/visuals/services/WorkflowPipelineVisual";

interface ServiceTemplateProps {
  service: ServiceItem;
}

export function ServiceTemplate({ service }: ServiceTemplateProps) {
  // Determine if this service has a dedicated Hero visual
  const renderHeroVisual = () => {
    switch (service.slug) {
      case "managed-security":
        return <SecurityRadarVisual />;
      case "managed-it":
        return <InfrastructureVisual />;
      case "cloud":
        return <CloudStreamVisual />;
      case "digital-solutions":
        return <ApiNetworkVisual />;
      default:
        return null;
    }
  };

  const heroVisual = renderHeroVisual();

  return (
    <div className="pt-24 transition-colors duration-300">
      <StructuredPageData
        title={service.title}
        url={service.href}
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: service.title, url: service.href },
        ]}
        faqs={service.faqs}
      />
      {/* 1. Service Hero [DARK] */}
      <section className="relative py-20 bg-[#030714] text-white overflow-hidden border-b border-white/10">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />

        <div className="mx-auto max-w-7xl px-6">
          <div className={`grid grid-cols-1 ${heroVisual ? "lg:grid-cols-12 gap-12 items-center" : "max-w-3xl"}`}>
            <div className={heroVisual ? "lg:col-span-6 space-y-6" : "space-y-6"}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-xs font-semibold text-cyan-300">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                <span>{service.badge}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display leading-[1.1]">
                {service.heroHeadline}
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed">
                {service.heroSubheadline}
              </p>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 hover:from-cyan-400 hover:to-blue-500 transition-all duration-300"
                >
                  <span>Request Assessment</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#capabilities"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-slate-300 hover:text-white hover:border-white/20 shadow-sm transition-all duration-300"
                >
                  <span>View Architecture</span>
                </a>
              </div>
            </div>

            {heroVisual && (
              <div className="lg:col-span-6 flex justify-center w-full">
                {heroVisual}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 2. The Problem Statement [LIGHT] */}
      <section className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-3xl border border-rose-200 bg-white p-8 md:p-12 shadow-md">
            {service.slug === "consulting" ? (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-rose-600">
                    <AlertTriangle className="h-5 w-5" />
                    <span>The Operational Challenge</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                    Why Traditional Approaches Fail
                  </h2>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {service.problemStatement}
                  </p>
                </div>
                <div className="lg:col-span-6 rounded-2xl bg-[#081026] p-4 border border-slate-200 shadow-xl">
                  <StrategyMatrixVisual />
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wider text-rose-600">
                    <AlertTriangle className="h-5 w-5" />
                    <span>The Operational Challenge</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                    Why Traditional Approaches Fail
                  </h2>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {service.problemStatement}
                  </p>
                </div>
                {service.imageUrl && (
                  <div className="lg:col-span-5 relative group overflow-hidden rounded-2xl shadow-xl border border-slate-200 aspect-[16/10]">
                    <img
                      src={service.imageUrl}
                      alt={service.imageAlt || service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-4">
                      <p className="text-xs text-slate-200 font-medium tracking-wide">
                        {service.imageAlt}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. Solution Overview & Capabilities [DARK] */}
      <section id="capabilities" className="py-24 bg-[#050814] text-white border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl mb-16 space-y-3">
            <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase font-display">
              Modular Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-display">
              Engineered Capabilities & Frameworks
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              {service.solutionOverview}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-[#081024] p-7 transition-all duration-300 hover:border-cyan-500/50 hover:bg-[#0c162e] shadow-sm hover:shadow-xl space-y-4"
              >
                <div className="h-10 w-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <Layers className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-white font-display">
                  {cap.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {cap.description}
                </p>
                <div className="pt-3 border-t border-white/5 space-y-2">
                  {cap.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. How It Works Process [LIGHT] */}
      <section className="py-24 bg-white text-slate-900 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold tracking-widest text-cyan-600 uppercase font-display">
              Execution Sequence
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display">
              How It Works
            </h2>
            <p className="text-slate-600 text-sm">
              Our structured 5-stage lifecycle for {service.title}.
            </p>
          </div>

          {/* Dedicated ITSM Workflow Pipeline Visual in Process Section */}
          {service.slug === "itsm" && (
            <div className="mb-14 rounded-2xl bg-[#081026] p-6 border border-slate-200 shadow-xl">
              <WorkflowPipelineVisual />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center space-y-3 shadow-sm hover:border-cyan-500/40 hover:bg-white transition-all duration-300"
              >
                <div className="text-2xl font-black text-cyan-600 font-display">
                  {step.step}
                </div>
                <h4 className="text-base font-bold text-slate-900 font-display">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Enterprise Benefits [DARK] */}
      <section className="py-24 bg-[#060b1e] text-white border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-4">
                <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase font-display">
                  Quantified Advantages
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-white font-display">
                  Commercial and Operational Value
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  By entrusting Orbytes with your {service.title}, your organization unlocks predictable resilience, reduced overhead, and faster speed-to-market.
                </p>
              </div>

              {service.imageUrl && (
                <div className="relative group overflow-hidden rounded-2xl border border-white/10 shadow-2xl aspect-[16/9] hidden sm:block">
                  <img
                    src={service.imageUrl}
                    alt={service.imageAlt || service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060b1e]/90 via-[#060b1e]/20 to-transparent flex items-end p-4">
                    <p className="text-xs text-cyan-300 font-medium">
                      {service.imageAlt}
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="lg:col-span-6 space-y-3">
              {service.benefits.map((benefit, bIdx) => (
                <div
                  key={bIdx}
                  className="flex items-start gap-3 p-4 rounded-xl border border-white/10 bg-[#091024] shadow-sm hover:border-cyan-500/30 transition-colors"
                >
                  <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-200">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Accordion [LIGHT] */}
      <FAQAccordion
        faqs={service.faqs}
        title={`Frequently Asked Questions: ${service.title}`}
        theme="light"
      />

      {/* 7. Final CTA [DARK] */}
      <FinalCTA />
    </div>
  );
}
