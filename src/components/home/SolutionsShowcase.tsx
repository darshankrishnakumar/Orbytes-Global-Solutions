"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Server,
  Cloud,
  Compass,
  Code2,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { servicesData } from "@/data/servicesData";

interface PillarConfig {
  id: "integrated" | "cloud" | "consulting" | "development";
  title: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  href: string;
  exploreLabel: string;
}

export function SolutionsShowcase() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const pillars: PillarConfig[] = [
    {
      id: "integrated",
      title: "Integrated IT Services",
      tagline: "Proactive Monitoring & Defense",
      description:
        "Proactive infrastructure monitoring, 24/7 technical helpdesk support, preventative maintenance, and automated ITIL v4 service delivery.",
      icon: Server,
      href: "/services/integrated",
      exploreLabel: "Explore Integrated IT",
    },
    {
      id: "cloud",
      title: "Cloud & Infrastructure",
      tagline: "FinOps & Workload Migration",
      description:
        "FinOps cloud cost reduction, zero-downtime migrations, disaster recovery resilience, and high-performance hybrid IaaS compute.",
      icon: Cloud,
      href: "/services/cloud",
      exploreLabel: "Explore Cloud & Infra",
    },
    {
      id: "consulting",
      title: "Strategic Consulting",
      tagline: "vCIO & Governance Strategy",
      description:
        "Align technology roadmaps with corporate revenue. Executive vCIO advisory, rigorous regulatory GRC audits, and IT assessments.",
      icon: Compass,
      href: "/services/consulting",
      exploreLabel: "Explore Consulting",
    },
    {
      id: "development",
      title: "Software & Apps",
      tagline: "Digital Platforms & APIs",
      description:
        "Bespoke enterprise web applications, high-concurrency e-commerce storefronts, secure API architectures, and systems integration.",
      icon: Code2,
      href: "/services/development",
      exploreLabel: "Explore Software & Apps",
    },
  ];

  const allSolutions = Object.values(servicesData);

  return (
    <section
      id="solutions"
      className="relative py-16 sm:py-20 bg-[#050814] overflow-hidden scroll-mt-20"
    >
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase font-display">
              Enterprise Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white font-display">
              Technology solutions built around your business.
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              We design, implement, and manage integrated technology ecosystems
              that eliminate friction, protect critical assets, and accelerate
              commercial growth.
            </p>
          </div>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors shrink-0 group"
          >
            <span>View All Service Frameworks</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 4 Segregated Pillar Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const categoryFrameworks = allSolutions.filter(
              (s) => s.category === pillar.id
            );

            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
                key={pillar.id}
                onMouseEnter={() => setHoveredCard(pillar.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-[#091022] p-5 sm:p-6 transition-all duration-300 hover:border-cyan-400/50 hover:bg-[#0c162e] hover:shadow-xl hover:shadow-cyan-950/30"
              >
                {/* Top glow indicator */}
                <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="space-y-4">
                  {/* Top Bar: Icon + Framework Count Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/10 bg-slate-900 text-cyan-400 shadow-inner transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_15px_rgba(0,229,255,0.3)] shrink-0">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-[10px] font-semibold tracking-wider text-cyan-300 bg-cyan-950/60 px-2.5 py-1 rounded-full border border-cyan-500/20 font-mono shrink-0">
                      {categoryFrameworks.length} Frameworks
                    </span>
                  </div>

                  {/* Title & Tagline & Description */}
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white font-display transition-colors duration-300 group-hover:text-cyan-300">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-medium text-cyan-400/90 mt-0.5">
                      {pillar.tagline}
                    </p>
                    <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Included Frameworks List */}
                  <div className="space-y-2 pt-3 border-t border-white/5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-mono block">
                      Included Frameworks
                    </span>
                    <ul className="space-y-1.5">
                      {categoryFrameworks.map((fw) => (
                        <li key={fw.slug}>
                          <Link
                            href={`/services/${pillar.id}/${fw.slug}`}
                            className="flex items-center gap-2 text-xs text-slate-300 hover:text-cyan-300 transition-colors group/item"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0 group-hover/item:scale-110 transition-transform" />
                            <span className="truncate">{fw.title}</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 mt-6 border-t border-white/5">
                  <Link
                    href={pillar.href}
                    className="inline-flex items-center justify-between w-full text-xs sm:text-sm font-semibold text-cyan-400 transition-colors duration-300 group-hover:text-cyan-300"
                  >
                    <span>{pillar.exploreLabel}</span>
                    <div className="flex h-7 w-7 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-950/30 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-cyan-500 group-hover:text-slate-950">
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
