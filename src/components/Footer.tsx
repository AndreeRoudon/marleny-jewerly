import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { site, whatsappUrl } from "@/lib/site";
import { Logo } from "./Logo";

// Año fijo en build para un render determinista (se actualiza en cada despliegue).
const YEAR = 2026;

export async function Footer() {
  const t = await getTranslations();
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-site grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Logo className="h-16 w-auto" />
          <p className="mt-4 font-serif text-2xl tracking-[0.2em] text-gold-soft">MARLENY</p>
          <p className="mt-3 max-w-xs text-sm text-muted">{t("footer.tagline")}</p>
        </div>
        <div>
          <h2 className="eyebrow">{t("footer.navTitle")}</h2>
          <ul className="mt-5 space-y-3 text-sm text-cream/85">
            <li><Link className="hover:text-gold" href="/">{t("nav.home")}</Link></li>
            <li><Link className="hover:text-gold" href="/tienda">{t("nav.shop")}</Link></li>
            <li><Link className="hover:text-gold" href="/#visitanos">{t("nav.visit")}</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="eyebrow">{t("footer.contactTitle")}</h2>
          <ul className="mt-5 space-y-3 text-sm text-cream/85">
            <li>
              <a className="hover:text-gold" href={site.mapsUrl} target="_blank" rel="noopener noreferrer">
                {t("visit.address")}
              </a>
            </li>
            <li><a className="hover:text-gold" href={`tel:${site.phoneE164}`}>{site.phoneDisplay}</a></li>
            <li>
              <a className="hover:text-gold" href={whatsappUrl(t("whatsapp.general"))} target="_blank" rel="noopener noreferrer">
                {t("nav.whatsapp")}
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="eyebrow">{t("footer.hoursTitle")}</h2>
          <p className="mt-5 text-sm text-cream/85">{t("visit.hours")}</p>
          <p className="mt-1 text-sm text-cream/85">{t("visit.hoursTime")}</p>
          <p className="mt-4 text-sm text-muted">{t("visit.payment")}</p>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="container-site py-6 text-xs text-muted">{t("footer.rights", { year: YEAR })}</p>
      </div>
    </footer>
  );
}
