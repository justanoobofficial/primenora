import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  variant?: "default" | "footer";
};

export function Logo({ variant = "default" }: LogoProps) {
  return (
    <Link href="/" className="inline-flex items-center gap-3">
      <span
        className={
          variant === "footer"
            ? "relative flex h-16 w-16 overflow-hidden rounded-[22px] bg-white shadow-lg sm:h-[72px] sm:w-[72px]"
            : "relative flex h-14 w-14 overflow-hidden rounded-[18px] border border-[var(--border)] bg-white shadow-lg shadow-[rgba(109,40,217,0.15)] sm:h-16 sm:w-16"
        }
      >
        <Image
          src="/prime-nora-logo.png"
          alt="Prime Nora Global Services Limited"
          fill
          priority
          className="object-cover object-left"
          sizes="72px"
        />
      </span>
      <span className="leading-tight">
        <span
          className={
            variant === "footer"
              ? "block font-[var(--font-heading)] text-xl font-semibold tracking-tight text-white"
              : "block font-[var(--font-heading)] text-lg font-semibold tracking-tight text-[var(--foreground)] sm:text-xl"
          }
        >
          Prime Nora
        </span>
        <span
          className={
            variant === "footer"
              ? "block text-[10px] uppercase tracking-[0.24em] text-white/68 sm:text-xs"
              : "block text-[10px] uppercase tracking-[0.22em] text-[var(--muted-foreground)] sm:text-xs"
          }
        >
          Global Services Limited
        </span>
      </span>
    </Link>
  );
}
