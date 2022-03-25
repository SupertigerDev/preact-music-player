interface Window {
  api: {
    findAllMusic(): Promise<import('./Music').default[]>
    getMusicMetaData(): Promise<any>
  }
}
