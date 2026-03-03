import { useEffect, useRef } from "react";

const timelineItems = [
  {
    year: "2020",
    title: "ERP Entry & Foundation",
    desc: "Began career in Retail ERP ecosystem, learning Ginesys POS workflows, billing systems, and functional analysis fundamentals.",
  },
  {
    year: "2021 – 2022",
    title: "Feature Design & UAT",
    desc: "Led UAT cycles, drafted FRDs, designed discount control systems, and improved billing governance across retail chains.",
  },
  {
    year: "2023",
    title: "Automation & Integration",
    desc: "Designed Excel bulk import automation, API integration workflows, and SSO authentication architecture for ERP systems.",
  },
  {
    year: "2024 – Present",
    title: "AI-Enabled BA Workflow",
    desc: "Adopted AI tools (ChatGPT, Copilot) to accelerate FRD drafting, edge case generation, and documentation — reducing effort by 30%.",
  },
];

const bioItems = [
  {
    id: "bio-1",
    highlight: "ERP Business Analyst",
    prefix: "I am an ",
    suffix:
      " focused on solving real business problems through structured analysis, functional design, and automation-driven thinking.",
  },
  {
    id: "bio-2",
    highlight: "4.5+ years",
    prefix: "Over ",
    suffix:
      " in Retail ERP and POS environments, I have designed ERP features, optimized workflows, improved system efficiency, and bridged the gap between business requirements and technical execution.",
  },
  {
    id: "bio-3",
    highlight: "AI tools (ChatGPT, Copilot)",
    prefix: "I actively leverage ",
    suffix:
      " to improve requirement analysis, generate structured documentation, explore edge cases, and accelerate functional delivery — positioning myself as an AI-enabled ERP consultant.",
  },
  {
    id: "bio-4",
    highlight:
      "process thinking, data-driven decisions, and automation mindset",
    prefix: "My approach combines ",
    suffix:
      " to design scalable ERP solutions that create measurable business impact.",
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const reveals = entry.target.querySelectorAll(".reveal");
            let i = 0;
            for (const el of reveals) {
              setTimeout(() => el.classList.add("visible"), i * 120);
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
      id="about"
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
          {"// 01 — ABOUT"}
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
          My Journey
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="about-grid"
        >
          {/* Timeline */}
          <div
            className="reveal"
            style={{ position: "relative", paddingLeft: "32px" }}
          >
            <div className="timeline-line" />
            {timelineItems.map((item, i) => (
              <div
                key={item.year}
                style={{
                  position: "relative",
                  marginBottom: "40px",
                  paddingLeft: "4px",
                }}
              >
                {/* Node */}
                <div
                  style={{
                    position: "absolute",
                    left: "-26px",
                    top: "6px",
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: i < 3 ? "var(--sbj-accent)" : "var(--sbj-bg)",
                    border: "2px solid var(--sbj-accent)",
                    boxShadow: i < 3 ? "0 0 12px var(--sbj-accent)" : "none",
                    zIndex: 1,
                  }}
                />
                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: "12px",
                    color: "var(--sbj-accent)",
                    marginBottom: "4px",
                    letterSpacing: "0.5px",
                  }}
                >
                  {item.year}
                </div>
                <div
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontWeight: 700,
                    fontSize: "17px",
                    marginBottom: "6px",
                    color: "var(--sbj-text)",
                  }}
                >
                  {item.title}
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "var(--sbj-text2)",
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Bio */}
          <div className="reveal" style={{ transitionDelay: "0.1s" }}>
            {bioItems.map((bio) => (
              <p
                key={bio.id}
                style={{
                  fontSize: "17px",
                  color: "var(--sbj-text2)",
                  lineHeight: 1.8,
                  marginBottom: "20px",
                }}
              >
                {bio.prefix}
                <strong style={{ color: "var(--sbj-text)" }}>
                  {bio.highlight}
                </strong>
                {bio.suffix}
              </p>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
