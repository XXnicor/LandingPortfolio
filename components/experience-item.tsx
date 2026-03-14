type ExperienceItemProps = {
  title: string;
  bullets: string[];
};

export function ExperienceItem({ title, bullets }: ExperienceItemProps) {
  return (
    <article className="card-base hover:border-sky-400/40">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm text-slate-300">
        {bullets.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-sky-400" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
