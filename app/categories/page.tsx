import type { Metadata } from "next";

import { CategoryCard } from "@/components/cards/category-card";
import { AnimatedSection } from "@/components/motion/animated-section";
import { PageHero } from "@/components/shared/page-hero";
import { CATEGORY_CONTENT } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Categories",
  description:
    "Explore the current and upcoming product categories offered by Prime Nora Global Services Limited."
};

export default function CategoriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Categories"
        title="A growing product ecosystem built around household value"
        description="Prime Nora Global Services Limited is expanding from premium foodstuff into a broader, carefully curated multi-category retail brand."
      />
      <AnimatedSection className="container-shell section-padding pt-0">
        <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {CATEGORY_CONTENT.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </AnimatedSection>
    </>
  );
}
