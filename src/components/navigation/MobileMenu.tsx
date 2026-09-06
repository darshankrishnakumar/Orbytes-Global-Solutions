"use client";

import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ShieldCheck, Server, Cloud, Settings, Compass, Code2 } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const quickLinks = [
    { title: "Managed Security (MSSP)", href: "/solutions/managed-security", icon: ShieldCheck },
    { title: "Managed IT Services (MSP)", href: "/solutions/managed-it", icon: Server },
    { title: "Cloud & Data Migration", href: "/solutions/cloud", icon: Cloud },
    { title: "IT Service Management (ITSM)", href: "/solutions/itsm", icon: Settings },
    { title: "IT Strategy & Consulting", href: "/solutions/consulting", icon: Compass },
    { title: "Digital Solutions & APIs", href: "/solutions/digital-solutions", icon: Code2 },
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
            <Link href="/" onClick={onClose} className="flex items-center gap-2">
              <span className="text-xl font-bold tracking-tight text-white font-display">
                ORBYTES GLOBAL
              </span>
              <div className="h-2 w-2 rounded-full bg-cyan-400" />
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
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-3">
                Core Solutions
              </div>
              <div className="space-y-2">
                {quickLinks.map((item) => {
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

            <div className="border-t border-white/10 pt-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-3">
                Company & Insights
              </div>
              <div className="grid grid-cols-2 gap-2">
                <Link
                  href="/industries"
                  onClick={onClose}
                  className="p-3 rounded-lg border border-white/10 text-sm text-slate-300 hover:text-white bg-white/[0.02]"
                >
                  Industries
                </Link>
                <Link
                  href="/about"
                  onClick={onClose}
                  className="p-3 rounded-lg border border-white/10 text-sm text-slate-300 hover:text-white bg-white/[0.02]"
                >
                  Our Story
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
                  Case Studies
                </Link>
                <Link
                  href="/insights"
                  onClick={onClose}
                  className="p-3 rounded-lg border border-white/10 text-sm text-slate-300 hover:text-white bg-white/[0.02]"
                >
                  Insights
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
              <span>Talk to an Expert</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
