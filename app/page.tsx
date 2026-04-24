import type { Metadata } from "next";
import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  CheckCircle2,
  Crown,
  ShieldCheck,
  Sparkles,
  Star,
  Truck
} from "lucide-react";
import Image from "next/image";

import { CategoryCard } from "@/components/cards/category-card";
import { ProductCard } from "@/components/cards/product-card";
import { AnimatedSection } from "@/components/motion/animated-section";
import { PageShell } from "@/components/motion/page-shell";
import { EmptyProducts } from "@/components/shared/empty-products";
import { ButtonLink } from "@/components/ui/button-link";
import { SectionHeading } from "@/components/ui/section-heading";
import { CATEGORY_CONTENT, SITE_NAME, TESTIMONIALS, WHATSAPP_DEFAULT_MESSAGE } from "@/lib/constants";
import { getFeaturedProducts } from "@/lib/products";
import { createWhatsAppLink } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Trusted quality goods for every home. Explore Prime Nora Global Services Limited's premium product categories and featured essentials."
};

const trustItems = [
  { icon: BadgeCheck, title: "Registered Business", text: "Structured, credible, and built for long-term customer trust." },
  { icon: ShieldCheck, title: "Quality Assured", text: "Every item is selected with consistency, reliability, and customer value in mind." },
  { icon: Truck, title: "Fast Delivery", text: "Quick coordination and smooth order fulfillment for homes and businesses." },
  { icon: Banknote, title: "Secure Payment", text: "Clear order confirmation and trusted payment arrangement process." },
  { icon: CheckCircle2, title: "Customer Satisfaction", text: "Service built around responsiveness, professionalism, and repeat confidence." }
];

const reasons = [
  {
    title: "Trusted Supplier",
    text: "Prime Nora Global Services Limited is positioned as a dependable partner for homes, retailers, and bulk buyers who value consistency."
  },
  {
    title: "Premium Quality",
    text: "We focus on products customers can trust, presented with a polished experience that reflects a serious, established brand."
  },
  {
    title: "Smooth Delivery Service",
    text: "From first inquiry to final delivery, our approach is organized, responsive, and designed to reduce customer stress."
  }
];

