"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { whatsappUrl } from "@/lib/site";
import { Logo } from "./Logo";
import { WhatsAppIcon } from "./icons";

const links = [
  { href: "/", key: "home" },
  { href: "/tienda", key: "shop" },
  { href: "/#visitanos", key: "visit" },
] as const;

export function Header() {
  const t = useTranslations();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const wa = whatsappUrl(t("whatsapp.general"));

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-gold focus:px-4 focus:py-2 focus:text-ink"
      >
        {t("nav.skip")}
      </a>
      <div className="container-site flex h-18 items-center justify-between gap-6">
        <Link
          href="/"
          aria-label={t("nav.logoLabel")}
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <Logo className="h-11 w-auto" />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-xl tracking-[0.22em] text-gold-soft">MARLENY</span>
            <span className="mt-1 text-[0.6rem] uppercase tracking-[0.42em] text-muted">Joyería</span>
          </span>
        </Link>

        <nav aria-label={t("nav.main")} className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
              className="text-xs uppercase tracking-[0.24em] text-cream/80 transition-colors hover:text-gold aria-[current=page]:text-gold"
            >
              {t(`nav.${l.key}`)}
            </Link>
          ))}
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border border-gold px-5 py-2.5 text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-ink"
          >
            <WhatsAppIcon className="size-4" />
            {t("nav.whatsapp")}
          </a>
        </nav>

        <button
          type="button"
          className="flex size-11 flex-col items-center justify-center gap-1.5 md:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? t("nav.closeMenu") : t("nav.openMenu")}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`h-px w-6 bg-gold transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-gold transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Fondo sólido (sin backdrop-filter) para Safari iOS */}
      <div
        id="menu-movil"
        hidden={!open}
        className="fixed inset-x-0 bottom-0 top-18 overflow-y-auto bg-ink md:hidden"
      >
        <nav aria-label={t("nav.main")} className="container-site flex flex-col py-8">
          {links.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-5 font-serif text-3xl text-cream"
            >
              {t(`nav.${l.key}`)}
            </Link>
          ))}
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center gap-2 bg-gold px-5 py-4 text-sm uppercase tracking-[0.2em] text-ink"
          >
            <WhatsAppIcon className="size-5" />
            {t("nav.whatsapp")}
          </a>
        </nav>
      </div>
    </header>
  );
}
