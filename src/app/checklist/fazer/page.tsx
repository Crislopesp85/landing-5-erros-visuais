"use client";

import { useState, useRef } from "react";

const WA_NUMBER = "5491125716184";

const blocos = [
  {
    titulo: "Narrativa e Estrutura",
    itens: [
      "Minha apresentação tem um objetivo único e claro definido antes de criar qualquer slide",
      "Existe uma linha condutora que vai do problema do cliente até a minha solução",
      "Cada slide comunica uma única ideia — sem acúmulo de informações",
      "Há um momento de agitação do problema antes de apresentar a solução",
      "A apresentação termina com um call to action claro e específico",
    ],
  },
  {
    titulo: "Design Visual",
    itens: [
      "Cada slide tem no máximo 30 palavras de texto corrido",
      "Uso apenas 2 fontes em toda a apresentação — uma para títulos, uma para corpo",
      "As cores seguem uma paleta consistente do primeiro ao último slide",
      "Existe hierarquia visual clara — o olho sabe onde olhar primeiro em cada slide",
      "As imagens são exclusivas ou tratadas — não são fotos genéricas de banco de imagens",
    ],
  },
  {
    titulo: "Impacto e Entrega",
    itens: [
      "O primeiro slide gera curiosidade ou impacto nos primeiros 5 segundos",
      "A apresentação pode ser compreendida sem o apresentador — os slides são autoexplicativos",
      "O design está alinhado com a identidade visual da minha marca",
      "Já ensaiei a apresentação pelo menos uma vez do início ao fim",
      "Tenho um plano claro para o que fazer se o cliente perguntar o preço antes do final",
    ],
  },
];

const resultados = [
  {
    minScore: 0,
    maxScore: 5,
    titulo: "Apresentação em Risco",
    cor: "#E8192C",
    texto:
      "Sua apresentação tem pontos críticos que podem estar custando contratos. Vamos resolver juntos?",
    cta: "Agendar Diagnóstico Gratuito",
    whatsapp: "Quero agendar um diagnóstico — minha apresentação está em risco",
  },
  {
    minScore: 6,
    maxScore: 10,
    titulo: "No Caminho Certo",
    cor: "#F5A623",
    texto:
      "Você já tem uma base sólida. Com ajustes estratégicos sua apresentação pode fechar muito mais.",
    cta: "Quero os Ajustes Finais",
    whatsapp: "Quero os ajustes finais na minha apresentação",
  },
  {
    minScore: 11,
    maxScore: 15,
    titulo: "Apresentação Forte",
    cor: "#4CAF50",
    texto:
      "Parabéns — você já aplica os princípios certos. Quer ver como levar isso ao próximo nível com o Método SLIDE™?",
    cta: "Conhecer o Método SLIDE™",
    whatsapp: "Quero conhecer o Método SLIDE™",
  },
];

function Checkbox({
  checked,
  onChange,
  label,
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
}) {
  return (
    <label
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "16px",
        padding: "16px 20px",
        cursor: "pointer",
        backgroundColor: checked ? "rgba(232,25,44,0.06)" : "transparent",
        border: "1px solid",
        borderColor: checked ? "#E8192C" : "#222",
        transition: "all 0.2s ease",
        minHeight: "44px",
      }}
      onClick={onChange}
    >
      <div
        style={{
          width: "24px",
          height: "24px",
          minWidth: "24px",
          border: "2px solid",
          borderColor: checked ? "#E8192C" : "#444",
          backgroundColor: checked ? "#E8192C" : "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.15s ease",
          marginTop: "2px",
        }}
      >
        {checked && (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M2 7L5.5 10.5L12 3.5"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <span
        style={{
          color: checked ? "#fff" : "#b0b0b0",
          fontSize: "1rem",
          fontFamily: "'DM Sans', sans-serif",
          lineHeight: "1.5",
          transition: "color 0.15s ease",
        }}
      >
        {label}
      </span>
    </label>
  );
}

