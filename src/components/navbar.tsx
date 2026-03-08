"use client";

import { Container } from "@/components/container";
import { profile } from "@/data/portfolio";
import { Github, Linkedin, FileText } from "lucide-react";
import { motion } from "framer-motion";

const items = [
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-blue-100 bg-white/80 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          
          {/* Name */}
          <a href="#" className="font-semibold tracking-tight">
            {profile.name}
          </a>

          {/* Navigation */}
          <nav className="hidden gap-6 text-sm text-zinc-600 md:flex">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-zinc-900"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">

            {/* GitHub */}
            <motion.a
              whileHover={{ y: -2 }}
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border hover:bg-gray-100"
            >
              <Github size={20} />
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              whileHover={{ y: -2 }}
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border hover:bg-gray-100"
            >
              <Linkedin size={20} />
            </motion.a>

            {/* Resume */}
            <motion.a
              whileHover={{ y: -2 }}
              href={profile.links.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border hover:bg-gray-100"
            >
              <FileText size={20} />
            </motion.a>

          </div>

        </div>
      </Container>
    </header>
  );
}