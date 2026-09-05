// Asset optimizer — converts heavy source images into web-ready WebP.
// Run with: node scripts/optimize-assets.mjs
import sharp from "sharp";
import { existsSync, mkdirSync } from "node:fs";
import path from "node:path";

const SRC = "D:/BLACK-MACK-VERSIONS";
const OUT = path.join(process.cwd(), "public");
const CERT_OUT = path.join(OUT, "certs");

if (!existsSync(CERT_OUT)) mkdirSync(CERT_OUT, { recursive: true });

const jobs = [
  // Portrait: full + a lighter blur-safe display size
  {
    in: `${SRC}/hero-portrait.jpg`,
    out: `${OUT}/portrait.webp`,
    width: 1100,
    quality: 82,
    grayscale: false,
  },
  {
    in: `${SRC}/hero-portrait.jpg`,
    out: `${OUT}/portrait-sm.webp`,
    width: 560,
    quality: 78,
    grayscale: false,
  },
  // Certificates: full readable + thumbnail
  { in: `${SRC}/cert-graphic.jpg`, out: `${CERT_OUT}/graphic.webp`, width: 1400, quality: 84 },
  { in: `${SRC}/cert-graphic.jpg`, out: `${CERT_OUT}/graphic-thumb.webp`, width: 640, quality: 80 },
  { in: `${SRC}/cert-english.jpg`, out: `${CERT_OUT}/english.webp`, width: 1400, quality: 84 },
  { in: `${SRC}/cert-english.jpg`, out: `${CERT_OUT}/english-thumb.webp`, width: 640, quality: 80 },
  { in: `${SRC}/cert-fdtc.jpg`, out: `${CERT_OUT}/fdtc.webp`, width: 1400, quality: 84 },
  { in: `${SRC}/cert-fdtc.jpg`, out: `${CERT_OUT}/fdtc-thumb.webp`, width: 640, quality: 80 },
];

let ok = 0;
for (const job of jobs) {
  if (!existsSync(job.in)) {
    console.warn(`SKIP (missing): ${job.in}`);
    continue;
  }
  let pipe = sharp(job.in).rotate().resize({ width: job.width, withoutEnlargement: true });
  if (job.grayscale) pipe = pipe.grayscale();
  await pipe.webp({ quality: job.quality, effort: 6 }).toFile(job.out);
  ok++;
  console.log(`OK -> ${path.relative(process.cwd(), job.out)}`);
}
console.log(`\nDone: ${ok}/${jobs.length} assets written.`);
