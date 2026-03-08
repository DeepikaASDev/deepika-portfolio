import { Container } from "@/components/container";
import { Card, CardContent, CardHeader } from "@/components/card";
import { experience } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="py-16">
      <Container>
        <h2 className="text-2xl font-semibold">Experience</h2>
        <p className="mt-2 text-zinc-600">What I did and how I contributed.</p>

        <div className="mt-8 space-y-6">
          {experience.map((e) => (
            <Card key={e.company + e.title}>
              <CardHeader title={`${e.title} — ${e.company}`} subtitle={e.date} />
              <CardContent>
                <ul className="list-disc space-y-2 pl-5 text-sm text-zinc-700">
                  {e.points.map((p, idx) => <li key={idx}>{p}</li>)}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
