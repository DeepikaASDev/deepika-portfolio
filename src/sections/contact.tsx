import { Container } from "@/components/container";
import { profile } from "@/data/portfolio";
import { FileText, Github, Linkedin, Mail, Phone } from "lucide-react";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`, Icon: Phone },
  { label: "LinkedIn", value: "linkedin.com/in/jakatideepika", href: profile.links.linkedin, Icon: Linkedin },
  { label: "GitHub", value: "github.com/DeepikaASDev", href: profile.links.github, Icon: Github }
];

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-20">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 p-8 text-white shadow-glow md:p-12">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent-400/30 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Let&apos;s build something together</h2>
            <p className="mt-3 max-w-2xl text-brand-100">
              I&apos;m looking for Full Stack, Front-End, and Software Engineering roles in the San Francisco Bay Area, anywhere in the U.S., or remote. {profile.workAuth}.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {links.map(({ label, value, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-4 transition hover:bg-white/20"
                >
                  <Icon size={20} />
                  <span>
                    <span className="block text-xs uppercase tracking-wide text-brand-100">{label}</span>
                    <span className="block font-medium">{value}</span>
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}?subject=Opportunity%20for%20Deepika`} className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-brand-700 transition hover:bg-brand-50">
                <Mail size={18} /> Email me
              </a>
              <a href={profile.links.resumePdf} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-2xl border border-white/40 px-5 py-3 font-semibold transition hover:bg-white/10">
                <FileText size={18} /> Download resume
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
