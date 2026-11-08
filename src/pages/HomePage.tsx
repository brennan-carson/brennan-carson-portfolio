import { experience } from '../data/experience';
import { projects } from '../data/projects';
import { site } from '../data/site';
import { skillCategories } from '../data/skills';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ButtonLink } from '../components/ui/ButtonLink';
import { Section } from '../components/ui/Section';
import styles from './HomePage.module.css';

export function HomePage() {
  return (
    <>
      <section aria-labelledby="intro-heading" className={styles.hero}>
        <p className={styles.eyebrow}>{site.title}</p>
        <h1 id="intro-heading" className={styles.name}>
          {site.name}
        </h1>
        <p className={styles.summary}>{site.summary}</p>
        <div className={styles.actions}>
          {site.resumePath && (
            <ButtonLink href={`${import.meta.env.BASE_URL}${site.resumePath}`} variant="primary">
              Resume (PDF)
            </ButtonLink>
          )}
          <ButtonLink href={site.githubUrl}>GitHub</ButtonLink>
          {site.linkedinUrl && <ButtonLink href={site.linkedinUrl}>LinkedIn</ButtonLink>}
        </div>
      </section>

      <Section id="experience" title="Experience">
        {experience.length === 0 ? (
          <p className={styles.placeholder}>Experience details coming soon.</p>
        ) : (
          <ul className={styles.stack}>
            {experience.map((entry) => (
              <li key={entry.id}>
                <h3>
                  {entry.role}, {entry.company}
                </h3>
                <p className={styles.placeholder}>
                  {entry.startDate} &ndash; {entry.endDate}
                </p>
              </li>
            ))}
          </ul>
        )}
      </Section>

      <Section id="projects" title="Projects">
        <ul className={styles.grid}>
          {projects.map((project) => (
            <li key={project.slug} className={styles.gridItem}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </Section>

      <Section id="skills" title="Technical Skills">
        <div className={styles.grid}>
          {skillCategories.map((category) => (
            <div key={category.id}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              {category.skills.length === 0 ? (
                <p className={styles.placeholder}>To be added.</p>
              ) : (
                <ul className={styles.skillList}>
                  {category.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </Section>

      <Section id="contact" title="Contact">
        {site.email ? (
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
        ) : (
          <p className={styles.placeholder}>
            Contact details coming soon. In the meantime, reach out via{' '}
            <a href={site.githubUrl}>GitHub</a>.
          </p>
        )}
      </Section>
    </>
  );
}
