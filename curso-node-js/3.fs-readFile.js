const fs = require("node:fs");

console.log("Leyendo primer archivo ...");
// forma sincrona readFileSync | asíncrona readFile
fs.readFile("./archivo.txt", "utf-8", (err, text) => {
  // callback
  // lee este archivo, codificalo, al terminar, sigas ejecutando clg(text)
  // pero mientras eso pasa, sigue ejecutando el siguiente clg
  console.log("Primer texto:", text);
});

console.log("Hacer cosas mientras lee el archivo ...");
// asíncronia, esto se debe hacer mientras se lee el archivo

console.log("Leyendo segundo archivo ...");
fs.readFile("./archivo2.txt", "utf-8", (err, secondText) => {
  console.log("Segundo text:", secondText);
});
