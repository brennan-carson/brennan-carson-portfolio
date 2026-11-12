import type { ExperienceEntry } from '../types/experience';

export const experience: readonly ExperienceEntry[] = [
  {
    id: 'ups-software-engineer-ii',
    role: 'Software Engineer II',
    company: 'UPS',
    startDate: 'June 2025',
    endDate: 'Present',
    location: 'Louisville, KY',
    accomplishments: [
      'Promoted from Software Engineer I.',
      'Collaborated on the design and Python development of a LangChain agent that retrieves database and application information through natural-language requests and SQL. User testing indicated faster lookups than manual database queries.',
    ],
    responsibilities: [
      'Help maintain a mission-critical application serving 5,000+ internal users across 50+ Linux servers through on-call response, incident triage, deployment coordination, and service restarts.',
      'Trace issues across services, analyze logs, validate SQL, and perform root-cause analysis; communicate findings to engineering stakeholders.',
      'Write application installation scripts for Linux servers and SQL scripts for database tasks.',
      'Contribute to Striim integration setup for downstream applications and support Google Cloud Platform migration setup.',
    ],
    technologies: [
      'Python',
      'LangChain',
      'SQL',
      'Linux',
      'Striim',
      'Google Cloud Platform',
      'CI/CD',
      'Monitoring & observability',
    ],
  },
  {
    id: 'ups-software-engineer-intern',
    role: 'Software Engineer Intern',
    company: 'UPS',
    startDate: 'June 2024',
    endDate: 'May 2025',
    location: 'Louisville, KY',
    accomplishments: [
      'Designed and shipped full-stack features for internal web applications using Java, Spring Boot, and Angular, including backend APIs deployed to production.',
      'Built SQL and Jaspersoft reports to improve data visibility for operational decision-making.',
    ],
    responsibilities: [
      'Built backend and frontend functionality, helped write automated tests, and incorporated peer-review feedback through iterative development.',
      'Deployed application changes through Jenkins CI/CD pipelines to OpenShift container environments.',
    ],
    technologies: ['Java', 'Spring Boot', 'Angular', 'SQL', 'Jaspersoft', 'Jenkins', 'OpenShift'],
  },
];
