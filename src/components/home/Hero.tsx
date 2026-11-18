import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { productImage } from "@/lib/products";
import { ArrowRight, Sparkle } from "../icons";

export async function Hero() {
  const t = await getTranslations("hero");
  return (
    <section className="container-site grid items-center gap-14 pb-20 pt-12 md:grid-cols-[1.05fr_0.95fr] md:pb-28 md:pt-20">
      <div>
        <p className="eyebrow">{t("eyebrow")}</p>
        <h1 className="mt-6 font-serif text-[clamp(2.6rem,12.5vw,4.5rem)] md:text-[clamp(3rem,6.2vw,6rem)] font-medium uppercase leading-[0.95] tracking-tight text-cream">
          {t("titleLine1")}
          <span className="block font-normal normal-case italic text-gold">{t("titleAccent")}</span>
          <span className="flex items-center gap-[0.18em] whitespace-nowrap">
            <Sparkle className="size-[0.32em] shrink-0 text-gold" />
            {t("titleLine2")}
          </span>
        </h1>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
          <Link
            href="/tienda"
            className="inline-flex items-center gap-3 bg-wine px-7 py-4 text-xs uppercase tracking-[0.24em] text-cream transition-colors hover:bg-gold hover:text-ink"
          >
            {t("cta")}
            <ArrowRight className="w-7" />
          </Link>
          <a
            href="#destacados"
            className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-cream/80 hover:text-gold"
          >
            <span className="h-px w-10 bg-gold" aria-hidden="true" />
            {t("discover")}
          </a>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-md">
        <Sparkle className="absolute -left-3 top-16 z-10 size-7 text-gold" />
        <div className="relative aspect-[4/5] overflow-hidden rounded-t-[999px] border border-gold/60">
          <Image
            src={productImage("juego-arbol-de-la-vida")}
            alt={t("imageAlt")}
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 768px) 28rem, 92vw"
            className="object-cover"
          />
        </div>
        <div className="border-x border-b border-gold/60 bg-ink">
          <div className="flex items-center justify-between border-b border-gold/60 px-6 py-4">
            <p className="flex items-center gap-2 font-serif text-3xl uppercase tracking-[0.12em] text-cream">
              {t("cardTitle")}
              <Sparkle className="size-3 text-gold" />
            </p>
            <Link
              href="/tienda"
              aria-label={t("cta")}
              className="flex h-9 w-16 items-center justify-center rounded-[50%] border border-gold/60 text-gold transition-colors hover:bg-gold hover:text-ink"
            >
              <ArrowRight className="w-6" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-6 px-6 py-5 text-[0.78rem] leading-relaxed text-muted">
            <p>{t("cardText1")}</p>
            <p>{t("cardText2")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
