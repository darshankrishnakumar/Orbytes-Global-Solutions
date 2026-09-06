import { Metadata } from "next";
import { Sparkles, MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";
import { companyData } from "@/data/companyData";
import { ContactWizard } from "@/components/common/ContactWizard";
import { GlobalNetworkVisual } from "@/components/visuals/global/GlobalNetworkVisual";

export const metadata: Metadata = {
  title: "Contact Orbytes | Global Technology Offices & Consultation",
  description: "Connect with Orbytes Global Solutions. Schedule an enterprise architecture assessment. Offices in Chennai, Pondicherry, and Toronto.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 transition-colors duration-300">
      {/* 1. Header [DARK] */}
      <section className="py-20 bg-[#030714] text-white border-b border-white/10 text-center">
        <div className="mx-auto max-w-4xl px-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-xs font-semibold text-cyan-300">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>Direct Enterprise Consultation</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white font-display">
            Let’s Connect & Elevate Your Technology
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Ready to secure and modernize your business with enterprise-grade IT solutions? Complete our guided inquiry or reach our regional offices.
          </p>
        </div>
      </section>

      {/* 2. Global Triangulated Delivery Network Section [DARK] */}
      <section className="py-16 bg-[#050814] text-white border-b border-white/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase font-display">
              Physical Infrastructure & Global Delivery
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Triangulated Command Hubs
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Interactive telemetry and follow-the-sun continuous operations spanning India and Canada.
            </p>
          </div>
          <GlobalNetworkVisual />
        </div>
      </section>

      {/* 3. Main Interactive Contact Section [LIGHT] */}
      <section className="py-24 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Guided Questionnaire */}
            <div className="lg:col-span-7">
              <ContactWizard />
            </div>

            {/* Right: Direct Contacts & Locations */}
            <div className="lg:col-span-5 space-y-8">
              {/* Direct channels */}
              <div className="rounded-3xl border border-slate-200 bg-white p-8 space-y-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  Direct Inquiries
                </h3>

                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3.5">
                    <div className="h-10 w-10 rounded-xl bg-cyan-100 border border-cyan-300 flex items-center justify-center text-cyan-700">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block">General & Enterprise Email</span>
                      <a href={`mailto:${companyData.email}`} className="font-semibold text-slate-900 hover:text-cyan-600 transition-colors">
                        {companyData.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="h-10 w-10 rounded-xl bg-blue-100 border border-blue-300 flex items-center justify-center text-blue-700">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block">India Primary Line</span>
                      <a href={`tel:${companyData.phones.indiaPrimary.replace(/\s+/g, "")}`} className="font-semibold text-slate-900 hover:text-cyan-600 transition-colors">
                        {companyData.phones.indiaPrimary}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="h-10 w-10 rounded-xl bg-indigo-100 border border-indigo-300 flex items-center justify-center text-indigo-700">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block">Canada & North America</span>
                      <a href={`tel:${companyData.phones.canada.replace(/\s+/g, "")}`} className="font-semibold text-slate-900 hover:text-cyan-600 transition-colors">
                        {companyData.phones.canada}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3.5">
                    <div className="h-10 w-10 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <span className="text-xs text-slate-500 block">Operations & SOC Response</span>
                      <span className="font-semibold text-slate-900">24/7/365 Continuous Vigilance</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Locations Cards */}
              <div className="rounded-3xl border border-slate-200 bg-white p-8 space-y-6 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  Global Physical Presence
                </h3>

                <div className="space-y-6">
                  {companyData.offices.map((office) => (
                    <div key={office.city} className="border-b border-slate-100 pb-5 last:border-0 last:pb-0 flex gap-4 items-start">
                      {office.imageUrl && (
                        <div className="relative w-24 h-20 rounded-xl overflow-hidden border border-slate-200 shrink-0 bg-slate-100 shadow-sm">
                          <img
                            src={office.imageUrl}
                            alt={`${office.city} Office`}
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div className="space-y-1 flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-slate-900">
                            {office.city}, {office.country}
                          </h4>
                          {office.isHeadquarter && (
                            <span className="text-[10px] font-bold text-cyan-700 bg-cyan-100 px-2 py-0.5 rounded border border-cyan-300 uppercase">
                              Global HQ
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {office.address}
                        </p>
                        {office.phone && (
                          <a
                            href={`tel:${office.phone.replace(/\s+/g, "")}`}
                            className="inline-block text-xs font-semibold text-cyan-700 hover:underline pt-1"
                          >
                            {office.phone}
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
