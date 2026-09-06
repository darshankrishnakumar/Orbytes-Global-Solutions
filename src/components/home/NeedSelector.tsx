"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldAlert,
  ServerCog,
  CloudUpload,
  Workflow,
  Code,
  Lightbulb,
  ArrowRight,
} from "lucide-react";

export function NeedSelector() {
  const needs = [
    {
      id: "protect",
      title: "Protect My Business",
      category: "Cybersecurity & MSSP",
      description: "24/7 SOC threat monitoring, endpoint defense, zero-trust protection, and incident containment.",
      href: "/solutions/managed-security",
      icon: ShieldAlert,
      accent: "from-cyan-500/20 to-blue-600/20",
      borderHover: "hover:border-cyan-500/60 dark:hover:border-cyan-400/60",
      iconColor: "text-cyan-600 dark:text-cyan-400",
    },
    {
      id: "manage",
      title: "Manage My IT",
      category: "24/7 Managed IT (MSP)",
      description: "Proactive infrastructure monitoring, 99.99% uptime SLAs, helpdesk, and reliable ongoing support.",
      href: "/solutions/managed-it",
      icon: ServerCog,
      accent: "from-emerald-500/20 to-teal-600/20",
      borderHover: "hover:border-emerald-500/60 dark:hover:border-emerald-400/60",
      iconColor: "text-emerald-600 dark:text-emerald-400",
    },
    {
      id: "cloud",
      title: "Move to the Cloud",
      category: "Cloud Migration & FinOps",
      description: "Seamless workload migration to Azure & AWS, disaster recovery, and FinOps cost governance.",
      href: "/solutions/cloud",
      icon: CloudUpload,
      accent: "from-blue-500/20 to-indigo-600/20",
      borderHover: "hover:border-blue-500/60 dark:hover:border-blue-400/60",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      id: "modernize",
      title: "Modernize Operations",
      category: "ITSM & ITIL Workflows",
      description: "Structured ticketing pipelines, automated service delivery, and enterprise asset governance.",
      href: "/solutions/itsm",
      icon: Workflow,
      accent: "from-purple-500/20 to-pink-600/20",
      borderHover: "hover:border-purple-500/60 dark:hover:border-purple-400/60",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
      id: "build",
      title: "Build Digital Solutions",
      category: "Custom Web & APIs",
      description: "Custom web applications, cloud-native architectures, API middleware, and e-commerce platforms.",
      href: "/solutions/digital-solutions",
      icon: Code,
      accent: "from-pink-500/20 to-rose-600/20",
      borderHover: "hover:border-pink-500/60 dark:hover:border-pink-400/60",
      iconColor: "text-pink-600 dark:text-pink-400",
    },
    {
      id: "strategy",
      title: "Develop a Technology Strategy",
      category: "vCIO & GRC Advisory",
      description: "Strategic technology roadmaps, regulatory compliance audits, and architectural risk assessments.",
      href: "/solutions/consulting",
      icon: Lightbulb,
      accent: "from-amber-500/20 to-orange-600/20",
      borderHover: "hover:border-amber-500/60 dark:hover:border-amber-400/60",
      iconColor: "text-amber-600 dark:text-amber-400",
    },
  ];

  return (
    <section className="relative py-24 bg-white border-t border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest text-cyan-600 uppercase font-display">
            Strategic Discovery
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-display">
            What does your business need next?
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Select your primary objective to explore tailored enterprise solutions, architectures, and real client outcomes.
          </p>
        </div>

        {/* 6 Interactive Choice Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {needs.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                href={item.href}
                data-cursor
                data-cursor-text="EXPLORE"
                className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/70 p-8 transition-all duration-300 hover:bg-white hover:-translate-y-1.5 shadow-sm hover:shadow-xl hover:border-cyan-500/50`}
              >
                {/* Ambient glow in corner */}
                <div
                  className={`pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${item.accent} blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />

                <div className="relative z-10 flex flex-col h-full justify-between space-y-6">
                  <div>
                    {/* Header with Icon & Category */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm transition-transform duration-300 group-hover:scale-110">
                        <Icon className={`h-6 w-6 ${item.iconColor}`} />
                      </div>
                      <span className="text-[11px] font-semibold tracking-wider uppercase text-slate-600 border border-slate-200 bg-white px-3 py-1 rounded-full shadow-xs">
                        {item.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-cyan-600">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  {/* Interactive Action Hook */}
                  <div className="pt-4 border-t border-slate-200/80 flex items-center justify-between text-sm font-semibold text-slate-700 transition-colors duration-300 group-hover:text-cyan-600">
                    <span>Explore Capabilities</span>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white transition-transform duration-300 group-hover:translate-x-1.5 group-hover:border-cyan-500/50 group-hover:bg-cyan-50">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
