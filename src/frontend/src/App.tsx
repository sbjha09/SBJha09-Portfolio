import { Toaster } from "@/components/ui/sonner";
import { useEffect, useRef, useState } from "react";
import AIWorkflowSection from "./components/AIWorkflowSection";
import AboutSection from "./components/AboutSection";
import ArtifactsSection from "./components/ArtifactsSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import ContactSection from "./components/ContactSection";
import ExpertiseSection from "./components/ExpertiseSection";
import HeroSection from "./components/HeroSection";
import ImpactSection from "./components/ImpactSection";
import NavBar from "./components/NavBar";
import SkillsSection from "./components/SkillsSection";
import { useIncrementVisitorCount } from "./hooks/useQueries";

function getStoredTheme() {
  if (typeof window === "undefined") return "dark";
  return localStorage.getItem("sbj-theme") || "dark";
}

export default function App() {
  const glowRef = useRef<HTMLDivElement>(null);
  const { mutate: incrementVisitor } = useIncrementVisitorCount();
  const [theme, setThemeState] = useState<string>(getStoredTheme);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("sbj-theme", theme);
  }, [theme]);

  // Increment visitor count on load
  useEffect(() => {
    incrementVisitor();
  }, [incrementVisitor]);

  // Glow cursor
  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;
    const onMouseMove = (e: MouseEvent) => {
      glow.style.left = `${e.clientX}px`;
      glow.style.top = `${e.clientY}px`;
    };
    document.addEventListener("mousemove", onMouseMove);
    return () => document.removeEventListener("mousemove", onMouseMove);
  }, []);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <>
      {/* Glow cursor */}
      <div ref={glowRef} className="glow-cursor" aria-hidden="true" />

      {/* Nav */}
      <NavBar theme={theme} toggleTheme={toggleTheme} />

      {/* Main */}
      <main>
        <HeroSection />
        <AboutSection />
        <ExpertiseSection />
        <CaseStudiesSection />
        <AIWorkflowSection />
        <SkillsSection />
        <ImpactSection />
        <ArtifactsSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer
        style={{
          padding: "32px 40px",
          borderTop: "1px solid var(--sbj-border)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "var(--sbj-text3)",
          fontSize: "13px",
          flexWrap: "wrap",
          gap: "8px",
          background: "var(--sbj-bg2)",
        }}
      >
        <span>
          © {new Date().getFullYear()} Shanti Bhushan Jha — ERP Business Analyst
        </span>
        <span
          style={{
            fontFamily: "monospace",
            fontSize: "11px",
            color: "var(--sbj-text3)",
          }}
        >
          {"// Kolkata, India · Open to opportunities"}
        </span>
      </footer>

      <Toaster position="top-right" richColors />

      <style>{`
        @media (max-width: 768px) {
          footer {
            flex-direction: column !important;
            text-align: center !important;
          }
        }
      `}</style>
    </>
  );
}
