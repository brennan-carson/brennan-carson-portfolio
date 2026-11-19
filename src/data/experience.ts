import type { ExperienceEntry } from '../types/experience';

export const experience: readonly ExperienceEntry[] = [
  {
    id: 'ups-software-engineer-ii',
    role: 'Software Engineer II',
    company: 'UPS',
    startDate: 'June 2025',
    endDate: 'Present',
    accomplishments: [
      'Built a Python and LangChain natural-language data retrieval tool using SQL. Work included SQL generation and validation, database connectivity, structured responses, and error recovery.',
      'Designed reusable APIs and services connecting internal applications with enterprise data sources, reducing duplicated database-access logic and simplifying downstream development.',
      'Supported modernization of a mission-critical application by configuring Striim CDC pipelines and contributing to GCP migration work.',
    ],
    responsibilities: [],
    technologies: [
      'Python',
      'LangChain',
      'SQL',
      'REST APIs',
      'Bash',
      'Linux',
      'Striim',
      'Google Cloud Platform',
      'Distributed systems',
    ],
  },
  {
    id: 'ups-software-engineer-intern',
    role: 'Software Engineer Intern',
    company: 'UPS',
    startDate: 'June 2024',
    endDate: 'May 2025',
    accomplishments: [
      'Shipped full-stack features with Java, Spring Boot, Angular, and Oracle SQL, including REST APIs, backend logic, database integrations, validation, and exception handling.',
      'Built reusable services, optimized SQL to reduce redundant database operations, and wrote JUnit and Mockito tests.',
    ],
    responsibilities: [],
    technologies: [
      'Java',
      'Spring Boot',
      'Angular',
      'Oracle SQL',
      'JUnit',
      'Mockito',
      'Git',
      'Jenkins',
      'OpenShift',
    ],
  },
];
