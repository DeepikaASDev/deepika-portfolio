import { cn } from "@/lib/utils";

export function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-slate-200/80 bg-white/80 shadow-soft backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:shadow-glow",
        "dark:border-white/10 dark:bg-ink-800/60",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="px-6 pt-6">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
      {subtitle ? <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{subtitle}</p> : null}
    </div>
  );
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div className="px-6 pb-6 pt-4 text-slate-700 dark:text-slate-300">{children}</div>;
}
