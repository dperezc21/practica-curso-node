const http = require('node:http');
const fs = require('node:fs');


const processRequest = (req, res) => {
   res.end('hola mundo');
}

const server = http.createServer(processRequest);

server.listen(3000, () => {
    console.log('server listening on port http://localhost:3000');
});

