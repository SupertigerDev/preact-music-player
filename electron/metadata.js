const FlakeId = require('@brecert/flakeid').default;

const path = require('path');
const fs = require('fs');
const musicMetadata = require('music-metadata');
const nodeVibrant = require('node-vibrant');
const database = require('./database');

const rootDir = path.join(__dirname, '../album_art_cache');

if (!fs.existsSync(rootDir)) {
  fs.mkdirSync(rootDir);
}

const flake = new FlakeId({
  mid: 42,
  timeOffset: (2013 - 1970) * 31536000 * 1000,
});

const fetchMetaData = (dir) => new Promise((res, rej) => {
  database.get('SELECT * FROM music_cache WHERE dir = ?', dir, (err, row) => {
    if (err) {
      rej(err);
      return;
    }
    res(row);
  });
});

async function albumArtDetails(metadata) {
  const cover = musicMetadata.selectCover(metadata.common.picture);
  if (!cover.data) return null;
  const ext = cover.format.split('/')[1];
  const artId = flake.gen().toString();
  const basename = `${artId}.${ext}`;
  fs.writeFileSync(`${rootDir}/${basename}`, cover.data);

  const color = (await nodeVibrant.from(cover.data).getPalette()).DarkVibrant.hex;
  return { basename, color };
}

async function getAndInsertMusicMetadata(dir) {
  const metadata = await musicMetadata.parseFile(dir);

  const albumArt = await albumArtDetails(metadata);
  if (!albumArt) {
    database.run('INSERT INTO music_cache (dir) VALUES (?, ?, ?)', [dir]);
  } else {
    database.run('INSERT INTO music_cache (dir, album_art_basename, color) VALUES (?, ?, ?)', [dir, albumArt.basename, albumArt.color]);
  }
  return { dir, album_art_basename: albumArt.basename, color: albumArt.color };
}

async function getMusicMetaData(dir) {
  const metadata = await fetchMetaData(dir);
  if (metadata) return metadata;
  return getAndInsertMusicMetadata(dir);
}

getMusicMetaData('D:/Fishie/Desktop/Mitis.mp3').then((res) => { console.log(res); });

module.exports = {
  getMusicMetaData,
};
