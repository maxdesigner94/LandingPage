// scripts/copyIndex.js
const fs = require('fs');
const path = require('path');

const rootIndex = path.resolve(__dirname, '..', 'index.html');
const publicDir = path.resolve(__dirname, '..', 'public');
const publicIndex = path.join(publicDir, 'index.html');

try {
  if (!fs.existsSync(rootIndex)) {
    console.error('copyIndex: index.html non trovato nella root.');
    process.exit(0);
  }

  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  fs.copyFileSync(rootIndex, publicIndex);
  console.log('copyIndex: index.html copiato in /public/index.html');
} catch (err) {
  console.error('copyIndex: errore durante la copia', err);
  process.exit(1);
}
