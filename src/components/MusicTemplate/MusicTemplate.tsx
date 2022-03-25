import Music from '../../Music';
import AlbumArt from '../AlbumArt/AlbumArt';
import styles from './MusicTemplate.module.css';

interface Props {
  music: Music
  // eslint-disable-next-line react/require-default-props
  style?: any
}

export default function MusicTemplate(props: Props) {
  return (
    <div className={styles.music} style={props.style}>
      <AlbumArt size={40} />
      <div className={styles.musicName}>{props.music.fileName}</div>
    </div>
  );
}
