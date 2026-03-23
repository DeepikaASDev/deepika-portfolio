import { Container } from "@/components/container";
import { Card, CardContent, CardHeader } from "@/components/card";
import { certifications } from "@/data/portfolio";

export function Certifications() {
  return (
    <section id="certifications" className="py-16 bg-zinc-50/60">
      <Container>
        <h2 className="text-2xl font-semibold">Certifications</h2>
        <p className="mt-2 text-zinc-600">Relevant certification aligned with my resume and learning path.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {certifications.map((cert) => (
            <Card key={cert.title}>
              <CardHeader title={cert.title} subtitle={cert.provider} />
              <CardContent>
                <p className="text-sm text-zinc-600">Completed: {cert.date}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
