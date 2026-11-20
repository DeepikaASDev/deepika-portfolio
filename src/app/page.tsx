import { Hero } from "@/sections/hero";
import { Highlights } from "@/sections/highlights";
import { Experience } from "@/sections/experience";
import { Projects } from "@/sections/projects";
import { Skills } from "@/sections/skills";
import { Education } from "@/sections/education";
import { Contact } from "@/sections/contact";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Highlights />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}
