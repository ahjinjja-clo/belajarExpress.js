import mysql from "mysql";

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'',
    database: 'db_univ'
});

export default db;