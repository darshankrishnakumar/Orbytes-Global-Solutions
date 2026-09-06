"use client";

import React from "react";
import { companyData } from "@/data/companyData";

export function TrustMetrics() {
  return (
    <section className="relative py-20 bg-white dark:bg-[#060a1a] border-t border-b border-slate-200 dark:border-white/5 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-white/5">
          {companyData.metrics.map((metric, idx) => (
            <div
              key={idx}
              className={`text-center space-y-2 ${idx > 0 ? "pt-6 md:pt-0 md:pl-6" : ""}`}
            >
              <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-400 font-display">
                {metric.value}
              </div>
              <div className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                {metric.label}
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 max-w-[200px] mx-auto">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
