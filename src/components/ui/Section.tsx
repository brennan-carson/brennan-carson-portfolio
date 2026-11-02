import type { ReactNode } from 'react';
import styles from './Section.module.css';

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, title, children }: SectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section id={id} aria-labelledby={headingId} className={styles.section}>
      <h2 id={headingId} className={styles.heading}>
        {title}
      </h2>
      {children}
    </section>
  );
}
