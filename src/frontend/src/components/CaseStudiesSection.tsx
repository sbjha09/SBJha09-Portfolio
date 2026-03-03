import { useEffect, useRef, useState } from "react";
import CaseStudyModal, { type CaseStudy } from "./CaseStudyModal";

const caseStudies: CaseStudy[] = [
  {
    id: "sso",
    number: "CASE 01 / 07",
    title: "SSO Implementation",
    label: "Authentication & Security",
    summary:
      "Unified authentication architecture replacing fragmented multi-credential login systems across ERP modules.",
    tags: ["Authentication", "Architecture", "Security"],
    metric: "↓ 40%",
    metricLabel: "Login support tickets reduced",
    problem:
      "Users managed multiple credentials for different ERP modules, leading to frequent password resets, unauthorized access risks, and high support ticket volumes for IT.",
    analysis:
      "Identified 40+ weekly login-related tickets, authentication fragmentation across 6+ ERP modules, and absence of centralized identity management causing security gaps.",
    solution:
      "Designed functional architecture for SSO integration — centralized identity provider, role-based access, token-based session management, and auto-provisioning of ERP access.",
    flow: [
      "User Login Request",
      "Identity Provider",
      "Token Generation",
      "ERP Access Grant",
      "Session Management",
    ],
    before:
      "Multiple logins per user, frequent lockouts, manual access provisioning",
    after: "Single login, auto-provisioning, centralized session control",
    metrics: [
      { val: "40%", label: "Support tickets reduced" },
      { val: "100%", label: "Centralized access" },
    ],
    role: "Requirement analysis, functional architecture design, workflow documentation, UAT coordination, stakeholder communication.",
    tools: ["Ginesys ERP", "SQL", "Visily", "Jira", "Confluence"],
  },
  {
    id: "otp",
    number: "CASE 02 / 07",
    title: "OTP Discount Authorization",
    label: "Fraud Prevention & Billing Governance",
    summary:
      "Fraud prevention system for POS discount control using OTP-based approval workflows in retail billing.",
    tags: ["POS", "Fraud Control", "Validation"],
    metric: "100%",
    metricLabel: "Unauthorized discounts blocked",
    problem:
      "POS operators were applying unauthorized manual discounts during billing, leading to revenue leakage and inconsistent pricing across retail stores.",
    analysis:
      "Audited 200+ billing records identifying 15–20% unauthorized discount override rate. Traced issue to absence of approval workflow for manual discount application.",
    solution:
      "Designed OTP-based authorization workflow — manager-approved OTP sent to registered mobile before discount applies, with audit logging and threshold-based triggers.",
    flow: [
      "Discount Trigger",
      "OTP Generation",
      "Manager Approval",
      "Code Validation",
      "Discount Applied",
      "Audit Log",
    ],
    before:
      "Uncontrolled discount overrides, no approval chain, revenue leakage",
    after:
      "OTP-validated discounts, full audit trail, zero unauthorized overrides",
    metrics: [
      { val: "100%", label: "Unauthorized discounts blocked" },
      { val: "100%", label: "Audit trail coverage" },
    ],
    role: "Functional logic design, validation rule definition, OTP flow design, UAT execution, UAT documentation.",
    tools: ["Ginesys POS", "SQL", "Excel", "Jira"],
  },
  {
    id: "excel",
    number: "CASE 03 / 07",
    title: "Excel Bulk Import Automation",
    label: "Process Automation & Data Efficiency",
    summary:
      "Transformed manual ERP master data entry into automated bulk upload with validation and mapping rules.",
    tags: ["Automation", "Data Import", "Efficiency"],
    metric: "~50%",
    metricLabel: "Manual effort reduction",
    problem:
      "ERP master data (SKUs, products, prices) required manual entry record by record, creating data entry bottlenecks, errors, and significant delays during seasonal updates.",
    analysis:
      "Mapped manual workflow: 500–1000 records took 8–10 hours of manual entry with 5–8% error rate requiring correction cycles.",
    solution:
      "Designed Excel-based bulk upload template with column mapping, validation rules, error flagging, and one-click import capability with pre-import preview.",
    flow: [
      "Excel Template",
      "Data Validation",
      "Mapping Rules",
      "Error Flagging",
      "Preview",
      "ERP Import",
      "Confirmation",
    ],
    before: "8–10 hrs manual entry for 1000 records, 5–8% error rate",
    after: "1–2 hrs for same volume, <1% error rate",
    metrics: [
      { val: "~50%", label: "Time reduction" },
      { val: "↓87%", label: "Data errors reduced" },
    ],
    role: "Requirement design, data mapping logic, template design, validation rule definition, UAT validation.",
    tools: ["Excel", "Ginesys ERP", "SQL", "Jira"],
  },
  {
    id: "api",
    number: "CASE 04 / 07",
    title: "API Integration & Automation",
    label: "System Integration & Automation",
    summary:
      "Designed functional requirements for API-based data sync between ERP and external systems, eliminating duplication.",
    tags: ["API", "Integration", "Sync"],
    metric: "↑ 35%",
    metricLabel: "Workflow automation improvement",
    problem:
      "Data duplication between ERP and external platforms (e-commerce, warehouse) required manual re-entry, causing sync delays, inconsistencies, and operational overhead.",
    analysis:
      "Identified 6+ manual touchpoints in data flow, 2–4 hour sync delays, and 12–15% data inconsistency rate between systems.",
    solution:
      "Defined functional API integration requirements — data mapping, sync triggers, error handling workflows, retry logic, and reconciliation dashboards.",
    flow: [
      "Source System",
      "API Trigger",
      "Data Mapping",
      "Validation",
      "ERP Sync",
      "Confirmation",
      "Error Handler",
    ],
    before:
      "Manual data re-entry, 2–4 hour sync delays, 12% inconsistency rate",
    after: "Real-time sync, automated reconciliation, near-zero duplication",
    metrics: [
      { val: "↑35%", label: "Workflow automation gain" },
      { val: "↓90%", label: "Manual sync effort" },
    ],
    role: "API functional design, data mapping documentation, integration flow, error handling spec, UAT planning.",
    tools: ["Ginesys ERP", "API Documentation", "SQL", "Jira", "Confluence"],
  },
  {
    id: "alteration",
    number: "CASE 05 / 07",
    title: "Alteration Master – POS",
    label: "Retail Order Lifecycle Management",
    summary:
      "Retail garment alteration tracking system for improved order lifecycle visibility in POS environments.",
    tags: ["Retail", "POS", "Order Lifecycle"],
    metric: "↑ Visibility",
    metricLabel: "Order tracking improvement",
    problem:
      "Retail stores handling garment alterations had no system-level tracking — alteration orders were managed on paper, causing lost orders, delays, and poor customer experience.",
    analysis:
      "Identified lack of alteration order entity in POS, absence of status tracking, no tagging mechanism for altered items, and no delivery timeline visibility.",
    solution:
      "Designed Alteration Master module — alteration order creation, customer tagging, alteration type master, delivery date tracking, and status lifecycle management.",
    flow: [
      "Purchase Trigger",
      "Alteration Request",
      "Master Entry",
      "Tagging",
      "Status Tracking",
      "Delivery Alert",
    ],
    before:
      "Paper-based tracking, frequent lost orders, no delivery visibility",
    after:
      "System-tracked alterations, status alerts, full order lifecycle visibility",
    metrics: [
      { val: "↑100%", label: "Order visibility gain" },
      { val: "↓80%", label: "Order loss rate" },
    ],
    role: "Feature conceptualization, functional design, POS workflow mapping, alteration master spec, UAT design.",
    tools: ["Ginesys POS", "Visily", "Jira", "SQL"],
  },
  {
    id: "wms",
    number: "CASE 06 / 07",
    title: "New WMS App",
    label: "Warehouse Management System — NEW",
    summary:
      "Designed a new WMS module with 5 core operations and an analytics dashboard for warehouse efficiency.",
    tags: ["WMS", "Warehouse", "Operations", "Dashboard"],
    metric: "↓ 40%",
    metricLabel: "Put-away time reduced",
    isNew: true,
    problem:
      "No intelligent put-away logic existed in the current system. Manual warehouse operations caused delays, misplaced inventory, and low picking efficiency with no operational visibility.",
    analysis:
      "5 core operations were identified as critical gaps: Suggestive Put Away (AI-suggested bin locations), Take Away (item retrieval), Picklist (order picking), Bin Count (inventory verification), and Bin Audit (periodic accuracy checks). Dashboard analytics were completely absent.",
    solution:
      "Designed a comprehensive WMS module with an operations dashboard showing real-time analytics — daily throughput metrics, bin utilization heatmap, pick accuracy rates, pending task queues, and operation-wise performance KPIs.",
    flow: [
      "Inbound Scan",
      "AI Bin Suggestion",
      "Put Away",
      "Bin Count",
      "Picklist",
      "Take Away",
      "Bin Audit",
      "Dashboard",
    ],
    before:
      "Manual bin selection, no pick accuracy tracking, zero operational visibility",
    after:
      "AI-suggested put-away, 99% bin accuracy, real-time operations dashboard",
    metrics: [
      { val: "↓40%", label: "Put-away time reduction" },
      { val: "99%", label: "Bin accuracy achieved" },
      { val: "↑60%", label: "Picking efficiency gain" },
    ],
    role: "Functional requirement design for all 5 operations, dashboard analytics spec, UAT planning, stakeholder walkthroughs, Suggestive Put Away AI logic design.",
    tools: [
      "WMS Platform",
      "Ginesys ERP",
      "SQL",
      "Visily",
      "Jira",
      "Confluence",
    ],
  },
  {
    id: "mpos",
    number: "CASE 07 / 07",
    title: "M-POS Queue Buster",
    label: "Mobile POS — Queue Reduction",
    summary:
      "Mobile billing app enabling floor staff to checkout customers anywhere in-store, eliminating long queues at peak hours.",
    tags: ["Mobile POS", "Queue Reduction", "Retail"],
    metric: "↓ 65%",
    metricLabel: "Queue wait time reduced",
    problem:
      "Single POS counter bottleneck at peak hours caused average wait times of 8–12 minutes, customer abandonment, and lost sales during high-traffic retail periods.",
    analysis:
      "Analyzed peak-hour traffic patterns showing 3x normal load, single counter dependency, and average queue length of 15–20 customers with no floor staff empowerment to assist with billing.",
    solution:
      "Designed M-POS Queue Buster app — a mobile billing solution for floor staff to process full transactions anywhere in the store using handheld devices, integrating with central POS inventory and payment gateway.",
    flow: [
      "Customer Ready",
      "Floor Staff Scan",
      "Mobile Billing",
      "Payment",
      "Receipt Generation",
      "Inventory Update",
    ],
    before:
      "8–12 min average wait, 15–20 customer queue, single counter bottleneck",
    after:
      "2–3 min average wait, queue distributed across floor, 30% more checkouts/hour",
    metrics: [
      { val: "↓65%", label: "Queue wait time" },
      { val: "↑30%", label: "Checkout throughput" },
      { val: "↑18%", label: "Customer satisfaction" },
    ],
    role: "Mobile POS functional design, payment flow specification, inventory sync requirements, offline mode spec, UAT planning and execution.",
    tools: [
      "Ginesys POS",
      "Mobile Platform",
      "Payment Gateway",
      "SQL",
      "Jira",
      "Visily",
    ],
  },
];

