import { store } from '../../store/store';
import Clickable from '../Clickable/Clickable';
import styles from './LeftPaneTab.module.css';

interface Props {
  page: {
    name: string;
    id: string;
    Icon: any
    component: any;
  }
  selected?: boolean
}

export default function RightPaneTab(props: Props) {
  const { Icon, name } = props.page;
  const onClicked = () => {
    store.navigator.changeTab(props.page);
  };
  return (
    <Clickable onClick={onClicked} className={`${styles.rightPaneTab} ${props.selected && styles.selected}`}>
      <Icon className={styles.icon} />
      {name}
    </Clickable>
  );
}

RightPaneTab.defaultProps = {
  selected: false,
};
