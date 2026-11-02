import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Footer } from './Footer';
import { Header } from './Header';
import styles from './SiteLayout.module.css';

export function SiteLayout() {
  const { hash, pathname } = useLocation();

  // React Router does not scroll to hash targets on client-side navigation.
  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return (
    <div className={styles.shell}>
      <a href="#main" className={styles.skipLink}>
        Skip to main content
      </a>
      <Header />
      <main id="main" className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
