import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products, categories } from "@/data/products";

const featuredProducts = products.filter((p) => p.inStock).slice(0, 6);

const categoryIcons: Record<string, string> = {
  Bellows: "🔧",
  "Silent Blocks": "⚙️",
  "Wheel Clips": "🔩",
  "Engine Mounts": "🛠️",
  "Axle Boots": "🔄",
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0f172a 100%)",
          color: "#fff",
          padding: "5rem 1.25rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-80px",
            right: "-80px",
            width: "320px",
            height: "320px",
            borderRadius: "50%",
            border: "1px solid rgba(192,57,43,0.15)",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "-60px",
            width: "240px",
            height: "240px",
            borderRadius: "50%",
            border: "1px solid rgba(192,57,43,0.1)",
          }}
        />

        <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative" }}>
          <div style={{ maxWidth: "600px" }}>
            <span
              style={{
                display: "inline-block",
                backgroundColor: "rgba(192,57,43,0.2)",
                color: "#f87171",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "1px",
                textTransform: "uppercase",
                padding: "5px 12px",
                borderRadius: "100px",
                marginBottom: "1.25rem",
              }}
            >
              Quality Since the 1980s
            </span>

            <h1
              style={{
                fontSize: "clamp(2rem, 5vw, 3.25rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.5px",
                marginBottom: "1.25rem",
              }}
            >
              Precision Rubber
              <br />
              <span style={{ color: "#c0392b" }}>Automotive Parts</span>
            </h1>

            <p
              style={{
                fontSize: "clamp(1rem, 2vw, 1.125rem)",
                color: "#94a3b8",
                lineHeight: 1.7,
                marginBottom: "2rem",
                maxWidth: "480px",
              }}
            >
              ESGA Otomotiv manufactures high-quality rubber spare parts for
              Renault, TOFAŞ, and more — built to OEM standards in Turkey.
            </p>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <Link
                href="/products"
                style={{
                  backgroundColor: "#c0392b",
                  color: "#fff",
                  padding: "12px 28px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "15px",
                  display: "inline-block",
                }}
              >
                Browse Products
              </Link>
              <Link
                href="/about"
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  color: "#fff",
                  padding: "12px 28px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: 600,
                  fontSize: "15px",
                  display: "inline-block",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ backgroundColor: "#c0392b", color: "#fff", padding: "1rem 1.25rem" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          {[
            { value: "40+", label: "Years Experience" },
            { value: "500+", label: "Part Numbers" },
            { value: "10+", label: "Vehicle Brands" },
            { value: "100%", label: "Quality Tested" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <p style={{ margin: 0, fontSize: "22px", fontWeight: 800 }}>{stat.value}</p>
              <p style={{ margin: 0, fontSize: "12px", opacity: 0.85 }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section style={{ padding: "4rem 1.25rem", backgroundColor: "#f8fafc" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              color: "#0f172a",
              marginBottom: "0.5rem",
            }}
          >
            Product Categories
          </h2>
          <p style={{ color: "#64748b", marginBottom: "2rem", fontSize: "15px" }}>
            Explore our full range of rubber automotive components.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
              gap: "1rem",
            }}
          >
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/products?category=${encodeURIComponent(cat)}`}
                style={{ textDecoration: "none" }}
              >
                <div
                  className="cat-hover"
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid #e2e8f0",
                    borderRadius: "12px",
                    padding: "1.5rem 1rem",
                    textAlign: "center",
                    cursor: "pointer",
                  }}
                >
                  <div style={{ fontSize: "32px", marginBottom: "10px" }}>
                    {categoryIcons[cat] ?? "🔧"}
                  </div>
                  <p
                    style={{
                      margin: 0,
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#0f172a",
                    }}
                  >
                    {cat}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section style={{ padding: "4rem 1.25rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              marginBottom: "2rem",
              flexWrap: "wrap",
              gap: "12px",
            }}
          >
            <div>
              <h2
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 700,
                  color: "#0f172a",
                  margin: "0 0 4px",
                }}
              >
                Featured Parts
              </h2>
              <p style={{ color: "#64748b", margin: 0, fontSize: "15px" }}>
                Our most popular spare parts
              </p>
            </div>
            <Link
              href="/products"
              style={{
                color: "#c0392b",
                fontWeight: 600,
                fontSize: "14px",
                textDecoration: "none",
              }}
            >
              View all →
            </Link>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
              gap: "1.25rem",
            }}
          >
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          backgroundColor: "#0f172a",
          color: "#fff",
          padding: "4rem 1.25rem",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
              marginBottom: "1rem",
            }}
          >
            Can&apos;t find your part?
          </h2>
          <p style={{ color: "#94a3b8", marginBottom: "2rem", lineHeight: 1.7 }}>
            Our catalog is constantly growing. Contact us and we&apos;ll help you find
            the right component for your vehicle.
          </p>
          <Link
            href="/contact"
            style={{
              backgroundColor: "#c0392b",
              color: "#fff",
              padding: "13px 32px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "15px",
              display: "inline-block",
            }}
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
