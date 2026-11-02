export type ProjectStatus = 'in-development' | 'completed' | 'planned';

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  /** URL segment for /projects/:slug. */
  slug: string;
  name: string;
  tagline: string;
  description: string;
  status: ProjectStatus;
  technologies: readonly string[];
  links: readonly ProjectLink[];
}
