import type { ReactNode } from 'react';
import styles from './Section.module.css';

interface SectionProps {
  id: string;
  title: string;
  kicker?: string;
  children: ReactNode;
}

export function Section({ id, title, kicker, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className={styles.section}>
      <header className={styles.header}>
        {kicker && <p className={styles.kicker}>{kicker}</p>}
        <h2 id={headingId} className={styles.heading}>
          {title}
        </h2>
      </header>
      {children}
    </section>
  );
}
