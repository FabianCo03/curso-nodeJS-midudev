// console.log(window);
// error común en NodeJS
// NodeJS es un entorno diferente al navegador
// Por lo tanto el objeto 'window' no existe
console.log(typeof window); // undefined

console.log(globalThis); // es la variable global tanto de Node y del navegador
