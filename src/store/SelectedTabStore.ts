import { makeAutoObservable } from 'mobx';

type TabNames = 'ALL_MUSIC'

export default class SelectedTabStore {
  name: TabNames;

  component: any;

  constructor() {
    makeAutoObservable(this);
    this.name = 'ALL_MUSIC';
    this.component = null;
  }

  changeTab() {
    console.log(this.name);
  }
}
