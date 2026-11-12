import { Link } from 'react-router-dom';
import styles from './PrimaryNav.module.css';

const items = [
  { to: '/#experience', label: 'Experience' },
  { to: '/#projects', label: 'Projects' },
  { to: '/#skills', label: 'Skills' },
  { to: '/#education', label: 'Education' },
  { to: '/#contact', label: 'Contact' },
] as const;

export function PrimaryNav() {
  return (
    <nav aria-label="Primary">
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.to}>
            <Link to={item.to} className={styles.link}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
