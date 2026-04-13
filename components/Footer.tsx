import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0f172a",
        borderTop: "3px solid #c0392b",
        color: "#94a3b8",
        marginTop: "auto",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "2.5rem 1.25rem",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "2rem",
        }}
      >
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                backgroundColor: "#c0392b",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ color: "#fff", fontWeight: 800, fontSize: "14px" }}>E</span>
            </div>
            <span style={{ color: "#fff", fontWeight: 700, fontSize: "16px" }}>ESGA Otomotiv</span>
          </div>
          <p style={{ fontSize: "13px", lineHeight: "1.6" }}>
            Quality rubber automotive spare parts manufacturer based in Turkey.
            Serving the automotive industry since the 1980s.
          </p>
        </div>

        {/* Products */}
        <div>
          <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "14px", marginBottom: "12px" }}>
            Products
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
            {["Bellows", "Silent Blocks", "Axle Boots", "Engine Mounts", "Wheel Clips"].map((cat) => (
              <li key={cat}>
                <Link
                  href={`/products?category=${cat}`}
                  style={{ color: "#94a3b8", textDecoration: "none", fontSize: "13px" }}
                >
                  {cat}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Brands */}
        <div>
          <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "14px", marginBottom: "12px" }}>
            Brands
          </h3>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
            {["Renault", "TOFAŞ", "Fiat", "Peugeot"].map((brand) => (
              <li key={brand}>
                <Link
                  href={`/products?brand=${brand}`}
                  style={{ color: "#94a3b8", textDecoration: "none", fontSize: "13px" }}
                >
                  {brand}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 style={{ color: "#fff", fontWeight: 600, fontSize: "14px", marginBottom: "12px" }}>
            Contact
          </h3>
          <address style={{ fontStyle: "normal", fontSize: "13px", lineHeight: "1.8" }}>
            <p>Istanbul, Turkey</p>
            <a
              href="mailto:info@esga.com.tr"
              style={{ color: "#94a3b8", textDecoration: "none" }}
            >
              info@esga.com.tr
            </a>
          </address>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid #1e293b",
          padding: "1rem 1.25rem",
          textAlign: "center",
          fontSize: "12px",
        }}
      >
        © {new Date().getFullYear()} ESGA Otomotiv. All rights reserved.
      </div>
    </footer>
  );
}
