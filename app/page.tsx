import { ExperienceItem } from '@/components/experience-item';
import { ProjectCard } from '@/components/project-card';
import { SectionHeading } from '@/components/section-heading';

const projects = [
  {
    name: 'EncontraPet',
    description:
      'Plataforma MVP para ajudar moradores a encontrar pets perdidos em condomínios. Inclui cadastro de pets, banco de dados em Supabase, deploy na Vercel e validação com usuários reais.',
    image:
      'https://images.unsplash.com/photo-1517423738875-5ce310acd3da?auto=format&fit=crop&w=1000&q=80',
    technologies: ['Next.js', 'Supabase', 'Tailwind', 'Vercel'],
    projectUrl: 'https://exemplo-encontrapet.vercel.app',
    githubUrl: 'https://github.com/seuusuario/encontrapet',
  },
  {
    name: 'DashFinance',
    description:
      'Dashboard financeiro responsivo com gráficos, filtros e autenticação. Projeto focado em UX, performance e consumo de API REST.',
    image:
      'https://images.unsplash.com/photo-1551281044-8a6f1807adc6?auto=format&fit=crop&w=1000&q=80',
    technologies: ['React', 'TypeScript', 'Tailwind', 'Chart.js'],
    projectUrl: 'https://exemplo-dashfinance.vercel.app',
    githubUrl: 'https://github.com/seuusuario/dashfinance',
  },
  {
    name: 'TaskFlow',
    description:
      'Aplicação de produtividade com drag-and-drop, organização por status e persistência de dados. Foco em componentes reutilizáveis e arquitetura limpa.',
    image:
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=1000&q=80',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'DnD Kit'],
    projectUrl: 'https://exemplo-taskflow.vercel.app',
    githubUrl: 'https://github.com/seuusuario/taskflow',
  },
];

const stack = ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Supabase', 'Git', 'Vercel'];

export default function Home() {
  return (
    <main>
      <section className="bg-hero-gradient">
        <div className="section-container py-28 md:py-36">
          <p className="inline-flex rounded-full border border-sky-400/35 bg-sky-400/10 px-3 py-1 text-xs uppercase tracking-[0.14em] text-sky-300">
            Disponível para estágio e vaga júnior
          </p>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-white md:text-6xl">Lucas Almeida</h1>
          <p className="mt-4 text-xl text-sky-300 md:text-2xl">Frontend Developer</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
            Desenvolvedor frontend focado em transformar ideias em interfaces modernas, rápidas e intuitivas.
            Tenho experiência prática construindo aplicações reais com React e Next.js, com atenção especial a
            performance, usabilidade e qualidade de código.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#projetos" className="rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400">
              Ver Projetos
            </a>
            <a
              href="https://github.com/seuusuario"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-800"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/seuusuario"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-slate-700 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:border-slate-500 hover:bg-slate-800"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <section className="section-container" id="sobre">
        <SectionHeading
          title="Sobre"
          subtitle="Sou dedicado ao desenvolvimento frontend e à criação de experiências digitais claras e eficientes. Já construí aplicações reais, colaborando com times e processos de produto para resolver problemas com foco no usuário e no negócio."
        />
      </section>

      <section className="section-container pt-2" id="projetos">
        <SectionHeading
          title="Projetos em destaque"
          subtitle="Projetos que demonstram experiência prática com desenvolvimento frontend moderno, integração com serviços e entrega orientada a resultados."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </section>

      <section className="section-container pt-2" id="experiencia">
        <SectionHeading
          title="Experiência prática"
          subtitle="Vivência em ambiente colaborativo, com ritmo de produto e responsabilidades similares às de um time profissional."
        />
        <ExperienceItem
          title="Frontend Developer – Projeto Voluntário"
          bullets={[
            'Desenvolvimento de interfaces com React e Next.js.',
            'Colaboração em equipe usando Git e fluxo de pull requests.',
            'Participação ativa em features do produto, do planejamento à entrega.',
            'Atuação em um ambiente com práticas próximas ao mercado profissional.',
          ]}
        />
      </section>

      <section className="section-container pt-2" id="stack">
        <SectionHeading
          title="Stack / Tecnologias"
          subtitle="Ferramentas utilizadas para criar aplicações escaláveis, performáticas e prontas para produção."
        />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {stack.map((item) => (
            <div key={item} className="card-base px-4 py-4 text-center text-sm font-medium text-slate-200 hover:border-sky-400/40">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="section-container pt-2" id="contato">
        <SectionHeading
          title="Contato"
          subtitle="Vamos conversar sobre como posso contribuir com o seu time e acelerar entregas frontend com qualidade."
        />
        <div className="card-base flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2 text-sm text-slate-300">
            <p>
              GitHub:{' '}
              <a className="text-sky-300 hover:text-sky-200" href="https://github.com/seuusuario" target="_blank" rel="noreferrer">
                github.com/seuusuario
              </a>
            </p>
            <p>
              LinkedIn:{' '}
              <a className="text-sky-300 hover:text-sky-200" href="https://linkedin.com/in/seuusuario" target="_blank" rel="noreferrer">
                linkedin.com/in/seuusuario
              </a>
            </p>
            <p>
              Email:{' '}
              <a className="text-sky-300 hover:text-sky-200" href="mailto:lucas.frontend@email.com">
                lucas.frontend@email.com
              </a>
            </p>
          </div>
          <a
            href="mailto:lucas.frontend@email.com"
            className="w-fit rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-400"
          >
            Entrar em contato
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-8">
        <p className="text-center text-sm text-slate-400">© {new Date().getFullYear()} Lucas Almeida · Frontend Developer</p>
      </footer>
    </main>
  );
}
