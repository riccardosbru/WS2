/*
 * DESIGN: Rigore Nordico con Calore Mediterraneo
 * Diritto di Famiglia: tono empatico, contenuti pratici, immagine famiglia
 */
import { useEffect } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "wouter";
import { Heart, Baby, Scale, FileText, Home, CheckCircle, ChevronRight } from "lucide-react";

const FAMILY_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663433157708/9CRHXdZPLPpsL4U8jUQNsn/family-law-ZuR28gLiYg7YGeGZgVqAbQ.webp";
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663433157708/9CRHXdZPLPpsL4U8jUQNsn/hero-bg-NuNLYR2yUtDN6d2ELbaunp.webp";

const servizi = [
  {
    icon: <Heart size={28} />,
    title: "Separazione",
    desc: "Separazione consensuale e giudiziale. Analisi degli aspetti economici, patrimoniali e tutela degli interessi del cliente. Accordi di separazione e omologazione.",
    items: ["Separazione consensuale", "Separazione giudiziale", "Accordi patrimoniali", "Assegno di mantenimento"],
  },
  {
    icon: <FileText size={28} />,
    title: "Divorzio",
    desc: "Procedura di divorzio in tutte le sue forme: congiunto, contenzioso, con negoziazione assistita. Divisione dei beni e liquidazione del regime patrimoniale.",
    items: ["Divorzio congiunto", "Divorzio contenzioso", "Negoziazione assistita", "Divisione dei beni"],
  },
  {
    icon: <Baby size={28} />,
    title: "Affidamento dei Figli",
    desc: "Tutela del superiore interesse del minore. Affidamento condiviso, esclusivo, diritto di visita e collocazione del figlio. Revisione delle condizioni.",
    items: ["Affidamento condiviso", "Affidamento esclusivo", "Diritto di visita", "Revisione condizioni"],
  },
  {
    icon: <Scale size={28} />,
    title: "Tutela dei Minori",
    desc: "Protezione giuridica dei minori in situazioni di vulnerabilità. Nomina del tutore, curatela, procedimenti di adottabilità e tutela in caso di violenza.",
    items: ["Tutela legale", "Curatela", "Adottabilità", "Protezione da violenza"],
  },
  {
    icon: <Home size={28} />,
    title: "Assegnazione Casa Familiare",
    desc: "Diritto all'assegnazione della casa familiare in presenza di figli minori. Gestione del patrimonio immobiliare durante e dopo la separazione.",
    items: ["Assegnazione casa", "Comodato d'uso", "Divisione immobili"],
  },
  {
    icon: <CheckCircle size={28} />,
    title: "Riforma Cartabia",
    desc: "Lo studio è aggiornato sulle novità introdotte dalla Riforma Cartabia (D.Lgs. 149/2022) che ha profondamente modificato le procedure in materia di famiglia.",
    items: ["Nuove procedure", "Udienza presidenziale", "Mediazione familiare", "Tempi accelerati"],
  },
];

