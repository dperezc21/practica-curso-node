const fs = require('node:fs');
const path = require('node:path');

const text = process.argv[2] ?? 'Texto example';
//console.log("ñsdkmvñdf",path.basename())
const fileName = path.join('.','nuevo_file.txt');
fs.stat(fileName, (err, stat) => {
    console.log(stat.size)
});
console.log('found');

fs.writeFile(fileName, text, err =>{
    if(err) console.error(err);
    console.log('file writed')
});