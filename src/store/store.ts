import Navigator from './Navigator';
import NowPlaying from './NowPlaying';

export class Store {
  navigator: Navigator;

  nowPlaying: NowPlaying;

  constructor() {
    this.navigator = new Navigator();
    this.nowPlaying = new NowPlaying();
  }
}

export const store = new Store();
