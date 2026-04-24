import { Instagram, Mail, MapPin, MessageCircleMore, Phone } from "lucide-react";
import Link from "next/link";

import { NAV_LINKS, SITE_NAME, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/constants";
import { createWhatsAppLink } from "@/lib/utils";

import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[#140d1f] text-white">
      <div className="container-shell grid gap-12 py-16 lg:grid-cols-[1.4fr_0.8fr_0.8fr]">
        <div className="space-y-6">
          <Logo variant="footer" />
          <p className="max-w-xl text-sm leading-7 text-white/72">
            {SITE_NAME} supplies trusted foodstuff and everyday essentials with a premium,
            professional service experience built for households, retailers, and bulk buyers
            across Nigeria.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={createWhatsAppLink(WHATSAPP_DEFAULT_MESSAGE)}
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-4 py-2 text-sm font-semibold"
            >
              <MessageCircleMore size={16} />
              WhatsApp
            </Link>
            <Link
              href="https://instagram.com/primenora_"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/85"
            >
              <Instagram size={16} />
              @primenora_
            </Link>
          </div>
        </div>

        <div>
          <h3 className="font-[var(--font-heading)] text-xl font-semibold">Quick Links</h3>
          <div className="mt-5 flex flex-col gap-3 text-sm text-white/72">
            {NAV_LINKS.map((item) => (
              <Link key={item.href} href={item.href} className="transition-colors hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-[var(--font-heading)] text-xl font-semibold">Contact</h3>
          <div className="mt-5 space-y-4 text-sm text-white/72">
            <p className="flex items-start gap-3">
              <MapPin size={18} className="mt-0.5 text-[var(--accent)]" />
              16 Dele Ashiru Str
            </p>
            <p className="flex items-start gap-3">
              <Phone size={18} className="mt-0.5 text-[var(--accent)]" />
              +234 806 207 7957
            </p>
            <p className="flex items-start gap-3">
              <Mail size={18} className="mt-0.5 text-[var(--accent)]" />
              chynex4real@yahoo.com
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5">
        <p className="container-shell text-center text-xs uppercase tracking-[0.2em] text-white/50">
          (c) 2026 {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
