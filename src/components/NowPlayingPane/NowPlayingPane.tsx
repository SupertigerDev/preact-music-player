import AlbumArt from '../AlbumArt/AlbumArt';
import styles from './NowPlayingPane.module.css';

export default function NowPlayingPane() {
  return (
    <div className={styles.nowPlayingPane}>
      <AlbumArt className={styles.albumArt} size={70} />
    </div>
  );
}
