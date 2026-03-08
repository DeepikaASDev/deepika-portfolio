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
        <p className="mt-2 text-zinc-600">Focused, ATS-friendly categories.</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <SkillGroup title="Programming Languages" items={skills.languages} />
          <SkillGroup title="Frontend Development" items={skills.frontend} />
          <SkillGroup title="Backend / API Integration" items={skills.backendApi} />
          <SkillGroup title="Databases" items={skills.databases} />
          <SkillGroup title="DevOps & Version Control" items={skills.devops} />
          <SkillGroup title="Tools & Platforms" items={skills.tools} />
        </div>
      </Container>
    </section>
  );
}
