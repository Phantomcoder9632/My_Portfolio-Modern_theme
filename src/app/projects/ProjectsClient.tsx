"use client";
import { useState, useMemo } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectCard from "@/components/ProjectCard";

const S = {
  primary: "#0023af",
  secondary: "#6a45c4",
  primaryFixed: "#dee0ff",
  secondaryFixed: "#e9ddff",
  tertiaryFixed: "#ffdea6",
  tertiary: "#4e3600",
  surfaceLow: "#f4f3fb",
  surfaceHigh: "#e8e7ef",
  onSurface: "#1a1b21",
  onSurfaceVariant: "#444655",
  outline: "#757687",
};

const projects = [
  {
    id: "invoice-predictor",
    title: "B2B Invoice Payment Delay Predictor",
    tags: ["FinTech", "Explainable AI"],
    badge: "XGBoost-Risk",
    badgeBg: "#fff3e0",
    badgeColor: "#e65100",
    accent: "#f57c00",
    description: "Predictive risk engine utilizing behavioral heuristics and structural bureaucracy markers to unlock stagnant capital for Indian MSMEs.",
    results: ["Structural Bottlenecks Proved (0.0% Financial Weight)", "48.3% Public Listing Scrutiny Impact", "88.0% Recall via Optuna Threshold Tuning"],
    stack: ["Python", "FastAPI", "React 19", "XGBoost", "Optuna", "Playwright"],
    githubUrl: "https://github.com/Phantomcoder9632/B2B-Invoice-payment-delay-predictor.git",
    liveDemoUrl: "https://b2-b-invoice-payment-delay-predicto.vercel.app/",
  },
  {
    id: "wikisentinel",
    title: "WikiSentinel",
    tags: ["ML Engineering", "Hackathon"],
    badge: "Singularity 2.0 🏆",
    badgeBg: S.tertiaryFixed,
    badgeColor: S.tertiary,
    accent: S.primary,
    description: "An automated moderation pipeline that detects and flags malicious edits on open-knowledge platforms in real-time using transformer-based NLP.",
    results: ["40% False Positive reduction", "Processed 300+ edits/min", "Singularity 2.0 — Winner"],
    stack: ["Python", "TensorFlow", "Kafka", "Transformers"],
    githubUrl: "https://github.com/bikramh",
  },
  {
    id: "insureclear",
    title: "InsureClear",
    tags: ["ML Engineering", "Hackathon"],
    badge: "Karke Dikha 🏆",
    badgeBg: S.tertiaryFixed,
    badgeColor: S.tertiary,
    accent: "#1a3adb",
    description: "A novel document processing architecture for insurance claims extraction using vectorless retrieval — no embedding databases required.",
    results: ["Pioneered Vectorless RAG architecture", "94% overall extraction accuracy", "3× faster than vector-based pipelines"],
    stack: ["Python", "FastAPI", "Docker", "LLM"],
    githubUrl: "https://github.com/Phantomcoder9632/insureclear-policy-checker.git",
    caseStudyUrl: "#",
  },
  {
    id: "beamnet",
    title: "BeamNet-MTL",
    tags: ["5G", "Signal Processing"],
    badge: null,
    accent: S.secondary,
    description: "Multi-task learning framework for simultaneous beam selection and channel estimation in mmWave 5G communications with ultra-low inference latency.",
    results: ["37% NLOS error reduction", "0.047ms inference latency", "MTL outperforms single-task by 22%"],
    stack: ["PyTorch", "TensorFlow Lite", "MATLAB", "NumPy"],
    githubUrl: "https://github.com/Phantomcoder9632/BeamNet-MTL.git",
    caseStudyUrl: "#",
  },
  {
    id: "velloc",
    title: "Velloc",
    tags: ["Computer Vision", "Human-Computer Interaction"],
    badge: "Velloc",
    badgeBg: "#e1f5fe",
    badgeColor: "#01579b",
    accent: "#0288d1",
    description: "Real-time, browser-based media player controlled entirely by hand gestures via a client-side MediaPipe landmark extraction pipeline and an optimized cloud-deployed Random Forest classifier.",
    results: ["21 Hand Landmarks Tracked in Real Time", "Low-latency WebSocket Communication", "Cloud Backend with Automatic Free-Tier Fail-safes"],
    stack: ["React (Vite)", "FastAPI", "MediaPipe", "Scikit-Learn", "WebSockets", "Python"],
    githubUrl: "https://github.com/Phantomcoder9632/Velloc-AImediaplayer.git",
    liveDemoUrl: "https://vellocaimediaplayer.vercel.app/",
  },
  {
    id: "nativeharvest",
    title: "NativeHarvest",
    tags: ["AgriTech", "Research"],
    badge: null,
    accent: S.primary,
    description: "Predictive modeling for crop yield estimation integrating Google Earth Engine geospatial data with Explainable AI for actionable farmer insights.",
    results: ["93.3% prediction accuracy", "Integrated GEE + XAI pipeline", "SHAP-based farmer insights"],
    stack: ["Python", "Google Earth Engine", "XGBoost", "SHAP"],
    githubUrl: "https://github.com/Phantomcoder9632/NativeHarvest-XAI-Framework-for-Indian-Crop-Mapping-.git",
    paperUrl: "/Explainable_AI__XAI__Framework_for_Crop_Area_Estimation___Survey_Validation (1).pdf",
  },
  {
    id: "xgboost-sleep",
    title: "Smartphone Screen Time & Sleep Impact Analysis",
    tags: ["Health Informatics", "Machine Learning"],
    badge: "XGBoost-Sleep",
    badgeBg: "#e8f5e9",
    badgeColor: "#1b5e20",
    accent: "#2e7d32",
    description: "Advanced machine learning framework combining behavioral digital phenotyping with objective endocrine biomarkers to predict sleep degradation in urban populations.",
    results: ["91.0% Test Classification Accuracy", "0.96 ROC-AUC Discriminative Power", "93.0% Recall for At-Risk Individuals"],
    stack: ["Python", "XGBoost", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib"],
    githubUrl: "https://github.com/bikramh",
    paperUrl: "/Smartphone_usage-Research_paper.pdf",
  },
  {
    id: "apneapredict-1d",
    title: "ApneaPredict-1D",
    tags: ["Healthcare Technology", "Deep Learning"],
    badge: "ApneaPredict-1D",
    badgeBg: "#e0f2f1",
    badgeColor: "#004d40",
    accent: "#00695c",
    description: "Strictly causal sliding-window forward prediction framework utilizing a custom 1D-CNN to forecast imminent obstructive sleep apnea events from single-channel PPG signals.",
    results: ["5s Lead Time for Real-Time Alerts", "86.03% Sensitivity on Unseen Patients", "Strictly Avoids Data Leakage"],
    stack: ["Python", "PyTorch", "1D-CNN", "Scikit-Learn", "NumPy", "Pandas"],
    paperUrl: "/Causal_Sliding_Window_Prediction_of_Imminent_Obstructive_Sleep_Apnea_from_Single_Channel_PPG_using_1D_CNN.pdf",
  },
  {
    id: "lexical-norm",
    title: "Lexical Normalization",
    tags: ["Natural Language Processing", "Deep Learning"],
    badge: "Lexical-Norm",
    badgeBg: "#ede7f6",
    badgeColor: "#4527a0",
    accent: S.secondary,
    description: "Neural character-level pointer-generator framework designed to normalize highly chaotic, slang-heavy, and phonetic social media text while solving the Out-of-Vocabulary (OOV) problem.",
    results: ["47.37% BLEU Score achieved", "8.28% Exact Match on noisy tweets", "Outperforms Seq2Seq baselines by 5x"],
    stack: ["Python", "PyTorch", "Hugging Face", "GRU", "NumPy", "Pandas"],
    githubUrl: "https://github.com/Phantomcoder9632/Lexical-Normalization-on-SocialMedia-text.git",
  },
];

// Map each filter tab label → which project tags it matches
const filterMap: Record<string, string[]> = {
  "All": [],
  "Hackathon Projects": ["Hackathon"],
  "Data Analysis and FinTech": ["FinTech", "Explainable AI"],
  "5G": ["5G", "Signal Processing"],
  "AgriTech": ["AgriTech"],
  "NLP": ["Natural Language Processing", "Deep Learning", "NLP"],
  "Health Informatics": ["Health Informatics", "Machine Learning", "Healthcare Technology"],
  "Computer Vision": ["Computer Vision", "Human-Computer Interaction"],
};

const filterTabs = Object.keys(filterMap);

export default function ProjectsClient() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    const matchTags = filterMap[activeFilter];
    return projects.filter((p) =>
      p.tags.some((tag) => matchTags.includes(tag))
    );
  }, [activeFilter]);

  return (
    <>
      {/* Filter tabs */}
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {filterTabs.map((tab) => {
          const isActive = tab === activeFilter;
          return (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              style={{
                padding: "8px 18px",
                borderRadius: "9999px",
                fontSize: "13px",
                fontWeight: 600,
                border: isActive ? "none" : `1.5px solid ${S.surfaceHigh}`,
                cursor: "pointer",
                background: isActive ? S.primary : "#fff",
                color: isActive ? "#fff" : S.onSurfaceVariant,
                transition: "all 0.2s ease",
                boxShadow: isActive ? "0 2px 8px rgba(0,35,175,0.25)" : "none",
                transform: isActive ? "scale(1.04)" : "scale(1)",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = S.primaryFixed;
                  e.currentTarget.style.color = S.primary;
                  e.currentTarget.style.borderColor = S.primary;
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = "#fff";
                  e.currentTarget.style.color = S.onSurfaceVariant;
                  e.currentTarget.style.borderColor = S.surfaceHigh;
                }
              }}
            >
              {tab}
            </button>
          );
        })}
      </div>

      {/* Project count indicator */}
      <p style={{ marginTop: "12px", fontSize: "13px", color: S.outline }}>
        Showing <strong style={{ color: S.primary }}>{filteredProjects.length}</strong> of {projects.length} projects
        {activeFilter !== "All" && (
          <> in <strong style={{ color: S.onSurface }}>{activeFilter}</strong></>
        )}
      </p>

      {/* Projects Grid */}
      <section style={{ padding: "40px 0 56px", background: S.surfaceLow }}>
        <div className="container">
          {filteredProjects.length === 0 ? (
            <div style={{ textAlign: "center", padding: "64px 0", color: S.outline }}>
              <span className="material-symbols-outlined" style={{ fontSize: "48px", display: "block", marginBottom: "12px" }}>search_off</span>
              <p style={{ fontSize: "16px" }}>No projects found for this filter.</p>
            </div>
          ) : (
            <div className="grid-2" style={{ gap: "24px" }}>
              {filteredProjects.map((project, i) => (
                <ScrollReveal key={project.id} delay={i * 60}>
                  <ProjectCard {...project} />
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
