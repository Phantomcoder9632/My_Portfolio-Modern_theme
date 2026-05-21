import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";

const S = {
  primary: "#0023af",
  primaryDark: "#001a8a",
  primaryFixed: "#dee0ff",
  secondary: "#6a45c4",
  secondaryFixed: "#e9ddff",
  tertiary: "#4e3600",
  tertiaryFixed: "#ffdea6",
  gold: "#f7bd48",
  surface: "#faf8ff",
  surfaceLow: "#f4f3fb",
  surfaceHigh: "#e8e7ef",
  onSurface: "#1a1b21",
  onSurfaceVariant: "#444655",
  outline: "#757687",
  outlineVariant: "#c5c5d8",
};

const stats = [
  { icon: "school", label: "8.55 CGPA", sub: "Academic Excellence" },
  { icon: "deployed_code", label: "8 Projects", sub: "Across AI, Data & SDE" },
  { icon: "emoji_events", label: "2 Awards", sub: "Hackathon Wins" },
  { icon: "biotech", label: "2 Internships", sub: "Research & Engineering" },
  { icon: "apartment", label: "IIIT Dharwad", sub: "B.Tech CSE" },
];

const focusAreas = [
  { icon: "smart_toy", title: "AI / ML Engineering", desc: "Building production-grade models — LLMs, RAG pipelines, CNNs, and agentic automation systems." },
  { icon: "code", title: "Software Development", desc: "Designing scalable REST APIs, full-stack applications, and clean software architectures from scratch." },
  { icon: "bar_chart", title: "Data Analysis", desc: "Extracting insights via EDA, predictive modelling, XAI, and interactive dashboards from complex datasets." },
  { icon: "science", title: "Research & Innovation", desc: "Published work in NLP, healthcare AI, geospatial ML — bridging academic rigour with real-world deployment." },
];

