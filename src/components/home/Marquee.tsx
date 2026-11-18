import { getTranslations } from "next-intl/server";
import { Sparkle } from "../icons";

export async function Marquee() {
  const t = await getTranslations("marquee");
  const items = t("items").split(" · ");
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((item) => (
        <li key={item} className="flex items-center gap-8 pr-8 font-serif text-2xl italic text-gold-soft md:text-3xl">
          {item}
          <Sparkle className="size-3 text-gold" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="overflow-hidden border-y border-line bg-wine-deep/40 py-5">
      <div className="flex w-max animate-marquee">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
