import type { Metadata } from "next";

import { FAQAccordion } from "@/components/faq/faq-accordion";
import { AnimatedSection } from "@/components/motion/animated-section";
import { PageHero } from "@/components/shared/page-hero";
import { FAQ_ITEMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Find answers about ordering, delivery, payments, bulk supply, and customer service from Prime Nora Global Services Limited."
};

export default function FAQPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Clear answers for confident ordering"
        description="These responses help customers understand the Prime Nora ordering process and make faster decisions with confidence."
      />
      <AnimatedSection className="container-shell section-padding pt-0">
        <div className="mx-auto max-w-4xl">
          <FAQAccordion items={FAQ_ITEMS} />
        </div>
      </AnimatedSection>
    </>
  );
}
