import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proposta Exclusiva — Renata Burgo | PotensRH",
  description: "Proposta de redesign estratégico preparada exclusivamente para Renata Burgo.",
  robots: { index: false, follow: false },
};

export default function PropostaRenataLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
