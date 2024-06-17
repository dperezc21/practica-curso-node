const fs = require('node:fs');

//const stats = fs.statSync('./archivo.txt');
console.log("leyendo el primer archivo");
fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    console.log("INFORMACION DEL ARCHIVO " + typeof text);
});

console.log("haciendo cosas mientras lees el primer archivo")



fs.readFile('./archivo.txt', 'utf-8', (err, text) => {
    console.log("INFORMACION SEgundo ARCHIVO " + typeof text);
});

console.log('terminado')
/*const text = fs.readFileSync('./archivo.txt', 'utf-8');
console.log('texto 1'+typeof text)
console.log("haciendo cosas mientras lees el archivo")


const text2 = fs.readFileSync('./archivo.txt', 'utf-8');
console.log();
console.log('texto 2'+ typeof text2);*/