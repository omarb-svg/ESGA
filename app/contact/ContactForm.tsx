"use client";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "10px 14px",
  borderRadius: "8px",
  border: "1.5px solid #e2e8f0",
  fontSize: "14px",
  color: "#0f172a",
  backgroundColor: "#fff",
  outline: "none",
  WebkitAppearance: "none",
};

export default function ContactForm() {
  return (
    <form
      style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      onSubmit={(e) => e.preventDefault()}
    >
      <div>
        <label htmlFor="name" style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "5px" }}>
          Full Name
        </label>
        <input id="name" type="text" placeholder="Your name" style={inputStyle} />
      </div>

      <div>
        <label htmlFor="email" style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "5px" }}>
          Email Address
        </label>
        <input id="email" type="email" placeholder="you@example.com" style={inputStyle} />
      </div>

      <div>
        <label htmlFor="subject" style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "5px" }}>
          Subject
        </label>
        <input id="subject" type="text" placeholder="Part inquiry, quote request…" style={inputStyle} />
      </div>

      <div>
        <label htmlFor="message" style={{ display: "block", fontSize: "13px", fontWeight: 600, color: "#374151", marginBottom: "5px" }}>
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          placeholder="Describe your need, include part numbers if known…"
          style={{ ...inputStyle, resize: "vertical" }}
        />
      </div>

      <button
        type="submit"
        style={{
          backgroundColor: "#c0392b",
          color: "#fff",
          border: "none",
          padding: "13px",
          borderRadius: "8px",
          fontWeight: 600,
          fontSize: "15px",
          cursor: "pointer",
        }}
      >
        Send Message
      </button>
    </form>
  );
}
