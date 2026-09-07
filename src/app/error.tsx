"use client";

import React, { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#030714] text-white px-6">
      <div className="max-w-md w-full text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
          Something went wrong
        </h2>
        <p className="text-sm text-slate-400">
          An unexpected error occurred while loading this section.
        </p>
        <button
          onClick={() => reset()}
          className="rounded-xl bg-cyan-500 px-6 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
