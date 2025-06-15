const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Ścieżka do bazy danych
const dbPath = path.resolve(__dirname, '../data/database.db');

// Połączenie z bazą
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Błąd połączenia z bazą danych:', err.message);
  } else {
    console.log('Połączono z bazą danych SQLite');
  }
});

module.exports = db;
