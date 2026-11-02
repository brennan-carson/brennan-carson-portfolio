export interface ExperienceEntry {
  id: string;
  role: string;
  company: string;
  /** Display strings, e.g. "Jan 2022" and "Present". */
  startDate: string;
  endDate: string;
  location?: string | undefined;
  responsibilities: readonly string[];
  accomplishments: readonly string[];
  technologies: readonly string[];
}
