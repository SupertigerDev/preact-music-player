import styles from './LeftPaneTab.module.css';

interface Props {
  title: string;
  Icon: any;
  selected?: boolean
}

export default function RightPaneTab(props: Props) {
  const { Icon } = props;
  return (
    <div className={`${styles.rightPaneTab} ${props.selected && styles.selected}`}>
      <Icon className={styles.icon} />
      {props.title}
    </div>
  );
}

RightPaneTab.defaultProps = {
  selected: false,
};
