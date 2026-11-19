import { site } from '../data/site';
import styles from './HomePage.module.css';

export function HomePage() {
  return (
    <section aria-labelledby="intro-heading" className={styles.hero}>
      <h1 id="intro-heading" className={styles.name}>
        {site.name}
      </h1>
      <p className={styles.title}>{site.title}</p>
    </section>
  );
}
