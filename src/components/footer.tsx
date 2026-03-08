import { Container } from "@/components/container";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 py-10">
      <Container>
        <div className="flex flex-col gap-2 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p className="text-zinc-500">Built with Next.js + TypeScript.</p>
        </div>
      </Container>
    </footer>
  );
}
