import { PageShell } from "@/components/motion/page-shell";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <PageShell>
      <section className="container-shell pt-10 pb-8 md:pt-14 md:pb-12">
        <div className="glass-panel rounded-[34px] border border-white/50 px-6 py-12 md:px-10 md:py-16">
          <span className="inline-flex rounded-full bg-[var(--surface-muted)] px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
            {eyebrow}
          </span>
          <h1 className="mt-6 max-w-3xl font-[var(--font-heading)] text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted-foreground)] sm:text-lg">
            {description}
          </p>
        </div>
      </section>
    </PageShell>
  );
}
