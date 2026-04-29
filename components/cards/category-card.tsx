import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CategoryCardProps = {
  title: string;
  description: string;
  image: string;
};

export function CategoryCard({ title, description, image }: CategoryCardProps) {
  return (
    <Link
      href={`/shop?category=${encodeURIComponent(title)}`}
      className="group premium-shadow relative overflow-hidden rounded-[30px] bg-white"
    >
      <div className="relative h-72 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          unoptimized
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#120d1c] via-[#120d1c]/25 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white/80 backdrop-blur">
          Collection
        </div>
        <div className="mt-4 flex items-end justify-between gap-4">
          <div>
            <h3 className="font-[var(--font-heading)] text-2xl font-semibold">{title}</h3>
            <p className="mt-2 max-w-sm text-sm leading-6 text-white/78">{description}</p>
          </div>
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white text-[var(--primary)] transition-transform duration-300 group-hover:-translate-y-1">
            <ArrowRight size={18} />
          </span>
        </div>
      </div>
    </Link>
  );
}
