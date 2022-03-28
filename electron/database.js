const sqlite3 = require('sqlite3');

const database = new sqlite3.Database('music-player.db');

database.run(`CREATE TABLE if not exists music_cache (
  dir TEXT,
  album_art_basename TEXT,
  color TEXT,
  title TEXT,
  artist TEXT
);`);

module.exports = database;
