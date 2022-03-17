import Navigator from './Navigator';

export class Store {
  navigator: Navigator;

  constructor() {
    this.navigator = new Navigator();
  }
}

export const store = new Store();
