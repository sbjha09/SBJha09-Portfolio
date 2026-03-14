
import { Toaster } from "@/components/ui/sonner";
import { useEffect, useRef, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import AIWorkflowSection from "./components/AIWorkflowSection";
import AboutSection from "./components/AboutSection";
import AdminDashboard from "./components/AdminDashboard";
import AdminLoginModal from "./components/AdminLoginModal";
import ArtifactsSection from "./components/ArtifactsSection";
import CaseStudiesSection from "./components/CaseStudiesSection";
import ContactSection from "./components/ContactSection";
import ExpertiseSection from "./components/ExpertiseSection";
import HeroSection from "./components/HeroSection";
import ImpactSection from "./components/ImpactSection";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/ProtectedRoute";
import SkillsSection from "./components/SkillsSection";
import { AuthProvider, useAuthContext } from "./hooks/AuthContext";
import { useIncrementVisitorCount } from "./hooks/useQueries";

function getStoredTheme() {
  if (typeof window === "undefined") return "dark";
  return localStorage.getItem("sbj-theme") || "dark";
}

function Home() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [theme, setThemeState] = useState<string>(getStoredTheme);
  const [isAdminLoginOpen, setIsAdminLoginOpen] = useState(false);
  const { isAuthenticated } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("sbj-theme", theme);
  }, [theme]);

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

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/admin");
    }
  }, [isAuthenticated, navigate]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const openAdminLogin = () => setIsAdminLoginOpen(true);
  const closeAdminLogin = () => setIsAdminLoginOpen(false);

  return (
    <>
      <div ref={glowRef} className="glow-cursor" aria-hidden="true" />
      <NavBar theme={theme} toggleTheme={toggleTheme} />
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
          {"// Kolkata, India · "}
          <button
            onClick={openAdminLogin}
            style={{
              fontFamily: "inherit",
              fontSize: "inherit",
              color: "inherit",
              background: "none",
              border: "none",
              padding: 0,
              cursor: "pointer",
              textDecoration: "underline",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color =
                "var(--sbj-accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.color =
                "var(--sbj-text3)";
            }}
          >
            Open to opportunities
          </button>
        </span>
      </footer>
      {isAdminLoginOpen && <AdminLoginModal onClose={closeAdminLogin} />}
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

function App() {
  const { mutate: incrementVisitor } = useIncrementVisitorCount();

  useEffect(() => {
    incrementVisitor();
  }, [incrementVisitor]);

  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/admin" element={<AdminDashboard />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
