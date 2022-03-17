import { AiFillStar, AiFillFolder } from 'react-icons/ai';
import { BsFileMusicFill } from 'react-icons/bs';
import styles from './LeftPane.module.css';
import Tab from '../LeftPaneTab/LeftPaneTab';

export default function LeftPane() {
  return (
    <div className={styles.leftPane}>
      <div className={styles.title}>Library</div>
      <Tab title="All Music" Icon={BsFileMusicFill} />
      <Tab title="Folders" selected Icon={AiFillFolder} />
      <Tab title="Favorites" Icon={AiFillStar} />
    </div>
  );
}
