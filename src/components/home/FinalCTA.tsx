"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="relative py-32 bg-enterprise-grid overflow-hidden transition-colors duration-300">
      {/* Dramatic ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/15 via-blue-600/10 to-transparent rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="mx-auto max-w-5xl px-6 text-center space-y-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-300 dark:border-cyan-500/30 bg-cyan-100/80 dark:bg-cyan-950/40 text-xs font-semibold text-cyan-800 dark:text-cyan-300 backdrop-blur-md shadow-sm">
          <Sparkles className="h-3.5 w-3.5 text-cyan-600 dark:text-cyan-400" />
          <span>Take the Next Strategic Leap</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white font-display leading-[1.1]">
          Ready to make technology work harder for your business?
        </h2>

        <p className="text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Let’s discuss your technology environment, cybersecurity challenges, and next growth opportunity. Schedule a zero-obligation architecture review with our senior team.
        </p>

        {/* CTA Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-cyan-500/25 transition-all duration-300 hover:from-cyan-400 hover:to-blue-500 hover:scale-105 hover:shadow-cyan-500/40"
          >
            <span>Talk to an Expert</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/solutions"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 dark:border-white/15 bg-white dark:bg-white/[0.04] px-8 py-4 text-base font-semibold text-slate-800 dark:text-slate-200 backdrop-blur-sm transition-all duration-300 hover:border-slate-400 dark:hover:border-cyan-400/40 hover:bg-slate-50 dark:hover:bg-white/[0.08] hover:text-slate-950 dark:hover:text-white shadow-sm"
          >
            <span>Explore Solutions</span>
          </Link>
        </div>

        {/* Assurance Badges */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <span>Zero-Obligation Consultation</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <span>Direct Access to Senior Engineers</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
            <span>24/7 Global Response Readiness</span>
          </div>
        </div>
      </div>
    </section>
  );
}
