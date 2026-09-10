"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Server, Cloud, Compass, Code2, Building2, Stethoscope, GraduationCap, Factory, ChevronDown } from "lucide-react";
import { BrandLogo } from "@/components/common/BrandLogo";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [openSection, setOpenSection] = useState<"services" | "industries" | null>("services");

  const servicePillars = [
    { title: "Integrated IT Services", href: "/services/integrated", icon: Server },
    { title: "Cloud Services", href: "/services/cloud", icon: Cloud },
    { title: "IT Consulting Services", href: "/services/consulting", icon: Compass },
    { title: "IT Development Services", href: "/services/development", icon: Code2 },
  ];

  const industrySectors = [
    { title: "Business & Retail", href: "/industries/business-retail", icon: Building2 },
    { title: "Healthcare & Wellness", href: "/industries/healthcare-wellness", icon: Stethoscope },
    { title: "Education & Research", href: "/industries/education-research", icon: GraduationCap },
    { title: "Manufacturing & Industrial", href: "/industries/manufacturing-industrial", icon: Factory },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-[#050814]/98 backdrop-blur-2xl lg:hidden flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
            <Link href="/" onClick={onClose} className="group flex items-center">
              <BrandLogo size="md" />
            </Link>
            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="p-2 text-slate-300 hover:text-white rounded-lg border border-white/10"
                aria-label="Close menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>

          {/* Scrollable links */}
          <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
            {/* Services Section */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <Link
                  href="/services"
                  onClick={onClose}
                  className="text-xs font-semibold uppercase tracking-wider text-cyan-400 hover:underline"
                >
                  Services Catalog
                </Link>
                <Link
                  href="/services"
                  onClick={onClose}
                  className="text-[11px] text-slate-400 hover:text-cyan-300"
                >
                  View All (16) →
                </Link>
              </div>
              <div className="space-y-2">
                {servicePillars.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-white/[0.03] text-slate-200 hover:border-cyan-500/40 hover:bg-cyan-500/[0.05]"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-cyan-400" />
                        <span className="text-sm font-medium">{item.title}</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-slate-400" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Industries Section */}
            <div className="border-t border-white/10 pt-4">
              <div className="flex items-center justify-between mb-3">
                <Link
                  href="/industries"
                  onClick={onClose}
                  className="text-xs font-semibold uppercase tracking-wider text-cyan-400 hover:underline"
                >
                  Industry Sectors
                </Link>
                <Link
                  href="/industries"
                  onClick={onClose}
                  className="text-[11px] text-slate-400 hover:text-cyan-300"
                >
                  View All (22) →
                </Link>
              </div>
              <div className="space-y-2">
                {industrySectors.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={onClose}
                      className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-white/[0.03] text-slate-200 hover:border-cyan-500/40 hover:bg-cyan-500/[0.05]"
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-cyan-400" />
                        <span className="text-sm font-medium">{item.title}</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-slate-400" />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Company & Insights */}
            <div className="border-t border-white/10 pt-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
                Company & Insights
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/about"
                  onClick={onClose}
                  className="p-3 rounded-lg border border-white/10 text-sm text-slate-300 hover:text-white bg-white/[0.02]"
                >
                  About Story
                </Link>
                <Link
                  href="/about/leadership"
                  onClick={onClose}
                  className="p-3 rounded-lg border border-white/10 text-sm text-slate-300 hover:text-white bg-white/[0.02]"
                >
                  Leadership
                </Link>
                <Link
                  href="/about/partners"
                  onClick={onClose}
                  className="p-3 rounded-lg border border-white/10 text-sm text-slate-300 hover:text-white bg-white/[0.02]"
                >
                  Partners
                </Link>
                <Link
                  href="/success"
                  onClick={onClose}
                  className="p-3 rounded-lg border border-white/10 text-sm text-slate-300 hover:text-white bg-white/[0.02]"
                >
                  Success Stories
                </Link>
                <Link
                  href="/insights"
                  onClick={onClose}
                  className="p-3 rounded-lg border border-white/10 text-sm text-slate-300 hover:text-white bg-white/[0.02]"
                >
                  Insights & Blog
                </Link>
                <Link
                  href="/privacy"
                  onClick={onClose}
                  className="p-3 rounded-lg border border-white/10 text-sm text-slate-300 hover:text-white bg-white/[0.02]"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="p-6 border-t border-white/10 bg-[#070b19]">
            <Link
              href="/contact"
              onClick={onClose}
              className="flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-blue-500"
            >
              <span>Schedule Architecture Consultation</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
