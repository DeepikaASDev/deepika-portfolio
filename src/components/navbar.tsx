"use client";

import { Container } from "@/components/container";
import { profile } from "@/data/portfolio";
import { Github, Linkedin, FileText } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">
            {profile.name}
          </a>

          <nav className="hidden gap-6 text-sm text-zinc-600 md:flex">
            {items.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-zinc-900">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <motion.a whileHover={{ y: -2 }} href={profile.links.github} target="_blank" rel="noopener noreferrer" className="rounded-lg border p-2 hover:bg-gray-100">
              <Github size={20} />
            </motion.a>
            <motion.a whileHover={{ y: -2 }} href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-lg border p-2 hover:bg-gray-100">
              <Linkedin size={20} />
            </motion.a>
            <motion.a whileHover={{ y: -2 }} href={profile.links.resumePdf} target="_blank" rel="noopener noreferrer" className="rounded-lg border p-2 hover:bg-gray-100">
              <FileText size={20} />
            </motion.a>
          </div>
        </div>
      </Container>
    </header>
  );
}
