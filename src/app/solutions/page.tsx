import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Layers, ShieldCheck, Server, Cloud, Settings, Compass, Code2 } from "lucide-react";
import { servicesData } from "@/data/servicesData";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SolutionsMatrixVisual } from "@/components/visuals/services/SolutionsMatrixVisual";

export const metadata: Metadata = {
  title: "Enterprise Solutions & Services | Technosprint",
  description: "Explore Technosprint's complete enterprise technology suite: MSSP cybersecurity, 24/7 Managed IT, Cloud, ITSM, and IT Consulting.",
};

export default function SolutionsHubPage() {
  const list = Object.values(servicesData);
  const iconMap: Record<string, React.ElementType> = {
    ShieldCheck,
    Server,
    Cloud,
    Settings,
    Compass,
    Code2,
  };

  return (
    <div className="pt-24 transition-colors duration-300">
      {/* 1. Header & Solutions Constellation [DARK] */}
      <section className="py-20 bg-[#030714] text-white border-b border-white/10 text-center">
        <div className="mx-auto max-w-4xl px-6 space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-xs font-semibold text-cyan-300">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>Integrated Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display">
            Enterprise Solutions Portfolio
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Comprehensive technology services engineered to secure, scale, and accelerate your organization without compromise.
          </p>
        </div>

        {/* Specialized Interactive Service Mesh Constellation in Dark Room */}
        <div className="mx-auto max-w-7xl px-6">
          <SolutionsMatrixVisual />
        </div>
      </section>

      {/* 2. Grid of Solutions [LIGHT] */}
      <section className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold tracking-widest text-cyan-600 uppercase font-display">
              Core Capabilities
            </span>
            <h2 className="text-3xl font-bold text-slate-900 font-display">
              Structured Service Offerings
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {list.map((service) => {
              const Icon = iconMap[service.iconName] || ShieldCheck;
              return (
                <div
                  key={service.slug}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden flex flex-col justify-between shadow-sm hover:border-cyan-400/50 hover:bg-white transition-all duration-300 hover:shadow-xl group"
                >
                  <div>
                    {service.imageUrl && (
                      <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                        <img
                          src={service.imageUrl}
                          alt={service.imageAlt || service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute top-3 right-3">
                          <span className="text-[10px] uppercase font-bold text-cyan-900 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-200 shadow-sm">
                            {service.badge}
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
                          {service.title}
                        </h2>
                      </div>

                      <p className="text-sm text-slate-600 leading-relaxed">
                        {service.shortDescription}
                      </p>

                      <div className="pt-3 border-t border-slate-100 space-y-1.5">
                        {service.capabilities.slice(0, 3).map((c, i) => (
                          <div key={i} className="text-xs text-slate-700 flex items-center gap-2">
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-600 shrink-0" />
                            <span className="truncate">{c.title}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-8 pt-0">
                    <Link
                      href={`/solutions/${service.slug}`}
                      className="inline-flex items-center justify-between w-full pt-4 border-t border-slate-100 text-sm font-semibold text-cyan-600 hover:text-cyan-700 group-hover:translate-x-0.5 transition-all"
                    >
                      <span>View Architecture & Scope</span>
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
