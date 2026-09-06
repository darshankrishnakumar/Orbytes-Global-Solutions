import { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { caseStudiesData } from "@/data/caseStudiesData";
import { FinalCTA } from "@/components/home/FinalCTA";
import { RoiTelemetryVisual } from "@/components/visuals/success/RoiTelemetryVisual";

export const metadata: Metadata = {
  title: "Customer Success & Case Studies | Orbytes",
  description: "Explore how Orbytes transformed IT operations, secured legal data, and scaled retail clouds with verified metrics.",
};

export default function SuccessPage() {
  return (
    <div className="pt-24 transition-colors duration-300">
      {/* 1. Header & ROI Telemetry Cockpit [DARK] */}
      <section className="py-20 bg-[#030714] text-white border-b border-white/10 text-center">
        <div className="mx-auto max-w-4xl px-6 space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-xs font-semibold text-cyan-300">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>Proven Business Impact</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display">
            Customer Success Stories
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Discover how organizations in manufacturing, professional services, and retail achieved operational excellence with Orbytes.
          </p>
        </div>

        {/* Specialized Interactive Client ROI Dashboard in Dark Room */}
        <div className="mx-auto max-w-7xl px-6">
          <RoiTelemetryVisual />
        </div>
      </section>

      {/* 2. Case Studies List [LIGHT] */}
      <section className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold tracking-widest text-cyan-600 uppercase font-display">
              Case Summaries
            </span>
            <h2 className="text-3xl font-bold text-slate-900 font-display">
              Verified Client Outcomes
            </h2>
          </div>

          <div className="space-y-12">
            {caseStudiesData.map((cs) => (
              <div
                key={cs.slug}
                className="rounded-3xl border border-slate-200 bg-white p-8 md:p-12 shadow-md hover:shadow-xl transition-shadow space-y-8"
              >
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 bg-cyan-100 px-3 py-1 rounded-full border border-cyan-200">
                      {cs.clientIndustry}
                    </span>
                    <span className="text-xs text-slate-500 ml-3">
                      {cs.clientType}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-emerald-600 font-semibold">
                    <ShieldCheck className="h-4 w-4" />
                    <span>Verified Client Outcome</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  <div className="lg:col-span-8 space-y-6">
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                      {cs.title}
                    </h2>

                    <div className="space-y-4">
                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-rose-600 block mb-1">
                          The Challenge:
                        </span>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {cs.challenge}
                        </p>
                      </div>

                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-cyan-700 block mb-1">
                          The Solution:
                        </span>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {cs.solution}
                        </p>
                      </div>

                      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                        <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block mb-1">
                          The Impact:
                        </span>
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {cs.impact}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-wrap gap-2">
                      {cs.tags.map((t, i) => (
                        <span key={i} className="text-xs text-slate-600 bg-slate-100 px-3 py-1 rounded border border-slate-200 font-medium">
                          #{t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics & Environment Photo */}
                  <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
                    {cs.imageUrl && (
                      <div className="relative group overflow-hidden rounded-2xl border border-slate-200 shadow-md aspect-[16/10]">
                        <img
                          src={cs.imageUrl}
                          alt={cs.imageAlt || cs.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3.5">
                          <p className="text-xs text-white/95 font-medium">
                            {cs.imageAlt}
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="rounded-2xl border border-cyan-200 bg-cyan-50/70 p-6 text-center space-y-6 shadow-sm">
                      <span className="text-xs font-bold uppercase tracking-wider text-cyan-800 block">
                        Measurable Impact
                      </span>
                      <div className="space-y-6">
                        {cs.metrics.map((m, mIdx) => (
                          <div key={mIdx} className="space-y-1">
                            <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 font-display">
                              {m.value}
                            </div>
                            <div className="text-xs text-slate-700 font-semibold">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Final CTA [DARK] */}
      <FinalCTA />
    </div>
  );
}
