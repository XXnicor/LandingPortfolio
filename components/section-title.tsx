type SectionTitleProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionTitle({ id, eyebrow, title, description }: SectionTitleProps) {
  return (
    <header id={id} className="mb-8 md:mb-12">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-sky-400">{eyebrow}</p>
      <h2 className="text-2xl font-bold text-white md:text-4xl">{title}</h2>
      {description ? <p className="mt-4 max-w-3xl text-slate-300">{description}</p> : null}
    </header>
  );
}
