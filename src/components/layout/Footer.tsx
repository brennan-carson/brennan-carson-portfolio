import { site } from '../../data/site';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>
          &copy; {new Date().getFullYear()} {site.name}
        </p>
        <ul className={styles.links} aria-label="Professional links">
          <li>
            <a href={site.githubUrl} target="_blank" rel="noopener noreferrer">
              GitHub<span className="sr-only"> (opens in a new tab)</span>
            </a>
          </li>
          {site.linkedinUrl && (
            <li>
              <a href={site.linkedinUrl} target="_blank" rel="noopener noreferrer">
                LinkedIn<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
          )}
          {site.email && (
            <li>
              <a href={`mailto:${site.email}`}>Email</a>
            </li>
          )}
        </ul>
      </div>
    </footer>
  );
}
