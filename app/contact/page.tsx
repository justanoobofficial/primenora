import type { Metadata } from "next";
import { Clock3, Instagram, Mail, MapPin, MessageCircleMore, Phone, Truck } from "lucide-react";
import Link from "next/link";

import { ContactForm } from "@/components/contact/contact-form";
import { AnimatedSection } from "@/components/motion/animated-section";
import { PageHero } from "@/components/shared/page-hero";
import { WHATSAPP_DEFAULT_MESSAGE } from "@/lib/constants";
import { createWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Prime Nora Global Services Limited for WhatsApp orders, delivery questions, and bulk purchase inquiries."
};

const contactCards = [
  {
    icon: MessageCircleMore,
    title: "WhatsApp Orders",
    text: "Best for direct product orders, availability checks, and quick response.",
    action: { label: "Chat on WhatsApp", href: createWhatsAppLink(WHATSAPP_DEFAULT_MESSAGE) }
  },
  {
    icon: Mail,
    title: "Email",
    text: "For partnerships, formal inquiries, and admin communication.",
    action: { label: "chynex4real@yahoo.com", href: "mailto:chynex4real@yahoo.com" }
  },
  {
    icon: Phone,
    title: "Phone",
    text: "Call directly for urgent order coordination and customer support.",
    action: { label: "+234 806 207 7957", href: "tel:+2348062077957" }
  },
  {
    icon: Instagram,
    title: "Instagram",
    text: "Follow product updates, brand highlights, and customer engagement.",
    action: { label: "@primenora_", href: "https://instagram.com/primenora_" }
  }
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Speak with Prime Nora Global Services Limited"
        description="Reach out for orders, bulk supply requests, delivery information, and business inquiries through the channels below."
      />

      <AnimatedSection className="container-shell section-padding pt-0">
        <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <ContactForm />
          <div className="space-y-6">
            {contactCards.map((card) => (
              <div
                key={card.title}
                className="premium-shadow rounded-[30px] border border-[var(--border)] bg-white p-7"
              >
                <card.icon className="text-[var(--primary)]" size={24} />
                <h2 className="mt-4 font-[var(--font-heading)] text-3xl font-semibold">
                  {card.title}
                </h2>
                <p className="mt-3 text-sm leading-8 text-[var(--muted-foreground)]">
                  {card.text}
                </p>
                <Link
                  href={card.action.href}
                  target="_blank"
                  className="mt-5 inline-flex rounded-full bg-[var(--surface-muted)] px-4 py-3 text-sm font-semibold text-[var(--primary)]"
                >
                  {card.action.label}
                </Link>
              </div>
            ))}

            <div className="premium-shadow rounded-[30px] bg-[linear-gradient(140deg,#160e24,#211142)] p-7 text-white">
              <h2 className="font-[var(--font-heading)] text-3xl font-semibold">
                Delivery Details
              </h2>
              <div className="mt-6 space-y-4 text-sm text-white/76">
                <p className="flex gap-3">
                  <MapPin size={18} className="mt-1 text-[var(--accent)]" />
                  16 Dele Ashiru Str
                </p>
                <p className="flex gap-3">
                  <Truck size={18} className="mt-1 text-[var(--accent)]" />
                  Delivery support for individual, family, and bulk requests
                </p>
                <p className="flex gap-3">
                  <Clock3 size={18} className="mt-1 text-[var(--accent)]" />
                  Response-focused order processing with timely coordination
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </>
  );
}
