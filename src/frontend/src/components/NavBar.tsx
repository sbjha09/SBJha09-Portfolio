import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

interface NavBarProps {
  theme: string;
  toggleTheme: () => void;
}

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#expertise", label: "Expertise" },
  { href: "#casestudies", label: "Case Studies" },
  { href: "#aiworkflow", label: "AI Workflow" },
  { href: "#skills", label: "Skills" },
  { href: "#impact", label: "Impact" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar({ theme, toggleTheme }: NavBarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: "16px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled
            ? theme === "dark"
              ? "rgba(10,10,10,0.9)"
              : "rgba(248,249,250,0.9)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid var(--sbj-border)"
            : "1px solid transparent",
          transition: "all 0.3s",
        }}
      >
        {/* Logo */}
        <button
          type="button"
          className="gradient-text"
          style={{
            fontFamily: "'Georgia', serif",
            fontWeight: 800,
            fontSize: "22px",
            letterSpacing: "-0.5px",
            cursor: "pointer",
            background: "transparent",
            border: "none",
            padding: 0,
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Scroll to top"
        >
          SBJ
        </button>

        {/* Desktop Nav Links */}
        <div
          className="hide-mobile"
          style={{
            display: "flex",
            gap: "28px",
            alignItems: "center",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                color: "var(--sbj-text2)",
                fontSize: "14px",
                fontWeight: 500,
                textDecoration: "none",
                letterSpacing: "0.3px",
                transition: "color 0.2s",
                position: "relative",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLAnchorElement).style.color = "var(--sbj-text)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLAnchorElement).style.color =
                  "var(--sbj-text2)";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right: Theme toggle + Hire Me */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle theme"
            style={{
              background: "var(--sbj-surface)",
              border: "1px solid var(--sbj-border)",
              color: "var(--sbj-text)",
              padding: "8px",
              borderRadius: "50%",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s",
              width: "36px",
              height: "36px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "var(--sbj-accent)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor =
                "var(--sbj-border)";
            }}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <button
            type="button"
            onClick={() => {
              const target = document.querySelector("#contact");
              if (target) target.scrollIntoView({ behavior: "smooth" });
            }}
            className="hide-mobile"
            style={{
              padding: "10px 22px",
              borderRadius: "50px",
              background: "var(--sbj-gradient)",
              color: "#fff",
              fontWeight: 600,
              fontSize: "14px",
              border: "none",
              cursor: "pointer",
              transition: "transform 0.15s, box-shadow 0.3s",
              boxShadow: "0 0 20px var(--sbj-glow)",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform =
                "scale(1.02)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 40px var(--sbj-glow)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.transform =
                "scale(1)";
              (e.currentTarget as HTMLButtonElement).style.boxShadow =
                "0 0 20px var(--sbj-glow)";
            }}
          >
            Hire Me
          </button>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="show-mobile"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: "transparent",
              border: "none",
              color: "var(--sbj-text)",
              cursor: "pointer",
              padding: "4px",
              display: "none",
            }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "65px",
            left: 0,
            right: 0,
            zIndex: 999,
            background:
              theme === "dark"
                ? "rgba(10,10,10,0.97)"
                : "rgba(248,249,250,0.97)",
            backdropFilter: "blur(20px)",
            borderBottom: "1px solid var(--sbj-border)",
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                color: "var(--sbj-text2)",
                fontSize: "16px",
                fontWeight: 500,
                textDecoration: "none",
                padding: "12px 8px",
                borderBottom: "1px solid var(--sbj-border)",
                transition: "color 0.2s",
              }}
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => {
              setMenuOpen(false);
              const target = document.querySelector("#contact");
              if (target) target.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              marginTop: "12px",
              padding: "14px",
              borderRadius: "50px",
              background: "var(--sbj-gradient)",
              color: "#fff",
              fontWeight: 600,
              fontSize: "15px",
              border: "none",
              cursor: "pointer",
              textAlign: "center",
              width: "100%",
            }}
          >
            Hire Me
          </button>
        </div>
      )}
    </>
  );
}
