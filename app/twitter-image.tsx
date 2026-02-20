import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function TwitterImage() {
  const title = siteConfig.brandName || "Portfolio";
  const subtitle = siteConfig.hero?.subheading ?? "";

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
      <div style={{ fontSize: 52, fontWeight: 800, letterSpacing: -1 }}>{title}</div>
      {subtitle && (
        <div style={{ fontSize: 32, marginTop: 10, opacity: 0.9 }}>{subtitle}</div>
      )}
    </div>,
    { ...size },
  );
}
