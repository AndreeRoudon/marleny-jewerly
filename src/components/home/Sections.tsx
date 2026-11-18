import Image from "next/image";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { type Category, type ProductSlug, productImage } from "@/lib/products";
import { site, whatsappUrl } from "@/lib/site";
import { Reveal } from "../Reveal";
import { ArrowRight, Sparkle, WhatsAppIcon } from "../icons";
import { FeaturedSlider } from "./FeaturedSlider";

export async function Intro() {
  const t = await getTranslations("intro");
  return (
    <section className="container-site py-20 md:py-28">
      <Reveal className="mx-auto max-w-3xl text-center">
        <p className="eyebrow">{t("eyebrow")}</p>
        <p className="mt-6 font-serif text-3xl leading-snug text-cream md:text-[2.6rem]">{t("text")}</p>
      </Reveal>
    </section>
  );
}

export async function Featured() {
  const t = await getTranslations("featured");
  return (
    <section id="destacados" className="container-site scroll-mt-24 pb-20 md:pb-28">
      <Reveal>
        <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow">{t("eyebrow")}</p>
            <h2 className="mt-4 font-serif text-5xl uppercase leading-none text-cream md:text-6xl">
              {t("titleStart")} <em className="normal-case text-gold">{t("titleAccent")}</em>
            </h2>
          </div>
          <Link
            href="/tienda"
            className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-gold hover:text-gold-soft"
          >
            {t("viewAll")}
            <ArrowRight className="w-7" />
          </Link>
        </div>
        <FeaturedSlider />
      </Reveal>
    </section>
  );
}

export async function Banner() {
  const t = await getTranslations("banner");
  return (
    <section className="container-site pb-20 md:pb-28">
      <Reveal>
        <div className="relative isolate flex min-h-[26rem] flex-col justify-between overflow-hidden border border-line p-6 md:min-h-[34rem] md:p-12">
          <Image
            src="/images/pulseras-plata.webp"
            alt={t("imageAlt")}
            fill
            sizes="(min-width: 1280px) 73rem, 95vw"
            className="-z-20 object-cover"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/55 to-ink/30" aria-hidden="true" />
          <Sparkle className="size-6 text-gold" />
          <div>
            <h2 className="flex flex-wrap items-baseline justify-between gap-x-10 font-serif text-[clamp(3rem,11vw,8rem)] uppercase leading-[0.9] text-cream">
              <span>{t("wordLeft")}</span>
              <em className="normal-case text-gold">{t("wordRight")}</em>
            </h2>
            <div className="mt-6 flex flex-wrap items-center justify-between gap-6 border-t border-gold/40 pt-6">
              <p className="max-w-md text-sm leading-relaxed text-cream/85">{t("text")}</p>
              <a
                href="#visitanos"
                className="flex items-center gap-3 text-xs uppercase tracking-[0.24em] text-gold hover:text-gold-soft"
              >
                {t("cta")}
                <ArrowRight className="w-7" />
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export async function Statement() {
  const t = await getTranslations("statement");
  return (
    <section className="border-y border-line bg-wine-deep/30">
      <Reveal className="container-site py-20 text-center md:py-28">
        <Sparkle className="mx-auto size-5 text-gold" />
        <p className="mt-8 font-serif text-[clamp(2.6rem,8vw,6rem)] uppercase leading-[0.95] text-cream">
          {t("line1")}
          <span className="block">{t("line2")}</span>
          <em className="block normal-case text-gold">{t("accent")}</em>
        </p>
      </Reveal>
    </section>
  );
}

const categoryTiles: { category: Category; image: ProductSlug; label: "juegosLong" | "collaresLong" }[] = [
  { category: "juegos", image: "juego-corazon-rubi", label: "juegosLong" },
  { category: "collares", image: "collar-cruz-clasica", label: "collaresLong" },
];

export async function Categories() {
  const t = await getTranslations();
  return (
    <section className="container-site py-20 md:py-28">
      <Reveal>
        <p className="eyebrow">{t("categoriesSection.eyebrow")}</p>
        <h2 className="mt-4 font-serif text-5xl uppercase leading-none text-cream md:text-6xl">
          {t("categoriesSection.titleStart")}{" "}
          <em className="normal-case text-gold">{t("categoriesSection.titleAccent")}</em>
        </h2>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-2">
        {categoryTiles.map((tile, i) => (
          <Reveal key={tile.category} delay={i * 0.12}>
            <Link
              href={`/tienda?categoria=${tile.category}`}
              className="group relative isolate flex aspect-[4/5] items-end overflow-hidden border border-line p-6 md:aspect-[5/4] md:p-8"
            >
              <Image
                src={productImage(tile.image)}
                alt=""
                fill
                sizes="(min-width: 768px) 36rem, 92vw"
                className="-z-20 object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/30 to-transparent" aria-hidden="true" />
              <div className="flex w-full items-end justify-between gap-6">
                <h3 className="font-serif text-4xl leading-none text-cream md:text-5xl">
                  {t(`categories.${tile.label}`)}
                </h3>
                <span className="flex shrink-0 items-center gap-3 text-xs uppercase tracking-[0.24em] text-gold">
                  {t("categoriesSection.explore")}
                  <ArrowRight className="w-7" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export async function Visit() {
  const t = await getTranslations();
  const cell = "border-line p-7 md:p-9";
  return (
    <section id="visitanos" className="container-site scroll-mt-24 pb-24 md:pb-32">
      <Reveal>
        <p className="eyebrow">{t("visit.eyebrow")}</p>
        <h2 className="mt-4 font-serif text-5xl uppercase leading-none text-cream md:text-6xl">
          {t("visit.titleStart")} <em className="normal-case text-gold">{t("visit.titleAccent")}</em>
        </h2>
        <dl className="mt-12 grid border border-line bg-surface sm:grid-cols-2 lg:grid-cols-4">
          <div className={`${cell} border-b lg:border-b-0 sm:border-r`}>
            <dt className="eyebrow">{t("visit.addressLabel")}</dt>
            <dd className="mt-4 font-serif text-2xl text-cream">{t("visit.address")}</dd>
            <dd className="mt-3">
              <a
                href={site.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gold underline underline-offset-4 hover:text-gold-soft"
              >
                {t("visit.map")}
              </a>
            </dd>
          </div>
          <div className={`${cell} border-b lg:border-b-0 lg:border-r`}>
            <dt className="eyebrow">{t("visit.hoursLabel")}</dt>
            <dd className="mt-4 font-serif text-2xl text-cream">{t("visit.hours")}</dd>
            <dd className="mt-3 text-sm text-muted">{t("visit.hoursTime")}</dd>
          </div>
          <div className={`${cell} border-b sm:border-b-0 sm:border-r`}>
            <dt className="eyebrow">{t("visit.paymentLabel")}</dt>
            <dd className="mt-4 font-serif text-2xl text-cream">{t("visit.payment")}</dd>
          </div>
          <div className={cell}>
            <dt className="eyebrow">{t("visit.contactLabel")}</dt>
            <dd className="mt-4 font-serif text-2xl text-cream">
              <a
                href={`tel:${site.phoneE164}`}
                aria-label={t("visit.call", { phone: site.phoneDisplay })}
                className="hover:text-gold"
              >
                {site.phoneDisplay}
              </a>
            </dd>
            <dd className="mt-3">
              <a
                href={whatsappUrl(t("whatsapp.general"))}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-gold underline underline-offset-4 hover:text-gold-soft"
              >
                <WhatsAppIcon className="size-4" />
                {t("visit.whatsappCta")}
              </a>
            </dd>
          </div>
        </dl>
      </Reveal>
    </section>
  );
}
