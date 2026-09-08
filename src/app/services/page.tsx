import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Server, ShieldCheck, Settings, Cloud, Compass, Code2, LineChart, ShieldAlert, Database, Layers, Network, CloudLightning, ShoppingBag, Layout } from "lucide-react";
import { servicesData } from "@/data/servicesData";
import { FinalCTA } from "@/components/home/FinalCTA";
import { SolutionsArchitectureVisual } from "@/components/visuals/services/SolutionsArchitectureVisual";

export const metadata: Metadata = {
  title: "Enterprise IT Services & Solutions | Orbytes",
  description: "Comprehensive enterprise IT services across Integrated IT, Cloud, IT Consulting, and IT Development.",
};

export default function ServicesIndexPage() {
  const iconMap: Record<string, React.ElementType> = {
    Server,
    ShieldCheck,
    Settings,
    Cloud,
    Compass,
    Code2,
    LineChart,
    ShieldAlert,
    Database,
    Layers,
    Network,
    CloudLightning,
    ShoppingBag,
    Layout,
  };

  const categories = [
    {
      id: "integrated",
      name: "Integrated IT Services",
      tagline: "Proactive infrastructure monitoring, 24/7 security defense, and ITIL v4 automation.",
      href: "/services/integrated",
      slugs: ["managed-it", "managed-security", "itsm"],
    },
    {
      id: "cloud",
      name: "Cloud Services",
      tagline: "FinOps cost reduction, zero-downtime migration, disaster recovery, and Microsoft 365.",
      href: "/services/cloud",
      slugs: ["azure-cost-management", "cloud-data-migration", "disaster-recovery", "iaas", "microsoft-cloud"],
    },
    {
      id: "consulting",
      name: "IT Consulting Services",
      tagline: "vCIO advisory, regulatory GRC audits, infrastructure assessments, and tech strategy.",
      href: "/services/consulting",
      slugs: ["grc", "it-assessment", "it-strategy", "technology-strategy"],
    },
    {
      id: "development",
      name: "IT Development Services",
      tagline: "Bespoke web applications, high-concurrency e-commerce, cloud APIs, and system middleware.",
      href: "/services/development",
      slugs: ["api-development", "cloud-integration", "ecommerce", "web-development"],
    },
  ];

  return (
    <div className="pt-24 transition-colors duration-300">
      {/* 1. Hero Section [DARK] */}
      <section className="py-20 bg-[#030714] text-white border-b border-white/10 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
        <div className="mx-auto max-w-4xl px-6 space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-xs font-semibold text-cyan-300">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>Complete Services Catalog</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display">
            Comprehensive IT Services
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Transform your business and accelerate growth with enterprise-grade solutions tailored to your operational needs.
          </p>
        </div>

        <div className="mx-auto max-w-5xl px-6 text-left">
          <SolutionsArchitectureVisual />
        </div>
      </section>

      {/* 2. Structured Pillars [DARK] */}
      <section className="py-24 bg-[#050814] text-white border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6 space-y-24">
          {categories.map((cat) => (
            <div key={cat.id} className="space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase font-display">
                    Pillar
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
                    {cat.name}
                  </h2>
                  <p className="text-sm text-slate-400 mt-1 max-w-xl">
                    {cat.tagline}
                  </p>
                </div>
                <Link
                  href={cat.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span>View All in {cat.name}</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {cat.slugs.map((slug) => {
                  const service = servicesData[slug];
                  if (!service) return null;
                  const Icon = iconMap[service.iconName] || ShieldCheck;
                  return (
                    <div
                      key={service.slug}
                      className="rounded-2xl border border-white/10 bg-[#081024] overflow-hidden flex flex-col justify-between shadow-lg hover:border-cyan-400/50 hover:bg-[#0c1630] transition-all duration-300 group"
                    >
                      <div>
                        {service.imageUrl && (
                          <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                            <img
                              src={service.imageUrl}
                              alt={service.imageAlt || service.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100"
                              loading="lazy"
                            />
                            <div className="absolute top-3 right-3">
                              <span className="text-[10px] uppercase font-bold text-cyan-300 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-cyan-500/30 shadow-sm">
                                {service.badge}
                              </span>
                            </div>
                          </div>
                        )}

                        <div className="p-6 space-y-4">
                          <div className="flex items-center gap-3">
                            <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-cyan-400 shrink-0 group-hover:border-cyan-400/40 group-hover:bg-cyan-500/10 transition-colors">
                              <Icon className="h-5 w-5" />
                            </div>
                            <h3 className="text-lg font-bold text-white font-display line-clamp-1 group-hover:text-cyan-300 transition-colors">
                              {service.title}
                            </h3>
                          </div>

                          <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                            {service.shortDescription}
                          </p>

                          <div className="pt-3 border-t border-white/10 space-y-1.5">
                            {service.capabilities.slice(0, 3).map((c, i) => (
                              <div key={i} className="text-xs text-slate-300 flex items-center gap-2">
                                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                                <span className="truncate">{c.title}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="p-6 pt-0">
                        <Link
                          href={service.href}
                          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-4 py-2.5 text-xs font-semibold shadow-md shadow-cyan-500/20 transition-all"
                        >
                          <span>Explore Solution</span>
                          <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
