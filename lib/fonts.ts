import localFont from "next/font/local";
import { Archivo, IBM_Plex_Mono } from "next/font/google";

// The studio (black-mak-v4) uses Archivo + IBM Plex Mono, wired through CSS
// variables. We load the exact same families so letterforms are pixel-identical
// across the CV and the studio (zero layout shift, one visual DNA).
export const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-archivo",
  display: "swap",
});

export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

// Self-hosted Arabic face (Asal) — matches the studio's Arabic typography.
export const asalArabic = localFont({
  src: [
    { path: "../public/fonts/asal-arabic.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/asal-arabic.woff", weight: "500", style: "normal" },
  ],
  variable: "--font-ar",
  display: "swap",
});
