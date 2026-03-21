import Image from "next/image";

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

export default function Home() {
  return (
    <main style={{ backgroundColor: "#0A0A0A", color: "#ffffff" }}>
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
        {/* Fundo com gradiente sutil */}
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
          {/* Tag */}
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

          {/* Título principal */}
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

          {/* Subtítulo */}
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

          {/* CTA */}
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
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
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "#c41424";
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(-2px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 8px 30px rgba(232,25,44,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "#E8192C";
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
            }}
          >
            Quero Receber o Guia Grátis
          </a>

          {/* Nota */}
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
          {/* Linha vermelha */}
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

          {/* Cards dos 5 erros */}
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
                {/* Número */}
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

                {/* Texto */}
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

          {/* CTA abaixo dos cards */}
          <div style={{ textAlign: "center", marginTop: "60px" }}>
            <a
              href={WA_URL}
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
                padding: "16px 40px",
                textDecoration: "none",
              }}
            >
              Quero Receber o Guia Grátis →
            </a>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────
          SEÇÃO 3 — QUEM É A CRISTIANE
      ─────────────────────────────────────────── */}
      <section style={{ padding: "100px 24px" }}>
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
          {/* Foto */}
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
              {/* Borda vermelha decorativa */}
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

          {/* Texto */}
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

            <a
              href={WA_URL}
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
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "#E8192C";
                (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                  "transparent";
                (e.currentTarget as HTMLAnchorElement).style.color = "#E8192C";
              }}
            >
              Agendar um Diagnóstico
            </a>
          </div>
        </div>
      </section>

      {/* ───────────────────────────────────────────
          SEÇÃO 4 — CTA FINAL
      ─────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: "#111111",
          padding: "100px 24px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gradiente decorativo */}
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

          <a
            href={WA_URL}
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
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "#c41424";
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(-2px)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                "0 8px 30px rgba(232,25,44,0.4)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor =
                "#E8192C";
              (e.currentTarget as HTMLAnchorElement).style.transform =
                "translateY(0)";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
            }}
          >
            Quero o Guia Grátis
          </a>

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
