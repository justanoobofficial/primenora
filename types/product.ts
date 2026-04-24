export type ProductCategory =
  | "Foodstuff"
  | "Footwear"
  | "Household Items"
  | "Fashion"
  | "Coming Soon";

export type Product = {
  id: string;
  name: string;
  price: number;
  category: ProductCategory;
  description: string;
  image: string;
  featured?: boolean;
  createdAt?: string;
};
