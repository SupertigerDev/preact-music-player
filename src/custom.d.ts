interface Window {
  api: {
    findAllMusic(): Promise<import('./Music').default[]>
  }
}
