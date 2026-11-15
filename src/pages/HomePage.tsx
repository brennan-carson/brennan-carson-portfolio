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
                <article className={styles.experienceEntry}>
                  <header className={styles.experienceHeader}>
                    <div>
                      <h3>
                        {entry.role}, {entry.company}
                      </h3>
                      <p className={styles.placeholder}>
                        {entry.startDate} &ndash; {entry.endDate}
                        {entry.location && ` · ${entry.location}`}
                      </p>
                    </div>
                  </header>
                  {entry.accomplishments.length > 0 && (
                    <ul className={styles.detailList} aria-label="Selected accomplishments">
                      {entry.accomplishments.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {entry.responsibilities.length > 0 && (
                    <ul className={styles.detailList} aria-label="Responsibilities">
                      {entry.responsibilities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  <ul className={styles.skillList} aria-label="Technologies used">
                    {entry.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </article>
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

      <Section id="education" title="Education">
        <h3>{site.education.institution}</h3>
        <p className={styles.placeholder}>
          {site.education.degree} · GPA {site.education.gpa} · {site.education.graduationDate}
        </p>
      </Section>

      <Section id="contact" title="Contact">
        <ul className={styles.contactLinks}>
          {site.email && (
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          )}
          {site.linkedinUrl && (
            <li>
              <a href={site.linkedinUrl} target="_blank" rel="noopener noreferrer">
                LinkedIn<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          )}
        </ul>
      </Section>
    </>
  );
}
