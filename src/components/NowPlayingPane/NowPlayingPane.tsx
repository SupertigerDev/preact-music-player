import { store } from '../../store/store';
import AlbumArt from '../AlbumArt/AlbumArt';
import styles from './NowPlayingPane.module.css';

export default function NowPlayingPane() {
  const { nowPlaying } = store;
  const { metadata } = nowPlaying;

  const basename = nowPlaying.path?.split('\\').pop()?.split('/')?.pop();

  const title = metadata?.title || basename;
  return (
    <div className={styles.nowPlayingPane}>
      <AlbumArt
        className={styles.albumArt}
        size={70}
        basename={nowPlaying?.metadata.album_art_basename}
      />
      <div className={styles.musicDetails}>
        <div className={styles.musicName}>{title}</div>
        {!!metadata?.artist && <div className={styles.artistName}>{metadata.artist}</div>}
      </div>
    </div>
  );
}
