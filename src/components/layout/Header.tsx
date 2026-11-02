import { Link } from 'react-router-dom';
import { site } from '../../data/site';
import { ThemeToggle } from '../ui/ThemeToggle';
import { PrimaryNav } from '../navigation/PrimaryNav';
import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand}>
          {site.name}
        </Link>
        <PrimaryNav />
        <ThemeToggle />
      </div>
    </header>
  );
}
