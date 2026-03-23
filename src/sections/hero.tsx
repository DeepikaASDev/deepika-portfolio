"use client";

import { Container } from "@/components/container";
import { Badge } from "@/components/badge";
import { profile } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="py-14 md:py-20">
      <Container>
        <div className="grid items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              <Badge>{profile.location}</Badge>
              {/* <Badge>Open to Software Engineering Opportunities</Badge> */}
              <Badge>M.S. Computer Science</Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05, duration: 0.5 }}
              className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mt-3 text-xl font-medium text-zinc-700"
            >
              {profile.title}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="mt-2 text-lg text-zinc-500"
            >
              {profile.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-6 max-w-2xl text-lg leading-8 text-zinc-700"
            >
              {profile.about}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-2xl bg-zinc-900 px-5 py-3 text-white hover:bg-zinc-800"
              >
                View Projects <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href={profile.links.resumePdf}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-zinc-200 px-5 py-3 text-zinc-900 hover:bg-zinc-50"
              >
                <FileText className="h-4 w-4" /> Resume
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-2xl border border-zinc-200 px-5 py-3 text-zinc-900 hover:bg-zinc-50"
              >
                <Mail className="h-4 w-4" /> Contact Me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              <a href={profile.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 px-4 py-2 text-sm hover:bg-zinc-50"><Github className="h-4 w-4" /> GitHub</a>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 px-4 py-2 text-sm hover:bg-zinc-50"><Linkedin className="h-4 w-4" /> LinkedIn</a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.05, duration: 0.5 }}
            className="mx-auto w-full max-w-sm"
          >
            <div className="rounded-3xl border border-zinc-200 bg-white p-4 shadow-sm">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100">
                <img src="/DP.jpg" alt="Deepika Jakati" className="h-full w-full object-cover" />
              </div>

              {/* <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <p className="text-xs uppercase tracking-wide text-zinc-500">Experience</p>
                  <p className="mt-1 font-semibold text-zinc-800">2+ Years</p>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <p className="text-xs uppercase tracking-wide text-zinc-500">Focus</p>
                  <p className="mt-1 font-semibold text-zinc-800">Full Stack</p>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                  <p className="text-xs uppercase tracking-wide text-zinc-500">Projects</p>
                  <p className="mt-1 font-semibold text-zinc-800">Data + IoT</p>
                </div>
              </div> */}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
