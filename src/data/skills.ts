import type { SkillCategory } from '../types/skill';

export const skillCategories: readonly SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    skills: ['Java', 'Python', 'TypeScript', 'JavaScript', 'SQL', 'Kotlin', 'C#'],
  },
  {
    id: 'backend-architecture',
    title: 'Backend & Architecture',
    skills: [
      'Spring Boot',
      'FastAPI',
      'Node.js',
      'Express',
      'REST APIs',
      'Microservices',
      'Distributed Systems',
      'Object-Oriented Design',
      'API Design',
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    skills: ['React', 'Angular', 'HTML', 'CSS'],
  },
  {
    id: 'databases-messaging',
    title: 'Databases & Messaging',
    skills: [
      'PostgreSQL',
      'Oracle',
      'Redis',
      'SQL Optimization',
      'Database Design',
      'Striim',
      'Data Pipelines',
    ],
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud & Infrastructure',
    skills: [
      'Google Cloud Platform',
      'Azure',
      'AWS',
      'Docker',
      'Kubernetes',
      'OpenShift',
      'Linux',
      'Terraform',
    ],
  },
  {
    id: 'testing-devops',
    title: 'Testing & DevOps',
    skills: [
      'pytest',
      'JUnit',
      'Mockito',
      'Unit & Integration Testing',
      'Git',
      'GitHub Actions',
      'Jenkins',
      'Azure DevOps',
      'CI/CD',
    ],
  },
  {
    id: 'ai-tools',
    title: 'AI & Developer Tools',
    skills: [
      'LangChain',
      'OpenAI API',
      'Retrieval-Augmented Generation',
      'AI Agents',
      'GitHub Copilot',
    ],
  },
];
