const { BrowserWindow, app } = require('electron');
const path = require('path');

require('./metadata');

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    webPreferences: {
      preload: path.join(app.getAppPath(), 'electron', 'preload.js'),
    },
  });
  win.loadURL('http://localhost:3000');
});
