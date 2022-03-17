import { makeAutoObservable } from 'mobx';

export interface Page {
  component: any;
  id: string;
}

export default class SelectedTabStore {
  id: string | null;

  component: any;

  constructor() {
    makeAutoObservable(this);
    this.id = 'ALL_MUSIC';
    this.component = null;
  }

  changeTab(page: Page) {
    this.id = page.id;
    this.component = page.component;
  }
}
