// Convierte las fotos originales (images/*.jpg) a webp optimizado en public/images.
// Uso: node scripts/optimize-images.mjs
import { mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC = "images";
const OUT = "public/images";

/** Foto original -> slug del producto (fondo rojo). */
const products = {
  "IMG_3607": "juego-arbol-de-la-vida",
  "IMG_3608": "juego-flor-delicada",
  "IMG_3609": "juego-corazon",
  "IMG_3610": "juego-corazon-rubi",
  "IMG_3612": "juego-luna-calada",
  "IMG_3613": "juego-osito-onix",
  "IMG_3614": "juego-gatita-brillante",
  "IMG_3615": "juego-flor-de-loto",
  "IMG_3616": "juego-flor-filigrana",
  "IMG_3617": "collar-flor-turquesa",
  "IMG_3618": "juego-mariposa-filigrana",
  "IMG_3619": "juego-estrella-filigrana",
  "IMG_3620": "juego-flor-de-cerezo",
  "IMG_3621": "juego-flor-de-jazmin",
  "IMG_3622": "collar-cruz-clasica",
  "IMG_3624": "collar-ancla",
  "IMG_3625": "collar-medalla",
  "IMG_3626": "collar-timon-marinero",
};

await mkdir(path.join(OUT, "products"), { recursive: true });

for (const [file, slug] of Object.entries(products)) {
  await sharp(path.join(SRC, `${file}.jpg`))
    .rotate()
    .resize(1200, 1500, { fit: "cover", position: "centre" })
    .webp({ quality: 78 })
    .toFile(path.join(OUT, "products", `${slug}.webp`));
  console.log(`✓ products/${slug}.webp`);
}

// Foto de ambiente (pulseras, fondo negro) para la página de inicio.
await sharp(path.join(SRC, "IMG_3605.jpg"))
  .rotate()
  .resize(1600, 1200, { fit: "cover", position: "centre" })
  .webp({ quality: 78 })
  .toFile(path.join(OUT, "pulseras-plata.webp"));
console.log("✓ pulseras-plata.webp");
