import { experience } from '../data/experience';
import { site } from '../data/site';
import { skillCategories } from '../data/skills';
import { Section } from '../components/ui/Section';
import styles from './AboutPage.module.css';

export function AboutPage() {
  return (
    <div className={styles.page}>
      <header className={styles.intro}>
        <p className={styles.eyebrow}>Profile / Software engineering</p>
        <h1>{site.name}</h1>
        <p className={styles.summary}>{site.summary}</p>
      </header>

      <Section id="experience" title="Engineering Experience" kicker="Experience / 01">
        <ul className={styles.experienceList}>
          {experience.map((entry) => (
            <li key={entry.id}>
              <article className={styles.experienceEntry}>
                <header className={styles.experienceHeader}>
                  <div>
                    <h3>
                      {entry.role}, {entry.company}
                    </h3>
                    <p className={styles.muted}>
                      {entry.startDate} &ndash; {entry.endDate}
                    </p>
                  </div>
                </header>
                {entry.accomplishments.length > 0 && (
                  <ul className={styles.detailList} aria-label="Selected engineering contributions">
                    {entry.accomplishments.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </article>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="skills" title="Technical Skills" kicker="Toolkit / 02">
        <div className={styles.skillGrid}>
          {skillCategories.map((category) => (
            <section key={category.id} aria-labelledby={`${category.id}-heading`}>
              <h3 id={`${category.id}-heading`} className={styles.subheading}>
                {category.title}
              </h3>
              <ul className={styles.tags}>
                {category.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </Section>

      <Section id="interests" title="Engineering Interests" kicker="Curiosity / 03">
        <ul className={styles.interestGrid}>
          {site.interests.map((interest) => (
            <li key={interest.id} className={styles.interest}>
              <h3 className={styles.subheading}>{interest.title}</h3>
              <p className={styles.muted}>{interest.description}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section id="contact" title="Contact" kicker="Say hello / 04">
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
    </div>
  );
}
