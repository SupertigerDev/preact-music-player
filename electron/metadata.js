const FlakeId = require('@brecert/flakeid').default;

const path = require('path');
const fs = require('fs');
const musicMetadata = require('music-metadata');
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
  return new Promise((res) => {
    const cover = musicMetadata.selectCover(metadata.common.picture);
    if (!cover?.data) res(null);
    const ext = cover.format.split('/')[1];
    const artId = flake.gen().toString();
    const basename = `${artId}.${ext}`;
    fs.writeFile(`${rootDir}/${basename}`, cover.data, async () => {
      res({ basename });
    });
  });
}

async function getAndInsertMusicMetadata(dir) {
  const metadata = await musicMetadata.parseFile(dir).catch(() => {});
  const title = metadata?.common?.title;
  const artist = metadata?.common?.artist;

  const albumArt = await albumArtDetails(metadata);
  if (!albumArt) {
    database.run('INSERT INTO music_cache (dir, title, artist) VALUES (?, ?, ?)', [dir, title, artist], () => {});
  } else {
    database.run('INSERT INTO music_cache (dir, album_art_basename, title, artist) VALUES (?, ?, ?, ?)', [dir, albumArt.basename, title, artist], () => {});
  }
  return {
    dir, album_art_basename: albumArt?.basename, title, artist,
  };
}

async function getMusicMetaData(dir) {
  const metadata = await fetchMetaData(dir);
  if (metadata) return metadata;
  return getAndInsertMusicMetadata(dir);
}

module.exports = {
  getMusicMetaData,
};
