"use client";

import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";

const WA_PILOTO =
  "https://wa.me/5491125716184?text=Ol%C3%A1%20Cristiane!%20Quero%20o%20Pacote%20Piloto%20de%20R%24%20900";
const WA_COMPLETA =
  "https://wa.me/5491125716184?text=Ol%C3%A1%20Cristiane!%20Quero%20a%20Apresenta%C3%A7%C3%A3o%20Completa%20por%20R%24%202.500";

// ─── Before/After Slider ───────────────────────────────────────────────────
function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
}: {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
}) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const onMouseMove = useCallback(
    (e: MouseEvent) => {
      if (dragging.current) updatePosition(e.clientX);
    },
    [updatePosition]
  );
  const onTouchMove = useCallback(
    (e: TouchEvent) => {
      if (dragging.current) updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );
  const stopDrag = useCallback(() => {
    dragging.current = false;
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchmove", onTouchMove);
    window.addEventListener("touchend", stopDrag);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", stopDrag);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", stopDrag);
    };
  }, [onMouseMove, onTouchMove, stopDrag]);

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-xl cursor-col-resize select-none"
      style={{ aspectRatio: "16/9", background: "#111" }}
      onMouseDown={() => (dragging.current = true)}
      onTouchStart={() => (dragging.current = true)}
    >
      {/* DEPOIS (base) */}
      <div className="absolute inset-0">
        <Image src={afterSrc} alt={afterAlt} fill className="object-cover" />
        <span
          className="absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded"
          style={{ background: "#C0392B", color: "#fff" }}
        >
          DEPOIS
        </span>
      </div>

      {/* ANTES (clip) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <div style={{ position: "absolute", inset: 0, width: containerRef.current?.offsetWidth ?? "auto" }}>
          <Image src={beforeSrc} alt={beforeAlt} fill className="object-cover" />
        </div>
        <span
          className="absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded"
          style={{ background: "#555", color: "#fff" }}
        >
          ANTES
        </span>
      </div>

      {/* Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 z-10 flex items-center justify-center"
        style={{ left: `${position}%`, transform: "translateX(-50%)", background: "#C0392B" }}
      >
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg"
          style={{ background: "#C0392B", border: "2px solid #fff" }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="white">
            <path d="M5 8l-3-3v6l3-3zm6 0l3-3v6l-3-3z" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─── Fade-in on scroll ─────────────────────────────────────────────────────
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default function PropostaSebastiao() {
  const cards = [
    { emoji: "👁", title: "Hierarquia Visual", desc: "O olhar vai saber onde ir em cada slide" },
    { emoji: "🖼", title: "Imagens de Impacto", desc: "Substituição de imagens genéricas por visuais que impressionam" },
    { emoji: "🎨", title: "Identidade Consistente", desc: "Cores, fontes e ícones padronizados do início ao fim" },
    { emoji: "📊", title: "Dados com Clareza", desc: "Slides de dados reestruturados para absorção imediata" },
    { emoji: "📖", title: "Narrativa Visual", desc: "Cada slide comunicando uma ideia com precisão" },
    { emoji: "🤖", title: "IA Aplicada", desc: "Uso de inteligência artificial para gerar e tratar imagens" },
  ];

  return (
    <main style={{ background: "#0A0A0A", color: "#fff", fontFamily: "'Inter', sans-serif", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::selection { background: #C0392B; color: #fff; }

        .ps-section { padding: 100px 24px; }
        .ps-section-alt { padding: 100px 24px; background: #111; border-top: 1px solid #2C2C2C; border-bottom: 1px solid #2C2C2C; }
        .ps-hero { padding: 48px 24px 80px; text-align: center; }
        .ps-cta { background: #C0392B; padding: 80px 24px; text-align: center; }
        .ps-logos { display: flex; justify-content: space-between; align-items: center; max-width: 900px; margin: 0 auto 48px; }
        .ps-grid-2 { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr)); gap: 24px; }
        .ps-grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; }
        .ps-about { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 48px; align-items: center; max-width: 900px; margin: 0 auto; }
        .ps-cta-btns { display: flex; gap: 16px; justify-content: center; flex-wrap: wrap; }
        .ps-delivery { display: flex; justify-content: center; gap: 40px; flex-wrap: wrap; margin-top: 40px; }
        .ps-price-card-border { border: 2px solid #C0392B; border-radius: 13px; overflow: hidden; margin-bottom: 60px; }

        @media (max-width: 640px) {
          .ps-section { padding: 60px 20px; }
          .ps-section-alt { padding: 60px 20px; }
          .ps-hero { padding: 36px 20px 60px; }
          .ps-cta { padding: 60px 20px; }
          .ps-logos { margin-bottom: 36px; }
          .ps-delivery { gap: 16px; }
          .ps-about { gap: 32px; }
          .ps-cta-btns a { width: 100%; text-align: center; }
          .ps-section-title { margin-bottom: 28px !important; }
        }
      `}</style>

      {/* ── SEÇÃO 1: HERO ─────────────────────────────────────────────────── */}
      <section className="ps-hero">
        {/* Logos */}
        <div className="ps-logos">
          <div style={{ color: "#AAAAAA", fontSize: 14, fontWeight: 700, letterSpacing: 2 }}>
            SIM Treinamentos
          </div>
          <div style={{ color: "#fff", fontSize: 14, fontWeight: 900, letterSpacing: 2 }}>
            MÉTODO SLIDE
          </div>
        </div>

        {/* Badge */}
        <div
          style={{
            display: "inline-block",
            background: "#C0392B",
            color: "#fff",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: 3,
            padding: "6px 18px",
            borderRadius: 4,
            marginBottom: 32,
            opacity: 0,
            animation: "fadeSlideUp 0.6s ease 0.1s forwards",
          }}
        >
          PROPOSTA EXCLUSIVA
        </div>

        <h1
          style={{
            fontSize: "clamp(36px, 6vw, 64px)",
            fontWeight: 900,
            lineHeight: 1.1,
            marginBottom: 24,
            opacity: 0,
            animation: "fadeSlideUp 0.6s ease 0.3s forwards",
          }}
        >
          Sua apresentação,<br />
          <span style={{ color: "#C0392B" }}>no nível do seu trabalho.</span>
        </h1>

        <p
          style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            color: "#AAAAAA",
            maxWidth: 560,
            margin: "0 auto 48px",
            lineHeight: 1.6,
            opacity: 0,
            animation: "fadeSlideUp 0.6s ease 0.5s forwards",
          }}
        >
          Proposta de redesign estratégico preparada
          exclusivamente para <strong style={{ color: "#fff" }}>Sebastião Souza | SIM Treinamentos</strong>
        </p>

        {/* Linha vermelha animada */}
        <div
          style={{
            width: 80,
            height: 3,
            background: "#C0392B",
            margin: "0 auto",
            borderRadius: 2,
            opacity: 0,
            animation: "expandLine 0.8s ease 0.7s forwards",
          }}
        />

        <style>{`
          @keyframes fadeSlideUp {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes expandLine {
            from { opacity: 0; width: 0; }
            to   { opacity: 1; width: 80px; }
          }
        `}</style>
      </section>

      {/* ── SEÇÃO 2: DIAGNÓSTICO ─────────────────────────────────────────── */}
      <section className="ps-section" style={{ maxWidth: 1000, margin: "0 auto" }}>
        <FadeIn>
          <h2 className="ps-section-title" style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, textAlign: "center", marginBottom: 60 }}>
            O que analisei na sua apresentação
          </h2>
        </FadeIn>

        <div className="ps-grid-2">
          {/* Bloco positivo */}
          <FadeIn delay={0.1}>
            <div style={{ background: "#0D3B1F", borderRadius: 12, padding: 32 }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: "#27AE60", letterSpacing: 2, marginBottom: 20 }}>
                ✓ O QUE ESTÁ FUNCIONANDO BEM
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Identidade visual com base sólida — fundo escuro, amarelo e vermelho",
                  "Logo da SIM consistente em todos os slides",
                  "Conteúdo muito forte com dados relevantes e impacto humano",
                  "Intenção criativa presente em vários slides",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", gap: 10, fontSize: 15, color: "#ddd", lineHeight: 1.5 }}>
                    <span style={{ color: "#27AE60", flexShrink: 0 }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Bloco de melhorias */}
          <FadeIn delay={0.2}>
            <div style={{ background: "#3B0D0D", borderRadius: 12, padding: 32 }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: "#C0392B", letterSpacing: 2, marginBottom: 20 }}>
                ⚠ OPORTUNIDADES DE MELHORIA
              </p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Slide de dados: recortes de notícia sem tratamento visual",
                  "Gráfico SMARTLAB: 20+ dados ilegíveis sem hierarquia",
                  "Inconsistência visual entre slides",
                  "Hierarquia pouco clara em vários momentos",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", gap: 10, fontSize: 15, color: "#ddd", lineHeight: 1.5 }}>
                    <span style={{ color: "#C0392B", flexShrink: 0 }}>⚠</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <p style={{ textAlign: "center", color: "#AAAAAA", fontStyle: "italic", maxWidth: 640, margin: "40px auto 0", lineHeight: 1.7, fontSize: 16 }}>
            &ldquo;O conteúdo é excelente. O que precisa evoluir é a forma como ele é comunicado — para que a apresentação transmita a mesma autoridade que o seu trabalho já tem.&rdquo;
          </p>
        </FadeIn>
      </section>

      {/* ── SEÇÃO 3: ANTES E DEPOIS ──────────────────────────────────────── */}
      <section className="ps-section-alt">
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, textAlign: "center", marginBottom: 12 }}>
              Na prática: veja a transformação
            </h2>
            <p style={{ textAlign: "center", color: "#AAAAAA", marginBottom: 64, fontSize: 16 }}>
              Dois dos slides que redesenhei especialmente para esta proposta
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div style={{ marginBottom: 60 }}>
              <div className="ps-price-card-border">
                <BeforeAfterSlider
                  beforeSrc="/proposta-sebastiao/slide-smartlab-antes.png"
                  afterSrc="/proposta-sebastiao/slide-smartlab-depois.png"
                  beforeAlt="Slide SMARTLAB original"
                  afterAlt="Slide SMARTLAB redesenhado"
                />
              </div>
              <p style={{ textAlign: "center", color: "#AAAAAA", marginTop: 16, fontSize: 14, fontStyle: "italic" }}>
                De uma tabela ilegível com 20+ dados para 3 números que a audiência absorve em segundos
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <div className="ps-price-card-border">
                <BeforeAfterSlider
                  beforeSrc="/proposta-sebastiao/slide-noticias-antes.png"
                  afterSrc="/proposta-sebastiao/slide-noticias-depois.png"
                  beforeAlt="Slide de notícias original"
                  afterAlt="Slide de notícias redesenhado"
                />
              </div>
              <p style={{ textAlign: "center", color: "#AAAAAA", marginTop: 16, fontSize: 14, fontStyle: "italic" }}>
                De printscreens colados para dados com hierarquia e impacto visual
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SEÇÃO 4: O QUE ESTÁ INCLUÍDO ────────────────────────────────── */}
      <section className="ps-section" style={{ maxWidth: 1000, margin: "0 auto" }}>
        <FadeIn>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, textAlign: "center", marginBottom: 60 }}>
            O que você recebe
          </h2>
        </FadeIn>

        <div className="ps-grid-3">
          {cards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.1}>
              <div
                style={{
                  background: "#1A1A1A",
                  border: "1px solid #2C2C2C",
                  borderRadius: 12,
                  padding: 28,
                  transition: "border-color 0.2s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = "#C0392B")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = "#2C2C2C")}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "50%",
                    background: "#C0392B",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 22,
                    marginBottom: 16,
                  }}
                >
                  {card.emoji}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: "#AAAAAA", lineHeight: 1.6 }}>{card.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── SEÇÃO 5: INVESTIMENTO ────────────────────────────────────────── */}
      <section className="ps-section-alt">
        <div style={{ maxWidth: 800, margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, textAlign: "center", marginBottom: 60 }}>
              Escolha o seu caminho
            </h2>
          </FadeIn>

          <div className="ps-grid-2">
            {/* Opção 1 */}
            <FadeIn delay={0.1}>
              <div style={{ background: "#1A1A1A", border: "1px solid #2C2C2C", borderRadius: 12, padding: 36 }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: "#AAAAAA", letterSpacing: 2, marginBottom: 12 }}>OPÇÃO 1</p>
                <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Apresentação Completa</h3>
                <p style={{ color: "#666", fontSize: 14, marginBottom: 24 }}>35 slides</p>
                <p style={{ fontSize: 42, fontWeight: 900, color: "#C0392B", marginBottom: 16 }}>R$ 2.500</p>
                <p style={{ fontSize: 14, color: "#AAAAAA", lineHeight: 1.6 }}>
                  Redesign estratégico completo com aplicação integral do Método SLIDE
                </p>
                <a
                  href={WA_COMPLETA}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    marginTop: 28,
                    padding: "14px",
                    textAlign: "center",
                    borderRadius: 8,
                    background: "transparent",
                    border: "2px solid #C0392B",
                    color: "#C0392B",
                    fontWeight: 700,
                    fontSize: 15,
                    textDecoration: "none",
                    transition: "background 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "#C0392B";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#C0392B";
                  }}
                >
                  Quero esta opção
                </a>
              </div>
            </FadeIn>

            {/* Opção 2 — recomendada */}
            <FadeIn delay={0.2}>
              <div style={{ background: "#C0392B", borderRadius: 12, padding: 36, position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    top: -12,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#fff",
                    color: "#C0392B",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: 2,
                    padding: "4px 14px",
                    borderRadius: 20,
                  }}
                >
                  ★ RECOMENDADA
                </div>
                <p style={{ fontSize: 11, fontWeight: 700, color: "rgba(255,255,255,0.7)", letterSpacing: 2, marginBottom: 12 }}>OPÇÃO 2</p>
                <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Pacote Piloto</h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, marginBottom: 24 }}>10 slides</p>
                <p style={{ fontSize: 42, fontWeight: 900, color: "#fff", marginBottom: 16 }}>R$ 900</p>
                <p style={{ fontSize: 14, color: "rgba(255,255,255,0.85)", lineHeight: 1.6 }}>
                  Veja a transformação real antes de decidir pelo restante. O valor entra como crédito.
                </p>
                <a
                  href={WA_PILOTO}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    marginTop: 28,
                    padding: "14px",
                    textAlign: "center",
                    borderRadius: 8,
                    background: "#000",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 15,
                    textDecoration: "none",
                    transition: "opacity 0.2s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.85")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
                >
                  Quero começar com o Piloto
                </a>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.3}>
            <div className="ps-delivery">
              <p style={{ color: "#AAAAAA", fontSize: 15 }}>📅 Prazo: até 7 dias úteis após aprovação</p>
              <p style={{ color: "#AAAAAA", fontSize: 15 }}>📁 Entrega: arquivo PowerPoint editável + versão PDF</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SEÇÃO 6: SOBRE A CRISTIANE ───────────────────────────────────── */}
      <section className="ps-section">
        <div className="ps-about">
          <FadeIn delay={0.1}>
            <div style={{ borderRadius: 12, overflow: "hidden", maxWidth: 320 }}>
              <Image
                src="/cristiane.png"
                alt="Cristiane Lopes"
                width={320}
                height={380}
                style={{ width: "100%", height: "auto", filter: "grayscale(100%)", display: "block" }}
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, marginBottom: 24 }}>
                Quem vai fazer isso por você
              </h2>
              <p style={{ color: "#AAAAAA", fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
                Trabalho com apresentações estratégicas — ajudo palestrantes,
                consultores e especialistas a transformar seus materiais visuais
                em ferramentas de impacto real.
              </p>
              <p style={{ color: "#AAAAAA", fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
                O Método SLIDE combina storytelling estratégico, design
                profissional e inteligência artificial.
              </p>

              <div style={{ display: "flex", gap: 0, marginBottom: 28 }}>
                {["Storytelling", "Design", "IA"].map((pilar, i) => (
                  <span key={pilar}>
                    <span style={{ color: "#fff", fontWeight: 600, fontSize: 15 }}>{pilar}</span>
                    {i < 2 && <span style={{ color: "#444", margin: "0 12px" }}>|</span>}
                  </span>
                ))}
              </div>

              <a
                href="https://metodo-slide.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#C0392B", fontSize: 14, fontWeight: 600, textDecoration: "none" }}
              >
                metodo-slide.vercel.app →
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SEÇÃO 7: CTA FINAL ───────────────────────────────────────────── */}
      <section className="ps-cta">
        <FadeIn>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 900, marginBottom: 16 }}>
            Vamos transformar sua apresentação?
          </h2>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.85)", marginBottom: 48 }}>
            Escolha uma opção e me envie uma mensagem
          </p>

          <div className="ps-cta-btns">
            <a
              href={WA_PILOTO}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "16px 28px",
                borderRadius: 8,
                background: "#000",
                color: "#fff",
                fontWeight: 700,
                fontSize: 16,
                textDecoration: "none",
                transition: "transform 0.15s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.02)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)")}
            >
              Quero o Pacote Piloto — R$ 900
            </a>
            <a
              href={WA_COMPLETA}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "16px 28px",
                borderRadius: 8,
                background: "#fff",
                color: "#C0392B",
                fontWeight: 700,
                fontSize: 16,
                textDecoration: "none",
                transition: "transform 0.15s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.02)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)")}
            >
              Quero a Apresentação Completa — R$ 2.500
            </a>
          </div>
        </FadeIn>
      </section>

      {/* ── RODAPÉ ──────────────────────────────────────────────────────── */}
      <footer style={{ background: "#0A0A0A", padding: "40px 24px", textAlign: "center", borderTop: "1px solid #2C2C2C" }}>
        <p style={{ fontWeight: 900, letterSpacing: 3, fontSize: 13, marginBottom: 16 }}>MÉTODO SLIDE</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap", marginBottom: 20 }}>
          <a
            href="https://metodo-slide.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#AAAAAA", fontSize: 13, textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#AAAAAA")}
          >
            metodo-slide.vercel.app
          </a>
          <span style={{ color: "#444" }}>|</span>
          <a
            href="https://portfolio-cris-lopes.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#AAAAAA", fontSize: 13, textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#AAAAAA")}
          >
            Portfólio
          </a>
        </div>
        <p style={{ color: "#666", fontSize: 13 }}>© 2026 Cristiane Lopes — Método SLIDE</p>
      </footer>
    </main>
  );
}
