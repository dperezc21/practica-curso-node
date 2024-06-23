// .js por defecto utiliza CommonJS
// .mjs para utilizar ES Modules
// cjs para utilizar CommonJS

const express = require('express');
const app = express();

const users = require('./routes/user');

app.use('/users', users);

app.get('/', (req, res) => {
    res.send('pagina inicial!!!!');
})

app.use((request, response) => {
    response.status(404).send("pagina no encontrada");
});


app.listen(3000, () => {
    console.log('listening in the port http://localhost:3000');
})