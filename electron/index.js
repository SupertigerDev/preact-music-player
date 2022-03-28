const { BrowserWindow, app, ipcMain } = require('electron');
const path = require('path');

const { getMusicMetaData } = require('./metadata');

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      preload: path.join(app.getAppPath(), 'electron', 'preload.js'),
    },
  });
  win.loadURL('http://localhost:3000');

  ipcMain.handle('getMetadata', async (event, dir) => {
    const metadata = await getMusicMetaData(dir);
    return metadata;
  });
});
