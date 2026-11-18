import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations } from "next-intl/server";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { locale } from "@/i18n/request";
import { site } from "@/lib/site";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#0c0908",
  colorScheme: "dark",
};

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("meta");
  return {
    metadataBase: new URL(site.url),
    title: { default: t("homeTitle"), template: `%s | ${t("siteName")}` },
    description: t("homeDescription"),
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      locale: "es_PE",
      siteName: t("siteName"),
      title: t("homeTitle"),
      description: t("homeDescription"),
      images: [{ url: "/images/products/juego-arbol-de-la-vida.webp", width: 1200, height: 1500 }],
    },
    twitter: { card: "summary_large_image" },
  };
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "JewelryStore",
  name: "Marleny Joyería",
  url: site.url,
  telephone: site.phoneE164,
  image: `${site.url}/images/products/juego-arbol-de-la-vida.webp`,
  priceRange: "S/",
  currenciesAccepted: "PEN",
  paymentAccepted: "Yape, Efectivo",
  address: {
    "@type": "PostalAddress",
    streetAddress: site.street,
    addressLocality: site.city,
    addressRegion: site.city,
    addressCountry: site.country,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: site.opens,
    closes: site.closes,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang={locale} data-scroll-behavior="smooth" className={`${cormorant.variable} ${jost.variable} antialiased`}>
      <body className="flex min-h-dvh flex-col">
        <NextIntlClientProvider>
          <Header />
          <main id="contenido" className="flex-1">
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      </body>
    </html>
  );
}
