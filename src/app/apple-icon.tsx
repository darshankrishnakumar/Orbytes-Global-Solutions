import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#030714",
          borderRadius: "36px",
          border: "4px solid #06b6d4",
        }}
      >
        <div
          style={{
            fontSize: 104,
            fontWeight: 800,
            background: "linear-gradient(135deg, #06b6d4, #3b82f6)",
            backgroundClip: "text",
            color: "transparent",
            fontFamily: "sans-serif",
          }}
        >
          O
        </div>
      </div>
    ),
    { ...size }
  );
}
