export function SectionHeading({ eyebrow, title, desc }: { eyebrow: string; title: string; desc?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-600 dark:text-brand-300">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">{title}</h2>
      {desc ? <p className="mt-3 text-slate-600 dark:text-slate-400">{desc}</p> : null}
    </div>
  );
}
