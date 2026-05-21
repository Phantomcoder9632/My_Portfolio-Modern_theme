import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects & Research | Bikram Hawladar",
  description: "Research projects in NLP, ML Engineering, 5G Signal Processing, and AgriTech by Bikram Hawladar.",
};

const S = {
  primary: "#0023af",
  surfaceHigh: "#e8e7ef",
  surfaceLow: "#f4f3fb",
  onSurface: "#1a1b21",
  onSurfaceVariant: "#444655",
};

export default function ProjectsPage() {
  return (
    <main>
      <Navbar />
      <div className="page-content">

        {/* Header */}
        <section
          style={{
            padding: "64px 0 48px",
            background: "#fff",
            borderBottom: `1px solid ${S.surfaceHigh}`,
          }}
        >
          <div className="container">
            <ScrollReveal>
              <p className="eyebrow" style={{ marginBottom: "10px" }}>Portfolio</p>
              <h1
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(32px, 5vw, 52px)",
                  fontWeight: 700,
                  color: S.onSurface,
                  lineHeight: 1.1,
                  letterSpacing: "-0.02em",
                  marginBottom: "16px",
                }}
              >
                Projects &amp; Research
              </h1>
              <p style={{ fontSize: "17px", color: S.onSurfaceVariant, maxWidth: "600px", lineHeight: 1.7, marginBottom: "32px" }}>
                Applied research and engineering projects spanning machine learning infrastructure,
                wireless communication, geospatial intelligence, and computational analysis.
              </p>

              {/* Interactive filter tabs + grid — client component */}
              <ProjectsClient />
            </ScrollReveal>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
}
