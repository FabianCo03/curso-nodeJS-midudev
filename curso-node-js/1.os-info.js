// al ser un entorno de ejecución
// nos da una biblioteca enorme de módulos nativos
// lo cual nos da acceso al sistema de archivos, al sistema operativo, internet

// info del SO
const os = require("node:os");

console.log("Info del SO");
console.log("_______________________");
console.log("Name SO: ", os.platform());
console.log("Version SO: ", os.release());
console.log("Architecture SO: ", os.arch());
console.log("CPUs SO: ", os.cpus());
console.log("Memory free SO: ", os.freemem() / 1024 / 1024);
console.log("Memory total SO: ", os.totalmem() / 1024 / 1024);
console.log("UpTime SO: ", os.uptime() / 60 / 60);
