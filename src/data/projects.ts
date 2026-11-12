import type { Project } from '../types/project';

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
    tagline: 'A PDF summarization API with structured output.',
    description:
      'Built a Python/FastAPI service with PDF upload and JSON/HTML endpoints. It extracts text, chunks longer documents for OpenAI summarization, and returns a consolidated summary and key points with input validation and error handling.',
    status: 'completed',
    technologies: ['Python', 'FastAPI', 'OpenAI API'],
    links: [],
  },
  {
    slug: 'alfred',
    name: 'Alfred',
    tagline: 'An AI assistant that summarizes GitHub pull requests.',
    description:
      'Built a Node.js GitHub pull request assistant with Octokit and OpenAI. It generates structured summaries from pull request descriptions and changed-file metadata, posts them as comments, and skips pull requests that already have a summary.',
    status: 'completed',
    technologies: ['Node.js', 'Octokit', 'OpenAI API'],
    links: [],
  },
];

export function findProject(slug: string | undefined): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
