"use client";

import Image from "next/image";
import { useState } from "react";
import { supabase } from "../../lib/supabase";

const WA_URL =
  "https://wa.me/5491125716184?text=Quero%20receber%20o%20Guia%3A%205%20Erros%20que%20Fazem%20sua%20Apresenta%C3%A7%C3%A3o%20Parecer%20Amadora";

const erros = [
  {
    numero: "01",
    titulo: "Excesso de texto",
    descricao: "Quando os slides sufocam sua mensagem",
  },
  {
    numero: "02",
    titulo: "Imagens genéricas",
    descricao: "Por que fotos de banco enfraquecem sua autoridade",
  },
  {
    numero: "03",
    titulo: "Falta de consistência visual",
    descricao: 'O efeito "Frankenstein Digital"',
  },
  {
    numero: "04",
    titulo: "Hierarquia visual inexistente",
    descricao: "O olhar do cliente sem direção",
  },
  {
    numero: "05",
    titulo: "Design desconectado da sua oferta",
    descricao: "Quando o slide não vende",
  },
];

const leadMagnets = [
  {
    id: "guia-5-erros",
    nome: "Guia: 5 Erros Visuais",
    descricao:
      "Descubra os 5 erros que fazem sua apresentação parecer amadora — e como corrigir cada um.",
  },
  {
    id: "checklist-interativo",
    nome: "Checklist Interativo",
    descricao:
      "Verifique se sua apresentação passa no teste dos 5 erros visuais mais comuns.",
  },
];

function LeadForm({
  leadMagnet,
  onClose,
}: {
  leadMagnet: string;
  onClose: () => void;
}) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [erro, setErro] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEnviando(true);
    setErro("");

    const { error } = await supabase
      .from("leads")
      .insert([{ nome, email, whatsapp, lead_magnet: leadMagnet }]);

    if (error) {
      setErro("Erro ao enviar. Tente novamente.");
      setEnviando(false);
      return;
    }

    const msg = encodeURIComponent(
      `Olá! Meu nome é ${nome} e quero receber: ${leadMagnet}`
    );
    window.open(`https://wa.me/5491125716184?text=${msg}`, "_blank");
    onClose();
  }

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        padding: "24px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: "#111",
          border: "1px solid #333",
          padding: "40px",
          maxWidth: "460px",
          width: "100%",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: "none",
            border: "none",
            color: "#666",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
        >
          ✕
        </button>

        <div
          style={{
            width: "40px",
            height: "3px",
            backgroundColor: "#E8192C",
            marginBottom: "20px",
          }}
        />

        <h3
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900,
            fontSize: "1.5rem",
            textTransform: "uppercase",
            marginBottom: "8px",
            color: "#fff",
          }}
        >
          Receba o {leadMagnet}
        </h3>

        <p
          style={{
            color: "#888",
            fontSize: "0.9rem",
            fontFamily: "'DM Sans', sans-serif",
            marginBottom: "28px",
          }}
        >
          Preencha seus dados e receba o material pelo WhatsApp.
        </p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Seu nome"
            required
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
            type="tel"
            placeholder="WhatsApp (com DDD)"
            required
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
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
            <p
              style={{
                color: "#E8192C",
                fontSize: "0.85rem",
                marginBottom: "12px",
              }}
            >
              {erro}
            </p>
          )}

          <button
            type="submit"
            disabled={enviando}
            style={{
              width: "100%",
              backgroundColor: "#E8192C",
              color: "#fff",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "1.1rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "16px",
              border: "none",
              cursor: enviando ? "not-allowed" : "pointer",
              opacity: enviando ? 0.7 : 1,
              transition: "all 0.2s ease",
            }}
          >
            {enviando ? "Enviando..." : "Receber pelo WhatsApp"}
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
            Seus dados estão seguros. Sem spam.
          </p>
        </form>
      </div>
    </div>
  );
}

