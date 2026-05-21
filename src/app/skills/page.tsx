import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Technical Skills | Bikram Hawladar",
  description: "Technical skills of Bikram Hawladar — AI, ML, NLP, Geospatial, 5G, and Engineering.",
};

const S = {
  primary: "#0023af",
  secondary: "#6a45c4",
  primaryFixed: "#dee0ff",
  onPrimaryFixed: "#000e5e",
  surfaceLow: "#f4f3fb",
  surfaceHigh: "#e8e7ef",
  surfaceVariant: "#e2e2e9",
  onSurface: "#1a1b21",
  onSurfaceVariant: "#444655",
  outline: "#757687",
};

const languages = [
  { name: "Python", level: "Expert", dots: 5 },
  { name: "C++", level: "Advanced", dots: 4 },
  { name: "C", level: "Proficient", dots: 3 },
  { name: "MySQL / SQL", level: "Advanced", dots: 4 },
];

const dlFrameworks = [
  { name: "PyTorch", level: "Advanced", pct: 90 },
  { name: "TensorFlow", level: "Proficient", pct: 75 },
  { name: "Keras", level: "Proficient", pct: 78 },
];

const architectures = ["CNNs", "RNNs / LSTMs", "Transformers", "GANs", "Autoencoders", "Multi-Task Learning"];

const nlpItems = [
  "Large Language Models (LLMs)",
  "Hugging Face Transformers",
  "Prompt Engineering",
  "Retrieval-Augmented Generation (RAG)",
  "Automatic Speech Recognition (ASR)",
];

const geospatial = [
  { icon: "satellite_alt", title: "Google Earth Engine", desc: "Planetary-scale geospatial analysis and remote sensing data processing.", label: "JavaScript / Python APIs" },
  { icon: "radar", title: "Sentinel Data Hub", desc: "Processing Copernicus Sentinel-1 (SAR) and Sentinel-2 (Optical) imagery.", label: "SNAP / EO Data" },
  { icon: "map", title: "GeoPandas & QGIS", desc: "Vector/raster manipulation, spatial joins, and cartographic visualization.", label: "Spatial Analysis" },
];

const signal5g = [
  { icon: "waves", label: "I/Q Signal Analysis" },
  { icon: "wifi_tethering", label: "Beam Selection" },
  { icon: "block", label: "NLOS Mitigation" },
  { icon: "memory", label: "TensorFlow Lite" },
];

const engineering = ["FastAPI", "REST APIs", "Docker", "Git / GitHub", "Linux / Bash"];
const dataViz = ["NumPy", "Pandas", "Matplotlib", "Seaborn", "Figma"];

const research = [
  { icon: "science", title: "Experimental Design", desc: "Structuring rigorous methodologies for reproducible scientific outcomes." },
  { icon: "edit_document", title: "Technical Writing", desc: "Drafting peer-reviewed manuscripts, grant proposals, and whitepapers." },
  { icon: "analytics", title: "Data Analysis", desc: "Extracting actionable insights from complex, high-dimensional datasets." },
];

