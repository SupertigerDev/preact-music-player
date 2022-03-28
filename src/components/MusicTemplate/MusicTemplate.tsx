import { observer } from 'mobx-react-lite';
import { useEffect, useState } from 'preact/hooks';
import Music from '../../Music';
import { store } from '../../store/store';
import AlbumArt from '../AlbumArt/AlbumArt';
import styles from './MusicTemplate.module.css';

interface Props {
  music: Music
  // eslint-disable-next-line react/require-default-props
  style?: any
  isScrolling: boolean
}

const MusicTemplate = observer((props: Props) => {
  const [mounted, setMounted] = useState(false);
  const [metadata, setMetadata] = useState<any>(null);
  const [hovering, setHovering] = useState(false);

  const isPlaying = store.nowPlaying.path === props.music.path;

  const fetchMetadata = async () => {
    const fetchedMetadata = await window.api.getMetadata(props.music.path);
    setMetadata(fetchedMetadata);
  };
  const onClick = () => {
    store.nowPlaying.playMusic(props.music.path);
  };
  useEffect(() => {
    if (!props.isScrolling && !mounted) {
      fetchMetadata();
      setMounted(true);
    }
  }, [props.isScrolling]);
  return (
    <div
      className={styles.music}
      style={{ ...props.style }}
      onMouseOver={() => setHovering(true)}
      onMouseOut={() => setHovering(false)}
      onFocus={() => setHovering(true)}
      onBlur={() => setHovering(false)}
      role="button"
      onKeyDown={(event) => event.key === 'Enter' && onClick()}
      tabIndex={0}
      onClick={onClick}
    >
      {((hovering || isPlaying) && !metadata?.album_art_basename)
    && <div className={styles.background} style={{ background: 'rgba(255,255,255,0.2)', filter: 'initial' }} />}
      {((hovering || isPlaying) && !!metadata?.album_art_basename)
    && <img className={styles.background} src={`../album_art_cache/${metadata?.album_art_basename}`} alt="" />}
      <AlbumArt basename={metadata?.album_art_basename} size={60} />
      <div className={styles.musicDetails}>
        <div className={styles.musicName}>{metadata?.title || props.music.fileName}</div>
        {!!metadata?.artist && <div className={styles.artistName}>{metadata.artist}</div>}
      </div>
    </div>

  );
});

export default MusicTemplate;
