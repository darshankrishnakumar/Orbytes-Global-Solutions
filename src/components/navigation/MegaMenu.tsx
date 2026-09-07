"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Server,
  Cloud,
  Settings,
  Compass,
  Code2,
  ArrowRight,
  Stethoscope,
  Building2,
  Factory,
  GraduationCap,
  Layers,
  Sparkles,
} from "lucide-react";

interface MegaMenuProps {
  activeTab: "solutions" | "industries" | null;
  onClose: () => void;
}

export function MegaMenu({ activeTab, onClose }: MegaMenuProps) {
  if (!activeTab) return null;

  const servicePillars = [
    {
      id: "integrated",
      title: "Integrated IT Services",
      tagline: "Proactive infrastructure, SOC defense, ITIL automation",
      href: "/services/integrated",
      icon: Server,
      badge: "Managed IT",
      services: [
        { name: "Managed Security (MSSP)", href: "/services/integrated/managed-security" },
        { name: "Managed IT Services (MSP)", href: "/services/integrated/managed-it" },
        { name: "IT Service Management (ITSM)", href: "/services/integrated/itsm" },
      ],
    },
    {
      id: "cloud",
      title: "Cloud Services",
      tagline: "FinOps optimization, zero-downtime migration, IaaS",
      href: "/services/cloud",
      icon: Cloud,
      badge: "Cloud Scale",
      services: [
        { name: "Azure Cost Management", href: "/services/cloud/azure-cost-management" },
        { name: "Cloud & Data Migration", href: "/services/cloud/cloud-data-migration" },
        { name: "Disaster Recovery Services", href: "/services/cloud/disaster-recovery" },
        { name: "Infrastructure as a Service (IaaS)", href: "/services/cloud/iaas" },
        { name: "Microsoft Cloud Solutions", href: "/services/cloud/microsoft-cloud" },
      ],
    },
    {
      id: "consulting",
      title: "IT Consulting Services",
      tagline: "vCIO advisory, regulatory GRC audits, IT strategy",
      href: "/services/consulting",
      icon: Compass,
      badge: "Advisory",
      services: [
        { name: "Governance, Risk & Compliance (GRC)", href: "/services/consulting/grc" },
        { name: "IT Assessment Services", href: "/services/consulting/it-assessment" },
        { name: "IT Strategy & Consulting", href: "/services/consulting/it-strategy" },
        { name: "Technology Strategy Services", href: "/services/consulting/technology-strategy" },
      ],
    },
    {
      id: "development",
      title: "IT Development Services",
      tagline: "Modern web apps, enterprise APIs, cloud integration",
      href: "/services/development",
      icon: Code2,
      badge: "Digital Dev",
      services: [
        { name: "Web Development", href: "/services/development/web-development" },
        { name: "E-Commerce Platforms", href: "/services/development/ecommerce" },
        { name: "Cloud Integration Services", href: "/services/development/cloud-integration" },
        { name: "API Development & Architecture", href: "/services/development/api-development" },
      ],
    },
  ];

  const industrySectors = [
    {
      id: "business-retail",
      title: "Business & Retail",
      tagline: "High-density SD-WAN, POS resilience, e-commerce",
      href: "/industries/business-retail",
      icon: Building2,
      badge: "7 Verticals",
      subSectors: [
        { name: "Corporate Solutions", href: "/industries/business-retail/corporate" },
        { name: "Financial Services & Banking", href: "/industries/business-retail/financial" },
        { name: "Retail Stores & Chains", href: "/industries/business-retail/retail-stores" },
        { name: "E-Commerce & Digital Storefronts", href: "/industries/business-retail/ecommerce-fulfillment" },
        { name: "Real Estate & PropTech", href: "/industries/business-retail/real-estate" },
        { name: "Hospitality & Hotel Networks", href: "/industries/business-retail/hospitality" },
        { name: "Warehousing & Logistics", href: "/industries/business-retail/warehousing-logistics" },
      ],
    },
    {
      id: "healthcare-wellness",
      title: "Healthcare & Wellness",
      tagline: "HIPAA compliance, EHR uptime, clinical security",
      href: "/industries/healthcare-wellness",
      icon: Stethoscope,
      badge: "6 Verticals",
      subSectors: [
        { name: "Hospitals & Regional Health Systems", href: "/industries/healthcare-wellness/hospitals-clinics" },
        { name: "Specialty Clinics & Outpatient Centers", href: "/industries/healthcare-wellness/specialty-clinics" },
        { name: "Clinical Diagnostics & Pathology Labs", href: "/industries/healthcare-wellness/clinical-labs" },
        { name: "Dental Groups & Orthodontics", href: "/industries/healthcare-wellness/dental-practices" },
        { name: "Pharmacies & Prescription Hubs", href: "/industries/healthcare-wellness/pharmacies" },
        { name: "Wellness & Digital Health Fitness", href: "/industries/healthcare-wellness/wellness-fitness" },
      ],
    },
    {
      id: "education-research",
      title: "Education & Research",
      tagline: "Campus Wi-Fi 6E/7, CIPA filtering, research HPC",
      href: "/industries/education-research",
      icon: GraduationCap,
      badge: "5 Verticals",
      subSectors: [
        { name: "Colleges & Higher Education", href: "/industries/education-research/schools-universities" },
        { name: "K-12 School Districts & Academies", href: "/industries/education-research/k12-districts" },
        { name: "Research Institutes & Biotech Labs", href: "/industries/education-research/research-institutes" },
        { name: "EdTech & Online Learning Platforms", href: "/industries/education-research/online-learning" },
        { name: "Vocational & Professional Training", href: "/industries/education-research/training-centers" },
      ],
    },
    {
      id: "manufacturing-industrial",
      title: "Manufacturing & Industrial",
      tagline: "OT/SCADA air-gapping, CMMC, telemetry IoT",
      href: "/industries/manufacturing-industrial",
      icon: Factory,
      badge: "5 Verticals",
      subSectors: [
        { name: "Discrete & Process Manufacturing", href: "/industries/manufacturing-industrial/factories-production" },
        { name: "Aerospace & Defense Contractors", href: "/industries/manufacturing-industrial/aerospace-defense" },
        { name: "Energy, Utilities & Power Grids", href: "/industries/manufacturing-industrial/energy-utilities" },
        { name: "Mining & Precision Agriculture", href: "/industries/manufacturing-industrial/mining-agriculture" },
        { name: "Transportation & Fleet Networks", href: "/industries/manufacturing-industrial/transportation" },
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute top-full left-0 right-0 border-t border-b border-cyan-500/20 bg-[#030714] shadow-[0_25px_60px_rgba(0,0,0,0.9)] z-50"
      onMouseLeave={onClose}
    >
      <div className="mx-auto max-w-7xl px-6 py-8">
        {activeTab === "solutions" && (
          <div>
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4 gap-2">
              <div>
                <span className="text-xs font-bold tracking-wider text-cyan-400 uppercase font-display block">
                  Enterprise Solutions & Services
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white font-display mt-0.5">
                  16 Specialized Services Across 4 Core Technology Pillars
                </h3>
              </div>
              <Link
                href="/services"
                onClick={onClose}
                className="group inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 font-semibold transition-colors shrink-0"
              >
                <span>Browse All Services Catalog</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {servicePillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.id}
                    className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#070d1e] p-5 transition-all hover:border-cyan-400/50 hover:bg-[#0a142e] shadow-lg group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-cyan-400 group-hover:border-cyan-400/40 group-hover:bg-cyan-500/10 transition-colors">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <span className="text-[10px] font-bold text-cyan-300 bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-cyan-500/30 uppercase tracking-wide">
                          {pillar.badge}
                        </span>
                      </div>

                      <div>
                        <Link
                          href={pillar.href}
                          onClick={onClose}
                          className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors block font-display"
                        >
                          {pillar.title}
                        </Link>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                          {pillar.tagline}
                        </p>
                      </div>

                      <div className="pt-2.5 border-t border-white/10 space-y-1.5">
                        {pillar.services.map((svc) => (
                          <Link
                            key={svc.href}
                            href={svc.href}
                            onClick={onClose}
                            className="flex items-center text-xs text-slate-300 hover:text-cyan-300 hover:translate-x-1 transition-all py-0.5 font-medium group/link"
                          >
                            <span className="h-1 w-1 rounded-full bg-cyan-400 mr-2 shrink-0 group-hover/link:bg-cyan-300" />
                            <span className="truncate">{svc.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 mt-3 border-t border-white/10">
                      <Link
                        href={pillar.href}
                        onClick={onClose}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group-hover:underline"
                      >
                        <span>View Pillar Hub</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === "industries" && (
          <div>
            <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4 gap-2">
              <div>
                <span className="text-xs font-bold tracking-wider text-cyan-400 uppercase font-display block">
                  Industry Specialization
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white font-display mt-0.5">
                  22 Sector Architectures Across 4 Primary Industry Domains
                </h3>
              </div>
              <Link
                href="/industries"
                onClick={onClose}
                className="group inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 font-semibold transition-colors shrink-0"
              >
                <span>Explore All Industries</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {industrySectors.map((sector) => {
                const IconComponent = sector.icon;
                return (
                  <div
                    key={sector.id}
                    className="flex flex-col justify-between rounded-2xl border border-white/10 bg-[#070d1e] p-5 transition-all hover:border-cyan-400/50 hover:bg-[#0a142e] shadow-lg group"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-cyan-400 group-hover:border-cyan-400/40 group-hover:bg-cyan-500/10 transition-colors">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        <span className="text-[10px] font-bold text-cyan-300 bg-cyan-950/80 px-2.5 py-0.5 rounded-full border border-cyan-500/30 uppercase tracking-wide">
                          {sector.badge}
                        </span>
                      </div>

                      <div>
                        <Link
                          href={sector.href}
                          onClick={onClose}
                          className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors block font-display"
                        >
                          {sector.title}
                        </Link>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                          {sector.tagline}
                        </p>
                      </div>

                      <div className="pt-2.5 border-t border-white/10 space-y-1.5">
                        {sector.subSectors.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={onClose}
                            className="flex items-center text-xs text-slate-300 hover:text-cyan-300 hover:translate-x-1 transition-all py-0.5 font-medium group/link"
                          >
                            <span className="h-1 w-1 rounded-full bg-cyan-400 mr-2 shrink-0 group-hover/link:bg-cyan-300" />
                            <span className="truncate">{sub.name}</span>
                          </Link>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 mt-3 border-t border-white/10">
                      <Link
                        href={sector.href}
                        onClick={onClose}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 group-hover:underline"
                      >
                        <span>View Sector Overview</span>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

