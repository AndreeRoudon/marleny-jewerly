export const categories = ["juegos", "collares"] as const;
export type Category = (typeof categories)[number];

export const productSlugs = [
  "juego-arbol-de-la-vida",
  "juego-flor-delicada",
  "juego-corazon",
  "juego-corazon-rubi",
  "juego-luna-calada",
  "juego-osito-onix",
  "juego-gatita-brillante",
  "juego-flor-de-loto",
  "juego-flor-filigrana",
  "collar-flor-turquesa",
  "juego-mariposa-filigrana",
  "juego-estrella-filigrana",
  "juego-flor-de-cerezo",
  "juego-flor-de-jazmin",
  "collar-cruz-clasica",
  "collar-ancla",
  "collar-medalla",
  "collar-timon-marinero",
] as const;
export type ProductSlug = (typeof productSlugs)[number];

export type Product = {
  slug: ProductSlug;
  category: Category;
  /** Precio en soles (S/). PROVISIONAL: reemplazar por los precios reales. */
  price: number;
  featured?: boolean;
};

// Los nombres viven en messages/es.json (products.items.<slug>).
export const products: readonly Product[] = [
  { slug: "juego-arbol-de-la-vida", category: "juegos", price: 129, featured: true },
  { slug: "juego-corazon-rubi", category: "juegos", price: 119, featured: true },
  { slug: "collar-flor-turquesa", category: "collares", price: 139, featured: true },
  { slug: "juego-luna-calada", category: "juegos", price: 109, featured: true },
  { slug: "juego-mariposa-filigrana", category: "juegos", price: 135, featured: true },
  { slug: "juego-flor-filigrana", category: "juegos", price: 135, featured: true },
  { slug: "juego-estrella-filigrana", category: "juegos", price: 129 },
  { slug: "juego-flor-de-loto", category: "juegos", price: 99 },
  { slug: "juego-corazon", category: "juegos", price: 95 },
  { slug: "juego-flor-delicada", category: "juegos", price: 89 },
  { slug: "juego-flor-de-cerezo", category: "juegos", price: 115 },
  { slug: "juego-flor-de-jazmin", category: "juegos", price: 115 },
  { slug: "juego-osito-onix", category: "juegos", price: 105 },
  { slug: "juego-gatita-brillante", category: "juegos", price: 109 },
  { slug: "collar-cruz-clasica", category: "collares", price: 149 },
  { slug: "collar-ancla", category: "collares", price: 145 },
  { slug: "collar-medalla", category: "collares", price: 85 },
  { slug: "collar-timon-marinero", category: "collares", price: 79 },
];

export const featuredProducts = products.filter((p) => p.featured);

export function productImage(slug: ProductSlug): string {
  return `/images/products/${slug}.webp`;
}

export function isCategory(value: string | null): value is Category {
  return value !== null && (categories as readonly string[]).includes(value);
}
