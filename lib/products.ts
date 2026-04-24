import { fallbackProducts } from "@/data/fallback-products";
import { firebaseConfig, firestoreCollectionPath, hasFirebaseEnv } from "@/lib/firebase";
import type { Product } from "@/types/product";

function normalizeProduct(id: string, data: Record<string, unknown>): Product {
  return {
    id,
    name: String(data.name ?? "Untitled Product"),
    price: Number(data.price ?? 0),
    category: (data.category as Product["category"]) ?? "Coming Soon",
    description: String(data.description ?? ""),
    image: String(data.image ?? fallbackProducts[0].image),
    featured: Boolean(data.featured),
    createdAt: typeof data.createdAt === "string" ? data.createdAt : undefined
  };
}

function parseFirestoreField(field: Record<string, string | Record<string, unknown>>) {
  if ("stringValue" in field) return field.stringValue as string;
  if ("integerValue" in field) return Number(field.integerValue);
  if ("doubleValue" in field) return Number(field.doubleValue);
  if ("booleanValue" in field) return Boolean(field.booleanValue);
  if ("timestampValue" in field) return String(field.timestampValue);
  return undefined;
}

function normalizeFirestoreDocument(document: {
  name: string;
  fields?: Record<string, Record<string, string | Record<string, unknown>>>;
}): Product {
  const id = document.name.split("/").pop() ?? crypto.randomUUID();
  const fields = document.fields ?? {};

  const data = Object.fromEntries(
    Object.entries(fields).map(([key, value]) => [key, parseFirestoreField(value)])
  );

  return normalizeProduct(id, data);
}

export async function getProducts(): Promise<Product[]> {
  if (!hasFirebaseEnv || !firebaseConfig.projectId || !firebaseConfig.apiKey) {
    return fallbackProducts;
  }

  try {
    const response = await fetch(
      `https://firestore.googleapis.com/v1/${firestoreCollectionPath}?key=${firebaseConfig.apiKey}`,
      {
        next: { revalidate: 60 }
      }
    );

    if (!response.ok) {
      return fallbackProducts;
    }

    const payload = (await response.json()) as {
      documents?: Array<{
        name: string;
        fields?: Record<string, Record<string, string | Record<string, unknown>>>;
      }>;
    };

    if (!payload.documents?.length) {
      return fallbackProducts;
    }

    return payload.documents.map(normalizeFirestoreDocument);
  } catch (error) {
    console.error("Failed to fetch products from Firestore", error);
    return fallbackProducts;
  }
}

export async function getFeaturedProducts(limit = 4) {
  const products = await getProducts();
  return products.filter((product) => product.featured).slice(0, limit);
}
