import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Sparkles, Server, ShieldCheck, Settings, Cloud, Compass, Code2, LineChart, ShieldAlert, Database, Layers, Network, CloudLightning, ShoppingBag, Layout } from "lucide-react";
import { servicesData } from "@/data/servicesData";
import { ServiceTemplate } from "@/components/common/ServiceTemplate";
import { FinalCTA } from "@/components/home/FinalCTA";

interface Props {
  params: { category: string };
}

const categoryPillars: Record<string, { name: string; tagline: string; description: string; slugs: string[] }> = {
  integrated: {
    name: "Integrated IT Services",
    tagline: "Proactive infrastructure monitoring, 24/7 security defense, and ITIL v4 automation.",
    description: "Keep your technology running effortlessly. From routine maintenance to long-term cybersecurity, our integrated service management ensures operational efficiency and uninterrupted performance.",
    slugs: ["managed-it", "managed-security", "itsm"],
  },
  cloud: {
    name: "Cloud Services",
    tagline: "FinOps cost reduction, zero-downtime migration, disaster recovery, and Microsoft 365.",
    description: "Leverage the full power and agility of Microsoft Azure and AWS. Eliminate cloud waste, ensure business continuity, and scale compute resources on demand.",
    slugs: ["azure-cost-management", "cloud-data-migration", "disaster-recovery", "iaas", "microsoft-cloud"],
  },
  consulting: {
    name: "IT Consulting Services",
    tagline: "vCIO advisory, regulatory GRC audits, infrastructure assessments, and tech strategy.",
    description: "Align your technology roadmap directly with corporate revenue targets. We provide executive vCIO leadership, audit preparation, and architecture modernization.",
    slugs: ["grc", "it-assessment", "it-strategy", "technology-strategy"],
  },
  development: {
    name: "IT Development Services",
    tagline: "Bespoke web applications, high-concurrency e-commerce, cloud APIs, and system middleware.",
    description: "Engineer custom software tailored precisely to your commercial differentiators. We build responsive web applications, secure APIs, and transactional storefronts.",
    slugs: ["api-development", "cloud-integration", "ecommerce", "web-development"],
  },
};

export function generateStaticParams() {
  const categoryParams = [
    { category: "integrated" },
    { category: "cloud" },
    { category: "consulting" },
    { category: "development" },
  ];
  const serviceParams = Object.keys(servicesData).map((category) => ({ category }));
  return [...categoryParams, ...serviceParams];
}

export function generateMetadata({ params }: Props): Metadata {
  const cat = categoryPillars[params.category];
  if (cat) {
    return {
      title: `${cat.name} | Orbytes`,
      description: cat.description,
    };
  }

  const service = servicesData[params.category];
  if (service) {
    return {
      title: `${service.title} | Orbytes`,
      description: service.shortDescription,
    };
  }

  return { title: "Services | Orbytes" };
}

export default function CategoryHubPage({ params }: Props) {
  const service = servicesData[params.category];
  const isPillar = Boolean(categoryPillars[params.category]);

  if (!isPillar && service) {
    return <ServiceTemplate service={service} />;
  }

  const cat = categoryPillars[params.category];
  if (!cat) return notFound();

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

  return (
    <div className="pt-24 transition-colors duration-300">
      <section className="py-20 bg-[#030714] text-white border-b border-white/10 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[130px] pointer-events-none -z-10" />
        <div className="mx-auto max-w-4xl px-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-xs font-semibold text-cyan-300">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>Service Pillar</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display">
            {cat.name}
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {cat.description}
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#050814] text-white border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6">
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
                        <h2 className="text-lg font-bold text-white font-display line-clamp-1 group-hover:text-cyan-300 transition-colors">
                          {service.title}
                        </h2>
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
                      <span>View Specifications</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
