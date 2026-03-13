import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#FAF8F3" }}>
      <div style={{ textAlign: "center", padding: "4rem 2rem" }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "7rem", fontWeight: 700, color: "rgba(168,135,58,0.15)", lineHeight: 1 }}>
          404
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 600, color: "#0C1A2E", marginBottom: "1rem" }}>
          Pagina non trovata
        </h1>
        <p style={{ fontFamily: "'Outfit', sans-serif", fontSize: "1rem", color: "#6B7280", maxWidth: "400px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
          La pagina che stai cercando non esiste o è stata spostata.
        </p>
        <Link href="/">
          <span className="btn-navy-outline" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
            <ArrowLeft size={16} />
            Torna alla Home
          </span>
        </Link>
      </div>
    </div>
  );
}
