import Image from 'next/image';

type Project = {
  name: string;
  description: string;
  image: string;
  technologies: string[];
  projectUrl: string;
  githubUrl: string;
};

export function ProjectCard({ name, description, image, technologies, projectUrl, githubUrl }: Project) {
  return (
    <article className="group card-base hover:-translate-y-1 hover:border-sky-400/40 hover:shadow-glow">
      <div className="relative mb-5 h-44 overflow-hidden rounded-xl border border-slate-700/60">
        <Image
          src={image}
          alt={`Preview do projeto ${name}`}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-semibold text-white">{name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-300">{description}</p>
      <ul className="mt-4 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <li key={tech} className="rounded-full border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-slate-200">
            {tech}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex gap-3">
        <a
          href={projectUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-sky-400"
        >
          Ver Projeto
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-lg border border-slate-700 px-4 py-2 text-sm font-medium text-slate-100 transition hover:border-slate-500 hover:bg-slate-800"
        >
          GitHub
        </a>
      </div>
    </article>
  );
}
