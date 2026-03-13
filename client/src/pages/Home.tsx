/*
 * DESIGN: Rigore Nordico con Calore Mediterraneo
 * Home: Hero navy + immagine, sezioni alternate avorio/warm-gray, accenti oro
 * Sezioni: Hero, Presentazione, Aree, Perché scegliere, Codice Rosso, Caso reale, Recensione, CTA, Contatti rapidi
 */
import { useEffect } from "react";
import { Link } from "wouter";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Scale, Shield, Users, Award, MapPin, Mail,
  Star, Quote, ArrowRight, CheckCircle, Gavel, Heart, BookOpen
} from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663433157708/9CRHXdZPLPpsL4U8jUQNsn/hero-bg-NuNLYR2yUtDN6d2ELbaunp.webp";
const CODICE_ROSSO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663433157708/9CRHXdZPLPpsL4U8jUQNsn/codice-rosso-bg-ck3jiTdpe6aBDaztNmpw45.webp";
const FAMILY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663433157708/9CRHXdZPLPpsL4U8jUQNsn/family-law-ZuR28gLiYg7YGeGZgVqAbQ.webp";
const SCALES_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663433157708/9CRHXdZPLPpsL4U8jUQNsn/justice-scales-A8QB7Y3DiYP4YY8eUSFP5h.webp";

const aree = [
  { icon: <Gavel size={24} />, title: "Diritto Penale", desc: "Difesa in procedimenti penali, reati contro la persona e il patrimonio, assistenza in ogni fase del processo." },
  { icon: <Heart size={24} />, title: "Diritto di Famiglia", desc: "Separazioni, divorzi, affidamento dei figli, tutela dei minori e riforma Cartabia." },
  { icon: <Shield size={24} />, title: "Codice Rosso", desc: "Specializzazione in violenza di genere: stalking, maltrattamenti, revenge porn, violenza sessuale." },
  { icon: <Scale size={24} />, title: "Diritto Civile", desc: "Contratti, risarcimento danni, recupero crediti, successioni, locazioni e diritto condominiale." },
  { icon: <Users size={24} />, title: "Diritto del Lavoro", desc: "Tutela del lavoratore, mobbing, licenziamenti illegittimi, ricorsi e vertenze sindacali." },
  { icon: <BookOpen size={24} />, title: "Mediazione", desc: "Mediatore civile e commerciale certificato. Risoluzione alternativa delle controversie." },
];

const perche = [
  { num: "15+", label: "Anni di esperienza", desc: "Oltre quindici anni di attività professionale al servizio dei clienti." },
  { num: "2", label: "Punti di vista", desc: "Difende sia le vittime che gli imputati nel Codice Rosso: una prospettiva strategica unica." },
  { num: "COA", label: "Consigliere Ordine", desc: "Ex Consigliere dell'Ordine degli Avvocati di Frosinone (2022–2025)." },
  { num: "108", label: "Voto di laurea", desc: "Laureata con 108/110 alla Sapienza di Roma. Formazione accademica d'eccellenza." },
];

