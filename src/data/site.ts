export const site = {
  name: 'Brennan Carson',
  title: 'Software Engineer',
  summary:
    'I’m a software engineer at UPS. My work has included backend and full-stack applications, data integrations, and tools that make information easier to work with. I’m especially interested in backend development, distributed systems, cloud infrastructure, and practical AI integrations.',
  githubUrl: 'https://github.com/brennan-carson',
  linkedinUrl: 'https://www.linkedin.com/in/robert-brennan-carson' as string | undefined,
  email: 'brennancarson3@gmail.com' as string | undefined,
  interests: [
    {
      id: 'backend',
      title: 'Backend engineering',
      description:
        'Designing APIs and services that make complex systems easier to build and maintain.',
    },
    {
      id: 'distributed-systems',
      title: 'Distributed systems',
      description: 'Connecting services and data reliably across production environments.',
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud infrastructure',
      description: 'Building and operating software across Linux and cloud-native platforms.',
    },
    {
      id: 'ai-integrations',
      title: 'AI integrations',
      description: 'Using language models and retrieval workflows to make useful tools.',
    },
  ],
  education: {
    institution: 'University of Louisville, J.B. Speed School of Engineering',
    degree: 'Bachelor of Arts in Computer Science',
    gpa: '3.7 / 4.0',
    graduationDate: 'May 2025',
  },
} as const;
