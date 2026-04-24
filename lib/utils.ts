import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0
  }).format(amount);
}

export function createWhatsAppLink(message: string) {
  const number =
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() || "2348000000000";
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
