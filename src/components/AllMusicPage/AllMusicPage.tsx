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

  const rowRenderer = (prop: {key: string, index: number}) => (
    <div key={prop.key} style={prop.style}>
      <MusicTemplate music={songs[prop.index]} />
    </div>
  );
  useEffect(() => {
    findAllMusic();
  }, []);
  if (!songs.length) return <div>Loading...</div>;
  return (
    <div className={styles.allMusicPage}>
      <AutoSizer>
        {({ height, width }: AutoSizerProps) => (
          <List
            rowCount={songs.length}
            rowHeight={45}
            width={width}
            height={height}
            rowRenderer={rowRenderer}
          />
        )}
      </AutoSizer>
      {/* {songs.map((music) => <MusicTemplate key={music.path} music={music} />)} */}
    </div>
  );
}
