import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Research Experience | Bikram Hawladar",
  description: "Research timeline of Bikram Hawladar at IIIT Dharwad and NIT Durgapur.",
};

const S = {
  primary: "#0023af",
  secondary: "#6a45c4",
  primaryFixed: "#dee0ff",
  onPrimaryFixed: "#000e5e",
  surfaceLow: "#f4f3fb",
  surfaceHigh: "#e8e7ef",
  onSurface: "#1a1b21",
  onSurfaceVariant: "#444655",
  outline: "#757687",
};

const experiences: Array<{
  id: string;
  role: string;
  institution: string;
  period: string;
  supervisor: string | null;
  accentColor: string;
  side: "left" | "right";
  contributions: string[];
  tags: Array<{ text: string; primary: boolean }>;
}> = [
  {
    id: "iiit",
    role: "NLP & Speech Researcher",
    institution: "IIIT Dharwad",
    period: "Jan 2026 – Apr 2026",
    supervisor: null,
    accentColor: S.primary,
    side: "right",
    contributions: [
      "Implemented IndicConformer models for efficient multi-lingual speech recognition.",
      "Utilized torchaudio micro-chunking to process long audio sequences with limited memory.",
      "Benchmarked 9 distinct ASR architectures to evaluate speed vs. accuracy trade-offs.",
    ],
    tags: [
      { text: "78 audio files processed", primary: true },
      { text: "9 architectures benchmarked", primary: true },
      { text: "Internal Research", primary: false },
    ],
  },
  {
    id: "nit",
    role: "Research Intern",
    institution: "NIT Durgapur",
    period: "May 2025 – Aug 2025",
    supervisor: "Under Prof. Tandra Pal",
    accentColor: S.secondary,
    side: "left",
    contributions: [
      "Designed and trained custom CNN models for automated EEG feature extraction.",
      "Integrated MATLAB preprocessing pipelines with PyTorch training loops.",
      "Achieved robust 3-class workload discrimination (Low, Medium, High) from raw signal data.",
    ],
    tags: [
      { text: "3-class workload classification", primary: true },
      { text: "Fully passive EEG pipeline", primary: true },
      { text: "No Public Repo", primary: false },
    ],
  },
];

const researchSkills = [
  { label: "Experimental Design", color: S.secondary },
  { label: "Architecture Benchmarking", color: S.primary },
  { label: "Data Collection & Analysis", color: "#1a3adb" },
  { label: "Literature Review", color: S.secondary },
  { label: "Academic Writing", color: S.primary },
];

