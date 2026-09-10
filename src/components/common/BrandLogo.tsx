import React from "react";

interface BrandLogoProps {
  className?: string;
  iconClassName?: string;
  textClassName?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export function BrandLogoIcon({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Orbytes Global Logo"
    >
      <defs>
        <linearGradient id="ob-orbit-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00f2fe" />
          <stop offset="50%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="ob-core-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0891b2" />
          <stop offset="100%" stopColor="#0284c7" />
        </linearGradient>
        <radialGradient id="ob-node-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#e0f2fe" />
          <stop offset="60%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0284c7" />
        </radialGradient>
        <filter id="ob-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="0.8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Rounded Squircle Container */}
      <rect
        width="40"
        height="40"
        rx="10"
        fill="#030718"
        stroke="rgba(56, 189, 248, 0.35)"
        strokeWidth="1.2"
      />

      {/* Ambient Core Radial Glow */}
      <circle cx="20" cy="20" r="10" fill="#00e5ff" opacity="0.16" />

      {/* Central Cyber Globe / Node Core */}
      <circle
        cx="20"
        cy="20"
        r="8"
        fill="url(#ob-core-grad)"
        stroke="#7dd3fc"
        strokeWidth="1"
      />

      {/* Globe Longitude / Latitude Meridian Rings */}
      <ellipse
        cx="20"
        cy="20"
        rx="8"
        ry="3.4"
        fill="none"
        stroke="#bae6fd"
        strokeWidth="0.8"
        strokeOpacity="0.85"
      />
      <line
        x1="20"
        y1="12"
        x2="20"
        y2="28"
        stroke="#bae6fd"
        strokeWidth="0.75"
        strokeOpacity="0.7"
        strokeDasharray="1.5 1.2"
      />

      {/* Dynamic Angled Orbital Trajectory Ribbon (-30 deg) */}
      <ellipse
        cx="20"
        cy="20"
        rx="15"
        ry="5.8"
        transform="rotate(-30 20 20)"
        fill="none"
        stroke="url(#ob-orbit-grad)"
        strokeWidth="1.8"
        strokeDasharray="80 12"
        filter="url(#ob-glow)"
      />

      {/* Orbital Satellite Byte Node */}
      <circle
        cx="8.5"
        cy="13.2"
        r="2.2"
        fill="url(#ob-node-glow)"
        stroke="#ffffff"
        strokeWidth="0.9"
      />
      <circle cx="8.5" cy="13.2" r="4.2" fill="#00e5ff" opacity="0.3" />

      {/* Micro Byte Node at Opposite Apogee */}
      <circle cx="31.2" cy="26.4" r="1.5" fill="#38bdf8" />
    </svg>
  );
}

export function BrandLogo({
  className = "",
  iconClassName,
  textClassName,
  showText = true,
  size = "md",
}: BrandLogoProps) {
  const sizeMap = {
    sm: {
      icon: "h-7 w-7",
      text: "text-lg",
    },
    md: {
      icon: "h-8 w-8",
      text: "text-xl",
    },
    lg: {
      icon: "h-10 w-10",
      text: "text-2xl",
    },
  };

  const selectedSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-[0_0_15px_rgba(0,229,255,0.35)] rounded-xl">
        <BrandLogoIcon className={iconClassName || selectedSize.icon} />
      </div>
      {showText && (
        <span
          className={`font-bold tracking-tight font-display ${
            textClassName || `${selectedSize.text} text-white`
          }`}
        >
          ORBYTES GLOBAL
        </span>
      )}
    </div>
  );
}
