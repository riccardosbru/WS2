/*
 * DESIGN: Rigore Nordico con Calore Mediterraneo
 * Chi Sono: hero navy, biografia dettagliata, timeline professionale
 */
import { useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "wouter";
import { Award, BookOpen, Users, Scale, GraduationCap, Briefcase, ChevronRight } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663433157708/9CRHXdZPLPpsL4U8jUQNsn/hero-bg-NuNLYR2yUtDN6d2ELbaunp.webp";
const BOOKS_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663433157708/9CRHXdZPLPpsL4U8jUQNsn/law-books-DEjMQ8yNXgVz95xUCDyZ.webp";

export default function ChiSono() {
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
            Chi Sono
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 600, color: "#FAF8F3", marginBottom: "1.25rem", lineHeight: 1.1 }}>
            Avv. Giulia Giacinti
          </h1>
          <span className="gold-line" />
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.1rem", color: "rgba(250,248,243,0.75)", maxWidth: "560px", lineHeight: 1.8 }}>
            Avvocata penalista e civilista con oltre 15 anni di esperienza. Specializzata in Codice Rosso, diritto di famiglia e tutela delle persone.
          </p>
        </div>
      </section>

      {/* Biografia */}
      <section className="section-ivory" style={{ padding: "6rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
            <div className="reveal">
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.25rem", fontWeight: 600, color: "#0C1A2E", marginBottom: "1.5rem" }}>
                Una storia di impegno e competenza
              </h2>
              <span className="gold-line" />
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", color: "#374151", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                Mi sono laureata in Giurisprudenza presso l'Università La Sapienza di Roma con il voto di 108/110, una formazione accademica che ha gettato le basi di una carriera professionale costruita con rigore e dedizione.
              </p>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", color: "#374151", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                Dal 2015 sono avvocato senior presso lo Studio Legale Grieco di Frosinone, dove mi occupo prevalentemente di reati di genere e procedimenti penali legati al Codice Rosso. Ho patrocinato numerosi procedimenti sia per la difesa delle persone offese che per la difesa degli imputati.
              </p>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", color: "#374151", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                Dal 2022 al 2025 ho ricoperto il ruolo di Consigliere presso il Consiglio dell'Ordine degli Avvocati di Frosinone, con delega alla Commissione Gratuito Patrocinio e alla Commissione Penale. Un'esperienza istituzionale che ha rafforzato la mia visione del diritto come strumento di giustizia accessibile a tutti.
              </p>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", color: "#374151", lineHeight: 1.85 }}>
                Sono Segretario del Consiglio Direttivo della Camera Penale di Frosinone "F. Pagliei", aderente all'UCPI, e Responsabile della scuola di formazione. Sono relatrice in convegni dedicati alla violenza di genere e alle novità legislative sul Codice Rosso.
              </p>
            </div>

            <div className="reveal delay-200">
              <img
                src={BOOKS_IMG}
                alt="Libri di diritto — Studio Legale Giacinti"
                style={{ width: "100%", height: "380px", objectFit: "cover", marginBottom: "2rem" }}
              />

              {/* Info card */}
              <div style={{ background: "#0C1A2E", padding: "2rem" }}>
                <div style={{ height: "3px", background: "linear-gradient(90deg, #A8873A, #C9A84C)", marginBottom: "1.5rem" }} />
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#A8873A", marginBottom: "1.25rem" }}>
                  Dati Professionali
                </h3>
                {[
                  { label: "Iscrizione", value: "Ordine Avvocati di Frosinone" },
                  { label: "Laurea", value: "La Sapienza di Roma — 108/110" },
                  { label: "Esperienza", value: "Oltre 15 anni di attività" },
                  { label: "Studio", value: "Studio Legale Grieco (dal 2015)" },
                  { label: "Sede", value: "Via Tiburtina 203, Frosinone (FR)" },
                ].map((item) => (
                  <div key={item.label} style={{ display: "flex", justifyContent: "space-between", padding: "0.6rem 0", borderBottom: "1px solid rgba(168,135,58,0.12)" }}>
                    <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.8rem", color: "rgba(250,248,243,0.5)" }}>{item.label}</span>
                    <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", color: "#FAF8F3", fontWeight: 500, textAlign: "right", maxWidth: "60%" }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valori */}
      <section className="section-warm" style={{ padding: "6rem 0" }}>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="badge-gold" style={{ marginBottom: "1rem", display: "inline-block" }}>Il mio approccio</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", fontWeight: 600, color: "#0C1A2E" }}>
              Come lavoro per te
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2rem" }}>
            {[
              { icon: <Scale size={28} />, title: "Rigore professionale", desc: "Ogni caso viene analizzato con la massima attenzione ai dettagli giuridici e alle prove disponibili." },
              { icon: <Users size={28} />, title: "Ascolto genuino", desc: "Prima di qualsiasi strategia, ascolto la tua storia. Capire la persona è fondamentale per difenderla." },
              { icon: <BookOpen size={28} />, title: "Aggiornamento continuo", desc: "Il diritto cambia. Mi aggiorno costantemente sulle riforme legislative per offrirti la difesa più efficace." },
              { icon: <Award size={28} />, title: "Trasparenza", desc: "Ti spiego ogni passaggio in modo chiaro, senza tecnicismi incomprensibili. Hai diritto di capire." },
            ].map((item, i) => (
              <div key={item.title} className={`card-gold reveal delay-${(i + 1) * 100}`}>
                <div style={{ color: "#A8873A", marginBottom: "1rem" }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.35rem", fontWeight: 600, color: "#0C1A2E", marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", color: "#6B7280", lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-navy" style={{ padding: "5rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div className="reveal">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", fontWeight: 600, color: "#FAF8F3", marginBottom: "1.25rem" }}>
              Vuoi saperne di più?
            </h2>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", color: "rgba(250,248,243,0.65)", maxWidth: "480px", margin: "0 auto 2.5rem", lineHeight: 1.8 }}>
              Contattami per una prima consulenza. Valuteremo insieme la tua situazione in totale riservatezza.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <Link href="/contatti">
                <span className="btn-gold" style={{ display: "inline-block", textDecoration: "none" }}>Contatta lo Studio</span>
              </Link>
              <Link href="/credenziali">
                <span className="btn-white-outline" style={{ display: "inline-block", textDecoration: "none" }}>Vedi le Credenziali</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