export default function DirittoDiFamiglia() {
  useScrollReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div>
      {/* Hero */}
      <section style={{ position: "relative", padding: "7rem 0 5rem", background: "#0C1A2E", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${FAMILY_IMG})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.2 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(12,26,46,0.97) 55%, rgba(12,26,46,0.75))" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className="badge-gold" style={{ marginBottom: "1.25rem", display: "inline-block", background: "rgba(168,135,58,0.15)", borderColor: "rgba(168,135,58,0.4)", color: "#C9A84C" }}>
            Area di Attività
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 600, color: "#FAF8F3", marginBottom: "1.25rem", lineHeight: 1.1 }}>
            Diritto di Famiglia
          </h1>
          <span className="gold-line" />
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.1rem", color: "rgba(250,248,243,0.75)", maxWidth: "600px", lineHeight: 1.8 }}>
            Separazioni, divorzi, affidamento dei figli e tutela dei minori. Un supporto legale che mette al centro le persone, non solo le norme.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-ivory" style={{ padding: "6rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
            <div className="reveal">
              <span className="badge-gold" style={{ marginBottom: "1.25rem", display: "inline-block" }}>Il mio approccio</span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.25rem", fontWeight: 600, color: "#0C1A2E", marginBottom: "1.5rem", lineHeight: 1.15 }}>
                Separazione e divorzio: tutelare ciò che conta davvero
              </h2>
              <span className="gold-line" />
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", color: "#374151", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                Una separazione o un divorzio non è solo una procedura legale: è un momento di profondo cambiamento nella vita di una famiglia. Il mio approccio è quello di guidarti attraverso questo percorso con chiarezza, competenza e rispetto per la tua situazione personale.
              </p>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", color: "#374151", lineHeight: 1.85, marginBottom: "1.25rem" }}>
                Nelle cause di separazione analizzo con grande attenzione gli aspetti economici e patrimoniali, la tutela degli interessi del cliente e — soprattutto — il benessere dei figli minori.
              </p>
              <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", color: "#374151", lineHeight: 1.85, marginBottom: "2rem" }}>
                Lo studio è aggiornato sulle novità introdotte dalla <strong>Riforma Cartabia</strong> (D.Lgs. 149/2022), che ha modificato in modo significativo le procedure in materia di famiglia.
              </p>
              <Link href="/contatti">
                <span className="btn-navy-outline" style={{ display: "inline-block", textDecoration: "none" }}>Prenota una Consulenza</span>
              </Link>
            </div>
            <div className="reveal delay-200">
              <img
                src={FAMILY_IMG}
                alt="Famiglia — Diritto di famiglia Frosinone"
                style={{ width: "100%", height: "420px", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Servizi */}
      <section className="section-warm" style={{ padding: "6rem 0" }}>
        <div className="container">
          <div className="reveal" style={{ marginBottom: "3.5rem" }}>
            <span className="badge-gold" style={{ marginBottom: "1rem", display: "inline-block" }}>Servizi</span>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.5rem", fontWeight: 600, color: "#0C1A2E" }}>
              Come posso aiutarti
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {servizi.map((item, i) => (
              <div key={item.title} className={`card-gold reveal delay-${(i % 3 + 1) * 100}`}>
                <div style={{ color: "#A8873A", marginBottom: "1rem" }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", fontWeight: 600, color: "#0C1A2E", marginBottom: "0.75rem" }}>{item.title}</h3>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.88rem", color: "#6B7280", lineHeight: 1.7, marginBottom: "1.25rem" }}>{item.desc}</p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {item.items.map(sub => (
                    <li key={sub} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontFamily: "'Outfit', sans-serif", fontSize: "0.82rem", color: "#374151", padding: "0.25rem 0" }}>
                      <ChevronRight size={12} style={{ color: "#A8873A", flexShrink: 0 }} />
                      {sub}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Riforma Cartabia */}
      <section className="section-navy" style={{ padding: "5rem 0" }}>
        <div className="container">
          <div style={{ maxWidth: "760px", margin: "0 auto" }} className="reveal">
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <span className="badge-gold" style={{ marginBottom: "1rem", display: "inline-block", background: "rgba(168,135,58,0.15)", borderColor: "rgba(168,135,58,0.4)", color: "#C9A84C" }}>
                Novità legislative
              </span>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2.25rem", fontWeight: 600, color: "#FAF8F3", marginBottom: "1.25rem" }}>
                Riforma Cartabia e diritto di famiglia
              </h2>
            </div>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", color: "rgba(250,248,243,0.75)", lineHeight: 1.85, marginBottom: "1.25rem" }}>
              Il Decreto Legislativo 149/2022 (Riforma Cartabia) ha introdotto importanti modifiche alle procedure in materia di famiglia: unificazione del rito, nuova udienza presidenziale, maggiore attenzione alla mediazione familiare e tempi più rapidi per la tutela dei minori.
            </p>
            <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", color: "rgba(250,248,243,0.75)", lineHeight: 1.85, marginBottom: "2rem" }}>
              Lo studio è aggiornato su tutte le novità e può guidarti attraverso le nuove procedure con competenza e chiarezza.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <Link href="/contatti">
                <span className="btn-gold" style={{ display: "inline-block", textDecoration: "none" }}>Richiedi una Consulenza</span>
              </Link>
              <Link href="/aree-di-attivita">
                <span className="btn-white-outline" style={{ display: "inline-block", textDecoration: "none" }}>Tutte le Aree</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
