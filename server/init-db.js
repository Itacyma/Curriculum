// Script di inizializzazione del database SQLite
const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'db.sqlite');
const sqlPath = path.join(__dirname, 'init-db.sql');

// Elimina il db esistente (opzionale, solo se vuoi sempre ricreare da zero)
if (fs.existsSync(dbPath)) {
  fs.unlinkSync(dbPath);
}

const db = new sqlite3.Database(dbPath);

const schema = fs.readFileSync(sqlPath, 'utf8');

db.exec(schema, (err) => {
  if (err) {
    console.error('Errore nella creazione delle tabelle:', err.message);
  } else {
    console.log('Database inizializzato con successo!');
  }
  db.close();
});
