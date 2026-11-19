import type { SkillCategory } from '../types/skill';

export const skillCategories: readonly SkillCategory[] = [
  {
    id: 'professional-experience',
    title: 'Professional experience',
    skills: [
      'Java',
      'Python',
      'SQL',
      'Spring Boot',
      'Angular',
      'Oracle SQL',
      'REST APIs',
      'LangChain',
      'Linux',
      'Striim',
      'Google Cloud Platform',
      'JUnit',
      'Mockito',
      'Jenkins',
      'OpenShift',
    ],
  },
  {
    id: 'personal-projects',
    title: 'Personal projects',
    skills: [
      'TypeScript',
      'React',
      'FastAPI',
      'Node.js',
      'Express',
      'PostgreSQL',
      'Redis',
      'Docker',
      'Octokit',
      'OpenAI API',
      'pytest',
      'GitHub Actions',
    ],
  },
];
