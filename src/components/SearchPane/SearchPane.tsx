import { HiSearch } from 'react-icons/hi';
import styles from './SearchPane.module.css';

export default function SearchPane() {
  return (
    <div className={styles.searchPane}>

      <div className={styles.container}>
        <input className={styles.input} type="text" placeholder="Search Locally & YouTube..." />
        <button className={styles.searchButton} type="button" label="Search"><HiSearch /></button>
      </div>
    </div>
  );
}