export default function Home() {
  useScrollReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* ─── HERO ─── */}
      <section
        style={{
          position: "relative",
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
          background: "#0C1A2E",
        }}
      >
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${HERO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center right",
          opacity: 0.25,
        }} />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(105deg, rgba(12,26,46,0.97) 45%, rgba(12,26,46,0.6) 100%)",
        }} />

        <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: "5rem", paddingBottom: "5rem" }}>
          <div style={{ maxWidth: "680px" }}>
            <div className="badge-gold animate-fade-in" style={{ marginBottom: "1.5rem" }}>
              Studio Legale · Frosinone
            </div>
            <h1
              className="animate-fade-in-up delay-100"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                fontWeight: 600,
                color: "#FAF8F3",
                lineHeight: 1.1,
                marginBottom: "1.5rem",
              }}
            >
              La difesa che<br />
              <em style={{ color: "#C9A84C", fontStyle: "italic" }}>meriti.</em>
            </h1>
            <span className="gold-line animate-fade-in delay-200" />
            <p
              className="animate-fade-in-up delay-300"
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: "1.1rem",
                color: "rgba(250,248,243,0.8)",
                lineHeight: 1.8,
                marginBottom: "2.5rem",
                maxWidth: "520px",
              }}
            >
              Avv. Giulia Giacinti — oltre 15 anni di esperienza nel diritto penale, civile e di famiglia.
              Specializzata in Codice Rosso e violenza di genere. Al tuo fianco, con competenza e umanità.
            </p>
            <div className="animate-fade-in-up delay-400" style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <Link href="/contatti">
                <span className="btn-gold">
                  Richiedi una Consulenza
                </span>
              </Link>
              <Link href="/chi-sono">
                <span className="btn-white-outline">
                  Scopri lo Studio
                </span>
              </Link>
            </div>

            <div
              className="animate-fade-in delay-500"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "2rem",
                marginTop: "3.5rem",
                paddingTop: "2rem",
                borderTop: "1px solid rgba(168,135,58,0.3)",
              }}
            >
              {[
                { val: "15+", label: "Anni di esperienza" },
                { val: "Sapienza", label: "Università di Roma" },
                { val: "COA FR", label: "Ordine Avvocati" },
              ].map((s) => (
                <div key={s.label}>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.6rem", fontWeight: 700, color: "#A8873A", lineHeight: 1 }}>{s.val}</p>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.75rem", color: "rgba(250,248,243,0.5)", letterSpacing: "0.05em", marginTop: "0.25rem" }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", opacity: 0.5 }}>
          <div style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, #A8873A, transparent)" }} />
        </div>
      </section>

      {/* ─── PRESENTAZIONE SINTETICA ─── */}
      <section className="section-ivory" style={{ padding: "6rem 0" }}>
        <div className="container">
          <div className="grid-2-col">
            <div className="reveal">
              <span className="badge-gold" style={{ marginBottom: "1.25rem", display: "inline-block" }}>Chi Sono</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#0C1A2E", marginBottom: "1.5rem", lineHeight: 1.15 }}>
                Un'avvocata al tuo fianco nei momenti che contano
              </h2>
              <span className="gold-line" />
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", color: "#374151", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Mi chiamo Giulia Giacinti e sono avvocata iscritta all'Ordine di Frosinone. Dopo la laurea con 108/110 alla Sapienza di Roma, ho dedicato oltre quindici anni alla difesa dei diritti delle persone — con rigore professionale e attenzione genuina per ogni storia che mi viene affidata.
              </p>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", color: "#374151", lineHeight: 1.8, marginBottom: "2rem" }}>
                Lavoro prevalentemente in diritto penale, diritto di famiglia e Codice Rosso. Sono avvocato senior presso lo Studio Legale Grieco e sono stata Consigliere dell'Ordine degli Avvocati di Frosinone dal 2022 al 2025.
              </p>
              <Link href="/chi-sono">
                <span className="btn-navy-outline">
                  Leggi la mia storia
                </span>
              </Link>
            </div>
            <div className="reveal delay-200" style={{ position: "relative" }}>
              <img
                src={SCALES_IMG}
                alt="Bilancia della giustizia — Studio Legale Avv. Giacinti"
                style={{ width: "100%", height: "420px", objectFit: "cover", display: "block" }}
              />
              <div style={{
                position: "absolute",
                bottom: "-1.5rem",
                left: "-1.5rem",
                background: "#0C1A2E",
                padding: "1.5rem 2rem",
                maxWidth: "260px",
              }}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", fontStyle: "italic", color: "#C9A84C", lineHeight: 1.5 }}>
                  "La giustizia non è un privilegio. È un diritto che difendo ogni giorno."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── AREE DI ATTIVITÀ ─── */}
      <section className="section-warm" style={{ padding: "6rem 0", position: "relative" }}>
        <span className="section-number">01</span>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="badge-gold" style={{ marginBottom: "1rem", display: "inline-block" }}>Competenze</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#0C1A2E", marginBottom: "1rem" }}>
              Aree di Attività
            </h2>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", color: "#6B7280", maxWidth: "520px", margin: "0 auto" }}>
              Una difesa completa in ogni ambito del diritto. Ogni caso è affrontato con la stessa dedizione.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {aree.map((area, i) => (
              <div key={area.title} className={`card-gold reveal delay-${(i % 4 + 1) * 100}`}>
                <div style={{ color: "#A8873A", marginBottom: "1rem" }}>{area.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.35rem", fontWeight: 600, color: "#0C1A2E", marginBottom: "0.75rem" }}>
                  {area.title}
                </h3>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", color: "#6B7280", lineHeight: 1.7 }}>
                  {area.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/aree-di-attivita">
              <span className="btn-navy-outline">
                Tutte le aree di attività
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─── PERCHÉ SCEGLIERE QUESTO STUDIO ─── */}
      <section className="section-navy" style={{ padding: "6rem 0", position: "relative" }}>
        <span className="section-number" style={{ color: "rgba(168,135,58,0.06)" }}>02</span>
        <div className="container">
          <div className="reveal" style={{ textAlign: "center", marginBottom: "4rem" }}>
            <span className="badge-gold" style={{ marginBottom: "1rem", display: "inline-block", background: "rgba(168,135,58,0.15)", borderColor: "rgba(168,135,58,0.4)", color: "#C9A84C" }}>
              Perché sceglierci
            </span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#FAF8F3", marginBottom: "1rem" }}>
              Competenza. Esperienza. Umanità.
            </h2>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", color: "rgba(250,248,243,0.6)", maxWidth: "520px", margin: "0 auto" }}>
              Quattro ragioni concrete per affidarti allo Studio Legale Giacinti.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem" }}>
            {perche.map((item, i) => (
              <div key={item.num} className={`reveal delay-${(i + 1) * 100}`} style={{ textAlign: "center", padding: "2rem 1.5rem", border: "1px solid rgba(168,135,58,0.2)" }}>
                <div className="stat-number" style={{ marginBottom: "0.5rem" }}>{item.num}</div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", fontWeight: 600, color: "#FAF8F3", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "0.75rem" }}>
                  {item.label}
                </h3>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", color: "rgba(250,248,243,0.55)", lineHeight: 1.6 }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="reveal" style={{ marginTop: "4rem", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {[
              "Gratuito patrocinio disponibile",
              "Assistenza vittime e imputati",
              "Relatrice in convegni sulla violenza di genere",
              "Segretario Camera Penale di Frosinone",
              "Mediatore civile e commerciale certificato",
              "Aggiornamento continuo su riforme legislative",
            ].map((point) => (
              <div key={point} style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
                <CheckCircle size={16} style={{ color: "#A8873A", flexShrink: 0, marginTop: "3px" }} />
                <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", color: "rgba(250,248,243,0.75)" }}>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SPECIALIZZAZIONE CODICE ROSSO ─── */}
      <section style={{ position: "relative", overflow: "hidden", padding: "6rem 0" }}>
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${CODICE_ROSSO_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.15,
        }} />
        <div style={{ position: "absolute", inset: 0, background: "rgba(250,248,243,0.92)" }} />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="grid-2-col">
            <div className="reveal">
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <div style={{ width: "8px", height: "8px", borderRadius: "50%", background: "#C0392B", boxShadow: "0 0 0 4px rgba(192,57,43,0.15)" }} />
                <span className="badge-gold">Specializzazione</span>
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 600, color: "#0C1A2E", marginBottom: "1.5rem", lineHeight: 1.15 }}>
                Codice Rosso:<br />una difesa esperta
              </h2>
              <span className="gold-line" />
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", color: "#374151", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Il Codice Rosso (L. 69/2019) ha introdotto misure urgenti per la tutela delle vittime di violenza domestica e di genere. L'Avv. Giacinti ha maturato una significativa esperienza in questi procedimenti, assistendo sia le persone offese che le persone indagate.
              </p>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", color: "#374151", lineHeight: 1.8, marginBottom: "2rem" }}>
                Questo doppio punto di vista — dalla parte della vittima e dalla parte dell'imputato — costituisce un valore strategico unico nella costruzione della difesa.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2rem" }}>
                {["Stalking", "Maltrattamenti", "Violenza sessuale", "Revenge porn", "Omesso mantenimento", "Doxxing", "Cyberbullismo", "Deepfake"].map((tag) => (
                  <span key={tag} style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.75rem", padding: "0.3rem 0.75rem", background: "rgba(12,26,46,0.06)", color: "#0C1A2E", border: "1px solid rgba(12,26,46,0.12)" }}>
                    {tag}
                  </span>
                ))}
              </div>
              <Link href="/codice-rosso">
                <span className="btn-gold">
                  Approfondisci il Codice Rosso
                </span>
              </Link>
            </div>

            <div className="reveal delay-200">
              <div style={{ background: "#0C1A2E", padding: "2.5rem", position: "relative" }}>
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "#C0392B" }} />
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 600, color: "#FAF8F3", marginBottom: "1.5rem" }}>
                  Reati trattati
                </h3>
                {[
                  { reato: "Stalking", art: "Art. 612-bis c.p." },
                  { reato: "Maltrattamenti in famiglia", art: "Art. 572 c.p." },
                  { reato: "Violenza sessuale", art: "Art. 609-bis c.p." },
                  { reato: "Revenge porn", art: "Art. 612-ter c.p." },
                  { reato: "Omesso mantenimento", art: "Art. 570 c.p." },
                  { reato: "Atti persecutori digitali", art: "Doxxing, deepfake" },
                ].map((item) => (
                  <div key={item.reato} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.75rem 0", borderBottom: "1px solid rgba(168,135,58,0.15)" }}>
                    <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", color: "#FAF8F3", fontWeight: 500 }}>{item.reato}</span>
                    <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.75rem", color: "#A8873A" }}>{item.art}</span>
                  </div>
                ))}
                <div style={{ marginTop: "1.5rem", padding: "1rem", background: "rgba(168,135,58,0.1)", border: "1px solid rgba(168,135,58,0.2)" }}>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.8rem", color: "rgba(250,248,243,0.7)", lineHeight: 1.6 }}>
                    Lo studio presta assistenza anche con <strong style={{ color: "#C9A84C" }}>gratuito patrocinio</strong> per chi non può sostenere le spese legali.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CASO REALE ─── */}
      <section className="section-navy" style={{ padding: "6rem 0", position: "relative" }}>
        <span className="section-number" style={{ color: "rgba(168,135,58,0.05)" }}>03</span>
        <div className="container">
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <div className="reveal" style={{ textAlign: "center", marginBottom: "3rem" }}>
              <span className="badge-gold" style={{ marginBottom: "1rem", display: "inline-block", background: "rgba(168,135,58,0.15)", borderColor: "rgba(168,135,58,0.4)", color: "#C9A84C" }}>
                Caso Seguito
              </span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)", fontWeight: 600, color: "#FAF8F3" }}>
                Un risultato concreto
              </h2>
            </div>

            <div className="reveal delay-100" style={{ border: "1px solid rgba(168,135,58,0.25)", padding: "3rem", position: "relative" }}>
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, #A8873A, #C9A84C)" }} />
              <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start", flexWrap: "wrap" }}>
                <div style={{ flexShrink: 0, width: "48px", height: "48px", background: "rgba(168,135,58,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Gavel size={20} style={{ color: "#A8873A" }} />
                </div>
                <div style={{ flex: 1, minWidth: "200px" }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.35rem", fontWeight: 600, color: "#FAF8F3", marginBottom: "1rem" }}>
                    Procedimento per maltrattamenti e violenza domestica
                  </h3>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: "rgba(250,248,243,0.75)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                    Il cliente si trovava sottoposto alla misura cautelare del divieto di avvicinamento con braccialetto elettronico nell'ambito di un procedimento per maltrattamenti e violenza domestica — una situazione di forte impatto sulla vita quotidiana e lavorativa.
                  </p>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", padding: "1.25rem", background: "rgba(168,135,58,0.08)", border: "1px solid rgba(168,135,58,0.2)" }}>
                    <CheckCircle size={18} style={{ color: "#A8873A", flexShrink: 0, marginTop: "2px" }} />
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: "#FAF8F3", lineHeight: 1.7, fontWeight: 500 }}>
                      A seguito dell'attività difensiva, è stata ottenuta la <strong style={{ color: "#C9A84C" }}>revoca della misura cautelare</strong> del divieto di avvicinamento con braccialetto elettronico.
                    </p>
                  </div>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.8rem", color: "rgba(250,248,243,0.4)", marginTop: "1rem", fontStyle: "italic" }}>
                    * Caso anonimizzato nel rispetto della privacy del cliente.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── RECENSIONE CLIENTE ─── */}
      <section className="section-ivory" style={{ padding: "6rem 0" }}>
        <div className="container">
          <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
            <div className="reveal">
              <span className="badge-gold" style={{ marginBottom: "2rem", display: "inline-block" }}>Testimonianza</span>
              <Quote size={40} style={{ color: "#A8873A", margin: "0 auto 1.5rem", opacity: 0.4 }} />
              <blockquote style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "1.4rem", color: "#0C1A2E", marginBottom: "2rem", lineHeight: 1.5 }}>
                "Professionalità, serietà e competenze. Super consigliata."
              </blockquote>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "1rem" }}>
                <div style={{ width: "44px", height: "44px", background: "#0C1A2E", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", fontWeight: 700, color: "#A8873A" }}>SD</span>
                </div>
                <div style={{ textAlign: "left" }}>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", fontWeight: 600, color: "#0C1A2E" }}>Stefano Droghei</p>
                  <div style={{ display: "flex", gap: "2px", marginTop: "2px" }}>
                    {[1,2,3,4,5].map(i => <Star key={i} size={12} style={{ color: "#A8873A", fill: "#A8873A" }} />)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── DIRITTO DI FAMIGLIA ─── */}
      <section className="section-warm" style={{ padding: "6rem 0" }}>
        <div className="container">
          <div className="grid-2-col">
            <div className="reveal" style={{ position: "relative" }}>
              <img
                src={FAMILY_IMG}
                alt="Diritto di famiglia — tutela dei minori"
                style={{ width: "100%", height: "400px", objectFit: "cover", display: "block" }}
              />
            </div>
            <div className="reveal delay-200">
              <span className="badge-gold" style={{ marginBottom: "1.25rem", display: "inline-block" }}>Diritto di Famiglia</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)", fontWeight: 600, color: "#0C1A2E", marginBottom: "1.5rem", lineHeight: 1.15 }}>
                Separazioni e tutela dei minori
              </h2>
              <span className="gold-line" />
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", color: "#374151", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Nelle cause di separazione e divorzio, l'Avv. Giacinti analizza con grande attenzione gli aspetti economici, patrimoniali e la tutela degli interessi del cliente. Particolare cura è dedicata alla tutela dei minori e al diritto di visita del genitore non collocatario.
              </p>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", color: "#374151", lineHeight: 1.8, marginBottom: "2rem" }}>
                Lo studio è aggiornato sulle novità introdotte dalla <strong>Riforma Cartabia</strong>, che ha profondamente modificato le procedure in materia di famiglia.
              </p>
              <Link href="/diritto-di-famiglia">
                <span className="btn-navy-outline">
                  Scopri di più
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CALL TO ACTION ─── */}
      <section className="section-navy" style={{ padding: "7rem 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(168,135,58,0.08) 0%, transparent 70%)" }} />
        <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <div className="reveal">
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 600, color: "#FAF8F3", marginBottom: "1.25rem", lineHeight: 1.15 }}>
              Il primo passo è il più importante.
            </h2>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.1rem", color: "rgba(250,248,243,0.7)", maxWidth: "520px", margin: "0 auto 2.5rem", lineHeight: 1.8 }}>
              Raccontami la tua situazione. Senza impegno, in totale riservatezza. Troveremo insieme la strada migliore per tutelare i tuoi diritti.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "center" }}>
              <Link href="/contatti">
                <span className="btn-gold" style={{ fontSize: "0.85rem" }}>
                  Richiedi una Consulenza
                </span>
              </Link>
              <Link href="/contatti">
                <span className="btn-white-outline" style={{ fontSize: "0.85rem" }}>
                  Prenota un Appuntamento
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTATTI RAPIDI ─── */}
      <section className="section-ivory" style={{ padding: "4rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2rem" }}>
            <div className="reveal" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ width: "48px", height: "48px", background: "#0C1A2E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <MapPin size={20} style={{ color: "#A8873A" }} />
              </div>
              <div>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A8873A", marginBottom: "0.25rem" }}>Sede</p>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", color: "#0C1A2E", fontWeight: 500 }}>Via Tiburtina 203</p>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", color: "#6B7280" }}>Frosinone (FR)</p>
              </div>
            </div>
            <div className="reveal delay-100" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ width: "48px", height: "48px", background: "#0C1A2E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Mail size={20} style={{ color: "#A8873A" }} />
              </div>
              <div>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A8873A", marginBottom: "0.25rem" }}>Email</p>
                <a href="mailto:avv.giuliagiacinti@gmail.com" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", color: "#0C1A2E", fontWeight: 500, textDecoration: "none" }}>
                  Scrivi allo studio
                </a>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", color: "#6B7280" }}>Risposta entro 24 ore</p>
              </div>
            </div>
            <div className="reveal delay-200" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ width: "48px", height: "48px", background: "#0C1A2E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Award size={20} style={{ color: "#A8873A" }} />
              </div>
              <div>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A8873A", marginBottom: "0.25rem" }}>Iscrizione</p>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", color: "#0C1A2E", fontWeight: 500 }}>Ordine Avvocati Frosinone</p>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", color: "#6B7280" }}>Avvocato abilitato</p>
              </div>
            </div>
            <div className="reveal delay-300" style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div style={{ width: "48px", height: "48px", background: "#A8873A", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <ArrowRight size={20} style={{ color: "#0C1A2E" }} />
              </div>
              <div>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A8873A", marginBottom: "0.25rem" }}>Consulenza</p>
                <Link href="/contatti">
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", color: "#0C1A2E", fontWeight: 600, cursor: "pointer", textDecoration: "underline", textDecorationColor: "#A8873A" }}>
                    Prenota ora
                  </span>
                </Link>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", color: "#6B7280" }}>Prima consulenza disponibile</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
