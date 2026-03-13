/*
 * DESIGN: Rigore Nordico con Calore Mediterraneo
 * Footer: sfondo navy profondo, testo avorio, accenti oro
 */
import { Link } from "wouter";
import { MapPin, Mail, Scale } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{ background: "#080F1C", color: "#FAF8F3" }}>
      {/* Gold top border */}
      <div style={{ height: "3px", background: "linear-gradient(90deg, #A8873A, #C9A84C, #A8873A)" }} />

      <div className="container" style={{ paddingTop: "4rem", paddingBottom: "3rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "3rem", marginBottom: "3rem" }}>
          
          {/* Brand column */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "44px", height: "44px", border: "1.5px solid #A8873A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 700, color: "#A8873A" }}>GG</span>
              </div>
              <div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 600, color: "#FAF8F3", lineHeight: 1.1 }}>Avv. Giulia Giacinti</p>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.6rem", fontWeight: 400, color: "#A8873A", letterSpacing: "0.12em", textTransform: "uppercase" }}>Studio Legale</p>
              </div>
            </div>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", color: "rgba(250,248,243,0.6)", lineHeight: 1.7, marginBottom: "1.5rem" }}>
              Oltre 15 anni di esperienza nella tutela dei diritti. Specializzata in diritto penale, diritto di famiglia e Codice Rosso.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <Scale size={14} style={{ color: "#A8873A", flexShrink: 0 }} />
              <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.75rem", color: "rgba(250,248,243,0.5)" }}>
                Iscritta all'Ordine degli Avvocati di Frosinone
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#A8873A", marginBottom: "1.25rem" }}>
              Navigazione
            </h4>
            <nav style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[
                { label: "Home", href: "/" },
                { label: "Chi Sono", href: "/chi-sono" },
                { label: "Aree di Attività", href: "/aree-di-attivita" },
                { label: "Codice Rosso", href: "/codice-rosso" },
                { label: "Diritto di Famiglia", href: "/diritto-di-famiglia" },
                { label: "Credenziali", href: "/credenziali" },
                { label: "Contatti", href: "/contatti" },
              ].map((item) => (
                <Link key={item.href} href={item.href}>
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", color: "rgba(250,248,243,0.65)", cursor: "pointer", transition: "color 0.2s", display: "block" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#A8873A")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(250,248,243,0.65)")}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* Aree principali */}
          <div>
            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#A8873A", marginBottom: "1.25rem" }}>
              Aree Principali
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {["Diritto Penale", "Diritto Civile", "Diritto di Famiglia", "Codice Rosso", "Violenza di Genere", "Separazione e Divorzio", "Tutela dei Minori", "Recupero Crediti"].map((area) => (
                <span key={area} style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", color: "rgba(250,248,243,0.65)" }}>
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Contatti */}
          <div>
            <h4 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#A8873A", marginBottom: "1.25rem" }}>
              Contatti
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "flex", gap: "0.75rem" }}>
                <MapPin size={16} style={{ color: "#A8873A", flexShrink: 0, marginTop: "2px" }} />
                <div>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", color: "#FAF8F3", fontWeight: 500 }}>Via Tiburtina 203</p>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.8rem", color: "rgba(250,248,243,0.6)" }}>Frosinone (FR)</p>
                </div>
              </div>
              <div style={{ display: "flex", gap: "0.75rem" }}>
                <Mail size={16} style={{ color: "#A8873A", flexShrink: 0, marginTop: "2px" }} />
                <a href="mailto:avv.giuliagiacinti@gmail.com" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", color: "rgba(250,248,243,0.65)", textDecoration: "none" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#A8873A")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(250,248,243,0.65)")}
                >
                  Scrivi allo studio
                </a>
              </div>
            </div>

            <div style={{ marginTop: "2rem" }}>
              <Link href="/contatti">
                <span className="btn-gold" style={{ display: "inline-block", textDecoration: "none", fontSize: "0.75rem" }}>
                  Prenota Appuntamento
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(168,135,58,0.2)", paddingTop: "1.5rem", display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "space-between", alignItems: "center" }}>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.75rem", color: "rgba(250,248,243,0.4)" }}>
            © {currentYear} Avv. Giulia Giacinti — Studio Legale. Tutti i diritti riservati.
          </p>
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.75rem", color: "rgba(250,248,243,0.4)" }}>
            P.IVA: informazioni disponibili su richiesta · Ordine Avvocati Frosinone
          </p>
        </div>
      </div>
    </footer>
  );
}
