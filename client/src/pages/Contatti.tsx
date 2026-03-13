/*
 * DESIGN: Rigore Nordico con Calore Mediterraneo
 * Contatti: form elegante, info studio, mappa Google Maps
 */
import { useEffect, useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { MapPin, Mail, Clock, Send, CheckCircle, AlertCircle } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663433157708/9CRHXdZPLPpsL4U8jUQNsn/hero-bg-NuNLYR2yUtDN6d2ELbaunp.webp";

export default function Contatti() {
  useScrollReveal();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  const [form, setForm] = useState({ nome: "", email: "", telefono: "", oggetto: "", messaggio: "", privacy: false });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.nome || !form.email || !form.messaggio) {
      setError("Compila tutti i campi obbligatori.");
      return;
    }
    if (!form.privacy) {
      setError("Devi accettare la privacy policy per procedere.");
      return;
    }
    setError("");
    setSubmitted(true);
  };

  return (
    <div>
      {/* Hero */}
      <section style={{ position: "relative", padding: "7rem 0 5rem", background: "#0C1A2E", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: `url(${HERO_BG})`, backgroundSize: "cover", backgroundPosition: "center", opacity: 0.12 }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(12,26,46,0.98) 50%, rgba(12,26,46,0.7))" }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <span className="badge-gold" style={{ marginBottom: "1.25rem", display: "inline-block", background: "rgba(168,135,58,0.15)", borderColor: "rgba(168,135,58,0.4)", color: "#C9A84C" }}>
            Contattaci
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 600, color: "#FAF8F3", marginBottom: "1.25rem", lineHeight: 1.1 }}>
            Contatti
          </h1>
          <span className="gold-line" />
          <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1.1rem", color: "rgba(250,248,243,0.75)", maxWidth: "560px", lineHeight: 1.8 }}>
            Scrivi allo studio per una prima consulenza. Rispondo entro 24 ore lavorative, in totale riservatezza.
          </p>
        </div>
      </section>

      {/* Contatti + Form */}
      <section className="section-ivory" style={{ padding: "6rem 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "5rem", alignItems: "start" }}>

            {/* Info */}
            <div className="reveal">
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, color: "#0C1A2E", marginBottom: "2rem" }}>
                Informazioni dello Studio
              </h2>

              <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ width: "44px", height: "44px", background: "#0C1A2E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <MapPin size={18} style={{ color: "#A8873A" }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A8873A", marginBottom: "0.4rem" }}>Sede</p>
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: "#0C1A2E", fontWeight: 500 }}>Via Tiburtina 203</p>
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", color: "#6B7280" }}>Frosinone (FR)</p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ width: "44px", height: "44px", background: "#0C1A2E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Mail size={18} style={{ color: "#A8873A" }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A8873A", marginBottom: "0.4rem" }}>Email</p>
                    <a href="mailto:avv.giuliagiacinti@gmail.com" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: "#0C1A2E", fontWeight: 500, textDecoration: "none" }}>
                      avv.giuliagiacinti@gmail.com
                    </a>
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", color: "#6B7280" }}>Risposta entro 24 ore lavorative</p>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ width: "44px", height: "44px", background: "#0C1A2E", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Clock size={18} style={{ color: "#A8873A" }} />
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#A8873A", marginBottom: "0.4rem" }}>Orari</p>
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: "#0C1A2E", fontWeight: 500 }}>Lun – Ven: 9:00 – 18:00</p>
                    <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", color: "#6B7280" }}>Appuntamenti su prenotazione</p>
                  </div>
                </div>
              </div>

              {/* Gratuito patrocinio note */}
              <div style={{ marginTop: "2.5rem", padding: "1.5rem", background: "rgba(168,135,58,0.06)", border: "1px solid rgba(168,135,58,0.2)" }}>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", color: "#374151", lineHeight: 1.7 }}>
                  <strong style={{ color: "#A8873A" }}>Gratuito Patrocinio:</strong> Lo studio assiste anche clienti ammessi al gratuito patrocinio. Contattaci per verificare i requisiti di accesso.
                </p>
              </div>

              {/* Iscrizione ordine */}
              <div style={{ marginTop: "1.5rem", padding: "1.5rem", background: "#0C1A2E" }}>
                <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.8rem", color: "rgba(250,248,243,0.6)", lineHeight: 1.6 }}>
                  Avv. Giulia Giacinti — iscritta all'Ordine degli Avvocati di Frosinone. Avvocato Senior presso Studio Legale Grieco.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="reveal delay-200">
              {submitted ? (
                <div style={{ textAlign: "center", padding: "4rem 2rem", background: "white", border: "1px solid rgba(168,135,58,0.2)" }}>
                  <CheckCircle size={48} style={{ color: "#A8873A", margin: "0 auto 1.5rem" }} />
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.75rem", fontWeight: 600, color: "#0C1A2E", marginBottom: "1rem" }}>
                    Messaggio inviato
                  </h3>
                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.95rem", color: "#6B7280", lineHeight: 1.7 }}>
                    Grazie per averci contattato. L'Avv. Giacinti risponderà entro 24 ore lavorative.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ background: "white", padding: "2.5rem", border: "1px solid rgba(12,26,46,0.08)" }}>
                  <div style={{ height: "3px", background: "linear-gradient(90deg, #A8873A, #C9A84C)", marginBottom: "2rem" }} />
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", fontWeight: 600, color: "#0C1A2E", marginBottom: "1.75rem" }}>
                    Richiedi una Consulenza
                  </h3>

                  {error && (
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1rem", background: "rgba(192,57,43,0.08)", border: "1px solid rgba(192,57,43,0.2)", marginBottom: "1.5rem" }}>
                      <AlertCircle size={16} style={{ color: "#C0392B", flexShrink: 0 }} />
                      <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", color: "#C0392B" }}>{error}</p>
                    </div>
                  )}

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }}>
                    <div>
                      <label style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6B7280", display: "block", marginBottom: "0.4rem" }}>
                        Nome e Cognome *
                      </label>
                      <input
                        type="text"
                        name="nome"
                        value={form.nome}
                        onChange={handleChange}
                        placeholder="Mario Rossi"
                        style={{ width: "100%", padding: "0.75rem 1rem", border: "1px solid rgba(12,26,46,0.15)", fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", color: "#0C1A2E", outline: "none", background: "#FAF8F3", boxSizing: "border-box" }}
                      />
                    </div>
                    <div>
                      <label style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6B7280", display: "block", marginBottom: "0.4rem" }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="mario@email.it"
                        style={{ width: "100%", padding: "0.75rem 1rem", border: "1px solid rgba(12,26,46,0.15)", fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", color: "#0C1A2E", outline: "none", background: "#FAF8F3", boxSizing: "border-box" }}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: "1rem" }}>
                    <label style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6B7280", display: "block", marginBottom: "0.4rem" }}>
                      Telefono
                    </label>
                    <input
                      type="tel"
                      name="telefono"
                      value={form.telefono}
                      onChange={handleChange}
                      placeholder="+39 333 000 0000"
                      style={{ width: "100%", padding: "0.75rem 1rem", border: "1px solid rgba(12,26,46,0.15)", fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", color: "#0C1A2E", outline: "none", background: "#FAF8F3", boxSizing: "border-box" }}
                    />
                  </div>

                  <div style={{ marginBottom: "1rem" }}>
                    <label style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6B7280", display: "block", marginBottom: "0.4rem" }}>
                      Area di interesse
                    </label>
                    <select
                      name="oggetto"
                      value={form.oggetto}
                      onChange={handleChange}
                      style={{ width: "100%", padding: "0.75rem 1rem", border: "1px solid rgba(12,26,46,0.15)", fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", color: form.oggetto ? "#0C1A2E" : "#9CA3AF", outline: "none", background: "#FAF8F3", boxSizing: "border-box" }}
                    >
                      <option value="">Seleziona un'area...</option>
                      <option value="penale">Diritto Penale</option>
                      <option value="famiglia">Diritto di Famiglia</option>
                      <option value="codice-rosso">Codice Rosso</option>
                      <option value="civile">Diritto Civile</option>
                      <option value="lavoro">Diritto del Lavoro</option>
                      <option value="altro">Altro</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: "1.5rem" }}>
                    <label style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: "#6B7280", display: "block", marginBottom: "0.4rem" }}>
                      Descrivi brevemente la tua situazione *
                    </label>
                    <textarea
                      name="messaggio"
                      value={form.messaggio}
                      onChange={handleChange}
                      rows={5}
                      placeholder="Descrivi la tua situazione in modo sintetico. Tutte le informazioni sono trattate con la massima riservatezza."
                      style={{ width: "100%", padding: "0.75rem 1rem", border: "1px solid rgba(12,26,46,0.15)", fontFamily: "'Outfit', sans-serif", fontSize: "0.9rem", color: "#0C1A2E", outline: "none", background: "#FAF8F3", resize: "vertical", boxSizing: "border-box", lineHeight: 1.6 }}
                    />
                  </div>

                  <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", marginBottom: "1.5rem" }}>
                    <input
                      type="checkbox"
                      name="privacy"
                      id="privacy"
                      checked={form.privacy}
                      onChange={handleChange}
                      style={{ marginTop: "3px", accentColor: "#A8873A", flexShrink: 0 }}
                    />
                    <label htmlFor="privacy" style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.8rem", color: "#6B7280", lineHeight: 1.6, cursor: "pointer" }}>
                      Ho letto e accetto la privacy policy. Acconsento al trattamento dei miei dati personali per ricevere assistenza legale dallo Studio Legale Avv. Giulia Giacinti. *
                    </label>
                  </div>

                  <button type="submit" className="btn-gold" style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}>
                    <Send size={16} />
                    Invia Richiesta di Consulenza
                  </button>

                  <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.75rem", color: "#9CA3AF", textAlign: "center", marginTop: "1rem" }}>
                    I tuoi dati sono trattati con la massima riservatezza nel rispetto del GDPR.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Mappa */}
      <section style={{ height: "400px", position: "relative" }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2977.8!2d13.3414!3d41.6395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13250b1b6b6b6b6b%3A0x0!2sVia+Tiburtina+203%2C+Frosinone+FR!5e0!3m2!1sit!2sit!4v1234567890"
          width="100%"
          height="400"
          style={{ border: 0, display: "block", filter: "grayscale(30%) contrast(1.1)" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Studio Legale Avv. Giulia Giacinti — Via Tiburtina 203, Frosinone"
        />
        <div style={{ position: "absolute", bottom: "2rem", left: "50%", transform: "translateX(-50%)", background: "#0C1A2E", padding: "1rem 1.5rem", display: "flex", alignItems: "center", gap: "0.75rem", boxShadow: "0 10px 30px rgba(12,26,46,0.3)" }}>
          <MapPin size={16} style={{ color: "#A8873A" }} />
          <span style={{ fontFamily: "'Outfit', sans-serif", fontSize: "0.85rem", color: "#FAF8F3", fontWeight: 500 }}>
            Via Tiburtina 203, Frosinone (FR)
          </span>
        </div>
      </section>
    </div>
  );
}
