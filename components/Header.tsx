"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        backgroundColor: "#0f172a",
        borderBottom: "3px solid #c0392b",
        position: "sticky",
        top: 0,
        zIndex: 50,
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 1.25rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "64px",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
          <Image
            src="/logo.png"
            alt="ESGA Otomotiv"
            width={170}
            height={52}
            priority
            style={{ height: "40px", width: "auto" }}
          />
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: "4px" }} aria-label="Main navigation">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: isActive ? "#fff" : "#94a3b8",
                  fontWeight: isActive ? 600 : 400,
                  fontSize: "14px",
                  padding: "6px 14px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  backgroundColor: isActive
                    ? "rgba(192,57,43,0.2)"
                    : "transparent",
                  transition: "color 0.15s, background-color 0.15s",
                }}
                className="hidden sm:block nav-link"
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
          }}
          className="sm:hidden"
        >
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              backgroundColor: "#fff",
              borderRadius: "2px",
              transition: "transform 0.2s",
              transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              backgroundColor: "#fff",
              borderRadius: "2px",
              opacity: menuOpen ? 0 : 1,
              transition: "opacity 0.2s",
            }}
          />
          <span
            style={{
              display: "block",
              width: "22px",
              height: "2px",
              backgroundColor: "#fff",
              borderRadius: "2px",
              transition: "transform 0.2s",
              transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            backgroundColor: "#1e293b",
            borderTop: "1px solid #334155",
            padding: "8px 1.25rem 16px",
          }}
          className="sm:hidden"
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: "block",
                  color: isActive ? "#fff" : "#94a3b8",
                  fontWeight: isActive ? 600 : 400,
                  fontSize: "15px",
                  padding: "10px 12px",
                  borderRadius: "6px",
                  textDecoration: "none",
                  backgroundColor: isActive ? "rgba(192,57,43,0.2)" : "transparent",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