export default function ChecklistInterativo() {
  const [marcados, setMarcados] = useState<Set<string>>(new Set());
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const resultadoRef = useRef<HTMLDivElement>(null);

  const totalMarcados = marcados.size;

  function toggleItem(item: string) {
    setMarcados((prev) => {
      const next = new Set(prev);
      if (next.has(item)) next.delete(item);
      else next.add(item);
      return next;
    });
    setMostrarResultado(false);
  }

  function verResultado() {
    setMostrarResultado(true);
    setTimeout(() => {
      resultadoRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }

  const resultado = resultados.find(
    (r) => totalMarcados >= r.minScore && totalMarcados <= r.maxScore
  );

  return (
    <main style={{ backgroundColor: "#0A0A0A", color: "#ffffff" }}>
      {/* ── HEADER ── */}
      <section style={{ padding: "60px 24px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
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
            Checklist Interativo
          </div>

          <h1
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 6vw, 3.5rem)",
              lineHeight: "1.1",
              textTransform: "uppercase",
              letterSpacing: "0.02em",
              marginBottom: "20px",
            }}
          >
            Sua Apresentação Está Pronta para{" "}
            <span style={{ color: "#E8192C" }}>Fechar Negócio</span>?
          </h1>

          <p
            style={{
              fontSize: "1.1rem",
              color: "#888",
              fontFamily: "'DM Sans', sans-serif",
              lineHeight: "1.6",
            }}
          >
            Marque cada item que sua apresentação já cumpre. Ao final, descubra
            seu diagnóstico personalizado.
          </p>
        </div>
      </section>

      {/* ── CONTADOR DE PROGRESSO ── */}
      <div
        style={{
          position: "sticky",
          top: 0,
          backgroundColor: "#111",
          borderBottom: "1px solid #222",
          padding: "16px 24px",
          zIndex: 100,
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "8px",
            }}
          >
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#888",
              }}
            >
              Progresso
            </span>
            <span
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "1.1rem",
                color: "#E8192C",
              }}
            >
              {totalMarcados} de 15
            </span>
          </div>
          <div
            style={{
              width: "100%",
              height: "4px",
              backgroundColor: "#222",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${(totalMarcados / 15) * 100}%`,
                height: "100%",
                backgroundColor: "#E8192C",
                transition: "width 0.3s ease",
              }}
            />
          </div>
        </div>
      </div>

      {/* ── BLOCOS DO CHECKLIST ── */}
      <section style={{ padding: "40px 24px 60px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          {blocos.map((bloco, blocoIdx) => (
            <div key={blocoIdx} style={{ marginBottom: "48px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "1.5rem",
                    color: "#E8192C",
                  }}
                >
                  {String(blocoIdx + 1).padStart(2, "0")}
                </span>
                <h2
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "1.4rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                  }}
                >
                  {bloco.titulo}
                </h2>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {bloco.itens.map((item) => (
                  <Checkbox
                    key={item}
                    checked={marcados.has(item)}
                    onChange={() => toggleItem(item)}
                    label={item}
                  />
                ))}
              </div>
            </div>
          ))}

          {/* ── BOTÃO VER RESULTADO ── */}
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <button
              onClick={verResultado}
              style={{
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
              Ver Meu Resultado
            </button>
          </div>
        </div>
      </section>

      {/* ── RESULTADO ── */}
      {mostrarResultado && resultado && (
        <section
          ref={resultadoRef}
          style={{
            backgroundColor: "#111",
            padding: "80px 24px",
            textAlign: "center",
            animation: "fadeIn 0.5s ease",
          }}
        >
          <style>{`@keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }`}</style>

          <div style={{ maxWidth: "600px", margin: "0 auto" }}>
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                border: `3px solid ${resultado.cor}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: "2rem",
                  color: resultado.cor,
                }}
              >
                {totalMarcados}
              </span>
            </div>

            <p
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "0.85rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: resultado.cor,
                marginBottom: "12px",
              }}
            >
              {totalMarcados} de 15 itens
            </p>

            <h2
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2rem, 5vw, 3rem)",
                textTransform: "uppercase",
                marginBottom: "20px",
                color: resultado.cor,
              }}
            >
              {resultado.titulo}
            </h2>

            <p
              style={{
                color: "#b0b0b0",
                fontSize: "1.1rem",
                fontFamily: "'DM Sans', sans-serif",
                lineHeight: "1.7",
                marginBottom: "40px",
              }}
            >
              {resultado.texto}
            </p>

            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(resultado.whatsapp)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                backgroundColor: resultado.cor,
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
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = `0 8px 30px ${resultado.cor}66`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {resultado.cta}
            </a>
          </div>
        </section>
      )}

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
          reservados.
        </p>
      </footer>
    </main>
  );
}
