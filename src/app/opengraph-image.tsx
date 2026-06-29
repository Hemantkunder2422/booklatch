import { ImageResponse } from "next/og"

export const alt = "BookLatch — Venue Management Software for Modern Venues"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(1000px circle at 15% 10%, #5b3df5 0%, transparent 45%), radial-gradient(900px circle at 90% 90%, #c026d3 0%, transparent 45%), #14101f",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 20,
              background: "linear-gradient(135deg, #7c5cff, #d946ef)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 44,
              fontWeight: 800,
            }}
          >
            B
          </div>
          <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: -1 }}>
            BookLatch
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 76,
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: -2,
              maxWidth: 920,
            }}
          >
            Run your venue from one beautiful dashboard
          </div>
          <div style={{ fontSize: 32, color: "#c4b5fd", maxWidth: 880 }}>
            Bookings · Payments · Calendars · Invoicing · Staff · Analytics
          </div>
        </div>

        <div style={{ fontSize: 28, color: "#a78bfa", fontWeight: 600 }}>
          booklatch.com
        </div>
      </div>
    ),
    size
  )
}
