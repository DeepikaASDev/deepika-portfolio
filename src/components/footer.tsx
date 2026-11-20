import { Container } from "@/components/container";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 py-8 dark:border-white/10">
      <Container>
        <div className="flex flex-col gap-2 text-sm text-slate-500 dark:text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>Built with Next.js, TypeScript &amp; Tailwind CSS · Deployed on Vercel</p>
        </div>
      </Container>
    </footer>
  );
}
