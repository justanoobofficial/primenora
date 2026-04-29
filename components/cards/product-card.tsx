import Image from "next/image";
import Link from "next/link";
import { MessageCircleMore } from "lucide-react";

import type { Product } from "@/types/product";
import { createWhatsAppLink, formatPrice } from "@/lib/utils";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const message = `Hello Prime Nora Global Services Limited, I want to order ${product.name} (${formatPrice(product.price)}).`;

  return (
    <article className="group premium-shadow overflow-hidden rounded-[30px] border border-[var(--border)] bg-white">
      <div className="relative h-64 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          unoptimized
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-[var(--surface-muted)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
            {product.category}
          </span>
          <span className="text-lg font-semibold text-[var(--foreground)]">
            {formatPrice(product.price)}
          </span>
        </div>
        <div>
          <h3 className="font-[var(--font-heading)] text-2xl font-semibold tracking-tight">
            {product.name}
          </h3>
          <p className="mt-2 text-sm leading-7 text-[var(--muted-foreground)]">
            {product.description}
          </p>
        </div>
        <Link
          href={createWhatsAppLink(message)}
          target="_blank"
          className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--primary-dark)]"
        >
          <MessageCircleMore size={18} />
          Order on WhatsApp
        </Link>
      </div>
    </article>
  );
}
