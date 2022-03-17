import SearchPane from '../SearchPane/SearchPane';
import styles from './RightPane.module.css';

export default function RightPane() {
  return (
    <div className={styles.leftPane}>
      <SearchPane />
    </div>
  );
}
