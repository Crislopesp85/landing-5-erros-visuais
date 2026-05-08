"use client";

import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";

const WA =
  "https://wa.me/5491125716184?text=Ol%C3%A1%20Cristiane!%20Quero%20come%C3%A7ar%20o%20projeto%20da%20PotensRH%20por%20R%24%201.200";

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

  const onMouseMove = useCallback((e: MouseEvent) => { if (dragging.current) updatePosition(e.clientX); }, [updatePosition]);
  const onTouchMove = useCallback((e: TouchEvent) => { if (dragging.current) updatePosition(e.touches[0].clientX); }, [updatePosition]);
  const stopDrag = useCallback(() => { dragging.current = false; }, []);

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
      <div className="absolute inset-0">
        <Image src={afterSrc} alt={afterAlt} fill className="object-cover" />
        <span className="absolute top-3 right-3 text-xs font-bold px-2 py-1 rounded" style={{ background: "#C0392B", color: "#fff" }}>DEPOIS</span>
      </div>
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
        <div style={{ position: "absolute", inset: 0, width: containerRef.current?.offsetWidth ?? "auto" }}>
          <Image src={beforeSrc} alt={beforeAlt} fill className="object-cover" />
        </div>
        <span className="absolute top-3 left-3 text-xs font-bold px-2 py-1 rounded" style={{ background: "#555", color: "#fff" }}>ANTES</span>
      </div>
      <div className="absolute top-0 bottom-0 w-1 z-10 flex items-center justify-center" style={{ left: `${position}%`, transform: "translateX(-50%)", background: "#C0392B" }}>
        <div className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg" style={{ background: "#C0392B", border: "2px solid #fff" }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="white"><path d="M5 8l-3-3v6l3-3zm6 0l3-3v6l-3-3z" /></svg>
        </div>
      </div>
    </div>
  );
}

