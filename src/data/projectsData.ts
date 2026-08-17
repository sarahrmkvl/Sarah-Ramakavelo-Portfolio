import { projects } from "./projects";
import { sitePath } from "./profile";

export interface ProjectDataItem {
  id: string;
  title: string;
  titleFr?: string;
  timeframe?: string;
  timeframeFr?: string;
  githubUrl?: string;
  githubRepos?: { title?: string; url: string }[];
  projectUrl?: string;
  techStack?: string[];
  imageSrc?: string;
  imageAlt?: string;
  thumbnailSrc?: string;
  description: string;
  descriptionFr?: string;
  homepageSummary?: string;
  homepageSummaryFr?: string;
  isFeatured?: boolean;
}

export const allProjectsData: ProjectDataItem[] = projects.map((project) => ({
  id: project.id,
  title: project.name.en,
  titleFr: project.name.fr,
  timeframe: project.confidentiality?.en ?? project.timeframe.en,
  timeframeFr: project.confidentiality?.fr ?? project.timeframe.fr,
  githubUrl: project.links.github ?? undefined,
  projectUrl: project.links.live ?? undefined,
  techStack: project.technologies,
  imageSrc: project.images[0] ? sitePath(project.images[0].src) : undefined,
  imageAlt: project.images[0]?.alt.en,
  description: `<p>${project.summary.en}</p>`,
  descriptionFr: `<p>${project.summary.fr}</p>`,
  homepageSummary: project.summary.en,
  homepageSummaryFr: project.summary.fr,
  isFeatured: project.featured ?? false,
}));
