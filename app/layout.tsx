import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfólio Frontend | Lucas Andrade",
  description:
    "Portfólio profissional de desenvolvedor frontend com foco em React, Next.js e TypeScript para vagas de estágio ou júnior.",
  keywords: [
    "frontend developer",
    "next.js",
    "react",
    "typescript",
    "portfolio",
    "estágio",
    "vaga júnior"
  ],
  openGraph: {
    title: "Lucas Andrade — Frontend Developer",
    description:
      "Projetos reais, experiência prática e contato direto para oportunidades de estágio ou vaga júnior.",
    type: "website",
    locale: "pt_BR"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
