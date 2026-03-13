/*
 * DESIGN: Rigore Nordico con Calore Mediterraneo
 * Casi e Approccio Difensivo: caso reale, metodologia, valori
 */
import { useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "wouter";
import { Gavel, Search, Shield, Scale, CheckCircle, ArrowRight } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663433157708/9CRHXdZPLPpsL4U8jUQNsn/hero-bg-NuNLYR2yUtDN6d2ELbaunp.webp";
const SCALES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663433157708/9CRHXdZPLPpsL4U8jUQNsn/justice-scales-A8QB7Y3DiYP4YY8eUSFP5h.webp";

const fasi = [
  {
    num: "01",
    icon: <Search size={24} />,
    title: "Ascolto e analisi",
    desc: "Il primo incontro è dedicato all'ascolto approfondito della tua situazione. Ogni dettaglio conta. Analizzo i fatti, le prove disponibili e le possibili strategie difensive.",
  },
  {
    num: "02",
    icon: <Scale size={24} />,
    title: "Strategia difensiva",
    desc: "Sulla base dell'analisi, costruisco una strategia su misura. Valuto ogni opzione: dalla negoziazione stragiudiziale al procedimento in aula, scegliendo il percorso più efficace.",
  },
  {
    num: "03",
    icon: <Shield size={24} />,
    title: "Difesa attiva",
    desc: "Agisco con tempestività e determinazione. Presento memorie, partecipo alle udienze, gestisco i rapporti con la controparte e con il pubblico ministero.",
  },
  {
    num: "04",
    icon: <CheckCircle size={24} />,
    title: "Aggiornamento costante",
    desc: "Ti tengo informato su ogni sviluppo del procedimento. Nessuna sorpresa: ogni decisione viene presa insieme, con la tua piena consapevolezza.",
  },
];

export default function CasiApproccio() {
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
            Metodologia
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 600, color: "#FAF8F3", marginBottom: "1.25rem", lineHeight: 1.1 }}>
            Casi e Approccio Difensivo
          </h1>
          <span className="gold-line" />
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.1rem", color: "rgba(250,248,243,0.75)", maxWidth: "560px", lineHeight: 1.8 }}>
            Ogni caso è unico. La difesa efficace nasce dall'ascolto, dall'analisi e da una strategia costruita su misura per la tua situazione.
          </p>
        </div>
      </section>

      {/* Approccio */}
      <section className="section-ivory" style={{ padding: "6rem 0" }}>
        <div className="container">
          <div className="reveal" style={{ marginBottom: "3.5rem", textAlign: "center" }}>
            <span className="badge-gold" style={{ marginBottom: "1rem", display: "inline-block" }}>Il metodo</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", fontWeight: 600, color: "#0C1A2E" }}>
              Come costruisco la tua difesa
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "2rem" }}>
            {fasi.map((fase, i) => (
              <div key={fase.num} className={`reveal delay-${(i + 1) * 100}`} style={{ position: "relative", padding: "2.5rem 2rem", background: "white", borderTop: "3px solid #A8873A" }}>
                <div style={{ position: "absolute", top: "1rem", right: "1.5rem", fontFamily: "'Cormorant Garamond', serif", fontSize: "3rem", fontWeight: 700, color: "rgba(168,135,58,0.1)", lineHeight: 1 }}>
                  {fase.num}
                </div>
                <div style={{ color: "#A8873A", marginBottom: "1rem" }}>{fase.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.35rem", fontWeight: 600, color: "#0C1A2E", marginBottom: "0.75rem" }}>{fase.title}</h3>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", color: "#6B7280", lineHeight: 1.75 }}>{fase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Caso reale */}
      <section className="section-navy" style={{ padding: "6rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
            <div className="reveal">
              <span className="badge-gold" style={{ marginBottom: "1.25rem", display: "inline-block", background: "rgba(168,135,58,0.15)", borderColor: "rgba(168,135,58,0.4)", color: "#C9A84C" }}>
                Caso seguito
              </span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.25rem", fontWeight: 600, color: "#FAF8F3", marginBottom: "1.5rem", lineHeight: 1.15 }}>
                Un risultato concreto
              </h2>
              <span className="gold-line" />
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", color: "rgba(250,248,243,0.75)", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                Il cliente era sottoposto alla misura cautelare del divieto di avvicinamento con braccialetto elettronico nell'ambito di un procedimento per maltrattamenti e violenza domestica.
              </p>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", color: "rgba(250,248,243,0.75)", lineHeight: 1.85, marginBottom: "1.5rem" }}>
                Attraverso un'analisi approfondita degli atti, la raccolta di elementi a discarico e una difesa tecnica mirata, è stata ottenuta la <strong style={{ color: "#C9A84C" }}>revoca della misura cautelare</strong>.
              </p>
              <div style={{ padding: "1.25rem", background: "rgba(168,135,58,0.1)", border: "1px solid rgba(168,135,58,0.25)", marginBottom: "2rem" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                  <CheckCircle size={18} style={{ color: "#A8873A", flexShrink: 0, marginTop: "2px" }} />
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", color: "#FAF8F3", lineHeight: 1.7 }}>
                    <strong>Risultato:</strong> Revoca del divieto di avvicinamento con braccialetto elettronico.
                  </p>
                </div>
              </div>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.75rem", color: "rgba(250,248,243,0.35)", fontStyle: "italic" }}>
                * Caso anonimizzato nel rispetto della privacy del cliente.
              </p>
            </div>
            <div className="reveal delay-200">
              <img
                src={SCALES_IMG}
                alt="Bilancia della giustizia"
                style={{ width: "100%", height: "420px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Valori */}
      <section className="section-warm" style={{ padding: "6rem 0" }}>
        <div className="container">
          <div className="reveal" style={{ marginBottom: "3.5rem", textAlign: "center" }}>
            <span className="badge-gold" style={{ marginBottom: "1rem", display: "inline-block" }}>I valori dello studio</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", fontWeight: 600, color: "#0C1A2E" }}>
              Cosa mi guida ogni giorno
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "2rem" }}>
            {[
              { val: "Rigore", desc: "Ogni atto difensivo è preparato con la massima cura e attenzione ai dettagli." },
              { val: "Empatia", desc: "Comprendo la situazione umana del cliente prima di quella giuridica." },
              { val: "Trasparenza", desc: "Nessun tecnicismo oscuro: ti spiego tutto in modo chiaro e comprensibile." },
              { val: "Determinazione", desc: "Difendo i tuoi diritti con la stessa intensità in ogni fase del procedimento." },
            ].map((item, i) => (
              <div key={item.val} className={`reveal delay-${(i + 1) * 100}`} style={{ textAlign: "center", padding: "2.5rem 1.5rem", background: "white", borderBottom: "3px solid #A8873A" }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.75rem", fontWeight: 600, color: "#A8873A", marginBottom: "0.75rem" }}>{item.val}</h3>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.88rem", color: "#6B7280", lineHeight: 1.7 }}>{item.desc}</p>
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
              Raccontami il tuo caso
            </h2>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", color: "rgba(250,248,243,0.65)", maxWidth: "480px", margin: "0 auto 2.5rem", lineHeight: 1.8 }}>
              La prima consulenza è il momento in cui ascolto la tua storia e valuto le opzioni disponibili. Contattami in totale riservatezza.
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