export default function CaseStudiesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const reveals = entry.target.querySelectorAll(".reveal");
            let i = 0;
            for (const el of reveals) {
              setTimeout(() => el.classList.add("visible"), i * 80);
              i++;
            }
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.05 },
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        id="casestudies"
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
            {"// 03 — CASE STUDIES"}
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
            ERP Feature Work
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
            Deep-dive into real functional challenges I analyzed, designed, and
            delivered in production ERP environments.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
              gap: "24px",
            }}
          >
            {caseStudies.map((study, i) => (
              <button
                key={study.id}
                type="button"
                className="reveal"
                style={{
                  transitionDelay: `${i * 0.06}s`,
                  background: "var(--sbj-surface)",
                  border: `1px solid ${study.isNew ? "var(--sbj-border-accent)" : "var(--sbj-border)"}`,
                  borderRadius: "24px",
                  padding: "32px",
                  cursor: "pointer",
                  transition:
                    "transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s, border-color 0.3s",
                  position: "relative",
                  textAlign: "left",
                  width: "100%",
                }}
                onClick={() => setActiveStudy(study)}
                aria-label={`View case study: ${study.title}`}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform =
                    "translateY(-6px)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    "var(--sbj-border-accent)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "0 24px 60px rgba(249,115,22,0.12)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.transform =
                    "translateY(0)";
                  (e.currentTarget as HTMLButtonElement).style.borderColor =
                    study.isNew
                      ? "var(--sbj-border-accent)"
                      : "var(--sbj-border)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "none";
                }}
              >
                {study.isNew && (
                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      right: "16px",
                      background: "var(--sbj-gradient)",
                      color: "#fff",
                      fontSize: "10px",
                      fontWeight: 700,
                      padding: "4px 10px",
                      borderRadius: "50px",
                      letterSpacing: "1px",
                    }}
                  >
                    NEW
                  </div>
                )}

                <div
                  style={{
                    fontFamily: "monospace",
                    fontSize: "12px",
                    color: "var(--sbj-text3)",
                    marginBottom: "16px",
                  }}
                >
                  {study.number}
                </div>
                <h3
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontWeight: 800,
                    fontSize: "22px",
                    marginBottom: "10px",
                    letterSpacing: "-0.5px",
                    color: "var(--sbj-text)",
                  }}
                >
                  {study.title}
                </h3>
                <p
                  style={{
                    fontSize: "14px",
                    color: "var(--sbj-text2)",
                    lineHeight: 1.6,
                    marginBottom: "20px",
                  }}
                >
                  {study.summary}
                </p>

                {/* Tags */}
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    flexWrap: "wrap",
                    marginBottom: "20px",
                  }}
                >
                  {study.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: "11px",
                        padding: "4px 10px",
                        borderRadius: "50px",
                        background: "var(--sbj-surface2)",
                        color: "var(--sbj-text3)",
                        border: "1px solid var(--sbj-border)",
                        fontFamily: "monospace",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metric */}
                <div
                  className="gradient-text"
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontWeight: 700,
                    fontSize: "28px",
                    marginTop: "12px",
                  }}
                >
                  {study.metric}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "var(--sbj-text3)",
                    marginBottom: "16px",
                  }}
                >
                  {study.metricLabel}
                </div>

                <div
                  style={{
                    fontSize: "15px",
                    color: "var(--sbj-accent)",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                  }}
                >
                  View Case Study{" "}
                  <span
                    style={{
                      transition: "transform 0.2s",
                      display: "inline-block",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLSpanElement).style.transform =
                        "translateX(4px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLSpanElement).style.transform =
                        "translateX(0)";
                    }}
                  >
                    →
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <CaseStudyModal
        study={activeStudy}
        onClose={() => setActiveStudy(null)}
      />
    </>
  );
}
