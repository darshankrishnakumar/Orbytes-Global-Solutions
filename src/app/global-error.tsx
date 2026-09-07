"use client";

import React from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="bg-[#030714] text-white min-h-screen flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
            System Error
          </h2>
          <p className="text-sm text-slate-400">
            A critical error occurred. Please refresh or try again.
          </p>
          <button
            onClick={() => reset()}
            className="rounded-xl bg-cyan-500 px-6 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
