"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, Mail, X, Calendar, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { companyData } from "@/data/companyData";

export function FloatingContactWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Show widget after scrolling 300px
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappNumber = "919043310908";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello Orbytes Global Solutions, I would like to inquire about your enterprise IT and security services."
  )}`;

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.2 }}
            className="mb-3 w-80 rounded-2xl border border-white/10 bg-[#030714]/95 backdrop-blur-xl p-5 text-white shadow-2xl shadow-cyan-950/40"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold text-slate-300">
                  Direct Consultation Desk
                </span>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white transition-colors p-1"
                aria-label="Close contact options"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-4 space-y-2.5">
              {/* WhatsApp Option */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3 text-xs font-medium text-emerald-300 hover:bg-emerald-500/20 transition-all group"
              >
                <div className="h-8 w-8 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400">
                  <MessageCircle className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Chat on WhatsApp</div>
                  <div className="text-[11px] text-emerald-300/80">Average reply &lt; 5 mins</div>
                </div>
              </a>

              {/* Direct Phone Call - India */}
              <a
                href={`tel:${companyData.phones.indiaPrimary.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-3 rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-3 text-xs font-medium text-cyan-300 hover:bg-cyan-500/20 transition-all group"
              >
                <div className="h-8 w-8 rounded-lg bg-cyan-500/20 flex items-center justify-center shrink-0 text-cyan-400">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Call India (Chennai & Puducherry)</div>
                  <div className="text-[11px] text-cyan-300/80">{companyData.phones.indiaPrimary}</div>
                </div>
              </a>

              {/* Direct Phone Call - Canada */}
              <a
                href={`tel:${companyData.phones.canada.replace(/[^0-9+]/g, "")}`}
                className="flex items-center gap-3 rounded-xl border border-indigo-500/20 bg-indigo-500/10 p-3 text-xs font-medium text-indigo-300 hover:bg-indigo-500/20 transition-all group"
              >
                <div className="h-8 w-8 rounded-lg bg-indigo-500/20 flex items-center justify-center shrink-0 text-indigo-400">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Call Canada & North America</div>
                  <div className="text-[11px] text-indigo-300/80">{companyData.phones.canada}</div>
                </div>
              </a>

              {/* Consultation Booking */}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center gap-3 rounded-xl border border-blue-500/20 bg-blue-500/10 p-3 text-xs font-medium text-blue-300 hover:bg-blue-500/20 transition-all group"
              >
                <div className="h-8 w-8 rounded-lg bg-blue-500/20 flex items-center justify-center shrink-0 text-blue-400">
                  <Calendar className="h-4 w-4" />
                </div>
                <div>
                  <div className="font-semibold text-white">Schedule Discovery Call</div>
                  <div className="text-[11px] text-blue-300/80">Tailored 30-min strategy review</div>
                </div>
              </Link>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-400">
              <span className="flex items-center gap-1">
                <ShieldCheck className="h-3 w-3 text-cyan-400" />
                24/7/365 NOC Support
              </span>
              <span>SLA Guaranteed</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Trigger Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="h-14 w-14 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/40 hover:shadow-cyan-500/60 transition-all duration-300 relative group"
        aria-label="Open contact and consultation options"
      >
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-4 w-4 bg-cyan-500 border-2 border-[#030714]" />
        </span>
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white group-hover:scale-110 transition-transform" />
        )}
      </motion.button>
    </div>
  );
}
