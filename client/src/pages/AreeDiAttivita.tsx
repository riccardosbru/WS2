/*
 * DESIGN: Rigore Nordico con Calore Mediterraneo
 * Aree di Attività: griglia completa di tutte le aree legali
 */
import { useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "wouter";
import {
  Gavel, Heart, Shield, Scale, Users, BookOpen, Home, Car,
  Building, Briefcase, FileText, Baby, Landmark, CreditCard,
  AlertTriangle, HelpCircle, ChevronRight
} from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663433157708/9CRHXdZPLPpsL4U8jUQNsn/hero-bg-NuNLYR2yUtDN6d2ELbaunp.webp";

const areePrincipali = [
  {
    icon: <Gavel size={32} />,
    title: "Diritto Penale",
    desc: "Assistenza e difesa in ogni fase del procedimento penale: dalle indagini preliminari al giudizio in Cassazione. Reati contro la persona, reati contro il patrimonio, sostanze stupefacenti, diritto penitenziario.",
    tags: ["Reati contro la persona", "Reati contro il patrimonio", "Sostanze stupefacenti", "Diritto penitenziario", "Cassazione"],
  },
  {
    icon: <Shield size={32} />,
    title: "Codice Rosso",
    desc: "Specializzazione nella tutela delle vittime di violenza di genere e nella difesa degli imputati. Stalking, maltrattamenti, violenza sessuale, revenge porn, doxxing, cyberbullismo, deepfake.",
    tags: ["Stalking", "Maltrattamenti", "Violenza sessuale", "Revenge porn", "Doxxing", "Cyberbullismo"],
    highlight: true,
  },
  {
    icon: <Heart size={32} />,
    title: "Diritto di Famiglia",
    desc: "Separazioni consensuali e giudiziali, divorzi, affidamento dei figli, tutela dei minori, diritto di visita, assegno di mantenimento. Aggiornata sulla Riforma Cartabia.",
    tags: ["Separazione", "Divorzio", "Affidamento figli", "Tutela minori", "Riforma Cartabia"],
  },
  {
    icon: <Scale size={32} />,
    title: "Diritto Civile",
    desc: "Contratti, risarcimento danni, successioni ed eredità, recupero crediti, pignoramenti, aste giudiziarie, tutela degli anziani.",
    tags: ["Contratti", "Risarcimento danni", "Successioni", "Recupero crediti", "Pignoramenti"],
  },
];

const altreAree = [
  { icon: <Briefcase size={20} />, title: "Diritto del Lavoro", items: ["Licenziamenti", "Mobbing", "Vertenze sindacali", "Ricorso TAR"] },
  { icon: <Home size={20} />, title: "Locazioni e Condominio", items: ["Sfratti", "Locazioni", "Diritto condominiale"] },
  { icon: <Car size={20} />, title: "Incidenti Stradali", items: ["Risarcimento danni", "Responsabilità civile", "Diritto assicurativo"] },
  { icon: <BookOpen size={20} />, title: "Mediazione", items: ["Mediatore civile e commerciale", "ADR", "Risoluzione alternativa"] },
  { icon: <Baby size={20} />, title: "Minori e Famiglia", items: ["Adozioni", "Unioni civili", "Tutela minori"] },
  { icon: <Building size={20} />, title: "Aste Giudiziarie", items: ["Aste immobiliari", "Procedure esecutive"] },
];

export default function AreeDiAttivita() {
  useScrollReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div>
      {/* Hero */}
      <section style={{ position: "relative", padding: "7rem 0 5rem", background: "#0C1A2E", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.12 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(12,26,46,0.98) 50%, rgba(12,26,46,0.7))" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className="badge-gold" style={{ marginBottom: "1.25rem", display: "inline-block", background: "rgba(168,135,58,0.15)", borderColor: "rgba(168,135,58,0.4)", color: "#C9A84C" }}>
            Competenze
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 600, color: "#FAF8F3", marginBottom: "1.25rem", lineHeight: 1.1 }}>
            Aree di Attività
          </h1>
          <span className="gold-line" />
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.1rem", color: "rgba(250,248,243,0.75)", maxWidth: "560px", lineHeight: 1.8 }}>
            Una difesa completa in ogni ambito del diritto. Ogni caso viene affrontato con la stessa dedizione e professionalità.
          </p>
        </div>
      </section>

      {/* Aree principali */}
      <section className="section-ivory" style={{ padding: "6rem 0" }}>
        <div className="container">
          <div className="reveal" style={{ marginBottom: "3.5rem" }}>
            <span className="badge-gold" style={{ marginBottom: "1rem", display: "inline-block" }}>Specializzazioni principali</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", fontWeight: 600, color: "#0C1A2E" }}>
              Le aree di eccellenza
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {areePrincipali.map((area, i) => (
              <div
                key={area.title}
                className={`reveal delay-${(i + 1) * 100}`}
                style={{
                  borderTop: `3px solid ${area.highlight ? "#C0392B" : "#A8873A"}`,
                  background: "white",
                  padding: "2.5rem",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  position: "relative",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 40px rgba(12,26,46,0.1)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = ""; (e.currentTarget as HTMLElement).style.boxShadow = ""; }}
              >
                {area.highlight && (
                  <div style={{ position: "absolute", top: "1rem", right: "1rem" }}>
                    <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.25rem 0.6rem", background: "rgba(192,57,43,0.1)", color: "#C0392B", border: "1px solid rgba(192,57,43,0.2)" }}>
                      Specializzazione
                    </span>
                  </div>
                )}
                <div style={{ color: area.highlight ? "#C0392B" : "#A8873A", marginBottom: "1.25rem" }}>{area.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 600, color: "#0C1A2E", marginBottom: "1rem" }}>{area.title}</h3>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", color: "#6B7280", lineHeight: 1.75, marginBottom: "1.5rem" }}>{area.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                  {area.tags.map(tag => (
                    <span key={tag} style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.7rem", padding: "0.2rem 0.6rem", background: "rgba(12,26,46,0.05)", color: "#0C1A2E", border: "1px solid rgba(12,26,46,0.1)" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Altre aree */}
      <section className="section-warm" style={{ padding: "6rem 0" }}>
        <div className="container">
          <div className="reveal" style={{ marginBottom: "3.5rem" }}>
            <span className="badge-gold" style={{ marginBottom: "1rem", display: "inline-block" }}>Ulteriori competenze</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", fontWeight: 600, color: "#0C1A2E" }}>
              Altre aree di attività
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {altreAree.map((area, i) => (
              <div key={area.title} className={`reveal delay-${(i % 3 + 1) * 100}`} style={{ background: "white", padding: "1.75rem", borderLeft: "3px solid #A8873A" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <div style={{ color: "#A8873A" }}>{area.icon}</div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 600, color: "#0C1A2E" }}>{area.title}</h3>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {area.items.map(item => (
                    <li key={item} style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", color: "#6B7280", padding: "0.3rem 0", borderBottom: "1px solid rgba(12,26,46,0.06)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <ChevronRight size={12} style={{ color: "#A8873A", flexShrink: 0 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Lista completa */}
          <div className="reveal" style={{ marginTop: "3rem", background: "#0C1A2E", padding: "2.5rem" }}>
            <div style={{ height: "2px", background: "linear-gradient(90deg, #A8873A, #C9A84C)", marginBottom: "1.5rem" }} />
            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#A8873A", marginBottom: "1.25rem" }}>
              Tutte le aree di competenza
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {[
                "Divorzio", "Affidamento figli", "Diritto civile", "Tutela minori", "Recupero crediti",
                "Incidenti stradali", "Mediazione", "Eredità e successioni", "Diritto assicurativo",
                "Sostanze stupefacenti", "Diritto penitenziario", "Unioni civili", "Adozioni",
                "Pignoramenti", "Contratti", "Diritto del lavoro", "Mobbing", "Licenziamenti",
                "Ricorso TAR", "Aste giudiziarie", "Diritto condominiale", "Locazioni", "Sfratti",
                "Risarcimento danni", "Tutela anziani", "Cassazione"
              ].map(area => (
                <span key={area} style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.8rem", padding: "0.35rem 0.85rem", background: "rgba(168,135,58,0.1)", color: "#C9A84C", border: "1px solid rgba(168,135,58,0.2)" }}>
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-navy" style={{ padding: "5rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="reveal">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", fontWeight: 600, color: "#FAF8F3", marginBottom: "1.25rem" }}>
              Hai bisogno di assistenza legale?
            </h2>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", color: "rgba(250,248,243,0.65)", maxWidth: "480px", margin: "0 auto 2.5rem", lineHeight: 1.8 }}>
              Contattami per una consulenza. Valuteremo insieme la tua situazione e la strategia difensiva più adatta.
            </p>
            <Link href="/contatti">
              <span className="btn-gold" style={{ display: "inline-block", textDecoration: "none" }}>Richiedi una Consulenza</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
