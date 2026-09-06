import { Metadata } from "next";
import Link from "next/link";
import { Sparkles, ArrowRight, Clock } from "lucide-react";
import { insightsData } from "@/data/insightsData";
import { FinalCTA } from "@/components/home/FinalCTA";
import { InsightsRadarVisual } from "@/components/visuals/insights/InsightsRadarVisual";

export const metadata: Metadata = {
  title: "Enterprise Insights & Thought Leadership | Technosprint",
  description: "Strategic technology perspectives on cybersecurity zero-trust, cloud FinOps, and IT service management from Technosprint.",
};

export default function InsightsHubPage() {
  return (
    <div className="pt-24 transition-colors duration-300">
      {/* 1. Header & Research Radar Cockpit [DARK] */}
      <section className="py-20 bg-[#030714] text-white border-b border-white/10 text-center">
        <div className="mx-auto max-w-4xl px-6 space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-xs font-semibold text-cyan-300">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>Technology Intelligence</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display">
            Insights & Thought Leadership
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Practical strategies, technical architecture guides, and operational frameworks for modern technology decision-makers.
          </p>
        </div>

        {/* Specialized Interactive Research Radar in Dark Room */}
        <div className="mx-auto max-w-7xl px-6">
          <InsightsRadarVisual />
        </div>
      </section>

      {/* 2. Articles Grid [LIGHT] */}
      <section className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold tracking-widest text-cyan-600 uppercase font-display">
              Latest Publications
            </span>
            <h2 className="text-3xl font-bold text-slate-900 font-display">
              Executive Briefings & Architecture Guides
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {insightsData.map((art) => (
              <Link
                key={art.slug}
                href={`/insights/${art.slug}`}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:border-cyan-400/50 hover:bg-white hover:-translate-y-1.5 hover:shadow-xl"
              >
                <div>
                  {art.imageUrl && (
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                      <img
                        src={art.imageUrl}
                        alt={art.imageAlt || art.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="font-bold text-[11px] text-cyan-900 uppercase tracking-wider bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-200 shadow-sm">
                          {art.category}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-8 space-y-4">
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span>{art.publishedDate}</span>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{art.readTime}</span>
                      </div>
                    </div>

                    <h2 className="text-xl font-bold text-slate-900 font-display leading-snug group-hover:text-cyan-600 transition-colors">
                      {art.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {art.summary}
                    </p>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-cyan-600 group-hover:text-cyan-700">
                    <span>Read Full Perspective</span>
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Final CTA [DARK] */}
      <FinalCTA />
    </div>
  );
}
