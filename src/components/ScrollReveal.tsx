"use client";

import { useEffect, useRef, ReactNode, CSSProperties } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "left" | "right";
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  style = {},
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reveal = () => {
      setTimeout(() => el.classList.add("revealed"), delay);
    };

    // Check if already in viewport on mount
    const rect = el.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom >= 0;
    if (inView) {
      reveal();
      return;
    }

    // Use IntersectionObserver for scroll-triggered reveal
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          io.unobserve(el);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px 0px 0px" }
    );
    io.observe(el);

    // Fallback: always reveal after 2.5s regardless
    const fallback = setTimeout(() => {
      el.classList.add("revealed");
      io.disconnect();
    }, 2500 + delay);

    return () => {
      io.disconnect();
      clearTimeout(fallback);
    };
  }, [delay]);

  const revealClass =
    direction === "left" ? "reveal-left" : direction === "right" ? "reveal-right" : "reveal";

  return (
    <div
      ref={ref}
      className={`${revealClass} ${className}`}
      style={{ transitionDelay: delay > 0 ? `${delay}ms` : "0ms", ...style }}
    >
      {children}
    </div>
  );
}
