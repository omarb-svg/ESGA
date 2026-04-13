import Link from "next/link";
import { Product } from "@/lib/types";

export default function ProductCard({ product }: { product: Product }) {
  const categoryColors: Record<string, string> = {
    "Bellows": "#0369a1",
    "Silent Blocks": "#7c3aed",
    "Wheel Clips": "#059669",
    "Engine Mounts": "#d97706",
    "Axle Boots": "#c0392b",
  };
  const tagColor = categoryColors[product.category] ?? "#475569";

  return (
    <Link
      href={`/products/${product.id}`}
      style={{ textDecoration: "none", color: "inherit", display: "block" }}
    >
      <article
        className="card-hover"
        style={{
          border: "1px solid #e2e8f0",
          borderRadius: "12px",
          padding: "1.25rem",
          backgroundColor: "#fff",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        {/* Icon placeholder */}
        <div
          style={{
            width: "100%",
            height: "120px",
            backgroundColor: "#f1f5f9",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <GearIcon />
        </div>

        {/* Category tag */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span
            style={{
              fontSize: "11px",
              fontWeight: 600,
              color: tagColor,
              backgroundColor: `${tagColor}18`,
              padding: "3px 8px",
              borderRadius: "100px",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}
          >
            {product.category}
          </span>
          {!product.inStock && (
            <span style={{ fontSize: "11px", color: "#94a3b8" }}>Out of stock</span>
          )}
        </div>

        {/* Name */}
        <h3
          style={{
            margin: 0,
            fontSize: "15px",
            fontWeight: 600,
            color: "#0f172a",
            lineHeight: "1.4",
          }}
        >
          {product.name}
        </h3>

        {/* Part number */}
        <p style={{ margin: 0, fontSize: "12px", color: "#64748b", fontFamily: "monospace" }}>
          Part #{product.partNumber}
        </p>

        {/* Brand + models */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
          <span
            style={{
              fontSize: "12px",
              fontWeight: 600,
              color: "#c0392b",
              backgroundColor: "#fef2f2",
              padding: "3px 8px",
              borderRadius: "100px",
            }}
          >
            {product.brand}
          </span>
          {product.models.map((m) => (
            <span
              key={m}
              style={{
                fontSize: "12px",
                color: "#475569",
                backgroundColor: "#f1f5f9",
                padding: "3px 8px",
                borderRadius: "100px",
              }}
            >
              {m}
            </span>
          ))}
        </div>
      </article>
    </Link>
  );
}

function GearIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#cbd5e1"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}