export default function Home() {
  const [formAberto, setFormAberto] = useState<string | null>(null);

  return (
    <main style={{ backgroundColor: "#0A0A0A", color: "#ffffff" }}>
      {/* Modal do formulário */}
      {formAberto && (
        <LeadForm
          leadMagnet={formAberto}
          onClose={() => setFormAberto(null)}
        />
      )}

      {/* ───────────────────────────────────────────
          SEÇÃO 1 — HERO
      ─────────────────────────────────────────── */}
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
            Guia Gratuito
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
            5 Erros que Fazem sua{" "}
            <span style={{ color: "#E8192C" }}>Apresentação</span> Parecer
            Amadora
          </h1>

          <p
            style={{
              fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
              color: "#b0b0b0",
              lineHeight: "1.7",
              marginBottom: "48px",
              maxWidth: "600px",
              margin: "0 auto 48px",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Descubra o que está sabotando sua autoridade em reuniões — e como
            corrigir antes da sua próxima apresentação.
          </p>

          <button
            onClick={() =>
              setFormAberto("Guia: 5 Erros que Fazem sua Apresentação Parecer Amadora")
            }
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
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#c41424";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 8px 30px rgba(232,25,44,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#E8192C";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Quero Receber o Guia Grátis
          </button>

          <p
            style={{
              marginTop: "20px",
              fontSize: "0.85rem",
              color: "#666",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            100% gratuito • Você receberá o material diretamente pelo WhatsApp
          </p>
        </div>
      </section>

      {/* ───────────────────────────────────────────
          SEÇÃO 2 — O QUE ESTÁ NO GUIA
      ─────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#111111",
          padding: "100px 24px",
        }}
      >
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
            O que está dentro do guia
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {erros.map((erro) => (
              <div
                key={erro.numero}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "28px",
                  padding: "28px 32px",
                  backgroundColor: "#0A0A0A",
                  borderLeft: "4px solid #E8192C",
                  transition: "all 0.2s ease",
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
                  {erro.numero}
                </span>

                <div>
                  <p
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.4rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.03em",
                      marginBottom: "6px",
                    }}
                  >
                    {erro.titulo}
                  </p>
                  <p
                    style={{
                      color: "#888",
                      fontSize: "1rem",
                      fontFamily: "'DM Sans', sans-serif",
                    }}
                  >
                    {erro.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "60px" }}>
            <button
              onClick={() =>
                setFormAberto("Guia: 5 Erros que Fazem sua Apresentação Parecer Amadora")
              }
              style={{
                display: "inline-block",
                backgroundColor: "#E8192C",
                color: "#fff",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "1.1rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "16px 40px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Quero Receber o Guia Grátis →
            </button>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────
          SEÇÃO 2.5 — LEAD MAGNETS EXTRAS
      ─────────────────────────────────────────── */}
      <section style={{ padding: "100px 24px" }}>
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
            Materiais Exclusivos
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {leadMagnets.map((lm) => (
              <div
                key={lm.id}
                style={{
                  backgroundColor: "#111",
                  border: "1px solid #222",
                  padding: "36px 28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "3px",
                    backgroundColor: "#E8192C",
                  }}
                />
                <h3
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "1.4rem",
                    textTransform: "uppercase",
                  }}
                >
                  {lm.nome}
                </h3>
                <p
                  style={{
                    color: "#888",
                    fontSize: "0.95rem",
                    fontFamily: "'DM Sans', sans-serif",
                    lineHeight: "1.6",
                    flex: 1,
                  }}
                >
                  {lm.descricao}
                </p>
                <button
                  onClick={() => setFormAberto(lm.nome)}
                  style={{
                    backgroundColor: "transparent",
                    border: "2px solid #E8192C",
                    color: "#E8192C",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "0.95rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "12px 24px",
                    cursor: "pointer",
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
                  Quero Este Material →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────
          SEÇÃO 3 — QUEM É A CRISTIANE
      ─────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#111111",
          padding: "100px 24px",
        }}
      >
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
            <div
              style={{
                position: "relative",
                width: "280px",
                height: "350px",
              }}
            >
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
              Quem criou este guia
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
              Especialista em apresentações de alta conversão. Minha missão é
              transformar propostas comerciais em sistemas de apresentação que
              geram ação e fechamento. Com design estratégico, roteiros claros e
              ferramentas de IA, garanto que sua mensagem não seja apenas ouvida
              — mas que impulsione seus resultados.
            </p>

            <button
              onClick={() => setFormAberto("Diagnóstico Gratuito")}
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
                background: "none",
                cursor: "pointer",
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
            </button>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────
          SEÇÃO 4 — CTA FINAL
      ─────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#0A0A0A",
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
            Sua próxima apresentação vai apenas{" "}
            <span style={{ color: "#E8192C" }}>informar</span> — ou vai{" "}
            <span style={{ color: "#E8192C" }}>fechar o negócio</span>?
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
            O design não é sobre estética. É sobre percepção de valor. Baixe o
            guia gratuito e descubra o que está custando suas vendas.
          </p>

          <button
            onClick={() =>
              setFormAberto("Guia: 5 Erros que Fazem sua Apresentação Parecer Amadora")
            }
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
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#c41424";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 8px 30px rgba(232,25,44,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#E8192C";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Quero o Guia Grátis
          </button>

          <p
            style={{
              marginTop: "20px",
              fontSize: "0.85rem",
              color: "#555",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            100% gratuito • Sem spam • Direto no WhatsApp
          </p>
        </div>
      </section>

      {/* ───────────────────────────────────────────
          RODAPÉ
      ─────────────────────────────────────────── */}
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
