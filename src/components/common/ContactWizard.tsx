"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldAlert,
  Server,
  Cloud,
  Compass,
  Code2,
  Users,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
} from "lucide-react";

export function ContactWizard() {
  const [step, setStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    need: "",
    companySize: "",
    challenge: "",
    fullName: "",
    email: "",
    phone: "",
    companyName: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const needsOptions = [
    { id: "security", label: "Managed Security (MSSP)", icon: ShieldAlert },
    { id: "managed-it", label: "Managed IT Operations (MSP)", icon: Server },
    { id: "cloud", label: "Cloud & Data Migration", icon: Cloud },
    { id: "consulting", label: "IT Strategy & Consulting", icon: Compass },
    { id: "digital", label: "Custom Software & APIs", icon: Code2 },
    { id: "other", label: "Other Technology Inquiry", icon: Sparkles },
  ];

  const sizeOptions = ["1–50 Employees", "51–200 Employees", "201–500 Employees", "500+ Enterprise"];

  const handleNext = () => {
    if (step === 1 && !formData.need) return;
    if (step === 2 && !formData.companySize) return;
    if (step === 3 && !formData.challenge) return;
    setStep(step + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const web3FormsKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
      if (web3FormsKey) {
        await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            access_key: web3FormsKey,
            subject: `New Enterprise Inquiry from ${formData.companyName || formData.fullName}`,
            from_name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            company: formData.companyName,
            solution_area: formData.need,
            company_size: formData.companySize,
            challenge: formData.challenge,
          }),
        });
      }
    } catch (err) {
      console.warn("Form dispatch info:", err);
    } finally {
      setIsSubmitting(false);
      setStep(5); // Success state
    }
  };

  return (
    <div className="rounded-3xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#081026] p-8 md:p-12 shadow-xl dark:shadow-2xl relative overflow-hidden transition-colors duration-300">
      {/* Progress Bar */}
      {step < 5 && (
        <div className="mb-10 space-y-2">
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500 dark:text-slate-400">
            <span>
              Step {step} of 4:{" "}
              {step === 1 && "Select Solution Area"}
              {step === 2 && "Company Scale"}
              {step === 3 && "Primary Challenge"}
              {step === 4 && "Contact Details"}
            </span>
            <span className="text-cyan-600 dark:text-cyan-400 font-bold">{Math.round((step / 4) * 100)}%</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {/* Step 1: Solution Area */}
        {step === 1 && (
          <motion.div
            key="step1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                What does your business need next?
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Select the primary capability you would like to discuss with our enterprise team.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {needsOptions.map((opt) => {
                const Icon = opt.icon;
                const isSelected = formData.need === opt.label;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setFormData({ ...formData, need: opt.label })}
                    className={`flex items-center gap-3.5 p-4 rounded-xl border text-left transition-all duration-200 ${
                      isSelected
                        ? "border-cyan-500 bg-cyan-50 dark:bg-cyan-950/60 text-cyan-950 dark:text-white shadow-md shadow-cyan-500/10 dark:shadow-cyan-950/40"
                        : "border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#0a142e] text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-white/20 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    <Icon className={`h-5 w-5 ${isSelected ? "text-cyan-600 dark:text-cyan-400" : "text-slate-400"}`} />
                    <span className="text-sm font-semibold">{opt.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                disabled={!formData.need}
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-sm font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed hover:from-cyan-400 hover:to-blue-500 transition-all shadow-md shadow-cyan-500/20"
              >
                <span>Continue</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 2: Company Size */}
        {step === 2 && (
          <motion.div
            key="step2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                What is your company size?
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Helps us pair you with the engineering team specialized in your operational scale.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {sizeOptions.map((sz) => {
                const isSelected = formData.companySize === sz;
                return (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => setFormData({ ...formData, companySize: sz })}
                    className={`flex items-center justify-between p-5 rounded-xl border text-left transition-all duration-200 ${
                      isSelected
                        ? "border-cyan-500 bg-cyan-50 dark:bg-cyan-950/60 text-cyan-950 dark:text-white shadow-md shadow-cyan-500/10 dark:shadow-cyan-950/40"
                        : "border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-[#0a142e] text-slate-700 dark:text-slate-300 hover:border-slate-300 dark:hover:border-white/20 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    <span className="text-sm font-semibold">{sz}</span>
                    <Users className={`h-4 w-4 ${isSelected ? "text-cyan-600 dark:text-cyan-400" : "text-slate-400"}`} />
                  </button>
                );
              })}
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </button>
              <button
                type="button"
                disabled={!formData.companySize}
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-sm font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed hover:from-cyan-400 hover:to-blue-500 transition-all shadow-md shadow-cyan-500/20"
              >
                <span>Continue</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Challenge */}
        {step === 3 && (
          <motion.div
            key="step3"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                What is your core technology challenge?
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                Tell us briefly about your current infrastructure, compliance needs, or upcoming goals.
              </p>
            </div>

            <div>
              <textarea
                rows={5}
                value={formData.challenge}
                onChange={(e) => setFormData({ ...formData, challenge: e.target.value })}
                placeholder="e.g. We need to pass HIPAA compliance audits, upgrade our network monitoring to 24/7, and reduce cloud costs on Azure..."
                className="w-full rounded-2xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#0a142e] p-4 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-cyan-500 focus:bg-white dark:focus:bg-[#0a142e] focus:outline-none focus:ring-1 focus:ring-cyan-500"
              />
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </button>
              <button
                type="button"
                disabled={!formData.challenge.trim()}
                onClick={handleNext}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-sm font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed hover:from-cyan-400 hover:to-blue-500 transition-all shadow-md shadow-cyan-500/20"
              >
                <span>Continue</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 4: Contact Details */}
        {step === 4 && (
          <motion.form
            key="step4"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white font-display">
                Where should we send the consultation brief?
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                We respect your privacy. No spam, guaranteed NDA protection.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#0a142e] px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-cyan-500 focus:bg-white dark:focus:bg-[#0a142e] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="s.jenkins@company.com"
                  className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#0a142e] px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-cyan-500 focus:bg-white dark:focus:bg-[#0a142e] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="+1 (555) 019-2834"
                  className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#0a142e] px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-cyan-500 focus:bg-white dark:focus:bg-[#0a142e] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                  Organization Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="Acme Global Inc."
                  className="w-full rounded-xl border border-slate-300 dark:border-white/10 bg-slate-50 dark:bg-[#0a142e] px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:border-cyan-500 focus:bg-white dark:focus:bg-[#0a142e] focus:outline-none"
                />
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(3)}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Back</span>
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 hover:from-cyan-400 hover:to-blue-500 transition-all"
              >
                <span>{isSubmitting ? "Dispatching..." : "Submit Consultation Request"}</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </motion.form>
        )}

        {/* Step 5: Success State */}
        {step === 5 && (
          <motion.div
            key="step5"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8 space-y-6"
          >
            <div className="h-16 w-16 rounded-full bg-emerald-100 dark:bg-emerald-500/20 border border-emerald-300 dark:border-emerald-400/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mx-auto shadow-md">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white font-display">
                Thanks, {formData.fullName || "there"}! Your request is on its way.
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                We'll connect you with the appropriate Orbytes technology expert within 1 business day to review your environment.
              </p>
            </div>

            <div className="p-4 rounded-xl border border-slate-200 dark:border-white/5 bg-slate-50 dark:bg-white/[0.02] max-w-md mx-auto text-left text-xs text-slate-600 dark:text-slate-400 space-y-1">
              <div><strong>Selected Solution:</strong> {formData.need}</div>
              <div><strong>Organization Scale:</strong> {formData.companySize}</div>
              <div><strong>Response Channel:</strong> {formData.email}</div>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/919043310908?text=${encodeURIComponent(
                  `Hi Orbytes, I just submitted an enterprise inquiry for ${formData.need || "IT Services"} on orbytesglobal.com.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-md transition-colors"
              >
                <span>Fast-track on WhatsApp</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>

            <div>
              <button
                type="button"
                onClick={() => {
                  setStep(1);
                  setFormData({
                    need: "",
                    companySize: "",
                    challenge: "",
                    fullName: "",
                    email: "",
                    phone: "",
                    companyName: "",
                  });
                }}
                className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 hover:underline"
              >
                Submit another inquiry →
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
