/*
 * DESIGN: Rigore Nordico con Calore Mediterraneo
 * Codice Rosso: sezione critica, accento rosso + oro, contenuti empatici e autorevoli
 */
import { useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "wouter";
import { Shield, AlertCircle, CheckCircle, Users, Scale, Heart, Phone } from "lucide-react";

const CODICE_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663433157708/9CRHXdZPLPpsL4U8jUQNsn/codice-rosso-bg-ck3jiTdpe6aBDaztNmpw45.webp";

const reati = [
  { reato: "Stalking", art: "Art. 612-bis c.p.", desc: "Atti persecutori ripetuti che causano paura o alterano le abitudini di vita della vittima." },
  { reato: "Maltrattamenti in famiglia", art: "Art. 572 c.p.", desc: "Violenza fisica o psicologica sistematica nei confronti di familiari o conviventi." },
  { reato: "Violenza sessuale", art: "Art. 609-bis c.p.", desc: "Atti sessuali compiuti con violenza, minaccia o abuso di autorità." },
  { reato: "Revenge porn", art: "Art. 612-ter c.p.", desc: "Diffusione illecita di immagini o video sessualmente espliciti senza consenso." },
  { reato: "Omesso mantenimento", art: "Art. 570 c.p.", desc: "Inadempimento degli obblighi di assistenza familiare e mantenimento dei figli." },
  { reato: "Doxxing", art: "Reato informatico", desc: "Pubblicazione online di informazioni private con intento persecutorio." },
  { reato: "Cyberbullismo", art: "L. 71/2017", desc: "Atti di bullismo reiterati attraverso strumenti digitali e piattaforme online." },
  { reato: "Deepfake", art: "Reato emergente", desc: "Creazione e diffusione di contenuti falsi e manipolati a scopo persecutorio." },
];

export default function CodiceRosso() {
  useScrollReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div>
      {/* Hero */}
      <section style={{ position: "relative", padding: "7rem 0 5rem", background: "#0C1A2E", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${CODICE_BG})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.2 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(12,26,46,0.97) 55%, rgba(12,26,46,0.75))" }} />
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "4px", background: "#C0392B" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#C0392B", boxShadow: "0 0 0 4px rgba(192,57,43,0.2)" }} />
            <span className="badge-gold" style={{ background: "rgba(168,135,58,0.15)", borderColor: "rgba(168,135,58,0.4)", color: "#C9A84C" }}>
              Specializzazione
            </span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 600, color: "#FAF8F3", marginBottom: "1.25rem", lineHeight: 1.1 }}>
            Codice Rosso
          </h1>
          <span className="gold-line" />
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.1rem", color: "rgba(250,248,243,0.75)", maxWidth: "600px", lineHeight: 1.8 }}>
            La Legge 69/2019 ha introdotto misure urgenti per la tutela delle vittime di violenza domestica e di genere. L'Avv. Giacinti è specializzata in questi procedimenti, con un'esperienza unica che abbraccia entrambe le prospettive: vittima e imputato.
          </p>
        </div>
      </section>

      {/* Cos'è il Codice Rosso */}
      <section className="section-ivory" style={{ padding: "6rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
            <div className="reveal">
              <span className="badge-gold" style={{ marginBottom: "1.25rem", display: "inline-block" }}>La legge</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.25rem", fontWeight: 600, color: "#0C1A2E", marginBottom: "1.5rem", lineHeight: 1.15 }}>
                Cosa prevede il Codice Rosso
              </h2>
              <span className="gold-line" />
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", color: "#374151", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                La Legge 69/2019, comunemente chiamata "Codice Rosso", ha introdotto importanti modifiche al codice penale e al codice di procedura penale per garantire una risposta più rapida e incisiva nei casi di violenza domestica e di genere.
              </p>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", color: "#374151", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                La legge prevede tempi accelerati per l'ascolto delle vittime, nuovi reati (come il revenge porn e la deformazione dell'aspetto tramite acido), misure cautelari più stringenti e l'obbligo per il pubblico ministero di procedere con urgenza.
              </p>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", color: "#374151", lineHeight: 1.85 }}>
                Conoscere questa legge nei minimi dettagli è fondamentale — sia per proteggere le vittime che per garantire un processo equo agli imputati. L'Avv. Giacinti ha maturato una significativa esperienza su entrambi i fronti.
              </p>
            </div>

            <div className="reveal delay-200">
              {/* Doppio punto di vista */}
              <div style={{ marginBottom: "1.5rem" }}>
                <div style={{ background: "rgba(12,26,46,0.04)", border: "1px solid rgba(12,26,46,0.1)", padding: "2rem", marginBottom: "1rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                    <Heart size={20} style={{ color: "#C0392B" }} />
                    <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", fontWeight: 600, color: "#C0392B", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                      Assistenza alle vittime
                    </h3>
                  </div>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", color: "#374151", lineHeight: 1.7 }}>
                    Supporto legale immediato, accompagnamento nelle fasi processuali, tutela della privacy, richiesta di misure cautelari urgenti e assistenza per l'accesso al gratuito patrocinio.
                  </p>
                </div>
                <div style={{ background: "#0C1A2E", padding: "2rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                    <Scale size={20} style={{ color: "#A8873A" }} />
                    <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", fontWeight: 600, color: "#A8873A", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                      Difesa degli imputati
                    </h3>
                  </div>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", color: "rgba(250,248,243,0.75)", lineHeight: 1.7 }}>
                    Costruzione di una difesa solida, analisi critica delle prove, contestazione delle misure cautelari, rappresentanza in udienza e tutela del diritto a un processo equo.
                  </p>
                </div>
              </div>

              <div style={{ padding: "1.25rem", background: "rgba(168,135,58,0.08)", border: "1px solid rgba(168,135,58,0.2)" }}>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", color: "#374151", lineHeight: 1.6 }}>
                  <strong style={{ color: "#A8873A" }}>Valore strategico unico:</strong> conoscere entrambe le prospettive permette di anticipare le mosse della controparte e costruire una difesa più efficace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reati trattati */}
      <section className="section-warm" style={{ padding: "6rem 0" }}>
        <div className="container">
          <div className="reveal" style={{ marginBottom: "3.5rem" }}>
            <span className="badge-gold" style={{ marginBottom: "1rem", display: "inline-block" }}>Reati trattati</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", fontWeight: 600, color: "#0C1A2E" }}>
              I procedimenti seguiti
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {reati.map((item, i) => (
              <div key={item.reato} className={`reveal delay-${(i % 4 + 1) * 100}`} style={{ background: "white", padding: "1.75rem", borderTop: "3px solid #A8873A" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", fontWeight: 600, color: "#0C1A2E" }}>{item.reato}</h3>
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.65rem", color: "#A8873A", fontWeight: 500, textAlign: "right", flexShrink: 0, marginLeft: "0.5rem" }}>{item.art}</span>
                </div>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", color: "#6B7280", lineHeight: 1.65 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gratuito patrocinio */}
      <section className="section-navy" style={{ padding: "5rem 0" }}>
        <div className="container">
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            <div className="reveal" style={{ textAlign: "center" }}>
              <AlertCircle size={40} style={{ color: "#A8873A", margin: "0 auto 1.5rem" }} />
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.25rem", fontWeight: 600, color: "#FAF8F3", marginBottom: "1.25rem" }}>
                Gratuito Patrocinio
              </h2>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", color: "rgba(250,248,243,0.75)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                Lo studio presta assistenza anche con il gratuito patrocinio, garantendo l'accesso alla giustizia anche a chi non può sostenere le spese legali. Se sei vittima di un reato previsto dal Codice Rosso, potresti avere diritto all'assistenza legale gratuita a carico dello Stato.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
                <Link href="/contatti">
                  <span className="btn-gold" style={{ display: "inline-block", textDecoration: "none" }}>Verifica se hai diritto</span>
                </Link>
                <Link href="/contatti">
                  <span className="btn-white-outline" style={{ display: "inline-block", textDecoration: "none" }}>Contatta lo Studio</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Messaggio empatico */}
      <section className="section-ivory" style={{ padding: "5rem 0" }}>
        <div className="container">
          <div style={{ maxWidth: "680px", margin: "0 auto" }} className="reveal">
            <blockquote className="blockquote-gold" style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
              "Se stai vivendo una situazione di violenza o ti trovi coinvolto in un procedimento legato al Codice Rosso, non devi affrontarlo da solo. Il primo passo è chiedere aiuto."
            </blockquote>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", color: "#6B7280", marginBottom: "2rem", lineHeight: 1.7 }}>
              Ogni situazione è diversa. Ogni storia merita ascolto. Contattami in totale riservatezza: valuteremo insieme la tua situazione e le opzioni disponibili.
            </p>
            <Link href="/contatti">
              <span className="btn-gold" style={{ display: "inline-block", textDecoration: "none" }}>Parla con l'Avvocata</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
