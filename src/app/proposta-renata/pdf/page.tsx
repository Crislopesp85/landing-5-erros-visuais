"use client";

import Image from "next/image";

const WA_A = "https://wa.me/5491125716184?text=Ol%C3%A1%20Cristiane!%20Quero%20come%C3%A7ar%20com%20a%20Op%C3%A7%C3%A3o%20A%20%E2%80%94%20Apresenta%C3%A7%C3%A3o%20Institucional%20por%20R%24%201.200";
const WA_B = "https://wa.me/5491125716184?text=Ol%C3%A1%20Cristiane!%20Quero%20come%C3%A7ar%20com%20a%20Op%C3%A7%C3%A3o%20B%20%E2%80%94%20Port%C3%ADfolio%20Team%20Building%20por%20R%24%20900";
const WA_C = "https://wa.me/5491125716184?text=Ol%C3%A1%20Cristiane!%20Quero%20come%C3%A7ar%20com%20o%20Pacote%20Completo%20por%20R%24%201.800";
const WA   = "https://wa.me/5491125716184?text=Ol%C3%A1%20Cristiane!%20Quero%20come%C3%A7ar%20o%20projeto%20da%20PotensRH";

export default function PropostaRenataPDF() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", background: "#fff", color: "#111" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
        html, body { background: #0A0A0A; }

        .print-btn {
          position: fixed; bottom: 32px; right: 32px;
          background: #C0392B; color: #fff; border: none;
          padding: 14px 28px; border-radius: 8px; font-size: 15px;
          font-weight: 700; cursor: pointer; z-index: 999;
          font-family: 'Inter', sans-serif;
          box-shadow: 0 4px 20px rgba(192,57,43,0.4);
        }
        .print-btn:hover { opacity: 0.9; }

        .page {
          width: 210mm; min-height: 297mm;
          margin: 0 auto; padding: 14mm 16mm;
          background: #0A0A0A; color: #fff;
        }

        .hero-title   { font-size: 30px; font-weight: 900; line-height: 1.15; margin-bottom: 10px; }
        .hero-sub     { font-size: 13px; color: #AAAAAA; line-height: 1.6; }
        .section-title{ font-size: 19px; font-weight: 700; margin-bottom: 14px; }
        .body         { font-size: 11px; color: #AAAAAA; line-height: 1.6; }

        .row   { display: flex; gap: 10px; }
        .divider { width: 60px; height: 3px; background: #C0392B; border-radius: 2px; margin: 10px auto 18px; }
        .badge { display: inline-block; background: #C0392B; color: #fff; font-size: 9px; font-weight: 700; letter-spacing: 3px; padding: 4px 12px; border-radius: 3px; margin-bottom: 12px; }
        .section { margin-bottom: 24px; }

        .logos { display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; padding-bottom: 12px; border-bottom: 1px solid #2C2C2C; }
        .logo-text { font-size: 11px; font-weight: 900; letter-spacing: 3px; }
        .logo-sub  { font-size: 11px; font-weight: 700; letter-spacing: 2px; color: #AAAAAA; }

        .diag-box   { border-radius: 8px; padding: 14px; flex: 1; }
        .diag-green { background: #0D3B1F; }
        .diag-red   { background: #3B0D0D; }
        .diag-label { font-size: 9px; font-weight: 700; letter-spacing: 2px; margin-bottom: 8px; }
        .diag-sub   { font-size: 8px; font-weight: 700; letter-spacing: 1px; color: #AAAAAA; margin-bottom: 6px; margin-top: 10px; }
        .diag-item  { display: flex; gap: 6px; font-size: 10px; color: #ddd; line-height: 1.4; margin-bottom: 6px; }

        .compare-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
        .compare-pair { display: flex; gap: 6px; }
        .compare-wrap { border-radius: 6px; overflow: hidden; border: 2px solid #C0392B; flex: 1; }
        .compare-label-wrap { display: flex; gap: 6px; margin-bottom: 4px; }
        .cl { font-size: 8px; font-weight: 700; letter-spacing: 1px; padding: 2px 6px; border-radius: 3px; }
        .cl-antes  { background: #555; color: #fff; }
        .cl-depois { background: #C0392B; color: #fff; }
        .compare-note { font-size: 9px; color: #AAAAAA; font-style: italic; text-align: center; margin-top: 5px; line-height: 1.4; }

        .cards-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
        .card       { background: #1A1A1A; border: 1px solid #2C2C2C; border-radius: 8px; padding: 12px; }
        .card-icon  { width: 28px; height: 28px; border-radius: 50%; background: #C0392B; display: flex; align-items: center; justify-content: center; font-size: 13px; margin-bottom: 6px; }
        .card-title { font-size: 11px; font-weight: 700; margin-bottom: 3px; }
        .card-desc  { font-size: 9px; color: #AAAAAA; line-height: 1.4; }

        .price-cards { display: flex; gap: 10px; }
        .price-card  { flex: 1; border-radius: 8px; padding: 16px; }
        .price-card-dark { background: #1A1A1A; border: 1px solid #2C2C2C; }
        .price-card-red  { background: #C0392B; position: relative; }
        .price-badge { position: absolute; top: -9px; left: 50%; transform: translateX(-50%); background: #fff; color: #C0392B; font-size: 7px; font-weight: 700; letter-spacing: 2px; padding: 2px 10px; border-radius: 20px; white-space: nowrap; }
        .price-opt   { font-size: 9px; font-weight: 700; letter-spacing: 2px; margin-bottom: 4px; }
        .price-title { font-size: 13px; font-weight: 700; margin-bottom: 4px; }
        .price-desc  { font-size: 9px; line-height: 1.4; margin-bottom: 10px; }
        .price-item  { display: flex; gap: 5px; font-size: 9px; line-height: 1.4; margin-bottom: 4px; }
        .price-val   { font-size: 24px; font-weight: 900; margin-bottom: 4px; }
        .price-note  { font-size: 9px; margin-bottom: 10px; }
        .price-btn   { display: block; padding: "8px"; text-align: center; border-radius: 6px; font-size: 10px; font-weight: 700; text-decoration: none; }
        .price-btn-outline { border: 1.5px solid #C0392B; color: #C0392B; }
        .price-btn-black   { background: #000; color: #fff; }

        .about-row   { display: flex; gap: 16px; align-items: flex-start; }
        .about-photo { width: 80px; flex-shrink: 0; border-radius: 8px; overflow: hidden; }
        .pilares     { display: flex; gap: 0; margin-top: 8px; }

        .cta-box  { background: #C0392B; border-radius: 10px; padding: 20px; text-align: center; }
        .cta-title{ font-size: 18px; font-weight: 900; margin-bottom: 6px; }
        .cta-sub  { font-size: 11px; color: rgba(255,255,255,0.85); margin-bottom: 14px; }
        .cta-btn  { display: inline-block; padding: "10px 20px"; border-radius: 6px; background: #000; color: #fff; font-size: 12px; font-weight: 700; text-decoration: none; }

        .footer { margin-top: 18px; padding-top: 12px; border-top: 1px solid #2C2C2C; text-align: center; }

        @media print {
          .print-btn { display: none; }
          body { margin: 0; }
          .page { width: 100%; margin: 0; padding: 12mm 14mm; }
          @page { size: A4; margin: 0; }
          * { -webkit-print-color-adjust: exact !important; print-color-adjust: exact !important; color-adjust: exact !important; }
        }
      `}</style>

      <button className="print-btn" onClick={() => window.print()}>⬇ Salvar como PDF</button>

      <div className="page">

        {/* LOGOS */}
        <div className="logos">
          <span className="logo-sub">PotensRH</span>
          <span className="logo-text">MÉTODO SLIDE</span>
        </div>

        {/* HERO */}
        <div className="section" style={{ textAlign: "center", paddingBottom: 20, borderBottom: "1px solid #2C2C2C" }}>
          <div className="badge">PROPOSTA EXCLUSIVA</div>
          <h1 className="hero-title">
            Suas apresentações,{" "}
            <span style={{ color: "#C0392B" }}>no nível do seu trabalho.</span>
          </h1>
          <div className="divider" />
          <p className="hero-sub">
            Proposta de redesign estratégico preparada exclusivamente para{" "}
            <strong style={{ color: "#fff" }}>Renata Burgo | PotensRH</strong>
          </p>
        </div>

        {/* DIAGNÓSTICO */}
        <div className="section" style={{ marginTop: 20 }}>
          <h2 className="section-title">O que analisei nas suas apresentações</h2>
          <div className="row">
            <div className="diag-box diag-green">
              <p className="diag-label" style={{ color: "#27AE60" }}>✓ O QUE ESTÁ MUITO BOM</p>
              {[
                "Identidade visual consistente — azul, branco e elementos unificados",
                "Fotos reais e autênticas das atividades e da Renata em ação",
                "Slide de parceiros com logos de grandes empresas — prova social fortíssima",
                "Depoimentos reais com fotos e link para Google Reviews",
                "Conteúdo muito sólido com dados de mercado relevantes",
              ].map((item) => (
                <div key={item} className="diag-item">
                  <span style={{ color: "#27AE60", flexShrink: 0 }}>✓</span><span>{item}</span>
                </div>
              ))}
            </div>
            <div className="diag-box diag-red">
              <p className="diag-label" style={{ color: "#C0392B" }}>⚠ OPORTUNIDADES DE MELHORIA</p>
              <p className="diag-sub">APRESENTAÇÃO INSTITUCIONAL</p>
              {[
                "Hierarquia visual inconsistente — slides sobrecarregados sem destaque claro",
                "Falta de fio condutor narrativo entre os slides",
                "Imagens de banco misturadas com fotos reais — quebra a credibilidade",
                "Tipografia sem hierarquia — títulos e corpo com pesos similares",
              ].map((item) => (
                <div key={item} className="diag-item">
                  <span style={{ color: "#C0392B", flexShrink: 0 }}>⚠</span><span>{item}</span>
                </div>
              ))}
              <p className="diag-sub">PORTFÓLIO TEAM BUILDING</p>
              {[
                "Todos os slides com a mesma estrutura — leitura fica monótona",
                "Sem introdução que contextualize o valor do Team Building",
                "Algumas fotos com qualidade que comprometem o profissionalismo",
              ].map((item) => (
                <div key={item} className="diag-item">
                  <span style={{ color: "#C0392B", flexShrink: 0 }}>⚠</span><span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <p style={{ textAlign: "center", color: "#AAAAAA", fontStyle: "italic", fontSize: 10, marginTop: 10, lineHeight: 1.6 }}>
            &ldquo;O conteúdo e as fotos são excelentes. O que precisa evoluir é a hierarquia visual — para que a apresentação transmita a mesma autoridade que o seu trabalho já tem.&rdquo;
          </p>
        </div>

        {/* ANTES E DEPOIS */}
        <div className="section">
          <h2 className="section-title">Na prática: veja a transformação</h2>
          <p className="body" style={{ marginBottom: 12 }}>Quatro slides redesenhados especialmente para esta proposta</p>

          <div className="compare-grid">
            {[
              { before: "/proposta-renata/slide-desafios-antes.png", after: "/proposta-renata/slide-desafios-depois.png", bAlt: "Desafios antes", aAlt: "Desafios depois", note: "De dados enterrados em texto para números que a audiência absorve em segundos" },
              { before: "/proposta-renata/slide-lideranca-antes.png", after: "/proposta-renata/slide-lideranca-depois.png", bAlt: "Liderança antes", aAlt: "Liderança depois", note: "A melhor frase como elemento principal, não escondida no rodapé" },
              { before: "/proposta-renata/slide-campominado-antes.png", after: "/proposta-renata/slide-campominado-depois.png", bAlt: "Campo Minado antes", aAlt: "Campo Minado depois", note: "Foto que representa a emoção real — confiança, tensão, superação" },
              { before: "/proposta-renata/slide-escravosdejo-antes.png", after: "/proposta-renata/slide-escravosdejo-depois.png", bAlt: "Escravos de Jô antes", aAlt: "Escravos de Jô depois", note: "Da foto genérica para uma imagem que transmite a energia real da dinâmica" },
            ].map((s) => (
              <div key={s.before}>
                <div className="compare-label-wrap">
                  <span className="cl cl-antes">ANTES</span>
                  <span className="cl cl-depois">DEPOIS</span>
                </div>
                <div className="compare-pair">
                  <div className="compare-wrap">
                    <Image src={s.before} alt={s.bAlt} width={300} height={169} style={{ width: "100%", height: "auto", display: "block" }} />
                  </div>
                  <div className="compare-wrap">
                    <Image src={s.after} alt={s.aAlt} width={300} height={169} style={{ width: "100%", height: "auto", display: "block" }} />
                  </div>
                </div>
                <p className="compare-note">{s.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* O QUE ESTÁ INCLUÍDO */}
        <div className="section">
          <h2 className="section-title">O que você recebe</h2>
          <div className="cards-grid">
            {[
              { emoji: "👁", title: "Hierarquia Visual", desc: "Dados e frases de impacto com o destaque que merecem" },
              { emoji: "🖼", title: "Fotos Estratégicas", desc: "Substituição de imagens genéricas por visuais autênticos" },
              { emoji: "🎨", title: "Identidade Consistente", desc: "Cores, fontes e elementos padronizados do início ao fim" },
              { emoji: "📖", title: "Narrativa Visual", desc: "Cada slide comunicando uma ideia com clareza e força" },
              { emoji: "🧩", title: "Template Base", desc: "Identidade visual para você aplicar no Portfólio com autonomia" },
              { emoji: "📋", title: "Guia de Uso", desc: "Como editar, trocar fotos e manter a identidade visual" },
            ].map((card) => (
              <div key={card.title} className="card">
                <div className="card-icon">{card.emoji}</div>
                <p className="card-title">{card.title}</p>
                <p className="card-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* INVESTIMENTO */}
        <div className="section">
          <h2 className="section-title">Investimento</h2>
          <p className="body" style={{ marginBottom: 16 }}>Uma proposta pensada especialmente para este momento da PotensRH</p>
          <div className="price-cards">

            {/* OPÇÃO A */}
            <div className="price-card price-card-dark">
              <p className="price-opt" style={{ color: "#AAAAAA" }}>OPÇÃO A</p>
              <p className="price-title">Apresentação Institucional</p>
              <p className="price-desc" style={{ color: "#AAAAAA" }}>Redesign estratégico completo focado no material de vendas</p>
              {["13 slides com redesign completo", "Hierarquia visual e narrativa reorganizadas", "Identidade visual padronizada", "PowerPoint editável + PDF"].map((i) => (
                <div key={i} className="price-item" style={{ color: "#ddd" }}><span style={{ color: "#27AE60" }}>✓</span>{i}</div>
              ))}
              <p className="price-val" style={{ color: "#C0392B" }}>R$ 1.200</p>
              <a href={WA_A} className="price-btn price-btn-outline" style={{ display: "block", padding: "7px", textAlign: "center", borderRadius: 6, border: "1.5px solid #C0392B", color: "#C0392B", fontSize: 10, fontWeight: 700, textDecoration: "none" }}>Quero esta opção</a>
            </div>

            {/* OPÇÃO B */}
            <div className="price-card price-card-dark">
              <p className="price-opt" style={{ color: "#AAAAAA" }}>OPÇÃO B</p>
              <p className="price-title">Portfólio Team Building</p>
              <p className="price-desc" style={{ color: "#AAAAAA" }}>Redesign do catálogo de atividades com identidade renovada</p>
              {["22 slides com redesign completo", "Variação de layouts para evitar monotonia", "Template base para autonomia futura", "PowerPoint editável + PDF"].map((i) => (
                <div key={i} className="price-item" style={{ color: "#ddd" }}><span style={{ color: "#27AE60" }}>✓</span>{i}</div>
              ))}
              <p className="price-val" style={{ color: "#C0392B" }}>R$ 900</p>
              <a href={WA_B} className="price-btn price-btn-outline" style={{ display: "block", padding: "7px", textAlign: "center", borderRadius: 6, border: "1.5px solid #C0392B", color: "#C0392B", fontSize: 10, fontWeight: 700, textDecoration: "none" }}>Quero esta opção</a>
            </div>

            {/* OPÇÃO C */}
            <div className="price-card price-card-red">
              <div className="price-badge">★ MAIS VANTAGEM</div>
              <p className="price-opt" style={{ color: "rgba(255,255,255,0.7)" }}>OPÇÃO C</p>
              <p className="price-title">Pacote Completo</p>
              <p className="price-desc" style={{ color: "rgba(255,255,255,0.8)" }}>As duas apresentações com desconto especial</p>
              {["Tudo da Opção A (13 slides)", "Tudo da Opção B (22 slides)", "Template base com guia de uso", "Economia de R$ 300"].map((i) => (
                <div key={i} className="price-item" style={{ color: "rgba(255,255,255,0.9)" }}><span>✓</span>{i}</div>
              ))}
              <p className="price-val" style={{ color: "#fff" }}>R$ 1.800</p>
              <p className="price-note" style={{ color: "rgba(255,255,255,0.7)" }}>Separados: R$ 2.100 — Juntos: R$ 1.800</p>
              <a href={WA_C} style={{ display: "block", padding: "7px", textAlign: "center", borderRadius: 6, background: "#000", color: "#fff", fontSize: 10, fontWeight: 700, textDecoration: "none" }}>Quero o Pacote Completo</a>
            </div>
          </div>

          <div style={{ display: "flex", gap: 24, marginTop: 12, flexWrap: "wrap" }}>
            <p className="body">📅 Prazo: até 7 dias úteis após aprovação</p>
            <p className="body">📁 Entrega: arquivo PowerPoint editável + versão PDF</p>
          </div>
        </div>

        {/* SOBRE A CRISTIANE */}
        <div className="section">
          <h2 className="section-title">Quem vai fazer isso por você</h2>
          <div className="about-row">
            <div className="about-photo">
              <Image src="/cristiane.png" alt="Cristiane Lopes" width={80} height={96} style={{ width: "100%", height: "auto", filter: "grayscale(100%)", display: "block", borderRadius: 8 }} />
            </div>
            <div style={{ flex: 1 }}>
              <p className="body" style={{ marginBottom: 6 }}>
                Trabalho com apresentações estratégicas — ajudo consultoras, psicólogas organizacionais e especialistas em RH a transformar seus materiais em ferramentas de impacto real.
              </p>
              <p className="body" style={{ marginBottom: 10 }}>
                O Método SLIDE combina storytelling estratégico, design profissional e inteligência artificial.
              </p>
              <div className="pilares">
                {["Storytelling", "Design", "IA"].map((p, i) => (
                  <span key={p}>
                    <span style={{ fontSize: 11, fontWeight: 600, color: "#fff" }}>{p}</span>
                    {i < 2 && <span style={{ color: "#444", margin: "0 8px" }}>|</span>}
                  </span>
                ))}
              </div>
              <p style={{ marginTop: 8, fontSize: 10 }}>
                <a href="https://metodo-slide.vercel.app" style={{ color: "#C0392B" }}>metodo-slide.vercel.app</a>
                <span style={{ color: "#444", margin: "0 8px" }}>|</span>
                <a href="https://portfolio-cris-lopes.vercel.app/" style={{ color: "#C0392B" }}>Portfólio</a>
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="cta-box">
          <p className="cta-title">Vamos transformar suas apresentações?</p>
          <p className="cta-sub">Entre em contato e damos início ao projeto</p>
          <a href={WA} className="cta-btn" style={{ display: "inline-block", padding: "10px 24px", borderRadius: 6, background: "#000", color: "#fff", fontSize: 12, fontWeight: 700, textDecoration: "none" }}>
            Vamos conversar
          </a>
        </div>

        {/* RODAPÉ */}
        <div className="footer">
          <p style={{ fontWeight: 900, letterSpacing: 3, fontSize: 11, marginBottom: 6 }}>MÉTODO SLIDE</p>
          <p style={{ color: "#666", fontSize: 11 }}>© 2026 Cristiane Lopes — Método SLIDE</p>
        </div>

      </div>
    </div>
  );
}
