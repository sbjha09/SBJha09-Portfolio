import { useEffect, useRef } from "react";

const artifacts = [
  {
    icon: "📄",
    title: "Functional Requirement Document",
    desc: "Structured FRD template with feature scope, validation rules, and edge cases.",
    badge: "FRD",
  },
  {
    icon: "🧪",
    title: "UAT Plan & Test Scenarios",
    desc: "Comprehensive UAT plan with test cases mapped to business requirements.",
    badge: "UAT",
  },
  {
    icon: "🔀",
    title: "Process Flow Diagram",
    desc: "As-Is vs To-Be workflow mapping for ERP feature redesign and optimization.",
    badge: "FLOW",
  },
  {
    icon: "📊",
    title: "Requirement Traceability Matrix",
    desc: "RTM linking business requirements to test cases and feature delivery.",
    badge: "RTM",
  },
  {
    icon: "💡",
    title: "Feature Enhancement Proposal",
    desc: "Structured proposal for ERP feature improvement with impact analysis.",
    badge: "PROPOSAL",
  },
];

export default function ArtifactsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const reveals = entry.target.querySelectorAll(".reveal");
            let i = 0;
            for (const el of reveals) {
              setTimeout(() => el.classList.add("visible"), i * 100);
              i++;
            }
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="artifacts"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="section-pad"
      style={{ background: "var(--sbj-bg2)" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <span
          className="reveal font-mono-code"
          style={{
            fontSize: "12px",
            color: "var(--sbj-accent)",
            letterSpacing: "2px",
            textTransform: "uppercase",
            display: "block",
            marginBottom: "16px",
          }}
        >
          {"// 07 — ARTIFACTS"}
        </span>
        <h2
          className="reveal"
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 800,
            letterSpacing: "-1.5px",
            marginBottom: "12px",
            color: "var(--sbj-text)",
          }}
        >
          Portfolio Artifacts
        </h2>
        <p
          className="reveal"
          style={{
            color: "var(--sbj-text2)",
            fontSize: "17px",
            lineHeight: 1.7,
            maxWidth: "600px",
            marginBottom: "48px",
          }}
        >
          Documentation and design artifacts demonstrating functional analysis
          depth and product thinking.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {artifacts.map((artifact, i) => (
            <div
              key={artifact.title}
              className="reveal"
              style={{
                transitionDelay: `${i * 0.08}s`,
                background: "var(--sbj-surface)",
                border: "1px solid var(--sbj-border)",
                borderRadius: "16px",
                padding: "24px",
                cursor: "pointer",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "var(--sbj-border-accent)";
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-3px)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 12px 40px rgba(249,115,22,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "var(--sbj-border)";
                (e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: "28px", marginBottom: "16px" }}>
                {artifact.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Georgia', serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  marginBottom: "6px",
                  color: "var(--sbj-text)",
                }}
              >
                {artifact.title}
              </h3>
              <p
                style={{
                  fontSize: "13px",
                  color: "var(--sbj-text3)",
                  lineHeight: 1.5,
                }}
              >
                {artifact.desc}
              </p>
              <span
                style={{
                  display: "inline-block",
                  marginTop: "14px",
                  fontSize: "11px",
                  padding: "4px 10px",
                  borderRadius: "50px",
                  background: "rgba(249,115,22,0.1)",
                  color: "var(--sbj-accent)",
                  fontFamily: "monospace",
                }}
              >
                {artifact.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
