import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "5 Erros que Fazem sua Apresentação Parecer Amadora — Cristiane Lopes",
  description:
    "Baixe o guia gratuito e descubra o que está sabotando sua autoridade em reuniões de negócios.",
  openGraph: {
    title: "5 Erros que Fazem sua Apresentação Parecer Amadora",
    description:
      "Baixe o guia gratuito e descubra o que está sabotando sua autoridade em reuniões de negócios.",
    type: "website",
    locale: "pt_BR",
    siteName: "Cristiane Lopes — Método SLIDE™",
  },
  twitter: {
    card: "summary_large_image",
    title: "5 Erros que Fazem sua Apresentação Parecer Amadora",
    description:
      "Baixe o guia gratuito e descubra o que está sabotando sua autoridade em reuniões de negócios.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;900&family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
