import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#030714] text-white px-6">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-6xl font-bold font-display text-cyan-400">404</h1>
        <h2 className="text-2xl font-bold font-display text-white">Page Not Found</h2>
        <p className="text-sm text-slate-400">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block rounded-xl bg-cyan-500 px-6 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