// ─── Fade-in on scroll ─────────────────────────────────────────────────────
function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={className} style={{ opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(24px)", transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s` }}>
      {children}
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────
export default function PropostaRenata() {
  const cards = [
    { emoji: "👁", title: "Hierarquia Visual", desc: "Dados e frases de impacto com o destaque que merecem" },
    { emoji: "🖼", title: "Fotos Estratégicas", desc: "Substituição de imagens genéricas por visuais autênticos" },
    { emoji: "🎨", title: "Identidade Consistente", desc: "Cores, fontes e elementos padronizados do início ao fim" },
    { emoji: "📖", title: "Narrativa Visual", desc: "Cada slide comunicando uma ideia com clareza e força" },
    { emoji: "🧩", title: "Template Base", desc: "Identidade visual para você aplicar no Portfólio com autonomia" },
    { emoji: "📋", title: "Guia de Uso", desc: "Como editar, trocar fotos e manter a identidade visual" },
  ];

  const sliders = [
    { before: "/proposta-renata/slide-desafios-antes.png", after: "/proposta-renata/slide-desafios-depois.png", beforeAlt: "Slide Desafios antes", afterAlt: "Slide Desafios depois", note: "De dados enterrados em texto para números que a audiência absorve em segundos" },
    { before: "/proposta-renata/slide-lideranca-antes.png", after: "/proposta-renata/slide-lideranca-depois.png", beforeAlt: "Slide Liderança antes", afterAlt: "Slide Liderança depois", note: "A melhor frase da apresentação como elemento principal, não escondida no rodapé" },
    { before: "/proposta-renata/slide-campominado-antes.png", after: "/proposta-renata/slide-campominado-depois.png", beforeAlt: "Slide Campo Minado antes", afterAlt: "Slide Campo Minado depois", note: "Foto que representa a emoção real da atividade — confiança, tensão, superação" },
    { before: "/proposta-renata/slide-escravosdejo-antes.png", after: "/proposta-renata/slide-escravosdejo-depois.png", beforeAlt: "Slide Escravos de Jó antes", afterAlt: "Slide Escravos de Jó depois", note: "Da foto genérica para uma imagem que transmite a energia real da dinâmica" },
  ];

  return (
    <main style={{ background: "#0A0A0A", color: "#fff", fontFamily: "'Inter', sans-serif", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::selection { background: #C0392B; color: #fff; }

        .pr-section     { padding: 100px 24px; }
        .pr-section-alt { padding: 100px 24px; background: #111; border-top: 1px solid #2C2C2C; border-bottom: 1px solid #2C2C2C; }
        .pr-hero        { padding: 48px 24px 80px; text-align: center; }
        .pr-cta         { background: #C0392B; padding: 80px 24px; text-align: center; }
        .pr-logos       { display: flex; justify-content: space-between; align-items: center; max-width: 900px; margin: 0 auto 48px; }
        .pr-grid-2      { display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 300px), 1fr)); gap: 24px; }
        .pr-grid-3      { display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 20px; }
        .pr-sliders     { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; max-width: 960px; margin: 0 auto; }
        .pr-about       { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 48px; align-items: center; max-width: 900px; margin: 0 auto; }
        .pr-delivery    { display: flex; justify-content: center; gap: 40px; flex-wrap: wrap; margin-top: 32px; }

        @media (max-width: 640px) {
          .pr-section     { padding: 60px 20px; }
          .pr-section-alt { padding: 60px 20px; }
          .pr-hero        { padding: 36px 20px 60px; }
          .pr-cta         { padding: 60px 20px; }
          .pr-logos       { margin-bottom: 36px; }
          .pr-sliders     { grid-template-columns: 1fr; gap: 40px; }
          .pr-about       { gap: 32px; }
          .pr-delivery    { gap: 16px; }
          .pr-section-title { margin-bottom: 28px !important; }
        }
      `}</style>

      {/* ── SEÇÃO 1: HERO ─────────────────────────────────────────────────── */}
      <section className="pr-hero">
        <div className="pr-logos">
          <div style={{ color: "#AAAAAA", fontSize: 14, fontWeight: 700, letterSpacing: 2 }}>PotensRH</div>
          <div style={{ color: "#fff", fontSize: 14, fontWeight: 900, letterSpacing: 2 }}>MÉTODO SLIDE</div>
        </div>

        <div style={{ display: "inline-block", background: "#C0392B", color: "#fff", fontSize: 12, fontWeight: 700, letterSpacing: 3, padding: "6px 18px", borderRadius: 4, marginBottom: 32, opacity: 0, animation: "fadeSlideUp 0.6s ease 0.1s forwards" }}>
          PROPOSTA EXCLUSIVA
        </div>

        <h1 style={{ fontSize: "clamp(36px, 6vw, 64px)", fontWeight: 900, lineHeight: 1.1, marginBottom: 24, opacity: 0, animation: "fadeSlideUp 0.6s ease 0.3s forwards" }}>
          Suas apresentações,<br />
          <span style={{ color: "#C0392B" }}>no nível do seu trabalho.</span>
        </h1>

        <p style={{ fontSize: "clamp(16px, 2vw, 20px)", color: "#AAAAAA", maxWidth: 560, margin: "0 auto 48px", lineHeight: 1.6, opacity: 0, animation: "fadeSlideUp 0.6s ease 0.5s forwards" }}>
          Proposta de redesign estratégico preparada exclusivamente para{" "}
          <strong style={{ color: "#fff" }}>Renata Burgo | PotensRH</strong>
        </p>

        <div style={{ width: 80, height: 3, background: "#C0392B", margin: "0 auto", borderRadius: 2, opacity: 0, animation: "expandLine 0.8s ease 0.7s forwards" }} />

        <style>{`
          @keyframes fadeSlideUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes expandLine  { from { opacity: 0; width: 0; } to { opacity: 1; width: 80px; } }
        `}</style>
      </section>

      {/* ── SEÇÃO 2: DIAGNÓSTICO ─────────────────────────────────────────── */}
      <section className="pr-section" style={{ maxWidth: 1000, margin: "0 auto" }}>
        <FadeIn>
          <h2 className="pr-section-title" style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, textAlign: "center", marginBottom: 60 }}>
            O que analisei nas suas apresentações
          </h2>
        </FadeIn>

        <div className="pr-grid-2">
          <FadeIn delay={0.1}>
            <div style={{ background: "#0D3B1F", borderRadius: 12, padding: 32 }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: "#27AE60", letterSpacing: 2, marginBottom: 20 }}>✓ O QUE ESTÁ MUITO BOM</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Identidade visual consistente — azul, branco e elementos visuais unificados",
                  "Fotos reais e autênticas das atividades e da Renata em ação",
                  "Slide de parceiros com logos de grandes empresas — prova social fortíssima",
                  "Depoimentos reais com fotos e link para Google Reviews",
                  "Conteúdo muito sólido com dados de mercado relevantes",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", gap: 10, fontSize: 15, color: "#ddd", lineHeight: 1.5 }}>
                    <span style={{ color: "#27AE60", flexShrink: 0 }}>✓</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div style={{ background: "#3B0D0D", borderRadius: 12, padding: 32 }}>
              <p style={{ fontSize: 12, fontWeight: 700, color: "#C0392B", letterSpacing: 2, marginBottom: 20 }}>⚠ OPORTUNIDADES DE MELHORIA</p>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  "Slide de Desafios: dados poderosos (87%, 76%, 24%) enterrados em texto corrido",
                  "Slide de Liderança: melhor frase da apresentação escondida no final",
                  "Slide 3: foto genérica de banco de imagens onde deveria estar foto real da Renata",
                  "Portfólio: duas atividades com fotos que não representam bem a dinâmica",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", gap: 10, fontSize: 15, color: "#ddd", lineHeight: 1.5 }}>
                    <span style={{ color: "#C0392B", flexShrink: 0 }}>⚠</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <p style={{ textAlign: "center", color: "#AAAAAA", fontStyle: "italic", maxWidth: 640, margin: "40px auto 0", lineHeight: 1.7, fontSize: 16 }}>
            &ldquo;O conteúdo e as fotos são excelentes. O que precisa evoluir é a hierarquia visual — para que a apresentação transmita a mesma autoridade que o seu trabalho já tem.&rdquo;
          </p>
        </FadeIn>
      </section>

      {/* ── SEÇÃO 3: ANTES E DEPOIS ──────────────────────────────────────── */}
      <section className="pr-section-alt">
        <div style={{ maxWidth: 960, margin: "0 auto" }}>
          <FadeIn>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, textAlign: "center", marginBottom: 12 }}>
              Na prática: veja a transformação
            </h2>
            <p style={{ textAlign: "center", color: "#AAAAAA", marginBottom: 56, fontSize: 16 }}>
              Quatro slides redesenhados especialmente para esta proposta
            </p>
          </FadeIn>

          <div className="pr-sliders">
            {sliders.map((s, i) => (
              <FadeIn key={s.before} delay={i * 0.1}>
                <div>
                  <div style={{ border: "2px solid #C0392B", borderRadius: 13, overflow: "hidden", marginBottom: 12 }}>
                    <BeforeAfterSlider beforeSrc={s.before} afterSrc={s.after} beforeAlt={s.beforeAlt} afterAlt={s.afterAlt} />
                  </div>
                  <p style={{ textAlign: "center", color: "#AAAAAA", fontSize: 13, fontStyle: "italic", lineHeight: 1.5 }}>{s.note}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SEÇÃO 4: O QUE ESTÁ INCLUÍDO ────────────────────────────────── */}
      <section className="pr-section" style={{ maxWidth: 1000, margin: "0 auto" }}>
        <FadeIn>
          <h2 className="pr-section-title" style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, textAlign: "center", marginBottom: 60 }}>
            O que você recebe
          </h2>
        </FadeIn>

        <div className="pr-grid-3">
          {cards.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.1}>
              <div
                style={{ background: "#1A1A1A", border: "1px solid #2C2C2C", borderRadius: 12, padding: 28, transition: "border-color 0.2s", cursor: "default" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = "#C0392B")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = "#2C2C2C")}
              >
                <div style={{ width: 48, height: 48, borderRadius: "50%", background: "#C0392B", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, marginBottom: 16 }}>{card.emoji}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: "#AAAAAA", lineHeight: 1.6 }}>{card.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ── SEÇÃO 5: INVESTIMENTO ────────────────────────────────────────── */}
      <section className="pr-section-alt">
        <div style={{ maxWidth: 600, margin: "0 auto", textAlign: "center" }}>
          <FadeIn>
            <h2 className="pr-section-title" style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, marginBottom: 12 }}>
              Investimento
            </h2>
            <p style={{ color: "#AAAAAA", fontSize: 16, marginBottom: 48 }}>
              Uma proposta pensada especialmente para este momento da PotensRH
            </p>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div style={{ background: "#C0392B", borderRadius: 16, padding: "48px 40px", position: "relative" }}>
              <div style={{ position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)", background: "#fff", color: "#C0392B", fontSize: 11, fontWeight: 700, letterSpacing: 2, padding: "5px 16px", borderRadius: 20, whiteSpace: "nowrap" }}>
                PACOTE INÍCIO INTELIGENTE
              </div>

              <h3 style={{ fontSize: 24, fontWeight: 700, marginBottom: 28 }}>Apresentação Institucional Completa</h3>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, marginBottom: 32, textAlign: "left" }}>
                {[
                  "13 slides com redesign estratégico completo",
                  "Template base com identidade visual",
                  "Guia rápido de uso",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", gap: 10, fontSize: 15, color: "rgba(255,255,255,0.9)" }}>
                    <span style={{ flexShrink: 0 }}>✓</span>{item}
                  </li>
                ))}
              </ul>

              <p style={{ fontSize: 52, fontWeight: 900, color: "#fff", marginBottom: 16 }}>R$ 1.200</p>

              <p style={{ fontSize: 13, color: "rgba(255,255,255,0.8)", lineHeight: 1.6, marginBottom: 32 }}>
                Com o template entregue, você aplica a identidade visual no Portfólio com autonomia — sem custo adicional.
              </p>

              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline-block", padding: "16px 36px", borderRadius: 8, background: "#000", color: "#fff", fontWeight: 700, fontSize: 16, textDecoration: "none", transition: "transform 0.15s" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.02)")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)")}
              >
                Quero começar — R$ 1.200
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="pr-delivery">
              <p style={{ color: "#AAAAAA", fontSize: 15 }}>📅 Prazo: até 7 dias úteis após aprovação</p>
              <p style={{ color: "#AAAAAA", fontSize: 15 }}>📁 Entrega: arquivo PowerPoint editável + versão PDF</p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SEÇÃO 6: SOBRE A CRISTIANE ───────────────────────────────────── */}
      <section className="pr-section">
        <div className="pr-about">
          <FadeIn delay={0.1}>
            <div style={{ borderRadius: 12, overflow: "hidden", maxWidth: 320 }}>
              <Image src="/cristiane.png" alt="Cristiane Lopes" width={320} height={380} style={{ width: "100%", height: "auto", filter: "grayscale(100%)", display: "block" }} />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, marginBottom: 24 }}>Quem vai fazer isso por você</h2>
              <p style={{ color: "#AAAAAA", fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
                Trabalho com apresentações estratégicas — ajudo consultoras, psicólogas organizacionais e especialistas em RH a transformar seus materiais em ferramentas de impacto real.
              </p>
              <p style={{ color: "#AAAAAA", fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
                O Método SLIDE combina storytelling estratégico, design profissional e inteligência artificial.
              </p>
              <div style={{ display: "flex", marginBottom: 28 }}>
                {["Storytelling", "Design", "IA"].map((pilar, i) => (
                  <span key={pilar}>
                    <span style={{ color: "#fff", fontWeight: 600, fontSize: 15 }}>{pilar}</span>
                    {i < 2 && <span style={{ color: "#444", margin: "0 12px" }}>|</span>}
                  </span>
                ))}
              </div>
              <a href="https://metodo-slide.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: "#C0392B", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
                metodo-slide.vercel.app →
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── SEÇÃO 7: CTA FINAL ───────────────────────────────────────────── */}
      <section className="pr-cta">
        <FadeIn>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 48px)", fontWeight: 900, marginBottom: 16 }}>
            Vamos transformar suas apresentações?
          </h2>
          <p style={{ fontSize: 18, color: "rgba(255,255,255,0.85)", marginBottom: 48 }}>
            Entre em contato e damos início ao projeto
          </p>
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-block", padding: "18px 36px", borderRadius: 8, background: "#000", color: "#fff", fontWeight: 700, fontSize: 17, textDecoration: "none", transition: "transform 0.15s" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.02)")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)")}
          >
            Quero começar — R$ 1.200
          </a>
        </FadeIn>
      </section>

      {/* ── RODAPÉ ──────────────────────────────────────────────────────── */}
      <footer style={{ background: "#0A0A0A", padding: "40px 24px", textAlign: "center", borderTop: "1px solid #2C2C2C" }}>
        <p style={{ fontWeight: 900, letterSpacing: 3, fontSize: 13, marginBottom: 16 }}>MÉTODO SLIDE</p>
        <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap", marginBottom: 20 }}>
          <a href="https://metodo-slide.vercel.app" target="_blank" rel="noopener noreferrer" style={{ color: "#AAAAAA", fontSize: 13, textDecoration: "none" }} onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")} onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#AAAAAA")}>metodo-slide.vercel.app</a>
          <span style={{ color: "#444" }}>|</span>
          <a href="https://portfolio-cris-lopes.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: "#AAAAAA", fontSize: 13, textDecoration: "none" }} onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#fff")} onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#AAAAAA")}>Portfólio</a>
        </div>
        <p style={{ color: "#666", fontSize: 13 }}>© 2026 Cristiane Lopes — Método SLIDE</p>
      </footer>
    </main>
  );
}
