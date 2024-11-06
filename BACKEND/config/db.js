const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: "localhost",
    password: "1808",
    user: "root",
    database: "computerstore"
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to the database');
});

module.exports = connection;
