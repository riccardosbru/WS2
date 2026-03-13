/*
 * DESIGN: Rigore Nordico con Calore Mediterraneo
 * Credenziali: timeline professionale, formazione, ruoli istituzionali
 */
import { useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "wouter";
import { GraduationCap, Briefcase, Award, Users, BookOpen, Mic } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663433157708/9CRHXdZPLPpsL4U8jUQNsn/hero-bg-NuNLYR2yUtDN6d2ELbaunp.webp";

const timeline = [
  {
    period: "Dal 2015",
    icon: <Briefcase size={20} />,
    title: "Avvocato Senior — Studio Legale Grieco",
    desc: "Attività prevalente in reati di genere e procedimenti penali legati al Codice Rosso. Patrocinio di numerosi procedimenti sia per la difesa delle persone offese che degli imputati.",
    type: "lavoro",
  },
  {
    period: "2022 – 2025",
    icon: <Award size={20} />,
    title: "Consigliere — Ordine degli Avvocati di Frosinone",
    desc: "Membro del Consiglio dell'Ordine con delega alla Commissione Gratuito Patrocinio e alla Commissione Penale. Ruolo istituzionale di rilievo nella governance dell'Ordine.",
    type: "istituzionale",
  },
  {
    period: "In corso",
    icon: <Users size={20} />,
    title: "Segretario — Camera Penale di Frosinone \"F. Pagliei\"",
    desc: "Membro del Consiglio Direttivo con ruolo di Segretario. Camera Penale aderente all'UCPI (Unione Camere Penali Italiane). Responsabile della scuola di formazione.",
    type: "associativo",
  },
];

const formazione = [
  {
    icon: <GraduationCap size={24} />,
    title: "Laurea in Giurisprudenza",
    ente: "Università La Sapienza di Roma",
    dettaglio: "Voto: 108/110",
    tipo: "Formazione accademica",
  },
  {
    icon: <BookOpen size={24} />,
    title: "Corso Difensore d'Ufficio",
    ente: "Consiglio Ordine Avvocati di Frosinone",
    dettaglio: "Abilitazione difensore d'ufficio",
    tipo: "Formazione professionale",
  },
  {
    icon: <Award size={24} />,
    title: "Master in Gestione e Sviluppo delle Risorse Umane",
    ente: "Alma Laboris Business School",
    dettaglio: "Gestione, Sviluppo e Amministrazione delle Risorse Umane",
    tipo: "Master universitario",
  },
  {
    icon: <BookOpen size={24} />,
    title: "Mediatore Civile e Commerciale",
    ente: "ImMediata ADR",
    dettaglio: "Abilitazione alla mediazione civile e commerciale",
    tipo: "Certificazione professionale",
  },
];

export default function Credenziali() {
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
            Curriculum
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 600, color: "#FAF8F3", marginBottom: "1.25rem", lineHeight: 1.1 }}>
            Credenziali
          </h1>
          <span className="gold-line" />
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.1rem", color: "rgba(250,248,243,0.75)", maxWidth: "560px", lineHeight: 1.8 }}>
            Formazione accademica, esperienza professionale e ruoli istituzionali che testimoniano l'impegno e la competenza dell'Avv. Giacinti.
          </p>
        </div>
      </section>

      {/* Timeline professionale */}
      <section className="section-ivory" style={{ padding: "6rem 0" }}>
        <div className="container">
          <div className="reveal" style={{ marginBottom: "3.5rem" }}>
            <span className="badge-gold" style={{ marginBottom: "1rem", display: "inline-block" }}>Percorso professionale</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", fontWeight: 600, color: "#0C1A2E" }}>
              Esperienza e ruoli
            </h2>
          </div>

          <div style={{ position: "relative" }}>
            {/* Vertical line */}
            <div style={{ position: "absolute", left: "24px", top: 0, bottom: 0, width: "1px", background: "linear-gradient(to bottom, #A8873A, rgba(168,135,58,0.1))" }} className="hidden md:block" />

            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
              {timeline.map((item, i) => (
                <div key={item.title} className={`reveal delay-${(i + 1) * 100}`} style={{ display: "flex", gap: "2rem", alignItems: "flex-start" }}>
                  {/* Icon circle */}
                  <div style={{ flexShrink: 0, width: "48px", height: "48px", background: "#0C1A2E", border: "2px solid #A8873A", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", color: "#A8873A", zIndex: 1 }}>
                    {item.icon}
                  </div>
                  {/* Content */}
                  <div style={{ flex: 1, background: "white", padding: "2rem", borderTop: "3px solid #A8873A" }}>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", alignItems: "center", marginBottom: "0.75rem" }}>
                      <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.75rem", fontWeight: 600, color: "#A8873A", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                        {item.period}
                      </span>
                      <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.7rem", padding: "0.2rem 0.6rem", background: "rgba(12,26,46,0.06)", color: "#6B7280", border: "1px solid rgba(12,26,46,0.1)" }}>
                        {item.type === "lavoro" ? "Attività professionale" : item.type === "istituzionale" ? "Ruolo istituzionale" : "Ruolo associativo"}
                      </span>
                    </div>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 600, color: "#0C1A2E", marginBottom: "0.75rem" }}>{item.title}</h3>
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", color: "#6B7280", lineHeight: 1.75 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Formazione */}
      <section className="section-warm" style={{ padding: "6rem 0" }}>
        <div className="container">
          <div className="reveal" style={{ marginBottom: "3.5rem" }}>
            <span className="badge-gold" style={{ marginBottom: "1rem", display: "inline-block" }}>Formazione</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", fontWeight: 600, color: "#0C1A2E" }}>
              Titoli e certificazioni
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {formazione.map((item, i) => (
              <div key={item.title} className={`reveal delay-${(i + 1) * 100}`} style={{ background: "white", padding: "2rem", borderLeft: "3px solid #A8873A" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                  <div style={{ color: "#A8873A" }}>{item.icon}</div>
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6B7280" }}>
                    {item.tipo}
                  </span>
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 600, color: "#0C1A2E", marginBottom: "0.5rem" }}>{item.title}</h3>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", color: "#A8873A", fontWeight: 500, marginBottom: "0.25rem" }}>{item.ente}</p>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.82rem", color: "#6B7280" }}>{item.dettaglio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attività divulgative */}
      <section className="section-navy" style={{ padding: "5rem 0" }}>
        <div className="container">
          <div style={{ maxWidth: "760px", margin: "0 auto" }} className="reveal">
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <Mic size={40} style={{ color: "#A8873A", margin: "0 auto 1.5rem" }} />
              <span className="badge-gold" style={{ marginBottom: "1rem", display: "inline-block", background: "rgba(168,135,58,0.15)", borderColor: "rgba(168,135,58,0.4)", color: "#C9A84C" }}>
                Attività divulgativa
              </span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.25rem", fontWeight: 600, color: "#FAF8F3", marginBottom: "1.25rem" }}>
                Relatrice e formatrice
              </h2>
            </div>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", color: "rgba(250,248,243,0.75)", lineHeight: 1.85, marginBottom: "1.5rem", textAlign: "center" }}>
              L'Avv. Giacinti è relatrice in convegni dedicati alla violenza di genere e alle novità legislative sul Codice Rosso. Ha partecipato all'evento <em style={{ color: "#C9A84C" }}>"La violenza sulle donne nella storia"</em> tenutosi presso il salone di rappresentanza della Provincia di Frosinone.
            </p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", color: "rgba(250,248,243,0.75)", lineHeight: 1.85, marginBottom: "2rem", textAlign: "center" }}>
              In qualità di Responsabile della scuola di formazione della Camera Penale di Frosinone, contribuisce attivamente alla formazione continua degli avvocati del foro.
            </p>
            <div style={{ textAlign: "center" }}>
              <Link href="/contatti">
                <span className="btn-gold" style={{ display: "inline-block", textDecoration: "none" }}>Contatta lo Studio</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
