"use client";

import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";


function FormCaptura() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);
  const [erro, setErro] = useState("");
  const router = useRouter();

  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const formValido = nome.length >= 2 && emailValido;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formValido) return;
    setEnviando(true);
    setErro("");

    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nome, email, whatsapp: "", lead_magnet: "Checklist Interativo" }),
    });

    if (!res.ok) {
      setErro("Erro ao enviar. Tente novamente.");
      setEnviando(false);
      return;
    }

    setEnviado(true);
    setEnviando(false);
    router.push("/checklist/fazer");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome completo"
        required
        minLength={2}
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        style={{
          width: "100%",
          padding: "14px 16px",
          marginBottom: "12px",
          backgroundColor: "#0A0A0A",
          border: "1px solid #333",
          color: "#fff",
          fontSize: "1rem",
          fontFamily: "'DM Sans', sans-serif",
          outline: "none",
        }}
      />
      <input
        type="email"
        placeholder="Seu melhor e-mail"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "100%",
          padding: "14px 16px",
          marginBottom: "20px",
          backgroundColor: "#0A0A0A",
          border: "1px solid #333",
          color: "#fff",
          fontSize: "1rem",
          fontFamily: "'DM Sans', sans-serif",
          outline: "none",
        }}
      />

      {erro && (
        <p style={{ color: "#E8192C", fontSize: "0.85rem", marginBottom: "12px" }}>
          {erro}
        </p>
      )}

      <button
        type="submit"
        disabled={!formValido || enviando}
        style={{
          width: "100%",
          backgroundColor: formValido ? "#E8192C" : "#333",
          color: "#fff",
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 900,
          fontSize: "1.1rem",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          padding: "16px",
          border: "none",
          cursor: formValido && !enviando ? "pointer" : "not-allowed",
          opacity: enviando ? 0.7 : 1,
          transition: "all 0.2s ease",
        }}
      >
        {enviando ? "Abrindo checklist..." : "Quero Fazer o Checklist"}
      </button>

      <p
        style={{
          marginTop: "12px",
          fontSize: "0.75rem",
          color: "#555",
          fontFamily: "'DM Sans', sans-serif",
          textAlign: "center",
        }}
      >
        Não enviamos spam. Seus dados estão seguros.
      </p>
    </form>
  );
}

