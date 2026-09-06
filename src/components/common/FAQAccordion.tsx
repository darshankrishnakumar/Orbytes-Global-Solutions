"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ServiceFAQ } from "@/data/servicesData";

interface FAQAccordionProps {
  faqs: ServiceFAQ[];
  title?: string;
  subtitle?: string;
  theme?: "light" | "dark";
}

export function FAQAccordion({
  faqs,
  title = "Frequently Asked Questions",
  subtitle = "Clear answers to common enterprise questions regarding our service model, security, and SLAs.",
  theme = "light",
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const isDark = theme === "dark";

  return (
    <section
      className={`py-24 border-t transition-colors duration-300 ${
        isDark
          ? "bg-[#050814] border-white/10 text-white"
          : "bg-slate-50 border-slate-200 text-slate-900"
      }`}
    >
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center mb-16 space-y-3">
          <span
            className={`text-xs font-bold tracking-widest uppercase font-display ${
              isDark ? "text-cyan-400" : "text-cyan-600"
            }`}
          >
            Direct Clarity
          </span>
          <h2
            className={`text-3xl sm:text-4xl font-bold tracking-tight font-display ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            {title}
          </h2>
          <p
            className={`text-sm sm:text-base max-w-2xl mx-auto ${
              isDark ? "text-slate-400" : "text-slate-600"
            }`}
          >
            {subtitle}
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 shadow-sm ${
                  isDark
                    ? "border-white/10 bg-[#081024] hover:border-cyan-500/40"
                    : "border-slate-200 bg-white hover:border-cyan-500/40"
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`text-base font-semibold pr-4 ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`h-8 w-8 shrink-0 rounded-full border flex items-center justify-center transition-transform duration-300 ${
                      isOpen
                        ? isDark
                          ? "rotate-180 border-cyan-500 bg-cyan-950/60 text-cyan-400"
                          : "rotate-180 border-cyan-500 bg-cyan-100 text-cyan-700"
                        : isDark
                        ? "border-white/10 text-slate-400"
                        : "border-slate-200 text-slate-500"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div
                        className={`px-6 pb-6 pt-2 text-sm leading-relaxed border-t ${
                          isDark
                            ? "text-slate-300 border-white/5"
                            : "text-slate-600 border-slate-100"
                        }`}
                      >
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
