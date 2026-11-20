import { Container } from "@/components/container";
import { Badge } from "@/components/badge";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/data/portfolio";
import { Briefcase, MapPin } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-20">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Where I've shipped production software"
          desc="Full-stack work on a live enterprise platform, and front-end engineering today."
        />

        <ol className="relative mt-10 space-y-8 border-l-2 border-brand-100 pl-6 dark:border-brand-400/20 md:pl-10">
          {experience.map((e) => (
            <li key={e.company + e.title} className="relative">
              <span className="absolute -left-[2.15rem] top-6 flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-brand-600 text-white shadow dark:border-ink-950 md:-left-[3.15rem]">
                <Briefcase size={14} />
              </span>
              <div className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-soft transition hover:shadow-glow dark:border-white/10 dark:bg-ink-800/60">
                <div className="flex flex-col gap-1 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">{e.title}</h3>
                    <p className="font-semibold text-brand-600 dark:text-brand-300">{e.company}</p>
                  </div>
                  <div className="text-sm text-slate-500 dark:text-slate-400 md:text-right">
                    <p className="font-semibold text-slate-700 dark:text-slate-200">{e.date}</p>
                    <p className="inline-flex items-center gap-1"><MapPin size={12} /> {e.location}</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2.5 text-sm leading-6 text-slate-700 dark:text-slate-300">
                  {e.points.map((p, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {e.stack.map((s) => <Badge key={s}>{s}</Badge>)}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
