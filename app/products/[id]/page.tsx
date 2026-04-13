import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getProduct, products } from "@/data/products";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { id } = await params;
  const product = getProduct(id);
  if (!product) notFound();

  const relatedProducts = products
    .filter(
      (p) =>
        p.id !== product.id &&
        (p.brand === product.brand || p.category === product.category)
    )
    .slice(0, 3);

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2.5rem 1.25rem" }}>
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        style={{
          display: "flex",
          gap: "6px",
          alignItems: "center",
          fontSize: "13px",
          color: "#64748b",
          marginBottom: "2rem",
        }}
      >
        <Link href="/" style={{ color: "#64748b", textDecoration: "none" }}>
          Home
        </Link>
        <span>›</span>
        <Link href="/products" style={{ color: "#64748b", textDecoration: "none" }}>
          Products
        </Link>
        <span>›</span>
        <span style={{ color: "#0f172a", fontWeight: 500 }}>{product.name}</span>
      </nav>

      {/* Main content */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2.5rem",
          marginBottom: "3rem",
        }}
      >
        {/* Image placeholder */}
        <div
          style={{
            backgroundColor: "#f1f5f9",
            borderRadius: "16px",
            minHeight: "300px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <svg
            width="96"
            height="96"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#cbd5e1"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        </div>

        {/* Details */}
        <div>
          {/* Category + stock */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              marginBottom: "1rem",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "#0369a1",
                backgroundColor: "#e0f2fe",
                padding: "4px 10px",
                borderRadius: "100px",
                textTransform: "uppercase",
                letterSpacing: "0.5px",
              }}
            >
              {product.category}
            </span>
            <span
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: product.inStock ? "#059669" : "#dc2626",
                backgroundColor: product.inStock ? "#d1fae5" : "#fee2e2",
                padding: "4px 10px",
                borderRadius: "100px",
              }}
            >
              {product.inStock ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          {/* Name */}
          <h1
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 800,
              color: "#0f172a",
              margin: "0 0 0.5rem",
              lineHeight: 1.2,
            }}
          >
            {product.name}
          </h1>

          {/* Part number */}
          <p
            style={{
              fontFamily: "monospace",
              fontSize: "14px",
              color: "#64748b",
              margin: "0 0 1.5rem",
              backgroundColor: "#f8fafc",
              display: "inline-block",
              padding: "4px 10px",
              borderRadius: "6px",
              border: "1px solid #e2e8f0",
            }}
          >
            Part # {product.partNumber}
          </p>

          {/* Description */}
          <p
            style={{
              fontSize: "15px",
              color: "#475569",
              lineHeight: 1.7,
              margin: "0 0 2rem",
            }}
          >
            {product.description}
          </p>

          {/* Specs */}
          <div
            style={{
              borderRadius: "12px",
              border: "1px solid #e2e8f0",
              overflow: "hidden",
              marginBottom: "2rem",
            }}
          >
            {[
              { label: "Brand", value: product.brand },
              {
                label: "Compatible Models",
                value: product.models.join(", "),
              },
              { label: "Material", value: product.material },
            ].map((row, i) => (
              <div
                key={row.label}
                style={{
                  display: "flex",
                  padding: "12px 16px",
                  backgroundColor: i % 2 === 0 ? "#f8fafc" : "#fff",
                  borderBottom: i < 2 ? "1px solid #e2e8f0" : "none",
                }}
              >
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: "#64748b",
                    width: "160px",
                    flexShrink: 0,
                  }}
                >
                  {row.label}
                </span>
                <span style={{ fontSize: "14px", color: "#0f172a" }}>
                  {row.value}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            style={{
              display: "inline-block",
              backgroundColor: "#c0392b",
              color: "#fff",
              padding: "13px 28px",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: "15px",
            }}
          >
            Request a Quote
          </Link>
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <section>
          <h2
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              color: "#0f172a",
              marginBottom: "1.25rem",
            }}
          >
            Related Parts
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
              gap: "1rem",
            }}
          >
            {relatedProducts.map((p) => (
              <Link
                key={p.id}
                href={`/products/${p.id}`}
                style={{
                  display: "block",
                  border: "1px solid #e2e8f0",
                  borderRadius: "10px",
                  padding: "1rem",
                  textDecoration: "none",
                  color: "inherit",
                }}
                className="related-hover"
              >
                <p
                  style={{ margin: "0 0 4px", fontWeight: 600, fontSize: "14px", color: "#0f172a" }}
                >
                  {p.name}
                </p>
                <p
                  style={{ margin: "0 0 8px", fontSize: "12px", color: "#64748b", fontFamily: "monospace" }}
                >
                  #{p.partNumber}
                </p>
                <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                  <span
                    style={{
                      fontSize: "11px",
                      color: "#c0392b",
                      backgroundColor: "#fef2f2",
                      padding: "2px 8px",
                      borderRadius: "100px",
                      fontWeight: 600,
                    }}
                  >
                    {p.brand}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
