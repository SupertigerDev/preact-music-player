const {
  contextBridge,
} = require('electron');

const find = require('find');
const path = require('path');
const fs = require('fs');
// const musicMetadata = require('music-metadata');

/**
 * @return {Promise<Array<String>>} ...
 */
const findFileAsync = async (pattern, root) => new Promise((resolve) => {
  find.file(pattern, root, resolve);
});

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('api', {
  async findAllMusic() {
    const songs = await findFileAsync(/\.mp3$/i, 'D:/Music');
    return songs.map((dir) => {
      const fileName = path.basename(dir);
      return {
        fileName,
        path: dir,
        time: fs.statSync(dir).mtime,
      };
    });
  },

});