export default async function HomePage() {
  const featuredProducts = await getFeaturedProducts(4);

  return (
    <PageShell>
      <section className="container-shell pt-8 pb-16 md:pt-12">
        <div className="hero-grid glass-panel premium-shadow overflow-hidden rounded-[36px] border border-white/55 px-6 py-10 md:px-10 md:py-14 lg:px-14">
          <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="inline-flex rounded-full border border-[var(--border)] bg-white/85 px-4 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
                Premium Nigerian Commerce
              </span>
              <h1 className="mt-6 max-w-2xl text-balance font-[var(--font-heading)] text-5xl font-semibold tracking-tight text-[var(--foreground)] sm:text-6xl">
                Trusted Quality Goods for Every Home
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--muted-foreground)] sm:text-lg">
                Prime Nora Global Services Limited delivers premium foodstuff and essential
                products with trust, quality, and convenience.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <ButtonLink href="/shop">
                  Shop Now
                  <ArrowRight className="ml-2" size={18} />
                </ButtonLink>
                <ButtonLink
                  href={createWhatsAppLink(WHATSAPP_DEFAULT_MESSAGE)}
                  target="_blank"
                  variant="secondary"
                >
                  Order on WhatsApp
                </ButtonLink>
              </div>
              <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
                {[
                  { label: "Premium Service", value: "Professional" },
                  { label: "Growth Ready", value: "Scalable Storefront" },
                  { label: "Customer Journey", value: "WhatsApp Optimized" }
                ].map((item) => (
                  <div key={item.label} className="rounded-[24px] border border-[var(--border)] bg-white/80 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted-foreground)]">
                      {item.label}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-[var(--foreground)]">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="premium-shadow relative overflow-hidden rounded-[28px] sm:col-span-2">
                <Image
                  src="https://images.unsplash.com/photo-1573246123716-6b1782bfc499?auto=format&fit=crop&w=1200&q=80"
                  alt="Premium groceries and retail goods"
                  width={900}
                  height={600}
                  className="h-[320px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#130d1e]/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <p className="text-xs uppercase tracking-[0.24em] text-white/70">
                    Featured Focus
                  </p>
                  <h2 className="mt-2 font-[var(--font-heading)] text-3xl font-semibold">
                    Foodstuff With Confidence
                  </h2>
                </div>
              </div>
              {[
                {
                  title: "Corporate Presentation",
                  icon: Crown,
                  text: "Elegant product discovery that feels official and premium."
                },
                {
                  title: "Direct Conversion",
                  icon: Sparkles,
                  text: "Simple WhatsApp ordering flow for fast customer action."
                }
              ].map((item) => (
                <div
                  key={item.title}
                  className="premium-shadow rounded-[28px] border border-[var(--border)] bg-white p-6"
                >
                  <item.icon className="text-[var(--accent)]" size={24} />
                  <h3 className="mt-4 font-[var(--font-heading)] text-2xl font-semibold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[var(--muted-foreground)]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection className="container-shell section-padding pt-0">
        <SectionHeading
          eyebrow="Trust Signals"
          title="Built to look and feel like a brand customers can rely on"
          description="Every section is designed to reinforce confidence, professionalism, and smooth decision-making."
          align="center"
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {trustItems.map((item) => (
            <div
              key={item.title}
              className="premium-shadow rounded-[28px] border border-[var(--border)] bg-white p-6"
            >
              <item.icon className="text-[var(--primary)]" size={24} />
              <h3 className="mt-5 font-[var(--font-heading)] text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted-foreground)]">{item.text}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell section-padding">
        <SectionHeading
          eyebrow="Categories"
          title="Current strengths with room for ambitious expansion"
          description="Foodstuff leads today while the brand evolves into a broader premium commerce destination."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
          {CATEGORY_CONTENT.map((category) => (
            <CategoryCard key={category.title} {...category} />
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell section-padding">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Featured Products"
            title="Customer-ready products with premium presentation"
            description="This section is already connected to a Firebase-ready data layer and gracefully falls back to seeded catalog content."
          />
          <ButtonLink href="/shop" variant="ghost">
            Browse Full Shop
          </ButtonLink>
        </div>
        {featuredProducts.length ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <EmptyProducts />
        )}
      </AnimatedSection>

      <AnimatedSection className="container-shell section-padding">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="A service experience designed for trust, speed, and long-term loyalty"
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="premium-shadow rounded-[30px] border border-[var(--border)] bg-white p-8"
            >
              <Star className="text-[var(--accent)]" size={24} />
              <h3 className="mt-5 font-[var(--font-heading)] text-3xl font-semibold">{reason.title}</h3>
              <p className="mt-3 text-sm leading-8 text-[var(--muted-foreground)]">{reason.text}</p>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell section-padding">
        <div className="premium-shadow rounded-[36px] bg-[linear-gradient(135deg,#1f0f39,#6d28d9)] px-6 py-10 text-white md:px-10 md:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--accent-soft)]">
            Coming Soon
          </p>
          <div className="mt-4 grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h2 className="font-[var(--font-heading)] text-4xl font-semibold sm:text-5xl">
                Footwear, Fashion, Lifestyle Products Coming Soon
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/78">
                The website is structured for expansion into a full online store, giving Prime Nora
                a strong premium base for future product verticals.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {["Footwear", "Fashion", "Household", "Lifestyle"].map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-white/12 bg-white/8 px-5 py-5 backdrop-blur"
                >
                  <p className="text-lg font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell section-padding">
        <SectionHeading
          eyebrow="Testimonials"
          title="Confidence reinforced by customer experience"
          align="center"
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.name}
              className="premium-shadow rounded-[30px] border border-[var(--border)] bg-white p-8"
            >
              <div className="flex gap-1 text-[var(--accent)]">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="mt-5 text-sm leading-8 text-[var(--muted-foreground)]">
                "{testimonial.quote}"
              </p>
              <div className="mt-6">
                <p className="font-semibold text-[var(--foreground)]">{testimonial.name}</p>
                <p className="text-sm text-[var(--muted-foreground)]">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="container-shell section-padding pt-0">
        <div className="premium-shadow rounded-[36px] border border-[var(--border)] bg-white px-6 py-10 md:px-10 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--primary)]">
                Ready To Order
              </p>
              <h2 className="mt-4 font-[var(--font-heading)] text-4xl font-semibold sm:text-5xl">
                Need Bulk Orders or Quick Delivery?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--muted-foreground)]">
                Speak directly with {SITE_NAME} for wholesale inquiries, repeat supply, or fast
                order coordination through WhatsApp.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <ButtonLink href={createWhatsAppLink(WHATSAPP_DEFAULT_MESSAGE)} target="_blank">
                Chat on WhatsApp
              </ButtonLink>
              <ButtonLink href="/shop" variant="secondary">
                Browse Products
              </ButtonLink>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </PageShell>
  );
}
