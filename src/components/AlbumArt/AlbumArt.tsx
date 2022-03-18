import { BsMusicNote } from 'react-icons/bs';
import styles from './AlbumArt.module.css';

interface Props {
  size: number;
  className?: string;
}

export default function AlbumArt(props: Props) {
  const size = `${props.size}px`;
  return (
    <div className={`${styles.albumArt} ${props.className}`} style={{ width: size, height: size }}>
      <BsMusicNote />
    </div>
  );
}

AlbumArt.defaultProps = {
  className: undefined,
};
