import type { ProjectStatus } from '../../types/project';
import styles from './StatusBadge.module.css';

const labels: Record<ProjectStatus, string> = {
  'in-development': 'In Development',
  completed: 'Completed',
  planned: 'Planned',
};

export function StatusBadge({ status }: { status: ProjectStatus }) {
  return <span className={`${styles.badge} ${styles[status]}`}>{labels[status]}</span>;
}
