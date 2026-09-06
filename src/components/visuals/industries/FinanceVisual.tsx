"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Lock, CheckCircle, ArrowRight, Zap, RefreshCw, Cpu } from "lucide-react";

export function FinanceVisual() {
  const [transactions, setTransactions] = useState([
    { id: "TX-89214", amount: "$124,500.00", latency: "0.42ms", status: "CLEARED", hash: "0x7f...a92b" },
    { id: "TX-89215", amount: "$38,900.50", latency: "0.38ms", status: "CLEARED", hash: "0x3e...d811" },
    { id: "TX-89216", amount: "$1,200,000.00", latency: "0.51ms", status: "CLEARED", hash: "0x9c...44a7" },
  ]);
  const [isSimulating, setIsSimulating] = useState(false);

  const simulateTransaction = () => {
    if (isSimulating) return;
    setIsSimulating(true);

    const randomAmt = (Math.random() * 500000 + 10000).toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
    const randomTxId = `TX-${Math.floor(10000 + Math.random() * 90000)}`;
    const randomHash = `0x${Math.random().toString(16).substring(2, 6)}...${Math.random().toString(16).substring(2, 6)}`;
    const randomLatency = `${(0.3 + Math.random() * 0.25).toFixed(2)}ms`;

    setTimeout(() => {
      setTransactions((prev) => [
        { id: randomTxId, amount: randomAmt, latency: randomLatency, status: "CLEARED", hash: randomHash },
        prev[0],
        prev[1],
      ]);
      setIsSimulating(false);
    }, 700);
  };

  return (
    <div className="relative w-full rounded-3xl border border-cyan-500/20 bg-[#060b1e]/95 p-6 backdrop-blur-xl shadow-2xl shadow-cyan-950/30 overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-12 -right-12 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Cpu className="h-5 w-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-white uppercase tracking-wider font-display">
              Sub-Millisecond Settlement Engine
            </div>
            <div className="text-[11px] text-cyan-400 font-mono">
              FINRA / PCI-DSS Level 1 Cryptographic Bus
            </div>
          </div>
        </div>

        <button
          onClick={simulateTransaction}
          disabled={isSimulating}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-cyan-500/40 bg-cyan-950/60 text-xs font-semibold text-cyan-300 hover:bg-cyan-900/60 hover:border-cyan-400 transition-all active:scale-95 disabled:opacity-50"
        >
          <RefreshCw className={`h-3 w-3 ${isSimulating ? "animate-spin text-cyan-400" : ""}`} />
          <span>{isSimulating ? "Settling..." : "Inject Test Tx"}</span>
        </button>
      </div>

      {/* Pipeline Stage Architecture */}
      <div className="grid grid-cols-3 gap-2 mb-6">
        <div className="rounded-xl border border-white/10 bg-[#040816] p-3 text-center">
          <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-1">
            Ingress Router
          </div>
          <div className="text-xs font-mono text-cyan-400 font-semibold">10 Gbps Fiber</div>
          <div className="text-[10px] text-emerald-400 mt-1 flex items-center justify-center gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Active
          </div>
        </div>

        <div className="rounded-xl border border-cyan-500/30 bg-cyan-950/20 p-3 text-center relative overflow-hidden">
          {/* Scanning beam */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
          />
          <div className="text-[10px] uppercase tracking-wider text-cyan-300 font-bold mb-1">
            AI Fraud Gate
          </div>
          <div className="text-xs font-mono text-white font-semibold">Risk Score: 0.001</div>
          <div className="text-[10px] text-cyan-300 mt-1">Zero False Rejection</div>
        </div>

        <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-3 text-center">
          <div className="text-[10px] uppercase tracking-wider text-emerald-300 font-bold mb-1">
            Encrypted Vault
          </div>
          <div className="text-xs font-mono text-emerald-400 font-semibold">Immutable Append</div>
          <div className="text-[10px] text-emerald-300 mt-1 flex items-center justify-center gap-1">
            <Lock className="h-2.5 w-2.5" />
            <span>Hardware HSM</span>
          </div>
        </div>
      </div>

      {/* Transaction Feed */}
      <div className="space-y-2 mb-5">
        <div className="flex items-center justify-between text-[11px] text-slate-400 px-1 font-mono uppercase tracking-wider">
          <span>Cleared Transactions</span>
          <span>Latency / Cryptographic Seal</span>
        </div>

        <div className="space-y-2">
          <AnimatePresence>
            {transactions.map((tx) => (
              <motion.div
                key={tx.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="flex items-center justify-between p-3 rounded-xl border border-white/5 bg-[#030712] hover:border-cyan-500/30 transition-all font-mono text-xs"
              >
                <div className="flex items-center gap-3">
                  <span className="text-cyan-400 font-bold">{tx.id}</span>
                  <span className="text-white font-semibold">{tx.amount}</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-slate-400 text-[11px] hidden sm:inline">{tx.hash}</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-500/30 text-[10px] font-bold">
                    {tx.latency}
                  </span>
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Metrics footer */}
      <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-cyan-400" />
          <span className="text-[11px]">Audit Trails: Immutable SOX & GLBA Compliance</span>
        </div>
        <div className="text-[11px] font-mono text-emerald-400 font-bold">
          99.999% SLA
        </div>
      </div>
    </div>
  );
}
