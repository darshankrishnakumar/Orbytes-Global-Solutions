"use client";

import React from "react";
import { partnersData } from "@/data/partnersData";

export function PartnerMarquee() {
  // Duplicate array for seamless infinite marquee effect
  const marqueeItems = [...partnersData, ...partnersData, ...partnersData];

  return (
    <section className="relative py-16 bg-slate-50 dark:bg-[#04060f] border-b border-slate-200 dark:border-white/5 overflow-hidden transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-6 mb-8 text-center">
        <span className="text-xs font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase font-display">
          Technology Alliances & Cloud Partners
        </span>
      </div>

      {/* Marquee Track with pause-on-hover */}
      <div className="relative w-full overflow-hidden mask-fade">
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] gap-8">
          {marqueeItems.map((partner, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3.5 px-6 py-3.5 rounded-xl border border-slate-200 dark:border-white/5 bg-white dark:bg-white/[0.02] shadow-sm backdrop-blur-sm transition-colors hover:border-cyan-500/40 hover:bg-cyan-50/50 dark:hover:bg-cyan-500/[0.04] shrink-0"
            >
              <div className="h-2 w-2 rounded-full bg-cyan-500 dark:bg-cyan-400 shadow-[0_0_6px_#00e5ff]" />
              <div>
                <span className="text-sm font-bold text-slate-900 dark:text-white tracking-wide">
                  {partner.name}
                </span>
                <span className="text-[10px] text-cyan-600 dark:text-cyan-400/90 block">
                  {partner.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
