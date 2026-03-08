import { Container } from "@/components/container";
import { Card, CardContent, CardHeader } from "@/components/card";
import { education } from "@/data/portfolio";

export function Education() {
  return (
    <section id="education" className="py-14 bg-zinc-50/50">
      <Container>
        <h2 className="text-2xl font-semibold">Education</h2>
        <p className="mt-2 text-zinc-600">My academic background and current studies.</p>

        <div className="mt-8 space-y-6">
          {education.map((edu, index) => (
            <Card key={index} className="rounded-3xl border border-zinc-200 bg-white shadow-sm">
              <CardHeader title={edu.degree} subtitle={`${edu.university} • ${edu.location}`} />
              <CardContent>
                <p className="text-sm font-medium text-zinc-500">{edu.date}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-zinc-700">
                  {edu.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}