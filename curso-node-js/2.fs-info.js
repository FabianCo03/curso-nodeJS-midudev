// file system

const fs = require("node:fs"); // a partir de Node 16 se recomienda poner 'node:' antes de fs

const stats = fs.statSync("./archivo.txt");

console.log(
  stats.isFile(), // si es fichero
  stats.isDirectory(), // si es directorio
  stats.isSymbolicLink(), // si es enlace simbólico
  stats.size // tamaño en bytes
);
