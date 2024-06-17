const fs = require('node:fs/promises');
const path = require('node:path');

const folder = process.argv[2] ?? '.'; 

function filesAsync(folder, files) {
    return files.map(async file => {
        const filePath = path.join(folder, file);
        let stats;
        try {
            stats = await fs.stat(filePath);
        } catch {
            console.error(`Error al leer el archivo ${file}`);
            process.exit(1);
        }
        const isDirectory = stats.isDirectory() ? 'Dir' : 'file';
        const size = stats.size;
        const modifyDate = stats.mtime.toLocaleString();

        return `${isDirectory} nombre: ${file} tamaño: ${size} modifided: ${modifyDate}`;
    });
}

fs.readdir(folder)
.then(files => {
    Promise.all(filesAsync(folder,files)).then(data => {
        //data.forEach(d => console.log(d))
    }).catch(console.error);
}).catch(console.error)