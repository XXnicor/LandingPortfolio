type SectionHeadingProps = {
  id?: string;
  title: string;
  subtitle: string;
};

export function SectionHeading({ id, title, subtitle }: SectionHeadingProps) {
  return (
    <header id={id} className="mb-10 scroll-mt-24">
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{subtitle}</p>
    </header>
  );
}
