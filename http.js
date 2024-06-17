const http = require('node:http');
const fs = require('node:fs');


const processRequest = (req, res) => {
    if(req.url == '/') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain; charset=utf-8');
        res.end('Bienvenido a mi página')
    } else if(req.url == '/imagen-super-bonita.png') {
        fs.readFile('./image.png', (err, data) => {
            if(err) res.end('error con la imagen');
            else {
                res.setHeader('Content-Type', 'image/png');
                res.end(data);
            }
        })
    }
}

const server = http.createServer(processRequest);

server.listen(3000, () => {
    console.log('server listening on port http://localhost:3000');
});

