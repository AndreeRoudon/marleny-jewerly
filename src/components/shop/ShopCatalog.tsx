"use client";

import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { type Category, categories, isCategory, products } from "@/lib/products";
import { ProductCard } from "../ProductCard";

type Filter = Category | "todos";
type Sort = "featured" | "priceAsc" | "priceDesc" | "name";

const sorts: { value: Sort; label: "sortFeatured" | "sortPriceAsc" | "sortPriceDesc" | "sortName" }[] = [
  { value: "featured", label: "sortFeatured" },
  { value: "priceAsc", label: "sortPriceAsc" },
  { value: "priceDesc", label: "sortPriceDesc" },
  { value: "name", label: "sortName" },
];

const normalize = (s: string) =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();

/** Catálogo con filtro, búsqueda y orden (todo en cliente, sin recarga). */
export function ShopCatalog({ initialCategory = "todos" }: { initialCategory?: Filter }) {
  const t = useTranslations();
  const [filter, setFilter] = useState<Filter>(initialCategory);
  const [sort, setSort] = useState<Sort>("featured");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = normalize(query.trim());
    const list = products
      .map((product) => ({ product, name: t(`products.items.${product.slug}`) }))
      .filter(({ product }) => filter === "todos" || product.category === filter)
      .filter(({ name }) => q === "" || normalize(name).includes(q));
    if (sort === "priceAsc") list.sort((a, b) => a.product.price - b.product.price);
    if (sort === "priceDesc") list.sort((a, b) => b.product.price - a.product.price);
    if (sort === "name") list.sort((a, b) => a.name.localeCompare(b.name, "es"));
    return list;
  }, [filter, sort, query, t]);

  const filters: Filter[] = ["todos", ...categories];
  const field =
    "h-12 border border-line bg-surface px-4 text-sm text-cream placeholder:text-muted/70 focus:border-gold";

  return (
    <div>
      <div className="flex flex-col gap-5 border-y border-line py-6 lg:flex-row lg:items-center lg:justify-between">
        <div role="group" aria-label={t("shop.filterLabel")} className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className="h-12 border border-line px-6 text-xs uppercase tracking-[0.22em] text-cream/85 transition-colors hover:border-gold hover:text-gold aria-pressed:border-gold aria-pressed:bg-gold aria-pressed:text-ink"
            >
              {t(`categories.${f}`)}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <label className="flex-1">
            <span className="sr-only">{t("shop.searchLabel")}</span>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t("shop.searchPlaceholder")}
              className={`${field} w-full sm:w-64`}
            />
          </label>
          <label>
            <span className="sr-only">{t("shop.sortLabel")}</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as Sort)}
              className={`${field} w-full sm:w-auto`}
            >
              {sorts.map((s) => (
                <option key={s.value} value={s.value}>
                  {t(`shop.${s.label}`)}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>

      <p className="mt-6 text-xs uppercase tracking-[0.22em] text-muted" aria-live="polite">
        {t("shop.count", { count: visible.length })}
      </p>

      {visible.length > 0 ? (
        <ul className="mt-8 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map(({ product }) => (
            <li key={product.slug}>
              <ProductCard product={product} headingLevel="h2" />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-8 border border-line bg-surface p-12 text-center">
          <p className="font-serif text-2xl text-cream">{t("shop.empty")}</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setFilter("todos");
            }}
            className="mt-6 border border-gold px-6 py-3 text-xs uppercase tracking-[0.22em] text-gold hover:bg-gold hover:text-ink"
          >
            {t("shop.reset")}
          </button>
        </div>
      )}
    </div>
  );
}

/** Lee ?categoria= de la URL (enlaces desde la home). Debe ir dentro de <Suspense>. */
export function ShopCatalogFromUrl() {
  const param = useSearchParams().get("categoria");
  const initial: Filter = isCategory(param) ? param : "todos";
  return <ShopCatalog key={initial} initialCategory={initial} />;
}
