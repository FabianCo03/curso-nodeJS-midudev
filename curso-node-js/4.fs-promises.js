const fs = require("node:fs/promises");

/*
Esto sólo en módulos nativos que no tiene prmoesas nativas

promisify solo se utiliza en casos que no se esté dando una versión con promesas
crea la versión de promesas
un proyecto debe hacerse asíncrono (promises, async await)

const { promisify } = require("node:util");
const readFilePromise = promisify(fs.readFile);
*/
console.log("Leyendo primer archivo ...");
fs.readFile("./archivo.txt", "utf-8").then((text) => {
  console.log("Primer texto:", text);
});

console.log("Hacer cosas mientras lee el archivo ...");

console.log("Leyendo segundo archivo ...");
fs.readFile("./archivo2.txt", "utf-8").then((text) => {
  console.log("Segundo text:", text);
});
