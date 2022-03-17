import styles from './LeftPane.module.css';
import Tab from '../LeftPaneTab/LeftPaneTab';

export default function LeftPane() {
  return (
    <div className={styles.leftPane}>
      <div className={styles.title}>Library</div>
      <Tab title="All Music" />
      <Tab title="Folders" selected />
      <Tab title="Favorites" />
    </div>
  );
}
