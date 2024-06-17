const express = require('express');
const app = express();

const middel = (req, res, next) => {
    const { query } = req;
    if(!query.hola) {
        return res.status(400).send("no se encontro query");
    }
    next();
}

app.disable('x-powered-by');

app.use((req, res, next) => {
    const { query } = req;
    console.log('mi primer midelware'+ JSON.stringify(query));
    next();
})

app.get('/', middel, (req, res) => {
    res.status(200).send('hola mundo');
});

app.use((req, res) => {
    res.status(404).send("no encontrado");
})

app.listen(3000,  () => {
    console.log('server listening on port http://localhost:3000');
});