import { Container } from "@/components/container";
import { Card, CardContent, CardHeader } from "@/components/card";
import { highlights } from "@/data/portfolio";

export function Highlights() {
  return (
    <section className="py-10">
      <Container>
        <div className="grid gap-6 md:grid-cols-4">
          {highlights.map((h) => (
            <Card key={h.title}>
              <CardHeader title={h.title} subtitle={h.desc} />
              <CardContent>
                <div className="h-1 w-10 rounded-full bg-zinc-900" />
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
