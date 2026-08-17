import { formatPeriod, profile } from "./profile";

export interface TimelineEventItem {
  date: string;
  dateRange: string;
  dateRangeEn: string;
  title: string;
  titleEn: string;
  category: "Experiences" | "Education";
  description: string;
  descriptionEn: string;
  isHighlight?: boolean;
  highlightSummary: string;
  highlightSummaryEn: string;
}

const experiences: TimelineEventItem[] = profile.experience.map((item) => {
  const period = formatPeriod(item.startDate, item.endDate, item.current);
  return {
    date: item.endDate ?? item.startDate,
    dateRange: period.fr,
    dateRangeEn: period.en,
    title: `${item.company} · ${item.role.fr}`,
    titleEn: `${item.company} · ${item.role.en}`,
    category: "Experiences",
    description: `<p>${item.summary.fr}</p><ul>${item.bullets.fr.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>`,
    descriptionEn: `<p>${item.summary.en}</p><ul>${item.bullets.en.map((bullet) => `<li>${bullet}</li>`).join("")}</ul>`,
    isHighlight: true,
    highlightSummary: item.summary.fr,
    highlightSummaryEn: item.summary.en,
  };
});

const education: TimelineEventItem[] = profile.education.map((item) => ({
  date: `${item.endYear}-06`,
  dateRange: `${item.startYear} — ${item.endYear}`,
  dateRangeEn: `${item.startYear} — ${item.endYear}`,
  title: `${item.school} · ${item.degree.fr}`,
  titleEn: `${item.school} · ${item.degree.en}`,
  category: "Education",
  description: `<p>${item.location}${item.coursework.length ? ` · ${(item.courseworkFr ?? item.coursework).join(" · ")}` : ""}</p>`,
  descriptionEn: `<p>${item.location}${item.coursework.length ? ` · ${item.coursework.join(" · ")}` : ""}</p>`,
  highlightSummary: item.degree.fr,
  highlightSummaryEn: item.degree.en,
}));

export const allTimelineEvents = [...experiences, ...education].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
);
