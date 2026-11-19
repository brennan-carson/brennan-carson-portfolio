import type { Project } from '../types/project';

export const projects: readonly Project[] = [
  {
    slug: 'watchtower',
    name: 'Watchtower',
    tagline: 'A personal software project currently taking shape.',
    description:
      'In development. The project concept, current feature set, and technical details are being confirmed before a full case study is published.',
    status: 'in-development',
    technologies: [],
    links: [],
  },
  {
    slug: 'fastapi-pdf-summarizer',
    name: 'FastAPI PDF Summarizer',
    tagline: 'A project exploring ways to summarize PDF documents.',
    description:
      'The project summary, implementation details, and completion status are being confirmed before a full case study is published.',
    status: 'status-to-confirm',
    technologies: [],
    links: [],
  },
  {
    slug: 'alfred',
    name: 'Alfred',
    tagline: 'A project exploring AI-assisted pull request summaries.',
    description:
      'The project summary, implementation details, and completion status are being confirmed before a full case study is published.',
    status: 'status-to-confirm',
    technologies: [],
    links: [],
  },
];

export function findProject(slug: string | undefined): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
