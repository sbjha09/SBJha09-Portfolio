import { ArrowRight, Download, Linkedin, Mail } from "lucide-react";
import { useEffect, useRef } from "react";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Particle animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrame: number;
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      o: number;
    }[] = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 1.5 + 0.5,
        o: Math.random() * 0.4 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(249,115,22,${p.o})`;
        ctx.fill();
      }
      animFrame = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animFrame);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        padding: "120px 40px 80px",
        background: "var(--sbj-bg)",
      }}
    >
      {/* Animated gradient bg */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 80% 60% at 60% 40%, rgba(249,115,22,0.08) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 20% 70%, rgba(251,146,60,0.06) 0%, transparent 60%)",
          animation: "bgPulse 8s ease-in-out infinite alternate",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        id="particles-canvas"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "60px",
        }}
      >
        {/* LEFT: Text */}
        <div style={{ flex: 1, maxWidth: "620px" }}>
          {/* Badge */}
          <div
            className="anim-d0"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "var(--sbj-surface)",
              border: "1px solid var(--sbj-border-accent)",
              padding: "8px 16px",
              borderRadius: "50px",
              fontSize: "13px",
              color: "var(--sbj-accent)",
              fontFamily: "monospace",
              marginBottom: "28px",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--sbj-accent3)",
                animation: "pulse 2s infinite",
                flexShrink: 0,
              }}
            />
            Available for Senior ERP BA Roles
          </div>

          {/* Hi I am */}
          <p
            className="anim-d1"
            style={{
              color: "var(--sbj-text2)",
              fontSize: "20px",
              fontWeight: 400,
              marginBottom: "6px",
            }}
          >
            Hi I am
          </p>

          {/* Name */}
          <h1
            className="anim-d2"
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(36px, 5vw, 60px)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-2px",
              color: "var(--sbj-text)",
              marginBottom: "8px",
            }}
          >
            Shanti Bhushan Jha
          </h1>

          {/* Role */}
          <h2
            className="anim-d3 gradient-text"
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(28px, 4vw, 48px)",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-1.5px",
              marginBottom: "20px",
            }}
          >
            ERP Business Analyst
            <br />& Consultant
          </h2>

          {/* Sub */}
          <p
            className="anim-d4"
            style={{
              fontSize: "17px",
              color: "var(--sbj-text2)",
              lineHeight: 1.7,
              marginBottom: "28px",
              maxWidth: "520px",
            }}
          >
            Transforming complex ERP systems into intelligent, scalable business
            solutions with AI-powered analysis and functional design.
          </p>

          {/* Social icons */}
          <div
            className="anim-d5"
            style={{ display: "flex", gap: "12px", marginBottom: "28px" }}
          >
            <a
              href="https://www.linkedin.com/in/sbj09/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "var(--sbj-surface)",
                border: "1px solid var(--sbj-border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--sbj-text2)",
                transition: "all 0.2s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "var(--sbj-accent)";
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--sbj-accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "var(--sbj-border)";
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--sbj-text2)";
              }}
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:sbjha26@gmail.com"
              aria-label="Email"
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: "var(--sbj-surface)",
                border: "1px solid var(--sbj-border)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "var(--sbj-text2)",
                transition: "all 0.2s",
                textDecoration: "none",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "var(--sbj-accent)";
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--sbj-accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "var(--sbj-border)";
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "var(--sbj-text2)";
              }}
            >
              <Mail size={18} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div
            className="anim-d6"
            style={{
              display: "flex",
              gap: "16px",
              flexWrap: "wrap",
              marginBottom: "40px",
            }}
          >
            <button
              type="button"
              onClick={() => {
                const target = document.querySelector("#contact");
                if (target) target.scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                padding: "14px 28px",
                borderRadius: "50px",
                background: "var(--sbj-gradient)",
                color: "#fff",
                fontWeight: 700,
                fontSize: "15px",
                border: "none",
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                transition: "transform 0.15s, box-shadow 0.3s",
                boxShadow: "0 0 30px var(--sbj-glow)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "scale(1.02)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 0 50px var(--sbj-glow)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "scale(1)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 0 30px var(--sbj-glow)";
              }}
              onMouseDown={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "scale(0.97)";
              }}
              onMouseUp={(e) => {
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "scale(1.02)";
              }}
            >
              Hire Me <ArrowRight size={16} />
            </button>
            <button
              type="button"
              onClick={() => {}}
              style={{
                padding: "14px 28px",
                borderRadius: "50px",
                background: "transparent",
                color: "var(--sbj-text)",
                fontWeight: 600,
                fontSize: "15px",
                cursor: "pointer",
                border: "1px solid var(--sbj-border-accent)",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                transition: "all 0.3s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "var(--sbj-surface2)";
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "var(--sbj-accent)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "transparent";
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "var(--sbj-border-accent)";
              }}
            >
              <Download size={16} /> Download CV
            </button>
          </div>

          {/* Stat counters */}
          <div
            className="anim-d7"
            style={{
              display: "flex",
              gap: "0",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {[
              { val: "4.5+", label: "Years Experience" },
              { val: "50+", label: "Tickets/Month" },
              { val: "95%", label: "UAT Rate" },
            ].map((stat, i) => (
              <div
                key={stat.label}
                style={{ display: "flex", alignItems: "center" }}
              >
                {i > 0 && (
                  <div
                    style={{
                      width: "1px",
                      height: "36px",
                      background: "var(--sbj-border)",
                      margin: "0 20px",
                    }}
                  />
                )}
                <div>
                  <div
                    className="gradient-text"
                    style={{
                      fontFamily: "'Georgia', serif",
                      fontWeight: 800,
                      fontSize: "24px",
                    }}
                  >
                    {stat.val}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "var(--sbj-text3)",
                      marginTop: "2px",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Avatar */}
        <div
          className="anim-d4 hide-mobile"
          style={{
            flexShrink: 0,
            position: "relative",
          }}
        >
          {/* Glow bg */}
          <div
            style={{
              position: "absolute",
              inset: "-40px",
              borderRadius: "50%",
              background:
                "radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />

          {/* Avatar container */}
          <div
            className="float-anim"
            style={{
              position: "relative",
              width: "320px",
              height: "380px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "3px solid var(--sbj-accent)",
              boxShadow:
                "0 0 60px var(--sbj-glow), 0 0 120px rgba(249,115,22,0.08)",
              zIndex: 1,
              background: "var(--sbj-bg3)",
            }}
          >
            <img
              src="/assets/generated/sbjha09.png"
              alt="Shanti Bhushan Jha"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top center",
              }}
            />
          </div>

          {/* Floating stat badge */}
          <div
            style={{
              position: "absolute",
              bottom: "20px",
              right: "-20px",
              background: "var(--sbj-surface2)",
              backdropFilter: "blur(20px)",
              border: "1px solid var(--sbj-border)",
              borderRadius: "16px",
              padding: "12px 18px",
              zIndex: 2,
            }}
          >
            <div
              style={{
                fontFamily: "monospace",
                fontSize: "11px",
                color: "var(--sbj-text3)",
                marginBottom: "4px",
              }}
            >
              {"// UAT PASS RATE"}
            </div>
            <div
              className="gradient-text"
              style={{
                fontFamily: "'Georgia', serif",
                fontWeight: 800,
                fontSize: "22px",
              }}
            >
              95%
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              top: "20px",
              left: "-30px",
              background: "var(--sbj-surface2)",
              backdropFilter: "blur(20px)",
              border: "1px solid var(--sbj-border)",
              borderRadius: "16px",
              padding: "12px 18px",
              zIndex: 2,
            }}
          >
            <div
              style={{
                fontFamily: "monospace",
                fontSize: "11px",
                color: "var(--sbj-text3)",
                marginBottom: "4px",
              }}
            >
              {"// EXPERIENCE"}
            </div>
            <div
              className="gradient-text"
              style={{
                fontFamily: "'Georgia', serif",
                fontWeight: 800,
                fontSize: "22px",
              }}
            >
              4.5+
            </div>
          </div>
        </div>
      </div>

      {/* Mobile avatar (shown below text) */}
      <style>{`
        @media (max-width: 768px) {
          #hero > div {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
          #hero .anim-d4.hide-mobile {
            display: flex !important;
            margin-top: 40px;
          }
        }
      `}</style>
    </section>
  );
}
