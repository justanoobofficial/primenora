import type { ProductCategory } from "@/types/product";

export const SITE_NAME = "Prime Nora Global Services Limited";
export const SITE_URL = "https://primenora.com";
export const WHATSAPP_DEFAULT_MESSAGE =
  "Hello Prime Nora Global Services Limited, I would like to place an order.";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/categories", label: "Categories" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" }
];

export const CATEGORY_OPTIONS: ProductCategory[] = [
  "Foodstuff",
  "Footwear",
  "Household Items",
  "Fashion",
  "Coming Soon"
];

export const CATEGORY_CONTENT = [
  {
    title: "Foodstuff",
    description: "Fresh pantry essentials, staple foods, grains, oils, and premium household food supplies.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Footwear",
    description: "Durable, stylish footwear collections for daily wear, business, and family shopping.",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Household Items",
    description: "Reliable essentials that keep homes organized, efficient, and ready for everyday living.",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Fashion",
    description: "Curated fashion items designed to bring confidence, style, and quality to every wardrobe.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Coming Soon",
    description: "New product lines are on the way as Prime Nora expands into a broader premium retail experience.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80"
  }
] as const;

export const TESTIMONIALS = [
  {
    name: "Amaka E.",
    role: "Home Buyer, Lagos",
    quote:
      "Prime Nora gives me confidence every time I order. The products are quality, delivery is smooth, and communication is professional."
  },
  {
    name: "Tunde A.",
    role: "Bulk Customer, Abuja",
    quote:
      "For business and family supply, they are reliable. I appreciate the consistency, honest pricing, and fast response on WhatsApp."
  },
  {
    name: "Ngozi F.",
    role: "Repeat Customer, Port Harcourt",
    quote:
      "The experience feels premium from start to finish. Clean packaging, trusted goods, and customer care that feels truly established."
  }
];

export const FAQ_ITEMS = [
  {
    question: "How do I place an order?",
    answer:
      "Browse the products, select what you need, and use the WhatsApp order button on any product or section to send your request directly to our team."
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery time depends on your location and order size. Most standard orders are processed quickly, and we share clear delivery updates once your order is confirmed."
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We currently support secure payment arrangements communicated during order confirmation, including bank transfer and other approved methods."
  },
  {
    question: "Do you handle bulk orders?",
    answer:
      "Yes. Prime Nora Global Services Limited supports wholesale and bulk supply requests for homes, retailers, and business customers."
  },
  {
    question: "What is your refund policy?",
    answer:
      "If there is an issue with your order, contact us promptly. We review concerns professionally and work toward a fair resolution based on the product condition and delivery status."
  }
];
