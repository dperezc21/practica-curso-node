const fs = require('node:fs/promises');

//const stats = fs.statSync('./archivo.txt');
console.log("leyendo el primer archivo");
fs.readFile('./archivo.txt', 'utf-8')
.then(console.log);
console.log("haciendo cosas mientras lees el archivo")
