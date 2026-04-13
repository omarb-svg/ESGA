"use client";

import { useEffect, useState } from "react";

export default function InstallPrompt() {
  const [showSafariHint, setShowSafariHint] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Show Safari "Add to Home Screen" hint on iOS
    const isIOS =
      /iphone|ipad|ipod/i.test(navigator.userAgent) ||
      (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
    const isInStandaloneMode =
      "standalone" in window.navigator &&
      (window.navigator as { standalone?: boolean }).standalone === true;
    const wasDismissed = sessionStorage.getItem("pwa-hint-dismissed");

    if (isIOS && !isInStandaloneMode && !wasDismissed) {
      setTimeout(() => setShowSafariHint(true), 3000);
    }
  }, []);

  if (!showSafariHint || dismissed) return null;

  return (
    <div
      role="dialog"
      aria-label="Install app"
      style={{
        position: "fixed",
        bottom: "20px",
        left: "50%",
        transform: "translateX(-50%)",
        width: "calc(100% - 32px)",
        maxWidth: "400px",
        backgroundColor: "#0f172a",
        color: "#fff",
        borderRadius: "16px",
        padding: "16px 18px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
        zIndex: 100,
        display: "flex",
        gap: "14px",
        alignItems: "flex-start",
      }}
    >
      {/* Icon */}
      <div
        style={{
          width: "40px",
          height: "40px",
          backgroundColor: "#c0392b",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <span style={{ fontWeight: 800, fontSize: "18px" }}>E</span>
      </div>

      {/* Text */}
      <div style={{ flex: 1 }}>
        <p style={{ margin: "0 0 4px", fontWeight: 600, fontSize: "14px" }}>
          Install ESGA App
        </p>
        <p style={{ margin: 0, fontSize: "12px", color: "#94a3b8", lineHeight: 1.5 }}>
          Tap the{" "}
          <ShareIcon />{" "}
          Share button, then &ldquo;<strong>Add to Home Screen</strong>&rdquo;
        </p>
      </div>

      {/* Dismiss */}
      <button
        onClick={() => {
          setDismissed(true);
          sessionStorage.setItem("pwa-hint-dismissed", "1");
        }}
        aria-label="Dismiss"
        style={{
          background: "none",
          border: "none",
          color: "#64748b",
          cursor: "pointer",
          padding: "2px",
          flexShrink: 0,
          fontSize: "20px",
          lineHeight: 1,
        }}
      >
        ×
      </button>
    </div>
  );
}

function ShareIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ display: "inline", verticalAlign: "middle" }}
    >
      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
      <polyline points="16 6 12 2 8 6" />
      <line x1="12" y1="2" x2="12" y2="15" />
    </svg>
  );
}
