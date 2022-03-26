import { BsMusicNote } from 'react-icons/bs';
import styles from './AlbumArt.module.css';

interface Props {
  size: number;
  className?: string;
  base64Image?: string;
}

export default function AlbumArt(props: Props) {
  const size = `${props.size}px`;
  return (
    <div className={`${styles.albumArt} ${props.className}`} style={{ width: size, height: size }}>
      {!props.base64Image && <BsMusicNote />}
      {!!props.base64Image && <img className={styles.image} src={props.base64Image} alt="Album Art" />}
    </div>
  );
}

AlbumArt.defaultProps = {
  className: undefined,
  base64Image: undefined,
};
