import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Sparkles } from "lucide-react";
import { industriesData } from "@/data/industriesData";
import { IndustryTemplate } from "@/components/common/IndustryTemplate";
import { FinalCTA } from "@/components/home/FinalCTA";

interface Props {
  params: { category: string };
}

const categoryInfo: Record<string, { name: string; tagline: string; description: string }> = {
  "business-retail": {
    name: "Business & Retail",
    tagline: "Corporate operations, logistics Wi-Fi, high-volume POS, and e-commerce.",
    description: "Specialized IT solutions engineered for enterprise headquarters, distribution centers, real estate firms, and retail storefronts.",
  },
  "healthcare-wellness": {
    name: "Healthcare & Wellness",
    tagline: "HIPAA compliance, EHR integration, LIMS genomics, and telehealth.",
    description: "Mission-critical, compliant technology infrastructure for hospitals, diagnostic laboratories, pharmacies, and wellness providers.",
  },
  "education-research": {
    name: "Education & Research",
    tagline: "Campus Wi-Fi 6E/7, student device fleets, HPC clusters, and EdTech.",
    description: "Scalable educational infrastructure supporting K-12 districts, universities, supercomputing laboratories, and digital archives.",
  },
  "manufacturing-industrial": {
    name: "Manufacturing & Industrial",
    tagline: "Shop-floor OT/SCADA air-gapping, CMMC compliance, and remote jobsite 5G.",
    description: "Ruggedized industrial networks and operational technology security for factories, aerospace contractors, and critical utility grids.",
  },
};

export function generateStaticParams() {
  const categoryParams = [
    { category: "business-retail" },
    { category: "healthcare-wellness" },
    { category: "education-research" },
    { category: "manufacturing-industrial" },
  ];
  const industryParams = Object.keys(industriesData).map((category) => ({ category }));
  const all = [...categoryParams, ...industryParams];
  return Array.from(new Set(all.map((item) => item.category))).map((category) => ({ category }));
}

export function generateMetadata({ params }: Props): Metadata {
  const cat = categoryInfo[params.category];
  if (cat) {
    return {
      title: `${cat.name} Solutions | Orbytes`,
      description: cat.description,
    };
  }

  const ind = industriesData[params.category];
  if (ind) {
    return {
      title: `${ind.name} IT Architecture | Orbytes`,
      description: ind.tagline,
    };
  }

  return { title: "Industries | Orbytes" };
}

export default function IndustryCategoryPage({ params }: Props) {
  const isCategory = Boolean(categoryInfo[params.category]);
  const industry = industriesData[params.category];

  if (!isCategory && industry) {
    return <IndustryTemplate industry={industry} />;
  }

  const cat = categoryInfo[params.category];
  if (!cat) return notFound();

  const subIndustries = Object.values(industriesData).filter(
    (item) => item.category === params.category
  );

  return (
    <div className="pt-24 transition-colors duration-300">
      <section className="py-20 bg-[#030714] text-white border-b border-white/10 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />
        <div className="mx-auto max-w-4xl px-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-xs font-semibold text-cyan-300">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>Industry Sector</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display">
            {cat.name}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {cat.description}
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subIndustries.map((ind) => (
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
                    <h2 className="text-xl font-bold text-slate-900 font-display group-hover:text-cyan-600 transition-colors">
                      {ind.name}
                    </h2>
                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {ind.tagline}
                    </p>

                    <div className="pt-3 border-t border-slate-100 space-y-1.5">
                      {ind.capabilities.slice(0, 3).map((c, i) => (
                        <div key={i} className="text-xs text-slate-700 flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 shrink-0" />
                          <span className="truncate">{c.title}</span>
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
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
