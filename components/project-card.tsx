import Image from "next/image";

type Project = {
  name: string;
  description: string;
  stack: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card group flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-sky-500/50 hover:shadow-glow">
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={`Preview do projeto ${project.name}`}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-white">{project.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-300">{project.description}</p>
        <ul className="mt-4 space-y-2 text-sm text-slate-300">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-sky-400" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 text-xs font-medium text-slate-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a className="btn-primary" href={project.liveUrl} target="_blank" rel="noreferrer">
            Ver Projeto
          </a>
          <a className="btn-secondary" href={project.githubUrl} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
