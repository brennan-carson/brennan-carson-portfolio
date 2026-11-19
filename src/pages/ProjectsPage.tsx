import { ProjectCard } from '../components/projects/ProjectCard';
import { Section } from '../components/ui/Section';
import { projects } from '../data/projects';
import styles from './ProjectsPage.module.css';

export function ProjectsPage() {
  const activeProjects = projects.filter((project) => project.status === 'in-development');
  const completedProjects = projects.filter((project) => project.status === 'completed');
  const projectsToConfirm = projects.filter((project) => project.status === 'status-to-confirm');

  return (
    <div className={styles.page}>
      <header className={styles.intro}>
        <p className={styles.eyebrow}>Work / Project index</p>
        <h1>Projects</h1>
        <p className={styles.summary}>A few things I’ve built and am working on.</p>
      </header>

      {activeProjects.length > 0 && (
        <Section id="in-development" title="In Development" kicker="Active work">
          <ul className={styles.grid}>
            {activeProjects.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </Section>
      )}

      {completedProjects.length > 0 && (
        <Section id="completed" title="Completed" kicker="Delivered work">
          <ul className={styles.grid}>
            {completedProjects.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </Section>
      )}

      {projectsToConfirm.length > 0 && (
        <Section id="status-to-confirm" title="Status to Confirm" kicker="Needs verification">
          <ul className={styles.grid}>
            {projectsToConfirm.map((project) => (
              <li key={project.slug}>
                <ProjectCard project={project} />
              </li>
            ))}
          </ul>
        </Section>
      )}
    </div>
  );
}
