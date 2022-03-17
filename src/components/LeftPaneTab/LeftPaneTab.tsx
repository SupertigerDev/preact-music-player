import styles from './LeftPaneTab.module.css';

interface Props {
  title: string;
  selected?: boolean
}

export default function RightPaneTab(props: Props) {
  return (
    <div className={`${styles.rightPaneTab} ${props.selected && styles.selected}`}>
      {props.title}
    </div>
  );
}

RightPaneTab.defaultProps = {
  selected: false,
};
