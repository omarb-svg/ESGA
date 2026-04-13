"use client";

import { useState, useMemo } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import { products, brands, categories } from "@/data/products";
import { Suspense } from "react";

function ProductsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [search, setSearch] = useState(searchParams.get("q") ?? "");
  const [brand, setBrand] = useState(searchParams.get("brand") ?? "all");
  const [category, setCategory] = useState(searchParams.get("category") ?? "all");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (brand !== "all" && p.brand !== brand) return false;
      if (category !== "all" && p.category !== category) return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        return (
          p.name.toLowerCase().includes(q) ||
          p.partNumber.toLowerCase().includes(q) ||
          p.models.some((m) => m.toLowerCase().includes(q)) ||
          p.brand.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [search, brand, category]);

  function handleSearch(val: string) {
    setSearch(val);
    const params = new URLSearchParams();
    if (val) params.set("q", val);
    if (brand !== "all") params.set("brand", brand);
    if (category !== "all") params.set("category", category);
    router.replace(`/products?${params.toString()}`, { scroll: false });
  }

  function handleBrand(val: string) {
    setBrand(val);
    const params = new URLSearchParams();
    if (search) params.set("q", search);
    if (val !== "all") params.set("brand", val);
    if (category !== "all") params.set("category", category);
    router.replace(`/products?${params.toString()}`, { scroll: false });
  }

  function handleCategory(val: string) {
    setCategory(val);
    const params = new URLSearchParams();
    if (search) params.set("q", search);
    if (brand !== "all") params.set("brand", brand);
    if (val !== "all") params.set("category", val);
    router.replace(`/products?${params.toString()}`, { scroll: false });
  }

  const pillStyle = (active: boolean) => ({
    padding: "7px 14px",
    borderRadius: "100px",
    border: active ? "1.5px solid #c0392b" : "1.5px solid #e2e8f0",
    backgroundColor: active ? "#fef2f2" : "#fff",
    color: active ? "#c0392b" : "#475569",
    fontWeight: active ? 600 : 400,
    fontSize: "13px",
    cursor: "pointer",
    whiteSpace: "nowrap" as const,
    transition: "all 0.15s",
  });

  return (
    <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2.5rem 1.25rem" }}>
      {/* Page header */}
      <div style={{ marginBottom: "2rem" }}>
        <h1
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
            fontWeight: 800,
            color: "#0f172a",
            margin: "0 0 8px",
          }}
        >
          Product Catalog
        </h1>
        <p style={{ color: "#64748b", margin: 0, fontSize: "15px" }}>
          {filtered.length} part{filtered.length !== 1 ? "s" : ""} found
        </p>
      </div>

      {/* Search */}
      <div style={{ position: "relative", marginBottom: "1.5rem" }}>
        <SearchIcon />
        <input
          type="search"
          placeholder="Search by name, part number, or model…"
          value={search}
          onChange={(e) => handleSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "12px 16px 12px 44px",
            borderRadius: "10px",
            border: "1.5px solid #e2e8f0",
            fontSize: "15px",
            color: "#0f172a",
            backgroundColor: "#fff",
            outline: "none",
            WebkitAppearance: "none",
          }}
          onFocus={(e) => (e.target.style.borderColor = "#c0392b")}
          onBlur={(e) => (e.target.style.borderColor = "#e2e8f0")}
        />
      </div>

      {/* Brand filter */}
      <div style={{ marginBottom: "1rem" }}>
        <p style={{ fontSize: "12px", fontWeight: 600, color: "#64748b", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
          Brand
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          <button style={pillStyle(brand === "all")} onClick={() => handleBrand("all")}>
            All
          </button>
          {brands.map((b) => (
            <button key={b} style={pillStyle(brand === b)} onClick={() => handleBrand(b)}>
              {b}
            </button>
          ))}
        </div>
      </div>

      {/* Category filter */}
      <div style={{ marginBottom: "2.5rem" }}>
        <p style={{ fontSize: "12px", fontWeight: 600, color: "#64748b", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
          Category
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          <button style={pillStyle(category === "all")} onClick={() => handleCategory("all")}>
            All
          </button>
          {categories.map((c) => (
            <button key={c} style={pillStyle(category === c)} onClick={() => handleCategory(c)}>
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {filtered.length === 0 ? (
        <div style={{ textAlign: "center", padding: "4rem 0", color: "#64748b" }}>
          <p style={{ fontSize: "18px", fontWeight: 600, marginBottom: "8px" }}>No parts found</p>
          <p style={{ fontSize: "14px" }}>
            Try adjusting your search or filters.
          </p>
        </div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
            gap: "1.25rem",
          }}
        >
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

function SearchIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#94a3b8"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export default function ProductsPage() {
  return (
    <Suspense>
      <ProductsContent />
    </Suspense>
  );
}
