export default function Privacidade() {
  const h2Style = {
    fontFamily: "'Barlow Condensed', sans-serif",
    fontWeight: 900,
    fontSize: "1.4rem",
    textTransform: "uppercase" as const,
    letterSpacing: "0.03em",
    marginTop: "48px",
    marginBottom: "16px",
    color: "#fff",
  };

  const pStyle = {
    color: "#b0b0b0",
    fontSize: "1rem",
    lineHeight: "1.8",
    fontFamily: "'DM Sans', sans-serif",
    marginBottom: "16px",
  };

  return (
    <main
      style={{
        backgroundColor: "#0A0A0A",
        color: "#ffffff",
        minHeight: "100vh",
        padding: "120px 24px 80px",
      }}
    >
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <a
          href="/"
          style={{
            color: "#E8192C",
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.85rem",
            textDecoration: "none",
            marginBottom: "32px",
            display: "inline-block",
          }}
        >
          ← Voltar ao site
        </a>

        <h1
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(2rem, 5vw, 3rem)",
            textTransform: "uppercase",
            marginBottom: "16px",
          }}
        >
          Politica de Privacidade
        </h1>

        <p style={{ ...pStyle, color: "#555", marginBottom: "48px" }}>
          Ultima atualizacao: marco de 2026
        </p>

        <h2 style={h2Style}>1. Dados Coletados</h2>
        <p style={pStyle}>
          Ao preencher os formularios deste site, coletamos as seguintes
          informacoes fornecidas voluntariamente por voce:
        </p>
        <ul style={{ ...pStyle, paddingLeft: "24px" }}>
          <li>Nome completo</li>
          <li>Endereco de e-mail</li>
          <li>Numero de WhatsApp</li>
        </ul>

        <h2 style={h2Style}>2. Finalidade do Uso</h2>
        <p style={pStyle}>Os dados coletados sao utilizados exclusivamente para:</p>
        <ul style={{ ...pStyle, paddingLeft: "24px" }}>
          <li>Envio dos materiais gratuitos solicitados (guias, checklists e templates)</li>
          <li>Contato comercial via WhatsApp relacionado aos servicos da Cristiane Lopes</li>
          <li>Comunicacao sobre novos conteudos e materiais relevantes</li>
        </ul>

        <h2 style={h2Style}>3. Compartilhamento</h2>
        <p style={pStyle}>
          Seus dados pessoais nao sao vendidos, alugados ou compartilhados com
          terceiros. As informacoes sao armazenadas de forma segura e acessadas
          exclusivamente pela equipe da Cristiane Lopes.
        </p>

        <h2 style={h2Style}>4. Armazenamento e Seguranca</h2>
        <p style={pStyle}>
          Os dados sao armazenados em servidores seguros com criptografia.
          Adotamos medidas tecnicas e organizacionais para proteger suas
          informacoes contra acesso nao autorizado, perda ou destruicao.
        </p>

        <h2 style={h2Style}>5. Seus Direitos</h2>
        <p style={pStyle}>Voce tem o direito de:</p>
        <ul style={{ ...pStyle, paddingLeft: "24px" }}>
          <li>Solicitar acesso aos seus dados pessoais armazenados</li>
          <li>Solicitar a correcao de dados incorretos</li>
          <li>Solicitar a exclusao completa dos seus dados a qualquer momento</li>
          <li>Revogar o consentimento para uso dos seus dados</li>
        </ul>
        <p style={pStyle}>
          Para exercer qualquer um desses direitos, entre em contato pelo
          WhatsApp:{" "}
          <a
            href="https://wa.me/5491125716184"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#E8192C", textDecoration: "none" }}
          >
            +54 9 11 2571 6184
          </a>
        </p>

        <h2 style={h2Style}>6. Cookies</h2>
        <p style={pStyle}>
          Este site nao utiliza cookies de rastreamento. Podem ser utilizados
          cookies essenciais para o funcionamento tecnico da pagina.
        </p>

        <h2 style={h2Style}>7. Contato</h2>
        <p style={pStyle}>
          Se tiver duvidas sobre esta politica de privacidade, entre em contato:
        </p>
        <p style={pStyle}>
          <strong style={{ color: "#fff" }}>Cristiane Lopes</strong>
          <br />
          Metodo SLIDE™
          <br />
          WhatsApp:{" "}
          <a
            href="https://wa.me/5491125716184"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#E8192C", textDecoration: "none" }}
          >
            +54 9 11 2571 6184
          </a>
        </p>

        <div
          style={{
            borderTop: "1px solid #1f1f1f",
            marginTop: "64px",
            paddingTop: "24px",
            textAlign: "center",
          }}
        >
          <p style={{ color: "#333", fontSize: "0.8rem", fontFamily: "'DM Sans', sans-serif" }}>
            © {new Date().getFullYear()} Cristiane Lopes. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </main>
  );
}
