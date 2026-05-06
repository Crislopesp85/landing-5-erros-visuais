import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proposta PDF — Sebastião Souza | SIMTC",
  robots: { index: false, follow: false },
};

export default function PDFLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
