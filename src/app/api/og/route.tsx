import { ImageResponse } from "next/og";

export const runtime = "edge";

export async function GET() {
  try {
    // Create a simplified OG image with just the domain name
    return new ImageResponse(
      (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            backgroundColor: "#1f2937",
            color: "white",
            fontFamily: "sans-serif",
            position: "relative",
          }}
        >
          {/* Background pattern */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 1%, transparent 1%)",
              backgroundSize: "20px 20px",
              zIndex: 1,
            }}
          />

          {/* Main text */}
          <h1
            style={{
              fontSize: 120,
              fontWeight: "bold",
              textAlign: "center",
              margin: 0,
              zIndex: 2,
              textShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
              backgroundImage: "linear-gradient(to right, #a0d5ff, #ffffff)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Nour-sofanati.com
          </h1>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: Error | unknown) {
    console.log(`${e instanceof Error ? e.message : "Unknown error occurred"}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
