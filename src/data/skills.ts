import type { SkillCategory } from '../types/skill';

// Skills are left empty until confirmed; the UI renders a placeholder for empty categories.
export const skillCategories: readonly SkillCategory[] = [
  { id: 'languages', title: 'Languages', skills: [] },
  { id: 'frameworks', title: 'Frameworks', skills: [] },
  { id: 'databases', title: 'Databases', skills: [] },
  { id: 'infrastructure', title: 'Infrastructure & Tools', skills: [] },
];
