import { BsMusicNote } from 'react-icons/bs';
import styles from './AlbumArt.module.css';

interface Props {
  size: number;
  className?: string;
  basename?: string;
}

export default function AlbumArt(props: Props) {
  const size = `${props.size}px`;
  return (
    <div className={`${styles.albumArt} ${props.className}`} style={{ width: size, height: size }}>
      {!props.basename && <BsMusicNote />}
      {!!props.basename && <img className={styles.image} src={`../album_art_cache/${props.basename}`} alt="Album Art" />}
    </div>
  );
}

AlbumArt.defaultProps = {
  className: undefined,
  basename: undefined,
};
