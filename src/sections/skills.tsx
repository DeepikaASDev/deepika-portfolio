import { Container } from "@/components/container";
import { Card, CardContent, CardHeader } from "@/components/card";
import { skills } from "@/data/portfolio";
import { Badge } from "@/components/badge";

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <Card>
      <CardHeader title={title} />
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {items.map((it) => <Badge key={it}>{it}</Badge>)}
        </div>
      </CardContent>
    </Card>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-16 bg-zinc-50/60">
      <Container>
        <h2 className="text-2xl font-semibold">Technical Skills</h2>
        <p className="mt-2 text-zinc-600">Skills updated to match the resume content directly.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <SkillGroup title="Programming Languages" items={skills.languages} />
          <SkillGroup title="Frontend" items={skills.frontend} />
          <SkillGroup title="Backend & APIs" items={skills.backendApi} />
          <SkillGroup title="Databases & Caching" items={skills.databases} />
          <SkillGroup title="Tools" items={skills.tools} />
          <SkillGroup title="Software Development Practices" items={skills.practices} />
        </div>
      </Container>
    </section>
  );
}
