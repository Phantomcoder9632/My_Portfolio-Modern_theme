import Link from "next/link";

const footerNav = [
  { label: "Home", href: "/" },
  { label: "Skills", href: "/skills" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Contact", href: "/contact" },
];

const contactLinks = [
  { label: "connect.bikram9632@gmail.com", href: "mailto:connect.bikram9632@gmail.com" },
  { label: "github.com/Phantomcoder9632", href: "https://github.com/Phantomcoder9632" },
  { label: "linkedin.com/in/bikram-hawladar-2742092b1", href: "https://www.linkedin.com/in/bikram-hawladar-2742092b1/" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0d0e14",
        color: "rgba(255,255,255,0.75)",
        padding: "56px 0 32px",
      }}
    >
      <div className="container">
        {/* Top grid */}
        <div className="footer-grid">
          {/* Brand */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img
                src="/phantom_ai_logo.png"
                alt="Logo"
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  flexShrink: 0
                }}
              />
              <span style={{ fontWeight: 700, fontSize: "16px", color: "#fff" }}>Bikram Hawladar</span>
            </div>
            <p style={{ fontSize: "14px", lineHeight: 1.7, color: "rgba(255,255,255,0.5)" }}>
              AI/ML Engineer · Software Developer · Data Analyst
              <br />
              IIIT Dharwad, Karnataka, India
            </p>
            <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.3)" }}>
              © 2025 Bikram Hawladar. All rights reserved.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="footer-heading">Navigation</p>
            <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {footerNav.map((item) => (
                <Link key={item.label} href={item.href} className="footer-link">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="footer-heading">Contact</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {contactLinks.map((link) => (
                <a key={link.label} href={link.href} className="footer-link" target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(255,255,255,0.07)", margin: "32px 0 24px" }} />

        {/* Bottom row */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "10px" }}>
          <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.28)" }}>
            Built with Next.js · Deployed with care
          </span>
          <span style={{ fontSize: "12px", color: "rgba(255,255,255,0.28)" }}>
            IIIT Dharwad · B.Tech CSE · 8.55 CGPA
          </span>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 48px;
        }
        .footer-heading {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.35);
          margin-bottom: 14px;
        }
        .footer-link {
          font-size: 14px;
          color: rgba(255,255,255,0.55);
          transition: color 0.15s;
          text-decoration: none;
        }
        .footer-link:hover { color: #bbc3ff; }
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  );
}
