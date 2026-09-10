import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Building2, Stethoscope, GraduationCap, Factory } from "lucide-react";
import { industriesData } from "@/data/industriesData";
import { FinalCTA } from "@/components/home/FinalCTA";
import { IndustryImpactVisual } from "@/components/visuals/industries/IndustryImpactVisual";

export const metadata: Metadata = {
  title: "Industry Verticals & Sector Solutions | Orbytes",
  description: "Specialized IT architectures for Business & Retail, Healthcare & Wellness, Education & Research, and Manufacturing & Industrial.",
};

export default function IndustriesHubPage() {
  const categories = [
    {
      id: "business-retail",
      name: "Business & Retail",
      tagline: "High-density wireless, unified enterprise SD-WAN, and zero-trust cloud architectures.",
      href: "/industries/business-retail",
      icon: Building2,
      slugs: [
        "corporate",
        "financial",
        "retail-stores",
        "ecommerce-fulfillment",
        "real-estate",
        "hospitality",
        "warehousing-logistics",
      ],
    },
    {
      id: "healthcare-wellness",
      name: "Healthcare & Wellness",
      tagline: "HIPAA-compliant hosting, continuous clinical uptime, and medical device segmentation.",
      href: "/industries/healthcare-wellness",
      icon: Stethoscope,
      slugs: [
        "hospitals-clinics",
        "specialty-clinics",
        "clinical-labs",
        "dental-practices",
        "pharmacies",
        "wellness-fitness",
      ],
    },
    {
      id: "education-research",
      name: "Education & Research",
      tagline: "High-density campus Wi-Fi, CIPA content filtering, and secure LMS environments.",
      href: "/industries/education-research",
      icon: GraduationCap,
      slugs: [
        "schools-universities",
        "k12-districts",
        "research-institutes",
        "online-learning",
        "training-centers",
      ],
    },
    {
      id: "manufacturing-industrial",
      name: "Manufacturing & Industrial",
      tagline: "OT/IT convergence, Purdue Model segmentation, SCADA isolation, and industrial IoT.",
      href: "/industries/manufacturing-industrial",
      icon: Factory,
      slugs: [
        "factories-production",
        "aerospace-defense",
        "energy-utilities",
        "mining-agriculture",
        "transportation",
      ],
    },
  ];

  return (
    <div className="pt-24 transition-colors duration-300">
      {/* 1. Header & Compliance Impact Radar [DARK] */}
      <section className="py-20 bg-[#030714] text-white border-b border-white/10 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="mx-auto max-w-4xl px-6 space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-xs font-semibold text-cyan-300">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>Sector Specialization</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display">
            Industry Solutions
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Custom-tailored IT architectures engineered for specific regulatory compliance regimes, mission-critical workflows, and high-availability operations across 22 industry sectors.
          </p>
        </div>

        {/* Specialized Interactive Sector Compliance Matrix in Dark Room */}
        <div className="mx-auto max-w-7xl px-6">
          <IndustryImpactVisual />
        </div>
      </section>

      {/* 2. Structured Industry Sectors [LIGHT] */}
      <section className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 space-y-24">
          {categories.map((cat) => {
            const CatIcon = cat.icon;
            return (
              <div key={cat.id} className="space-y-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
                  <div className="flex items-start gap-4">
                    <div className="h-12 w-12 rounded-xl bg-cyan-50 border border-cyan-200 flex items-center justify-center text-cyan-600 shrink-0 mt-1">
                      <CatIcon className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold tracking-widest text-cyan-600 uppercase font-display">
                        Sector
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                        {cat.name}
                      </h2>
                      <p className="text-sm text-slate-600 mt-1 max-w-xl">
                        {cat.tagline}
                      </p>
                    </div>
                  </div>
                  <Link
                    href={cat.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-600 hover:text-cyan-700 transition-colors"
                  >
                    <span>View Sector Overview</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {cat.slugs.map((slug) => {
                    const ind = industriesData[slug];
                    if (!ind) return null;
                    return (
                      <div
                        key={ind.slug}
                        className="rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col justify-between shadow-sm hover:border-cyan-500/40 hover:shadow-xl transition-all duration-300 group"
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

                          <div className="p-6 space-y-4">
                            <h3 className="text-xl font-bold text-slate-900 font-display group-hover:text-cyan-600 transition-colors">
                              {ind.name}
                            </h3>

                            <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                              {ind.tagline}
                            </p>

                            <div className="pt-3 border-t border-slate-100 space-y-1.5">
                              {ind.capabilities.slice(0, 3).map((cap, i) => (
                                <div key={i} className="text-xs text-slate-700 flex items-center gap-2">
                                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 shrink-0" />
                                  <span className="truncate">{cap.title}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="p-6 pt-0">
                          <Link
                            href={ind.href}
                            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-4 py-2.5 text-xs font-semibold shadow-md shadow-cyan-500/20 transition-all"
                          >
                            <span>View Industry Architecture</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Final CTA [DARK] */}
      <FinalCTA />
    </div>
  );
}
