import { Container } from "@/components/container";
import { Badge } from "@/components/badge";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/portfolio";
import { ExternalLink } from "lucide-react";

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Things I've designed and built"
          desc="Full-stack IoT, real-time data engineering, and data analysis — what I built and how."
        />

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className="flex flex-col rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-glow dark:border-white/10 dark:bg-ink-800/60"
            >
              <p className="text-xs font-bold text-brand-500 dark:text-brand-300">0{i + 1}</p>
              <h3 className="mt-1 text-xl font-bold text-slate-900 dark:text-white">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{p.subtitle}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => <Badge key={s}>{s}</Badge>)}
              </div>
              <ul className="mt-5 flex-1 space-y-2.5 text-sm leading-6 text-slate-700 dark:text-slate-300">
                {p.impact.map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {p.links?.length ? (
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 px-3 py-2 text-sm font-medium transition hover:bg-slate-100 dark:border-white/10 dark:hover:bg-white/10"
                    >
                      {l.label} <ExternalLink size={14} />
                    </a>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
