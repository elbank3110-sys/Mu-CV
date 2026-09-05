import type { Metadata, Viewport } from "next";
import "./globals.css";
import { archivo, plexMono, asalArabic } from "@/lib/fonts";
import { I18nProvider } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Effects from "@/components/Effects";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { profile, STUDIO_URL } from "@/lib/data";

const SITE_URL = "https://mu-cv.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Muhamed Alaa — CV | BLACK-MAK® Logo & Visual Identity Designer",
  description:
    "The online CV of Muhamed Alaa (BLACK-MAK®): Senior Graphic & Brand Designer with 12+ years across Arabic & Latin typography, logo design and identity systems. Bilingual EN/AR.",
  keywords: [
    "Muhamed Alaa",
    "BLACK-MAK",
    "Logo Designer",
    "Brand Identity",
    "Arabic Calligraphy",
    "Visual Identity",
    "Creative Director",
    "Egypt Designer",
  ],
  authors: [{ name: "Muhamed Alaa", url: SITE_URL }],
  alternates: {
    canonical: SITE_URL,
    languages: { en: SITE_URL, ar: SITE_URL },
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Muhamed Alaa — CV | BLACK-MAK®",
    description:
      "Senior Graphic & Brand Designer. 12+ years designing Arabic & Latin identity systems. This is the person — the studio holds the work.",
    type: "profile",
    url: SITE_URL,
    siteName: "BLACK-MAK® CV",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhamed Alaa — CV | BLACK-MAK®",
    description:
      "Senior Graphic & Brand Designer. 12+ years of Arabic & Latin identity systems.",
  },
};

export const viewport: Viewport = {
  themeColor: "#070708",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Muhamed Alaa",
  alternateName: "BLACK-MAK",
  url: SITE_URL,
  image: `${SITE_URL}/portrait.webp`,
  jobTitle: "Senior Graphic & Brand Designer",
  email: `mailto:${profile.email}`,
  telephone: profile.phoneRaw,
  address: { "@type": "PostalAddress", addressLocality: "New Valley", addressCountry: "EG" },
  worksFor: { "@type": "Organization", name: "BLACK-MAK®" },
  sameAs: [
    "https://www.behance.net/Muhmed-alaa-el-bank",
    "https://www.instagram.com/muhamedalaaelbank/",
    "https://unsplash.com/@muhmedelbank",
    STUDIO_URL,
  ],
  knowsAbout: [
    "Logo Design",
    "Brand Identity",
    "Typography",
    "Arabic Calligraphy",
    "Visual Identity",
    "Outdoor Advertising",
  ],
  knowsLanguage: ["ar", "en"],
};

// FOUC-free: apply saved lang/theme before React hydrates.
const boot = `(function(){try{var l=localStorage.getItem('bm-lang');if(!l){var n=navigator.language||'en';l=n.toLowerCase().indexOf('ar')===0?'ar':'en';}if(l==='ar'){document.documentElement.lang='ar';document.documentElement.dir='rtl';}var t=localStorage.getItem('bm-theme');if(t==='light'){document.documentElement.dataset.theme='light';}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${archivo.variable} ${plexMono.variable} ${asalArabic.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: boot }} />
        <link rel="preconnect" href={STUDIO_URL} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:left-2 focus:top-2 focus:z-[300] focus:border focus:border-line-strong focus:bg-bg focus:px-4 focus:py-2 focus:text-ink"
        >
          Skip to content
        </a>
        <I18nProvider>
          <Effects />
          <Header />
          <main className="pt-[76px]">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </I18nProvider>
      </body>
    </html>
  );
}
