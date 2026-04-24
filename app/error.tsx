"use client";

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="container-shell flex min-h-[60vh] items-center justify-center py-16">
      <div className="premium-shadow max-w-xl rounded-[32px] border border-[var(--border)] bg-white p-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
          Something went wrong
        </p>
        <h1 className="mt-4 font-[var(--font-heading)] text-4xl font-semibold">
          We could not load this page
        </h1>
        <p className="mt-4 text-sm leading-7 text-[var(--muted-foreground)]">
          {error.message || "An unexpected error occurred. Please try again."}
        </p>
        <button
          type="button"
          onClick={reset}
          className="mt-6 rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
