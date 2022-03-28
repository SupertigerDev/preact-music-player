import { makeAutoObservable, runInAction } from 'mobx';

export default class NowPlaying {
  path: string | null;

  metadata: any | null;

  component: any;

  constructor() {
    makeAutoObservable(this);
    this.path = null;
    this.metadata = null;
  }

  async playMusic(musicDir: string) {
    const metadata = await window.api.getMetadata(musicDir);
    runInAction(() => {
      this.metadata = metadata;
      this.path = musicDir;
    });
  }
}