export default function ExperiencePage() {
  return (
    <main>
      <Navbar />
      <div className="page-content">

        {/* Header */}
        <section style={{ padding: "64px 0 48px", background: "#fff", borderBottom: `1px solid ${S.surfaceHigh}`, textAlign: "center" }}>
          <div className="container">
            <ScrollReveal>
              <p className="eyebrow" style={{ marginBottom: "10px" }}>Timeline</p>
              <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, color: S.onSurface, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "16px" }}>
                Research Experience
              </h1>
              <p style={{ fontSize: "17px", color: S.onSurfaceVariant, maxWidth: "480px", margin: "0 auto", lineHeight: 1.7 }}>
                A chronology of academic and applied research roles across leading institutions.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Timeline */}
        <section style={{ padding: "72px 0", background: S.surfaceLow }}>
          <div className="container">
            <div style={{ position: "relative", maxWidth: "900px", margin: "0 auto" }}>
              {/* Center line */}
              <div
                style={{
                  position: "absolute",
                  left: "50%",
                  top: 0,
                  bottom: 0,
                  width: "2px",
                  background: `linear-gradient(to bottom, ${S.primary}, ${S.primaryFixed})`,
                  transform: "translateX(-50%)",
                }}
              />

              {experiences.map((exp, idx) => (
                <div
                  key={exp.id}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 56px 1fr",
                    gap: "0",
                    alignItems: "start",
                    marginBottom: idx < experiences.length - 1 ? "56px" : 0,
                    position: "relative",
                  }}
                >
                  {/* Left side */}
                  {exp.side === "right" ? (
                    /* Label on left, card on right */
                    <>
                      <ScrollReveal direction="left">
                        <div style={{ paddingRight: "36px", textAlign: "right", paddingTop: "12px" }}>
                          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "20px", fontWeight: 700, color: S.onSurface, marginBottom: "6px" }}>{exp.role}</h3>
                          <p style={{ fontSize: "14px", fontWeight: 600, color: exp.accentColor }}>{exp.institution}</p>
                          <p style={{ fontSize: "13px", color: S.outline, marginTop: "3px" }}>{exp.period}</p>
                          {exp.supervisor && <p style={{ fontSize: "12px", color: S.outline, marginTop: "2px" }}>{exp.supervisor}</p>}
                        </div>
                      </ScrollReveal>

                      {/* Center dot */}
                      <div style={{ display: "flex", justifyContent: "center", paddingTop: "14px" }}>
                        <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: exp.accentColor, border: "3px solid #fff", boxShadow: `0 0 0 4px ${exp.accentColor}33`, zIndex: 2, position: "relative" }} />
                      </div>

                      <ScrollReveal direction="right">
                        <div style={{ paddingLeft: "36px" }}>
                          <div style={{ background: "#fff", border: `1px solid ${S.surfaceHigh}`, borderRadius: "14px", padding: "24px", boxShadow: "0 2px 12px rgba(0,35,175,0.07)", borderLeft: `4px solid ${exp.accentColor}` }}>
                            <ul style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "16px" }}>
                              {exp.contributions.map((c, j) => (
                                <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: S.onSurfaceVariant, lineHeight: 1.6 }}>
                                  <span className="material-symbols-outlined" style={{ color: exp.accentColor, fontSize: "17px", marginTop: "1px", flexShrink: 0 }}>chevron_right</span>
                                  {c}
                                </li>
                              ))}
                            </ul>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", paddingTop: "14px", borderTop: `1px solid ${S.surfaceHigh}` }}>
                              {exp.tags.map((tag) => (
                                <span
                                  key={tag.text}
                                  style={{
                                    padding: "3px 10px",
                                    borderRadius: "9999px",
                                    fontSize: "12px",
                                    fontWeight: 600,
                                    background: tag.primary ? `${exp.accentColor}12` : S.surfaceLow,
                                    color: tag.primary ? exp.accentColor : S.outline,
                                    border: `1px solid ${tag.primary ? exp.accentColor + "33" : S.surfaceHigh}`,
                                  }}
                                >
                                  {tag.text}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </ScrollReveal>
                    </>
                  ) : (
                    /* Card on left, label on right */
                    <>
                      <ScrollReveal direction="left">
                        <div style={{ paddingRight: "36px" }}>
                          <div style={{ background: "#fff", border: `1px solid ${S.surfaceHigh}`, borderRadius: "14px", padding: "24px", boxShadow: "0 2px 12px rgba(0,35,175,0.07)", borderLeft: `4px solid ${exp.accentColor}` }}>
                            <ul style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "16px" }}>
                              {exp.contributions.map((c, j) => (
                                <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "14px", color: S.onSurfaceVariant, lineHeight: 1.6 }}>
                                  <span className="material-symbols-outlined" style={{ color: exp.accentColor, fontSize: "17px", marginTop: "1px", flexShrink: 0 }}>chevron_right</span>
                                  {c}
                                </li>
                              ))}
                            </ul>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", paddingTop: "14px", borderTop: `1px solid ${S.surfaceHigh}` }}>
                              {exp.tags.map((tag) => (
                                <span
                                  key={tag.text}
                                  style={{
                                    padding: "3px 10px",
                                    borderRadius: "9999px",
                                    fontSize: "12px",
                                    fontWeight: 600,
                                    background: tag.primary ? `${exp.accentColor}12` : S.surfaceLow,
                                    color: tag.primary ? exp.accentColor : S.outline,
                                    border: `1px solid ${tag.primary ? exp.accentColor + "33" : S.surfaceHigh}`,
                                  }}
                                >
                                  {tag.text}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </ScrollReveal>

                      {/* Center dot */}
                      <div style={{ display: "flex", justifyContent: "center", paddingTop: "14px" }}>
                        <div style={{ width: "18px", height: "18px", borderRadius: "50%", background: exp.accentColor, border: "3px solid #fff", boxShadow: `0 0 0 4px ${exp.accentColor}33`, zIndex: 2, position: "relative" }} />
                      </div>

                      <ScrollReveal direction="right">
                        <div style={{ paddingLeft: "36px", textAlign: "left", paddingTop: "12px" }}>
                          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "20px", fontWeight: 700, color: S.onSurface, marginBottom: "6px" }}>{exp.role}</h3>
                          <p style={{ fontSize: "14px", fontWeight: 600, color: exp.accentColor }}>{exp.institution}</p>
                          <p style={{ fontSize: "13px", color: S.outline, marginTop: "3px" }}>{exp.period}</p>
                          {exp.supervisor && <p style={{ fontSize: "12px", color: S.outline, marginTop: "2px" }}>{exp.supervisor}</p>}
                        </div>
                      </ScrollReveal>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Research Skills */}
        <section style={{ padding: "64px 0", background: "#fff", borderTop: `1px solid ${S.surfaceHigh}` }}>
          <div className="container" style={{ textAlign: "center" }}>
            <ScrollReveal>
              <p className="eyebrow" style={{ marginBottom: "10px" }}>Across Roles</p>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "26px", fontWeight: 700, color: S.onSurface, marginBottom: "28px" }}>Research Skills Demonstrated</h2>
              <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px" }}>
                {researchSkills.map((skill) => (
                  <span
                    key={skill.label}
                    style={{
                      padding: "10px 22px",
                      borderRadius: "9999px",
                      fontSize: "14px",
                      fontWeight: 600,
                      background: "transparent",
                      border: `2px solid ${skill.color}`,
                      color: skill.color,
                      transition: "all 0.2s",
                    }}
                  >
                    {skill.label}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "64px 0", background: S.primary }}>
          <div className="container" style={{ textAlign: "center" }}>
            <ScrollReveal>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "28px", fontWeight: 700, color: "#fff", marginBottom: "24px" }}>
                Want to collaborate on research?
              </h2>
              <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/projects" className="btn btn-white">View Projects</Link>
                <Link href="/contact" className="btn btn-ghost">Get in Touch</Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
