"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const S = {
  primary: "#0023af",
  primaryDark: "#001a8a",
  primaryFixed: "#dee0ff",
  secondary: "#6a45c4",
  secondaryFixed: "#e9ddff",
  surfaceLow: "#f4f3fb",
  surfaceHigh: "#e8e7ef",
  surfaceVariant: "#e2e2e9",
  onSurface: "#1a1b21",
  onSurfaceVariant: "#444655",
  outline: "#757687",
  outlineVariant: "#c5c5d8",
};

const openTo = ["SDE Internship", "AI / ML Roles", "Agentic RAG Automation", "Data Analysis", "Research Collaborations", "Full-time Roles"];

const subjectOptions = [
  { value: "", label: "Select an inquiry type..." },
  { value: "job", label: "Job / Internship Opportunity" },
  { value: "research", label: "Research Collaboration" },
  { value: "consulting", label: "Freelance / Consulting" },
  { value: "speaking", label: "Speaking Engagement" },
  { value: "other", label: "Other Inquiry" },
];

const contactInfo = [
  { icon: "mail", label: "Email", value: "connect.bikram9632@gmail.com", href: "mailto:connect.bikram9632@gmail.com" },
  { icon: "code", label: "GitHub", value: "github.com/Phantomcoder9632", href: "https://github.com/Phantomcoder9632" },
  { icon: "link", label: "LinkedIn", value: "linkedin.com/in/bikram-hawladar-2742092b1", href: "https://www.linkedin.com/in/bikram-hawladar-2742092b1/" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Map dropdown value → human-readable label for the email subject line
    const subjectLabel = subjectOptions.find((o) => o.value === formData.subject)?.label ?? formData.subject;

    try {
      const res = await fetch("https://formsubmit.co/ajax/connect.bikram9632@gmail.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: `Portfolio Inquiry [${subjectLabel}] from ${formData.name}`,
          message: formData.message,
          _template: "table",      // clean table layout in the email
          _captcha: "false",       // disable captcha (we have honeypot)
        }),
      });

      const json = await res.json();
      if (res.ok && json.success === "true") {
        setSubmitted(true);
      } else {
        setError("Message delivery failed. Please email me directly at connect.bikram9632@gmail.com");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <Navbar />
      <div className="page-content">

        {/* Header */}
        <section
          style={{
            padding: "64px 0 48px",
            background: "linear-gradient(135deg, #faf8ff 0%, rgba(222,224,255,0.3) 100%)",
            borderBottom: `1px solid ${S.surfaceHigh}`,
            textAlign: "center",
          }}
        >
          <div className="container">
            <ScrollReveal>
              <p className="eyebrow" style={{ marginBottom: "10px" }}>Get in Touch</p>
              <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, color: S.onSurface, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "16px" }}>
                Let&apos;s Connect
              </h1>
              <p style={{ fontSize: "17px", color: S.onSurfaceVariant, maxWidth: "540px", margin: "0 auto", lineHeight: 1.7 }}>
                Available for research collaborations, consulting, and academic discussions.
                I typically respond within 24 hours.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Main content */}
        <section style={{ padding: "64px 0", background: S.surfaceLow }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "5fr 7fr", gap: "40px", alignItems: "start" }}>

              {/* Left column */}
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

                {/* Contact info */}
                <ScrollReveal direction="left">
                  <div style={{ background: "#fff", border: `1px solid ${S.surfaceHigh}`, borderRadius: "16px", padding: "28px", boxShadow: "0 2px 12px rgba(0,35,175,0.07)" }}>
                    <h2 style={{ fontWeight: 700, fontSize: "17px", color: S.onSurface, marginBottom: "20px" }}>Direct Inquiries</h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                      {contactInfo.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "14px",
                            padding: "12px 14px",
                            borderRadius: "10px",
                            border: `1px solid ${S.surfaceHigh}`,
                            background: S.surfaceLow,
                            transition: "all 0.2s",
                            textDecoration: "none",
                          }}
                          onMouseEnter={(e) => { e.currentTarget.style.borderColor = S.primary; e.currentTarget.style.background = S.primaryFixed; }}
                          onMouseLeave={(e) => { e.currentTarget.style.borderColor = S.surfaceHigh; e.currentTarget.style.background = S.surfaceLow; }}
                        >
                          <div style={{ width: "40px", height: "40px", borderRadius: "9999px", background: "#fff", border: `1px solid ${S.surfaceHigh}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                            <span className="material-symbols-outlined icon-fill" style={{ color: S.primary, fontSize: "18px" }}>{item.icon}</span>
                          </div>
                          <div>
                            <p style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: S.outline }}>{item.label}</p>
                            <p style={{ fontSize: "13px", fontWeight: 500, color: S.onSurface, marginTop: "2px" }}>{item.value}</p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Open to */}
                <ScrollReveal direction="left" delay={100}>
                  <div style={{ background: "#fff", border: `1px solid ${S.surfaceHigh}`, borderRadius: "16px", padding: "28px", boxShadow: "0 2px 12px rgba(0,35,175,0.07)" }}>
                    <h2 style={{ fontWeight: 700, fontSize: "17px", color: S.onSurface, marginBottom: "16px" }}>Currently Open To</h2>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {openTo.map((item, i) => (
                        <span
                          key={item}
                          style={{
                            padding: "6px 14px",
                            borderRadius: "9999px",
                            fontSize: "13px",
                            fontWeight: 600,
                            background: i < 2 ? S.secondaryFixed : S.surfaceLow,
                            color: i < 2 ? "#5228ab" : S.onSurfaceVariant,
                            border: `1px solid ${i < 2 ? "rgba(106,69,196,0.25)" : S.surfaceHigh}`,
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>

                {/* Location */}
                <ScrollReveal direction="left" delay={160}>
                  <div style={{ background: "#fff", border: `1px solid ${S.surfaceHigh}`, borderRadius: "16px", padding: "24px", display: "flex", alignItems: "center", gap: "16px", boxShadow: "0 2px 12px rgba(0,35,175,0.07)" }}>
                    <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: S.primaryFixed, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <span className="material-symbols-outlined icon-fill" style={{ color: S.primary, fontSize: "24px" }}>location_on</span>
                    </div>
                    <div>
                      <p style={{ fontWeight: 600, fontSize: "14px", color: S.onSurface }}>IIIT Dharwad, Karnataka</p>
                      <p style={{ fontSize: "13px", color: S.outline, marginTop: "2px" }}>India · UTC+5:30</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>

              {/* Right column: Contact form */}
              <ScrollReveal direction="right">
                <div style={{ background: "#fff", border: `1px solid ${S.surfaceHigh}`, borderRadius: "20px", padding: "40px", boxShadow: "0 4px 24px rgba(0,35,175,0.08)", position: "relative", overflow: "hidden" }}>
                  {/* Decorative orb */}
                  <div style={{ position: "absolute", top: "-40px", right: "-40px", width: "140px", height: "140px", borderRadius: "50%", background: S.primaryFixed, opacity: 0.5, filter: "blur(40px)", pointerEvents: "none" }} />

                  <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "24px", fontWeight: 700, color: S.onSurface, marginBottom: "28px", position: "relative" }}>
                    Send a Message
                  </h2>

                  {submitted ? (
                    <div style={{ padding: "48px 0", textAlign: "center" }}>
                      <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: "rgba(74,222,128,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", border: "2px solid rgba(74,222,128,0.4)" }}>
                        <span className="material-symbols-outlined icon-fill" style={{ color: "#16a34a", fontSize: "32px" }}>check_circle</span>
                      </div>
                      <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "20px", fontWeight: 700, color: S.onSurface, marginBottom: "8px" }}>Message Sent!</h3>
                      <p style={{ fontSize: "15px", color: S.onSurfaceVariant, marginBottom: "20px" }}>
                        Thanks for reaching out — I&apos;ll reply within 24 hours.
                      </p>
                      <p style={{ fontSize: "12px", color: S.outline }}>
                        ✉️ A copy has been delivered to connect.bikram9632@gmail.com
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "22px", position: "relative" }}>
                      {/* Name + Email row */}
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                        <div>
                          <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: S.onSurfaceVariant, marginBottom: "6px" }}>Full Name *</label>
                          <input
                            className="input-field"
                            name="name"
                            id="contact-name"
                            type="text"
                            placeholder="Dr. Jane Doe"
                            required
                            value={formData.name}
                            onChange={handleChange}
                          />
                        </div>
                        <div>
                          <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: S.onSurfaceVariant, marginBottom: "6px" }}>Email *</label>
                          <input
                            className="input-field"
                            name="email"
                            id="contact-email"
                            type="email"
                            placeholder="jane@university.edu"
                            required
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div>
                        <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: S.onSurfaceVariant, marginBottom: "6px" }}>Subject *</label>
                        <select
                          className="input-field"
                          name="subject"
                          id="contact-subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        >
                          {subjectOptions.map((opt) => (
                            <option key={opt.value} value={opt.value} disabled={opt.value === ""}>{opt.label}</option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label style={{ display: "block", fontSize: "13px", fontWeight: 600, color: S.onSurfaceVariant, marginBottom: "6px" }}>Message *</label>
                        <textarea
                          className="input-field"
                          name="message"
                          id="contact-message"
                          placeholder="Describe your proposal or inquiry..."
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          style={{ resize: "vertical", minHeight: "120px" }}
                        />
                      </div>

                      {/* Spam honeypot — hidden, bots fill this, humans don't */}
                      <input type="text" name="_honey" style={{ display: "none" }} />

                      {/* Error banner */}
                      {error && (
                        <div style={{
                          padding: "12px 16px",
                          borderRadius: "10px",
                          background: "rgba(220,38,38,0.07)",
                          border: "1px solid rgba(220,38,38,0.25)",
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                        }}>
                          <span className="material-symbols-outlined" style={{ color: "#dc2626", fontSize: "18px", flexShrink: 0, marginTop: "1px" }}>error</span>
                          <p style={{ fontSize: "13px", color: "#dc2626", lineHeight: 1.5 }}>{error}</p>
                        </div>
                      )}

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={loading}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "8px",
                          padding: "14px 28px",
                          background: loading ? "#6b7dcc" : S.primary,
                          color: "#fff",
                          border: "none",
                          borderRadius: "12px",
                          fontSize: "15px",
                          fontWeight: 600,
                          cursor: loading ? "not-allowed" : "pointer",
                          transition: "all 0.2s",
                          fontFamily: "var(--font-body)",
                          boxShadow: "0 4px 12px rgba(0,35,175,0.25)",
                          width: "100%",
                        }}
                      >
                        {loading ? (
                          <>
                            <span style={{ width: "18px", height: "18px", border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff", borderRadius: "50%", animation: "spin 0.7s linear infinite", display: "inline-block" }} />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message
                            <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>send</span>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </ScrollReveal>

            </div>
          </div>
        </section>

      </div>
      <Footer />
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </main>
  );
}