function SectionHeader({ eyebrow, title, icon }: { eyebrow: string; title: string; icon: string }) {
  return (
    <ScrollReveal>
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
        <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: `rgba(0,35,175,0.08)`, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span className="material-symbols-outlined icon-fill" style={{ color: S.primary, fontSize: "20px" }}>{icon}</span>
        </div>
        <div>
          <p style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: S.secondary }}>{eyebrow}</p>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "22px", fontWeight: 700, color: S.onSurface, lineHeight: 1.2 }}>{title}</h2>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function SkillsPage() {
  return (
    <main>
      <Navbar />
      <div className="page-content">

        {/* Page Header */}
        <section style={{ padding: "64px 0 48px", background: "#fff", borderBottom: `1px solid ${S.surfaceHigh}`, textAlign: "center" }}>
          <div className="container">
            <ScrollReveal>
              <p className="eyebrow" style={{ marginBottom: "10px" }}>Capabilities</p>
              <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, color: S.onSurface, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "16px" }}>
                Technical Skills
              </h1>
              <p style={{ fontSize: "17px", color: S.onSurfaceVariant, maxWidth: "580px", margin: "0 auto", lineHeight: 1.7 }}>
                A comprehensive overview of methodologies, programming languages, and specialized tools applied in academic research and engineering.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Languages */}
        <section style={{ padding: "64px 0", background: S.surfaceLow, borderBottom: `1px solid ${S.surfaceHigh}` }}>
          <div className="container">
            <SectionHeader eyebrow="Foundations" title="Programming Languages" icon="code" />
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
              {languages.map((lang, i) => (
                <ScrollReveal key={lang.name} delay={i * 70}>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "16px",
                      padding: "12px 20px",
                      background: "#fff",
                      border: `1px solid ${S.surfaceHigh}`,
                      borderRadius: "9999px",
                      boxShadow: "0 2px 8px rgba(0,35,175,0.06)",
                      minWidth: "200px",
                      transition: "all 0.2s",
                    }}
                  >
                    <span style={{ fontWeight: 600, fontSize: "15px", color: S.onSurface }}>{lang.name}</span>
                    <div style={{ display: "flex", gap: "5px", marginLeft: "auto", alignItems: "center" }}>
                      <span style={{ fontSize: "11px", color: S.outline, marginRight: "6px", fontWeight: 500 }}>{lang.level}</span>
                      {[1,2,3,4,5].map((d) => (
                        <div key={d} style={{ width: "8px", height: "8px", borderRadius: "50%", background: d <= lang.dots ? S.primary : S.surfaceVariant }} />
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* AI / ML */}
        <section style={{ padding: "64px 0", background: "#fff", borderBottom: `1px solid ${S.surfaceHigh}` }}>
          <div className="container">
            <SectionHeader eyebrow="Core Expertise" title="Artificial Intelligence & Machine Learning" icon="neurology" />
            <div className="grid-3" style={{ gap: "24px" }}>
              {/* Deep Learning */}
              <ScrollReveal>
                <div style={{ background: "#fff", border: `1px solid ${S.surfaceHigh}`, borderRadius: "14px", padding: "24px", boxShadow: "0 2px 12px rgba(0,35,175,0.07)", height: "100%" }}>
                  <h3 style={{ fontWeight: 600, fontSize: "15px", color: S.onSurface, paddingBottom: "14px", marginBottom: "18px", borderBottom: `1px solid ${S.surfaceHigh}` }}>Deep Learning Frameworks</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {dlFrameworks.map((fw) => (
                      <div key={fw.name}>
                        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "6px" }}>
                          <span style={{ fontSize: "14px", fontWeight: 500, color: S.onSurface }}>{fw.name}</span>
                          <span style={{ fontSize: "12px", fontWeight: 700, color: S.primary }}>{fw.level}</span>
                        </div>
                        <div style={{ height: "5px", background: S.surfaceVariant, borderRadius: "3px", overflow: "hidden" }}>
                          <div style={{ height: "100%", width: `${fw.pct}%`, background: S.primary, borderRadius: "3px", transition: "width 1.2s ease" }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Architectures */}
              <ScrollReveal delay={80}>
                <div style={{ background: "#fff", border: `1px solid ${S.surfaceHigh}`, borderRadius: "14px", padding: "24px", boxShadow: "0 2px 12px rgba(0,35,175,0.07)", height: "100%" }}>
                  <h3 style={{ fontWeight: 600, fontSize: "15px", color: S.onSurface, paddingBottom: "14px", marginBottom: "18px", borderBottom: `1px solid ${S.surfaceHigh}` }}>Model Architectures</h3>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {architectures.map((a) => (
                      <span key={a} style={{ padding: "6px 14px", background: "rgba(0,35,175,0.06)", border: `1px solid ${S.primaryFixed}`, color: S.onPrimaryFixed, borderRadius: "8px", fontSize: "13px", fontWeight: 500 }}>
                        {a}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* NLP */}
              <ScrollReveal delay={160}>
                <div style={{ background: "#fff", border: `1px solid ${S.surfaceHigh}`, borderRadius: "14px", padding: "24px", boxShadow: "0 2px 12px rgba(0,35,175,0.07)", height: "100%" }}>
                  <h3 style={{ fontWeight: 600, fontSize: "15px", color: S.onSurface, paddingBottom: "14px", marginBottom: "18px", borderBottom: `1px solid ${S.surfaceHigh}` }}>NLP & Generative AI</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    {nlpItems.map((item) => (
                      <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                        <span className="material-symbols-outlined icon-fill" style={{ color: S.secondary, fontSize: "17px", marginTop: "1px", flexShrink: 0 }}>check_circle</span>
                        <span style={{ fontSize: "14px", color: S.onSurfaceVariant }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Geospatial */}
        <section style={{ padding: "64px 0", background: S.surfaceLow, borderBottom: `1px solid ${S.surfaceHigh}` }}>
          <div className="container">
            <SectionHeader eyebrow="Remote Sensing" title="Geospatial Intelligence" icon="public" />
            <div className="grid-3" style={{ gap: "24px" }}>
              {geospatial.map((item, i) => (
                <ScrollReveal key={item.title} delay={i * 80}>
                  <div style={{ background: "#fff", border: `1px solid ${S.surfaceHigh}`, borderRadius: "14px", padding: "24px", boxShadow: "0 2px 12px rgba(0,35,175,0.07)", display: "flex", flexDirection: "column", gap: "14px", height: "100%" }}>
                    <div style={{ width: "44px", height: "44px", borderRadius: "10px", background: "rgba(0,35,175,0.07)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <span className="material-symbols-outlined icon-fill" style={{ color: S.primary, fontSize: "22px" }}>{item.icon}</span>
                    </div>
                    <h3 style={{ fontWeight: 600, fontSize: "16px", color: S.onSurface }}>{item.title}</h3>
                    <p style={{ fontSize: "14px", color: S.onSurfaceVariant, lineHeight: 1.65, flex: 1 }}>{item.desc}</p>
                    <div style={{ paddingTop: "14px", borderTop: `1px solid ${S.surfaceHigh}` }}>
                      <span style={{ fontSize: "13px", fontWeight: 600, color: S.primary }}>{item.label}</span>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 5G + Engineering */}
        <section style={{ padding: "64px 0", background: "#fff", borderBottom: `1px solid ${S.surfaceHigh}` }}>
          <div className="container">
            <div className="grid-2" style={{ gap: "56px" }}>
              <div>
                <SectionHeader eyebrow="Telecommunications" title="5G & Signal Processing" icon="cell_tower" />
                <div className="grid-2" style={{ gap: "12px" }}>
                  {signal5g.map((item) => (
                    <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "12px", padding: "14px 16px", background: S.surfaceLow, border: `1px solid ${S.surfaceHigh}`, borderRadius: "10px" }}>
                      <div style={{ width: "36px", height: "36px", borderRadius: "9999px", background: S.primaryFixed, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <span className="material-symbols-outlined" style={{ color: S.primary, fontSize: "18px" }}>{item.icon}</span>
                      </div>
                      <span style={{ fontSize: "13px", fontWeight: 500, color: S.onSurface }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <SectionHeader eyebrow="Infrastructure & Tools" title="Engineering Stack" icon="build" />
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  <div>
                    <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: S.outline, marginBottom: "10px" }}>Engineering & DevOps</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {engineering.map((t) => (
                        <span key={t} style={{ padding: "6px 14px", background: S.surfaceLow, border: `1px solid ${S.surfaceHigh}`, color: S.onSurfaceVariant, borderRadius: "8px", fontSize: "13px", fontWeight: 500 }}>{t}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p style={{ fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", color: S.outline, marginBottom: "10px" }}>Data Science & Visualization</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {dataViz.map((t) => (
                        <span key={t} style={{ padding: "6px 14px", background: S.surfaceLow, border: `1px solid ${S.surfaceHigh}`, color: S.onSurfaceVariant, borderRadius: "8px", fontSize: "13px", fontWeight: 500 }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Research Capabilities */}
        <section style={{ padding: "64px 0", background: S.surfaceLow }}>
          <div className="container">
            <ScrollReveal>
              <div className="capabilities-card">
                <p className="eyebrow" style={{ marginBottom: "10px" }}>Academia</p>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "28px", fontWeight: 700, color: S.onSurface, marginBottom: "40px" }}>Research Capabilities</h2>
                <div className="grid-3" style={{ gap: "32px" }}>
                  {research.map((item, i) => (
                    <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
                      <div style={{ width: "56px", height: "56px", borderRadius: "16px", background: S.primaryFixed, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <span className="material-symbols-outlined icon-fill" style={{ color: S.primary, fontSize: "26px" }}>{item.icon}</span>
                      </div>
                      <h4 style={{ fontWeight: 600, fontSize: "16px", color: S.onSurface }}>{item.title}</h4>
                      <p style={{ fontSize: "13px", color: S.onSurfaceVariant, lineHeight: 1.65 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
