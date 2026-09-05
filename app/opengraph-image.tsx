import { ImageResponse } from "next/og";

export const alt = "Muhamed Alaa — BLACK-MAK® Logo & Visual Identity Designer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#070708",
          color: "#f5f5f1",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, letterSpacing: 4, color: "#9a9a96" }}>
          <span>BLACK—MAK®</span>
          <span>CURRICULUM VITÆ · 2026</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 128, fontWeight: 800, letterSpacing: -5, lineHeight: 1 }}>
            MUHAMED ALAA
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 24, fontSize: 30, color: "#9a9a96" }}>
            <span style={{ width: 14, height: 14, background: "#c9a227" }} />
            Senior Graphic &amp; Brand Designer
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 22, color: "#5d5d59", letterSpacing: 2 }}>
          <span>12+ YEARS · ARABIC + LATIN IDENTITY</span>
          <span>black-mak-v4.vercel.app</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
