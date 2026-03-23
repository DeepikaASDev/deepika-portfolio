"use client";

import { Container } from "@/components/container";
import { profile } from "@/data/portfolio";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-16">
      <Container>
        <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-soft">
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-2 text-zinc-600">Interested in frontend, full-stack, or software engineering roles? Let’s connect.</p>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 p-5">
              <p className="text-sm text-zinc-600">Email</p>
              <a className="mt-1 block font-medium hover:underline" href={`mailto:${profile.email}`}>{profile.email}</a>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-5">
              <p className="text-sm text-zinc-600">Phone</p>
              <a className="mt-1 block font-medium hover:underline" href={`tel:${profile.phone}`}>{profile.phone}</a>
            </div>
          </div>

          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 p-5">
              <p className="text-sm text-zinc-600">LinkedIn</p>
              <a className="mt-1 block font-medium hover:underline" href={profile.links.linkedin} target="_blank" rel="noreferrer">View Profile</a>
            </div>
            <div className="rounded-2xl border border-zinc-200 p-5">
              <p className="text-sm text-zinc-600">GitHub</p>
              <a className="mt-1 block font-medium hover:underline" href={profile.links.github} target="_blank" rel="noreferrer">View Projects</a>
            </div>
          </div>

          <motion.a
            whileHover={{ y: -1 }}
            href={`mailto:${profile.email}?subject=Portfolio%20Inquiry`}
            className="mt-6 inline-flex rounded-2xl bg-zinc-900 px-5 py-3 text-white hover:bg-zinc-800"
          >
            Send a message
          </motion.a>
        </div>
      </Container>
    </section>
  );
}
