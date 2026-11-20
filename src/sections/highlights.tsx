import { Container } from "@/components/container";
import { highlights } from "@/data/portfolio";

export function Highlights() {
  return (
    <section className="py-8">
      <Container>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="rounded-3xl border border-slate-200/80 bg-white/80 p-5 shadow-soft dark:border-white/10 dark:bg-ink-800/60"
            >
              <p className="text-gradient text-3xl font-extrabold md:text-4xl">{h.value}</p>
              <p className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">{h.label}</p>
              <p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">{h.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
