import { Metadata } from "next";
import { Sparkles, Handshake, CheckCircle2 } from "lucide-react";
import { partnersData } from "@/data/partnersData";
import { FinalCTA } from "@/components/home/FinalCTA";
import { PartnersEcosystemVisual } from "@/components/visuals/about/PartnersEcosystemVisual";

export const metadata: Metadata = {
  title: "Technology Alliances & Partners | Orbytes",
  description: "Verified partnerships with industry leaders: Microsoft, AWS, GoDaddy, Hostinger, and NXT GEN.",
};

export default function PartnersPage() {
  return (
    <div className="pt-24 transition-colors duration-300">
      {/* 1. Header & Strategic Ecosystem Mesh [DARK] */}
      <section className="py-20 bg-[#030714] text-white border-b border-white/10 text-center">
        <div className="mx-auto max-w-4xl px-6 space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-xs font-semibold text-cyan-300">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>Strategic Alliances</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display">
            Our Technology Partners
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            We collaborate with premier global technology leaders to deliver enterprise-class cloud scalability, cybersecurity defense, and web reliability.
          </p>
        </div>

        {/* Specialized Interactive Partner Mesh Animation in Dark Room */}
        <div className="mx-auto max-w-7xl px-6">
          <PartnersEcosystemVisual />
        </div>
      </section>

      {/* 2. Verified Partners Grid [LIGHT] */}
      <section className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold tracking-widest text-cyan-600 uppercase font-display">
              Enterprise Ecosystem
            </span>
            <h2 className="text-3xl font-bold text-slate-900 font-display">
              Certified Global Alliances
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnersData.map((partner, idx) => (
              <div
                key={idx}
                className="rounded-3xl border border-slate-200 bg-white overflow-hidden hover:border-cyan-500/50 hover:bg-white transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl group"
              >
                <div>
                  {partner.imageUrl && (
                    <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
                      <img
                        src={partner.imageUrl}
                        alt={`${partner.name} alliance architecture`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute top-3 right-3">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-900 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-200 shadow-sm">
                          {partner.badge}
                        </span>
                      </div>
                    </div>
                  )}

                  <div className="p-8 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-slate-900 font-display">
                        {partner.name}
                      </h3>
                      <Handshake className="h-5 w-5 text-cyan-600" />
                    </div>

                    <span className="text-xs font-semibold text-cyan-700 block">
                      {partner.category}
                    </span>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {partner.description}
                    </p>
                  </div>
                </div>

                <div className="p-8 pt-0">
                  <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-700">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    <span>Verified Technology Partner</span>
                  </div>
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
