const express = require('express');
const app = express();
const conectionDB = require('./conection');
const mysql = new conectionDB();
mysql.conect();
app.get('/', (req, res) => {
    res.status(200).send("HOME");
})

app.use((req, res) => {
    res.status(401).json({
        message: "page not found"
    })
})
app.listen(3000, () =>{
    console.log("runing in the port http://localhost:3000");
})