export default function ChecklistLanding() {
  return (
    <main style={{ backgroundColor: "#0A0A0A", color: "#ffffff" }}>
      {/* ── HERO ── */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px 24px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(232,25,44,0.12) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "800px",
            width: "100%",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <div
            style={{
              display: "inline-block",
              backgroundColor: "#E8192C",
              color: "#fff",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "0.85rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              padding: "6px 18px",
              marginBottom: "28px",
            }}
          >
            Ferramenta Gratuita
          </div>

          <h1
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2.8rem, 7vw, 5rem)",
              lineHeight: "1.05",
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              marginBottom: "28px",
            }}
          >
            Sua apresentação está pronta para{" "}
            <span style={{ color: "#E8192C" }}>fechar negócio</span>?
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              color: "#b0b0b0",
              lineHeight: "1.7",
              maxWidth: "600px",
              margin: "0 auto 48px",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Responda 15 perguntas rápidas e descubra exatamente onde sua
            apresentação está perdendo autoridade — e o que corrigir antes da
            próxima reunião.
          </p>

          <a
            href="#formulario"
            style={{
              display: "inline-block",
              backgroundColor: "#E8192C",
              color: "#fff",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "1.15rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "18px 48px",
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#c41424";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(232,25,44,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#E8192C";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Fazer o Checklist Agora
          </a>

          <p
            style={{
              marginTop: "20px",
              fontSize: "0.85rem",
              color: "#666",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Gratuito • Leva menos de 3 minutos • Resultado imediato
          </p>
        </div>
      </section>

      {/* ── O QUE VOCÊ VAI DESCOBRIR ── */}
      <section style={{ backgroundColor: "#111111", padding: "100px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div
            style={{
              width: "56px",
              height: "4px",
              backgroundColor: "#E8192C",
              marginBottom: "24px",
            }}
          />

          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 5vw, 3rem)",
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              marginBottom: "60px",
            }}
          >
            Em 3 minutos você vai saber:
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {[
              {
                numero: "01",
                texto:
                  "Se a estrutura narrativa da sua apresentação conduz à decisão — ou apenas informa",
              },
              {
                numero: "02",
                texto:
                  "Quais erros visuais estão reduzindo sua autoridade sem você perceber",
              },
              {
                numero: "03",
                texto:
                  "Se você está pronto para apresentar — ou precisa de ajustes urgentes",
              },
            ].map((item) => (
              <div
                key={item.numero}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "28px",
                  padding: "28px 32px",
                  backgroundColor: "#0A0A0A",
                  borderLeft: "4px solid #E8192C",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "2.5rem",
                    color: "#E8192C",
                    lineHeight: "1",
                    flexShrink: 0,
                    minWidth: "56px",
                  }}
                >
                  {item.numero}
                </span>
                <p
                  style={{
                    color: "#b0b0b0",
                    fontSize: "1.1rem",
                    fontFamily: "'DM Sans', sans-serif",
                    lineHeight: "1.6",
                  }}
                >
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMULÁRIO DE CAPTURA ── */}
      <section id="formulario" style={{ padding: "100px 24px" }}>
        <div style={{ maxWidth: "480px", margin: "0 auto" }}>
          <div
            style={{
              width: "56px",
              height: "4px",
              backgroundColor: "#E8192C",
              marginBottom: "24px",
            }}
          />

          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
              textTransform: "uppercase",
              marginBottom: "12px",
            }}
          >
            Acesse o Checklist Agora
          </h2>

          <p
            style={{
              color: "#888",
              fontSize: "1rem",
              fontFamily: "'DM Sans', sans-serif",
              lineHeight: "1.6",
              marginBottom: "32px",
            }}
          >
            Preencha abaixo e acesse o checklist imediatamente.
          </p>

          <FormCaptura />
        </div>
      </section>

      {/* ── BIO CRISTIANE ── */}
      <section style={{ backgroundColor: "#111111", padding: "100px 24px" }}>
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            display: "flex",
            gap: "64px",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              flexShrink: 0,
              width: "280px",
              maxWidth: "100%",
              margin: "0 auto",
            }}
          >
            <div style={{ position: "relative", width: "280px", height: "350px" }}>
              <Image
                src="/cristiane.png"
                alt="Cristiane Lopes"
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
                priority
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-12px",
                  right: "-12px",
                  width: "100%",
                  height: "100%",
                  border: "3px solid #E8192C",
                  zIndex: -1,
                }}
              />
            </div>
          </div>

          <div style={{ flex: 1, minWidth: "280px" }}>
            <div
              style={{
                width: "56px",
                height: "4px",
                backgroundColor: "#E8192C",
                marginBottom: "24px",
              }}
            />

            <p
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#E8192C",
                marginBottom: "12px",
              }}
            >
              Criado por
            </p>

            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2rem, 5vw, 3rem)",
                textTransform: "uppercase",
                marginBottom: "24px",
              }}
            >
              Cristiane Lopes
            </h2>

            <p
              style={{
                color: "#b0b0b0",
                lineHeight: "1.8",
                fontSize: "1rem",
                fontFamily: "'DM Sans', sans-serif",
                marginBottom: "36px",
              }}
            >
              Especialista em apresentações de alta conversão. Já ajudei coaches,
              consultores e vendedores B2B a transformar apresentações amadoras em
              ferramentas de fechamento — com design estratégico, roteiros claros e
              inteligência artificial.
            </p>

            <a
              href="https://wa.me/5491125716184?text=Quero%20agendar%20um%20diagn%C3%B3stico"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                border: "2px solid #E8192C",
                color: "#E8192C",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "1rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "14px 32px",
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#E8192C";
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#E8192C";
              }}
            >
              Agendar um Diagnóstico
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section
        style={{
          padding: "100px 24px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 50% 100%, rgba(232,25,44,0.1) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            position: "relative",
            zIndex: 1,
          }}
        >
          <h2
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              lineHeight: "1.1",
              marginBottom: "28px",
            }}
          >
            Você tem uma apresentação chegando —{" "}
            <span style={{ color: "#E8192C" }}>ela vai fechar</span>?
          </h2>

          <p
            style={{
              color: "#888",
              fontSize: "1rem",
              lineHeight: "1.8",
              marginBottom: "48px",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Leva menos de 3 minutos. O resultado é imediato. E pode mudar o que
            acontece na sua próxima reunião.
          </p>

          <a
            href="#formulario"
            style={{
              display: "inline-block",
              backgroundColor: "#E8192C",
              color: "#fff",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "1.2rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "20px 56px",
              textDecoration: "none",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#c41424";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(232,25,44,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#E8192C";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Fazer o Checklist Agora
          </a>
        </div>
      </section>

      {/* ── RODAPÉ ── */}
      <footer
        style={{
          backgroundColor: "#0A0A0A",
          borderTop: "1px solid #1f1f1f",
          padding: "40px 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: "1.1rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          Cristiane Lopes
        </p>
        <p
          style={{
            color: "#E8192C",
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700,
            fontSize: "0.85rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            marginBottom: "24px",
          }}
        >
          Método SLIDE™
        </p>
        <p
          style={{
            color: "#444",
            fontSize: "0.8rem",
            fontFamily: "'DM Sans', sans-serif",
          }}
        >
          © {new Date().getFullYear()} Cristiane Lopes. Todos os direitos
          reservados. &nbsp;|&nbsp; Seus dados estão seguros conosco.
        </p>
      </footer>
    </main>
  );
}
