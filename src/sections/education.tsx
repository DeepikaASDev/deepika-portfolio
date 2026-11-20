import { Container } from "@/components/container";
import { SectionHeading } from "@/components/section-heading";
import { certifications, education } from "@/data/portfolio";
import { Award, GraduationCap } from "lucide-react";

const box = "rounded-3xl border border-slate-200/80 bg-white/80 p-6 shadow-soft dark:border-white/10 dark:bg-ink-800/60";

export function Education() {
  return (
    <section id="education" className="py-16 md:py-20">
      <Container>
        <SectionHeading eyebrow="Education" title="Education & certification" />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {education.map((edu) => (
            <div key={edu.degree} className={box}>
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 dark:bg-brand-400/10 dark:text-brand-300">
                  <GraduationCap size={20} />
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">{edu.degree}</h3>
                  <p className="text-sm font-medium text-brand-600 dark:text-brand-300">{edu.university}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{edu.location} · {edu.date}</p>
                  {edu.points.map((pt) => (
                    <p key={pt} className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">{pt}</p>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {certifications.map((c) => (
            <div key={c.title} className={`${box} md:col-span-2`}>
              <div className="flex items-center gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-amber-50 text-accent-500 dark:bg-accent-400/10 dark:text-accent-400">
                  <Award size={20} />
                </span>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white">{c.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{c.provider} · {c.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
