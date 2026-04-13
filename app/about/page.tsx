import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about ESGA Otomotiv — a Turkish manufacturer of quality rubber automotive spare parts since the 1980s.",
};

export default function AboutPage() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "3rem 1.25rem" }}>
      <h1
        style={{
          fontSize: "clamp(2rem, 4vw, 2.75rem)",
          fontWeight: 800,
          color: "#0f172a",
          marginBottom: "0.5rem",
        }}
      >
        About ESGA Otomotiv
      </h1>
      <div
        style={{
          width: "48px",
          height: "4px",
          backgroundColor: "#c0392b",
          borderRadius: "2px",
          marginBottom: "2rem",
        }}
      />

      <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.8, marginBottom: "1.5rem" }}>
        ESGA Otomotiv has been a trusted manufacturer of rubber automotive spare
        parts in Turkey since the 1980s. Our products serve the aftermarket for
        leading brands including Renault and TOFAŞ, and we maintain strict
        quality standards throughout our manufacturing process.
      </p>

      <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.8, marginBottom: "2.5rem" }}>
        We specialize in precision rubber components — bellows, silent blocks,
        axle boots, engine mounts, and wheel clips — designed to meet or exceed
        OEM specifications.
      </p>

      {/* Values grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1.25rem",
          marginBottom: "3rem",
        }}
      >
        {[
          {
            icon: "🏭",
            title: "Turkish Manufacturing",
            body: "All our parts are designed and manufactured in Turkey, ensuring quality control at every step.",
          },
          {
            icon: "✅",
            title: "OEM Standards",
            body: "Our components meet original equipment manufacturer specifications for fit and performance.",
          },
          {
            icon: "📦",
            title: "500+ Parts",
            body: "A wide catalog covering many vehicle models across multiple brands.",
          },
          {
            icon: "🔬",
            title: "Tested Materials",
            body: "We use only tested natural rubber, EPDM, neoprene, and thermoplastic rubber compounds.",
          },
        ].map((item) => (
          <div
            key={item.title}
            style={{
              backgroundColor: "#f8fafc",
              borderRadius: "12px",
              padding: "1.5rem",
              border: "1px solid #e2e8f0",
            }}
          >
            <div style={{ fontSize: "28px", marginBottom: "10px" }}>{item.icon}</div>
            <h3 style={{ margin: "0 0 8px", fontSize: "15px", fontWeight: 700, color: "#0f172a" }}>
              {item.title}
            </h3>
            <p style={{ margin: 0, fontSize: "13px", color: "#64748b", lineHeight: 1.6 }}>
              {item.body}
            </p>
          </div>
        ))}
      </div>

      <div
        style={{
          backgroundColor: "#0f172a",
          borderRadius: "16px",
          padding: "2rem",
          color: "#fff",
        }}
      >
        <h2 style={{ margin: "0 0 12px", fontSize: "18px", fontWeight: 700 }}>
          Need a specific part?
        </h2>
        <p style={{ margin: "0 0 1.25rem", color: "#94a3b8", fontSize: "14px", lineHeight: 1.6 }}>
          Our catalog is always growing. If you can&apos;t find what you need, reach
          out and we&apos;ll point you in the right direction.
        </p>
        <a
          href="/contact"
          style={{
            display: "inline-block",
            backgroundColor: "#c0392b",
            color: "#fff",
            padding: "10px 22px",
            borderRadius: "7px",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "14px",
          }}
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
