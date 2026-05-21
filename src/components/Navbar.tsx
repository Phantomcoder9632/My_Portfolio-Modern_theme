"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        height: "64px",
        background: scrolled ? "rgba(250,248,255,0.95)" : "rgba(250,248,255,0.85)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid #e8e7ef" : "1px solid transparent",
        transition: "background 0.3s, border-color 0.3s, box-shadow 0.3s",
        boxShadow: scrolled ? "0 2px 16px rgba(0,35,175,0.07)" : "none",
      }}
    >
      <div
        className="container"
        style={{
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "24px",
        }}
      >
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", flexShrink: 0 }}>
          <img
            src="/phantom_ai_logo.png"
            alt="Logo"
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "10px",
              objectFit: "cover"
            }}
          />
          <span
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: "#1a1b21",
              letterSpacing: "0.01em",
            }}
            className="hide-mobile"
          >
            Profile
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
          className="hide-mobile"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: "7px 14px",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? "#0023af" : "#444655",
                  background: isActive ? "rgba(0,35,175,0.07)" : "transparent",
                  transition: "all 0.15s",
                  letterSpacing: "0.01em",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <Link
          href="/contact"
          className="hide-mobile"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            padding: "9px 20px",
            background: "#0023af",
            color: "#ffffff",
            borderRadius: "9999px",
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "0.01em",
            flexShrink: 0,
            transition: "background 0.2s, transform 0.2s",
          }}
        >
          Get in Touch
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            display: "none",
            flexDirection: "column",
            gap: "5px",
            padding: "8px",
            borderRadius: "8px",
            background: menuOpen ? "rgba(0,35,175,0.07)" : "transparent",
            transition: "background 0.2s",
          }}
          className="show-mobile"
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "20px",
                height: "2px",
                background: "#1a1b21",
                borderRadius: "2px",
                transition: "transform 0.2s, opacity 0.2s",
                transform:
                  menuOpen
                    ? i === 0 ? "translateY(7px) rotate(45deg)" : i === 2 ? "translateY(-7px) rotate(-45deg)" : "scale(0)"
                    : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "64px",
            left: 0,
            right: 0,
            background: "rgba(250,248,255,0.98)",
            borderBottom: "1px solid #e8e7ef",
            padding: "16px 24px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            boxShadow: "0 8px 32px rgba(0,35,175,0.1)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: "12px 16px",
                borderRadius: "8px",
                fontSize: "15px",
                fontWeight: pathname === link.href ? 600 : 500,
                color: pathname === link.href ? "#0023af" : "#1a1b21",
                background: pathname === link.href ? "rgba(0,35,175,0.06)" : "transparent",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: "8px",
              padding: "12px 16px",
              background: "#0023af",
              color: "#fff",
              borderRadius: "12px",
              fontSize: "14px",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            Get in Touch
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .hide-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 901px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </header>
  );
}
