// .js -> por defecto utiliza CommonJS
// .mjs -> para utilizar EcmaScript Modules
// .cjs -> para utilizar CommonJS

import { sum, sub, mult } from "./sum.mjs";

console.log(sum(5, 8));
console.log(sub(5, 8));
console.log(mult(5, 8));
