"use client";

import React, { useState } from "react";
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
  CheckCircle2,
} from "lucide-react";
import { servicesData } from "@/data/servicesData";

export function SolutionsShowcase() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const iconMap: Record<string, React.ElementType> = {
    ShieldCheck,
    Server,
    Cloud,
    Settings,
    Compass,
    Code2,
  };

  const solutionList = Object.values(servicesData);

  return (
    <section id="solutions" className="relative py-28 bg-[#050814] overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase font-display">
              Enterprise Portfolio
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
              Technology solutions built around your business.
            </h2>
            <p className="text-base text-slate-400 leading-relaxed">
              We design, implement, and manage integrated technology ecosystems that eliminate friction, protect critical assets, and accelerate commercial growth.
            </p>
          </div>
          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors shrink-0 group"
          >
            <span>View All Service Frameworks</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 6 High-Impact Interactive Solution Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionList.map((service) => {
            const Icon = iconMap[service.iconName] || ShieldCheck;
            const isHovered = hoveredCard === service.slug;

            return (
              <div
                key={service.slug}
                onMouseEnter={() => setHoveredCard(service.slug)}
                onMouseLeave={() => setHoveredCard(null)}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-[#091022] p-8 transition-all duration-500 hover:border-cyan-400/50 hover:bg-[#0c162e] hover:shadow-2xl hover:shadow-cyan-950/30"
              >
                {/* Top glow indicator */}
                <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="space-y-6">
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-slate-900 text-cyan-400 shadow-inner transition-all duration-300 group-hover:scale-105 group-hover:border-cyan-400/60 group-hover:shadow-[0_0_20px_rgba(0,229,255,0.3)]">
                      <Icon className="h-7 w-7" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wider text-cyan-300 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/20">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-xl font-bold text-white font-display transition-colors duration-300 group-hover:text-cyan-300">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Dynamic Capabilities Preview */}
                  <div className="space-y-2 pt-2 border-t border-white/5">
                    {service.capabilities.slice(0, 3).map((cap, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                        <span className="truncate">{cap.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-6 mt-6 border-t border-white/5">
                  <Link
                    href={`/solutions/${service.slug}`}
                    className="inline-flex items-center justify-between w-full text-sm font-semibold text-cyan-400 transition-colors duration-300 group-hover:text-cyan-300"
                  >
                    <span>Explore solution</span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-cyan-500/20 bg-cyan-950/30 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-cyan-500 group-hover:text-slate-950">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
