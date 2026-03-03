import { useEffect, useRef } from "react";

const cards = [
  {
    icon: "⚙️",
    title: "ERP Functional Design",
    desc: "Designing scalable ERP workflows, feature logic, validation rules, and functional solutions aligned with real retail business scenarios.",
  },
  {
    icon: "📊",
    title: "Process Optimization",
    desc: "Identifying inefficiencies, mapping as-is vs to-be business processes, and improving system workflows to reduce manual effort.",
  },
  {
    icon: "✅",
    title: "UAT & Release Validation",
    desc: "Leading structured UAT cycles, preparing test scenarios, validating business cases, and ensuring production-ready releases with 95% pass rate.",
  },
  {
    icon: "🔗",
    title: "API Integration & Automation",
    desc: "Designing Excel automation, API-driven workflows, and system integrations to reduce manual work and improve operational efficiency by 40–50%.",
  },
  {
    icon: "🤖",
    title: "AI-Enabled Business Analysis",
    desc: "Using AI tools for requirement expansion, FRD drafting, feature comparison, and edge-case identification — reducing documentation effort by 30%.",
  },
  {
    icon: "🗄️",
    title: "Data & SQL Analysis",
    desc: "Analyzing ERP data using SQL (PostgreSQL, MS SQL Server), validating business logic, and supporting decision-making through structured data insights.",
  },
];

export default function ExpertiseSection() {
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
      id="expertise"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="section-pad"
      style={{ background: "var(--sbj-bg)" }}
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
          {"// 02 — EXPERTISE"}
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
          Core Capabilities
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
          Specialized skills refined through real-world ERP implementation and
          functional design work.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "24px",
          }}
        >
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="reveal card-glow-hover"
              style={{
                transitionDelay: `${i * 0.08}s`,
                background: "var(--sbj-surface)",
                border: "1px solid var(--sbj-border)",
                borderRadius: "24px",
                padding: "32px",
                cursor: "default",
                transition:
                  "transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s, border-color 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "scale(1.02) translateY(-4px)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "var(--sbj-border-accent)";
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 20px 60px rgba(249,115,22,0.1)";
                const icon = (e.currentTarget as HTMLDivElement).querySelector(
                  ".card-icon-inner",
                ) as HTMLElement;
                if (icon) icon.style.transform = "scale(1.1) rotate(5deg)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.transform =
                  "scale(1) translateY(0)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "var(--sbj-border)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                const icon = (e.currentTarget as HTMLDivElement).querySelector(
                  ".card-icon-inner",
                ) as HTMLElement;
                if (icon) icon.style.transform = "scale(1) rotate(0deg)";
              }}
            >
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "12px",
                  background: "var(--sbj-surface2)",
                  border: "1px solid var(--sbj-border)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "22px",
                  marginBottom: "20px",
                }}
              >
                <span
                  className="card-icon-inner"
                  style={{ transition: "transform 0.3s" }}
                >
                  {card.icon}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "'Georgia', serif",
                  fontWeight: 700,
                  fontSize: "19px",
                  marginBottom: "10px",
                  color: "var(--sbj-text)",
                }}
              >
                {card.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "var(--sbj-text2)",
                  lineHeight: 1.7,
                }}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
