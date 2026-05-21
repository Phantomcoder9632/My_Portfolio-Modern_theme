"use client";

import { useState } from "react";

interface HoverCardProps {
  accent?: string;
  children: React.ReactNode;
  className?: string;
}

export default function HoverCard({ accent, children, className = "" }: HoverCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={className}
      style={{
        borderLeft: hovered && accent ? `3px solid ${accent}` : "3px solid transparent",
        boxShadow: hovered
          ? "0 8px 32px rgba(26,58,219,0.12)"
          : "0 4px 24px rgba(26,58,219,0.08)",
        transform: hovered ? "translateY(-4px)" : "none",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </div>
  );
}
