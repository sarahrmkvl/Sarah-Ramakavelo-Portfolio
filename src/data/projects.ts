import projectsData from "../../projects.json";

export interface LocalizedValue<T = string> { fr: T; en: T }
export interface ProjectImage {
  src: string;
  alt: LocalizedValue;
  caption?: LocalizedValue;
}
export interface Project {
  id: string;
  name: LocalizedValue;
  featured: boolean;
  timeframe: LocalizedValue;
  confidentiality: LocalizedValue | null;
  links: { github: string | null; live: string | null };
  summary: LocalizedValue;
  context: LocalizedValue;
  problem: LocalizedValue;
  method: LocalizedValue<string[]>;
  results: LocalizedValue<string[]>;
  learnings: LocalizedValue;
  technologies: string[];
  images: ProjectImage[];
}

export const projects = projectsData.projects as Project[];

export function getProject(id: string) {
  return projects.find((project) => project.id === id);
}
