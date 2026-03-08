import { Container } from "@/components/container";
import { Card, CardContent, CardHeader } from "@/components/card";
import { Badge } from "@/components/badge";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="py-16">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold">Projects</h2>
            <p className="mt-2 text-zinc-600">A few things I’ve built and shipped.</p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <Card key={p.title}>
              <CardHeader title={p.title} subtitle={p.subtitle} />
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((s) => <Badge key={s}>{s}</Badge>)}
                </div>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700">
                  {p.impact.map((i, idx) => <li key={idx}>{i}</li>)}
                </ul>
                {p.links?.length ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {p.links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl border border-zinc-200 px-3 py-2 text-sm hover:bg-zinc-50"
                      >
                        {l.label}
                      </a>
                    ))}
                  </div>
                ) : null}
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
