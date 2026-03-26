"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const WA_DIAGNOSTICO =
  "https://wa.me/5491125716184?text=Quero%20agendar%20um%20diagn%C3%B3stico%20gratuito%20da%20minha%20apresenta%C3%A7%C3%A3o";
const WA_SERVICO =
  "https://wa.me/5491125716184?text=Quero%20saber%20mais%20sobre%20o%20servi%C3%A7o%20Done-for-You";

const pilares = [
  {
    letra: "S",
    nome: "Situação",
    desc: "Define o contexto antes de criar qualquer slide. Quem é o público? Qual o objetivo? O que ele precisa sentir ao final?",
  },
  {
    letra: "L",
    nome: "Lógica Narrativa",
    desc: "Estrutura o roteiro no arco Problema → Agitação → Solução → Prova → Oferta. A apresentação vira uma história que conduz à decisão.",
  },
  {
    letra: "I",
    nome: "Identidade Visual",
    desc: "Hierarquia visual, espaço em branco e consistência. Três princípios que qualquer profissional consegue aplicar — sem ser designer.",
  },
  {
    letra: "D",
    nome: "Digital com IA",
    desc: "Ferramentas de inteligência artificial para estruturar conteúdo, gerar imagens e montar slides em fração do tempo normal.",
  },
  {
    letra: "E",
    nome: "Entrega com Impacto",
    desc: "Tom de voz, ritmo, pausas estratégicas e call to action. A apresentação pronta só funciona se for bem entregue.",
  },
];

const paraQuem = [
  "Você vende serviços, programas ou consultorias de alto valor e apresenta para fechar",
  "Você faz webinars, pitches ou reuniões comerciais com frequência",
  "Seus slides não acompanham a qualidade do que você entrega",
  "Você gasta horas montando apresentações sem um método claro",
  "Você quer ser percebido como referência antes mesmo de abrir a boca",
  "Você tem uma apresentação importante chegando e precisa que ela feche",
];

const naoParaQuem = [
  "Você está começando do zero e ainda não tem um serviço definido",
  "Você não usa apresentações como ferramenta de comunicação ou vendas",
];

const entregaveis = [
  "Call de briefing estratégico — objetivo, público, mensagem-chave e oferta",
  "Roteiro narrativo completo com estrutura persuasiva",
  "Design profissional dos slides com sua identidade visual",
  "Uso de IA para otimizar conteúdo, textos e imagens",
  "2 rodadas de revisão incluídas",
  "Entrega dos arquivos finais em PowerPoint, Canva ou PDF",
  "Orientações de como apresentar o conteúdo",
];

const depoimentos = [
  {
    iniciais: "AJ",
    nome: "Axel Jutoran",
    cargo: "Speaker e Fundador da \"Fuerza de la IA\"",
    texto:
      "Cris me ajudou a construir e melhorar minhas apresentações para conquistar clientes. Não apenas com um design simples, limpo e convincente que comunica o que quero, mas também me ajudou a pensar na estrutura das minhas apresentações para que o fluxo da história seja mais simples e eficaz. Sem dúvida, continuaremos a trabalhar juntos!",
  },
  {
    iniciais: "RS",
    nome: "Regiane Siqueira",
    cargo: "Diretora de Operações na Zooba Live MKT",
    texto:
      "Sempre que contratamos a Cris para nos ajudar nos projetos, temos a certeza de que teremos uma entrega com muita qualidade. Entre suas inúmeras habilidades, destaco a facilidade no entendimento do briefing, a pontualidade para cumprir prazos e o cuidado com o conteúdo. Ela sempre agrega seu conhecimento, propondo ideias, textos e imagens, enriquecendo ainda mais nosso trabalho.",
  },
];

// Styles
const tag = (text: string) => (
  <div
    style={{
      display: "inline-block",
      backgroundColor: "#E8192C",
      color: "#fff",
      fontFamily: "'Barlow Condensed', sans-serif",
      fontWeight: 900,
      fontSize: "0.8rem",
      letterSpacing: "0.15em",
      textTransform: "uppercase",
      padding: "6px 18px",
      marginBottom: "24px",
    }}
  >
    {text}
  </div>
);

