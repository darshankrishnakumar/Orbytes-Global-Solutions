import { Metadata } from "next";
import { Sparkles, Quote, Shield } from "lucide-react";
import { leadershipData } from "@/data/leadershipData";
import { FinalCTA } from "@/components/home/FinalCTA";
import { LeadershipVisual } from "@/components/visuals/about/LeadershipVisual";

export const metadata: Metadata = {
  title: "Executive Leadership Team | Technosprint",
  description: "Meet the executive team driving Technosprint's mission: CEO Ranganadin C, Managing Partner Jothi Shankar K, CTO Ajay Sundar N, and CSO Jaganathan R.",
};

export default function LeadershipPage() {
  return (
    <div className="pt-24 transition-colors duration-300">
      {/* 1. Header & Governance Radar [DARK] */}
      <section className="py-20 bg-[#030714] text-white border-b border-white/10 text-center">
        <div className="mx-auto max-w-4xl px-6 space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-xs font-semibold text-cyan-300">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>Executive Governance</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display">
            Our Leadership Team
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Experienced technology executives dedicated to security, client scalability, and continuous operational excellence.
          </p>
        </div>

        {/* Specialized Interactive Leadership Governance Visual in Dark Room */}
        <div className="mx-auto max-w-7xl px-6">
          <LeadershipVisual />
        </div>
      </section>

      {/* 2. Executive Profiles Grid [LIGHT] */}
      <section className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold tracking-widest text-cyan-600 uppercase font-display">
              Command Structure
            </span>
            <h2 className="text-3xl font-bold text-slate-900 font-display">
              Enterprise Executive Officers
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipData.map((exec, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:border-cyan-500/50 hover:bg-white shadow-sm hover:shadow-xl"
              >
                <div className="space-y-6">
                  {/* Portrait Placeholder Avatar with Initials & Gradient */}
                  <div className="flex items-center gap-4">
                    <div
                      className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${exec.gradient} flex items-center justify-center font-bold text-xl text-white shadow-md`}
                    >
                      {exec.initials}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 font-display">
                        {exec.name}
                      </h3>
                      <span className="text-xs font-semibold uppercase tracking-wider text-cyan-600">
                        {exec.role}
                      </span>
                    </div>
                  </div>

                  {/* Executive Quote */}
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-xs italic text-slate-700 leading-relaxed relative">
                    <Quote className="h-4 w-4 text-cyan-600/40 absolute -top-2 -left-2" />
                    "{exec.quote}"
                  </div>

                  {/* Bio */}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {exec.bio}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1.5 text-cyan-600 font-medium">
                    <Shield className="h-3 w-3" />
                    Verified Leadership
                  </span>
                  <span>Technosprint Executive</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Final CTA [DARK] */}
      <FinalCTA />
    </div>
  );
}
