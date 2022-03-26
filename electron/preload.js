const {
  contextBridge,
} = require('electron');

const find = require('find');
const path = require('path');
const fs = require('fs');
const musicMetadata = require('music-metadata');
const nodeVibrant = require('node-vibrant');

/**
 * @return {Promise<Array<String>>} ...
 */
const findFileAsync = async (pattern, root) => new Promise((resolve) => {
  find.file(pattern, root, resolve);
});

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('api', {
  async getMusicMetaData(dir) {
    const metadata = await musicMetadata.parseFile(dir);
    const cover = musicMetadata.selectCover(metadata.common.picture);
    return {
      ...(cover && {
        base64Cover: `data:${cover.format};base64,${cover.data.toString('base64')}`,
        color: (await nodeVibrant.from(cover.data).getPalette()).DarkVibrant.hex,
      }),
    };
  },
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
