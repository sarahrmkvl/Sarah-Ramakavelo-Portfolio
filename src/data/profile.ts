import profileData from "../../profile.json";

export type Language = "fr" | "en";
export type LocalizedText = Record<Language, string>;

export const profile = profileData;

export function sitePath(path = "/") {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalized}` || "/";
}

export function languageAttributes(value: LocalizedText) {
  return {
    "data-i18n-fr": value.fr,
    "data-i18n-en": value.en,
  };
}

export function formatPeriod(
  startDate: string,
  endDate: string | null,
  current: boolean,
): LocalizedText {
  const format = (date: string, language: Language) => {
    const [year, month] = date.split("-").map(Number);
    return new Intl.DateTimeFormat(language === "fr" ? "fr-FR" : "en-GB", {
      month: "short",
      year: "numeric",
      timeZone: "UTC",
    }).format(new Date(Date.UTC(year, month - 1)));
  };

  return {
    fr: `${format(startDate, "fr")} — ${current || !endDate ? "Aujourd’hui" : format(endDate, "fr")}`,
    en: `${format(startDate, "en")} — ${current || !endDate ? "Present" : format(endDate, "en")}`,
  };
}
