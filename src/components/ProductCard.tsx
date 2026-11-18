import Image from "next/image";
import { useTranslations } from "next-intl";
import { formatPrice } from "@/lib/format";
import { type Product, productImage } from "@/lib/products";
import { whatsappUrl } from "@/lib/site";
import { WhatsAppIcon } from "./icons";

type ProductCardProps = {
  product: Product;
  sizes?: string;
  headingLevel?: "h2" | "h3";
};

export function ProductCard({
  product,
  sizes = "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw",
  headingLevel: Heading = "h3",
}: ProductCardProps) {
  const t = useTranslations();
  const name = t(`products.items.${product.slug}`);
  const price = formatPrice(product.price);

  return (
    <article className="group flex h-full flex-col">
      <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] border border-line bg-raised">
        <Image
          src={productImage(product.slug)}
          alt={t("product.imageAlt", { name })}
          fill
          sizes={sizes}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
        />
      </div>
      <div className="flex flex-1 flex-col border-x border-b border-line bg-surface p-5">
        <p className="eyebrow !text-[0.62rem] !text-muted">
          {t(`categories.${product.category}`)} · {t("product.material")}
        </p>
        <div className="mt-2 flex items-baseline justify-between gap-4">
          <Heading className="font-serif text-2xl leading-tight text-cream">{name}</Heading>
          <p className="shrink-0 font-serif text-xl text-gold">{price}</p>
        </div>
        <a
          href={whatsappUrl(t("whatsapp.product", { name, price }))}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t("product.orderAria", { name })}
          className="mt-5 inline-flex items-center justify-center gap-2 border border-gold/70 px-4 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-ink"
        >
          <WhatsAppIcon className="size-4" />
          {t("product.order")}
        </a>
      </div>
    </article>
  );
}
