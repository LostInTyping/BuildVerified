import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Ben Armour — Software QA Engineer";
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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0a0a0a",
          color: "#f5f5f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 700 }}>Ben Armour</div>
        <div style={{ fontSize: 32, color: "#a0a0a0", marginTop: 16 }}>
          Software QA Engineer
        </div>
      </div>
    ),
    { ...size }
  );
}
