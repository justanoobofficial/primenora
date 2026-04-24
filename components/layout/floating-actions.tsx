"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, MessageCircleMore } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { WHATSAPP_DEFAULT_MESSAGE } from "@/lib/constants";
import { createWhatsAppLink } from "@/lib/utils";

export function FloatingActions() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      <Link
        href={createWhatsAppLink(WHATSAPP_DEFAULT_MESSAGE)}
        target="_blank"
        className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--primary)] text-white shadow-2xl shadow-[rgba(109,40,217,0.28)] transition-transform hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircleMore size={24} />
      </Link>

      <AnimatePresence>
        {showScroll ? (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] bg-white/95 text-[var(--foreground)] shadow-xl"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