const sectionTitle = {
  fontFamily: "'Barlow Condensed', sans-serif",
  fontWeight: 900,
  fontSize: "clamp(2rem, 5vw, 3.2rem)",
  textTransform: "uppercase" as const,
  letterSpacing: "0.02em",
  lineHeight: "1.1",
  marginBottom: "24px",
};

const bodyText = {
  fontSize: "1.05rem",
  lineHeight: "1.8",
  fontFamily: "'DM Sans', sans-serif",
};

export default function Home() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuAberto(false);
  }

  const menuItems = [
    { label: "Método", id: "metodo" },
    { label: "Para Quem É", id: "para-quem" },
    { label: "Serviço", id: "servico" },
    { label: "Materiais Gratuitos", id: "materiais" },
    { label: "Depoimentos", id: "depoimentos" },
  ];

  return (
    <main style={{ backgroundColor: "#0A0A0A", color: "#ffffff" }}>
      {/* ═══════════════════════════════════════════
          SEÇÃO 01 — HEADER FIXO
      ═══════════════════════════════════════════ */}
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: scrolled ? "rgba(10,10,10,0.98)" : "rgba(10,10,10,0.7)",
          backdropFilter: "blur(12px)",
          borderBottom: scrolled ? "1px solid #1f1f1f" : "1px solid transparent",
          transition: "all 0.3s ease",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "64px",
          }}
        >
          {/* Logo */}
          <a
            href="/"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "1.1rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "#fff",
              textDecoration: "none",
            }}
          >
            Cristiane Lopes
          </a>

          {/* Menu Desktop */}
          <nav
            style={{
              display: "flex",
              gap: "28px",
              alignItems: "center",
            }}
            className="desktop-nav"
          >
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                style={{
                  background: "none",
                  border: "none",
                  color: "#b0b0b0",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.85rem",
                  cursor: "pointer",
                  padding: "4px 0",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#b0b0b0")}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Header */}
          <a
            href={WA_DIAGNOSTICO}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#E8192C",
              color: "#fff",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "10px 20px",
              textDecoration: "none",
              transition: "background 0.2s",
              whiteSpace: "nowrap",
            }}
          >
            Agendar Diagnóstico
          </a>

          {/* Hamburger Mobile */}
          <button
            onClick={() => setMenuAberto(!menuAberto)}
            className="mobile-menu-btn"
            style={{
              display: "none",
              background: "none",
              border: "none",
              color: "#fff",
              fontSize: "1.5rem",
              cursor: "pointer",
              padding: "8px",
            }}
          >
            {menuAberto ? "✕" : "☰"}
          </button>
        </div>

        {/* Menu Mobile */}
        {menuAberto && (
          <div
            style={{
              backgroundColor: "#0A0A0A",
              borderTop: "1px solid #1f1f1f",
              padding: "16px 24px",
            }}
            className="mobile-menu"
          >
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                style={{
                  display: "block",
                  width: "100%",
                  background: "none",
                  border: "none",
                  color: "#b0b0b0",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1rem",
                  cursor: "pointer",
                  padding: "12px 0",
                  textAlign: "left",
                  borderBottom: "1px solid #1a1a1a",
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ═══════════════════════════════════════════
          SEÇÃO 02 — HERO
      ═══════════════════════════════════════════ */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          padding: "120px 24px 80px",
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
            maxWidth: "1200px",
            margin: "0 auto",
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "64px",
            flexWrap: "wrap",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Texto */}
          <div style={{ flex: 1, minWidth: "320px" }}>
            {tag("Método SLIDE™")}

            <h1
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.8rem, 6vw, 4.5rem)",
                lineHeight: "1.05",
                textTransform: "uppercase",
                letterSpacing: "0.02em",
                marginBottom: "28px",
              }}
            >
              Sua apresentação{" "}
              <span style={{ color: "#E8192C" }}>fala por você</span> antes da
              sua primeira palavra.
            </h1>

            <p
              style={{
                ...bodyText,
                color: "#b0b0b0",
                marginBottom: "40px",
                maxWidth: "540px",
              }}
            >
              O sistema de 5 passos para transformar qualquer apresentação em uma
              ferramenta de persuasão — combinando storytelling estratégico, design
              profissional e inteligência artificial.
            </p>

            <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
              <a
                href={WA_DIAGNOSTICO}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-block",
                  backgroundColor: "#E8192C",
                  color: "#fff",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: "1rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "18px 40px",
                  textDecoration: "none",
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
                Agendar Meu Diagnóstico Gratuito
              </a>

              <button
                onClick={() => scrollTo("materiais")}
                style={{
                  display: "inline-block",
                  border: "2px solid #333",
                  color: "#b0b0b0",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  padding: "16px 32px",
                  background: "none",
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#E8192C";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#333";
                  e.currentTarget.style.color = "#b0b0b0";
                }}
              >
                Materiais Gratuitos →
              </button>
            </div>

            <p
              style={{
                marginTop: "20px",
                fontSize: "0.8rem",
                color: "#555",
                fontFamily: "'DM Sans', sans-serif",
              }}
            >
              Diagnóstico gratuito • Sem compromisso • Resposta em até 24h
            </p>
          </div>

          {/* Imagem Hero */}
          <div
            style={{
              flex: "0 0 auto",
              width: "500px",
              maxWidth: "100%",
              margin: "0 auto",
            }}
          >
            <div style={{ position: "relative", width: "100%", height: "500px" }}>
              <Image
                src="/hero-slide.png"
                alt="Método SLIDE™"
                fill
                style={{ objectFit: "contain" }}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SEÇÃO 03 — O PROBLEMA
      ═══════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#0A0A0A", padding: "100px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {tag("O Problema")}

          <h2 style={{ ...sectionTitle, marginBottom: "32px" }}>
            Você prepara, pratica e apresenta.{" "}
            <span style={{ color: "#E8192C" }}>E mesmo assim não fecha.</span>
          </h2>

          <p style={{ ...bodyText, color: "#b0b0b0", marginBottom: "40px" }}>
            A maioria dos profissionais perde contratos, credibilidade e
            oportunidades não por falta de conteúdo — mas por apresentações que
            informam sem persuadir. Slides cheios de texto. Imagens genéricas.
            Design inconsistente. Narrativa sem direção. O resultado: o cliente
            ouve tudo e não decide.
          </p>

          <div
            style={{
              borderLeft: "4px solid #E8192C",
              paddingLeft: "24px",
            }}
          >
            <p
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
                lineHeight: "1.4",
                color: "#fff",
              }}
            >
              O design não é sobre estética. É sobre percepção de valor. Seu slide
              fala por você antes mesmo da sua primeira palavra.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SEÇÃO 04 — O MÉTODO SLIDE™
      ═══════════════════════════════════════════ */}
      <section
        id="metodo"
        style={{ backgroundColor: "#F5F5F3", color: "#0A0A0A", padding: "100px 24px" }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          {tag("O Método")}

          <h2 style={{ ...sectionTitle, color: "#0A0A0A" }}>
            Um sistema. Cinco passos. Uma apresentação que fecha.
          </h2>

          <p
            style={{
              ...bodyText,
              color: "#555",
              marginBottom: "60px",
              maxWidth: "700px",
            }}
          >
            O Método SLIDE™ não ensina ferramentas — ensina um sistema completo de
            comunicação persuasiva aplicado a apresentações.
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {pilares.map((p) => (
              <div
                key={p.letra}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "24px",
                  padding: "32px",
                  backgroundColor: "#fff",
                  borderLeft: "5px solid #E8192C",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: "3rem",
                    color: "#E8192C",
                    lineHeight: "1",
                    flexShrink: 0,
                    minWidth: "48px",
                  }}
                >
                  {p.letra}
                </span>
                <div>
                  <p
                    style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 900,
                      fontSize: "1.3rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.03em",
                      marginBottom: "8px",
                      color: "#0A0A0A",
                    }}
                  >
                    {p.nome}
                  </p>
                  <p
                    style={{
                      ...bodyText,
                      color: "#555",
                    }}
                  >
                    {p.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "48px" }}>
            <button
              onClick={() => scrollTo("servico")}
              style={{
                backgroundColor: "#E8192C",
                color: "#fff",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "1rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "16px 40px",
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#c41424";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#E8192C";
              }}
            >
              Quero Aplicar o Método →
            </button>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SEÇÃO 05 — PARA QUEM É
      ═══════════════════════════════════════════ */}
      <section
        id="para-quem"
        style={{ backgroundColor: "#0A0A0A", padding: "100px 24px" }}
      >
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {tag("Para Quem É")}

          <h2 style={{ ...sectionTitle, marginBottom: "48px" }}>
            O Método SLIDE™ foi criado para você se:
          </h2>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "48px" }}
          >
            {paraQuem.map((item, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "16px",
                  padding: "20px 24px",
                  backgroundColor: "#111",
                  borderLeft: "4px solid #E8192C",
                }}
              >
                <span style={{ color: "#E8192C", fontSize: "1.2rem", flexShrink: 0 }}>
                  ✓
                </span>
                <p style={{ ...bodyText, color: "#ccc" }}>{item}</p>
              </div>
            ))}
          </div>

          <h3
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "1.3rem",
              textTransform: "uppercase",
              color: "#555",
              marginBottom: "20px",
            }}
          >
            Não é para você se:
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {naoParaQuem.map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "16px", padding: "16px 24px" }}>
                <span style={{ color: "#444", fontSize: "1.2rem", flexShrink: 0 }}>
                  ✕
                </span>
                <p style={{ ...bodyText, color: "#555" }}>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SEÇÃO 06 — SERVIÇO DONE-FOR-YOU
      ═══════════════════════════════════════════ */}
      <section
        id="servico"
        style={{ backgroundColor: "#F5F5F3", color: "#0A0A0A", padding: "100px 24px" }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {tag("Feito Para Você")}

          <h2 style={{ ...sectionTitle, color: "#0A0A0A" }}>
            Você cuida do negócio. Eu crio a apresentação.
          </h2>

          <p style={{ ...bodyText, color: "#555", marginBottom: "16px", maxWidth: "700px" }}>
            Para profissionais com uma apresentação crítica que querem o resultado
            sem precisar aprender o método.
          </p>

          <p
            style={{
              ...bodyText,
              color: "#888",
              marginBottom: "40px",
              fontStyle: "italic",
            }}
          >
            Pitch para investidor • Webinar de lançamento • Proposta de alto valor •
            Apresentação de vendas corporativa
          </p>

          {/* Como funciona */}
          <div
            style={{
              display: "flex",
              gap: "8px",
              alignItems: "center",
              flexWrap: "wrap",
              marginBottom: "40px",
              padding: "24px",
              backgroundColor: "#fff",
              borderLeft: "5px solid #E8192C",
            }}
          >
            {[
              "Briefing estratégico",
              "Roteiro narrativo",
              "Design dos slides",
              "Entrega pronta",
            ].map((step, i) => (
              <span key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <span
                  style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    color: "#0A0A0A",
                  }}
                >
                  {step}
                </span>
                {i < 3 && <span style={{ color: "#E8192C", fontSize: "1.2rem" }}>→</span>}
              </span>
            ))}
          </div>

          {/* Entregáveis */}
          <h3
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "1.2rem",
              textTransform: "uppercase",
              color: "#0A0A0A",
              marginBottom: "20px",
            }}
          >
            O que está incluído:
          </h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
            {entregaveis.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span style={{ color: "#E8192C", flexShrink: 0, marginTop: "2px" }}>▸</span>
                <p style={{ ...bodyText, color: "#333" }}>{item}</p>
              </div>
            ))}
          </div>

          {/* Garantia */}
          <div
            style={{
              padding: "20px 24px",
              backgroundColor: "#eee",
              borderLeft: "4px solid #E8192C",
              marginBottom: "32px",
            }}
          >
            <p style={{ ...bodyText, color: "#333" }}>
              <strong>Garantia:</strong> Dois rounds de revisão incluídos. Se após as
              revisões não estiver satisfeito, continuamos até entregar o resultado
              prometido.
            </p>
          </div>

          {/* Investimento */}
          <p
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700,
              fontSize: "1.3rem",
              color: "#0A0A0A",
              marginBottom: "32px",
            }}
          >
            Investimento: <span style={{ color: "#E8192C" }}>sob consulta</span>{" "}
            — conforme complexidade do projeto
          </p>

          <a
            href={WA_SERVICO}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              backgroundColor: "#E8192C",
              color: "#fff",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "1.1rem",
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
            Quero Minha Apresentação →
          </a>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SEÇÃO 07 — MATERIAIS GRATUITOS
      ═══════════════════════════════════════════ */}
      <section
        id="materiais"
        style={{ backgroundColor: "#0A0A0A", padding: "100px 24px" }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {tag("Materiais Gratuitos")}

          <h2 style={{ ...sectionTitle, marginBottom: "16px" }}>
            Comece agora — sem custo
          </h2>

          <p style={{ ...bodyText, color: "#888", marginBottom: "48px", maxWidth: "600px" }}>
            Dois materiais gratuitos para você descobrir o que está sabotando sua
            autoridade em reuniões.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "24px",
            }}
          >
            {/* Card Guia */}
            <div
              style={{
                backgroundColor: "#111",
                border: "1px solid #222",
                padding: "40px 28px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  backgroundColor: "#E8192C",
                  color: "#fff",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: "0.7rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  padding: "4px 12px",
                  alignSelf: "flex-start",
                }}
              >
                Guia Gratuito
              </div>
              <h3
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: "1.4rem",
                  textTransform: "uppercase",
                }}
              >
                5 Erros que Fazem sua Apresentação Parecer Amadora
              </h3>
              <p style={{ color: "#888", ...bodyText, flex: 1 }}>
                Descubra o que está tirando sua autoridade em reuniões — e como
                corrigir antes da próxima apresentação.
              </p>
              <p style={{ color: "#555", fontSize: "0.8rem", fontFamily: "'DM Sans', sans-serif" }}>
                PDF enviado pelo WhatsApp
              </p>
              <a
                href="/guia"
                style={{
                  display: "inline-block",
                  backgroundColor: "#E8192C",
                  color: "#fff",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: "0.9rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "14px 24px",
                  textDecoration: "none",
                  textAlign: "center",
                  transition: "background 0.2s",
                }}
              >
                Baixar Grátis →
              </a>
            </div>

            {/* Card Checklist */}
            <div
              style={{
                backgroundColor: "#111",
                border: "1px solid #222",
                padding: "40px 28px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  backgroundColor: "#E8192C",
                  color: "#fff",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: "0.7rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  padding: "4px 12px",
                  alignSelf: "flex-start",
                }}
              >
                Ferramenta Gratuita
              </div>
              <h3
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: "1.4rem",
                  textTransform: "uppercase",
                }}
              >
                Checklist: Sua Apresentação Está Pronta para Fechar Negócio?
              </h3>
              <p style={{ color: "#888", ...bodyText, flex: 1 }}>
                Responda 15 perguntas e receba um diagnóstico personalizado com o
                que corrigir antes da próxima reunião.
              </p>
              <p style={{ color: "#555", fontSize: "0.8rem", fontFamily: "'DM Sans', sans-serif" }}>
                Página interativa — resultado em 3 minutos
              </p>
              <a
                href="/checklist"
                style={{
                  display: "inline-block",
                  backgroundColor: "#E8192C",
                  color: "#fff",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 900,
                  fontSize: "0.9rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "14px 24px",
                  textDecoration: "none",
                  textAlign: "center",
                  transition: "background 0.2s",
                }}
              >
                Fazer o Checklist →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SEÇÃO 08 — DEPOIMENTOS
      ═══════════════════════════════════════════ */}
      <section
        id="depoimentos"
        style={{ backgroundColor: "#F5F5F3", color: "#0A0A0A", padding: "100px 24px" }}
      >
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          {tag("Resultados Reais")}

          <h2 style={{ ...sectionTitle, color: "#0A0A0A", marginBottom: "48px" }}>
            O que dizem quem já transformou suas apresentações
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
            }}
          >
            {depoimentos.map((d, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#fff",
                  padding: "32px",
                  borderTop: "4px solid #E8192C",
                }}
              >
                <p
                  style={{
                    ...bodyText,
                    color: "#333",
                    fontStyle: "italic",
                    marginBottom: "24px",
                    lineHeight: "1.7",
                  }}
                >
                  &ldquo;{d.texto}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      backgroundColor: "#E8192C",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 900,
                      fontSize: "0.85rem",
                    }}
                  >
                    {d.iniciais}
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.95rem",
                        color: "#0A0A0A",
                      }}
                    >
                      {d.nome}
                    </p>
                    <p style={{ fontSize: "0.8rem", color: "#888", fontFamily: "'DM Sans', sans-serif" }}>
                      {d.cargo}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SEÇÃO — SOBRE MIM
      ═══════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#0A0A0A", padding: "100px 24px" }}>
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
            {tag("Sobre Mim")}

            <h2 style={{ ...sectionTitle, marginBottom: "24px" }}>
              Cristiane Lopes
            </h2>

            <p
              style={{
                ...bodyText,
                color: "#b0b0b0",
                marginBottom: "24px",
              }}
            >
              Especialista em apresentações de alta conversão. Minha missão é
              transformar propostas comerciais em sistemas de apresentação que
              geram ação e fechamento — combinando design estratégico, roteiros
              de comunicação persuasiva e inteligência artificial.
            </p>

            <p
              style={{
                ...bodyText,
                color: "#b0b0b0",
                marginBottom: "36px",
              }}
            >
              Enquanto a maioria ensina ferramentas, o Método SLIDE™ une
              estratégia de comunicação + design + IA em um sistema completo
              orientado a resultados. Ajudo profissionais que dependem de
              apresentações a comunicar suas ideias com clareza, autoridade e
              impacto.
            </p>

            <a
              href={WA_DIAGNOSTICO}
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

      {/* ═══════════════════════════════════════════
          SEÇÃO 09 — CTA FINAL
      ═══════════════════════════════════════════ */}
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
              ...sectionTitle,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              marginBottom: "28px",
            }}
          >
            Sua próxima apresentação vai apenas{" "}
            <span style={{ color: "#E8192C" }}>informar</span> — ou vai{" "}
            <span style={{ color: "#E8192C" }}>fechar o negócio</span>?
          </h2>

          <p
            style={{
              ...bodyText,
              color: "#888",
              marginBottom: "48px",
            }}
          >
            Agende um diagnóstico gratuito e descubra exatamente o que está
            custando suas vendas.
          </p>

          <a
            href={WA_DIAGNOSTICO}
            target="_blank"
            rel="noopener noreferrer"
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
              e.currentTarget.style.boxShadow =
                "0 8px 30px rgba(232,25,44,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#E8192C";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Agendar Diagnóstico Gratuito
          </a>

          <p
            style={{
              marginTop: "20px",
              fontSize: "0.8rem",
              color: "#555",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            Sem compromisso • Resposta em até 24h
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          RODAPÉ
      ═══════════════════════════════════════════ */}
      <footer
        style={{
          backgroundColor: "#0A0A0A",
          borderTop: "1px solid #1f1f1f",
          padding: "48px 24px",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
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
              marginBottom: "8px",
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

          {/* Redes sociais placeholder */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "24px",
              marginBottom: "24px",
            }}
          >
            {[
              { nome: "LinkedIn", url: "https://www.linkedin.com/in/cristiane-lopesp/" },
              { nome: "Instagram", url: "https://www.instagram.com/soucrislopes/" },
              { nome: "Behance", url: "https://www.behance.net/lopespcris" },
            ].map((rede) => (
              <a
                key={rede.nome}
                href={rede.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#555",
                  fontSize: "0.85rem",
                  fontFamily: "'DM Sans', sans-serif",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E8192C")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#555")}
              >
                {rede.nome}
              </a>
            ))}
          </div>

          <p
            style={{
              color: "#333",
              fontSize: "0.75rem",
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            © {new Date().getFullYear()} Cristiane Lopes. Todos os direitos
            reservados. &nbsp;|&nbsp;{" "}
            <a href="#" style={{ color: "#444", textDecoration: "underline" }}>
              Política de Privacidade
            </a>
          </p>
        </div>
      </footer>

      {/* CSS para responsividade */}
      <style>{`
        @media (min-width: 769px) {
          .mobile-menu-btn { display: none !important; }
          .mobile-menu { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </main>
  );
}
