import { Container } from "@/components/container";
import { Badge } from "@/components/badge";
import { SectionHeading } from "@/components/section-heading";
import { skills } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-20">
      <Container>
        <SectionHeading eyebrow="Skills" title="Technical toolkit" desc="Across the full stack — front end, APIs, data, and testing." />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((g) => (
            <div
              key={g.title}
              className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-soft dark:border-white/10 dark:bg-ink-800/60"
            >
              <h3 className="font-bold text-slate-900 dark:text-white">{g.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => <Badge key={it}>{it}</Badge>)}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
