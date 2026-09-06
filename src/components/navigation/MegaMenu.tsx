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
  Landmark,
  Factory,
  ShoppingBag,
  GraduationCap,
  Briefcase,
} from "lucide-react";

interface MegaMenuProps {
  activeTab: "solutions" | "industries" | null;
  onClose: () => void;
}

export function MegaMenu({ activeTab, onClose }: MegaMenuProps) {
  if (!activeTab) return null;

  const solutions = [
    {
      title: "Managed Security (MSSP)",
      description: "24/7 SOC defense, SIEM analytics, and regulatory compliance.",
      href: "/solutions/managed-security",
      icon: ShieldCheck,
      badge: "24/7 SOC",
    },
    {
      title: "Managed IT Services (MSP)",
      description: "Proactive infrastructure monitoring, SLA helpdesk, and maintenance.",
      href: "/solutions/managed-it",
      icon: Server,
      badge: "99.99% SLA",
    },
    {
      title: "Cloud & Data Migration",
      description: "Azure, AWS, zero-downtime migration, and FinOps cost governance.",
      href: "/solutions/cloud",
      icon: Cloud,
      badge: "Azure / AWS",
    },
    {
      title: "IT Service Management (ITSM)",
      description: "ITIL-compliant ticketing, incident response, and asset tracking.",
      href: "/solutions/itsm",
      icon: Settings,
      badge: "ITIL v4",
    },
    {
      title: "IT Strategy & Consulting",
      description: "vCIO leadership, GRC compliance audits, and tech roadmaps.",
      href: "/solutions/consulting",
      icon: Compass,
      badge: "GRC & vCIO",
    },
    {
      title: "Digital Solutions & APIs",
      description: "Custom enterprise web applications, APIs, and cloud microservices.",
      href: "/solutions/digital-solutions",
      icon: Code2,
      badge: "Modern Web",
    },
  ];

  const industries = [
    {
      name: "Healthcare & Life Sciences",
      description: "HIPAA-compliant cloud, EHR integration, and 24/7 clinical support.",
      href: "/industries/healthcare",
      icon: Stethoscope,
    },
    {
      name: "Financial Services & Banking",
      description: "High-availability financial networks, PCI-DSS, and fraud defense.",
      href: "/industries/financial-services",
      icon: Landmark,
    },
    {
      name: "Manufacturing & Industrial",
      description: "OT/SCADA network security, predictive maintenance, and floor uptime.",
      href: "/industries/manufacturing",
      icon: Factory,
    },
    {
      name: "Retail & E-commerce",
      description: "POS terminal resilience, LTE failover, and high-concurrency cloud.",
      href: "/industries/retail",
      icon: ShoppingBag,
    },
    {
      name: "Education & Research",
      description: "High-density campus Wi-Fi, LMS scalability, and FERPA privacy.",
      href: "/industries/education",
      icon: GraduationCap,
    },
    {
      name: "Professional Services",
      description: "Confidential document portals for legal, accounting, and logistics.",
      href: "/industries/professional-services",
      icon: Briefcase,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 8 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="absolute top-full left-0 right-0 border-t border-b border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#070d1e]/95 backdrop-blur-xl shadow-2xl shadow-black/10 dark:shadow-black/80"
      onMouseLeave={onClose}
    >
      <div className="mx-auto max-w-7xl px-6 py-8">
        {activeTab === "solutions" && (
          <div>
            <div className="mb-6 flex items-center justify-between border-b border-slate-200 dark:border-white/5 pb-4">
              <div>
                <span className="text-xs font-semibold tracking-wider text-cyan-600 dark:text-cyan-400 uppercase">
                  Enterprise Solutions
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                  Technology solutions built around your business
                </h3>
              </div>
              <Link
                href="/solutions"
                onClick={onClose}
                className="group flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 font-medium"
              >
                <span>View All Solutions Overview</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {solutions.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="group relative flex items-start gap-4 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50/70 dark:bg-white/[0.02] p-4 transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-50/80 dark:hover:bg-cyan-500/[0.04]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/80 text-cyan-600 dark:text-cyan-400 transition-colors duration-300 group-hover:border-cyan-400/50 group-hover:bg-cyan-100/60 dark:group-hover:bg-cyan-950/40">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300">
                          {item.title}
                        </h4>
                        <span className="text-[10px] font-medium text-cyan-700 dark:text-cyan-400/80 bg-cyan-100 dark:bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-300 dark:border-cyan-500/20">
                          {item.badge}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}

        {activeTab === "industries" && (
          <div>
            <div className="mb-6 flex items-center justify-between border-b border-slate-200 dark:border-white/5 pb-4">
              <div>
                <span className="text-xs font-semibold tracking-wider text-cyan-600 dark:text-cyan-400 uppercase">
                  Industry Specialization
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display">
                  Technology engineered for your specific regulatory environment
                </h3>
              </div>
              <Link
                href="/industries"
                onClick={onClose}
                className="group flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 font-medium"
              >
                <span>Explore All Industries</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {industries.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onClose}
                    className="group relative flex items-start gap-4 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50/70 dark:bg-white/[0.02] p-4 transition-all duration-300 hover:border-cyan-500/40 hover:bg-cyan-50/80 dark:hover:bg-cyan-500/[0.04]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/80 text-cyan-600 dark:text-cyan-400 transition-colors duration-300 group-hover:border-cyan-400/50 group-hover:bg-cyan-100/60 dark:group-hover:bg-cyan-950/40">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300">
                        {item.name}
                      </h4>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
