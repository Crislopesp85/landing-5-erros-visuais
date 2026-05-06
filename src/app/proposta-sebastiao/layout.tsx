import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proposta Exclusiva — Sebastião Souza | SIMTC",
  description: "Proposta de redesign estratégico preparada exclusivamente para Sebastião Souza.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PropostaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
