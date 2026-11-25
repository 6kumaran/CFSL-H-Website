import type { Metadata } from "next";
import { Noto_Sans_Devanagari, Noto_Sans_Telugu } from "next/font/google";
import "./globals.css";
import "./transitions.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SplashScreen } from "@/components/splash-screen";
import { LanguageProvider } from "@/components/language-provider";
import { getLang } from "@/lib/i18n-server";
import type { Lang } from "@/lib/i18n";

const notoDevanagari = Noto_Sans_Devanagari({
  subsets: ["devanagari", "latin"],
  variable: "--font-devanagari",
  display: "swap",
});

const notoTelugu = Noto_Sans_Telugu({
  subsets: ["telugu", "latin"],
  variable: "--font-telugu",
  display: "swap",
});

const meta: Record<Lang, { title: string; template: string; description: string }> = {
  en: {
    title: "CFSL Hyderabad | Central Forensic Science Laboratory",
    template: "%s | CFSL Hyderabad",
    description:
      "Official website concept for the Central Forensic Science Laboratory, Hyderabad. Explore institutional information, forensic divisions, services and public notices.",
  },
  hi: {
    title: "सीएफएसएल हैदराबाद | केंद्रीय न्यायालयिक विज्ञान प्रयोगशाला",
    template: "%s | सीएफएसएल हैदराबाद",
    description:
      "केंद्रीय न्यायालयिक विज्ञान प्रयोगशाला, हैदराबाद की आधिकारिक वेबसाइट की अवधारणा। संस्थागत जानकारी, न्यायालयिक प्रभाग, सेवाएँ और सार्वजनिक सूचनाएँ देखें।",
  },
  te: {
    title: "సీఎఫ్‌ఎస్‌ఎల్ హైదరాబాద్ | కేంద్ర ఫోరెన్సిక్ సైన్స్ ప్రయోగశాల",
    template: "%s | సీఎఫ్‌ఎస్‌ఎల్ హైదరాబాద్",
    description:
      "కేంద్ర ఫోరెన్సిక్ సైన్స్ ప్రయోగశాల, హైదరాబాద్ అధికారిక వెబ్‌సైట్ భావన. సంస్థాగత సమాచారం, ఫోరెన్సిక్ విభాగాలు, సేవలు మరియు ప్రజా నోటీసులను చూడండి.",
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const lang = await getLang();
  const m = meta[lang];
  return {
    title: { default: m.title, template: m.template },
    description: m.description,
  };
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const lang = await getLang();

  return (
    <html
      lang={lang}
      className={`h-full antialiased ${notoDevanagari.variable} ${notoTelugu.variable}`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider initialLang={lang}>
          <SplashScreen />
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}