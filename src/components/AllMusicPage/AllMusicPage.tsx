import { useEffect, useState } from 'preact/hooks';
import { List, AutoSizer, AutoSizerProps } from 'react-virtualized';
import Music from '../../Music';
import MusicTemplate from '../MusicTemplate/MusicTemplate';
import styles from './AllMusicPage.module.css';

export default function AllMusicPage() {
  const [songs, setSongs] = useState<Music[]>([]);
  const findAllMusic = async () => {
    const music = await window.api.findAllMusic();
    const sorted = music.sort((a, b) => b.time.getTime() - a.time.getTime());
    setSongs(sorted);
  };

  const rowRenderer = (prop: {key: string, index: number, style: any}) => (
    <div key={prop.key} style={prop.style}>
      <MusicTemplate style={{ position: 'absolute', ...(!prop.index && { bottom: '5px' }) }} music={songs[prop.index]} />
    </div>
  );
  useEffect(() => {
    findAllMusic();
  }, []);
  if (!songs.length) return <div style={{ paddingTop: '100px' }}>Loading...</div>;
  return (
    <div className={styles.allMusicPage}>
      <AutoSizer className={styles.container}>
        {({ height, width }: AutoSizerProps) => (
          <List
            rowCount={songs.length}
            rowHeight={({ index }: any) => {
              if (!index) return 100;
              if (index >= songs.length - 1) return 125;
              return 45;
            }}
            width={width}
            height={height}
            rowRenderer={rowRenderer}
          />
        )}
      </AutoSizer>
    </div>
  );
}
