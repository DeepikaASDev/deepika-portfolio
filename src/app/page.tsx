import { Hero } from "@/sections/hero";
import { Highlights } from "@/sections/highlights";
import { Projects } from "@/sections/projects";
import { Skills } from "@/sections/skills";
import { Education } from "@/sections/education";
import { Experience } from "@/sections/experience";
import { Contact } from "@/sections/contact";

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Highlights />
      <Projects />
      <Skills />
      <Education />
      <Experience />
      <Contact />
    </div>
  );
}