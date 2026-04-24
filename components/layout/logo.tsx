import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#6d28d9,#d4af37)] text-sm font-bold text-white shadow-lg shadow-[rgba(109,40,217,0.28)]">
        PN
      </div>
      <div className="leading-tight">
        <p className="font-[var(--font-heading)] text-lg font-semibold tracking-tight text-[var(--foreground)]">
          Prime Nora
        </p>
        <p className="text-xs uppercase tracking-[0.22em] text-[var(--muted-foreground)]">
          Global Services Ltd
        </p>
      </div>
    </Link>
  );
}
