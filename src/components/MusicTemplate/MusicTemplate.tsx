import { useEffect, useState } from 'preact/hooks';
import Music from '../../Music';
import AlbumArt from '../AlbumArt/AlbumArt';
import styles from './MusicTemplate.module.css';

interface Props {
  music: Music
  // eslint-disable-next-line react/require-default-props
  style?: any
  isScrolling: boolean
}

export default function MusicTemplate(props: Props) {
  const [mounted, setMounted] = useState(false);
  const [metadata, setMetadata] = useState<any>(null);

  const fetchMetadata = async () => {
    const fetchedMetadata = await window.api.getMusicMetaData(props.music.path);
    setMetadata(fetchedMetadata);
  };
  useEffect(() => {
    if (!props.isScrolling && !mounted) {
      fetchMetadata();
      setMounted(true);
    }
  }, [props.isScrolling]);
  return (
    <div className={styles.music} style={{ ...props.style, background: metadata?.color }}>
      <AlbumArt base64Image={metadata?.base64Cover} size={60} />
      <div className={styles.musicName}>{props.music.fileName}</div>
    </div>
  );
}
