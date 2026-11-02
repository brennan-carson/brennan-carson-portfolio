import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

export function NotFoundPage() {
  return (
    <div className={styles.wrapper}>
      <h1>Page not found</h1>
      <p>The page you requested does not exist.</p>
      <Link to="/">Back to home</Link>
    </div>
  );
}
