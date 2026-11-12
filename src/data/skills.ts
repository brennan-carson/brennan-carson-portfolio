import type { SkillCategory } from '../types/skill';

export const skillCategories: readonly SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    skills: ['Java', 'Python', 'JavaScript', 'Kotlin', 'C#', 'SQL'],
  },
  {
    id: 'frameworks-apis',
    title: 'Frameworks & APIs',
    skills: [
      'Spring Boot',
      'Node.js',
      'Express',
      'FastAPI',
      'Angular',
      'REST APIs',
      'Microservices',
    ],
  },
  {
    id: 'data-integration',
    title: 'Data & Integration',
    skills: ['SQL', 'Striim', 'Data pipelines', 'Database integrations', 'Jaspersoft'],
  },
  {
    id: 'cloud-platforms',
    title: 'Cloud & Platforms',
    skills: [
      'Google Cloud Platform',
      'Azure',
      'Docker',
      'OpenShift',
      'Kubernetes',
      'Terraform',
      'Linux',
    ],
  },
  {
    id: 'developer-tools',
    title: 'Developer Tools & CI/CD',
    skills: ['VS Code', 'Git', 'GitHub', 'Azure DevOps', 'Jenkins', 'Jira', 'CI/CD'],
  },
  {
    id: 'ai-tools',
    title: 'AI & Developer Tools',
    skills: ['LangChain', 'OpenAI API', 'GitHub Copilot', 'Coding agents', 'MCP servers'],
  },
];
