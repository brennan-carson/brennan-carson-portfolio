import { Link, useParams } from 'react-router-dom';
import { findProject } from '../data/projects';
import { StatusBadge } from '../components/ui/StatusBadge';
import { ButtonLink } from '../components/ui/ButtonLink';
import { NotFoundPage } from './NotFoundPage';
import styles from './ProjectPage.module.css';

export function ProjectPage() {
  const { slug } = useParams();
  const project = findProject(slug);

  if (!project) {
    return <NotFoundPage />;
  }

  return (
    <article className={styles.article}>
      <Link to="/#projects">&larr; All projects</Link>
      <header className={styles.header}>
        <h1>{project.name}</h1>
        <StatusBadge status={project.status} />
      </header>
      <p className={styles.tagline}>{project.tagline}</p>
      <p>{project.description}</p>
      {project.technologies.length > 0 && (
        <section aria-labelledby="tech-heading">
          <h2 id="tech-heading" className={styles.subheading}>
            Technologies
          </h2>
          <ul className={styles.tags}>
            {project.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </section>
      )}
      {project.links.length > 0 && (
        <div className={styles.links}>
          {project.links.map((link) => (
            <ButtonLink key={link.href} href={link.href}>
              {link.label}
            </ButtonLink>
          ))}
        </div>
      )}
    </article>
  );
}
