import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Ben Armour | Software QA Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0e0e0e",
          backgroundImage:
            "radial-gradient(ellipse 50% 60% at 85% 10%, rgba(255, 116, 57, 0.14), transparent)",
          color: "#e7e5e4",
          fontFamily: "sans-serif",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 30,
            fontWeight: 700,
            letterSpacing: 8,
          }}
        >
          <span>BUILD</span>
          <span style={{ color: "#ff7439" }}>VERIFIED</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, fontWeight: 700, lineHeight: 1.1 }}>
            Ben Armour
          </div>
          <div style={{ fontSize: 42, color: "#ff7439", marginTop: 8 }}>
            Software QA Engineer
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              height: 3,
              width: 120,
              backgroundImage:
                "linear-gradient(90deg, #ff7439, #ffad8e)",
              marginBottom: 28,
            }}
          />
          <div style={{ display: "flex", fontSize: 26, color: "#acabaa" }}>
            1000+ automated tests · 20+ clients · 4+ years experience
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
