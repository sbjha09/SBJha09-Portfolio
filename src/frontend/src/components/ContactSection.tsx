import { ExternalLink, FileDown, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { useSubmitContactForm } from "../hooks/useQueries";

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { mutate: submitForm, isPending } = useSubmitContactForm();

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields.");
      return;
    }
    submitForm(form, {
      onSuccess: () => {
        toast.success("Message sent! I'll get back to you soon.");
        setForm({ name: "", email: "", message: "" });
      },
      onError: () => {
        toast.error("Something went wrong. Please try again.");
      },
    });
  };

  const contactLinks = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "sbjha26@gmail.com",
      href: "mailto:sbjha26@gmail.com",
    },
    {
      icon: <ExternalLink size={20} />,
      label: "LinkedIn",
      value: "linkedin.com/in/sbj09",
      href: "https://www.linkedin.com/in/sbj09/",
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+91 8178694427",
      href: "tel:+918178694427",
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "Kolkata, India",
      href: "#",
    },
    {
      icon: <FileDown size={20} />,
      label: "Resume",
      value: "Download PDF →",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
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
          {"// 08 — CONTACT"}
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
          Let's Connect
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
          Open to Senior ERP Business Analyst, Functional Consultant, and
          Product-oriented BA opportunities.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
            alignItems: "start",
          }}
          className="contact-grid"
        >
          {/* Form */}
          <form
            className="reveal"
            onSubmit={handleSubmit}
            style={{
              background: "var(--sbj-surface)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid var(--sbj-border)",
              borderRadius: "24px",
              padding: "40px",
            }}
          >
            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="contact-name"
                style={{
                  fontSize: "13px",
                  color: "var(--sbj-text2)",
                  marginBottom: "8px",
                  display: "block",
                }}
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                className="sbj-input"
                placeholder="Your name"
                value={form.name}
                onChange={(e) =>
                  setForm((f) => ({ ...f, name: e.target.value }))
                }
                required
                autoComplete="name"
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label
                htmlFor="contact-email"
                style={{
                  fontSize: "13px",
                  color: "var(--sbj-text2)",
                  marginBottom: "8px",
                  display: "block",
                }}
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                className="sbj-input"
                placeholder="your@email.com"
                value={form.email}
                onChange={(e) =>
                  setForm((f) => ({ ...f, email: e.target.value }))
                }
                required
                autoComplete="email"
              />
            </div>
            <div style={{ marginBottom: "24px" }}>
              <label
                htmlFor="contact-message"
                style={{
                  fontSize: "13px",
                  color: "var(--sbj-text2)",
                  marginBottom: "8px",
                  display: "block",
                }}
              >
                Message
              </label>
              <textarea
                id="contact-message"
                className="sbj-input"
                placeholder="Tell me about the opportunity..."
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
                required
                rows={4}
                style={{ resize: "vertical", minHeight: "100px" }}
              />
            </div>
            <button
              type="submit"
              disabled={isPending}
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "50px",
                background: isPending
                  ? "var(--sbj-surface2)"
                  : "var(--sbj-gradient)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "15px",
                border: "none",
                cursor: isPending ? "not-allowed" : "pointer",
                transition: "transform 0.15s, box-shadow 0.3s",
                boxShadow: "0 0 20px var(--sbj-glow)",
              }}
              onMouseEnter={(e) => {
                if (!isPending) {
                  (e.currentTarget as HTMLButtonElement).style.transform =
                    "scale(1.02)";
                  (e.currentTarget as HTMLButtonElement).style.boxShadow =
                    "0 0 40px var(--sbj-glow)";
                }
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "scale(1)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 0 20px var(--sbj-glow)";
              }}
            >
              {isPending ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Contact Info */}
          <div
            className="reveal"
            style={{
              transitionDelay: "0.15s",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  padding: "18px 22px",
                  borderRadius: "16px",
                  background: "var(--sbj-surface)",
                  border: "1px solid var(--sbj-border)",
                  textDecoration: "none",
                  color: "var(--sbj-text)",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "var(--sbj-border-accent)";
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "var(--sbj-surface2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor =
                    "var(--sbj-border)";
                  (e.currentTarget as HTMLAnchorElement).style.background =
                    "var(--sbj-surface)";
                }}
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "12px",
                    background: "var(--sbj-surface2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "var(--sbj-accent)",
                    flexShrink: 0,
                  }}
                >
                  {link.icon}
                </div>
                <div>
                  <div style={{ fontSize: "12px", color: "var(--sbj-text3)" }}>
                    {link.label}
                  </div>
                  <div
                    style={{
                      fontWeight: 600,
                      fontSize: "15px",
                      color: "var(--sbj-text)",
                    }}
                  >
                    {link.value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
