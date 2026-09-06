import { Metadata } from "next";
import { Sparkles, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy & Governance Terms | Orbytes",
  description: "Orbytes Global Solutions privacy policy, data protection, GDPR/HIPAA compliance frameworks, and terms of service.",
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 transition-colors duration-300">
      {/* 1. Header [DARK] */}
      <section className="py-20 bg-[#030714] text-white border-b border-white/10 text-center">
        <div className="mx-auto max-w-4xl px-6 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-xs font-semibold text-cyan-300">
            <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
            <span>Corporate Governance</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white font-display">
            Privacy Policy & Data Protection
          </h1>
          <p className="text-sm text-slate-400">
            Last updated: January 2026 • Orbytes Global Solutions
          </p>
        </div>
      </section>

      {/* 2. Body [LIGHT] */}
      <section className="py-24 bg-slate-50 text-slate-800 border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-6 space-y-10 text-sm leading-relaxed">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 space-y-4 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 font-display">
              1. Commitment to Data Privacy & Protection
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Orbytes Global Solutions ("Orbytes", "we", "our", or "us") respects your privacy and is dedicated to protecting the personal and operational data entrusted to us. This Privacy Policy outlines our procedures concerning the collection, storage, encryption, and disclosure of information when you access our website or engage our Managed Security, Managed IT, Cloud, and Consulting services.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 space-y-4 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 font-display">
              2. Information We Collect
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We collect information strictly necessary to provide high-reliability enterprise IT services:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li><strong className="text-slate-900">Contact Information:</strong> Full name, professional work email, corporate phone number, company name, and physical office location.</li>
              <li><strong className="text-slate-900">Technical & Telemetry Data:</strong> IP addresses, browser types, session analytics, and device specifications collected via essential cookies to ensure web security and performance.</li>
              <li><strong className="text-slate-900">Service Telemetry:</strong> In the context of our MSSP and MSP client contracts, telemetry logs, network firewall alerts, and endpoint health metrics ingested into our Security Operations Center (SOC).</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 space-y-4 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 font-display">
              3. Regulatory Compliance (GDPR, HIPAA, SOC 2)
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We adhere to the highest international cybersecurity and privacy standards:
            </p>
            <ul className="list-disc pl-5 space-y-2 text-slate-600">
              <li><strong className="text-slate-900">HIPAA:</strong> For healthcare partners, all Protected Health Information (PHI) is processed strictly under signed Business Associate Agreements (BAAs) with AES-256 encryption.</li>
              <li><strong className="text-slate-900">GDPR:</strong> EU citizen data is processed under strict lawful bases, honoring data subject rights including access, rectification, portability, and deletion.</li>
              <li><strong className="text-slate-900">PCI-DSS:</strong> Cardholder data environments are segregated with zero local retention of raw payment credentials.</li>
            </ul>
          </div>

          <div id="terms" className="rounded-2xl border border-slate-200 bg-white p-8 space-y-4 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 font-display">
              4. Terms of Service
            </h2>
            <p className="text-slate-600 leading-relaxed">
              All technology services, managed SLAs, and consultation advisories delivered by Orbytes Global Solutions are subject to individual enterprise Master Services Agreements (MSAs), Statements of Work (SOWs), and Service Level Agreements (SLAs).
            </p>
          </div>

          <div id="cookies" className="rounded-2xl border border-slate-200 bg-white p-8 space-y-4 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 font-display">
              5. Cookie Policy & Tracking
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We only use essential security cookies and anonymous performance metrics to optimize Core Web Vitals and protect our portals from denial-of-service vectors. We do not sell or monetize personal browsing information to third-party ad brokers.
            </p>
          </div>

          <div className="pt-4 text-xs text-slate-500 border-t border-slate-200">
            For data protection inquiries or to exercise your privacy rights, contact our Data Protection Officer at: <a href="mailto:info@technosprint.net" className="text-cyan-600 hover:underline font-semibold">info@technosprint.net</a>
          </div>
        </div>
      </section>
    </div>
  );
}
