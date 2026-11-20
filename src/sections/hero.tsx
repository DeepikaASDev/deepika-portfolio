"use client";

import { Container } from "@/components/container";
import { profile } from "@/data/portfolio";
import { motion } from "framer-motion";
import { ArrowRight, BadgeCheck, FileText, Github, Linkedin, Mail, MapPin } from "lucide-react";

const fade = (delay: number) => ({
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.5 }
});

const chip =
  "inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300";

export function Hero() {
  return (
    <section className="pb-10 pt-14 md:pb-16 md:pt-24">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-[1.25fr_0.75fr]">
          <div>
            <motion.div {...fade(0)} className="flex flex-wrap gap-2">
              <span className={chip}>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Open to Full Stack / Software Engineering roles
              </span>
              <span className={chip}><MapPin size={12} /> {profile.location}</span>
              <span className={chip}><BadgeCheck size={12} /> {profile.workAuth}</span>
            </motion.div>

            <motion.h1 {...fade(0.05)} className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">
              Hi, I&apos;m <span className="text-gradient">{profile.name}</span>
            </motion.h1>

            <motion.p {...fade(0.1)} className="mt-4 text-xl font-semibold text-slate-800 dark:text-slate-100 md:text-2xl">
              {profile.title}
            </motion.p>
            <motion.p {...fade(0.12)} className="mt-1 text-sm font-medium text-brand-600 dark:text-brand-300 md:text-base">
              {profile.subtitle}
            </motion.p>

            <motion.p {...fade(0.18)} className="mt-6 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-300 md:text-lg md:leading-8">
              {profile.about}
            </motion.p>
            <motion.p {...fade(0.22)} className="mt-3 max-w-2xl text-base leading-7 text-slate-600 dark:text-slate-400">
              {profile.aboutMore}
            </motion.p>

            <motion.div {...fade(0.28)} className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#experience"
                className="inline-flex items-center gap-2 rounded-2xl bg-brand-600 px-5 py-3 font-medium text-white shadow-lg shadow-brand-600/25 transition hover:bg-brand-500"
              >
                See my work <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={profile.links.resumePdf}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-5 py-3 font-medium text-slate-900 transition hover:bg-slate-100 dark:border-white/15 dark:text-white dark:hover:bg-white/10"
              >
                <FileText className="h-4 w-4" /> Resume
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-5 py-3 font-medium text-slate-900 transition hover:bg-slate-100 dark:border-white/15 dark:text-white dark:hover:bg-white/10"
              >
                <Mail className="h-4 w-4" /> Contact
              </a>
              <a href={profile.links.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-2xl border border-slate-300 p-3 transition hover:bg-slate-100 dark:border-white/15 dark:hover:bg-white/10">
                <Github className="h-5 w-5" />
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-2xl border border-slate-300 p-3 transition hover:bg-slate-100 dark:border-white/15 dark:hover:bg-white/10">
                <Linkedin className="h-5 w-5" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="relative mx-auto w-full max-w-xs md:max-w-sm"
          >
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-brand-500/30 via-brand-300/10 to-accent-400/30 blur-2xl" />
            <div className="relative rounded-[2rem] border border-slate-200 bg-white/80 p-3 shadow-soft dark:border-white/10 dark:bg-ink-800/70">
              <div className="aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-slate-100 dark:bg-ink-700">
                <img src="/DP.jpg" alt="Deepika Jakati" className="h-full w-full object-cover" />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
