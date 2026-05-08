import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proposta Exclusiva — Renata Burgo | PotensRH",
  description: "Proposta de redesign estratégico preparada exclusivamente para Renata Burgo.",
  robots: { index: false, follow: false },
  openGraph: {
    title: "Proposta Exclusiva — Renata Burgo | PotensRH",
    description: "Proposta de redesign estratégico preparada exclusivamente para Renata Burgo.",
    url: "https://metodo-slide.vercel.app/proposta-renata",
    siteName: "Método SLIDE",
    locale: "pt_BR",
    type: "website",
  },
};

export default function PropostaRenataLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
