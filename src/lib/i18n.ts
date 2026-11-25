export const LANGS = ["en", "hi", "te"] as const;
export type Lang = (typeof LANGS)[number];
export type Localized = Record<Lang, string>;

export const DEFAULT_LANG: Lang = "en";
export const LANG_COOKIE = "cfsl-lang";

export const LANG_LABELS: Record<Lang, string> = {
  en: "English",
  hi: "हिन्दी",
  te: "తెలుగు",
};

export function isLang(value: unknown): value is Lang {
  return typeof value === "string" && (LANGS as readonly string[]).includes(value);
}

// Falls back to English if a translation is missing
export function pick(text: Partial<Localized> & { en: string }, lang: Lang) {
  return text[lang] ?? text.en;
}