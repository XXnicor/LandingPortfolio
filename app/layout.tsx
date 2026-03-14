import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Portfólio Frontend | Lucas Almeida',
  description:
    'Landing page profissional para recrutadores: projetos reais, experiência prática e contatos de um desenvolvedor frontend em busca de estágio ou vaga júnior.',
  keywords: ['Frontend Developer', 'Next.js', 'React', 'TypeScript', 'TailwindCSS', 'Portfólio'],
  openGraph: {
    title: 'Lucas Almeida | Frontend Developer',
    description: 'Portfólio com projetos reais, stack moderna e experiência prática para oportunidades júnior.',
    type: 'website',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
