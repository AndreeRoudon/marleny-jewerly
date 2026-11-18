import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Suspense } from "react";
import { ShopCatalog, ShopCatalogFromUrl } from "@/components/shop/ShopCatalog";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("meta");
  return {
    title: t("shopTitle"),
    description: t("shopDescription"),
    alternates: { canonical: "/tienda" },
  };
}

export default async function ShopPage() {
  const t = await getTranslations("shop");
  return (
    <div className="container-site pb-24 pt-12 md:pb-32 md:pt-20">
      <p className="eyebrow">{t("eyebrow")}</p>
      <h1 className="mt-4 font-serif text-[clamp(3rem,8vw,5.5rem)] uppercase leading-none text-cream">
        {t("titleStart")} <em className="normal-case text-gold">{t("titleAccent")}</em>
      </h1>
      <p className="mb-10 mt-6 max-w-xl text-muted">{t("intro")}</p>
      {/* El fallback renderiza el catálogo completo: queda en el HTML estático (SEO). */}
      <Suspense fallback={<ShopCatalog />}>
        <ShopCatalogFromUrl />
      </Suspense>
    </div>
  );
}
