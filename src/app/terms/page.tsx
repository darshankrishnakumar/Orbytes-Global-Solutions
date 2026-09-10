import { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions governing the enterprise technology services and solutions of Orbytes Global Solutions.",
};

export default function TermsPage() {
  return (
    <div className="pt-24 transition-colors duration-300">
      {/* 1. Header [DARK] */}
      <section className="py-20 bg-[#030714] text-white border-b border-white/10 text-center">
        <div className="mx-auto max-w-4xl px-6 space-y-3">
          <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase font-display">
            Legal & Governance
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight font-display">
            Terms of Service
          </h1>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
            Last updated: September 2026 • Please review the operational and contractual terms governing services delivered by {siteConfig.name}.
          </p>
        </div>
      </section>

      {/* 2. Terms Body [LIGHT] */}
      <section className="py-24 bg-slate-50 text-slate-800 border-b border-slate-200">
        <div className="mx-auto max-w-4xl px-6 space-y-8 text-sm leading-relaxed">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 space-y-4 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 font-display">
              1. Agreement to Terms
            </h2>
            <p className="text-slate-600 leading-relaxed">
              By accessing or utilizing any digital services, managed IT offerings, cybersecurity defenses (MSSP), or cloud infrastructure provided by {siteConfig.name} (&ldquo;Orbytes&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;), you agree to be bound by these Terms of Service and any Master Services Agreement (MSA) or Statement of Work (SOW) executed between the parties.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 space-y-4 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 font-display">
              2. Scope of Services & Enterprise SLAs
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Orbytes provides proactive managed security operations, cloud management, ITSM operations, and IT consulting. Specific response targets, system availability guarantees, and uptime thresholds (such as our 99.99% infrastructure availability target) are governed strictly by the executed Service Level Agreement (SLA) associated with your account tier.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 space-y-4 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 font-display">
              3. Client Responsibilities & Authorized Access
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Clients must provide accurate environment topology, timely administrative credential provisioning, and maintain internal compliance policies. Any credential or access key granted to Orbytes personnel must be issued through documented enterprise identity providers with multi-factor authentication (MFA) enabled.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 space-y-4 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 font-display">
              4. Data Privacy & Confidentiality
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We prioritize zero-trust security and data sovereignty. Both parties agree to maintain strict confidentiality regarding client proprietary datasets, architecture schemas, and trade secrets. Our processing of personal information is governed by our{" "}
              <Link href="/privacy" className="text-cyan-600 hover:text-cyan-700 underline font-medium">
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 space-y-4 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 font-display">
              5. Intellectual Property Rights
            </h2>
            <p className="text-slate-600 leading-relaxed">
              All software tooling, proprietary automation frameworks, methodologies, and diagnostic scripts developed by Orbytes remain the exclusive property of Orbytes Global Solutions. Client datasets, business workflows, and customized deliverables developed specifically for client use remain the property of the client upon receipt of full payment.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 space-y-4 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 font-display">
              6. Limitation of Liability
            </h2>
            <p className="text-slate-600 leading-relaxed">
              To the maximum extent permitted by applicable law, neither party shall be liable for any indirect, incidental, consequential, or punitive damages resulting from network interruptions, third-party provider failures, or cyber threats beyond the preventative measures outlined in the agreed technical specifications.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 space-y-4 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 font-display">
              7. Contact & Legal Inquiries
            </h2>
            <p className="text-slate-600 leading-relaxed">
              For legal inquiries, contract reviews, or enterprise compliance audits, please contact our legal and governance team at:{" "}
              <a href="mailto:info@orbytesglobal.com" className="text-cyan-600 hover:text-cyan-700 font-semibold underline">
                info@orbytesglobal.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
