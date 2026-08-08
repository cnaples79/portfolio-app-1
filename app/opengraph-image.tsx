import { ImageResponse } from "next/og";

export const alt = "Chase Naples — AI Engineering Lead";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "68px 76px",
        color: "#edf6f8",
        background:
          "linear-gradient(135deg, #071019 0%, #0b2030 62%, #102e35 100%)",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: 24,
        }}
      >
        <span style={{ fontWeight: 800 }}>
          CN<span style={{ color: "#5ee9e2" }}>.</span>
        </span>
        <span style={{ color: "#8eacb7", fontSize: 18 }}>
          ENTERPRISE AI · RAG · AGENTIC SYSTEMS
        </span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <span style={{ color: "#5ee9e2", fontSize: 22, letterSpacing: 4 }}>
          CHASE NAPLES
        </span>
        <span
          style={{
            maxWidth: 980,
            marginTop: 18,
            fontSize: 70,
            lineHeight: 1.03,
            fontWeight: 760,
            letterSpacing: -3,
          }}
        >
          Reliable AI systems for the real world.
        </span>
        <span style={{ marginTop: 26, color: "#b5c8d0", fontSize: 26 }}>
          Vice President · Software Engineer II · Development Lead
        </span>
      </div>
      <div style={{ display: "flex", gap: 18 }}>
        {["grounded", "guarded", "observable"].map((item) => (
          <span
            key={item}
            style={{
              padding: "9px 14px",
              color: "#9cc8c8",
              border: "1px solid #33525e",
              borderRadius: 5,
              fontSize: 16,
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>,
    size,
  );
}
