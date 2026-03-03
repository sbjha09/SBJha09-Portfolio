import { useEffect, useRef, useState } from "react";

interface MetricCardProps {
  target: number;
  suffix: string;
  label: string;
  delay?: number;
}

function MetricCard({ target, suffix, label, delay = 0 }: MetricCardProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          setTimeout(() => setStarted(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started, delay]);

  useEffect(() => {
    if (!started) return;
    const duration = 1200;
    const start = performance.now();
    let raf: number;
    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [started, target]);

  return (
    <div
      ref={ref}
      style={{
        background: "var(--sbj-surface)",
        border: "1px solid var(--sbj-border)",
        borderRadius: "24px",
        padding: "32px 24px",
        textAlign: "center",
        transition: "transform 0.3s, border-color 0.3s",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform =
          "translateY(-4px)";
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "var(--sbj-border-accent)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLDivElement).style.borderColor =
          "var(--sbj-border)";
      }}
    >
      <div
        className="gradient-text"
        style={{
          fontFamily: "'Georgia', serif",
          fontWeight: 800,
          fontSize: "52px",
          lineHeight: 1,
        }}
      >
        {count}
        <span style={{ fontSize: "26px" }}>{suffix}</span>
      </div>
      <div
        style={{
          fontSize: "13px",
          color: "var(--sbj-text2)",
          marginTop: "10px",
          lineHeight: 1.5,
        }}
      >
        {label}
      </div>
    </div>
  );
}

const metrics = [
  { target: 50, suffix: "+", label: "ERP tickets analyzed monthly" },
  { target: 5, suffix: "+", label: "ERP features designed & delivered" },
  { target: 50, suffix: "%", label: "Manual effort reduced via automation" },
  { target: 95, suffix: "%", label: "UAT pass rate before production" },
  { target: 30, suffix: "%", label: "Documentation time saved with AI" },
  { target: 4, suffix: ".5+", label: "Years ERP domain experience" },
];

export default function ImpactSection() {
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
      id="impact"
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
          {"// 06 — IMPACT"}
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
          Measurable Results
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
          Numbers that tell the real story of ERP delivery and business
          improvement.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          {metrics.map((m, i) => (
            <MetricCard key={m.label} {...m} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
