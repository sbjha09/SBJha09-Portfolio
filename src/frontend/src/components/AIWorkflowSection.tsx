import { useEffect, useRef, useState } from "react";

const workflowNodes = [
  { icon: "📥", label: "Requirement Intake" },
  { icon: "🤖", label: "AI Brainstorm" },
  { icon: "📝", label: "FRD Draft" },
  { icon: "🔍", label: "Edge Cases" },
  { icon: "🧪", label: "UAT Creation" },
  { icon: "👨‍💻", label: "Dev Handoff" },
  { icon: "✅", label: "Validation" },
];

const impactCards = [
  {
    val: "30%",
    label: "Documentation time saved with AI-assisted FRD drafting",
  },
  {
    val: "2×",
    label: "Faster edge case identification using ChatGPT prompting",
  },
  {
    val: "95%",
    label: "UAT coverage rate with AI-generated test scenarios",
  },
];

export default function AIWorkflowSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeNodes, setActiveNodes] = useState<number[]>([]);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started) {
            setStarted(true);
            const reveals = entry.target.querySelectorAll(".reveal");
            let ri = 0;
            for (const el of reveals) {
              setTimeout(() => el.classList.add("visible"), ri * 100);
              ri++;
            }
            // Animate workflow nodes
            workflowNodes.forEach((_, i) => {
              setTimeout(
                () => {
                  setActiveNodes((prev) => [...prev, i]);
                },
                400 + i * 400,
              );
            });
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.2 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [started]);

  return (
    <section
      id="aiworkflow"
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
          {"// 04 — AI WORKFLOW"}
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
          AI-Enabled BA Process
        </h2>
        <p
          className="reveal"
          style={{
            color: "var(--sbj-text2)",
            fontSize: "17px",
            lineHeight: 1.7,
            maxWidth: "620px",
            marginBottom: "48px",
          }}
        >
          My differentiator — integrating AI tools into every stage of the
          business analysis lifecycle to improve speed, quality, and coverage.
        </p>

        {/* Workflow Diagram */}
        <div
          className="reveal"
          style={{
            background: "var(--sbj-surface)",
            border: "1px solid var(--sbj-border)",
            borderRadius: "24px",
            padding: "48px 32px",
            marginBottom: "32px",
            overflowX: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              minWidth: "700px",
            }}
          >
            {workflowNodes.map((node, i) => (
              <div
                key={node.label}
                style={{ display: "flex", alignItems: "center", flex: 1 }}
              >
                {/* Node */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                    minWidth: "70px",
                  }}
                >
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "50%",
                      border: `2px solid ${activeNodes.includes(i) ? "var(--sbj-accent)" : "var(--sbj-border)"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "20px",
                      background: activeNodes.includes(i)
                        ? "rgba(249,115,22,0.1)"
                        : "var(--sbj-bg)",
                      boxShadow: activeNodes.includes(i)
                        ? "0 0 20px rgba(249,115,22,0.4)"
                        : "none",
                      transition: "all 0.5s",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    {node.icon}
                  </div>
                  <div
                    style={{
                      fontSize: "11px",
                      color: activeNodes.includes(i)
                        ? "var(--sbj-text)"
                        : "var(--sbj-text2)",
                      textAlign: "center",
                      maxWidth: "70px",
                      lineHeight: 1.3,
                      transition: "color 0.5s",
                    }}
                  >
                    {node.label}
                  </div>
                </div>

                {/* Connector */}
                {i < workflowNodes.length - 1 && (
                  <div
                    className={
                      activeNodes.includes(i)
                        ? "wf-connector-anim active"
                        : "wf-connector-anim"
                    }
                    style={{ flex: 1, margin: "0 4px", marginBottom: "20px" }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* AI Tools badges */}
          <div
            style={{
              marginTop: "32px",
              paddingTop: "24px",
              borderTop: "1px solid var(--sbj-border)",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontSize: "13px",
                color: "var(--sbj-text3)",
                fontFamily: "monospace",
              }}
            >
              {"// AI Tools:"}
            </span>
            {["ChatGPT", "GitHub Copilot", "Claude AI"].map((tool) => (
              <span
                key={tool}
                style={{
                  padding: "6px 14px",
                  borderRadius: "50px",
                  background: "rgba(249,115,22,0.1)",
                  border: "1px solid var(--sbj-border-accent)",
                  fontSize: "13px",
                  color: "var(--sbj-accent)",
                  fontFamily: "monospace",
                }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Impact Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
          className="ai-impact-grid"
        >
          {impactCards.map((card, i) => (
            <div
              key={card.val}
              className="reveal"
              style={{
                transitionDelay: `${i * 0.1}s`,
                background: "var(--sbj-surface)",
                border: "1px solid var(--sbj-border)",
                borderRadius: "16px",
                padding: "28px 24px",
                textAlign: "center",
              }}
            >
              <div
                className="gradient-text2"
                style={{
                  fontFamily: "'Georgia', serif",
                  fontWeight: 800,
                  fontSize: "40px",
                  lineHeight: 1,
                }}
              >
                {card.val}
              </div>
              <div
                style={{
                  fontSize: "14px",
                  color: "var(--sbj-text2)",
                  marginTop: "8px",
                  lineHeight: 1.5,
                }}
              >
                {card.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .ai-impact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
