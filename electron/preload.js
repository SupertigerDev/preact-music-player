const {
  contextBridge,
} = require('electron');

const find = require('find');
const musicMetadata = require('music-metadata');

/**
 * @return {Array<String>} ...
 */
const findFileAsync = async (pattern, root) => new Promise((resolve) => {
  find.file(pattern, root, resolve);
});

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld('api', {
  async findAllMusic() {
    const songs = await findFileAsync(/\.mp3$/i, 'D:/Music');

    const promises = songs.map((path) => musicMetadata.parseFile(path, {skipPostHeaders: true}).catch((err) => { console.log(path); }));

    const datas = await Promise.all(promises);
    
    return datas
  },

});
