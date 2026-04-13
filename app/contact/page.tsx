import type { Metadata } from "next";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with ESGA Otomotiv for product inquiries and quotes.",
};

export default function ContactPage() {
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
        Contact Us
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

      <p style={{ fontSize: "16px", color: "#475569", lineHeight: 1.8, marginBottom: "2.5rem" }}>
        Have a question about a product, need a quote, or looking for a part
        not listed in our catalog? Send us a message and we&apos;ll get back to you
        as soon as possible.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
        }}
      >
        <ContactForm />

        {/* Contact info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {[
            { icon: "📍", label: "Address", value: "Istanbul, Turkey" },
            { icon: "📧", label: "Email", value: "info@esga.com.tr", href: "mailto:info@esga.com.tr" },
            { icon: "🕐", label: "Working Hours", value: "Monday – Friday, 09:00 – 18:00 (GMT+3)" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                gap: "14px",
                alignItems: "flex-start",
                padding: "1rem",
                backgroundColor: "#f8fafc",
                borderRadius: "10px",
                border: "1px solid #e2e8f0",
              }}
            >
              <span style={{ fontSize: "22px", flexShrink: 0 }}>{item.icon}</span>
              <div>
                <p style={{ margin: "0 0 2px", fontSize: "12px", fontWeight: 600, color: "#64748b", textTransform: "uppercase", letterSpacing: "0.4px" }}>
                  {item.label}
                </p>
                {item.href ? (
                  <a href={item.href} style={{ color: "#c0392b", textDecoration: "none", fontSize: "14px", fontWeight: 500 }}>
                    {item.value}
                  </a>
                ) : (
                  <p style={{ margin: 0, fontSize: "14px", color: "#0f172a" }}>{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
