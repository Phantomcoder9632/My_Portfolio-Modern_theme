import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bikram Hawladar | AI Researcher & ML Engineer",
  description:
    "Portfolio of Bikram Hawladar — AI Researcher, ML Engineer, and NLP Specialist at IIIT Dharwad. Explore research projects, publications, and skills.",
  keywords: [
    "Bikram Hawladar",
    "AI Researcher",
    "ML Engineer",
    "NLP Specialist",
    "IIIT Dharwad",
    "Machine Learning",
    "Deep Learning",
    "Portfolio",
  ],
  authors: [{ name: "Bikram Hawladar" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
