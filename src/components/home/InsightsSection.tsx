"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import { insightsData } from "@/data/insightsData";

export function InsightsSection() {
  return (
    <section className="relative py-28 bg-white border-t border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-cyan-600 uppercase font-display">
              Executive Perspectives
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-display">
              Ideas shaping the future of technology.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Strategic analysis on zero-trust security, cloud FinOps, and IT operational predictability from our senior practice leaders.
            </p>
          </div>
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-700 transition-colors shrink-0 group"
          >
            <span>Browse All Insights</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insightsData.map((art) => (
            <Link
              key={art.slug}
              href={`/insights/${art.slug}`}
              className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm transition-all duration-300 hover:border-cyan-500/50 hover:-translate-y-1.5 hover:shadow-xl"
            >
              <div>
                {art.imageUrl && (
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <img
                      src={art.imageUrl}
                      alt={art.imageAlt || art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="font-bold text-[11px] text-cyan-900 uppercase tracking-wider bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-200 shadow-sm">
                        {art.category}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-7 space-y-4">
                  {/* Meta */}
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{art.publishedDate}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      <span>{art.readTime}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 font-display leading-snug group-hover:text-cyan-600 transition-colors">
                    {art.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {art.summary}
                  </p>
                </div>
              </div>

              {/* Bottom Arrow */}
              <div className="px-7 pb-7 pt-2 flex items-center justify-between text-xs font-semibold text-cyan-600 group-hover:text-cyan-700">
                <span>Read Article</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
