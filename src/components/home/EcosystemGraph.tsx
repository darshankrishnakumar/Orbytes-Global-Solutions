"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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

export function EcosystemGraph() {
  const [activeCapability, setActiveCapability] = useState<string>("security");

  const capabilities = [
    {
      id: "security",
      name: "SECURITY",
      title: "Managed Security Services (MSSP)",
      icon: ShieldCheck,
      color: "#00e5ff",
      href: "/solutions/managed-security",
      subServices: [
        "24/7 Security Operations Center (SOC)",
        "SIEM Telemetry & Threat Ingestion",
        "AI-Driven Anomaly Detection",
        "Endpoint Detection & Response (EDR)",
        "Continuous Vulnerability Management",
        "Regulatory GRC (GDPR, HIPAA, PCI-DSS)",
      ],
    },
    {
      id: "cloud",
      name: "CLOUD",
      title: "Cloud & Data Migration",
      icon: Cloud,
      color: "#3b82f6",
      href: "/solutions/cloud",
      subServices: [
        "Zero-Downtime Data & Workload Migration",
        "Azure FinOps & Cloud Cost Governance",
        "Infrastructure as a Service (IaaS)",
        "Disaster Recovery as a Service (DRaaS)",
        "Microsoft Cloud & Modern Work 365",
        "Cloud Security Posture Management (CSPM)",
      ],
    },
    {
      id: "it",
      name: "MANAGED IT",
      title: "Managed IT Services (MSP)",
      icon: Server,
      color: "#10b981",
      href: "/solutions/managed-it",
      subServices: [
        "Proactive Remote Monitoring (RMM)",
        "24/7/365 Tier-1 to Tier-3 Helpdesk",
        "Air-Gapped Cloud Backup & Recovery",
        "Enterprise SD-WAN & Network Management",
        "Patch Management & Systems Hygiene",
        "Vendor Management & Hardware Procurement",
      ],
    },
    {
      id: "itsm",
      name: "ITSM",
      title: "IT Service Management (ITSM)",
      icon: Settings,
      color: "#a855f7",
      href: "/solutions/itsm",
      subServices: [
        "ITIL v4 Standardized Ticketing",
        "Change Advisory Board (CAB) Governance",
        "Configuration Management Database (CMDB)",
        "Root Cause Problem Analysis (RCA)",
        "Employee Self-Service Request Portals",
        "ServiceNow & Jira Service Management",
      ],
    },
    {
      id: "consulting",
      name: "CONSULTING",
      title: "IT Strategy & vCIO Advisory",
      icon: Compass,
      color: "#f59e0b",
      href: "/solutions/consulting",
      subServices: [
        "Virtual CIO (vCIO) Strategic Roadmaps",
        "Comprehensive IT Architecture Audits",
        "Governance, Risk & Compliance (GRC)",
        "Enterprise Disaster Recovery Planning",
        "Technology Budgeting & ROI Modeling",
        "M&A IT Technical Due Diligence",
      ],
    },
    {
      id: "digital",
      name: "DIGITAL",
      title: "Digital Solutions & Integrations",
      icon: Code2,
      color: "#ec4899",
      href: "/solutions/digital-solutions",
      subServices: [
        "Custom Web Application Development",
        "Cloud-Integrated Enterprise Software",
        "High-Throughput REST/GraphQL APIs",
        "Transactional E-Commerce Portals",
        "Legacy Application Modernization",
        "Automated CI/CD & DevOps Engineering",
      ],
    },
  ];

  const current = capabilities.find((c) => c.id === activeCapability) || capabilities[0];

  return (
    <section className="relative py-28 bg-[#040716] overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase font-display">
            Integrated Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display">
            One technology partner. Complete IT ecosystem.
          </h2>
          <p className="text-base text-slate-400 leading-relaxed">
            Eliminate vendor finger-pointing. Orbytes interconnects your entire technology fabric into one cohesive, resilient enterprise operation.
          </p>
        </div>

        {/* Zoho-Inspired Interactive Capability Wheel & Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Capability Node Matrix */}
          <div className="lg:col-span-6 space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Select an ecosystem capability to inspect connected sub-services:
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {capabilities.map((cap) => {
                const Icon = cap.icon;
                const isSelected = activeCapability === cap.id;

                return (
                  <button
                    key={cap.id}
                    onClick={() => setActiveCapability(cap.id)}
                    onMouseEnter={() => setActiveCapability(cap.id)}
                    className={`flex flex-col items-center justify-center p-5 rounded-2xl border transition-all duration-300 text-center ${
                      isSelected
                        ? "border-cyan-400 bg-[#0c1a36] shadow-xl shadow-cyan-950/50 scale-105"
                        : "border-white/5 bg-[#091024] hover:border-white/20 text-slate-400 hover:text-white"
                    }`}
                  >
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl mb-3"
                      style={{
                        backgroundColor: `${cap.color}15`,
                        color: cap.color,
                        borderColor: isSelected ? cap.color : "transparent",
                      }}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="text-xs font-bold font-display tracking-wider text-white">
                      {cap.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Dynamic Sub-Service Tree Explorer */}
          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="rounded-3xl border border-white/10 bg-[#081026] p-8 md:p-10 shadow-2xl space-y-6 relative overflow-hidden"
              >
                {/* Visual Connector Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-5">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-xl border"
                      style={{
                        borderColor: `${current.color}60`,
                        backgroundColor: `${current.color}15`,
                        color: current.color,
                      }}
                    >
                      <current.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold tracking-widest text-slate-400 uppercase">
                        Orbytes Connected Capability
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-white font-display">
                        {current.title}
                      </h3>
                    </div>
                  </div>
                  <Link
                    href={current.href}
                    className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                  >
                    <span>View Hub</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

                {/* Connected Sub-Services List */}
                <div className="space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block">
                    Integrated Sub-Services & Frameworks:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {current.subServices.map((sub, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 p-3 rounded-xl border border-white/5 bg-white/[0.02] text-xs font-medium text-slate-200"
                      >
                        <CheckCircle2
                          className="h-4 w-4 shrink-0"
                          style={{ color: current.color }}
                        />
                        <span>{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Hub CTA */}
                <div className="pt-4 border-t border-white/10 flex justify-end">
                  <Link
                    href={current.href}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-xs font-semibold text-white shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-blue-500 transition-colors"
                  >
                    <span>Explore {current.name} Solutions</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
