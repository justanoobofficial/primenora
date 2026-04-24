"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

import { ProductCard } from "@/components/cards/product-card";
import { CATEGORY_OPTIONS } from "@/lib/constants";
import type { Product } from "@/types/product";

const PAGE_SIZE = 6;

type ShopCatalogProps = {
  products: Product[];
  initialCategory?: string;
};

export function ShopCatalog({ products, initialCategory }: ShopCatalogProps) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(initialCategory || "All");
  const [sort, setSort] = useState("featured");
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filteredProducts = useMemo(() => {
    const base = products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || product.category === category;
      return matchesSearch && matchesCategory;
    });

    const sorted = [...base];
    switch (sort) {
      case "price-asc":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "name":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        sorted.sort((a, b) => Number(b.featured) - Number(a.featured));
        break;
    }

    return sorted;
  }, [category, products, search, sort]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <section className="container-shell section-padding pt-0">
      <div className="glass-panel rounded-[34px] border border-white/50 p-6 md:p-8">
        <div className="grid gap-4 lg:grid-cols-[1.4fr_0.7fr_0.7fr]">
          <label className="relative block">
            <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)]" size={18} />
            <input
              type="search"
              value={search}
              onChange={(event) => {
                setSearch(event.target.value);
                setVisibleCount(PAGE_SIZE);
              }}
              placeholder="Search products, categories, or essentials"
              className="w-full rounded-2xl border border-[var(--border)] bg-white px-12 py-4 outline-none transition focus:border-[var(--primary)]"
            />
          </label>

          <select
            value={category}
            onChange={(event) => {
              setCategory(event.target.value);
              setVisibleCount(PAGE_SIZE);
            }}
            className="rounded-2xl border border-[var(--border)] bg-white px-4 py-4 outline-none transition focus:border-[var(--primary)]"
          >
            <option value="All">All Categories</option>
            {CATEGORY_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            className="rounded-2xl border border-[var(--border)] bg-white px-4 py-4 outline-none transition focus:border-[var(--primary)]"
          >
            <option value="featured">Sort: Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="name">Name: A to Z</option>
          </select>
        </div>
      </div>

      {visibleProducts.length ? (
        <>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
          {visibleCount < filteredProducts.length ? (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
                className="rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
              >
                Load More Products
              </button>
            </div>
          ) : null}
        </>
      ) : (
        <div className="premium-shadow mt-10 rounded-[32px] border border-dashed border-[var(--border)] bg-white px-6 py-16 text-center">
          <h3 className="font-[var(--font-heading)] text-2xl font-semibold">
            No products match your selection
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-[var(--muted-foreground)]">
            Try a different search term or category. Your Firebase catalog will appear here
            automatically once products are added to Firestore.
          </p>
        </div>
      )}
    </section>
  );
}
