"use client";

import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, ArrowUpRight, ShieldCheck } from "lucide-react";
import { companyData } from "@/data/companyData";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-[#04060f] text-slate-600 dark:text-slate-400 transition-colors duration-300">
      {/* Top Office Locations Banner */}
      <div className="border-b border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.01]">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {companyData.offices.map((office) => (
              <div key={office.city} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-900/60 text-cyan-600 dark:text-cyan-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-semibold text-slate-900 dark:text-white">
                      {office.city}, {office.country}
                    </h4>
                    {office.isHeadquarter && (
                      <span className="text-[10px] uppercase font-bold text-cyan-700 dark:text-cyan-400 bg-cyan-100 dark:bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-300 dark:border-cyan-500/20">
                        HQ
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {office.address}
                  </p>
                  {office.phone && (
                    <a
                      href={`tel:${office.phone.replace(/\s+/g, "")}`}
                      className="mt-2 inline-flex items-center gap-1.5 text-xs text-cyan-700 dark:text-cyan-400/90 hover:text-cyan-600 dark:hover:text-cyan-300 font-medium"
                    >
                      <Phone className="h-3 w-3" />
                      <span>{office.phone}</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center font-bold text-white shadow-[0_0_15px_rgba(0,229,255,0.4)]">
                O
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white font-display">
                ORBYTES GLOBAL
              </span>
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              Technology that secures. Technology that scales. Technology that moves business forward.
              A premier enterprise technology partner for managed cybersecurity, high-reliability IT operations, and cloud transformation.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-medium">
              <a
                href={companyData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={companyData.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                Facebook
              </a>
              <a
                href={companyData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
              >
                Instagram
              </a>
            </div>
            <div className="pt-2 flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
              <ShieldCheck className="h-4 w-4" />
              <span>SOC 2 & ISO 27001 Aligned Security Practices</span>
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Solutions & Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services/integrated" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  Integrated IT Services
                </Link>
              </li>
              <li>
                <Link href="/services/integrated/managed-security" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  Managed Security (MSSP)
                </Link>
              </li>
              <li>
                <Link href="/services/integrated/managed-it" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  Managed IT Services (MSP)
                </Link>
              </li>
              <li>
                <Link href="/services/cloud" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  Cloud Services & FinOps
                </Link>
              </li>
              <li>
                <Link href="/services/consulting" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  IT Consulting & GRC
                </Link>
              </li>
              <li>
                <Link href="/services/development" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  IT Development & APIs
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Industry Sectors
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/industries/business-retail" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  Business & Retail
                </Link>
              </li>
              <li>
                <Link href="/industries/business-retail/corporate" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  Corporate Solutions
                </Link>
              </li>
              <li>
                <Link href="/industries/healthcare-wellness" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  Healthcare & Wellness
                </Link>
              </li>
              <li>
                <Link href="/industries/healthcare-wellness/hospitals-clinics" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  Hospitals & Clinics
                </Link>
              </li>
              <li>
                <Link href="/industries/education-research" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  Education & Research
                </Link>
              </li>
              <li>
                <Link href="/industries/manufacturing-industrial" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  Manufacturing & Industrial
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  Our Story & Milestones
                </Link>
              </li>
              <li>
                <Link href="/about/leadership" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  Leadership Team
                </Link>
              </li>
              <li>
                <Link href="/about/partners" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  Technology Partners
                </Link>
              </li>
              <li>
                <Link href="/success" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  Customer Success
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  Technology Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-slate-950 dark:hover:text-white transition-colors">
                  Contact & Locations
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 Orbytes Global Solutions. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/privacy#terms" className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy#cookies" className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
