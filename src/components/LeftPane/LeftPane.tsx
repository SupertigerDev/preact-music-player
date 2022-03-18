import { observer } from 'mobx-react-lite';
import styles from './LeftPane.module.css';
import Tab from '../LeftPaneTab/LeftPaneTab';
import pages from '../../pages';
import { store } from '../../store/store';

const Tabs = observer(() => {
  const pagesArray = Object.values(pages);
  const selectedId = store.navigator.id;
  return (
    <>
      {pagesArray.map((page) => (
        <Tab key={page.id} page={page} selected={selectedId === page.id} />
      ))}
    </>
  );
});

export default function LeftPane() {
  return (
    <div className={styles.leftPane}>
      <div className={styles.title}>Library</div>
      <Tabs />
    </div>
  );
}
