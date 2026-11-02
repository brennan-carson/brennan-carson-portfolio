import type { Project } from '../types/project';

// Statuses and technology lists are placeholders; confirm each before publishing.
export const projects: readonly Project[] = [
  {
    slug: 'watchtower',
    name: 'Watchtower',
    tagline: 'Application monitoring and status platform.',
    description: 'Project description coming soon.',
    status: 'in-development',
    technologies: [],
    links: [],
  },
  {
    slug: 'learning-platform',
    name: 'Software Engineering Learning Platform',
    tagline: 'A personal platform for learning and practicing software engineering concepts.',
    description: 'Project description coming soon.',
    status: 'in-development',
    technologies: [],
    links: [],
  },
  {
    slug: 'fastapi-pdf-summarizer',
    name: 'FastAPI PDF Summarizer',
    tagline: 'A service that summarizes PDF documents.',
    description: 'Project description coming soon.',
    status: 'in-development',
    technologies: ['Python', 'FastAPI'],
    links: [],
  },
  {
    slug: 'alfred',
    name: 'Alfred',
    tagline: 'A GitHub pull request assistant.',
    description: 'Project description coming soon.',
    status: 'in-development',
    technologies: [],
    links: [],
  },
];

export function findProject(slug: string | undefined): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
