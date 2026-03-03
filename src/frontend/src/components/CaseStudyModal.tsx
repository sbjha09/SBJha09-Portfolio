import { X } from "lucide-react";
import { useEffect, useRef } from "react";

export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  label: string;
  summary: string;
  tags: string[];
  metric: string;
  metricLabel: string;
  isNew?: boolean;
  problem: string;
  analysis: string;
  solution: string;
  flow: string[];
  before: string;
  after: string;
  metrics: { val: string; label: string }[];
  role: string;
  tools: string[];
}

interface CaseStudyModalProps {
  study: CaseStudy | null;
  onClose: () => void;
}

export default function CaseStudyModal({
  study,
  onClose,
}: CaseStudyModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    if (study) {
      document.body.style.overflow = "hidden";
      // Animate flow steps
      setTimeout(() => {
        const steps = document.querySelectorAll(".flow-step-item");
        let si = 0;
        for (const s of steps) {
          const idx = si;
          setTimeout(() => {
            (s as HTMLElement).style.borderColor = "var(--sbj-accent)";
            (s as HTMLElement).style.color = "var(--sbj-accent)";
            (s as HTMLElement).style.background = "rgba(249,115,22,0.1)";
          }, idx * 200);
          si++;
        }
      }, 400);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [study]);

  if (!study) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      onKeyDown={(e) => e.key === "Escape" && onClose()}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2000,
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        padding: "40px 20px",
        overflowY: "auto",
        animation: "fadeSlideUp 0.3s cubic-bezier(0.22,1,0.36,1) both",
      }}
      aria-hidden="true"
    >
      <dialog
        open
        aria-label={study.title}
        style={{
          background: "var(--sbj-bg3)",
          border: "1px solid var(--sbj-border)",
          borderRadius: "32px",
          maxWidth: "860px",
          width: "100%",
          padding: "48px",
          position: "relative",
          margin: "auto",
          animation: "fadeSlideUp 0.4s cubic-bezier(0.22,1,0.36,1) both",
          color: "var(--sbj-text)",
        }}
      >
        {/* Close */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close modal"
          style={{
            position: "absolute",
            top: "24px",
            right: "24px",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: "var(--sbj-surface)",
            border: "1px solid var(--sbj-border)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "var(--sbj-text2)",
            transition: "all 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              "var(--sbj-surface2)";
            (e.currentTarget as HTMLButtonElement).style.color =
              "var(--sbj-text)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              "var(--sbj-surface)";
            (e.currentTarget as HTMLButtonElement).style.color =
              "var(--sbj-text2)";
          }}
        >
          <X size={16} />
        </button>

        {/* Header */}
        <div
          style={{
            fontFamily: "monospace",
            fontSize: "12px",
            color: "var(--sbj-accent)",
            letterSpacing: "2px",
            marginBottom: "12px",
          }}
        >
          {study.label}
        </div>
        <h2
          style={{
            fontFamily: "'Georgia', serif",
            fontWeight: 800,
            fontSize: "32px",
            letterSpacing: "-1px",
            marginBottom: "32px",
            color: "var(--sbj-text)",
          }}
        >
          {study.title}
        </h2>

        {/* Problem */}
        <ModalSection title="🔴 Problem">
          <p
            style={{
              color: "var(--sbj-text2)",
              fontSize: "15px",
              lineHeight: 1.7,
            }}
          >
            {study.problem}
          </p>
        </ModalSection>

        {/* Analysis */}
        <ModalSection title="🔍 Analysis">
          <p
            style={{
              color: "var(--sbj-text2)",
              fontSize: "15px",
              lineHeight: 1.7,
            }}
          >
            {study.analysis}
          </p>
        </ModalSection>

        {/* Solution */}
        <ModalSection title="💡 Solution">
          <p
            style={{
              color: "var(--sbj-text2)",
              fontSize: "15px",
              lineHeight: 1.7,
            }}
          >
            {study.solution}
          </p>
        </ModalSection>

        {/* Process Flow */}
        <ModalSection title="🔄 Process Flow">
          <div
            style={{
              background: "var(--sbj-surface)",
              border: "1px solid var(--sbj-border)",
              borderRadius: "16px",
              padding: "24px",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                flexWrap: "wrap",
              }}
            >
              {study.flow.map((step, i) => (
                <div
                  key={step}
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <span
                    className="flow-step-item"
                    style={{
                      padding: "8px 16px",
                      borderRadius: "50px",
                      background: "var(--sbj-surface2)",
                      border: "1px solid var(--sbj-border)",
                      fontSize: "13px",
                      color: "var(--sbj-text2)",
                      transition: "all 0.3s",
                    }}
                  >
                    {step}
                  </span>
                  {i < study.flow.length - 1 && (
                    <span
                      style={{ color: "var(--sbj-text3)", fontSize: "14px" }}
                    >
                      →
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </ModalSection>

        {/* Before vs After */}
        <ModalSection title="📊 Before vs After">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}
            className="modal-2col"
          >
            <div
              style={{
                background: "var(--sbj-surface)",
                border: "1px solid rgba(239,68,68,0.3)",
                borderRadius: "16px",
                padding: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  color: "#EF4444",
                  marginBottom: "8px",
                  fontWeight: 600,
                }}
              >
                BEFORE
              </div>
              <p style={{ fontSize: "14px", color: "var(--sbj-text2)" }}>
                {study.before}
              </p>
            </div>
            <div
              style={{
                background: "var(--sbj-surface)",
                border: "1px solid rgba(52,211,153,0.3)",
                borderRadius: "16px",
                padding: "20px",
              }}
            >
              <div
                style={{
                  fontSize: "13px",
                  color: "#34D399",
                  marginBottom: "8px",
                  fontWeight: 600,
                }}
              >
                AFTER
              </div>
              <p style={{ fontSize: "14px", color: "var(--sbj-text2)" }}>
                {study.after}
              </p>
            </div>
          </div>
        </ModalSection>

        {/* Impact Metrics */}
        <ModalSection title="📈 Business Impact">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${study.metrics.length}, 1fr)`,
              gap: "16px",
            }}
            className="modal-metrics"
          >
            {study.metrics.map((m) => (
              <div
                key={m.label}
                style={{
                  background: "var(--sbj-surface)",
                  border: "1px solid var(--sbj-border)",
                  borderRadius: "16px",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <div
                  className="gradient-text"
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontWeight: 800,
                    fontSize: "32px",
                    lineHeight: 1,
                  }}
                >
                  {m.val}
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "var(--sbj-text3)",
                    marginTop: "4px",
                  }}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </ModalSection>

        {/* My Role */}
        <ModalSection title="👤 My Role">
          <p
            style={{
              color: "var(--sbj-text2)",
              fontSize: "15px",
              lineHeight: 1.7,
            }}
          >
            {study.role}
          </p>
        </ModalSection>

        {/* Tools */}
        <ModalSection title="🛠 Tools Used">
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            {study.tools.map((t) => (
              <span
                key={t}
                style={{
                  padding: "6px 14px",
                  borderRadius: "50px",
                  background: "var(--sbj-surface2)",
                  border: "1px solid var(--sbj-border)",
                  fontSize: "12px",
                  color: "var(--sbj-text2)",
                  fontFamily: "monospace",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </ModalSection>
      </dialog>

      <style>{`
        @media (max-width: 600px) {
          .modal-2col { grid-template-columns: 1fr !important; }
          .modal-metrics { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function ModalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div style={{ marginBottom: "32px" }}>
      <div
        style={{
          fontFamily: "'Georgia', serif",
          fontWeight: 700,
          fontSize: "15px",
          color: "var(--sbj-accent2)",
          marginBottom: "12px",
          textTransform: "uppercase",
          letterSpacing: "1px",
        }}
      >
        {title}
      </div>
      {children}
    </div>
  );
}
