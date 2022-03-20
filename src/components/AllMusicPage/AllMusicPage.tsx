import { useEffect, useState } from 'preact/hooks';
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

  useEffect(() => {
    findAllMusic();
  }, []);
  return (
    <div className={styles.allMusicPage}>
      {songs.map((music) => <MusicTemplate key={music.path} music={music} />)}
    </div>
  );
}
