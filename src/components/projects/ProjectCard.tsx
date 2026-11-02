import { Link } from 'react-router-dom';
import type { Project } from '../../types/project';
import { StatusBadge } from '../ui/StatusBadge';
import styles from './ProjectCard.module.css';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <h3 className={styles.title}>
          <Link to={`/projects/${project.slug}`} className={styles.link}>
            {project.name}
          </Link>
        </h3>
        <StatusBadge status={project.status} />
      </div>
      <p className={styles.tagline}>{project.tagline}</p>
      {project.technologies.length > 0 && (
        <ul className={styles.tags} aria-label="Technologies">
          {project.technologies.map((tech) => (
            <li key={tech} className={styles.tag}>
              {tech}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
