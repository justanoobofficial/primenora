export default function Loading() {
  return (
    <div className="container-shell flex min-h-[60vh] items-center justify-center">
      <div className="flex items-center gap-3 rounded-full border border-[var(--border)] bg-white px-6 py-4 shadow-xl">
        <span className="h-3 w-3 animate-pulse rounded-full bg-[var(--accent)]" />
        <span className="h-3 w-3 animate-pulse rounded-full bg-[var(--primary)] [animation-delay:120ms]" />
        <span className="h-3 w-3 animate-pulse rounded-full bg-[var(--primary-dark)] [animation-delay:240ms]" />
        <p className="ml-2 text-sm font-medium text-[var(--muted-foreground)]">
          Loading Prime Nora experience...
        </p>
      </div>
    </div>
  );
}
