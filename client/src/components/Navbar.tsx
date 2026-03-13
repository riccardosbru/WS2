/*
 * DESIGN: Rigore Nordico con Calore Mediterraneo
 * Navbar: sfondo navy, logo serif, nav links uppercase con underline dorato animato
 * Mobile: menu overlay full-screen navy
 */
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Chi Sono", href: "/chi-sono" },
  { label: "Aree di Attività", href: "/aree-di-attivita" },
  { label: "Codice Rosso", href: "/codice-rosso" },
  { label: "Diritto di Famiglia", href: "/diritto-di-famiglia" },
  { label: "Credenziali", href: "/credenziali" },
  { label: "Contatti", href: "/contatti" },
];

export default function Navbar() {
  const [location] = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* Top bar */}
      <div style={{ background: "#A8873A" }} className="hidden md:block">
        <div className="container">
          <div className="flex items-center justify-between py-2">
            <p style={{ color: "#0C1A2E", fontFamily: "'Outfit', sans-serif", fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.05em" }}>
              Ordine degli Avvocati di Frosinone — Via Tiburtina 203, Frosinone (FR)
            </p>
            <a
              href="mailto:avv.giuliagiacinti@gmail.com"
              style={{ color: "#0C1A2E", fontFamily: "'Outfit', sans-serif", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.05em", textDecoration: "none" }}
            >
              Richiedi una consulenza
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header
        style={{
          background: "#0C1A2E",
          position: "sticky",
          top: 0,
          zIndex: 50,
          boxShadow: scrolled ? "0 4px 30px rgba(12, 26, 46, 0.3)" : "none",
          transition: "box-shadow 0.3s ease",
        }}
      >
        <div className="container">
          <div className="flex items-center justify-between" style={{ paddingTop: "1.25rem", paddingBottom: "1.25rem" }}>
            {/* Logo */}
            <Link href="/">
              <div style={{ cursor: "pointer" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{
                    width: "40px",
                    height: "40px",
                    border: "1.5px solid #A8873A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 700, color: "#A8873A", letterSpacing: "-0.02em" }}>GG</span>
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", fontWeight: 600, color: "#FAF8F3", lineHeight: 1.1, letterSpacing: "0.01em" }}>
                      Avv. Giulia Giacinti
                    </p>
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.65rem", fontWeight: 400, color: "#A8873A", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                      Studio Legale · Frosinone
                    </p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center" style={{ gap: "2rem" }}>
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span className={`nav-link ${location === item.href ? "active" : ""}`}>
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>

            {/* CTA desktop */}
            <div className="hidden lg:flex items-center" style={{ gap: "1rem" }}>
              <a href="/contatti" className="btn-gold" style={{ textDecoration: "none", display: "inline-block" }}>
                Consulenza
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden"
              onClick={() => setMenuOpen(true)}
              style={{ background: "none", border: "none", color: "#FAF8F3", padding: "0.5rem" }}
              aria-label="Apri menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="mobile-menu-overlay lg:hidden">
          <div className="flex items-center justify-between" style={{ marginBottom: "3rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div style={{ width: "40px", height: "40px", border: "1.5px solid #A8873A", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 700, color: "#A8873A" }}>GG</span>
              </div>
              <div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 600, color: "#FAF8F3", lineHeight: 1.1 }}>Avv. Giulia Giacinti</p>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.6rem", fontWeight: 400, color: "#A8873A", letterSpacing: "0.12em", textTransform: "uppercase" }}>Studio Legale · Frosinone</p>
              </div>
            </div>
            <button
              onClick={() => setMenuOpen(false)}
              style={{ background: "none", border: "none", color: "#FAF8F3", padding: "0.5rem" }}
              aria-label="Chiudi menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav style={{ display: "flex", flexDirection: "column", gap: "0.25rem", flex: 1 }}>
            {navItems.map((item, i) => (
              <Link key={item.href} href={item.href}>
                <span
                  onClick={() => setMenuOpen(false)}
                  style={{
                    display: "block",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.75rem",
                    fontWeight: 500,
                    color: location === item.href ? "#A8873A" : "#FAF8F3",
                    padding: "0.75rem 0",
                    borderBottom: "1px solid rgba(250,248,243,0.08)",
                    cursor: "pointer",
                    transition: "color 0.2s",
                  }}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          <div style={{ marginTop: "2rem", paddingTop: "2rem", borderTop: "1px solid rgba(168,135,58,0.3)" }}>
            <a
              href="/contatti"
              className="btn-gold"
              style={{ textDecoration: "none", display: "block", textAlign: "center" }}
              onClick={() => setMenuOpen(false)}
            >
              Richiedi una Consulenza
            </a>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginTop: "1.5rem", color: "#A8873A" }}>
              <Phone size={14} />
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.8rem", color: "rgba(250,248,243,0.7)" }}>
                Via Tiburtina 203, Frosinone
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
