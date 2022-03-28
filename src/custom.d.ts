interface Window {
  api: {
    getMetadata(dir: string) : Promise<any>;
    findAllMusic(): Promise<import('./Music').default[]>
  }
}