const achievements = [
  { tag: "Hackathon", tagStyle: { background: S.secondaryFixed, color: "#22005d" }, icon: "emoji_events", borderColor: S.secondary, title: "Singularity 2.0", desc: "National-level hackathon winner — developed WikiSentinel, an automated moderation pipeline using transformer-based NLP.", link: "/projects" },
  { tag: "Hackathon", tagStyle: { background: S.secondaryFixed, color: "#22005d" }, icon: "emoji_events", borderColor: S.secondary, title: "Karke Dikha", desc: "National-level hackathon winner for InsureClear — a vectorless document extraction system.", link: "/projects" },
  { tag: "Internship", tagStyle: { background: S.primaryFixed, color: S.onSurface }, icon: "corporate_fare", borderColor: "#1a3adb", title: "NIT Durgapur", desc: "Research intern under Prof. Tandra Pal — EEG signal processing & CNN workload classification.", link: "/experience" },
  { tag: "Research", tagStyle: { background: S.tertiaryFixed, color: S.tertiary }, icon: "biotech", borderColor: S.gold, title: "IIIT Dharwad", desc: "NLP & Speech researcher — IndicConformer, multi-lingual ASR, and torchaudio micro-chunking.", link: "/experience" },
];

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <div className="page-content">

        {/* ── HERO ─────────────────────────────────── */}
        <section
          style={{
            minHeight: "calc(100vh - 64px)",
            background: `linear-gradient(140deg, #faf8ff 0%, rgba(222,224,255,0.35) 55%, rgba(233,221,255,0.18) 100%)`,
            position: "relative",
            display: "flex",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          {/* Grid bg */}
          <div
            className="grid-bg"
            style={{ position: "absolute", inset: 0, opacity: 0.45 }}
          />
          {/* Orb 1 */}
          <div style={{ position: "absolute", top: "15%", right: "8%", width: "320px", height: "320px", borderRadius: "50%", background: S.primary, opacity: 0.08, filter: "blur(80px)" }} />
          {/* Orb 2 */}
          <div style={{ position: "absolute", bottom: "10%", left: "5%", width: "240px", height: "240px", borderRadius: "50%", background: S.secondary, opacity: 0.07, filter: "blur(60px)" }} />

          <div className="container" style={{ position: "relative", zIndex: 2 }}>
            <div className="hero-layout-grid">
              {/* Left: Text */}
              <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                {/* Status pill */}
                <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", width: "fit-content" }}>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "6px 16px",
                      background: S.secondaryFixed,
                      border: `1px solid rgba(106,69,196,0.25)`,
                      borderRadius: "9999px",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: S.secondary,
                      letterSpacing: "0.02em",
                    }}
                  >
                    <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: S.secondary, animation: "pulse 2s infinite" }} />
                    Open to SDE · AI/ML · Research Roles
                  </div>
                </div>

                {/* Name */}
                <div>
                  <h1
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(40px, 5.5vw, 68px)",
                      fontWeight: 700,
                      lineHeight: 1.05,
                      letterSpacing: "-0.03em",
                      color: S.onSurface,
                      position: "relative",
                      display: "inline-block",
                    }}
                  >
                    Bikram Hawladar
                    <span
                      style={{
                        position: "absolute",
                        bottom: "-6px",
                        left: 0,
                        width: "60%",
                        height: "4px",
                        borderRadius: "2px",
                        background: `linear-gradient(90deg, ${S.primary}, ${S.secondary})`,
                      }}
                    />
                  </h1>
                </div>

                {/* Roles */}
                <p style={{ fontSize: "18px", color: S.onSurfaceVariant, display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                  <span style={{ color: S.onSurface, fontWeight: 500 }}>AI / ML Engineer</span>
                  <span style={{ color: S.outlineVariant }}>·</span>
                  <span style={{ color: S.onSurface, fontWeight: 500 }}>Software Developer</span>
                  <span style={{ color: S.outlineVariant }}>·</span>
                  <span style={{ color: S.onSurface, fontWeight: 500 }}>Data Analyst</span>
                  <span style={{ color: S.outlineVariant }}>·</span>
                  <span style={{ color: S.onSurface, fontWeight: 500 }}>Researcher</span>
                </p>

                {/* Desc */}
                <p style={{ fontSize: "16px", color: S.onSurfaceVariant, lineHeight: 1.75, maxWidth: "520px" }}>
                  B.Tech CSE student at IIIT Dharwad · Research intern at NIT Durgapur.
                  I build across the full stack — from agentic RAG systems and deep learning models to data pipelines, REST APIs, and production web apps.
                </p>

                {/* Open-to chips */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", paddingTop: "4px" }}>
                  {["SDE Intern", "AI / ML Roles", "Agentic RAG", "Data Analysis", "Research Work"].map((role) => (
                    <span
                      key={role}
                      style={{
                        padding: "5px 14px",
                        borderRadius: "9999px",
                        fontSize: "12px",
                        fontWeight: 600,
                        background: "rgba(0,35,175,0.07)",
                        color: S.primary,
                        border: "1px solid rgba(0,35,175,0.18)",
                        letterSpacing: "0.01em",
                      }}
                    >
                      {role}
                    </span>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", paddingTop: "4px" }}>
                  <Link href="/projects" className="btn btn-primary">
                    Explore My Work
                    <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>arrow_forward</span>
                  </Link>
                  <a href="/Bikram_Resume.pdf" download className="btn btn-outline">
                    <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>download</span>
                    Download CV
                  </a>
                </div>
              </div>

              {/* Right: Animated Tech Constellation */}
              <div
                style={{
                  position: "relative",
                  width: "420px",
                  height: "420px",
                  marginLeft: "auto",
                  flexShrink: 0,
                }}
                className="hide-mobile"
              >
                {/* Outer dashed ring — rotates CW */}
                <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "1.5px dashed rgba(0,35,175,0.13)", animation: "spin-cw 40s linear infinite" }} />

                {/* Middle dashed ring — rotates CCW */}
                <div style={{ position: "absolute", inset: "55px", borderRadius: "50%", border: "1.5px dashed rgba(106,69,196,0.15)", animation: "spin-ccw 28s linear infinite" }} />

                {/* Pulsing ripple rings around center */}
                <div style={{ position: "absolute", top: "50%", left: "50%", width: "148px", height: "148px", borderRadius: "50%", border: "2px solid rgba(0,35,175,0.18)", animation: "ripple 2.4s ease-in-out infinite", marginLeft: "-74px", marginTop: "-74px" }} />
                <div style={{ position: "absolute", top: "50%", left: "50%", width: "175px", height: "175px", borderRadius: "50%", border: "1px solid rgba(0,35,175,0.1)", animation: "ripple 2.4s ease-in-out infinite 0.6s", marginLeft: "-87.5px", marginTop: "-87.5px" }} />
                <div style={{ position: "absolute", top: "50%", left: "50%", width: "202px", height: "202px", borderRadius: "50%", border: "1px solid rgba(106,69,196,0.08)", animation: "ripple 2.4s ease-in-out infinite 1.2s", marginLeft: "-101px", marginTop: "-101px" }} />

                {/* Center glowing orb */}
                <div style={{
                  position: "absolute",
                  top: "50%", left: "50%",
                  width: "112px", height: "112px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #dee0ff 0%, #e9ddff 100%)",
                  transform: "translate(-50%, -50%)",
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "6px",
                  animation: "glow-breathe 3s ease-in-out infinite",
                  zIndex: 4,
                }}>
                  <span className="material-symbols-outlined icon-fill" style={{ fontSize: "42px", color: S.primary }}>hub</span>
                  <p style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: S.outline, textAlign: "center", lineHeight: 1.3 }}>AI · SDE<br/>Research</p>
                </div>

                {/* Inner orbit — 3 items, CW, radius 130px, period 16s */}
                {([
                  { label: "Python",    icon: "code",           delay: "0s"      },
                  { label: "PyTorch",   icon: "model_training", delay: "-5.33s"  },
                  { label: "LangChain", icon: "link",           delay: "-10.67s" },
                ] as { label: string; icon: string; delay: string }[]).map((item, i) => (
                  <div key={`in-${i}`} style={{ position: "absolute", top: "50%", left: "50%", width: 0, height: 0, animation: "spin-cw 16s linear infinite", animationDelay: item.delay, zIndex: 3 }}>
                    <div style={{ position: "absolute", left: "130px", top: "-14px", animation: "spin-ccw 16s linear infinite", animationDelay: item.delay }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "5px", padding: "5px 11px", borderRadius: "9999px", background: "rgba(222,224,255,0.95)", border: "1px solid rgba(0,35,175,0.22)", backdropFilter: "blur(8px)", whiteSpace: "nowrap", boxShadow: "0 2px 10px rgba(0,35,175,0.14)" }}>
                        <span className="material-symbols-outlined" style={{ fontSize: "12px", color: S.primary }}>{item.icon}</span>
                        <span style={{ fontSize: "11px", fontWeight: 700, color: S.primary }}>{item.label}</span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Outer orbit — 4 items, CCW, radius 185px, period 24s */}
                {([
                  { label: "React / Next", icon: "web",        delay: "0s"   },
                  { label: "FastAPI",      icon: "api",        delay: "-6s"  },
                  { label: "RAG / LLM",   icon: "smart_toy",  delay: "-12s" },
                  { label: "SQL · Pandas",icon: "bar_chart",  delay: "-18s" },
                ] as { label: string; icon: string; delay: string }[]).map((item, i) => (
                  <div key={`out-${i}`} style={{ position: "absolute", top: "50%", left: "50%", width: 0, height: 0, animation: "spin-ccw 24s linear infinite", animationDelay: item.delay, zIndex: 3 }}>
                    <div style={{ position: "absolute", left: "185px", top: "-14px", animation: "spin-cw 24s linear infinite", animationDelay: item.delay }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "5px", padding: "5px 11px", borderRadius: "9999px", background: "rgba(233,221,255,0.95)", border: "1px solid rgba(106,69,196,0.22)", backdropFilter: "blur(8px)", whiteSpace: "nowrap", boxShadow: "0 2px 10px rgba(106,69,196,0.14)" }}>
                        <span className="material-symbols-outlined" style={{ fontSize: "12px", color: S.secondary }}>{item.icon}</span>
                        <span style={{ fontSize: "11px", fontWeight: 700, color: S.secondary }}>{item.label}</span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Floating particles */}
                {([
                  { size: 5, top: "78%", left: "22%", delay: "0s",    dur: "3.2s" },
                  { size: 3, top: "65%", left: "78%", delay: "-1.1s", dur: "4.1s" },
                  { size: 4, top: "85%", left: "52%", delay: "-2.3s", dur: "3.7s" },
                  { size: 3, top: "72%", left: "38%", delay: "-0.6s", dur: "5.0s" },
                  { size: 6, top: "88%", left: "64%", delay: "-1.8s", dur: "2.9s" },
                  { size: 4, top: "60%", left: "15%", delay: "-3.0s", dur: "4.5s" },
                ] as { size: number; top: string; left: string; delay: string; dur: string }[]).map((p, i) => (
                  <div key={`p-${i}`} style={{ position: "absolute", top: p.top, left: p.left, width: `${p.size}px`, height: `${p.size}px`, borderRadius: "50%", background: i % 2 === 0 ? S.primary : S.secondary, opacity: 0.5, animation: `particle-rise ${p.dur} ease-out infinite`, animationDelay: p.delay }} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS STRIP ────────────────────────────── */}
        <div className="stats-strip">
          <div className="container">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: "20px",
              }}
            >
              {stats.map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span className="material-symbols-outlined icon-fill" style={{ fontSize: "20px", color: "rgba(187,195,255,0.8)" }}>{s.icon}</span>
                  <div>
                    <p style={{ fontSize: "14px", fontWeight: 600, color: "#fff" }}>{s.label}</p>
                    <p style={{ fontSize: "11px", color: "rgba(255,255,255,0.6)" }}>{s.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── ABOUT ──────────────────────────────────── */}
        <section className="section section-muted">
          <div className="container">
            <div className="grid-5-7" style={{ gap: "60px" }}>
              {/* Left column */}
              <ScrollReveal direction="left">
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {/* Profile card */}
                  <div
                    className="card profile-card"
                    style={{
                      padding: 0,
                      background: "#fff",
                      overflow: "hidden",
                      position: "relative",
                    }}
                  >
                    {/* Full portrait photo — natural 3:4 ratio, zero cropping */}
                    <div style={{ position: "relative", width: "100%", aspectRatio: "3/4", overflow: "hidden" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/Bikram_Hawladar_image.jpg"
                        alt="Bikram Hawladar"
                        className="profile-img"
                      />
                      {/* Gradient overlay — bottom only, keeps top face bright */}
                      <div style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(to top, rgba(10,10,30,0.82) 0%, rgba(0,0,0,0.1) 40%, transparent 70%)",
                        pointerEvents: "none",
                      }} />
                      {/* Name overlay at bottom */}
                      <div style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        padding: "24px 22px 20px",
                      }}>
                        <p style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "20px", color: "#fff", lineHeight: 1.2 }}>Bikram Hawladar</p>
                        <p style={{ fontSize: "12px", color: "rgba(255,255,255,0.78)", marginTop: "5px", letterSpacing: "0.05em", textTransform: "uppercase" }}>B.Tech CSE · IIIT Dharwad</p>
                      </div>
                      {/* Open to Work badge — glassmorphism */}
                      <div style={{
                        position: "absolute",
                        top: "14px",
                        right: "14px",
                        display: "flex",
                        alignItems: "center",
                        gap: "6px",
                        padding: "5px 13px",
                        borderRadius: "9999px",
                        background: "rgba(255,255,255,0.18)",
                        backdropFilter: "blur(10px)",
                        WebkitBackdropFilter: "blur(10px)",
                        border: "1px solid rgba(255,255,255,0.35)",
                      }}>
                        <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#4ade80", animation: "pulse 2s infinite", display: "block", flexShrink: 0 }} />
                        <span style={{ fontSize: "11px", fontWeight: 600, color: "#fff", whiteSpace: "nowrap" }}>Open to Work</span>
                      </div>
                    </div>
                  </div>

                  {/* Education card */}
                  <div className="card" style={{ background: "#fff" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
                      <span className="material-symbols-outlined icon-fill" style={{ color: S.primary, fontSize: "20px" }}>school</span>
                      <span style={{ fontWeight: 600, fontSize: "14px", color: S.onSurface }}>Education</span>
                    </div>
                    <div style={{ paddingLeft: "16px", borderLeft: `3px solid ${S.primaryFixed}` }}>
                      <p style={{ fontWeight: 600, fontSize: "14px", color: S.onSurface, lineHeight: 1.5 }}>IIIT Dharwad</p>
                      <p style={{ fontSize: "13px", color: S.onSurfaceVariant, marginTop: "3px" }}>B.Tech · Computer Science & Engineering</p>
                      <p style={{ fontSize: "13px", fontWeight: 700, color: S.primary, marginTop: "6px" }}>CGPA: 8.55</p>
                    </div>
                  </div>

                  {/* Awards */}
                  <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    {[
                      { icon: "military_tech", text: "Singularity 2.0 — National Winner" },
                      { icon: "emoji_events", text: "Karke Dikha — National Winner" },
                    ].map((a, i) => (
                      <div
                        key={i}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          padding: "12px 16px",
                          borderRadius: "10px",
                          background: "rgba(255,222,166,0.15)",
                          border: `1px solid ${S.gold}`,
                        }}
                      >
                        <span className="material-symbols-outlined icon-fill" style={{ color: S.tertiary, fontSize: "18px" }}>{a.icon}</span>
                        <span style={{ fontSize: "13px", fontWeight: 500, color: S.tertiary }}>{a.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Right column */}
              <ScrollReveal direction="right">
                <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
                  <div>
                    <p className="eyebrow" style={{ marginBottom: "10px" }}>About Me</p>
                    <h2 className="heading-lg" style={{ marginBottom: "20px" }}>Builder Across AI, Data &amp; Software</h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                      <p className="body-lg">
                        I am a versatile engineer and researcher with a strong foundation in AI/ML, software development, and data analysis — driven by a passion for building things that actually work in production.
                      </p>
                      <p className="body-md">
                        From training custom 1D-CNNs for healthcare to shipping B2B invoice predictors with live demos, I thrive at the intersection of research and engineering. I&apos;ve built agentic pipelines, NLP systems, geospatial ML models, and full-stack web applications.
                      </p>
                      <p className="body-md">
                        Currently seeking opportunities in SDE, AI/ML, agentic RAG automation, and data analysis roles where I can ship meaningful impact — fast.
                      </p>
                    </div>
                  </div>

                  {/* Focus 2x2 */}
                  <div className="grid-2" style={{ gap: "16px" }}>
                    {focusAreas.map((area, i) => (
                      <ScrollReveal key={i} delay={i * 80}>
                        <div
                          className="card hover-lift card-glare"
                          style={{ padding: "20px", height: "100%" }}
                        >
                          <div
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "10px",
                              background: i % 2 === 0 ? "rgba(0,35,175,0.08)" : "rgba(106,69,196,0.08)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              marginBottom: "12px",
                            }}
                          >
                            <span className="material-symbols-outlined icon-fill" style={{ color: i % 2 === 0 ? S.primary : S.secondary, fontSize: "20px" }}>{area.icon}</span>
                          </div>
                          <h4 style={{ fontWeight: 600, fontSize: "15px", color: S.onSurface, marginBottom: "6px" }}>{area.title}</h4>
                          <p style={{ fontSize: "13px", color: S.onSurfaceVariant, lineHeight: 1.6 }}>{area.desc}</p>
                        </div>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ── ACHIEVEMENTS ───────────────────────────── */}
        <section className="section section-white">
          <div className="container">
            <ScrollReveal>
              <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "40px", flexWrap: "wrap", gap: "12px" }}>
                <div>
                  <p className="eyebrow" style={{ marginBottom: "8px" }}>Highlights</p>
                  <h2 className="heading-lg">Key Achievements &amp; Roles</h2>
                </div>
                <Link href="/experience" style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "14px", fontWeight: 600, color: S.primary }}>
                  View All <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>arrow_forward</span>
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid-4" style={{ gap: "20px" }}>
              {achievements.map((a, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <Link href={a.link} style={{ display: "block", height: "100%" }}>
                    <div
                      className="card card-glare hover-lift"
                      style={{
                        height: "100%",
                        borderLeft: `4px solid ${a.borderColor}`,
                        display: "flex",
                        flexDirection: "column",
                        padding: "24px",
                      }}
                    >
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                        <span className="tag" style={a.tagStyle}>{a.tag}</span>
                        <span className="material-symbols-outlined" style={{ fontSize: "20px", color: S.outlineVariant }}>{a.icon}</span>
                      </div>
                      <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "18px", color: S.onSurface, marginBottom: "10px" }}>{a.title}</h3>
                      <p style={{ fontSize: "13px", color: S.onSurfaceVariant, lineHeight: 1.65, flex: 1 }}>{a.desc}</p>
                      <p style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "13px", fontWeight: 600, color: a.borderColor, marginTop: "16px" }}>
                        View Details <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>chevron_right</span>
                      </p>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ────────────────────────────────────── */}
        <section
          style={{
            padding: "80px 0",
            background: `linear-gradient(135deg, ${S.primary} 0%, ${S.secondary} 100%)`,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div className="grid-bg" style={{ position: "absolute", inset: 0, opacity: 0.08 }} />
          <div className="container" style={{ position: "relative", zIndex: 2, textAlign: "center" }}>
            <ScrollReveal>
              <p style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", marginBottom: "16px" }}>
                Let&apos;s Collaborate
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(28px, 4vw, 44px)",
                  fontWeight: 700,
                  color: "#ffffff",
                  marginBottom: "16px",
                  lineHeight: 1.15,
                }}
              >
                Let&apos;s Build Something Together
              </h2>
              <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.72)", maxWidth: "480px", margin: "0 auto 36px", lineHeight: 1.7 }}>
                Open to research collaborations, internships, consulting, and exciting engineering challenges.
              </p>
              <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-white">Get in Touch</Link>
                <Link href="/projects" className="btn btn-ghost">View Projects</Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

      </div>
      <Footer />
      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes spin-cw  { from{transform:rotate(0deg)}   to{transform:rotate(360deg)}  }
        @keyframes spin-ccw { from{transform:rotate(0deg)}   to{transform:rotate(-360deg)} }
        @keyframes glow-breathe {
          0%,100% { box-shadow: 0 0 20px rgba(0,35,175,0.18), 0 0 60px rgba(0,35,175,0.07); }
          50%     { box-shadow: 0 0 48px rgba(0,35,175,0.38), 0 0 100px rgba(0,35,175,0.15); }
        }
        @keyframes ripple {
          0%,100% { transform:scale(1);   opacity:0.25; }
          50%     { transform:scale(1.09); opacity:0.55; }
        }
        @keyframes particle-rise {
          0%   { transform:translateY(0)    scale(1);   opacity:0;   }
          15%  { opacity:0.7; }
          100% { transform:translateY(-110px) scale(0.2); opacity:0; }
        }
        .profile-img {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          object-position: center center;
          transition: transform 0.6s ease;
          display: block;
        }
        .profile-card:hover .profile-img { transform: scale(1.04); }
      `}</style>
    </main>
  );
}
