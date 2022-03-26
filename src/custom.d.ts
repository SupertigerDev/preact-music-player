interface Window {
  api: {
    findAllMusic(): Promise<import('./Music').default[]>
    getMusicMetaData(path: string): Promise<any>
  }
}
