"use client";
import { useState } from "react";

const S = {
  primary: "#0023af",
  secondary: "#6a45c4",
  primaryFixed: "#dee0ff",
  onPrimaryFixed: "#000e5e",
  tertiary: "#4e3600",
  tertiaryFixed: "#ffdea6",
  surfaceLow: "#f4f3fb",
  surfaceHigh: "#e8e7ef",
  surfaceVariant: "#e2e2e9",
  onSurface: "#1a1b21",
  onSurfaceVariant: "#444655",
  outline: "#757687",
};

interface ProjectCardProps {
  title: string;
  tags: string[];
  badge?: string | null;
  badgeBg?: string;
  badgeColor?: string;
  accent: string;
  description: string;
  results: string[];
  stack: string[];
  githubUrl?: string;
  paperUrl?: string;
  caseStudyUrl?: string;
  liveDemoUrl?: string;
}

export default function ProjectCard({
  title, tags, badge, badgeBg, badgeColor, accent,
  description, results, stack, githubUrl, paperUrl, caseStudyUrl, liveDemoUrl,
}: ProjectCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#ffffff",
        border: `1px solid ${S.surfaceHigh}`,
        borderLeft: `4px solid ${hovered ? accent : S.surfaceHigh}`,
        borderRadius: "14px",
        padding: "28px",
        display: "flex",
        flexDirection: "column",
        gap: "0",
        height: "100%",
        boxShadow: hovered ? "0 8px 32px rgba(0,35,175,0.12)" : "0 2px 12px rgba(0,35,175,0.07)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.25s ease",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top color accent bar */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: accent, opacity: 0.6 }} />

      {/* Tags + badge */}
      <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: "8px", marginBottom: "16px", paddingTop: "4px" }}>
        {tags.map((tag) => (
          <span
            key={tag}
            style={{
              padding: "3px 11px",
              borderRadius: "9999px",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.04em",
              background: S.primaryFixed,
              color: S.onPrimaryFixed,
            }}
          >
            {tag}
          </span>
        ))}
        {badge && (
          <span
            style={{
              marginLeft: "auto",
              padding: "3px 11px",
              borderRadius: "9999px",
              fontSize: "11px",
              fontWeight: 700,
              background: badgeBg ?? S.tertiaryFixed,
              color: badgeColor ?? S.tertiary,
              border: `1px solid ${badgeColor ?? S.tertiary}44`,
            }}
          >
            {badge}
          </span>
        )}
      </div>

      {/* Title */}
      <h2
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "22px",
          fontWeight: 700,
          color: S.onSurface,
          lineHeight: 1.25,
          marginBottom: "10px",
        }}
      >
        {title}
      </h2>

      {/* Description */}
      <p style={{ fontSize: "14px", color: S.onSurfaceVariant, lineHeight: 1.7, marginBottom: "20px", flex: 1 }}>
        {description}
      </p>

      {/* Key Results */}
      <div
        style={{
          background: S.surfaceLow,
          border: `1px solid ${S.surfaceHigh}`,
          borderRadius: "10px",
          padding: "14px 16px",
          marginBottom: "16px",
        }}
      >
        <p
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "11px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: S.onSurface,
            marginBottom: "10px",
          }}
        >
          <span className="material-symbols-outlined icon-fill" style={{ fontSize: "16px", color: accent }}>bar_chart</span>
          Key Results
        </p>
        <ul style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
          {results.map((r) => (
            <li key={r} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "13px", color: S.onSurfaceVariant }}>
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: accent, flexShrink: 0, marginTop: "5px" }} />
              {r}
            </li>
          ))}
        </ul>
      </div>

      {/* Stack */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "20px" }}>
        {stack.map((tech) => (
          <span
            key={tech}
            style={{
              padding: "3px 10px",
              borderRadius: "6px",
              fontSize: "12px",
              fontWeight: 500,
              background: S.surfaceVariant,
              color: S.outline,
              border: `1px solid ${S.surfaceHigh}`,
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          paddingTop: "16px",
          borderTop: `1px solid ${S.surfaceHigh}`,
          flexWrap: "wrap",
        }}
      >
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "8px 16px",
              borderRadius: "8px",
              border: `1.5px solid ${S.primary}`,
              color: S.primary,
              fontSize: "13px",
              fontWeight: 600,
              transition: "background 0.15s",
              background: "transparent",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = S.primaryFixed; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>code</span>
            GitHub
          </a>
        )}
        {paperUrl && (
          <a
            href={paperUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "8px 16px",
              borderRadius: "8px",
              border: `1.5px solid ${S.primary}`,
              color: S.primary,
              fontSize: "13px",
              fontWeight: 600,
              transition: "background 0.15s",
              background: "transparent",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = S.primaryFixed; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>description</span>
            Paper
          </a>
        )}
        {liveDemoUrl && (
          <a
            href={liveDemoUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "8px 16px",
              borderRadius: "8px",
              border: `1.5px solid ${accent}`,
              color: accent,
              fontSize: "13px",
              fontWeight: 600,
              transition: "background 0.15s",
              background: "transparent",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = S.primaryFixed; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>rocket_launch</span>
            Live Demo
          </a>
        )}
        {caseStudyUrl && (
          <a
            href={caseStudyUrl}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "4px",
              marginLeft: "auto",
              fontSize: "13px",
              fontWeight: 600,
              color: accent,
            }}
          >
            Case Study
            <span className="material-symbols-outlined" style={{ fontSize: "16px" }}>arrow_forward</span>
          </a>
        )}
      </div>
    </div>
  );
}
