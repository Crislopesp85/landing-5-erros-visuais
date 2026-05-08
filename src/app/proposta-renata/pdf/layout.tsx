import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proposta PDF — Renata Burgo | PotensRH",
  robots: { index: false, follow: false },
};

export default function PDFLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
