import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, Sparkles } from "lucide-react";
import { insightsData } from "@/data/insightsData";
import { FinalCTA } from "@/components/home/FinalCTA";

export async function generateStaticParams() {
  return insightsData.map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = insightsData.find((a) => a.slug === params.slug);
  if (!article) return { title: "Insight Not Found | Orbytes" };
  return {
    title: `${article.title} | Orbytes Insights`,
    description: article.summary,
  };
}

export default function InsightDetailPage({ params }: { params: { slug: string } }) {
  const article = insightsData.find((a) => a.slug === params.slug);
  if (!article) notFound();

  return (
    <div className="pt-24 transition-colors duration-300">
      {/* 1. Article Header [DARK] */}
      <article className="py-20 bg-[#030714] text-white border-b border-white/10">
        <div className="mx-auto max-w-4xl px-6 space-y-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to All Insights</span>
          </Link>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-xs text-slate-400">
              <span className="font-bold text-cyan-300 uppercase tracking-wider bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-500/30">
                {article.category}
              </span>
              <div className="flex items-center gap-1.5">
                <Clock className="h-3.5 w-3.5 text-cyan-400" />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5 text-cyan-400" />
                <span>{article.publishedDate}</span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white font-display leading-[1.15]">
              {article.title}
            </h1>
          </div>
        </div>
      </article>

      {/* 2. Article Body [LIGHT] */}
      <section className="py-20 bg-white text-slate-800 border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-6 mb-12">
          {article.imageUrl && (
            <div className="relative group overflow-hidden rounded-3xl border border-slate-200 shadow-xl aspect-[21/9]">
              <img
                src={article.imageUrl}
                alt={article.imageAlt || article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-5">
                <p className="text-xs text-white/95 font-medium tracking-wide">
                  {article.imageAlt}
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="mx-auto max-w-3xl px-6">
          <div className="space-y-6 text-base sm:text-lg text-slate-700 leading-relaxed font-sans">
            {article.content.map((p, idx) => (
              <p key={idx} className="leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-16 pt-8 border-t border-slate-200 flex items-center justify-between">
            <span className="text-xs text-slate-500">
              Published by Orbytes Technology Research Group
            </span>
            <Link
              href="/contact"
              className="text-xs font-bold text-cyan-600 hover:text-cyan-700"
            >
              Discuss with Author →
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Final CTA [DARK] */}
      <FinalCTA />
    </div>
  );
}
