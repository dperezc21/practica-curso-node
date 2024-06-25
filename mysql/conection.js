const mysql = require('mysql');

class ConectionMysql {

    #dataBaseName = "first_dataBase";
    #conection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: ''
    });

    conect() {
        this.#conection.connect((err) => {
            if(err) console.log("error ocurrido ", err);
            else console.log("conectado a mysql!!");
            this.#useTable();
            this.#createTable("user");
            //this.crearDataBase();
        })
    }

    crearDataBase() {
        let queryDataBase = `CREATE DATABASE ${this.#dataBaseName}`;
        
        this.#conection.query(queryDataBase, (err) => {
            if(err) console.log("error al crear database");
            console.log("Database Created Successfully !");
        })
    }

    #useTable() {
        let useDatabase = `USE ${this.#dataBaseName}`;
        this.#conection.query(useDatabase, (err) => {
            if(err) throw err;
            console.log(`using database ${this.#dataBaseName}`);
        });
    }

    #createTable(tableName) {
        let createTable = `create table ${tableName} (id VARCHAR(225), name VARCHAR(50), last_name VARCHAR(50))`;
        this.#conection.query(createTable, (err) => {
            if(err) throw err;
            console.log(`tabla ${tableName} creada`);
        })
    }
}

module.exports = ConectionMysql;

