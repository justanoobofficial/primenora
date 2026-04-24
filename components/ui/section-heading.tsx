import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <span className="mb-4 inline-flex rounded-full border border-[var(--border)] bg-white/80 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-balance font-[var(--font-heading)] text-3xl font-semibold tracking-tight text-[var(--foreground)] sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-8 text-[var(--muted-foreground)] sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
