import Music from '../../Music';
import AlbumArt from '../AlbumArt/AlbumArt';
import styles from './MusicTemplate.module.css';

interface Props {
  music: Music
}

export default function MusicTemplate(props: Props) {
  return (
    <div className={styles.music}>
      <AlbumArt size={40} />
      <div className={styles.musicName}>{props.music.fileName}</div>
    </div>
  );
}
