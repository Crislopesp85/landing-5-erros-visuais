import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proposta PDF — Sebastião Souza | SIM Treinamento e Consultoria",
  robots: { index: false, follow: false },
};

export default function PDFLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
