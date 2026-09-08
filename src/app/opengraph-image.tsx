import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Orbytes Global Solutions — Enterprise Technology, Managed Security & Cloud Solutions";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#030714",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(6, 182, 212, 0.25) 0%, transparent 45%), radial-gradient(circle at 15% 85%, rgba(37, 99, 235, 0.2) 0%, transparent 50%)",
          padding: "72px 80px",
          fontFamily: "sans-serif",
          color: "#ffffff",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        {/* Header with Brand Badge */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #06b6d4, #2563eb)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "34px",
              fontWeight: 800,
              color: "#ffffff",
              boxShadow: "0 0 25px rgba(6, 182, 212, 0.5)",
            }}
          >
            O
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "28px", fontWeight: 800, letterSpacing: "1px" }}>
              ORBYTES GLOBAL SOLUTIONS
            </span>
            <span style={{ fontSize: "14px", color: "#22d3ee", letterSpacing: "2px", textTransform: "uppercase" }}>
              Enterprise Technology Platform
            </span>
          </div>
        </div>

        {/* Hero Title and Subtitle */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", maxWidth: "960px" }}>
          <div
            style={{
              fontSize: "56px",
              fontWeight: 800,
              lineHeight: 1.15,
              background: "linear-gradient(to right, #ffffff, #94a3b8)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Technology that Secures. Technology that Scales.
          </div>
          <div style={{ fontSize: "24px", color: "#94a3b8", lineHeight: 1.4 }}>
            Proactive Cybersecurity (MSSP) · 24/7 Managed IT (MSP) · Cloud Architecture · ITSM Solutions
          </div>
        </div>

        {/* Footer info pills */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: "28px" }}>
          <div style={{ display: "flex", gap: "16px" }}>
            {["24/7/365 SOC", "99.99% SLA", "Global Multi-Region"].map((pill) => (
              <div
                key={pill}
                style={{
                  padding: "8px 18px",
                  borderRadius: "999px",
                  backgroundColor: "rgba(6, 182, 212, 0.12)",
                  border: "1px solid rgba(6, 182, 212, 0.3)",
                  color: "#22d3ee",
                  fontSize: "14px",
                  fontWeight: 600,
                }}
              >
                {pill}
              </div>
            ))}
          </div>
          <div style={{ fontSize: "18px", color: "#64748b", fontWeight: 600 }}>
            orbytesglobal.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
