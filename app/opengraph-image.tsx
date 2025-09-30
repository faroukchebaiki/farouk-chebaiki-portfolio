import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function OpenGraphImage() {
  const title = siteConfig.brandName || "Portfolio";
  const subtitle = siteConfig.hero?.heading ?? "Full‑Stack Developer";

  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        background: "linear-gradient(135deg, #0b0f14 0%, #19232e 100%)",
        color: "#ffffff",
        padding: "64px 72px",
      }}
    >
      <div
        style={{
          fontSize: 56,
          fontWeight: 800,
          letterSpacing: -1,
          marginBottom: 14,
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: 34,
          lineHeight: 1.25,
          opacity: 0.9,
          maxWidth: 880,
        }}
      >
        {subtitle}
      </div>
      {siteConfig.siteUrl && (
        <div style={{ marginTop: 28, fontSize: 20, opacity: 0.8 }}>
          {new URL(siteConfig.siteUrl).host}
        </div>
      )}
    </div>,
    { ...size },
  );
}
