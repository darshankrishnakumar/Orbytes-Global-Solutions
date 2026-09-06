"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Sparkles, FileText, CheckCircle2, BookmarkCheck, ArrowUpRight } from "lucide-react";
import { insightsData } from "@/data/insightsData";

export function InsightsRadarVisual() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const categories = ["All", "Cybersecurity", "Cloud Architecture", "IT Operations"];

  const filtered = selectedCategory === "All"
    ? insightsData
    : insightsData.filter((i) => i.category === selectedCategory);

  return (
    <div className="relative w-full rounded-3xl border border-cyan-500/20 bg-[#070d1e]/90 p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-cyan-950/40 overflow-hidden mb-12">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5 mb-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-bold text-white uppercase tracking-wider font-display">
              Enterprise Technical Research Radar
            </div>
            <div className="text-xs text-cyan-400 font-mono">
              Peer-Reviewed Operational Architecture Briefs
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                selectedCategory === c
                  ? "border-cyan-400 bg-cyan-950 text-cyan-300 shadow-md shadow-cyan-950/40"
                  : "border-white/10 bg-white/[0.02] text-slate-400 hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Research Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <AnimatePresence>
          {filtered.map((art) => (
            <motion.div
              key={art.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="p-4 rounded-2xl border border-white/5 bg-[#040816] hover:border-cyan-500/30 transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono text-cyan-400">
                  <span>{art.category}</span>
                  <span className="text-slate-400">{art.readTime}</span>
                </div>
                <h4 className="text-xs font-bold text-white font-display line-clamp-2">
                  {art.title}
                </h4>
                <p className="text-[11px] text-slate-400 line-clamp-2">
                  {art.summary}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-cyan-400 font-semibold">
                <span className="flex items-center gap-1">
                  <BookmarkCheck className="h-3 w-3 text-emerald-400" />
                  Whitepaper
                </span>
                <span className="font-mono text-[10px] text-slate-400">{art.publishedDate}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
