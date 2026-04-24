import type { Metadata } from "next";

import { PageHero } from "@/components/shared/page-hero";
import { ShopCatalog } from "@/components/shop/shop-catalog";
import { getProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Browse Prime Nora Global Services Limited products by category, search essentials, and order quickly through WhatsApp."
};

export default async function ShopPage({
  searchParams
}: {
  searchParams: Promise<{ category?: string }>;
}) {
  const params = await searchParams;
  const products = await getProducts();

  return (
    <>
      <PageHero
        eyebrow="Shop"
        title="Discover premium essentials curated for everyday trust"
        description="Search, filter, and sort across the Prime Nora catalog. The experience is ready for present-day WhatsApp orders and future full-store growth."
      />
      <ShopCatalog products={products} initialCategory={params.category} />
    </>
  );
}
