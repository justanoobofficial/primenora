import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  target?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  target
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      target={target}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2",
        variant === "primary" &&
          "premium-shadow bg-[var(--primary)] text-white hover:-translate-y-0.5 hover:bg-[var(--primary-dark)]",
        variant === "secondary" &&
          "gold-ring bg-white text-[var(--foreground)] hover:-translate-y-0.5 hover:bg-[var(--surface-muted)]",
        variant === "ghost" &&
          "border border-[var(--border)] bg-white/70 text-[var(--foreground)] hover:border-[var(--primary)] hover:text-[var(--primary)]",
        className
      )}
    >
      {children}
    </Link>
  );
}
