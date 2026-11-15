import type { Project } from '../types/project';

export const projects: readonly Project[] = [
  {
    slug: 'watchtower',
    name: 'Watchtower',
    tagline: 'A full-stack learning platform for structured lessons and interactive exercises.',
    description:
      'In development. The planned platform supports structured lessons, interactive exercises, automated assessments, and personalized progress tracking. The current implementation includes FastAPI and PostgreSQL APIs with modular service layers, JWT/RBAC, migrations, validation, and centralized exception handling; responsive React/TypeScript exercises with real-time feedback; and Redis-backed asynchronous exercise evaluation with retries. The project also includes pytest unit/integration suites, GitHub Actions quality gates, Docker Compose, and architecture/API documentation.',
    status: 'in-development',
    technologies: [
      'Python',
      'FastAPI',
      'TypeScript',
      'React',
      'PostgreSQL',
      'Redis',
      'Docker',
      'Docker Compose',
      'JWT',
      'RBAC',
      'pytest',
      'GitHub Actions',
    ],
    links: [],
  },
  {
    slug: 'fastapi-pdf-summarizer',
    name: 'FastAPI PDF Summarizer',
    tagline: 'A PDF summarization API with structured output.',
    description:
      'Built a Docker-packaged PDF upload API with text extraction, recursive chunking, and multi-stage OpenAI summarization. It returns structured summaries and key takeaways, with input validation and error responses.',
    status: 'completed',
    technologies: ['Python', 'FastAPI', 'OpenAI API', 'Docker'],
    links: [],
  },
  {
    slug: 'alfred',
    name: 'Alfred',
    tagline: 'An AI assistant that summarizes GitHub pull requests.',
    description:
      'Built an event-driven GitHub integration that summarizes pull request descriptions and changed-file metadata, then posts AI summaries through the REST API. It validates signed webhooks, protects against duplicate events, and centralizes error handling.',
    status: 'completed',
    technologies: ['Node.js', 'Express', 'Octokit', 'OpenAI API'],
    links: [],
  },
];

export function findProject(slug: string | undefined): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
