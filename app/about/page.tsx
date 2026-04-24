import type { Metadata } from "next";
import { Award, Globe2, HeartHandshake, Layers3 } from "lucide-react";

import { AnimatedSection } from "@/components/motion/animated-section";
import { PageHero } from "@/components/shared/page-hero";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { WHATSAPP_DEFAULT_MESSAGE } from "@/lib/constants";
import { createWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Prime Nora Global Services Limited, a premium Nigerian business focused on trust, quality goods, and long-term customer relationships."
};

const pillars = [
  {
    icon: HeartHandshake,
    title: "Trust First",
    text: "Customers should feel safe buying from Prime Nora, whether they need a single household item or recurring bulk supply."
  },
  {
    icon: Award,
    title: "Quality Standards",
    text: "Our product approach centers on consistency, clean presentation, and dependable customer value."
  },
  {
    icon: Globe2,
    title: "Growth Vision",
    text: "We are building toward a modern, category-rich commerce brand with strong operational foundations."
  },
  {
    icon: Layers3,
    title: "Scalable Service",
    text: "The platform, structure, and customer flow are designed for smooth growth into a full online store."
  }
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Prime Nora"
        title="A premium Nigerian business built on trust, presentation, and dependable supply"
        description="Prime Nora Global Services Limited exists to deliver quality goods with the professionalism, responsiveness, and confidence customers expect from an established brand."
      />

      <AnimatedSection className="container-shell section-padding pt-0">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="prose-copy premium-shadow rounded-[32px] border border-[var(--border)] bg-white p-8 md:p-10">
            <SectionHeading
              eyebrow="Our Story"
              title="From essential goods to a broader premium retail future"
            />
            <div className="mt-6 space-y-5">
              <p>
                Prime Nora Global Services Limited is positioned as a modern Nigerian commerce
                company focused on supplying premium foodstuff and essential products with a high
                standard of professionalism.
              </p>
              <p>
                The business is built around customer trust, clean service delivery, and a brand
                image that feels serious, credible, and growth-ready. While foodstuff is the
                current anchor category, the company is expanding toward footwear, fashion,
                household goods, and other carefully selected product lines.
              </p>
              <p>
                Every customer interaction is meant to feel smooth, respectful, and dependable,
                whether the order begins online, through direct contact, or via WhatsApp.
              </p>
            </div>
          </div>

          <div className="premium-shadow rounded-[32px] bg-[linear-gradient(145deg,#1f0f39,#6d28d9)] p-8 text-white md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent-soft)]">
              Brand Promise
            </p>
            <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-semibold">
              Reliable goods. Professional service. Elegant customer experience.
            </h2>
            <p className="mt-5 text-sm leading-8 text-white/78">
              We are building a storefront that reflects the same confidence we want customers to
              feel when ordering from us.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <ButtonLink href="/shop" variant="secondary">
                Browse Products
              </ButtonLink>
              <ButtonLink href={createWhatsAppLink(WHATSAPP_DEFAULT_MESSAGE)} target="_blank">
                Chat on WhatsApp
              </ButtonLink>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell section-padding">
        <SectionHeading
          eyebrow="Core Pillars"
          title="How Prime Nora earns confidence"
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="premium-shadow rounded-[30px] border border-[var(--border)] bg-white p-8"
            >
              <pillar.icon className="text-[var(--primary)]" size={24} />
              <h3 className="mt-5 font-[var(--font-heading)] text-3xl font-semibold">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm leading-8 text-[var(--muted-foreground)]">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </>
  );
}
