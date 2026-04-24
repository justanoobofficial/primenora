"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircleMore, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { NAV_LINKS, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/constants";
import { createWhatsAppLink, cn } from "@/lib/utils";

import { Logo } from "./logo";

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled ? "px-0 pt-3" : "px-0 pt-0"
      )}
    >
      <div className="container-shell">
        <div
          className={cn(
            "flex items-center justify-between rounded-[28px] border px-4 py-3 transition-all duration-300 md:px-6",
            scrolled
              ? "glass-panel border-white/55"
              : "border-transparent bg-transparent"
          )}
        >
          <Logo />

          <nav className="hidden items-center gap-7 lg:flex">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[var(--primary)]",
                  pathname === item.href ? "text-[var(--primary)]" : "text-[var(--foreground)]"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href={createWhatsAppLink(WHATSAPP_DEFAULT_MESSAGE)}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-[rgba(109,40,217,0.3)] transition-all hover:-translate-y-0.5 hover:bg-[var(--primary-dark)]"
            >
              <MessageCircleMore size={18} />
              WhatsApp
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMenuOpen((value) => !value)}
            className="inline-flex rounded-full border border-[var(--border)] bg-white/85 p-3 text-[var(--foreground)] lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="container-shell mt-3 lg:hidden"
          >
            <div className="glass-panel rounded-[28px] border border-white/55 p-5">
              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "rounded-2xl px-4 py-3 text-sm font-medium transition-colors",
                      pathname === item.href
                        ? "bg-[var(--surface-muted)] text-[var(--primary)]"
                        : "text-[var(--foreground)] hover:bg-white"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href={createWhatsAppLink(WHATSAPP_DEFAULT_MESSAGE)}
                  target="_blank"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--primary)] px-5 py-3 text-sm font-semibold text-white"
                >
                  <MessageCircleMore size={18} />
                  Order on WhatsApp
                </Link>
              </nav>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
