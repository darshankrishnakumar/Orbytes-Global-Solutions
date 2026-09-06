import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Stethoscope, Landmark, Factory, ShoppingBag, GraduationCap, Briefcase } from "lucide-react";
import { industriesData } from "@/data/industriesData";
import { FinalCTA } from "@/components/home/FinalCTA";
import { IndustryImpactVisual } from "@/components/visuals/industries/IndustryImpactVisual";

export const metadata: Metadata = {
  title: "Industry Verticals & Sector Solutions | Orbytes",
  description: "Specialized IT architectures for Healthcare, Financial Services, Manufacturing, Retail, Education, and Professional Services.",
};

export default function IndustriesHubPage() {
  const list = Object.values(industriesData);
  const iconMap: Record<string, React.ElementType> = {
    healthcare: Stethoscope,
    "financial-services": Landmark,
    manufacturing: Factory,
    retail: ShoppingBag,
    education: GraduationCap,
    "professional-services": Briefcase,
  };

  return (
    <div className="pt-24 transition-colors duration-300">
      {/* 1. Header & Compliance Impact Radar [DARK] */}
      <section className="py-20 bg-[#030714] text-white border-b border-white/10 text-center">
        <div className="mx-auto max-w-4xl px-6 space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-xs font-semibold text-cyan-300">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>Sector Specialization</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display">
            Industry Solutions
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Custom-tailored IT architectures designed around specific regulatory compliance regimes and mission-critical workflows.
          </p>
        </div>

        {/* Specialized Interactive Sector Compliance Matrix in Dark Room */}
        <div className="mx-auto max-w-7xl px-6">
          <IndustryImpactVisual />
        </div>
      </section>

      {/* 2. Industry Grid [LIGHT] */}
      <section className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold tracking-widest text-cyan-600 uppercase font-display">
              Vertical Architectures
            </span>
            <h2 className="text-3xl font-bold text-slate-900 font-display">
              Tailored Domain Frameworks
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {list.map((ind) => {
              const Icon = iconMap[ind.slug] || Briefcase;
              return (
                <div
                  key={ind.slug}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col justify-between shadow-sm hover:border-cyan-400/50 hover:bg-white transition-all duration-300 hover:shadow-xl group"
                >
                  <div>
                    {ind.imageUrl && (
                      <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                        <img
                          src={ind.imageUrl}
                          alt={ind.imageAlt || ind.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute top-3 right-3">
                          <span className="text-[10px] uppercase font-bold text-cyan-900 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-200 shadow-sm">
                            {ind.badge}
                          </span>
                        </div>
                      </div>
                    )}

                    <div className="p-8 space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center text-cyan-600 shrink-0">
                          <Icon className="h-5 w-5" />
                        </div>
                        <h2 className="text-xl font-bold text-slate-900 font-display">
                          {ind.name}
                        </h2>
                      </div>

                      <p className="text-sm text-slate-600 leading-relaxed">
                        {ind.tagline}
                      </p>

                      <div className="pt-3 border-t border-slate-100 space-y-1.5">
                        {ind.subSectors.slice(0, 3).map((sub, i) => (
                          <div key={i} className="text-xs text-slate-700 flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-600 shrink-0" />
                            <span>{sub}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-8 pt-0">
                    <Link
                      href={`/industries/${ind.slug}`}
                      className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-100 text-sm font-semibold text-cyan-600 hover:text-cyan-700 group-hover:translate-x-0.5 transition-all"
                    >
                      <span>View Industry Architecture</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Final CTA [DARK] */}
      <FinalCTA />
    </div>
  );
}
