export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  phoneDisplay: "964 167 861",
  phoneE164: "+51964167861",
  whatsappNumber: "51964167861",
  street: "Calle Ayaviri 100",
  city: "Arequipa",
  country: "PE",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Calle+Ayaviri+100%2C+Arequipa%2C+Per%C3%BA",
  opens: "08:00",
  closes: "18:00",
} as const;

export function whatsappUrl(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
