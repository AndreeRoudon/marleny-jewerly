"use client";

import { useTranslations } from "next-intl";
import { useCallback, useEffect, useRef, useState } from "react";
import { featuredProducts } from "@/lib/products";
import { ProductCard } from "../ProductCard";
import { ArrowRight } from "../icons";

export function FeaturedSlider() {
  const t = useTranslations("featured");
  const track = useRef<HTMLUListElement>(null);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState<number | null>(null);

  const measure = useCallback(() => {
    const el = track.current;
    if (!el) return;
    const total = Math.max(1, Math.round(el.scrollWidth / el.clientWidth));
    setPages(total);
    setPage(Math.min(total, Math.round(el.scrollLeft / el.clientWidth) + 1));
  }, []);

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    el.addEventListener("scroll", measure, { passive: true });
    return () => {
      observer.disconnect();
      el.removeEventListener("scroll", measure);
    };
  }, [measure]);

  const go = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * el.clientWidth, behavior: reduce ? "auto" : "smooth" });
  };

  const control =
    "flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-cream transition-colors hover:text-gold disabled:cursor-not-allowed disabled:text-muted/50";

  return (
    <div role="region" aria-label={t("region")}>
      <ul
        ref={track}
        className="-mx-3 flex snap-x snap-mandatory overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {featuredProducts.map((product) => (
          <li key={product.slug} className="w-full shrink-0 snap-start px-3 sm:w-1/2 lg:w-1/3">
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
      <div className="mt-10 flex items-center justify-between border-t border-line pt-6">
        <button type="button" className={control} onClick={() => go(-1)} disabled={page <= 1}>
          <ArrowRight className="w-7 rotate-180" />
          {t("prev")}
        </button>
        <p className="font-serif text-xl text-gold" aria-live="polite">
          {pages === null ? " " : `${page} / ${pages}`}
        </p>
        <button
          type="button"
          className={control}
          onClick={() => go(1)}
          disabled={pages !== null && page >= pages}
        >
          {t("next")}
          <ArrowRight className="w-7" />
        </button>
      </div>
    </div>
  );
}
