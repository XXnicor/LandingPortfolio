import { ProjectCard } from "@/components/project-card";
import { SectionTitle } from "@/components/section-title";
import { projects, techStack } from "@/components/data";

const contactLinks = [
  { name: "GitHub", href: "https://github.com/seuusuario" },
  { name: "LinkedIn", href: "https://linkedin.com/in/seuperfil" },
  { name: "Email", href: "mailto:contato@lucasdev.com" }
];

export default function Home() {
  return (
    <main>
      <header className="sticky top-0 z-20 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
        <nav className="container-custom flex h-16 items-center justify-between">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-300">Lucas Andrade</span>
          <a href="#contato" className="btn-secondary py-2">
            Entrar em contato
          </a>
        </nav>
      </header>

      <section className="container-custom py-20 md:py-28">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-center">
          <div className="space-y-6 animate-fadeIn">
            <span className="inline-flex rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-1 text-sm text-sky-300">
              Disponível para estágio e vaga júnior
            </span>
            <h1 className="text-4xl font-extrabold leading-tight text-white md:text-6xl">
              Lucas Andrade
              <span className="mt-2 block text-2xl font-semibold text-slate-300 md:text-3xl">Frontend Developer</span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
              Desenvolvedor focado em criar interfaces modernas, rápidas e acessíveis com React e Next.js.
              Tenho experiência prática em produtos reais, do protótipo ao deploy, sempre com atenção em UX e
              performance.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="#projetos" className="btn-primary">
                Ver Projetos
              </a>
              <a href="https://github.com/seuusuario" className="btn-secondary" target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/seuperfil"
                className="btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="card animate-float p-6">
            <p className="text-sm text-slate-400">Status atual</p>
            <p className="mt-2 text-xl font-semibold text-white">Construindo produtos com foco em resultado.</p>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                <p className="text-slate-400">Projetos publicados</p>
                <p className="mt-1 text-2xl font-bold text-sky-300">8+</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                <p className="text-slate-400">Stacks dominadas</p>
                <p className="mt-1 text-2xl font-bold text-sky-300">7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-custom py-12 md:py-20">
        <SectionTitle
          eyebrow="Sobre"
          title="Foco em desenvolvimento frontend orientado a produto"
          description="Atuo construindo aplicações reais com React, Next.js e TypeScript, priorizando interfaces escaláveis e experiência de usuário. Tenho interesse em resolver problemas de negócio com soluções práticas, colaborando em times e ciclos de melhoria contínua."
        />
      </section>

      <section id="projetos" className="container-custom py-12 md:py-20">
        <SectionTitle
          eyebrow="Projetos"
          title="Cases que demonstram execução técnica e visão de produto"
          description="Projetos com arquitetura moderna, integração com serviços reais e deploy contínuo."
        />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </section>

      <section className="container-custom py-12 md:py-20">
        <SectionTitle
          eyebrow="Experiência"
          title="Experiência prática em ambiente colaborativo"
          description="Frontend Developer — Projeto Voluntário"
        />
        <div className="card p-6 md:p-8">
          <ul className="space-y-3 text-slate-300">
            <li>• Desenvolvimento de interfaces em React e Next.js com componentes reutilizáveis.</li>
            <li>• Colaboração em equipe utilizando Git e fluxo de branches para features.</li>
            <li>• Participação na implementação de funcionalidades de produto ponta a ponta.</li>
            <li>• Rotina em contexto semelhante a time profissional com entregas semanais.</li>
          </ul>
        </div>
      </section>

      <section className="container-custom py-12 md:py-20">
        <SectionTitle eyebrow="Stack" title="Tecnologias" description="Ferramentas que utilizo para entregar aplicações frontend robustas." />
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
          {techStack.map((tech) => (
            <div
              key={tech}
              className="card flex min-h-20 items-center justify-center px-4 py-5 text-sm font-semibold text-slate-200 transition hover:border-sky-500/50 hover:text-sky-300"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      <section id="contato" className="container-custom py-12 md:py-20">
        <SectionTitle
          eyebrow="Contato"
          title="Vamos conversar sobre sua próxima oportunidade"
          description="Acesse meus canais e entre em contato para falarmos sobre como posso contribuir com seu time."
        />
        <div className="card flex flex-col gap-6 p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div className="flex flex-wrap gap-3">
            {contactLinks.map((link) => (
              <a key={link.name} href={link.href} target="_blank" rel="noreferrer" className="btn-secondary">
                {link.name}
              </a>
            ))}
          </div>
          <a className="btn-primary" href="mailto:contato@lucasdev.com">
            Entrar em contato
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-8">
        <div className="container-custom flex flex-col gap-2 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Lucas Andrade. Todos os direitos reservados.</p>
          <p>Desenvolvido com Next.js, TypeScript e TailwindCSS.</p>
        </div>
      </footer>
    </main>
  );
}
