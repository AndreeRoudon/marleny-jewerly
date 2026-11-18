import { getRequestConfig } from "next-intl/server";

// Sitio en español únicamente. Para añadir un idioma: crear messages/<locale>.json
// y resolver aquí el locale (cookie o routing).
export const locale = "es";

export default getRequestConfig(async () => ({
  locale,
  messages: (await import(`../../messages/${locale}.json`)).default,
}));
