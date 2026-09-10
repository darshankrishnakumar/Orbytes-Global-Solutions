"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRight, Menu } from "lucide-react";
import { MegaMenu } from "./MegaMenu";
import { MobileMenu } from "./MobileMenu";
import { ThemeToggle } from "@/components/common/ThemeToggle";
import { BrandLogo } from "@/components/common/BrandLogo";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<"solutions" | "industries" | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mega menu on route change
  useEffect(() => {
    setActiveMegaMenu(null);
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-[#030714] py-3.5 border-b border-white/10 shadow-lg shadow-black/60"
          : "bg-[#030714] py-4 border-b border-white/10 shadow-md shadow-black/40"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="group flex items-center">
          <BrandLogo size="md" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {/* Solutions with MegaMenu trigger */}
          <div
            className="relative"
            onMouseEnter={() => setActiveMegaMenu("solutions")}
          >
            <button
              onClick={() => setActiveMegaMenu(activeMegaMenu === "solutions" ? null : "solutions")}
              className={cn(
                "flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors",
                activeMegaMenu === "solutions"
                  ? "text-cyan-400 bg-white/10"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              )}
            >
              <span>Solutions</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  activeMegaMenu === "solutions" && "rotate-180 text-cyan-400"
                )}
              />
            </button>
          </div>

          {/* Industries with MegaMenu trigger */}
          <div
            className="relative"
            onMouseEnter={() => setActiveMegaMenu("industries")}
          >
            <button
              onClick={() => setActiveMegaMenu(activeMegaMenu === "industries" ? null : "industries")}
              className={cn(
                "flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors",
                activeMegaMenu === "industries"
                  ? "text-cyan-400 bg-white/10"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              )}
            >
              <span>Industries</span>
              <ChevronDown
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  activeMegaMenu === "industries" && "rotate-180 text-cyan-400"
                )}
              />
            </button>
          </div>

          <Link
            href="/#why-orbytes"
            className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
          >
            Why Orbytes
          </Link>

          <Link
            href="/success"
            className={cn(
              "px-3.5 py-2 text-sm font-medium rounded-lg transition-colors",
              pathname.startsWith("/success")
                ? "text-cyan-400 bg-white/10"
                : "text-slate-300 hover:text-white hover:bg-white/5"
            )}
          >
            Success
          </Link>

          <Link
            href="/insights"
            className={cn(
              "px-3.5 py-2 text-sm font-medium rounded-lg transition-colors",
              pathname.startsWith("/insights")
                ? "text-cyan-400 bg-white/10"
                : "text-slate-300 hover:text-white hover:bg-white/5"
            )}
          >
            Insights
          </Link>

          <Link
            href="/about"
            className={cn(
              "px-3.5 py-2 text-sm font-medium rounded-lg transition-colors",
              pathname.startsWith("/about")
                ? "text-cyan-400 bg-white/10"
                : "text-slate-300 hover:text-white hover:bg-white/5"
            )}
          >
            About
          </Link>
        </nav>

        {/* Right Controls: Talk to an Expert CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-[0_0_20px_rgba(0,229,255,0.25)] transition-all duration-300 hover:from-cyan-400 hover:to-blue-500 hover:shadow-[0_0_30px_rgba(0,229,255,0.4)]"
          >
            <span>Talk to an Expert</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setIsMobileOpen(true)}
            className="p-2 rounded-lg border border-white/10 text-slate-300 hover:text-white"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* MegaMenu container */}
      <MegaMenu
        activeTab={activeMegaMenu}
        onClose={() => setActiveMegaMenu(null)}
      />

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileOpen}
        onClose={() => setIsMobileOpen(false)}
      />
    </header>
  );
}
