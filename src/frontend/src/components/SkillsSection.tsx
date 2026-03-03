import { useEffect, useRef } from "react";

const skillGroups = [
  {
    icon: "🏪",
    title: "ERP & Domain",
    skills: [
      { name: "Ginesys ERP & POS", pct: 90 },
      { name: "Retail ERP Workflows", pct: 88 },
      { name: "Billing & Discount Logic", pct: 85 },
    ],
  },
  {
    icon: "📋",
    title: "Business Analysis",
    skills: [
      { name: "Requirement Engineering (FRD/BRD)", pct: 88 },
      { name: "UAT Planning & Execution", pct: 90 },
      { name: "Stakeholder Management", pct: 80 },
    ],
  },
  {
    icon: "💻",
    title: "Technical",
    skills: [
      { name: "SQL (PostgreSQL / MS SQL)", pct: 78 },
      { name: "API Integration (Functional)", pct: 72 },
      { name: "Excel & Data Automation", pct: 85 },
    ],
  },
  {
    icon: "🤖",
    title: "AI & Tools",
    skills: [
      { name: "ChatGPT / Copilot for BA", pct: 82 },
      { name: "Jira / Confluence", pct: 80 },
      { name: "Visily (Prototyping)", pct: 70 },
    ],
  },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const reveals = entry.target.querySelectorAll(".reveal");
            let i = 0;
            for (const el of reveals) {
              setTimeout(() => {
                el.classList.add("visible");
                for (const bar of el.querySelectorAll(
                  ".skill-bar-fill[data-w]",
                )) {
                  const width = (bar as HTMLElement).dataset.w;
                  if (width) (bar as HTMLElement).style.width = `${width}%`;
                }
              }, i * 120);
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
      id="skills"
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
          {"// 05 — SKILLS"}
        </span>
        <h2
          className="reveal"
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "clamp(32px, 4vw, 48px)",
            fontWeight: 800,
            letterSpacing: "-1.5px",
            marginBottom: "48px",
            color: "var(--sbj-text)",
          }}
        >
          Technical Expertise
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "48px",
          }}
          className="skills-grid"
        >
          {skillGroups.map((group, gi) => (
            <div
              key={group.title}
              className="reveal"
              style={{ transitionDelay: `${gi * 0.1}s` }}
            >
              {/* Group header */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "24px",
                }}
              >
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "10px",
                    background: "var(--sbj-surface2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                  }}
                >
                  {group.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontWeight: 700,
                    fontSize: "18px",
                    color: "var(--sbj-text)",
                  }}
                >
                  {group.title}
                </h3>
              </div>

              {/* Skill bars */}
              {group.skills.map((skill) => (
                <div key={skill.name} style={{ marginBottom: "16px" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginBottom: "6px",
                    }}
                  >
                    <span
                      style={{ fontSize: "14px", color: "var(--sbj-text2)" }}
                    >
                      {skill.name}
                    </span>
                    <span
                      style={{
                        fontFamily: "monospace",
                        fontSize: "12px",
                        color: "var(--sbj-accent)",
                      }}
                    >
                      {skill.pct}%
                    </span>
                  </div>
                  <div
                    style={{
                      height: "4px",
                      background: "var(--sbj-surface2)",
                      borderRadius: "2px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      className="skill-bar-fill"
                      data-w={skill.pct}
                      style={{ width: "0%" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
