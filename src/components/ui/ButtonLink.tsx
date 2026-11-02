import type { ReactNode } from 'react';
import styles from './ButtonLink.module.css';

interface ButtonLinkProps {
  href: string;
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

export function ButtonLink({ href, variant = 'secondary', children }: ButtonLinkProps) {
  const isExternal = /^https?:\/\//.test(href);
  const externalProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};

  return (
    <a href={href} className={`${styles.button} ${styles[variant]}`} {...externalProps}>
      {children}
      {isExternal && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
