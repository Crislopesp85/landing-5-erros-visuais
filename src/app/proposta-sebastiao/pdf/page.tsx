"use client";

import Image from "next/image";

export default function PropostaPDF() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#fff", color: "#111" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .print-btn {
          position: fixed;
          bottom: 32px;
          right: 32px;
          background: #C0392B;
          color: #fff;
          border: none;
          padding: 14px 28px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          z-index: 999;
          font-family: 'Inter', sans-serif;
          box-shadow: 0 4px 20px rgba(192,57,43,0.4);
        }
        .print-btn:hover { opacity: 0.9; }

        .page {
          width: 210mm;
          min-height: 297mm;
          margin: 0 auto;
          padding: 14mm 16mm;
          background: #0A0A0A;
          color: #fff;
        }

        /* ── tipografia ── */
        .hero-title { font-size: 32px; font-weight: 900; line-height: 1.15; margin-bottom: 10px; }
        .hero-sub   { font-size: 13px; color: #AAAAAA; line-height: 1.6; }
        .section-title { font-size: 20px; font-weight: 700; margin-bottom: 16px; }
        .label { font-size: 10px; font-weight: 700; letter-spacing: 2px; margin-bottom: 12px; }
        .body  { font-size: 12px; color: #AAAAAA; line-height: 1.6; }
        .body-white { font-size: 12px; color: #fff; line-height: 1.6; }

        /* ── layout helpers ── */
        .row    { display: flex; gap: 12px; }
        .col    { flex: 1; }
        .divider { width: 60px; height: 3px; background: #C0392B; border-radius: 2px; margin: 12px 0 20px; }
        .badge  { display: inline-block; background: #C0392B; color: #fff; font-size: 9px; font-weight: 700; letter-spacing: 3px; padding: 4px 12px; border-radius: 3px; margin-bottom: 14px; }

        /* ── seções ── */
        .section { margin-bottom: 28px; }

        /* ── logos ── */
        .logos { display: flex; justify-content: space-between; align-items: center; margin-bottom: 28px; padding-bottom: 14px; border-bottom: 1px solid #2C2C2C; }
        .logo-text { font-size: 11px; font-weight: 900; letter-spacing: 3px; }
        .logo-sub  { font-size: 11px; font-weight: 700; letter-spacing: 2px; color: #AAAAAA; }

        /* ── diagnóstico ── */
        .diag-box { border-radius: 8px; padding: 16px; flex: 1; }
        .diag-green { background: #0D3B1F; }
        .diag-red   { background: #3B0D0D; }
        .diag-item  { display: flex; gap: 8px; font-size: 11px; color: #ddd; line-height: 1.5; margin-bottom: 8px; }

        /* ── antes/depois ── */
        .compare-wrap { border-radius: 8px; overflow: hidden; border: 2px solid #C0392B; flex: 1; }
        .compare-label { font-size: 9px; font-weight: 700; letter-spacing: 2px; padding: 4px 8px; }
        .label-antes  { background: #555; color: #fff; display: inline-block; border-radius: 3px; margin-bottom: 4px; }
        .label-depois { background: #C0392B; color: #fff; display: inline-block; border-radius: 3px; margin-bottom: 4px; }
        .compare-note { font-size: 10px; color: #AAAAAA; font-style: italic; text-align: center; margin-top: 6px; }

        /* ── cards ── */
        .cards-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; }
        .card { background: #1A1A1A; border: 1px solid #2C2C2C; border-radius: 8px; padding: 14px; }
        .card-icon { width: 32px; height: 32px; border-radius: 50%; background: #C0392B; display: flex; align-items: center; justify-content: center; font-size: 14px; margin-bottom: 8px; }
        .card-title { font-size: 12px; font-weight: 700; margin-bottom: 4px; }
        .card-desc  { font-size: 10px; color: #AAAAAA; line-height: 1.5; }

        /* ── preços ── */
        .price-cards { display: flex; gap: 12px; }
        .price-card  { flex: 1; border-radius: 8px; padding: 20px; }
        .price-card-default { background: #1A1A1A; border: 1px solid #2C2C2C; }
        .price-card-rec     { background: #C0392B; position: relative; }
        .price-badge { position: absolute; top: -10px; left: 50%; transform: translateX(-50%); background: #fff; color: #C0392B; font-size: 8px; font-weight: 700; letter-spacing: 2px; padding: 3px 10px; border-radius: 20px; white-space: nowrap; }
        .price-label { font-size: 9px; font-weight: 700; letter-spacing: 2px; margin-bottom: 6px; }
        .price-title { font-size: 16px; font-weight: 700; margin-bottom: 2px; }
        .price-qty   { font-size: 11px; margin-bottom: 10px; }
        .price-value { font-size: 28px; font-weight: 900; margin-bottom: 10px; }
        .price-desc  { font-size: 10px; line-height: 1.5; }

        /* ── sobre ── */
        .about-row { display: flex; gap: 20px; align-items: flex-start; }
        .about-photo { width: 100px; flex-shrink: 0; border-radius: 8px; overflow: hidden; }
        .pilares { display: flex; gap: 0; margin-top: 10px; }

        /* ── cta ── */
        .cta-box { background: #C0392B; border-radius: 10px; padding: 24px; text-align: center; }
        .cta-title { font-size: 20px; font-weight: 900; margin-bottom: 6px; }
        .cta-sub   { font-size: 12px; color: rgba(255,255,255,0.85); margin-bottom: 16px; }
        .cta-btns  { display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; }
        .cta-btn   { padding: 10px 18px; border-radius: 6px; font-size: 11px; font-weight: 700; text-decoration: none; display: inline-block; }
        .cta-btn-black { background: #000; color: #fff; }
        .cta-btn-white { background: #fff; color: #C0392B; }

        /* ── rodapé ── */
        .footer { margin-top: 20px; padding-top: 14px; border-top: 1px solid #2C2C2C; text-align: center; }

        @media print {
          .print-btn { display: none; }
          body { margin: 0; }
          .page { width: 100%; margin: 0; padding: 12mm 14mm; }
          @page { size: A4; margin: 0; }
        }
      `}</style>

      <button className="print-btn" onClick={() => window.print()}>
        ⬇ Salvar como PDF
      </button>

      <div className="page">

        {/* ── LOGOS ── */}
        <div className="logos">
          <span className="logo-sub">SIMTC</span>
          <span className="logo-text">MÉTODO SLIDE™</span>
        </div>

        {/* ── HERO ── */}
        <div className="section" style={{ textAlign: "center", paddingBottom: 24, borderBottom: "1px solid #2C2C2C" }}>
          <div className="badge">PROPOSTA EXCLUSIVA</div>
          <h1 className="hero-title">
            Sua apresentação,{" "}
            <span style={{ color: "#C0392B" }}>no nível do seu trabalho.</span>
          </h1>
          <div className="divider" style={{ margin: "12px auto" }} />
          <p className="hero-sub">
            Proposta de redesign estratégico preparada exclusivamente para{" "}
            <strong style={{ color: "#fff" }}>Sebastião Souza | SIMTC</strong>
          </p>
        </div>

        {/* ── DIAGNÓSTICO ── */}
        <div className="section" style={{ marginTop: 24 }}>
          <h2 className="section-title">O que analisei na sua apresentação</h2>
          <div className="row">
            <div className="diag-box diag-green">
              <p className="label" style={{ color: "#27AE60" }}>✓ O QUE ESTÁ FUNCIONANDO BEM</p>
              {[
                "Identidade visual com base sólida — fundo escuro, amarelo e vermelho",
                "Logo da SIM consistente em todos os slides",
                "Conteúdo muito forte com dados relevantes e impacto humano",
                "Intenção criativa presente em vários slides",
              ].map((item) => (
                <div key={item} className="diag-item">
                  <span style={{ color: "#27AE60", flexShrink: 0 }}>✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="diag-box diag-red">
              <p className="label" style={{ color: "#C0392B" }}>⚠ OPORTUNIDADES DE MELHORIA</p>
              {[
                "Slide de dados: recortes de notícia sem tratamento visual",
                "Gráfico SMARTLAB: 20+ dados ilegíveis sem hierarquia",
                "Inconsistência visual entre slides",
                "Hierarquia pouco clara em vários momentos",
              ].map((item) => (
                <div key={item} className="diag-item">
                  <span style={{ color: "#C0392B", flexShrink: 0 }}>⚠</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <p style={{ textAlign: "center", color: "#AAAAAA", fontStyle: "italic", fontSize: 11, marginTop: 12, lineHeight: 1.6 }}>
            &ldquo;O conteúdo é excelente. O que precisa evoluir é a forma como ele é comunicado — para que a apresentação transmita a mesma autoridade que o seu trabalho já tem.&rdquo;
          </p>
        </div>

        {/* ── ANTES E DEPOIS — SMARTLAB ── */}
        <div className="section">
          <h2 className="section-title">Na prática: veja a transformação</h2>
          <p className="body" style={{ marginBottom: 14 }}>Dois dos slides que redesenhei especialmente para esta proposta</p>

          <div className="row" style={{ marginBottom: 6 }}>
            <div style={{ flex: 1 }}>
              <span className="compare-label label-antes">ANTES</span>
              <div className="compare-wrap">
                <Image
                  src="/proposta-sebastiao/slide-smartlab-antes.png"
                  alt="Slide SMARTLAB antes"
                  width={600}
                  height={338}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <span className="compare-label label-depois">DEPOIS</span>
              <div className="compare-wrap">
                <Image
                  src="/proposta-sebastiao/slide-smartlab-depois.png"
                  alt="Slide SMARTLAB depois"
                  width={600}
                  height={338}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>
          </div>
          <p className="compare-note">De uma tabela ilegível com 20+ dados para 3 números que a audiência absorve em segundos</p>
        </div>

        {/* ── ANTES E DEPOIS — NOTÍCIAS ── */}
        <div className="section">
          <div className="row" style={{ marginBottom: 6 }}>
            <div style={{ flex: 1 }}>
              <span className="compare-label label-antes">ANTES</span>
              <div className="compare-wrap">
                <Image
                  src="/proposta-sebastiao/slide-noticias-antes.png"
                  alt="Slide notícias antes"
                  width={600}
                  height={338}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <span className="compare-label label-depois">DEPOIS</span>
              <div className="compare-wrap">
                <Image
                  src="/proposta-sebastiao/slide-noticias-depois.png"
                  alt="Slide notícias depois"
                  width={600}
                  height={338}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </div>
            </div>
          </div>
          <p className="compare-note">De printscreens colados para dados com hierarquia e impacto visual</p>
        </div>

        {/* ── O QUE ESTÁ INCLUÍDO ── */}
        <div className="section">
          <h2 className="section-title">O que você recebe</h2>
          <div className="cards-grid">
            {[
              { emoji: "👁", title: "Hierarquia Visual", desc: "O olhar vai saber onde ir em cada slide" },
              { emoji: "🖼", title: "Imagens de Impacto", desc: "Substituição de imagens genéricas por visuais que impressionam" },
              { emoji: "🎨", title: "Identidade Consistente", desc: "Cores, fontes e ícones padronizados do início ao fim" },
              { emoji: "📊", title: "Dados com Clareza", desc: "Slides de dados reestruturados para absorção imediata" },
              { emoji: "📖", title: "Narrativa Visual", desc: "Cada slide comunicando uma ideia com precisão" },
              { emoji: "🤖", title: "IA Aplicada", desc: "Uso de inteligência artificial para gerar e tratar imagens" },
            ].map((card) => (
              <div key={card.title} className="card">
                <div className="card-icon">{card.emoji}</div>
                <p className="card-title">{card.title}</p>
                <p className="card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── INVESTIMENTO ── */}
        <div className="section">
          <h2 className="section-title">Escolha o seu caminho</h2>
          <div className="price-cards">
            {/* Opção 1 */}
            <div className="price-card price-card-default">
              <p className="price-label" style={{ color: "#AAAAAA" }}>OPÇÃO 1</p>
              <p className="price-title">Apresentação Completa</p>
              <p className="price-qty" style={{ color: "#666" }}>35 slides</p>
              <p className="price-value" style={{ color: "#C0392B" }}>R$ 2.500</p>
              <p className="price-desc" style={{ color: "#AAAAAA" }}>
                Redesign estratégico completo com aplicação integral do Método SLIDE™
              </p>
            </div>
            {/* Opção 2 */}
            <div className="price-card price-card-rec">
              <div className="price-badge">★ RECOMENDADA</div>
              <p className="price-label" style={{ color: "rgba(255,255,255,0.7)" }}>OPÇÃO 2</p>
              <p className="price-title">Pacote Piloto</p>
              <p className="price-qty" style={{ color: "rgba(255,255,255,0.7)" }}>10 slides</p>
              <p className="price-value" style={{ color: "#fff" }}>R$ 900</p>
              <p className="price-desc" style={{ color: "rgba(255,255,255,0.85)" }}>
                Veja a transformação real antes de decidir pelo restante. O valor entra como crédito.
              </p>
            </div>
          </div>
          <div style={{ display: "flex", gap: 24, marginTop: 12, flexWrap: "wrap" }}>
            <p className="body">📅 Prazo: até 7 dias úteis após aprovação</p>
            <p className="body">📁 Entrega: arquivo PowerPoint editável + versão PDF</p>
          </div>
        </div>

        {/* ── SOBRE A CRISTIANE ── */}
        <div className="section">
          <h2 className="section-title">Quem vai fazer isso por você</h2>
          <div className="about-row">
            <div className="about-photo">
              <Image
                src="/cristiane.png"
                alt="Cristiane Lopes"
                width={100}
                height={120}
                style={{ width: "100%", height: "auto", filter: "grayscale(100%)", display: "block", borderRadius: 8 }}
              />
            </div>
            <div style={{ flex: 1 }}>
              <p className="body" style={{ marginBottom: 8 }}>
                Trabalho com apresentações estratégicas — ajudo palestrantes, consultores e especialistas
                a transformar seus materiais visuais em ferramentas de impacto real.
              </p>
              <p className="body" style={{ marginBottom: 12 }}>
                O Método SLIDE™ combina storytelling estratégico, design profissional e inteligência artificial.
              </p>
              <div className="pilares">
                {["Storytelling", "Design", "IA"].map((p, i) => (
                  <span key={p}>
                    <span style={{ fontSize: 12, fontWeight: 600, color: "#fff" }}>{p}</span>
                    {i < 2 && <span style={{ color: "#444", margin: "0 10px" }}>|</span>}
                  </span>
                ))}
              </div>
              <p style={{ marginTop: 10, fontSize: 11 }}>
                <a href="https://metodo-slide.vercel.app" style={{ color: "#C0392B" }}>metodo-slide.vercel.app</a>
                <span style={{ color: "#444", margin: "0 10px" }}>|</span>
                <a href="https://portfolio-cris-lopes.vercel.app/" style={{ color: "#C0392B" }}>Portfólio</a>
              </p>
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div className="cta-box">
          <p className="cta-title">Vamos transformar sua apresentação?</p>
          <p className="cta-sub">Escolha uma opção e me envie uma mensagem</p>
          <div className="cta-btns">
            <a
              href="https://wa.me/5491125716184?text=Ol%C3%A1%20Cristiane!%20Quero%20o%20Pacote%20Piloto%20de%20R%24%20900"
              className="cta-btn cta-btn-black"
            >
              Quero o Pacote Piloto — R$ 900
            </a>
            <a
              href="https://wa.me/5491125716184?text=Ol%C3%A1%20Cristiane!%20Quero%20a%20Apresenta%C3%A7%C3%A3o%20Completa%20por%20R%24%202.500"
              className="cta-btn cta-btn-white"
            >
              Quero a Apresentação Completa — R$ 2.500
            </a>
          </div>
        </div>

        {/* ── RODAPÉ ── */}
        <div className="footer">
          <p style={{ fontWeight: 900, letterSpacing: 3, fontSize: 11, marginBottom: 6 }}>MÉTODO SLIDE™</p>
          <p style={{ color: "#666", fontSize: 11 }}>© 2026 Cristiane Lopes — Método SLIDE™</p>
        </div>

      </div>
    </div>
  );
}
