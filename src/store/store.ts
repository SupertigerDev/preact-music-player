import SelectedTabStore from './SelectedTabStore';

export class Store {
  selectedTab: SelectedTabStore;

  constructor() {
    this.selectedTab = new SelectedTabStore();
  }
}

export const store = new Store();
