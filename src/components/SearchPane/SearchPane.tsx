import styles from './SearchPane.module.css';

export default function SearchPane() {
  return (
    <div className={styles.searchPane}>
      <input className={styles.input} type="text" placeholder="Search Locally & YouTube..." />
      <button className={styles.searchButton} type="button">Search</button>
    </div>
  );
}
