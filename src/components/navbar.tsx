"use client";

import { useState } from "react";
import { Container } from "@/components/container";
import { ThemeToggle } from "@/components/theme-toggle";
import { profile } from "@/data/portfolio";
import { Github, Linkedin, FileText, Menu, X } from "lucide-react";

const items = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" }
];

const iconBtn =
  "rounded-xl border border-slate-200 p-2 text-slate-700 transition hover:bg-slate-100 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/10";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/75 backdrop-blur-md dark:border-white/10 dark:bg-ink-950/70">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="text-lg font-bold tracking-tight">
            <span className="text-gradient">DJ</span>
            <span className="ml-2 hidden text-slate-900 dark:text-white sm:inline">{profile.name}</span>
          </a>

          <nav className="hidden gap-7 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
            {items.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-brand-600 dark:hover:text-brand-300">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={`${iconBtn} hidden sm:inline-flex`}>
              <Github size={18} />
            </a>
            <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`${iconBtn} hidden sm:inline-flex`}>
              <Linkedin size={18} />
            </a>
            <a href={profile.links.resumePdf} target="_blank" rel="noopener noreferrer" aria-label="Resume" className={`${iconBtn} hidden sm:inline-flex`}>
              <FileText size={18} />
            </a>
            <ThemeToggle />
            <button type="button" aria-label="Menu" onClick={() => setOpen((o) => !o)} className={`${iconBtn} md:hidden`}>
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {open ? (
          <nav className="flex flex-col gap-1 pb-4 md:hidden">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
          </nav>
        ) : null}
      </Container>
    </header>
  );
}
